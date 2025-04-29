
//crear una colección de clientes con los campos nombre, apellido y edad
db.clientes.insertMany([
    { nombre: 'Juan', apellido: 'Pérez', edad: 30 },
    { nombre: 'Ana', apellido: 'Gómez', edad: 25 },
    { nombre: 'Luis', apellido: 'Fernández', edad: 35 },
    { nombre: 'María', apellido: 'López', edad: 28 }
])
//Crea un índice compuesto sobre los campos apellido y nombre
db.clientes.createIndex({ apellido: 1, nombre: 1 }) //Ordena de manera ascendente
