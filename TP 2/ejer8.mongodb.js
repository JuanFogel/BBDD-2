use('universidad')
//Realizo la agregación con $lookup para combinar los datos de alumnos y cursos
db.alumnos.aggregate([
    {
        $lookup: {
            from: 'cursos',
            localField: 'id_cursos',
            foreignField: '_id',
            as: 'informacion_curso'
        }
    }])
