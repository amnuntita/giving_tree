const express = require('express')


const app = express();
const cors = require('cors');
const port = process.env.PORT || 3002;
const query = require('./query');


app.use(express.json())
app.use(cors())

app.get('/post/:id',query.getPost)
app.get('/result/:keyword',query.getResult)
app.get('/new_post/:type',query.getNewPost)
app.get('/contact/:id',query.getContact)

app.use(express.static('public/assets/images'))


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})