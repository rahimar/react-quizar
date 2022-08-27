import React from 'react';
import classes from "../styles/Videos.module.css";
import Video from './Video';
const Videos = () => {
    return (
        <>
              <div class={classes.videos}>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
                <Video></Video>
              </div>
        </>
    );
};

export default Videos;