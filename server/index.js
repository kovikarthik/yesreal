const express = require("express")
const app = express()
const cors = require("cors")



app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: "10000mb", extended: true }))

app.use(cors())


app.use(function (req, res, next) {
    res.setHeader("Content-Security-Policy", "frame-ancestors 'self';");
    next();
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})


if (process.env.NODE_ENV == "production") {
    app.use(express.static('client/build'))
    const path = require("path")
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}








const host = '0.0.0.0';
const port = process.env.PORT || 4000;

app.listen(port, host, () => console.log("server listened" + port + host))
