import React from "react";
import Card from "react-bootstrap/Card";

function Lighter() {
  return (
    <div className="cards">
      <Card style={{ width: "30rem" }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/SsvMfRXX/Iq47-A3-NLQp6m64-g-KF0xs-Q-thumb-1533.jpg"
        />
        <Card.Body>
          <Card.Title>Many color options!</Card.Title>
          <Card.Text>
            Plenty of different leathers available, from natural veg-tan to
            through-dyed veg-tan in a rainbow of colors!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/hGdMvvmC/IMG-0199.jpg"
        />
        <Card.Body>
          <Card.Title>Personalization available</Card.Title>
          <Card.Text>
            Initals or other engravings allow you to put a personal touch on
            your lighter!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Lighter;
