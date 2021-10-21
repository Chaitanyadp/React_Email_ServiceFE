import React, { useState } from "react";
import {
  Container,
  Header,
  Form,
  Input,
  Button,
  TextArea,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./EMailForm.css";

const EMailForm = (props) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const useremail = props.location.state.usermail;
  // var array = JSON.parse("[" + email + "]");

  const subdata = async () => {
    try {
      const emaildata = { email, subject, message };
      // eslint-disable-next-line
      const dsendmail = await axios({
        method: "post",
        url: "https://backend-flask-mysql.herokuapp.com/sendmail",
        data: JSON.stringify(emaildata),
        headers: {
          "Content-Type": "application/json",
          email: useremail,
        },
      }).then((response) => {
        setEmail("");
        setSubject("");
        setMessage("");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubHandler = (e) => {
    e.preventDefault();

    subdata();
  };

  const onChangeHandler = () => {
    props.onLogout(false);
  };

  const onLogoutHandler = () => {
    // eslint-disable-next-line
    const logoff = async () => {
      try {
        await axios({
          method: "post",
          url: "https://backend-flask-mysql.herokuapp.com/logout",
        }).then((response) => {
          console.log(response);
          onChangeHandler();
        });
      } catch (error) {
        console.log(error);
      }
    };
  };

  return (
    <div className="EMailForm">
      <Container style={{ marginTop: 40 }}>
        <Header
          as="h1"
          content="Add the details below and click on Submit to send the mail"
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
          content="Note: Add multiple recipients by seperating them with a semicolon. [For Ex: abc@d.com;efg@h.com]"
          inverted
          style={{
            fontSize: "1.5em",
            fontWeight: "normal",
            marginBottom: "1em",
            marginTop: "3em",
          }}
        />
        <Form>
          <Form.Field>
            <Input
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="Subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Button onClick={onSubHandler}>Submit</Button>
          </Form.Field>
          <Form.Field>
            <Button onClick={onLogoutHandler} as={Link} to="/login">
              Logout
            </Button>
          </Form.Field>
        </Form>
      </Container>
    </div>
  );
};

export default EMailForm;
