import React, { useState } from "react";
import { registerUser, fetchData } from "../../redux/Actions/Register";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
} from "reactstrap";

const TextAlert = styled.span`
  text-align: start;
  color: red;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Register(props) {
  const history = useHistory();
  const [validateEmail, setValidateEmail] = useState();
  const [validatePassword, setValidatePassword] = useState();
  const [validateFullname, setValidateFullname] = useState();
  const [formData, setFormData] = useState({
    fullname: "",
    password: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.fullname === "") {
      setValidateFullname("Nama Tidak Boleh Kosong");
    } else if (formData.email === "") {
      setValidateEmail("Email Tidak Boleh Kosong");
    } else if (formData.password === "") {
      setValidatePassword("Password Tidak Boleh Kosong");
    } else {
      props.dispatch(registerUser(formData, history));
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setValidateEmail("");
    setValidateFullname("");
    setValidatePassword("");
  };

  return (
    <>
      <Container className="App">
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <Form className="form" onSubmit={handleSubmit}>
          <Col md={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <FormGroup>
              
              <Label className="text-left">Fullname</Label>
              <Input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter your fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
              <TextAlert color="danger">{validateFullname}</TextAlert>
            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Example : myemail@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              <TextAlert color="danger">{validateEmail}</TextAlert>
            </FormGroup>
          </Col>
          <Col md={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password Here"
                value={formData.password}
                onChange={handleChange}
              />
              <FormText color="danger">{validatePassword}</FormText>
            </FormGroup>
          </Col>
          <Col>
            <Button color="primary">
              Register
            </Button>
          </Col>
        </Form>
      </Container>
    </>
  );
}

export default connect(null, null)(Register);
