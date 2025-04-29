use('empresa')

// Filtrar empleados por edad entre 25 y 40 años
db.empleados.find({ edad: { $gte: 25, $lte: 40 } });
