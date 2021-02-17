import React, { useEffect, useState } from 'react';
import {Navbar, Nav, Carousel, Container, Image, Jumbotron, Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Firebase from '../firebase'

interface Posts{
    key:any;
    titulo:string;
    imagem:string;
    conteudo:string;
}

function Home() {
  
  const [postagens, setPostagens]  = useState<Posts[]>([])

  useEffect( () => {
    async function loadPosts() {
        const posts = Firebase.app.ref('posts')
        
       await posts.once('value', (snapshot)  => {
            let posts: Posts[] = []
            snapshot.forEach((childItem) =>{
                posts.push({
                    key: childItem.key,
                    titulo : childItem.val().titulo,
                    imagem : childItem.val().imagem,
                    conteudo : childItem.val().conteudo,
                })
            })
            posts.reverse();
            setPostagens(posts)
            
        })
    }
   loadPosts();
  },[])


  return (
  <>
    <Carousel id='#home'>
      <Carousel.Item>
        <Image
          width="100%"
          height={400}
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1067&q=80"
        />
        <Carousel.Caption>
          <h3>Seja bem vindo ao Baskout</h3>
          <p>Sports Blog & Experience</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          width="100%"
          height={400}
          src="https://images.unsplash.com/photo-1485395037613-e83d5c1f5290?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
        />
        <Carousel.Caption>
          <h3>Projeto Integrador</h3>
          <p>Este é o resultado do meu projeto integrador documentado no 2º ano da IA18, consiste em um web site sobre basquete onde podem ser publicados e apresentados fundamentos e experiências do esporte.
    </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          width="100%"
          height={400}
          src="https://images.unsplash.com/photo-1467809941367-bbf259d44dd6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1190&q=80"
        />
        <Carousel.Caption>
          <h3>Nosso objetivo</h3>
          <p>Buscar ensinar regras básicas e posições utilizados no basquete</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

    <Jumbotron style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <div>
      <h1>Caso tenha alguma sugestão</h1>
      <p>
        Contate-nos clicando no botão abaixo
      </p>
      
      <p>
        <Button variant="primary" href="/contato">Contato</Button>
      </p>
      </div>
      <Image
        width={300}
        src={'https://images.unsplash.com/photo-1474224017046-182ece80b263?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'}
      />
    </Jumbotron>
    <Jumbotron style={{
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'center',
        backgroundColor:"#ffffff"
      }}>
      <div>
        <h1 id="#blog">Postagens</h1>
      </div>
    </Jumbotron>
    <div style={{
      width:'100%',
      display:'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      justifyContent:'space-evenly',
      alignItems:'center',
      }}>
    { postagens?.length > 0 && postagens.map( (post) => (
        <Card style={{height:400, width:400, marginBottom:20, overflow:'hidden'}} key={post.key}>
        <Card.Img 
          height={150}
          width={150}
          variant="top" 
          src={post.imagem} 
          />
          <Card.Body>
            <Card.Text>
                <h3>{post.titulo} </h3>
            <p style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} > {post.conteudo}</p>
            </Card.Text>
            <Button variant="outline-primary" href={`/post/${post.key}`} >Ver mais</Button>
          </Card.Body>
        </Card>
      ))}
      </div>
      
    </>
  );
}

export default Home;
