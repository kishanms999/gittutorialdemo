const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/home'){
        res.write('<html>');
        res.write('<head> <title>Home Page</title></head> ');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        return res.end
    }
    else if(url==='/about'){
        res.write('<html>');
        res.write('<head> <title>About Page</title></head> ');
        res.write('<body><h1>Welcome To About Us Page</h1></body>');
        res.write('</html>');
        return res.end
    }
    else if(url==='/about'){
        res.write('<html>');
        res.write('<head> <title>About Page</title></head> ');
        res.write('<body><h1>Welcome To About Us Page</h1></body>');
        res.write('</html>');
        return res.end
    }
    else if(url==='/node'){
        res.write('<html>');
        res.write('<head> <title>Node Page</title></head> ');
        res.write('<body><h1>Welcome To My Node Js Project</h1></body>');
        res.write('</html>');
        return res.end
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head> <title>My First Page</title></head> ');
    res.write('<body><h1>Hello From My Node.js Server</h1></body>');
    res.write('</html>');
    res.end
});
server.listen(3000);