import express from 'express'
import { BadRequestError, NotFoundError } from './erros'

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
            throw new BadRequestError('Nome é Obrigatorio')
        }
        if(!email){
            throw new BadRequestError('Email é Obrigatorio')
        }

        usuario.push({
            nome,
            email
        })
        return res.status(201).json({ nome, email })
        } catch(error){
            if(error instanceof BadRequestError || error instanceof NotFoundError){
                return res.status(400).json({ mensagem: error.message })
            }
        
            return res.status(500).json({ 
                mensagem: 'Erro interno do servior'
            })

    }
}) 


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})