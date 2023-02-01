import React from "react";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div className="cards">
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/FF0SLrrK/ND9-y-XYt-R2ao-IG4-VFEhyw-thumb-145c.jpg"
        />
        <Card.Body>
          <Card.Title>Thick leather</Card.Title>
          <Card.Text>To make sure your belt holds up</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/gkzMsY9J/64220515173-D76-A544-E-CDEB-41-F7-B6-CC-2-AFAE0662969.jpg"
        />
        <Card.Body>
          <Card.Title>Natural patina! From this ^</Card.Title>
          <Card.Text>
            Natural un-dyed vegtable tanned leather starts with a lovely hue
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src="https://i.postimg.cc/D0SYxSBR/IMG-1276.jpg"
        />
        <Card.Body>
          <Card.Title>To this ^</Card.Title>
          <Card.Text>
            Over time with wear the leather will darken and develop a lovely
            patina
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Home;
