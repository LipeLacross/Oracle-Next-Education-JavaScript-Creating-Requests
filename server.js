const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Configuração de CORS
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Porta dinâmica configurada pelo Render
const port = process.env.PORT || 3000;

server.use(router);
server.listen(port, () => {
    console.log(`JSON-Server is running on port ${port}`);
});
