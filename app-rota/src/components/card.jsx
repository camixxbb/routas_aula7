import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imagem/Katamari-Damacy-Reroll-Destaque.jpg" />
      <Card.Body>
        <Card.Title>Katamari Damacy Reroll</Card.Title>
        <Card.Text>
         Vou jogar muito em casa.
        </Card.Text>
        <Button variant="primary">Comece a rolar!</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;