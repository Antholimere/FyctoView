import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

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
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    textDecoration: 'none',
    color: 'inherit'
  }
};

class Header extends Component {
  renderContent() {
    console.log(this.props.auth)
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <p><a style={styles.menuButton} href="/auth/google">Login with Google</a></p>;
      default:
        return <p><a style={styles.menuButton} href="/api/logout">Logout</a></p>;
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



