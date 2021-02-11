import React, {Component} from 'react';
import './styles.scss';
import Buttons from './../Forms/Button'
import FormInput from './../Forms/FormInput'
import { auth, handleUserProfile } from './../../firebase/utils'
import { awaitExpression } from '@babel/types';
// import { signInWithGoogle } from './../../firebase/utils'

const initialState={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
    errors:[]
}

class SignUp extends Component {
constructor(props){
    super(props);
    this.state = {
        ...initialState
    }

    this.handleChange = this.handleChange.bind(this);
}
    
    handleChange(e){
        const{name, value} = e.target;

        this.setState({
            [name] : value
        })
    }

    handleFormSubmit=async event=>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword){
            const err = ['Password Don\'t match']
            this.setState({
                errors:err
            })
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, {displayName})

            this.state({
                ...initialState
            })
        } catch (error) {
            
        }
    }

    render(){
        const {displayName, email, password, confirmPassword, errors } = this.state;

        return(
            <div className="signup">
             <div className="wrap">
                 <h2>
                     Sign Up
                 </h2>

                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index)=>{
                            return(
                                
                                <li key={index}>
                                    {err}
                                </li>
                            )

                        })}
                    </ul>
                )}

                <div className="formWrap">
                    <form onSubmit={this.handleFormSubmit}>

                     <FormInput
                        type = "text"
                        name = "displayName"
                        value = {displayName}
                        placeholder ="Full Name"
                        handleChange={this.handleChange}
                     />
                    <FormInput
                        type = "text"
                        name = "email"
                        value = {email}
                        placeholder ="Email"
                        handleChange={this.handleChange}
                     />
                     <FormInput
                        type = "password"
                        name = "password"
                        value = {password}
                        placeholder ="Password"
                        handleChange={this.handleChange}
                     />
                     <FormInput
                        type = "password"
                        name = "confirmPassword"
                        value = {confirmPassword}
                        placeholder ="Confirm Password"
                        handleChange={this.handleChange}
                     />

                     <Buttons type="submit"
                     >
                        Register
                     </Buttons>

                 </form>
                </div>
                 
             </div>
            </div>
         );
    }
};

export default SignUp;