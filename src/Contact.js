import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div>
      <h2>Commissions are closed at this time</h2>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="Check back in a few weeks!" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control disabled></Form.Control>
      </Form.Group>
    </div>
  );
}

export default Contact;
