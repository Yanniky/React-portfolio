import React, {Component} from 'react';
//import {Grid, Cell,} from 'react-mdl';


const emailRegex =  RegExp(/@/)


const formValid = formErrors =>{

    let valid = true;

    Object.values(formErrors).foreach(val => {
        val.length > 0 && (valid = false);
   
    });
    return valid;
}
class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            }
        };
        
    }
    handleSubmit =  e =>{
        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            console.log(`--submiting--
            --First Name: ${this.state.firstName}
            --Last Name: ${this.state.lastName}
            --Email: ${this.state.email}
            --Password: ${this.state.password}
            `)
            
        }else{
            console.error('FROM INVALID - DISPLAY ERROR MESSAGE');
        }
    };
    handleChange  = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;
    
        
        switch (name){
            case 'firstName':
                formErrors.firstName =  value.length < 3 
                ? 'minum of 3 characters is required' 
                :"";
                break;
                case 'lastName':
                    formErrors.lastName =  value.length < 3 
                ? 'minum of 3 characters is required' 
                :"";
                break;
                case 'email':
                     formErrors.email = 
                    emailRegex.test(value) 
                ? ""
                : 'invalid email address';
                break;
                case 'password':
                formErrors.password =  value.length < 6 
                ? 'minum of 3 characters is required' 
                :"";
                break;
                default:
                    break;
                    
        }
        this.setState({formErrors, [name]: value}, () => console.log(this.state));
    };
    render(){

        const {formErrors } =this.state;
        return(
            <div className="wrapper">
               <div className="form-wrapper">
                   <form onSubmit={this.handleSubmit} noValidate>
                   <h1>Create Account</h1>
                  <div className="firstName">
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                        type="text" 
                        className={formErrors.firstName.length > 0 ? "error" : null}
                        placeholder="First Name" 
                        name="firstName" 
                        noValidate
                        minLength={2} 
                        maxLength={4}
                        onChange={this.handleChange}
                    />
                    {
                        formErrors.firstName.length > 0 && (
                            <span className="errorMessage">{formErrors.firstName}</span>
                        )
                    }
                  </div>
                  <div className="lastName" >
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        type="text" 
                        className={formErrors.lastName.length > 0 ? "error" : null}
                        placeholder="Last Name" 
                        name="lastName" 
                        noValidate
                        onChange={this.handleChange}
                        onKeyPress="emailVerify(this.id)"
                    />
                    {
                        formErrors.lastName.length > 0 && (
                            <span className="errorMessage">{formErrors.lastName}</span>
                        )
                    }
                  </div>
                  <div className="email">
                    <label htmlFor="email"> Email: </label>
                    <input 
                        type="email" 
                        className={formErrors.email.length > 0 ? "error" : null}
                        placeholder="Email" 
                        name="email" 
                        noValidate
                        onChange={this.handleChange}
                    />
                  </div>
                  {
                        formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                        )
                    }
                  <div className="password">
                    <label htmlFor="password"> Password: </label>
                    <input 
                        type="password" 
                        className={formErrors.password.length > 0 ? "error" : null}
                        placeholder="Password" 
                        name="Password" 
                        noValidate
                        onChange={this.handleChange}
                    />
                  </div>
                  {
                        formErrors.password.length > 0 && (
                            <span className="errorMessage">{formErrors.password}</span>
                        )
                    }
                  <div className="createAccount">
                      <button type="submit">Create Account</button>
                      <small>Already have an Account?</small>
                  </div>
                   </form>
               </div>
            </div>
        )
    }
}export default Contact;