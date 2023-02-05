import express from 'express';
import pkg, { stat } from 'fs-extra';
const { readFileSync } = pkg;
import { createServer } from 'https';
import { compiler, dir } from './utils';

const app = express()
app.use(express.static('public/'))
app.use(express.json(), express.urlencoded({extended: true}))

const httpsServer = createServer({
    key: readFileSync("./cert/example.key"),
    cert: readFileSync("./cert/example.crt")
}, app)
httpsServer.listen(process.env.PORT, () => {
    console.log(`sever running on port: ${process.env.PORT}`)
})

app.get("/", async(req, res) => {
    
})

compiler.run((err, stats) => {
    if (err) {
        console.log(err);
    }   else    {
        console.log('build succeded!');
    }
    compiler.close((closeErr) => {
        // console.log(closeErr);
    })
})