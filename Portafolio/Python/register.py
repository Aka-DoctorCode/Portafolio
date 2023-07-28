import re
import time
import os
from os import system

class CRUD:
    # Constructor de la clase
    def __init__(self):
        pass
    # función para validar los datos ingresados 
    def registrar_usuario(self):
        correo = ""
        nombre = ""
        apellido = ""
        edad = ""
        pais = ""
        genero = ""
        telefono = ""
        # Metodo para validar el correo
        def validar_correo():
            correoValido = False
            while(correoValido == False):
                validar_correo = (r"[^@]+@[^@]+\.[^@]+")
                correo = input("Ingrese el Email del usuario a registrar para continuar: ").lower()
                if (re.match(validar_correo, correo)):
                    correoValido = True
                    print("Correo valido")
                else:
                    print("Formato del correo invalido (xxx@xxx.x) ")
                    correoValido = False
        # Creación de archivo
        nombre_archivo = ("./usuarios/" + correo + ".txt")
        # Loops para validar si existe el correo
        archivoExiste = True
        while (archivoExiste == True):
            if os.path.exists(nombre_archivo):
                print("El correo ya existe")
                archivoExiste = True
            else:
                archivoExiste = False
                validar_correo()

        # correoValido = False
        # while(correoValido == False):
        #     correo = input("Email: ").lower()
        #     validar_correo = (r"[^@]+@[^@]+\.[^@]+")
        #     if (re.match(validar_correo, correo)):
        #         print("Correo valido")
        #         correoValido = True
        #     else:
        #         print("Formato del correo invalido (xxx@xxx.x) ")
        #         correoValido = False
        #         time.sleep(3)
        #         system("clear")

        # Validaciones
        nombreValido = False
        while(nombreValido == False):
            nombre = input("Nombre: ").capitalize()
            validar_nombre = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
            if (re.match(validar_nombre, nombre)):
                print("Nombre valido")
                nombreValido = True
            else:
                print("Solo use letras en el nombre")
                nombreValido = False
                time.sleep(3)
                system("clear")
        apellidoValido = False
        while(apellidoValido == False):
            apellido = input("Apellido: ").capitalize()
            validar_apellido = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
            if (re.match(validar_apellido, apellido)):
                print("Apellido valido")
                apellidoValido = True
            else:
                print("Solo use letras en el apellido")
                apellidoValido = False
                time.sleep(3)
                system("clear")
        edadValido = False
        while(edadValido == False):
            edad = input("Edad: ")
            validar_edad = (r"^([1-9]|[1-9][0-9])$")
            if (re.match(validar_edad, edad)):
                print("Edad valida")
                edadValido = True
            else:
                print("Solo use números para la edad, edades mayores a 100 coloque 99")
                edadValido = False
                time.sleep(3)
                system("clear")
        paisValido = False
        while(paisValido == False):
            pais = input("País: ")
            validar_pais = (r"^[a-záéíóúñüA-ZÁÉÍÓÚÑÜ]+(?:[\s-][a-záéíóúñüA-ZÁÉÍÓÚÑÜ]+)*$")
            if (re.match(validar_pais, pais)):
                print("Pais valido")
                paisValido = True
            else:
                print("El pais no es valido")
                paisValido = False
                time.sleep(3)
                system("clear")
        generoValido = False
        while(generoValido == False):
            genero = input("Género (M o F): ")
            validar_genero = (r"^[mfMF]$")
            if (re.match(validar_genero, genero)):
                print("Género valido")
                generoValido = True
            else:
                print("Escriba M para masculino y F para femenino")
                generoValido = False
                time.sleep(3)
                system("clear")
        telefonoValido = False
        while(telefonoValido == False):
            telefono = input("Teléfono: ")
            validar_telefono = (r"^\+\d{10,14}$")
            if (re.match(validar_telefono, telefono)):
                print("Teléfono valido")
                telefonoValido = True
            else:
                print("El teléfono no es valido")
                telefonoValido = False
                time.sleep(3)
                system("clear")
        # función creadora de archivo en modo X
        # archivo = open(nombre_archivo, "x")
        # archivo.write(f'Email: {correo}\n')
        # archivo.write(f'Nombre: {nombre}\n')
        # archivo.write(f'Apellido: {apellido}\n')
        # archivo.write(f'Edad: {edad}\n')
        # archivo.write(f'País: {pais}\n')
        # archivo.write(f'Género: {genero}\n')
        # archivo.write(f'Teléfono: {telefono}\n')
        # archivo.close()

        # función para escribir la base de datos de usuarios
        archivo = open("./usuarios/usuarios.txt", "a")
        archivo.write(f'Email: {correo}\n')
        archivo.close()
    
    def mostrar_usuario(self):
        Abrir_usuario = input("Ingrese el correo electrónico del usuario que desea abrir: ").lower()
        usuario_abierto = open(f"./usuarios/{Abrir_usuario}.txt", "r")
        print(usuario_abierto.read())
        usuario_abierto.close()

    def editar_usuario(self):
        # Variables de entrada
        Selecionar_usuario = input("Ingrese el correo electrónico del usuario que desea editar: ").lower()

        usuario_abierto = open(f"./usuarios/{Selecionar_usuario}.txt", "r")
        contenido_usuario = usuario_abierto.read()
        usuario_abierto.close()

        # extraer los pares clave valor de cada linea del documento y guardarlo en un biblioteca
        # posteriormente sino se envia el valor nuevo durante la edicion se envia el valor original

        usuario_editado = open(f"./usuarios/{Selecionar_usuario}.txt", "w")
        correo = input("Email: ").lower()
        nombre = input("Nombre: ").capitalize()
        apellido = input("Apellido: ").capitalize()
        edad = input("Edad: ")
        pais = input("País: ")
        genero = input("Género (M o F): ")
        telefono = input("Teléfono: ")

        # Expresiones regulares
        validar_correo = (r"[^@]+@[^@]+\.[^@]+")
        validar_nombre = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
        validar_apellido = (r"^[A-ZÁÉÍÓÚÑÜ]+([a-záéíóúñü]*)$")
        validar_edad = (r"^([1-9]|[1-9][0-9])$")
        validar_pais = (r"^[a-zzáéíóúñüA-ZÁÉÍÓÚÑÜ]+(?:[\s-][a-záéíóúñüA-ZÁÉÍÓÚÑÜ]+)*$")
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

    # Función lectura base de datos
    def ver_basededatos(self):
        archivo = open("usuarios.txt", "r")
        print(archivo.read())
        archivo.close()
    
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
        print("Opción inválida. Por favor, ingrese una opción válida.")