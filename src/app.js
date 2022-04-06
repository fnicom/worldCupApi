const grupos = require ("../api/worldCupApi.json");
const cors = require ("cors")

const express = require ("express");

const app = express();

app.use(cors())

app.use(express.json())

const port = 3000;

app.get('/', (req, res) => {
    res.json(grupos) 
})

app.listen(port, () => console.log(`App rodando na porta :${port}`))

