import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

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
  },
  dropDownButton: {
    color: '#212121',
    textDecoration: 'none'
  }
};

class Header extends Component {

  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Button href="/auth/google" color="contrast">Login with Google</Button>;
      default:
        return;
    }
  }

  render(){
    return (
      <div style={styles.root}>
        <AppBar style={styles.appBar}>
          <Toolbar>
            <Typography type="title" color="inherit" style={styles.flex}>
              <Link style={{textDecoration: 'none', color: 'white'}} to={this.props.auth ? '/portfolio' : '/'}>FV</Link>
            </Typography>
            {this.renderContent()}
            {this.props.auth &&
              <div>
                <Button
                  color="contrast"
                  aria-owns={this.state.open ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  Account
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  open={this.state.open}
                  onRequestClose={this.handleRequestClose}
                >
                  <MenuItem><Link to="/portfolio" style={styles.dropDownButton}>Portfolio</Link></MenuItem>
                  <MenuItem><a href="/api/logout" style={styles.dropDownButton}>Logout</a></MenuItem>
                </Menu>
              </div>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps({auth, investments}) {
  return { auth, investments }
}

export default connect(mapStateToProps)(Header);
