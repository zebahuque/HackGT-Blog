import React, {Fragment} from 'react'
import {Component} from 'react'
import BlogCard from "./BlogCard"
//Mui
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import NewPostDialog from "@material-ui/core/NewPostDialog"
//import Fragment from "@material-ui/core/Fragment"

class home extends Component{
    state = {
        blogs: [
            {
                id: "01",
                title: "How to part 1",
                name: "Zeba Huque",
                date: "Sept. 19", 
                content: "Content 1",
            },
            {
                id: "02",
                title: "How to part 2",
                name: "Zeba Huque",
                date: "Sept. 19", 
                content: "Content 2",
            },
            {
                id: "03",
                title: "How to part 3",
                name: "Zeba Huque",
                date: "Sept. 19", 
                content: "Content 3",
            }
        ],
    };
    render() {
        return(
            <Fragment>
                <AppBar style={{padding: "20px"}}>
                    <Typography variant="h4">Zeba's Blog</Typography>
                    <NewPostDialog/>
                </AppBar>
                <Grid container 
                    direction="column"
                    justify="center"
                    spacing={5}
                    style={{paddingTop: "150px"}}>

                    {this.state.blogs.map((blogObject) => (
                        <Grid item>
                            <BlogCard blog={blogObject}/>
                        </Grid>
                    ))}
                </Grid>
            </Fragment>

        )
    }
}

export default home;