function solve(args){
    var protocol,
        server,
        resource;
    var split = args[0].split('://')
  
    protocol = split[0];

    var index = split[1].indexOf('/');
    server = split[1].substring(0,index);
    resource = split[1].substring(index);

    console.log('protocol: ' + protocol);
    console.log('server: ' + server);
    console.log('resource: ' + resource);
}

var test = [ 'http://telerikacademy.com/Courses/Courses/Details/239' ];

solve(test);