//define variables
const expressLayouts = require('express-ejs-layouts')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(expressLayouts)
app.use(express.static('assets'))
app.set('view engine', 'ejs')
app.set('views', './views')



//setup
app.get('/', (req, res) => {
    res.render("index", {"title":"swallowtail Tea"})
})

app.get('product', (req, res) => {
    res.send('This is product page!')
})



//routes
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

