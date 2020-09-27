import React from 'react'
import {Component} from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";


class blog extends Component{
    render() {
        return (
          <Card
            style={{
              margin: "50px auto",
              padding: "75px 50px",
              maxWidth: "1000px",
            }}
          >
            <Grid container direction="column" spacing={1}>
                <Grid item style={{padding: "30px 0px" }}>
                    <Typography variant = 'h2'>Title</Typography>
                </Grid>
                <Grid item style={{padding: "10px" }}>
                    <Typography variant = 'h5'>Name</Typography>
                </Grid>
                <Grid item style={{padding: "10px" }}>
                    <Typography variant = 'h6'>Content</Typography>
                </Grid>
            </Grid>
            </Card>
        )
    }
}

export default blog;