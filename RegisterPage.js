import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

function RegisterPage() {
  const [ownerName, setOwnerName] = useState("");
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log("Registration successful");
  };

  return (
    <div className="background-common font">
      <Container className="form-container">
        <h1 className="mt-5 mb-4">Registration Page</h1>
        <Form onSubmit={handleRegistration}>
          <Form.Group controlId="ownerName">
            <Form.Label>Owner's Name: </Form.Label>
            <Form.Control
              type="text"
              className="input-bar"
              placeholder="Enter owner's name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="petName">
            <Form.Label>Pet's Name: </Form.Label>
            <Form.Control
              type="text"
              className="input-bar"
              placeholder="Enter pet's name"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="petType">
            <Form.Label>Type of Pet: </Form.Label>
            <Form.Control
              as="select"
              className="input-bar"
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
            >
              <option value="">Select pet type: </option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              className="input-bar"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password: </Form.Label>
            <Form.Control
              type="password"
              className="input-bar"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <p className="mt-3">
            Already have an account?<a href="/login"> Go to Login .</a>
          </p>
          <Button variant="primary" type="submit" className="mt-3">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default RegisterPage;
