import re

# función para validar los datos ingresados
def registrar_usuario():
    # Variables de entrada
    correo = input("Email: ")
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

    if (re.match(validar_correo, correo)):
        print("Correo valido")
    else:
        print("Formato del correo invalido (xxx@xxx.x) ")
    if (re.match(validar_nombre, nombre)):
        print("Nombre valido")
    else:
        print("Solo use letras en el nombre")
    if (re.match(validar_apellido, apellido)):
        print("Apellido valido")
    else:
        print("Solo use letras en el apellido")
    if (re.match(validar_edad, edad)):
        print("Edad valido")
    else:
        print("Solo use números para la edad")
    if (re.match(validar_pais, pais)):
        print("Pais valido")
    else:
        print("El pais no puede cotener numeros")
    if (re.match(validar_genero, genero)):
        print("Género valido")
    else:
        print("Escriba M para masculino y F para femenino")
    if (re.match(validar_telefono, telefono)):
        print("Telefono valido")
    else:
        print("El número de telefono debe tener un `+` seguido de los 10 a 14 digitos")
    
    nombre_archivo = ("./usuarios/" + correo + ".txt")
    # función creadora de archivo en modo W(write)
    archivo = open(nombre_archivo, "a")
    archivo.write(f'Nombre: {nombre}\n')
    archivo.write(f'Apellido: {apellido}\n')
    archivo.write(f'Email: {correo}\n')
    archivo.write(f'Edad: {edad}\n')
    archivo.write(f'País: {pais}\n')
    archivo.write(f'Género: {genero}\n')
    archivo.write(f'Teléfono: {telefono}\n')
    archivo.close()
print("Usuario registrado correctamente")
registrar_usuario()
