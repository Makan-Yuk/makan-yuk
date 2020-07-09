import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/Actions";
import { useHistory } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import styled from "styled-components"

const BoxCenter = styled.div`
    margin:auto;
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
        history.push("/");
    };
    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="4">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                    value={userLogin.email}
                                    required
                                />
                            </div>
                            <div>
                                <MDBInput label="Type your password" icon="lock" group type="password" validate 
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    onChange={handleChange}
                                    value={userLogin.password}
                                    required
                                />
                            </div>
                            <MDBBtn type="submit">Login</MDBBtn>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>    
        </div>
    );
}

export default connect()(Login);
