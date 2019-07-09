const argv = require('yargs')
.command('crear', 'Crear un elemento por hacer', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    }  
})
.command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'actualiza la tarea'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'marca como completado o pendiente la tarea'
    }
})

    .help()
    .argv;
module.exports = {
    argv
}