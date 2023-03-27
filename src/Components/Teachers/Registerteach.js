import { Avatar, Box, Typography } from '@mui/material'
import React,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Registerteach = () => {
    
    const [data, setdata] = useState({
        name: "",
        phone: "",
        degree: "",
        experience: "",
        university: "",
        email: "",
        password: "",
        role: "teacher"
        
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
                        <Form.Control onChange={(e)=>{setdata({...data,name: e.target.value})}} value={data.name} type="text" placeholder="Enter Full name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e)=>{setdata({...data,email: e.target.value})}} value={data.email} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control onChange={(e)=>{setdata({...data,phone: e.target.value})}} value={data.phone} type="text" placeholder="Enter Phone" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Degree / Qualification of teacher</Form.Label>
                        <Form.Control onChange={(e)=>{setdata({...data,degree: e.target.value})}} value={data.degree} type="text" placeholder="Enter qualification" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>University / College of Student</Form.Label>
                    <Form.Select onChange={(e)=>{setdata({...data,university: e.target.value})}} value={data.university} id="">
                          <option>Class A</option>
                          <option>Class B</option>
                          <option>Class C</option>          
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Experience</Form.Label>
                        <Form.Control onChange={(e)=>{setdata({...data,experience: e.target.value})}} value={data.experience} type="text" placeholder="Enter years of experience" />
                  </Form.Group>
                  
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e)=>{setdata({...data,password: e.target.value})}} value={data.password} type='password' placeholder='Password' />
                  </Form.Group>
                  <Form.Group className='mb-3  p-3 mt-2' controlId='formBasicCheckbox'>
                  <Typography variant='body2' align='center' style={{ marginTop: '5%', color: '#c2c2c2', fontFamily: 'Times Roman', fontWeight: 700 }}>
                            If Already Registered <a href='/login' className='text-white text-xl'>Login</a>
                        </Typography>
                  </Form.Group>
                  

                    <Button onClick={handleSubmit} variant='primary' style={{ margin: 'auto', display: 'block' }}>
                        Register
                    </Button>

                    
                </Form>
            </Box>
      </>
  )
}

export default Registerteach