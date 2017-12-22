import React, { Component } from 'react';
import './App.css';
import { hashHistory } from 'react-router';
import cookie from 'react-cookie';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App_Home extends Component {
    constructor(props){
        super(props);
        this.state={
        username:'',
        dob:''
        }
    }

    componentWillMount() {
        
        if (cookie.load('logged')) {
            hashHistory.push('/app');
        }
    }

    handleClick(event) {
        let userdata = this.props.users.filter(data => { if (data.name === this.state.username && data.birth_year === this.state.dob) return data} );
        if(userdata.length !== 0){
            cookie.save('logged',true)
            hashHistory.push('/app');
        }
        else{
            alert('Invalid User')
        }
    }
    render() {
        const style = {
            margin: 15,
        };


        return (


            <div style={{ textAlign: 'center' }}>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({ username: newValue })}
                        />
                        <br />
                        <TextField
                            type="text"
                            hintText="Enter your DOB"
                            floatingLabelText="DOB"
                            onChange={(event, newValue) => this.setState({ dob: newValue })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    //console.log(state)
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(App_Home);

