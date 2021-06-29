const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write('<body><h1 style="color:blue;text-align:center;">My first Page</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit();
})


server.listen(3000);
