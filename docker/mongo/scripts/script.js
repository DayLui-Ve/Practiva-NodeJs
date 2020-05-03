// Crear usuario de conección
db.createUser({
    user: 'docker',
    pwd: '123456',
    roles: ['readWrite']
});

// Insertar dos usuarios en la DB
db.test.insert({
    name: 'Luijo',
    job: 'Developer'
});

db.test.insert({
    name: 'Dante',
    job: 'Devil hunter'
})