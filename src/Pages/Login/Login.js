import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/Actions";
import { useHistory } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Col,
    Row,
} from "reactstrap";

function Login(props) {
    const history = useHistory();

    const [form, setForm] = useState({ email: "", password: "" });
    const handleSubmit = (event) => {
        event.preventDefault();

        props.dispatch(login(form, history));
    };

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col
                        md={{ size: 4, offset: 4 }}
                        xs={{ size: 10, offset: 1 }}
                    >
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                    value={form.email}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    onChange={handleChange}
                                    value={form.password}
                                />
                            </FormGroup>
                            <Button type="submit">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default connect()(Login);
