import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, service } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Email template for dental clinic
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nova Mensagem - Dontorrir</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
          }
          .container {
            background-color: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #7baa6a;
          }
          .logo {
            font-size: 28px;
            font-weight: bold;
            color: #2c335a;
            margin-bottom: 10px;
          }
          .subtitle {
            color: #7baa6a;
            font-size: 16px;
            margin: 0;
          }
          .content {
            margin-bottom: 30px;
          }
          .field {
            margin-bottom: 15px;
          }
          .label {
            font-weight: bold;
            color: #2c335a;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            background-color: #f8f9fa;
            padding: 10px;
            border-radius: 6px;
            border-left: 4px solid #7baa6a;
          }
          .message-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #e9ecef;
            margin-top: 10px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
            color: #6c757d;
            font-size: 14px;
          }
          .cta {
            background-color: #7baa6a;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            display: inline-block;
            margin-top: 15px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Dontorrir</div>
            <p class="subtitle">Clínica Odontológica</p>
          </div>
          
          <div class="content">
            <h2 style="color: #2c335a; margin-bottom: 20px;">Nova Mensagem de Contato</h2>
            
            <div class="field">
              <span class="label">Nome:</span>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <span class="label">Email:</span>
              <div class="value">${email}</div>
            </div>
            
            <div class="field">
              <span class="label">Telefone:</span>
              <div class="value">${phone}</div>
            </div>
            
            ${service ? `
            <div class="field">
              <span class="label">Serviço de Interesse:</span>
              <div class="value">${service}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <span class="label">Mensagem:</span>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>Esta mensagem foi enviada através do formulário de contato do site.</p>
            <p>Data: ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</p>
            <a href="https://wa.me/5581998921500" class="cta">Responder pelo WhatsApp</a>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['receberpedro09@gmail.com'],
      subject: `Nova Mensagem de ${name} - Dontorrir`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar email. Tente novamente.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    );
  }
} 