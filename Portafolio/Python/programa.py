import re
import datetime
import pywhatkit

def validar_datos(nombre, apellido, email, edad, pais, genero, telefono):
    patron_nombre = re.compile("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")
    patron_email = re.compile(r"[^@]+@[^@]+\.[^@]+")
    patron_edad = re.compile("^([1-9]|[1-9][0-9])$")
    patron_pais = re.compile("^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$")
    patron_genero = re.compile("^[MF]$") # M para masculino, F para femenino
    patron_telefono = re.compile("^\+\d{10,14}$")

    if not patron_nombre.match(nombre):
        return False
    if not patron_nombre.match(apellido):
        return False
    if not patron_email.match(email):
        return False
    if not patron_edad.match(edad):
        return False
    if not patron_pais.match(pais):
        return False
    if not patron_genero.match(genero):
        return False
    if not patron_telefono.match(telefono):
        return False

    return True

def registrar_usuario():
    nombre = input("Nombre: ")
    apellido = input("Apellido: ")
    email = input("Email: ")
    edad = input("Edad: ")
    pais = input("País: ")
    genero = input("Género (M o F): ")
    telefono = input("Teléfono (formato internacional, ejemplo: +584143936561): ")

    if validar_datos(nombre, apellido, email, edad, pais, genero, telefono):
        archivo = open("usuarios.txt", "a")
        archivo.write(f"{nombre},{apellido},{email},{edad},{pais},{genero},{telefono}\n")
        archivo.close()

        mensaje = f"Se registró el usuario: {nombre} {apellido}, de {edad} años de edad, residenciado en {pais} y titular del correo: {email}"
        pywhatkit.sendwhatmsg("+584143936561", mensaje, datetime.datetime.now().hour, datetime.datetime.now().minute + 1)
        print("Usuario registrado exitosamente.")
    else:
        print("Error al ingresar datos del usuario. Por favor, inténtelo de nuevo.")

def visualizar_usuarios():
    try:
        archivo = open("usuarios.txt", "r")
        usuarios = archivo.readlines()
        archivo.close()

        for usuario in usuarios:
            datos = usuario.strip().split(",")
            print(f"Nombre: {datos[0]} {datos[1]}")
            print(f"Email: {datos[2]}")
            print(f"Edad: {datos[3]}")
            print(f"País: {datos[4]}")
            print(f"Género: {datos[5]}")
            print(f"Teléfono: {datos[6]}")
            print("===================================")
    except:
        print("Error al leer el archivo de usuarios.")

def editar_usuario():
    try:
        email = input("Ingrese el correo electrónico del usuario que desea editar: ")
        archivo = open("usuarios.txt", "r")
        usuarios = archivo.readlines()
        archivo.close()

        usuario_encontrado = False
        indice_usuario = None

        for i in range(len(usuarios)):
            datos = usuarios[i].strip().split(",")
            if datos[2] == email:
                usuario_encontrado = True
                indice_usuario = i
                break

        if usuario_encontrado:
            print(f"Usuario encontrado: {datos[0]} {datos[1]}")
            print("Ingrese los nuevos datos del usuario:")

            # Pedir nuevos datos del usuario
            nombre = input("Nombre: ")
            apellido = input("Apellido: ")
            edad = input("Edad: ")
            pais = input("País: ")
            genero = input("Género: ")
            telefono = input("Teléfono: ")

            # Validar los datos del usuario
            if not re.match(r"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", nombre):
                print("Error: El nombre no es válido.")
                return

            if not re.match(r"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", apellido):
                print("Error: El apellido no es válido.")
                return

            if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
                print("Error: El correo electrónico no es válido.")
                return

            if not re.match(r"^\d{1,3}$", edad):
                print("Error: La edad no es válida.")
                return

            if not re.match(r"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", pais):
                print("Error: El país no es válido.")
                return

            if genero.lower() not in ["masculino", "femenino", "otro"]:
                print("Error: El género no es válido.")
                return

            if not re.match(r"^\d{10}$", telefono):
                print("Error: El número de teléfono no es válido.")
                return

            # Actualizar los datos del usuario
            usuarios[indice_usuario] = f"{nombre},{apellido},{email},{edad},{pais},{genero.lower()},{telefono}\n"

            # Escribir los nuevos datos en el archivo de usuarios
            archivo = open("usuarios.txt", "w")
            archivo.writelines(usuarios)
            archivo.close()

            print(f"El usuario {email} ha sido actualizado.")
        else:
            print(f"No se encontró ningún usuario con el correo electrónico {email}.")
    except:
        print("Error al leer o escribir en el archivo de usuarios.")

def eliminar_usuario():
    try:
        email = input("Ingrese el correo electrónico del usuario que desea eliminar: ")
        archivo = open("usuarios.txt", "r")
        usuarios = archivo.readlines()
        archivo.close()

        usuario_encontrado = False
        indice_usuario = None

        for i in range(len(usuarios)):
            datos = usuarios[i].strip().split(",")
            if datos[2] == email:
                usuario_encontrado = True
                indice_usuario = i
                break

        if usuario_encontrado:
            del usuarios[indice_usuario]

            # Escribir los nuevos datos en el archivo de usuarios
            archivo = open("usuarios.txt", "w")
            archivo.writelines(usuarios)
            archivo.close()

            print(f"El usuario {email} ha sido eliminado.")
        else:
            print(f"No se encontró ningún usuario con el correo electrónico {email}.")
    except:
        print("Error al leer o escribir en el archivo de usuarios.")
