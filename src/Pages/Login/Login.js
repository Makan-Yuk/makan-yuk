import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/Actions";
import { useHistory } from "react-router-dom";
import { MDBBox, MDBRow, MDBCard, MDBCardBody, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { createGlobalStyle } from 'styled-components'

const Container = createGlobalStyle`
    body {
        margin-top : 10%;
        background-color: #f1f1f1;
    }
`;



function Login(props) {
    const history = useHistory();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        props.dispatch(login(userLogin, history)); 
        localStorage.setItem("user", JSON.stringify(userLogin.email));
        history.push("/home");
    };
    return (
            <MDBBox>
                <Container/>
                <MDBRow>
                    <MDBCol></MDBCol>
                    <MDBCol md="3">
                        <MDBCard>
                            <MDBCardBody>
                            <form onSubmit={handleSubmit}>
                            <p className="h5 text-center mb-4">Sign in</p>
                                <div>
                                    <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"
                                        name="email"
                                        placeholder="email"
                                        onChange={handleChange}
                                        value={userLogin.email}
                                        required
                                    />
                                </div>
                                <div>
                                    <MDBInput label="Type your password" icon="lock" group type="password" validate 
                                        name="password"
                                        placeholder="password"
                                        onChange={handleChange}
                                        value={userLogin.password}
                                        required
                                    />
                                </div>
                                <MDBBtn type="submit">Login</MDBBtn>
                            </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol></MDBCol>
                </MDBRow>
            </MDBBox>
    );
}

export default connect()(Login);
