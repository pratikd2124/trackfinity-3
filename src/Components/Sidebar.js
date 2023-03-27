import React from 'react'
import { Autocomplete, Box, Button, Grid, Paper, TextField, Typography, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link, useNavigate } from 'react-router-dom'
import { jsondes } from '../assets/linker'
import BlurOnIcon from '@mui/icons-material/BlurOn';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        padding: 20,
    },
    paper: {
        padding: 20,
        textAlign: "center",
        color: "black",

        "&:hover": {
            cursor: "pointer",
        },
    },
    button: {
        margin: 10,
    },
}))
const Sidebar = () => {
    const role = localStorage.getItem('trackfinity-role')

    const classes = useStyles()
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const sx = {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#c9c9c9"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#c9c9c9"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#c9c9c9"
        },
        "& .MuiOutlinedInput-input": {
            color: "#c9c9c9"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#c9c9c9"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#c9c9c9"
        },
        "& .MuiInputLabel-outlined": {
            color: "#c9c9c9"
        },
        "&:hover .MuiInputLabel-outlined": {
            color: "#c9c9c9"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#c9c9c9"

        },
        "& .MuiAutocomplete-clearIndicator": {
            color: "#c9c9c9"
        },
        "&:hover .MuiAutocomplete-clearIndicator": {
            color: "#c9c9c9"
        },
        "& .MuiAutocomplete-clearIndicatorDirty": {
            color: "#c9c9c9"
        },
        "&:hover .MuiAutocomplete-clearIndicatorDirty": {
            color: "#c9c9c9"
        },
        "& .MuiAutocomplete-popupIndicator": {
            color: "#c9c9c9"
        },
        "&:hover .MuiAutocomplete-popupIndicator": {
            color: "#c9c9c9"
        },
        "& .MuiAutocomplete-endAdornment": {
            color: "#c9c9c9"
        },
        "&:hover .MuiAutocomplete-endAdornment": {
            color: "#c9c9c9"
        },
        
    }

    return (
        <>
            <Paper className={classes.paper} style={{ height: !isSmallScreen ? "100%": "", cursor: "default", backgroundColor: "#040622", color: "#c9c9c9" }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={12} sm={3} lg={12}>
                        <Typography variant="h4" style={{ color: "#c9c9c9", marginTop: "3%" }}>Trackfinity</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{ marginBottom: "10%", width: "100%", border: "0.1rem solid #c9c9c9", borderRadius: "50%" }}></div>
                    </Grid>

                    {!isSmallScreen ? jsondes[role].map((data) => (
                        <Grid item xs={12} md={12} sm={12} lg={12} >
                            <BlurOnIcon style={{ color: "#c9c9c9",marginRight:"0.9rem",float:"left",marginLeft:"0.8rem" }}/>
                            {data.href ? <Typography variant="h6" onClick={()=>{window.open(data.href,'_blank')}} style={{ color: "#c9c9c9",float:"left",textDecoration:"none" }}>{data.name}</Typography> :  <Typography variant="h6"  component={Link} to={data.path} style={{ color: "#c9c9c9",float:"left",textDecoration:"none" }}>{data.name}</Typography>}
                        </Grid>
                    )) : (
                        <Grid item xs={12} md={12} sm={12} lg={12}>
                            <Autocomplete
                                sx= {sx}
                                options={jsondes[role]}
                                getOptionLabel={(option) => option.name}
                                fullWidth
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Select an option"
                                        variant="outlined"
                                        margin="normal"
                                    />
                                )}
                                renderOption={(props, option) => (
                                    <Box component={Link} to={option.path} style={{ textDecoration: 'none', color: "#0121c1" }} {...props}>
                                        <Typography variant="h6">{option.name}</Typography>
                                    </Box>
                                    )}
                                    
                            />

                                
                        </Grid>
                    )}


                </Grid>
            </Paper>
        </>
    )
}

export default Sidebar
