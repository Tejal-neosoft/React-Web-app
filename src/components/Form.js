import React, { useState, useEffect, useRef } from 'react'
import { Form, FormLabel, Button, Alert, Container, FloatingLabel } from 'react-bootstrap'
import axios from 'axios';
import { useParams } from 'react-router-dom'
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regForMobile = RegExp(/^[7-9][0-9]{9}$/);
const URL = "http://localhost:3002/formdata"
function Forms() {
    const [select, setSelect] = useState()
    const params = useParams()
    const cname = params.name
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const mobileRef = useRef(null);
    const enqRef = useRef(null);
    const [data, setData] = useState()
    const [Errors, seterrors] = useState({
        name: '',
        email: '',
        mobile: '',
        enquiry: ''


    })
    useEffect(() => {
        axios.get(URL + '/' + cname)
    }, [])

    const handler = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                Errors.name = value.length > 3 ? '' : 'Name Should be greater than 3 letters';
                break;
            case 'email':
                Errors.email = mailformat.test(value) ? '' : 'Enter a valid email format';
                break;
            case 'mobile':
                Errors.mobile = regForMobile.test(value) ? '' : 'Enter valid mobile number';
                break;
            case 'enquiry':
                Errors.enquiry = value.length > 10 ? '' : 'Please enter your doubt';




        }
        const state = { [name]: value }
        setSelect([state])

    }
    const validate = (Errors) => {
        let valid = true;
        Object.values(Errors).forEach((val) =>
            val.length > 0 && (valid = false));
        return valid;

    }
    const submit = (event) => {
        event.preventDefault();
        if(nameRef.current.value !==""||emailRef.current.value !==""||mobileRef.current.value !==""||enqRef.current.value !==""){
        if (validate(Errors)) {
            let formData = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
                enquiry: enqRef.current.value,
                course: cname
            }
            axios.post(URL, formData)
            axios.get(URL)
                .then(res => {
                    setData(res.data)
                })


            alert("Data submitted Successfully")


            nameRef.current.value = ""
            emailRef.current.value = ""
            mobileRef.current.value = ""
            enqRef.current.value = ""


        }

        else {
            alert('errror')

        }
    }
    else{
        alert("Please fill the form")
    }

    }

    return (
        <div>
            <h3 style={{ textAlign: 'center', margin: '20px', letterSpacing: '1px' }}>Enquiry for {cname} course</h3>
            <Container>
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FormLabel>Name</FormLabel>
                        <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handler} ref={nameRef} />
                    </Form.Group>
                    {Errors.name.length > 0 ?
                        <Alert variant="danger">{Errors.name}</Alert> : null}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FormLabel>Email address</FormLabel>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handler} ref={emailRef} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group> {Errors.email.length > 0 ?
                        <Alert variant="danger">{Errors.email}</Alert> : null}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FormLabel>Mobile number</FormLabel>
                        <Form.Control type="number" placeholder="Enter Mobile" name="mobile" onChange={handler} ref={mobileRef} />
                        <Form.Text className="text-muted">
                            We'll never share your mobile with anyone else.
                        </Form.Text>
                    </Form.Group> {Errors.mobile.length > 0 ?
                        <Alert variant="danger">{Errors.mobile}</Alert> : null}
                    <FloatingLabel controlId="floatingTextarea2" label="Enter your doubts / suggestions">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a your enquiry here"
                            style={{ height: '100px' }}
                            name="enquiry" onChange={handler} ref={enqRef}
                        />
                    </FloatingLabel>
                    {Errors.enquiry.length > 0 ?
                        <Alert variant="danger">{Errors.enquiry}</Alert> : null}


                    <Button variant="primary" type="submit" style={{ margin: '30px 50px 10px 500px', padding: '10px', width: '150px' }}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Forms
