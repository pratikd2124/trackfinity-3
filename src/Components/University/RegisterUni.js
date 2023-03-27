import { Avatar, Box, Typography } from '@mui/material'
import React,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const RegisterUni = () => {
    const [data, setdata] = useState({
        name: "",
        motive: "",
        phone: "",
        principal: "",
        address: "",
        email: "",
        password:"",
        role: "university"
        
    })

    const handleSubmit = () => {
        fetch("http://13.113.26.29:5000/user/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            res.json().then((data) => {
                if (!data.success) {
                    alert("Registration failed")
                    return;
                }

                fetch(`http://13.113.26.29:5000/user/getprofile/${data.data._id}`, {
                    method: 'GET',
                }).then((res) => {
                    res.json().then((data)=>{
                        if (!data.success) {
                            alert("Network Error")
                            return;
                        }
                        localStorage.setItem("trackfinity-user", JSON.stringify(data.data))
                        localStorage.setItem("trackfinity-role",data.data.role)
                        console.log(data.data)
                    })
                })
            })
        })
    }
  return (
      <>
      <Box style={{ color: "white", width: "60vh", margin: "auto",marginBottom: '5%', marginTop: "5rem", background: "rgba(255, 255, 255, 0)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", backdropFilter: "blur(60px)", padding: "5vh" }}>
                <Form>
                    <Typography variant='h4' align='center' style={{ marginBottom: '5%', color: 'white', fontWeight: 700 }}>
                        Register
                  </Typography>
                  <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e)=>{setdata({...data,name:e.target.value})}} value={data.name} type="text" placeholder="Enter name of your college" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e)=>{setdata({...data,email:e.target.value})}} value={data.email} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Motive of College / University</Form.Label>
                        <Form.Control as="textarea" onChange={(e)=>{setdata({...data,motive:e.target.value})}} value={data.motive} rows={3} type="text" placeholder="Enter decription or motive of college" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" onChange={(e)=>{setdata({...data,phone:e.target.value})}} value={data.phone} placeholder="Enter Contact number" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Address of College</Form.Label>
                        <Form.Control as="textarea" rows={3} type="text" onChange={(e)=>{setdata({...data,address:e.target.value})}} value={data.address} placeholder="Enter Address of college" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Principal of College</Form.Label>
                        <Form.Control type="text" onChange={(e)=>{setdata({...data,principal:e.target.value})}} value={data.principal} placeholder="name of principal" />
                  </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' onChange={(e)=>{setdata({...data,password:e.target.value})}} value={data.password} placeholder='Password' />
                  </Form.Group>
                  <Form.Group className='mb-3  p-3 mt-2' controlId='formBasicCheckbox'>
                  <Typography variant='body2' align='center' style={{ marginTop: '5%', color: '#c2c2c2', fontFamily: 'Times Roman', fontWeight: 700 }}>
                            If Already Registered <a href='/login' className='text-white text-xl'>Login</a>
                        </Typography>
                  </Form.Group>
                  

                    <Button variant='primary' onClick={handleSubmit} style={{ margin: 'auto', display: 'block' }}>
                        Register
                    </Button>

                    
                </Form>
            </Box>
      </>
  )
}

export default RegisterUni