# Playing with REST using hepi.js
Playing with REST using hepi
Expoloring hepi REST by making simple project

1. Creating server
--------------
'''javascript
var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ port: 8080 });
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
'''

2. Ading route
--------------
'''javascript
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});
'''
