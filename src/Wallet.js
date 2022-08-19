import React from "react";
import Card from "react-bootstrap/Card";

function Wallet() {
  return (
    <div className="cards">
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/65bhhnLj/IMG-0291.jpg"
        />
        <Card.Body>
          <Card.Title>Many color options!</Card.Title>
          <Card.Text>
            Plenty of different leathers available, from natural veg-tan to
            through-dyed veg-tan in a rainbow of colors!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/htHbknYV/IMG-0207.jpg"
        />
        <Card.Body>
          <Card.Title>Personalization available</Card.Title>
          <Card.Text>
            Initals or other engravings allow you to put a personal touch on
            your wallet!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/Y2fnQvsZ/64203007255-0-C3-F3-ADF-A673-4-C71-9-D8-D-01-DF647-E059-A.jpg"
        />
        <Card.Body>
          <Card.Title>Minimalist styles</Card.Title>
          <Card.Text>
            Super thin card holders for you front pocket people!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Wallet;
