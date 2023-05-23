import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'




function ModelsCP() {
  return (
    <div className='contenair'>
    <Card style={{ width: '18rem' }}className='post' >
      <Card.Img variant="top" src="./public/logo/ImgPost.png" />
      <Card.Body>
        <div className='tittle&contenu'>
            <Card.Title className='title'>Tittle</Card.Title>
           
            <input className='text' type="text"></input>
           
           
        </div>
        <div className='allbtn'>
            <Button variant="outline-warning" className='buttoncp'>Like</Button>{''}
            <Button variant="outline-warning" className='buttoncp'>Commentaire</Button>{''}
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ModelsCP;