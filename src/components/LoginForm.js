import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Input, Button } from "semantic-ui-react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [formValue, setformValue] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setisLoggedIn] = useState(false);

  const [isUserMail, setisUserMail] = useState("");

  if (isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/sendmail",
          state: { usermail: isUserMail },
        }}
      />
    );
  }
  // eslint-disable-next-line
  const onLogout = () => {
    setisLoggedIn(false);
    return <Redirect to={"/login"} />;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Using FormData WebAPI to store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("username", formValue.username);
    loginFormData.append("password", formValue.password);

    var object = {};
    loginFormData.forEach((value, key) => (object[key] = value));
    var jsonData = JSON.stringify(object);

    try {
      // make axios post request
      // eslint-disable-next-line
      const response = await axios({
        method: "post",
        url: "https://backend-flask-mysql.herokuapp.com/login",
        data: jsonData,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.status === 200) {
          console.log("Response of Login", response);
          console.log("frommail:", response.data.FromEmail);
          setisUserMail(response.data.FromEmail);
          setisLoggedIn(true);
        } else if (response.status === 401) {
          setisLoggedIn(false);
          console.log("Invalid Creds");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="LoginForm">
      <Container style={{ marginTop: 40 }}>
        <Form>
          <Form.Field>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formValue.username}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formValue.password}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Button onClick={handleSubmit}>Login</Button>
          </Form.Field>
          <Form.Field>
            <Button as={Link} to="/register">
              Signup
            </Button>
          </Form.Field>
        </Form>
      </Container>
    </div>
  );
};

export default LoginForm;
