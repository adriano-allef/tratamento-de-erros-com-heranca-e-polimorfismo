import express from 'express'

const app = express()

type TUsuario = {
    nome: string
    email: string
}

const usuario: TUsuario[] = []

app.use(express.json())

app.post('/usuario', (req, res) => {
    const { nome, email } = req.body

    try{
        if(!nome){
            throw new Error('Nome é Obrigatorio')
        }
        if(!email){
            throw new Error('Email é Obrigatorio')
        }

        usuario.push({
            nome,
            email
        })
        return res.status(201).json({ nome, email })
    } 
    catch(error){
        const erroJavascript = error as Error
        return res.status(400).json({ error: erroJavascript.message })
    }
}) 


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})