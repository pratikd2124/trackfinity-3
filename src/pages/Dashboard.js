import React from 'react'
// sidebar and maincomponent with react router dom and responsive
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import Sidebar from '../Components/Sidebar'


const Dashboard = () => {
    return (
        <div>

            <Grid container >
                <Grid item md={2.5} sm={4} xs={12} style={{minHeight:"90vh"}}>
                    <Sidebar />
                </Grid>
                <Grid item md={8.5} sm={8} xs={12} >
                    <Outlet />
                </Grid>
            </Grid>

        </div>

    )
}

export default Dashboard