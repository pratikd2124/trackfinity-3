import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import coursebg from '../../assets/images/coursebg.mp4'
import Axios from 'axios'

const CourseLecture = (props) => {
    // const [file, setfile] = useState(coursebg)

    // const handleFile = async (e) => {
    //     const files = e.target.files[0];
    //     if (!files) return;
    //     setfile(URL.createObjectURL(files));
    //     console.log(files)
    // }

    const handleFile = async (e) => {
        e.preventDefault()
        const formdata1 = new FormData()
        formdata1.append('file', e.target.files[0])
        formdata1.append('upload_preset', 's82fnpt0')
        await Axios.post('https://api.cloudinary.com/v1_1/djl3fg131/video/upload', formdata1).then((res) => {

            console.log(res)
        props.setdata({ ...props.data, courseVideo: res.data.url })


        })
    }
    const videoRef = useRef();
    useEffect(() => {
        videoRef.current?.load();
    }, [props.videoFile]);

    return (
        <div>
            <Box style={{ marginTop: "2rem" }}>
                <Grid container spacing={2} sx={{ color: "#c9c9c9" }}>
                    <Grid item xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label  >Lecture Title</Form.Label>
                            <Form.Control onChange={(e) => {
                                props.setdata({ ...props.data, lecturetitle: e.target.value })
                            }} value={props.data.lecturetitle} type="text" placeholder="Enter Course Title" />
                        </Form.Group>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Lecture Description</Form.Label>
                            <Form.Control onChange={(e) => {
                                props.setdata({ ...props.data, lecturedescription: e.target.value })
                            }} value={props.data.lecturedescription} as="textarea" rows={3} placeholder="Enter Course Description" />
                        </Form.Group>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ color: "#c9c9c9" }}>Video must be less than 10MB</Typography>
                        <Box style={{ width: "25rem", height: "15rem", border: "1px solid #c9c9c9" }}>

                            <video ref={videoRef} style={{ width: "100%", height: "100%", objectFit: "contain" }} controls>
                                <source src={props.data.courseVideo} />
                            </video>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <br />
                        <br />
                        <Typography variant="p" sx={{ color: "#c9c9c9" }}>
                            Upload Lecture Video that will be displayed on the course.
                            <br />
                            Note : Video size should be less than 10MB.
                            <br />
                            Extension : .mp4

                        </Typography>
                        <br />
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="file" placeholder="Enter Course Title" accept=".mp4" onChange={handleFile} />
                        </Form.Group>
                    </Grid>
                </Grid>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    variant="outlined"
                    disabled={props.activeStep === 0}
                    onClick={props.handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />


                <Button variant='outlined' onClick={props.handleNext}>
                    {props.activeStep === props.steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </div>
    )
}

export default CourseLecture