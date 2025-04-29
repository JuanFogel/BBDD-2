use('empresa')

// Agregamos el campo direccion que contiene "calle", "ciudad" y "codigo postal"

db.empleados.updateMany(
    {},
    { $set: { direccion: { calle: '', ciudad: '', codigo_postal: '' } } }
)