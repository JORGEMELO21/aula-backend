const http = require('http');

const host = 'localhost'
const port = 3000;
const botao = 'console.log("to no front")';
const resposta = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo Client-Side</title>
</head>
<body>
<h1>BOTO</h1>
<button id="meuBotao">Clique Aqui</button>
<script>${botao}</script>
</body>
</html>`

const requestListener = function (req, res) {
    console.log('chegou uma requisição no backend')
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(resposta);
}


const server = http.createServer();
server.on('request', requestListener)
server.on('request', requestListener)

server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}/`);
});