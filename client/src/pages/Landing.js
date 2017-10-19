import React from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const Landing = () => {
  return(
    <div>
      <div align="center"><img src={require('./landing/coverphoto.jpg')} alt="guy infront of computer stretches his arms out" /></div>
      <br/>
      <Grid container>
        <Grid item xs={4}>
          <h4 align="center"><i class="material-icons">alarm_on</i></h4>
          <p align="center">real-time data</p>
        </Grid>
        <Grid item xs={4}>
          <h4 align="center"><i class="material-icons">https</i></h4>
          <p align="center">we keep <b>none</b> of your personal info</p>
        </Grid>
        <Grid item xs={4}>
          <h4 align="center"><i className="material-icons">file_download</i></h4>
          <p align="center">download your investments as pdf</p>
        </Grid>
      </Grid>
      <br/>
      <br/>
      <div align="center">
        <Button href="/auth/google" raised style={{ backgroundColor: '#1980EF', color: 'white' }}>
          Start here
        </Button>
      </div>
    </div>
  )
}

export default Landing;
