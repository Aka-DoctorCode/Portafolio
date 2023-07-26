from twilio.rest import Client
import time

# Configuración de Twilio
account_sid = 'AC6375e39785b1d54e74755093a0426d6a'
auth_token = 'c7d5cbd0d077859f66eeba7b38db1894'
client = Client(account_sid, auth_token)

# Letra de la canción
lyrics = "I used to rule the world, seas would rise when I gave the word..."

# Envío del mensaje
for i in range(2):
    message = client.messages.create(
        from_='whatsapp:+14155238886',
        body="I used to rule the world, seas would rise when I gave the word...",
        to='whatsapp:+4143936561'
    )
    time.sleep(30)
