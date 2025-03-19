personas = []

while True:
    nombre = input("Ingrese el nombre de la persona (o escriba 'terminar' para finalizar): ")
    
    if nombre.lower() == 'terminar':
        break

    edad = int(input("Ingrese la edad de la persona: "))
    nota = float(input("Ingrese la nota de la persona: "))

    personas.append([nombre, edad, nota])

print("Listado completo de personas:")
for persona in personas:
    print(f"Nombre: {persona[0]}, Edad: {persona[1]}, Nota: {persona[2]}")

personas_ordenadas = sorted(personas, key=lambda x: x[2], reverse=True)

print("Listado ordenado por nota (de mayor a menor):")
for persona in personas_ordenadas:
    print(f"Nombre: {persona[0]}, Edad: {persona[1]}, Nota: {persona[2]}")