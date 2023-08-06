import re
import time
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from os import system

# Detalles de la cuenta de correo electrónico
mi_correo = "franciscomolina92@gmail.com"
# Contraseña de aplicacion generada desde Gmail
mi_contraseña = "yuym zewv istp qlmk"
asunto = "Usuario registrado correctamente usando la aplicación register.py (Autor: Francisco)"
asuntoModificado = "Usuario modificado correctamente usando la aplicación register.py (Autor: Francisco)"
class CRUD:
    # Constructor de la clase
    def __init__(self):
        pass
    # función para validar los datos ingresados 
    def registrar_usuario(self):
        correo = ""
        nombre_archivo = ("./usuarios/" + correo + ".txt")
        nombre = ""
        apellido = ""
        edad = ""
        pais = ""
        genero = ""
        telefono = ""
        
        # Metodo para validar el correo y so existe en la base de datos
        def verificar_correo():
            correo = input("Ingrese el correo electrónico: ").lower()
            validar_correo = (r"[^@]+@[^@]+\.[^@]+")
            correoValido = False
            while(correoValido == False):
                if (re.match(validar_correo, correo)):
                    correoValido = True
                    print("Correo valido")
                    time.sleep(1.5)
                else:
                    system("clear")
                    correoValido = False
                    print("Formato del correo invalido (xxx@xxx.x)")
                    time.sleep(1.5)
            print("Verificando si el correo existe en la base de datos ...")
            time.sleep(1.5) 
            # Creación de archivo
            nombre_archivo = ("./usuarios/" + correo + ".txt")

            # comvertir em loop

            # if os.path.exists(nombre_archivo):
            #     print("El correo ya existe")
            #     time.sleep(1.5)
            #     system("clear")
            #     correo = input("Ingrese un correo electrónico diferente: ").lower()
            #     print("Verificando si el correo existe en la base de datos ...")
            #     time.sleep(1.5) 
            #     print("El correo no existe en la base de datos")
            # necesario ?
            return correo, nombre_archivo
        # necesario ?
        correo, nombre_archivo = verificar_correo()
        time.sleep(1.5)
        
        # Validar los otros datos
        nombreValido = False
        while(nombreValido == False):
            nombre = input("Nombre: ").capitalize()
            validar_nombre = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
            if (re.match(validar_nombre, nombre)):
                print("Nombre valido")
                nombreValido = True
                time.sleep(1.5)
            else:
                system("clear")
                nombreValido = False
                print("Solo use letras en el nombre")
                time.sleep(1.5)
        apellidoValido = False
        while(apellidoValido == False):
            apellido = input("Apellido: ").capitalize()
            validar_apellido = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
            if (re.match(validar_apellido, apellido)):
                print("Apellido valido")
                apellidoValido = True
                time.sleep(1.5)
            else:
                system("clear")
                apellidoValido = False
                print("Solo use letras en el apellido")
                time.sleep(1.5)
        edadValido = False
        while(edadValido == False):
            edad = input("Edad: ")
            validar_edad = (r"^([1-9]|[1-9][0-9])$")
            if (re.match(validar_edad, edad)):
                print("Edad valida")
                edadValido = True
                time.sleep(1.5)
            else:
                system("clear")
                edadValido = False
                print("Solo use números para la edad, edades mayores a 100 coloque 99")
                time.sleep(1.5)
        paisValido = False
        while(paisValido == False):
            pais = input("País: ")
            validar_pais = (r"^[a-záéíóúñüA-ZÁÉÍÓÚÑÜ]+(?:[\s-][a-záéíóúñüA-ZÁÉÍÓÚÑÜ]+)*$")
            if (re.match(validar_pais, pais)):
                print("Pais valido")
                paisValido = True
                time.sleep(1.5)
            else:
                system("clear")
                paisValido = False
                print("El pais no es valido")
                time.sleep(1.5)
        generoValido = False
        while(generoValido == False):
            genero = input("Género (M o F): ")
            validar_genero = (r"^[mfMF]$")
            if (re.match(validar_genero, genero)):
                print("Género valido")
                generoValido = True
                time.sleep(1.5)
            else:
                system("clear")
                generoValido = False
                print("Escriba M para masculino y F para femenino")
                time.sleep(1.5)
        telefonoValido = False
        while(telefonoValido == False):
            telefono = input("Teléfono: ")
            validar_telefono = (r"^\+\d{10,14}$")
            if (re.match(validar_telefono, telefono)):
                print("Teléfono valido")
                telefonoValido = True
                time.sleep(1.5)
            else:
                system("clear")
                telefonoValido = False
                print("El teléfono no es valido")
                time.sleep(1.5)

        # función creadora de archivo en modo W
        archivo = open(nombre_archivo, "w")
        archivo.write(f'Email: {correo}\n')
        archivo.write(f'Nombre: {nombre}\n')
        archivo.write(f'Apellido: {apellido}\n')
        archivo.write(f'Edad: {edad}\n')
        archivo.write(f'País: {pais}\n')
        archivo.write(f'Género: {genero}\n')
        archivo.write(f'Teléfono: {telefono}\n')
        archivo.close()

        # función para escribir la base de datos de usuarios
        archivo = open("./usuarios/usuarios.txt", "a")
        archivo.write(f'Email: {correo}\n')
        archivo.close()

        # Correo de confirmación
        mensaje = MIMEMultipart()
        mensaje['From'] = mi_correo
        mensaje['To'] = correo
        mensaje['Subject'] = asunto
        destinatario = [correo, "frankmolcas@gmail.com"]
        cuerpo = cuerpo = f"Correo enviado desde mi Computadora en una aplicacion realizada con Python\n Usuario registrado correctamente\nCorreo Electronico: {correo}\nNombre: {nombre}\nApellido: {apellido}\nEdad: {edad} años\nPaís: {pais}\nGénero: {genero}\nTelefono: {telefono}"
        mensaje.attach(MIMEText(cuerpo, 'plain'))
        # Iniciar sesión en el servidor SMTP de Gmail
        servidor_smtp = smtplib.SMTP('smtp.gmail.com', 587)
        servidor_smtp.starttls()
        servidor_smtp.login(mi_correo, mi_contraseña)
        # Enviar correo electrónico
        texto = mensaje.as_string()
        servidor_smtp.sendmail(mi_correo, destinatario, texto)
        # Cerrar sesión en el servidor SMTP
        servidor_smtp.quit()
        print("Correos electrónicos enviados con éxito.")
        time.sleep(1.5)
        system("clear")

    def mostrar_usuario(self):
        opcion = ""
        # Loop de submenu ver usuarios
        while opcion != "1" and opcion != "2":
            opcion = input("Selecciona una opción:\n1. Ver Base de datos\n2. Ver un usuario\n")
            if opcion == "1":
                archivo = open("./usuarios/usuarios.txt", "r")
                contenido = archivo.read()
                print("Abrinedo Base de Datos")
                time.sleep(1.5)
                print(contenido)
                archivo.close()
                opcion = ""
                while opcion != "1":
                    opcion = input("Presione '1' para volver al menu inicial\n")
                    if opcion == "1":
                        print("Cerrando Base de Datos")
                        time.sleep(1.5)
                        system("clear")
                    else:
                        print("Opción inválida")
                        time.sleep(1.5)
                        system("clear")
            elif opcion == "2":
                Abrir_usuario = input("Ingrese el correo electrónico del usuario que desea abrir: ").lower()
                usuario_abierto = open(f"./usuarios/{Abrir_usuario}.txt", "r")
                print(f"Abriendo usuario {Abrir_usuario}")
                time.sleep(1.5)
                print(usuario_abierto.read())
                usuario_abierto.close()
                opcion = ""
                while opcion != "1":
                    opcion = input("Presione '1' para volver al menu inicial\n")
                    if opcion == "1":
                        print("Cerrando Base de Datos")
                        time.sleep(1.5)
                        system("clear")
                    else:
                        print("Opción inválida")
                        time.sleep(1.5)
                        system("clear")
            else:
                print("Opción inválida")
                time.sleep(1.5)
                system("clear")
        

    def editar_usuario(self):
        correo = ""
        Selecionar_usuario =""
        Nuevo_correo = ""
        nombre = ""
        apellido = ""
        edad = ""
        pais = ""
        genero = ""
        telefono = ""
        lista = ""

        # Metodo para validar si existe el correo en la base de datos
        usuario_existe = False
        while(usuario_existe == False):
            Selecionar_usuario = input("Ingrese el correo electrónico del usuario que desea editar: ").lower()
            if os.path.exists(f"./usuarios/{Selecionar_usuario}.txt"):
                print("Verificando si el correo existe en la base de datos ...")
                time.sleep(1.5)
                print("El correo existe en la base de datos")
                usuario_existe = True
                usuario_abierto = open(f"./usuarios/{Selecionar_usuario}.txt", "r")
                contenido_usuario = usuario_abierto.read()
                usuario_abierto.close()
                # extraer los pares clave valor de cada linea del documento y guardarlo en un lista      
                lista = contenido_usuario.split("\n")
            else:
                system("clear")
                usuario_existe = False 
                print("El correo no existe en la base de datos")
                time.sleep(1.5)
        
        # Metodo para validar el nuevo correo
        verificarCorreo = False
        while (verificarCorreo == False):
            Nuevo_correo = input("Nuevo correo: ").lower()
            validar_correo = (r"[^@]+@[^@]+\.[^@]+")
            if (re.match(validar_correo, Nuevo_correo) and os.path.exists(f"./usuarios/{Nuevo_correo}.txt")):
                print("Nuevo Correo Valido")
                time.sleep(1.5)
                system("clear")
                time.sleep(1.5)
                print("El correo ya existe en la base de datos")
                verificarCorreo = False
            elif (re.match(validar_correo, Nuevo_correo)):
                print("Nuevo Correo Valido")
                correo = Nuevo_correo
                verificarCorreo = True
                time.sleep(1.5)
                print("El correo no existe en la base de datos")
                time.sleep(1.5)
                print(f"El correo se cambiara a: {Nuevo_correo}")
            elif (Nuevo_correo == ""):
                split = lista[0].split(": ")
                correo = split[1]
                verificarCorreo = True
                time.sleep(1.5)
                print(f"El correo se mantendra como: {correo}")
                time.sleep(1.5)
            else:
                system("clear")
                verificarCorreo = False
                print("Formato del correo invalido (xxx@xxx.x)")
                time.sleep(1.5)


        # Cambio de nombre del archivo
        if (Selecionar_usuario != correo):
            os.rename(f"./usuarios/{Selecionar_usuario}.txt", f"./usuarios/{correo}.txt")
            print(f"Correo cambiado exitosamente a {Nuevo_correo}")

        # Validar los otros datos
        verificarNombre = False
        while (verificarNombre == False):
            Nuevo_nombre = input("Nuevo nombre: ").capitalize()
            validar_nombre = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
            if (re.match(validar_nombre, Nuevo_nombre)):
                print("Nuevo Nombre Valido")
                nombre = Nuevo_nombre
                verificarNombre = True
                time.sleep(1.5)
                print(f"El nombre se cambaira a: {Nuevo_nombre}")
                time.sleep(1.5)
            elif (Nuevo_nombre == ""):
                split = lista[1].split(": ")
                nombre = split[1]
                verificarNombre = True
                print(f"El nombre se mantendra como: {nombre}")
                time.sleep(1.5)
            else:
                system("clear")
                verificarNombre = False
                print("Solo use letras en el nombre")
                time.sleep(1.5)
        
        verificarApellido = False
        while (verificarApellido == False):
            Nuevo_apellido = input("Nuevo apellido: ").capitalize()
            validar_apellido = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
            if (re.match(validar_apellido, Nuevo_apellido)):
                print("Nuevo Apellido Valido")
                apellido = Nuevo_apellido
                verificarApellido = True
                time.sleep(1.5)
                print(f"El apellido se cambaira a: {Nuevo_apellido}")
                time.sleep(1.5)
            elif (Nuevo_apellido == ""):
                split = lista[2].split(": ")
                apellido = split[1]
                verificarApellido = True
                print(f"El apellido se mantendra como: {apellido}")
                time.sleep(1.5)
            else:
                system("clear")
                verificarApellido = False
                print("Solo use letras en el apellido")
                time.sleep(1.5)

        verificarEdad = False
        while (verificarEdad == False):
            Nueva_edad = input("Nueva edad: ")
            validar_edad = (r"^([1-9]|[1-9][0-9])$")
            if (re.match(validar_edad, Nueva_edad)):
                print("Nueva Edad Valida")
                edad = Nueva_edad
                verificarEdad = True
                time.sleep(1.5)
                print(f"La edad se cambiera a: {Nueva_edad}")
                time.sleep(1.5)
            elif (Nueva_edad == ""):
                split = lista[3].split(": ")
                edad = split[1]
                verificarEdad = True
                print(f"La edad se mantendra como: {edad}")
                time.sleep(1.5)
            else:
                system("clear")
                verificarEdad = False
                print("Solo use numeros en la edad, si la edad es mayor a 100 escriba 99")
                time.sleep(1.5)
        
        

        # paisValido = False
        # while(paisValido == False):
        #     pais = input("País: ")
        #     validar_pais = (r"^[a-záéíóúñüA-ZÁÉÍÓÚÑÜ]+(?:[\s-][a-záéíóúñüA-ZÁÉÍÓÚÑÜ]+)*$")
        #     if (re.match(validar_pais, pais)):
        #         print("Pais valido")
        #         paisValido = True
        #         time.sleep(1.5)
        #     else:
        #         system("clear")
        #         paisValido = False
        #         print("El pais no es valido")
        #         time.sleep(1.5)
        # generoValido = False
        # while(generoValido == False):
        #     genero = input("Género (M o F): ")
        #     validar_genero = (r"^[mfMF]$")
        #     if (re.match(validar_genero, genero)):
        #         print("Género valido")
        #         generoValido = True
        #         time.sleep(1.5)
        #     else:
        #         system("clear")
        #         generoValido = False
        #         print("Escriba M para masculino y F para femenino")
        #         time.sleep(1.5)
        # telefonoValido = False
        # while(telefonoValido == False):
        #     telefono = input("Teléfono: ")
        #     validar_telefono = (r"^\+\d{10,14}$")
        #     if (re.match(validar_telefono, telefono)):
        #         print("Teléfono valido")
        #         telefonoValido = True
        #         time.sleep(1.5)
        #     else:
        #         system("clear")
        #         telefonoValido = False
        #         print("El teléfono no es valido")
        #         time.sleep(1.5)

        # #función creadora de archivo en modo w
        # archivo = open(f"./usuarios/{correo}.txt", "w")
        # archivo.write(f'{correo}\n')
        # archivo.write(f'{nombre}\n')
        # archivo.write(f'{apellido}\n')
        # archivo.write(f'{edad}\n')
        # archivo.write(f'{pais}\n')
        # archivo.write(f'{genero}\n')
        # archivo.write(f'{telefono}\n')
        # archivo.close()
        # # Función para cambiar el correo electrónico en usuario.txt
        # with open("./usuarios/usuarios.txt", "r") as usuarios:
        #     contenido = usuarios.readlines()
        # for i, linea in enumerate(contenido):
        #     if lista[0] in linea:
        #         contenido[i] = f"Email: {Nuevo_correo} ({contenido[0]})\n"
        # with open("./usuarios/usuarios.txt", "w") as usuarios:
        #     usuarios.writelines(contenido)
        # print("Correo electrónico modificado y guardado en la base de datos")
        # time.sleep(1.5)
        # system("clear")

        # # Correo de confirmación
        # mensaje = MIMEMultipart()
        # mensaje['From'] = mi_correo
        # mensaje['To'] = correo
        # mensaje['Subject'] = asuntoModificado
        # destinatario = [correo, "frankmolcas@gmail.com"]
        # cuerpo = cuerpo = f"Correo enviado desde mi Computadora en una aplicacion realizada con Python\n Usuario {Selecionar_usuario} modificado correctamente\nCorreo Electronico: {correo}\nNombre: {nombre}\nApellido: {apellido}\nEdad: {edad} años\nPaís: {pais}\nGénero: {genero}\nTelefono: {telefono}"
        # mensaje.attach(MIMEText(cuerpo, 'plain'))
        # # Iniciar sesión en el servidor SMTP de Gmail
        # servidor_smtp = smtplib.SMTP('smtp.gmail.com', 587)
        # servidor_smtp.starttls()
        # servidor_smtp.login(mi_correo, mi_contraseña)
        # # Enviar correo electrónico
        # texto = mensaje.as_string()
        # servidor_smtp.sendmail(mi_correo, destinatario, texto)
        # # Cerrar sesión en el servidor SMTP
        # servidor_smtp.quit()
        # print("Correos electrónicos enviados con éxito.")
        # time.sleep(1.5)
        # opcion = ""
        # while opcion != "1":
        #     opcion = input("Presione '1' para volver al menu inicial\n")
        #     if opcion == "1":
        #         print("Cerrando Base de Datos")
        #         time.sleep(1.5)
        #         system("clear")
        #     else:
        #         print("Opción inválida")
        #         time.sleep(1.5)
        #         system("clear")

    # Función para eliminar un usuario
    def eliminar_usuario(self):
        Usuario_a_elimnar = input("Ingrese el correo electrónico del usuario que desea eliminar: ").lower()
        os.remove(f"./usuarios/{Usuario_a_elimnar}.txt")
        with open("./usuarios/usuarios.txt", "r") as usuarios:
            contenido = usuarios.readlines()
        for i, linea in enumerate(contenido):
            if Usuario_a_elimnar in linea:
                contenido[i] = f"Correo eliminado: {Usuario_a_elimnar}\n"
        with open("./usuarios/usuarios.txt", "w") as usuarios:
            usuarios.writelines(contenido)
        print(f'Usuario {Usuario_a_elimnar} eliminado de la base de datos')
        time.sleep(1.5)
        opcion = ""
        while opcion != "1":
            opcion = input("Presione '1' para volver al menu inicial\n")
            if opcion == "1":
                print("Cerrando Base de Datos")
                time.sleep(1.5)
                system("clear")
            else:
                print("Opción inválida")
                time.sleep(1.5)
                system("clear")
            
    # Función lectura base de datos
    def ver_basededatos(self):
        archivo = open("./usuarios/usuarios.txt", "r")
        print("Abriendo base de datos")
        time.sleep(1.5)
        print(archivo.readlines())
        archivo.close()
        opcion = ""
        while opcion != "1":
            opcion = input("Presione '1' para cerrar base de datos\n")
            if opcion == "1":
                print("Cerrando Base de Datos")
                time.sleep(1.5)
                system("clear")
            else:
                print("Opción inválida")
                time.sleep(1.5)
                system("clear")
    
    # Función salir
    def salir(self):
        system("clear")
        print("Gracias por usar nuestro programa")

miCrud = CRUD()
Opciones = {
    "1": miCrud.registrar_usuario,
    "2": miCrud.mostrar_usuario,
    "3": miCrud.editar_usuario,
    "4": miCrud.eliminar_usuario,
    "5": miCrud.ver_basededatos,
    "6": miCrud.salir
}
while True:
    opcion = input("1. Registrar usuario\n2. Mostrar usuario\n3. Editar usuario\n4. Eliminar Usuario\n5. Ver base de datos de usuarios\n6. Salir\n")
    if opcion == '6':
        system("clear")
        print("Gracias por usar esta APP")
        break
    elif opcion in Opciones:
        Opciones[opcion]()
    else:
        system("clear")
        print("Opción inválida. Por favor, ingrese una opción válida.")
        time.sleep(1.5)