import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const {
    signInUsingGoogle,
    error,
    getName,
    getEmail,
    userRegistration,
    getPassword,
  } = useAuth();

  const handleRegistration = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-page text-light">
      <Container>
        <h1 className="title text-center">Sign Up</h1>
        <div className="text-danger" style={{ height: "50px" }}>
          {error}
        </div>
        <Form onSubmit={handleRegistration}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={getName}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={getEmail}
              type="email"
              placeholder="Enter email"
            />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={getPassword}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="form-control mt-5 custom-btn"
            onClick={userRegistration}
          >
            SignUp
          </Button>
        </Form>
        <p className="text-light text-center mt-3">
          Already Have an{" "}
          <Link to="/login" style={{ color: "white" }}>
            {" "}
            Account?
          </Link>
        </p>
        <h1 className="text-center mt-3 title">OR</h1>
        <Button
          className="login-Button form-control mt-5"
          onClick={signInUsingGoogle}
        >
          Log In With Google
        </Button>
      </Container>
    </div>
  );
};

export default Register;
