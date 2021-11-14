import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import { Card, CardImg, Col, Container, Row , Button} from 'react-bootstrap'
function Products() {
    const [products,setProducts] = useState([])
    const URL = "http://localhost:3001/data"

    useEffect(()=>{
        axios.get(URL)
        .then(res=>{
            console.log(res.data)
            setProducts(res.data)
        })
    },[])
    console.log(products);
    return (
        <>
           <h2 style={{textAlign:'center',margin:'20px',letterSpacing:'1px'}}>Products</h2>
           <Container>
           <Row style={{marginBottom:'10px'}}>
           {products.map(data=>
                   
                       <Col sm={4}>
                       <Card style={{ width: '18rem',marginBottom:'20px' }}>
                          <CardImg variant="top" src={data.images} style={{height:'250px'}}></CardImg>
                          <Card.Body>
                              <Card.Title>{data.name}</Card.Title>
                              <Card.Text style={{color:'red'}}>Price: $ {data.price}.00</Card.Text>
                              <Button variant="primary">Add to Cart</Button>
                          </Card.Body>
                          </Card>
                       </Col>
                   
               
           )}
           </Row>
           </Container>
            
        </>
    )
}

export default Products
