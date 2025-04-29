//Crea una colección cursos y una colección alumnos. Luego inserta documentos donde los alumnos tengan una lista de id_curso referenciando a los cursos.
use('universidad');
// Creo colección cursos
const curso1 = db.cursos.insertOne({
    nombre: 'Matemáticas',
    profesor: 'Carlos',
    horas: 40,
    clases: [
        { dia: "lunes" },
        { dia: "miercoles" }
    ]
});
const curso2 = db.cursos.insertOne({
    nombre: 'Arquitectura y Sistemas',
    profesor: 'Gustavo',
    horas: 30,
    clases: [
        { dia: "martes" },
        { dia: "jueves" }
    ]
});
const curso3 = db.cursos.insertOne({
    nombre: 'Derecho',
    profesor: 'Luis',
    horas: 50,
    clases: [
        { dia: "viernes" }
    ]
});

// Creo colección alumnos
db.alumnos.insertMany([
    {
        nombre: 'Matin',
        apellido: 'Garcia',
        edad: 20,
        id_cursos: [curso1.insertedId, curso2.insertedId]
    },
    {
        nombre: 'Maria',
        apellido: 'Gonzalez',
        edad: 25,
        id_cursos: [curso2.insertedId, curso3.insertedId]
    },
    {
        nombre: 'Luis',
        apellido: 'Fernández',
        edad: 22,
        id_cursos: [curso1.insertedId, curso3.insertedId]
    },
    {
        nombre: 'Juan',
        apellido: 'Garcia',
        edad: 28,
        id_cursos: [curso1.insertedId, curso2.insertedId, curso3.insertedId]
    }
]);





