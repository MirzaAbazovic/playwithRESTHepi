var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
//GET /hello
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
       reply('hello world');
    }
});

//Add route that takes parameter 
//GET /{name}
server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello ' + encodeURIComponent(request.params.name));
    }
});


// Start the server
server.start(function () {
    console.log('Server running at :', server.info.uri);
});