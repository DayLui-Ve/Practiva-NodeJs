// Crear usuario de conección
db.createUser({
    user: 'docker',
    pwd: '123456',
    roles: ['readWrite']
});

// Insertar dos usuarios en la DB
db.jobs.insert({
    name: 'Luijo',
    job: 'Developer'
});

db.jobs.insert({
    name: 'Dante',
    job: 'Devil hunter'
})