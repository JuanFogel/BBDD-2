//Muestra los pasos para crear un usuario con permisos de lectura y escritura, y los comandos necesarios para hacer backup y restauración de una base de datos.
// // Para crear un usuario con permisos de lectura y escritura:
use("ecommerce");

db.createUser({
    user: "admin",
    pwd: "admin",
    roless: [
        {
            role: "readWrite",
            db: "ecommerce"
        }
    ]
});

//Para hacer un backup de una base de datos:
//mongodump--db ecommerce--out./ backup

//Para restaurar la base de datos:
//mongorestore--db ecommerce./ backup / ecommerce

