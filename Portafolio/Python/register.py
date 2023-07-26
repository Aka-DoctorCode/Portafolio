import re
import time
import os

class CRUD:
    # Constructor de la clase
    def __init__(self):
        pass
    # función para validar los datos ingresados 
    def registrar_usuario(self):
        # Variables de entrada
        correo = input("Email: ").lower()
        nombre = input("Nombre: ")
        apellido = input("Apellido: ")
        edad = input("Edad: ")
        pais = input("País: ")
        genero = input("Género (M o F): ")
        telefono = input("Teléfono: ")
        # Expresiones regulares
        validar_correo = (r"[^@]+@[^@]+\.[^@]+")
        validar_nombre = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
        validar_apellido = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
        validar_edad = (r"^([1-9]|[1-9][0-9])$")
        validar_pais = (r"^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$")
        validar_genero = (r"^[mfMF]$")
        validar_telefono = (r"^\+\d{10,14}$")
        # Validaciones
        if (re.match(validar_correo, correo)):
            print("Correo valido")
        else:
            print("Formato del correo invalido (xxx@xxx.x) ")
        time.sleep(1)
        if (re.match(validar_nombre, nombre)):
            print("Nombre valido")
        else:
            print("Solo use letras en el nombre")
        time.sleep(1)
        if (re.match(validar_apellido, apellido)):
            print("Apellido valido")
        else:
            print("Solo use letras en el apellido")
        time.sleep(1)
        if (re.match(validar_edad, edad)):
            print("Edad valido")
        else:
            print("Solo use números para la edad")
        time.sleep(1)
        if (re.match(validar_pais, pais)):
            print("Pais valido")
        else:
            print("El pais no puede contener numeros")
        time.sleep(1)
        if (re.match(validar_genero, genero)):
            print("Género valido")
        else:
            print("Escriba M para masculino y F para femenino")
        time.sleep(1)
        if (re.match(validar_telefono, telefono)):
            print("Telefono valido")
        else:
            print("El número de telefono debe tener un `+` seguido de los 10 a 14 digitos")
        
        nombre_archivo = ("./usuarios/" + correo + ".txt")
        # función creadora de archivo en modo W(write)
        archivo = open(nombre_archivo, "a")
        archivo.write(f'Email: {correo}\n')
        archivo.write(f'Nombre: {nombre}\n')
        archivo.write(f'Apellido: {apellido}\n')
        archivo.write(f'Edad: {edad}\n')
        archivo.write(f'País: {pais}\n')
        archivo.write(f'Género: {genero}\n')
        archivo.write(f'Teléfono: {telefono}\n')
        archivo.close()
        print("Usuario registrado correctamente")
    
    def mostrar_usuario(self):
        Abrir_usuario = input("Ingrese el correo electrónico del usuario que desea abrir: ").lower()
        usuario_abierto = open(f"./usuarios/{Abrir_usuario}.txt", "r")
        print(usuario_abierto.read())
        usuario_abierto.close()

    def editar_usuario(self):
        # Variables de entrada
        Selecionar_usuario = input("Ingrese el correo electrónico del usuario que desea editar: ").lower()
        usuario_editado = open(f"./usuarios/{Selecionar_usuario}.txt", "w")
        correo = input("Email: ").lower()
        nombre = input("Nombre: ")
        apellido = input("Apellido: ")
        edad = input("Edad: ")
        pais = input("País: ")
        genero = input("Género (M o F): ")
        telefono = input("Teléfono: ")

        # Expresiones regulares
        validar_correo = (r"[^@]+@[^@]+\.[^@]+")
        validar_nombre = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
        validar_apellido = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
        validar_edad = (r"^([1-9]|[1-9][0-9])$")
        validar_pais = (r"^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$")
        validar_genero = (r"^[mfMF]$")
        validar_telefono = (r"^\+\d{10,14}$")

        # Validaciones
        if (re.match(validar_correo, correo)):
            print("Nuevo Correo valido")
        else:
            print("Formato del correo invalido (xxx@xxx.x) ")
        time.sleep(1)
        if (re.match(validar_nombre, nombre)):
            print("Nuevo Nombre valido")
        else:
            print("Solo use letras en el nombre")
        time.sleep(1)
        if (re.match(validar_apellido, apellido)):
            print("Nuevo Apellido valido")
        else:
            print("Solo use letras en el apellido")
        time.sleep(1)
        if (re.match(validar_edad, edad)):
            print("Nuevo Edad valido")
        else:
            print("Solo use números para la edad")
        time.sleep(1)
        if (re.match(validar_pais, pais)):
            print("Nuevo Pais valido")
        else:
            print("El pais no puede contener numeros")
        time.sleep(1)
        if (re.match(validar_genero, genero)):
            print("Nuevo Género valido")
        else:
            print("Escriba M para masculino y F para femenino")
        time.sleep(1)
        if (re.match(validar_telefono, telefono)):
            print("Nuevo Telefono valido")
        else:
            print("El número de telefono debe tener un `+` seguido de los 10 a 14 digitos")
        
        # función creadora de archivo en modo W(write)
        usuario_editado.write(
            f'{correo}\n'
            f'{nombre}\n'
            f'{apellido}\n'
            f'{edad}\n'
            f'{pais}\n'
            f'{genero}\n'
            f'{telefono}\n'
        )
        usuario_editado.close()

    # Función para eliminar un usuario
    def eliminar_usuario(self):
        Usuario_a_elimnar = input("Ingrese el correo electrónico del usuario que desea eliminar: ").lower()
        os.remove(f"./usuarios/{Usuario_a_elimnar}.txt")

miCrud = CRUD()
Opcion = input("1. Registrar usuario\n2. Mostrar usuario\n3. Editar usuario\n4. Eliminar Usario\n5. Salir\n")