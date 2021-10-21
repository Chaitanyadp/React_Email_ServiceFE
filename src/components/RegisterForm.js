import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Input, Button, Header } from "semantic-ui-react";
import { Redirect } from "react-router";
import "./RegisterForm.css";

const RegisterForm = () => {
  console.log("inside register");
  const [registerFormValue, setRegisterFormValue] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);

  if (isRegistered) {
    return <Redirect to={"/login"} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Using FormData WebAPI to store the states in the form data
    const registerFormData = new FormData();
    registerFormData.append("username", registerFormValue.username);
    registerFormData.append("password", registerFormValue.password);
    registerFormData.append("email", registerFormValue.email);

    var object = {};
    registerFormData.forEach((value, key) => (object[key] = value));
    var registerjsonData = JSON.stringify(object);

    try {
      // make axios post request
      // eslint-disable-next-line
      const response = await axios({
        method: "post",
        url: "https://backend-flask-mysql.herokuapp.com/register",
        data: registerjsonData,
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        console.log(response);
        setIsRegistered(true);
      });
    } catch (error) {
      setIsRegistered(true);
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setRegisterFormValue({
      ...registerFormValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="RegisterForm">
      <Container style={{ marginTop: 40 }}>
        <Header
          as="h1"
          content="Registration Form"
          inverted
          style={{
            fontSize: "1.5em",
            fontWeight: "normal",
            marginBottom: "1em",
            marginTop: "3em",
          }}
        />
        <Header
          as="h2"
          content="Note: Make Sure to Allow less secure apps is turned ON for your account"
          inverted
          style={{
            fontSize: "1.5em",
            fontWeight: "normal",
            marginBottom: "1em",
            marginTop: "2em",
          }}
        />
        <Form>
          <Form.Field>
            <Input
              name="username"
              placeholder="Username"
              value={registerFormValue.username}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={registerFormValue.password}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={registerFormValue.email}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Button onClick={handleSubmit}>Submit</Button>
          </Form.Field>
        </Form>
      </Container>
    </div>
  );
};

export default RegisterForm;
