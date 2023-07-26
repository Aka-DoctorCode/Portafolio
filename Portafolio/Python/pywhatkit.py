import pywhatkit
import time

# Define el número de teléfono de destino
num_tel = "+584143936561"

# Define el mensaje que deseas enviar
mensaje = "Coldplay - Viva la vida"

# Define la hora en que deseas enviar el mensaje (en formato 24 horas)
hora = 17
minutos = 48

# Bucle para enviar el mensaje cada 30 segundos
for i in range(2):
    pywhatkit.sendwhatmsg(num_tel, mensaje, hora, minutos)
    time.sleep(30)
