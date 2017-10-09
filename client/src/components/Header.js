import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  appBar: {
    background: '#1D8BF1'
  },
  addButton: {
    color: 'white',
    textDecoration: 'none'
  }
};

class Header extends Component {
  renderContent() {
    console.log(this.props.auth)
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Button href="/auth/google" color="contrast">Login with Google</Button>;
      default:
        return [
          <Link key="1" to="/investments/new" style={styles.addButton}><Button color="contrast"><i className="material-icons">add</i></Button></Link>,
          <Button key="2" href="/api/logout" color="contrast">Logout</Button>
        ];
    }
  }

  render(){
    return (
      <div style={styles.root}>
        <AppBar style={styles.appBar}>
          <Toolbar>
            <Typography type="title" color="inherit" style={styles.flex}>
              FV
            </Typography>
            {this.renderContent()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps({auth}) {
  return { auth }
}

export default connect(mapStateToProps)(Header);
