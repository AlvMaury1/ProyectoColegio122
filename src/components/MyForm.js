import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyForm = () => {
  return (
    <Form className="pt-5 px-5">
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Numero de Telefono</Form.Label>
        <Form.Control type="tel" placeholder="Enter your phone number" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="comments">
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
        </FloatingLabel>
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-2">
        Submit
      </Button>
    </Form>
  );
}

export default MyForm;