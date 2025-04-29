use('empresa')

// Recupera los nombres y puesto de los empleados sin el id
db.empleados.find({}, { _id: 0, nombre: 1, puesto: 1 })