import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/mail'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const { name, email, subject, message, phone } = data

    // Professional HTML Email Template for Contact Form
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background-color: #111827; color: #ffffff; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
          .header span { color: #DC2626; }
          .content { padding: 40px; background-color: #ffffff; }
          .info-grid { margin-bottom: 30px; border-bottom: 1px solid #f0f0f0; padding-bottom: 20px; }
          .info-row { display: flex; margin-bottom: 12px; font-size: 14px; }
          .info-label { font-weight: bold; color: #666; width: 100px; shrink: 0; }
          .info-value { color: #111827; }
          .message-box { background-color: #f9fafb; border-left: 4px solid #DC2626; padding: 20px; border-radius: 0 8px 8px 0; margin-top: 20px; }
          .message-title { font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #DC2626; margin-bottom: 8px; }
          .footer { background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; }
          .footer a { color: #DC2626; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Raghuram <span>Medicare</span></h1>
            <p style="font-size: 12px; margin-top: 5px; opacity: 0.8; text-transform: uppercase; letter-spacing: 0.2em;">Contact Form Submission</p>
          </div>
          <div class="content">
            <div class="info-grid">
              <div class="info-row">
                <div class="info-label">Name:</div>
                <div class="info-value">${name}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Email:</div>
                <div class="info-value"><a href="mailto:${email}" style="color: #DC2626; text-decoration: none;">${email}</a></div>
              </div>
              <div class="info-row">
                <div class="info-label">Phone:</div>
                <div class="info-value">${phone || 'Not provided'}</div>
              </div>
              <div class="info-row" style="margin-top: 15px;">
                <div class="info-label">Subject:</div>
                <div class="info-value" style="font-weight: 600;">${subject}</div>
              </div>
            </div>
            
            <div class="message-title">Message Details</div>
            <div class="message-box">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
         
        </div>
      </body>
      </html>
    `

    // Email to clinic
    await sendEmail({
      to: process.env.EMAIL_TO || '',
      subject: `[Contact Form] ${subject} - ${name}`,
      text: `New Contact Form Submission: ${subject}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`,
      html
    })

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will respond within 24 hours.',
    }, { status: 200 })

  } catch (error) {
    console.error('Error processing contact message:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to process your message'
    }, { status: 500 })
  }
}
