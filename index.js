//import jsonserver using require methods

const jsonserver = require('json-server')


//create server

const server = jsonserver.create()


const router=jsonserver.router('db.json')


//create middleware

const middleware=jsonserver.defaults()

// port

const PORT = process.env.PORT || 4000

//use middleware in server

server.use(middleware)
server.use(router)

//listen server

server.listen(PORT, () => {
    console.log(' media playerserver  is started at port:'+PORT);
})