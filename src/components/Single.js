import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import Header from './Header';

function Single() {

    const {beerId} = useParams()

    const [beerDetail, setBeerDetail] = useState(null)

    useEffect(() => {
        const getData = async () => {
           let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
           setBeerDetail(response.data)
        }
        getData()
    }, [])
    
    
        if(!beerDetail) {
            return <p>You lost me dude</p>
        }  

    return (
        
        <div>
            <Header />
            <div className="card">            
  <Card style={{ width: '21rem' }}>
  <div id="container">
  <Card.Img class="listImage" variant="top" src={beerDetail.image_url}  />
  </div>
  <Card.Body>
    <Card.Title>{beerDetail.name}</Card.Title>
    <ListGroupItem> {beerDetail.tagline}</ListGroupItem>
    <ListGroupItem>First Brewed in: {beerDetail.first_brewed} </ListGroupItem>
    <ListGroupItem>Attenuation level : {beerDetail.attenuation_level}</ListGroupItem>
    <br />
    <Card.Text>{beerDetail.description}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{beerDetail.contributed_by}</ListGroupItem>
  </ListGroup>
  <Card.Body>

  </Card.Body>
</Card>

</div>
        </div>
    )
}

export default Single
