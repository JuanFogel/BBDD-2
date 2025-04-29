
//Creo la coleccion ventas con los campos "producto", "precio_unitario" y "cantidad"
db.ventas.insertMany([
    { producto: 'Monitor', precio: 1000, cantidad: 3 },
    { producto: 'Teclado', precio: 80, cantidad: 6 },
    { producto: 'Mouse', precio: 50, cantidad: 4 },
    { producto: 'CPU', precio: 5000, cantidad: 2 },
])

// Calculo total de ventas por producto
db.ventas.aggregate([{
    $group: {
        _id: "$producto",
        total: { $sum: { $multiply: ["$cantidad", "$precio"] } }
    }
}]);

