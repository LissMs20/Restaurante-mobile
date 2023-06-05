const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "El20ms2001@",
    database: "bdrestaurante",
})

app.post("/item", (req, res) => {
    const { item } = req.body;
    let SQL = "INSERT INTO avaliacoes ( itens, estrelas ) VALUES (?, ?)";
    db.query(SQL, [item.text, item.rating], (err, result) => {
        console.log(err);
    })
});

app.get ("/item", (req, res) =>{
    let SQL = "SELECT * from avaliacoes";

    db.query(SQL, (err, result) =>{
        if(err) console.log(err);
        else res.send(result);
    })
})

app.delete("/item/:id", (req, res) =>{
    const { id } = req.params;
    console.log("Informação: ", id)

    let SQL = "DELETE FROM avaliacoes WHERE (`id` = ?)";

    db.query(SQL, id, (err, result) => {
        console.log(err);
    })
})

app.listen(3001, () => {
    console.log("rodando servidor");
});