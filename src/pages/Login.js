import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [user, setUser] = React.useState({
        email: '',
        password: ''
    })

    // const [role, setRole] = React.useState('student')

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(user)
        await fetch("http://13.113.26.29:5000/user/login", {
            method: "POST",
            headers: {
                'Content-Type':"application/json"
            },
            body: JSON.stringify(user)
        }).then((res) => {
            res.json().then(async(data) => {
                console.log(data);
                if (!data.success) {
                    alert("Login Unsuccessfully")
                    return;
                }
                await fetch("http://13.113.26.29:5000/user/user/" + data.data._id, {
                    method: 'GET',
                }).then((res) => {
                    res.json().then((data) => {
                        console.log(data);
                        localStorage.setItem("trackfinity-role", data.data.role)
                        localStorage.setItem("trackfinity-user", JSON.stringify(data.data))
                        if(data.data.role === 'student'){
                            navigate('/studdashboard')
                        }	
                        else if(data.data.role === 'university'){
                            navigate('/orgdashboard')
                        }
                        else if(data.data.role === 'teacher'){
                            navigate('/teachdashboard')
                
                        }
                    })
                })
            })
        })
        
    }

    return (
        <div>
            <Box style={{ color: "white", width: "60vh", margin: "auto", marginTop: "5rem", background: "rgba(255, 255, 255, 0)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", backdropFilter: "blur(20px)", padding: "5vh" }}>
                <Form>
                    <Typography variant='h4' align='center' style={{ marginBottom: '5%', color: 'white', fontWeight: 700 }}>
                        Login
                    </Typography>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e)=>{setUser({...user,email:e.target.value})}} value={user.email} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={user.password} onChange={(e)=>{setUser({...user,password: e.target.value})}} type='password' placeholder='Password' />
                        <Form.Text className='text-muted'>
                            We'll never share your password with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Button variant='primary' onClick={handleSubmit} style={{ margin: 'auto', display: 'block' }}>
                        Submit
                    </Button>

                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                        <Typography variant='body2' align='center' style={{ marginTop: '5%', color: '#c2c2c2', fontFamily: 'Times Roman', fontWeight: 700 }}>
                            Don't have an account? <a href='/' >Sign Up</a>
                        </Typography>
                    </Form.Group>
{/* 
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'  >
                        <Form.Label>Select Role</Form.Label>
                        <Form.Select defaultValue={role} onChange={(e)=>{setRole(e.target.value)}} aria-label='Default select example'>
                            <option value='student'>Student</option>
                            <option value='university'>University</option>
                            <option value='teacher'>Professor</option>
                        </Form.Select>
                    </Form.Group> */}
                </Form>
            </Box>
        </div>
    )
}

export default Login