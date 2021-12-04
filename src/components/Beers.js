import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import { useState } from 'react';
import Filter from './Filter';

function Beers(props) {

    const {beers} = props
//console.log(beers)

  const [beersCopy, setBeersCopy] = useState(beers)
    
if (!beers.length) {
    return <p>Just wait for it ...</p>
  }

  function handleSearch(event){
    let myBeer = event.target.value.toLowerCase()
    let filteredBeers = beers.filter((beers) => {
      return beers.name.toLowerCase().includes(myBeer)
    })
  
    setBeersCopy(filteredBeers)
  }
  //console.log(beersCopy)
  


    return (
        <div>
            <Header />
            <Filter class="search" btnSearch={handleSearch} />
            <br />
<h3>All our Beers</h3>
            {
                beersCopy.map((elem, i) => {
                    return ( 
                      <div className="align">
  <div className="card">            
  <Card style={{ width: '21rem' }}>
  <div id="container">
  <Card.Img class="listImage" variant="top" src={elem.image_url}  />
  </div>
  <Card.Body>
    <Card.Title>{elem.name}</Card.Title>
    <Card.Text>
    {elem.tagline}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{elem.contributed_by}</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Link to={`/beers/${elem._id}`} >
    <Card.Link href="#">See Detail</Card.Link>
    </Link>
  </Card.Body>
</Card>

</div> 



                </div> 
                
                )   
                })
            }



            
        </div>
    )
}

export default Beers
