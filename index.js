//import json server library
const jsonServer = require('json-server')
const cors=require('cors')


//creat server
const videoServer = jsonServer.create()

// create a router to connect the json file
const router = jsonServer.router('data.json')


//create middleware (json -> js)
const middleware = jsonServer.defaults()

 //connect with client
 videoServer.use(cors())
 videoServer.use(middleware)
 videoServer.use(router)


 const PORT =  4000
 videoServer.listen(PORT,()=>{
    console.log(`server started at : ${PORT}`);
 })