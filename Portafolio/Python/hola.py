# # crear un software que envie al profesor la letra de Coldplay - Viva la vida, cada 30 segundos unas 15 veces usando pywhatkit.
# import pywhatkit
# import time

# for i in range(2):
#     # pywhatkit.sendwhatmsg("+584143936561", "Hola", 21, 23)
#     pywhatkit.sendwhatmsg_instantly("+584143936561", "Hola")
#     time.sleep(30)

import pywhatkit
import time
for i in range(4):
    pywhatkit.sendwhatmsg_instantly("+56934887809", "Este mensaje se enviara 3 veces, cada 20 seg")
    # time.sleep(20)
print("Se enviaron todos los mensajes")