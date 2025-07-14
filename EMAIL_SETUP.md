# 📧 Sistema de Email - Dontorrir

## 🚀 Configuração Rápida

### 1. Obter Chave da API Resend
1. Acesse: https://resend.com
2. Crie uma conta gratuita
3. Vá em "API Keys" e crie uma nova chave
4. Copie a chave

### 2. Configurar Variável de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
RESEND_API_KEY=sua_chave_aqui
```

### 3. Mudar Email de Destino (FÁCIL!)
Para mudar o email que recebe as mensagens, edite o arquivo:
`src/app/api/send-email/route.ts`

**Linha 89** - Mude esta linha:
```typescript
to: ['receberpedro09@gmail.com'], // Email atual (teste)
```

Para:
```typescript
to: ['contato@clinica.com'], // Email do estabelecimento
```

## ✨ Funcionalidades

- ✅ **Email Profissional** - Template bonito e responsivo
- ✅ **Validação Completa** - Todos os campos obrigatórios
- ✅ **Feedback Visual** - Sucesso/erro com animações
- ✅ **Loading States** - Indicadores de carregamento
- ✅ **Fácil Manutenção** - Código limpo e documentado

## 📧 Template do Email

O email inclui:
- Logo e branding da clínica
- Dados completos do paciente
- Serviço de interesse
- Data e hora do envio
- Botão para responder pelo WhatsApp

## 🔧 Personalização

### Mudar Nome da Clínica
Edite a linha 89 no `route.ts`:
```typescript
from: 'Nova Clínica <noreply@novaclinica.com>',
```

### Mudar Assunto do Email
Edite a linha 91:
```typescript
subject: `Nova Mensagem de ${name} - Nova Clínica`,
```

### Mudar Template Visual
Edite o HTML na variável `emailContent` (linhas 15-120).

## 🎯 Pronto para Produção!

O sistema está configurado para:
- Envio confiável via Resend
- Template profissional
- Fácil mudança de email
- Feedback completo ao usuário

**Apenas configure a chave da API e mude o email de destino!** 