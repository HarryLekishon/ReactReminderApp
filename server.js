const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json")
const middlewares = jsonServer.defaults({
    static: "./build"
})

const port = process.env.PORT || 5000;
server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/http://localhost:5000/tasks/*": "/$1"
    })
    
);

server.use(router);
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
    
})