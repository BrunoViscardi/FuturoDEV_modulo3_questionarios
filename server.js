

const http = require("node:http")


/** 
 * GET + /usuarios = BUSCAR UM RECURSO NO BACK END
 * POST + /usuarios = ADICIONAR UM RECURSO (USUARIO) NO BACK-END
 * --- 
 * PUT + /usuarios/[id]:route-params = Atualizar vários do usuario especifico
 * PATCH + /usuarios/[id] = Atualizar um informação especifica
 * DELETE + /usuarios/[id] = REMOVER UM RECURSO ESPECIFICO
 */

const server = http.createServer((request, response) => {
    const { method, url } = request

    if(method === 'GET' && url === "/fundamentos") {

        return response.end("Hello world, fundamentos nodejs aplicado.") // early return
    }

})
const port = 3333
const hostname = "localhost" 

// http://[hostname]:[port]
server.listen(port, hostname, () => {
    console.log(`Servidor está rodando na porta ${port}: http://${hostname}:${port}`)
})