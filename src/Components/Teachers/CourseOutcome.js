import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Form } from 'react-bootstrap'

const CourseOutcome = (props) => {
    return (
        <div>
            <Box style={{ marginTop: "2rem" }}>
                <Grid container spacing={2} sx={{ color: "#c9c9c9" }}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h6" sx={{ color: "#c9c9c9" }}>Course Outcome</Typography>
                        <Typography variant="p" sx={{ color: "#c9c9c9" }}>
                            Course outcomes are the specific skills, knowledge, and abilities that students will acquire as a result of the course. Course outcomes are the intended results of the course. They are the skills, knowledge, and abilities that students will be able to demonstrate as a result of the course. Course outcomes are the intended results of the course. They are the skills, knowledge, and abilities that students will be able to demonstrate as a result of the course.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>What will student learn from this course</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Student will learn from this course ..." />
                        </Form.Group>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>What skills will student obtain from this course</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Skills obtained from this course ..." />
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

export default CourseOutcome