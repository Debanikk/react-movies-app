import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'

    }
}

const TabContainer = function(props){
    return(
        <Typography component="div" style={{padding: 0, textAlign: 'center'}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component{
    constructor()
    {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            username: "",
            loginPassword: "",
            firstname: "",
            lastname: "",
            email: "",
            registerPassword: "",
            contact: "",
            usernameRequired: "dispNone",
            loginPasswordRequired: "dispNone",
            firstNameRequired: "dispNone",
            lastnameRequired: "dispNone",
            emailRequired: "dispNone",
            registerPasswordRequired: "dispNone",
            contactRequired: "dispNone"
        };
    }
    openModalHandler = () => {
        this.setState({
            modalIsOpen: true,
            value: 0,
            username: "",
            loginPassword: "",
            usernameRequired: "dispNone",
            loginPasswordRequired: "dispNone",
            firstNameRequired: "dispNone",
            lastnameRequired: "dispNone",
            emailRequired: "dispNone",
            registerPasswordRequired: "dispNone",
            contactRequired: "dispNone"
        });
    }
    closeModalHandler = () => {
        this.setState({modalIsOpen: false})
    }

    tabChangeHandler = (event, value) => {
        this.setState({value});
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState(
            {usernameRequired: "dispNone"});
        this.state.loginPassword === "" ? this.setState({loginPasswordRequired: "dispBlock"}) : this.setState(
            {loginPasswordRequired: "dispNone"});
    }

    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({firstNameRequired: "dispBlock"}) : this.setState(
            {firstNameRequired: "dispNone"}
        );
        this.state.lastname === "" ? this.setState({lastnameRequired: "dispBlock"}) : this.setState(
            {lastnameRequired: "dispNone"}
        );
        this.state.email === "" ? this.setState({emailRequired: "dispBlock"}) : this.setState(
            {emailRequired: "dispNone"}
        );
        this.state.registerPassword === "" ? this.setState({registerPasswordRequired: "dispBlock"}) : this.setState(
            {registerPasswordRequired: "dispNone"}
        );
        this.state.contact === "" ? this.setState({contactRequired: "dispBlock"}) : this.setState(
            {contactRequired: "dispNone"}
        );
    }

    onInputUsernameChanged = (e) => {
        this.setState({username: e.target.value})
    }

    onInputLoginPasswordChanged = (e) => {
        this.setState({loginPassword: e.target.value})
    }

    onInputfirstnameChanged = (e) => {
        this.setState({firstname: e.target.value})
    }

    onInputlastnameChanged = (e) => {
        this.setState({lastname: e.target.value})
    }

    onInputEmailChanged = (e) => {
        this.setState({email: e.target.value})
    }

    onInputRegisterPasswordChanged = (e) => {
        this.setState({registerPassword: e.target.value})
    }

    onInputContactChanged = (e) => {
        this.setState({contact: e.target.value})
    }

    render(){
        return(
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                </header>
                <Modal 
                    ariaHideApp={false} 
                    isOpen={this.state.modalIsOpen} 
                    contentLabel="Login" 
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {this.state.value === 0 && 
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username"> UserName </InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.onInputUsernameChanged}></Input>
                            <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="loginPassword"> Password </InputLabel>
                            <Input id="loginPassword" type="password" loginPassword={this.state.loginPassword} onChange={this.onInputLoginPasswordChanged}></Input>
                            <FormHelperText className={this.state.loginPasswordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>
                    }
                    {this.state.value === 1 && 
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstname"> First Name </InputLabel>
                            <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.onInputfirstnameChanged}></Input>
                            <FormHelperText className={this.state.firstNameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="lastname"> Last Name </InputLabel>
                            <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.onInputlastnameChanged}></Input>
                            <FormHelperText className={this.state.lastnameRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="email"> Email </InputLabel>
                            <Input id="email" type="text" email={this.state.email} onChange={this.onInputEmailChanged}></Input>
                            <FormHelperText className={this.state.emailRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="registerPassword"> Password </InputLabel>
                            <Input id="registerPassword" type="password" registerPassword={this.state.registerPassword} onChange={this.onInputRegisterPasswordChanged}></Input>
                            <FormHelperText className={this.state.registerPasswordRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <FormControl required>
                            <InputLabel htmlFor="contact"> Contact No. </InputLabel>
                            <Input id="contact" type="text" contact={this.state.contact} onChange={this.onInputContactChanged}></Input>
                            <FormHelperText className={this.state.contactRequired}><span className="red">required</span></FormHelperText>
                        </FormControl><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                    </TabContainer>
                    }
                </Modal>
            </div>
        )
    }
}

export default Header;