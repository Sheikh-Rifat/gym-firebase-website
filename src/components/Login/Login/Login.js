import { Button, Container, Form } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { signInWithEmail, signInUsingGoogle, userEmail, userPassword, error } =
    useAuth();

  //   getting email and password from form
  return (
    <div className="login-page">
      <div className="login-section">
        <h1 className="title">Login</h1>
        <div className="text-danger" style={{ height: "50px" }}>
          {error}
        </div>
        <Container className="text-light">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={userEmail}
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
                onChange={userPassword}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={signInWithEmail}
              className="form-control mt-5 custom-btn"
            >
              Login
            </Button>
          </Form>
          <p className="text-light text-center mt-3">
            Don't have an{" "}
            <Link to="/register" style={{ color: "white" }}>
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
    </div>
  );
};

export default Login;
