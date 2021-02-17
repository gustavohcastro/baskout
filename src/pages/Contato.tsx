import React from 'react'
import { Button, Form, FormControl, Image, InputGroup, Jumbotron } from 'react-bootstrap';

function Contato() {
    return (
        <Jumbotron>
        <h1>Contato</h1>
        <p>
            Caso tenha alguma sugestão, comentário, dúvidas e afins, não hesite em nos encaminhar um email.
            Seu feedback é importante!
        </p>
        <p>
            Nosso e-mail: alexandremartin2011@hotmail.com
        </p>
        <p>
            Nosso telefone: (47) 999440334
        </p>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div>
                <h5>Caso deseje se comunicar diretamente use o formulário a seguir</h5>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Telefone</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <p>
                <Button variant="primary">Enviar</Button>
                </p>
            </div>
            <Image
            width={400}
            src="https://images.unsplash.com/photo-1482195740274-e367dbcdb9c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
            />
        </div>
      </Jumbotron>
    )
}
export default Contato;