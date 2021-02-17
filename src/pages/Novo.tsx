import React, { ChangeEvent, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Firebase from '../firebase'

function Novo() {

    const [titulo, setTitulo]= useState<String>()
    const [imagem, setImagem] = useState<String>()
    const [conteudo, setConteudo]= useState<String>()
    
    const history = useHistory()

    const handleSubmit =  async () => {

        if(titulo !== '' && conteudo !== '' && imagem !== ""){
            let posts = Firebase.app.ref('posts')
            let chave: any = posts.push().key
            await posts.child(chave).set({
            titulo: titulo,
            imagem: imagem,
            conteudo: conteudo
            })
            history.push('/');
        }else{
            alert('Preencha todos os campos')
        }
    }

    const handleFile = (file: React.ChangeEvent<HTMLInputElement>) => {
        console.log(file)
    }
           
    const handleUpload = () => {
        console.log('noix')
    }
    
    return(
        <Container>
            <h1>Nova Postagem</h1>
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Título</Form.Label>
          <Form.Control type="email" placeholder="Título da postagem" onChange={ (e) => setTitulo(e.target.value)} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Imagem</Form.Label>
            <Form.Control type='text' placeholder="URL da imagem"  onChange={ (e) => setImagem(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Conteúdo</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={ (e) => setConteudo(e.target.value)}/>
        </Form.Group>
      </Form>
      <Button onClick={handleSubmit}>
          Criar Postagem
      </Button>
      </Container>
    )
}

export default Novo