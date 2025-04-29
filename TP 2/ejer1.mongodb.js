
// Me posiciono en la db
use('empresa');

//Agregar empleados a la colección
db.empleados.insertMany([
    { nombre: 'Juan', edad: 29, puesto: 'Desarrollador' },
    { nombre: 'Geronimo', edad: 25, puesto: 'pasante' },
    { nombre: 'Martin', edad: 35, puesto: 'Proget Manager' }
])

//3. Actualizar edad de los empleados
db.empleados.updateOne(
    { nombre: 'Juan' },
    { $set: { edad: 30 } }
)

//4. Eliminar al empleado que tenga el puesto de pasante

db.empleados.deleteOne({ puesto: 'pasante' })

