const fastify = require('fastify')(),
    join = require('path').join;

fastify.register(require('point-of-view'), {
    engine: {
        handlebars: require('handlebars'),
    },
    includeViewExtension: true,
    defaultLayout: 'main', // Not doing anything
    templates: join(__dirname, 'views/'),
})

fastify.get('/', (req, reply) => {
    reply.view('index', { text: 'text' })
})

fastify.listen(3000, err => {
    if (err) throw err
    console.log(`server listening on ${fastify.server.address().port}`)
})