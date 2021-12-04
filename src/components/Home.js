import React from 'react';
import Card from 'react-bootstrap/Card';
import BeerImage from '../images/beers.png';
import RandomImage from '../images/random-beer.png';
import NewImage from '../images/new-beer.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
        <Card style={{ width: '21rem' }}>
        <Link to={`/beers/`} >
        <Card.Img variant="top" src={BeerImage} />
        </Link>
        <Card.Body>
          <Card.Title>All Beers</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed porta quam. Cras ac ultricies purus. Nulla facilisi. 
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '21rem' }}>
      <Link to={`/random-beer/`} >
  <Card.Img variant="top" src={RandomImage} />
  </Link>
  <Card.Body>
    <Card.Title>Random Beer</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed porta quam. Cras ac ultricies purus. Nulla facilisi. 
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '21rem' }}>
<Link to={`/new-beer/`} >
  <Card.Img variant="top" src={NewImage} />
  </Link>
  <Card.Body>
    <Card.Title>New Beer</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed porta quam. Cras ac ultricies purus. Nulla facilisi. 
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    )
}

export default Home
