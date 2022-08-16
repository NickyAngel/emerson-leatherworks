import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div className="cards">
      <Card style={{ width: '500px' }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/7L0MDcvd/IMG-0208.jpg"
        />
        <Card.Body>
          <Card.Title>Wallets</Card.Title>
          <Card.Text>Minimalist card holders and bifolds</Card.Text>
          <Button variant="primary">See more</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '500px' }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/fyBfp94b/IMG-0201.jpg"
        />
        <Card.Body>
          <Card.Title>Lighter Wraps</Card.Title>
          <Card.Text>
            Colorful and personalized so you can allways keep track of your
            lighter
          </Card.Text>
          <Button variant="primary">See more</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '500px' }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/fyBfp94b/IMG-0201.jpg"
        />
        <Card.Body>
          <Card.Title>Belts and More</Card.Title>
          <Card.Text>
            Thick, sturdy belts, braclet, and watch straps available as well
          </Card.Text>
          <Button variant="primary">See more</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Home;
