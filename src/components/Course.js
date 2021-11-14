import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Container,Row,Col,Button } from 'react-bootstrap'
import './Course.css'

const URL = "http://localhost:3002/course"
function Course() {
    const [course,setCourse] = useState([])
    const [flag,setFlag] = useState(false)
    const navigate = useNavigate()
     useEffect(()=>{
        axios.get(URL)
        .then(res=>
           { console.log(res.data)
           setCourse(res.data)}
            )
    },[])

    const enquire=(data)=>{
        setFlag(true) 
        if(flag)
        {
            navigate(`/form/${data.name}`)     
        }       
    }

    return (
        <div>
            <h2 style={{textAlign:'center',margin:'20px',letterSpacing:'1px'}}>Courses</h2>
            <Container>
                    
                        {course.map(data=>
                        <Row className="box" key={data.id}>
                            <Col><img src={data.image} className="img"/></Col>
                            <Col>
                            <b className="title">{data.name}</b>
                            <p className="details">{data.details}</p>
                            <p className="price">Price - Rs. {data.price}</p>
                            <p className="price">Duration -  {data.duration}</p>
                              <Button onClick={()=>enquire(data)} variant="warning">Enquire</Button>


                            </Col>
                            
                            </Row>
                            )}

                   
             </Container>
            
                
        </div>
       
    )
}

export default Course
