import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Container, Table } from 'react-bootstrap'
const URL= "http://localhost:3002/formdata"
function DisplayEnquiry() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(URL)
        .then(res=>{
            setData(res.data)
        })
    },[])
    return (
        <div>
            <h2 style={{textAlign:'center',margin:'20px',letterSpacing:'1px'}}>Enquiry Details</h2>
            <Container style={{marginTop:'10px'}}>
                <Table  bordered hover>
                <thead  style={{backgroundColor:"#FFCA2C"}}>
                     <tr>
                      <th>Sr.No</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Mobile Number</th>
                     <th>Course Enquired</th>
                     <th>Enquiry</th>

             </tr>
  </thead>
        <tbody style={{backgroundColor:'mintcream'}}>
            {data.length>0 ?
            data.map(data=>
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.mobile}</td>
                <td>{data.course}</td>
                <td>{data.enquiry}</td>

            </tr>
            ):<tr>No data to display</tr>}
                </tbody>
                </Table>
                </Container>
        </div>
    )
}

export default DisplayEnquiry
