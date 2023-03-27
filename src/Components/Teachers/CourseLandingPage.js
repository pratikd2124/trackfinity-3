import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Form } from 'react-bootstrap'
import coursebg from '../../assets/images/coursebg.jpg'
import Axios from 'axios'
const CourseLandingPage = (props) => {

    const UploadImage = (files) => {
        const formdata = new FormData()
        formdata.append('file', files[0])
        formdata.append('upload_preset', 'uoqioh9x')

        console.log(formdata)
        Axios.post('https://api.cloudinary.com/v1_1/djl3fg131/image/upload', formdata).then((res) => {
            if (res.data.url !== '') {
                props.setdata({ ...props.data, courseImage: res.data.url })
            }
        })
    }

    return (
        <div>
            <Box style={{ marginTop: "2rem" }}>
                <Grid container spacing={2} sx={{ color: "#c9c9c9" }}>
                    <Grid item xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label  >Course Title</Form.Label>
                            <Form.Control onChange={(e) => {
                                props.setdata({ ...props.data, coursetitle: e.target.value })
                            }} type="text" value={props.data.coursetitle} placeholder="Enter Course Title" />
                        </Form.Group>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Course SubTitle</Form.Label>
                            <Form.Control onChange={(e) => {
                                props.setdata({ ...props.data, coursesubtitle: e.target.value })
                            }} type="text" value={props.data.coursesubtitle} placeholder="Enter Course Description" />
                        </Form.Group>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Course Description</Form.Label>
                            <Form.Control onChange={(e) => {
                                props.setdata({ ...props.data, courseDescription : e.target.value })
                            }} as="textarea" value={props.data.courseDescription} rows={3} placeholder="Enter Course Description" />
                        </Form.Group>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Course Level</Form.Label>
                            <Form.Select onChange={(e) => {
                                props.setdata({ ...props.data, level: e.target.value })
                            }} defaultValue={props.data.level} aria-label="Default select example">
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </Form.Select>
                        </Form.Group>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Course Category</Form.Label>
                            <Form.Select onChange={(e) => {
                                props.setdata({ ...props.data, category: e.target.value })
                            }} defaultValue={props.data.category} aria-label="Default select example">
                                <option value="academics">Academics</option>
                                <option value="arts">Arts</option>
                                <option value="business">Business</option>
                                <option value="computer-science">Computer Science</option>
                                <option value="data-science">Data Science</option>
                                <option value="design">Design</option>
                                <option value="health">Health</option>
                                <option value="language">Language</option>
                                <option value="math">Math</option>
                                <option value="personal-development">Personal Development</option>
                            </Form.Select>
                        </Form.Group>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ color: "#c9c9c9" }}>Course Image</Typography>
                        <Box style={{ width: "25rem", height: "15rem", border: "1px solid #c9c9c9" }}>
                            <img src={props.data.courseImage ? props.data.courseImage : coursebg} alt="Thumnail" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>

                        <Typography variant="p" sx={{ color: "#c9c9c9" }}>
                            Upload Course Image that will be displayed on the course landing page.
                            <br />
                            Note : Image size should be less than 2MB.
                            <br />
                            Extension : .jpg, .jpeg, .png

                        </Typography>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control type="file" onChange={(e) => { UploadImage(e.target.files) }} accept='image/*' />
                        </Form.Group>

                    </Grid>
                </Grid>

            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="error"
                    variant="contained"
                    disabled={props.activeStep === 0}
                    onClick={props.handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />


                <Button variant="outlined" onClick={props.handleNext}>
                    {props.activeStep === props.steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </div>
    )
}

export default CourseLandingPage