import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CourseLandingPage from './CourseLandingPage';
import CourseLecture from './CourseLecture';
import CourseOutcome from './CourseOutcome';
import Axios from 'axios';

import coursebg from '../../assets/images/coursebg.mp4'

const steps = ['Course Landing Page', 'Course Lecture', 'What will Student learn'];

export default function CoursesTeach() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [imageFile, setImageFile] = React.useState(null)
  const [videoFile, setVideoFile] = React.useState(coursebg)

  const [data, setData] = React.useState({
    coursetitle: "",
    coursesubtitle: "",
    courseDescription: "",
    level: "Beginner",
    category: "academics",
    courseImage: "",
    courseVideo: "",
    lecturetitle: "",
    lecturedescription: "",
    lecturevideo: "",
    outcome: "",
    skillsoutcome: "",
  })

  const handleSubmit = () => {
    console.log(data)
 
    fetch('http://13.113.26.29:5000/user/courses/addcourse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: data.coursetitle,
        subtitle: data.coursesubtitle,
        description: data.courseDescription,
        level: data.level,
        category: data.category,
        image: data.courseImage,
        lecturevideo: data.courseVideo,
        lecturetitle: data.lecturetitle,
        lecturedescription: data.lecturedescription,
        outcome: data.outcome,
        skillsoutcome: data.skillsoutcome,
        university: JSON.parse(localStorage.getItem('trackfinity-user')).data.university,
        author: JSON.parse(localStorage.getItem('trackfinity-user')).data._id,
      }),
    }).then((res)=>{
      res.json().then((data)=>{
        console.log(data)
        if(data.success) alert('Course Added Successfully')
        if(! data.success) alert('Something went wrong')
      })
    })
          
  }

  return (
    <Box sx={{ width: "100%", margin: "auto", marginTop: "2rem", background: "rgba(255, 255, 255, 0)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", backdropFilter: "blur(20px)", padding: "5vh" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption" style={{ color: "#c9c9c9" }}>Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: 'secondary.main', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-root': {
                color: 'secondary.main', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'secondary.main', // Just text label (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: 'secondary.main', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
              {
                color: 'secondary.main', // Just text label (ACTIVE)
              },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: '#c9c9c9', // circle's number (ACTIVE)
              },
              '& .MuiStepLabel-root .Mui-disabled': {
                color: 'secondary.main', // circle color (DISABLED)
              },
              '& .MuiStepLabel-label.Mui-disabled.MuiStepLabel-alternativeLabel':
              {
                color: 'secondary.main', // Just text label (DISABLED)
              },
              '& .MuiStepLabel-root .Mui-disabled .MuiStepIcon-text': {
                fill: '#c9c9c9', // circle's number (DISABLED)
              },


            }} key={label} {...stepProps}>
              <StepLabel  {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Submit</Button>
          </Box>
        </React.Fragment>
      ) :
        activeStep === 0 ? <CourseLandingPage handleBack={handleBack} handleNext={handleNext} steps={steps} activeStep={activeStep} data={data} setdata={setData} imageFile={imageFile} setImageFile={setImageFile} /> :
          activeStep === 1 ? <CourseLecture handleBack={handleBack} handleNext={handleNext} steps={steps} activeStep={activeStep} data={data} setdata={setData} videoFile={videoFile} setVideoFile={setVideoFile} /> :
            activeStep === 2 && <CourseOutcome handleBack={handleBack} handleNext={handleSubmit} steps={steps} activeStep={activeStep} data={data} setdata={setData} />

        //  : (
        //   <React.Fragment>
        //     <Typography sx={{ mt: 2, mb: 1, color: "#c9c9c9" }}>Step {activeStep + 1}</Typography>
        //     <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        //       <Button
        //         color="inherit"
        //         disabled={activeStep === 0}
        //         onClick={handleBack}
        //         sx={{ mr: 1 }}
        //       >
        //         Back
        //       </Button>
        //       <Box sx={{ flex: '1 1 auto' }} />
        //       {isStepOptional(activeStep) && (
        //         <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
        //           Skip
        //         </Button>
        //       )}

        //       <Button onClick={handleNext}>
        //         {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        //       </Button>
        //     </Box>
        //   </React.Fragment>
        // )
      }
    </Box>
  );
}