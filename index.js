import e from 'express';
import express from 'express';

var ultimoId = 1;
var usuarios = [{

    nome: 'João',
    email: 'as'
}];

const app = express();

app.use(express.json());
app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
});
app.post('/usuarios/cadastrar', (req, res) => {
    const {nome, email} = req.body;
    
    console.log(nome, email);
    const usuario = {
        id: ultimoId++,
        nome,
        email,
    }
    
    usuario.push(usuario);
})

app.listen(3000)