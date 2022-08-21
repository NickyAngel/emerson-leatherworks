import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div>
      <div className="header">
        <h2>Commissions are closed at this time</h2>
      </div>
      <Form.Group className="mb-3 px-3">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="Check back in a few weeks!" disabled />
      </Form.Group>
      <Form.Group className="mb-3 px-3">
        <Form.Label>Message</Form.Label>
        <Form.Control disabled></Form.Control>
        <Button disabled className="my-3">
          Submit
        </Button>
      </Form.Group>
    </div>
  );
}

export default Contact;
