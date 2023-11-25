const  express  =  require ('express');

const app = express()

app.use(express.static('main'))

app.get('/',(req, res)  =>  {
    res.send("Hello")
})

app.listen(3000, ()=>{
    console.log('express web app on: http://localhost:3000/print.html')
})//node server.js