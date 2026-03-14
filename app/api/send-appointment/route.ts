import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/mail'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const { fullName, email, phone, date, time, service, symptoms, message } = data

    // Professional HTML Email Template for Appointment Form
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background-color: #DC2626; color: #ffffff; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
          .header p { margin: 5px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.9; }
          .content { padding: 40px; background-color: #ffffff; }
          .appointment-card { background-color: #fdf2f2; border: 1px solid #fee2e2; border-radius: 12px; padding: 25px; margin-bottom: 30px; }
          .card-title { font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #B91C1C; margin-bottom: 15px; border-bottom: 1px solid #fecaca; padding-bottom: 10px; }
          .info-row { display: flex; margin-bottom: 12px; font-size: 14px; }
          .info-label { font-weight: bold; color: #991B1B; width: 120px; shrink: 0; }
          .info-value { color: #111827; flex: 1; }
          .section-title { font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #666; margin: 30px 0 10px; }
          .message-box { background-color: #f9fafb; border-left: 4px solid #DC2626; padding: 20px; border-radius: 4px; font-size: 14px; color: #4b5563; }
          .footer { background-color: #111827; padding: 30px; text-align: center; font-size: 12px; color: #9ca3af; }
          .footer a { color: #DC2626; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Raghuram Medicare</h1>
            <p>New Appointment Request</p>
          </div>
          <div class="content">
            <div class="appointment-card">
              <div class="card-title">Appointment Details</div>
              <div class="info-row">
                <div class="info-label">Service:</div>
                <div class="info-value" style="font-weight: 600; color: #DC2626;">${service}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Date:</div>
                <div class="info-value">${date}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Time:</div>
                <div class="info-value">${time}</div>
              </div>
            </div>

            <div class="section-title">Patient Information</div>
            <div class="info-row">
              <div class="info-label">Full Name:</div>
              <div class="info-value">${fullName}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Email:</div>
              <div class="info-value"><a href="mailto:${email}" style="color: #DC2626; text-decoration: none;">${email}</a></div>
            </div>
            <div class="info-row">
              <div class="info-label">Phone:</div>
              <div class="info-value"><a href="tel:${phone}" style="color: #DC2626; text-decoration: none;">${phone}</a></div>
            </div>

            ${symptoms ? `
              <div class="section-title">Current Symptoms</div>
              <div class="message-box">${symptoms.replace(/\n/g, '<br>')}</div>
            ` : ''}

            ${message ? `
              <div class="section-title">Additional Notes</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            ` : ''}
          </div>
          
        </div>
      </body>
      </html>
    `

    // Email to clinic
    await sendEmail({
      to: process.env.EMAIL_TO || '',
      subject: `[Appointment] ${service} - ${fullName}`,
      text: `New Appointment Request: ${service}\n\nFull Name: ${fullName}\nDate: ${date}\nTime: ${time}\nPhone: ${phone}\nSymptoms: ${symptoms || 'N/A'}`,
      html
    })

    return NextResponse.json({
      success: true,
      message: 'Appointment request received. We will contact you shortly.',
    }, { status: 200 })

  } catch (error) {
    console.error('Error processing appointment:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to process appointment request'
    }, { status: 500 })
  }
}
