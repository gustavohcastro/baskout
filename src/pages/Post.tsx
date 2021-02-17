import React, { useEffect, useState } from 'react'
import { Button, Image, Jumbotron } from 'react-bootstrap';
import Firebase from '../firebase'


interface Posts{
    key: any;
    titulo: string;
    imagem: string;
    conteudo: string;
}

function Post(props: any) {

    const [postagem, setPostagem]  = useState<Posts>();

    useEffect( () => {
        async function loadPost(){
            const {id} = props.match.params;

            const posts = Firebase.app.ref('posts')
            await posts.once('value', (snapshot)  => {
                snapshot.forEach((childItem) =>{
                    if (childItem.key === id){
                        setPostagem({
                            key: childItem.key,
                            titulo : childItem.val().titulo,
                            imagem : childItem.val().imagem,
                            conteudo : childItem.val().conteudo,
                        })
                    }
                })
            })
            console.log(postagem)
        }
        loadPost()
        
    },[])

    return (
            <Jumbotron>
                <h1>{postagem?.titulo}</h1>
                <Image
                    src={postagem?.imagem}
                    width={'100%'}
                    height={400}
                />
                <p>
                    {postagem?.conteudo}
                </p>
            </Jumbotron>
    )
}

export default Post