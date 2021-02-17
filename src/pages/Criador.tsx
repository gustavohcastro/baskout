import React from 'react'
import { Button, Image, Jumbotron } from 'react-bootstrap'

function Criador() {
    return(
       <Jumbotron>
           <div style={{display:'flex', flexDirection:'row'}}>
           <Image
            src="https://pbs.twimg.com/media/EuXFstKWgAch2Ee?format=jpg&name=large" 
            height={400}
            />
               <div style={{marginLeft:20}}>
                <h1>Alexandre Martin</h1>
                <p>
                    Meu nome é, Alexandre Martin, um amante de basquete e estudante do Instituto Federal Catarinense -  Campus Camboriú, onde estou cursando o Ensino Técnico de Informática integrado ao Ensino Médio, em uma das disciplinas deste curso me foi proposto que unisse uma matéria do Ensino Médio, com as matérias do Ensino Técnico, então resolvi unir o útil ao agradável e assim surgiu este blog com o tema de basquete, lugar em que posso compartilhar minha paixão pelo esporte.
                </p>
            <p>
            Este sou eu em 2019 com o uniforme do meu time da escola, fato irrelevante é que apesar da minha paixão por basquete é que tenho 1,65m de altura, comecei a jogar ainda no ensino fundamental onde conheci o basquete pela grade curricular de educação física e o que me inspirou a começar a treinar foi o anime Kuroko no Basket, passei por muitos desafios devido a minha altura (ou pela falta dela kkk), mas hoje sou capitão do time da escola e tenho muito orgulo! 
            </p>
                </div> 
            
            </div>
        </Jumbotron>
    )
}

export default Criador