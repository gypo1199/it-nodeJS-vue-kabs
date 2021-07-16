const express = require('express') //надоходит в папке библиотеку express и подключает её
const app = express()//запуск функции express
const path = require('path')//работа с путями

const quantums = [
    {name:'It-квантум', state:'Идут занятия', count:'5'},
    {name:'ПромРобо-квантум', state:'Закрыт', count:'7'},
    {name:'Хайтек-квантум', state:'Открыт', count:'10'},
    {name:'VR-кванту', state:'Закрыт', count:'0'},
    {name:'Аэро-квантум', state:'Открыт', count:'5'},

]

app.use(express.static(path.resolve(__dirname, 'client')))//делаем папку статичной чтобы vue работал

app.get('/api/quantums', (req, res) => {
    setTimeout(() => {
        res.status(200).json(quantums)
    }, 1000)
 
})

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})


app.get('/admin', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'admin.html'))
})



app.listen(3000, () => {
    console.log('Сервер запущен на 3000 порту...')
})