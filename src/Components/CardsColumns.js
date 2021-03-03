import { useContext } from "react";
import { Row, CardColumns, Card } from "react-bootstrap";
import Context from "./Context";
import Loader from "./Loader";

const CardsColumns = () => {
  const { currentPosts } = useContext(Context);

  return (
    <Row>
      {currentPosts.length === 0 ? (
        <Loader msz={"No Data found...."} />
      ) : (
        <CardColumns>
          {currentPosts.map((apiitem, index) => {
            return (
              <Card key={index}>
                <Card.Img variant="top" src={apiitem.imagePath} />
                <Card.Body>
                  <Card.Title>{apiitem.title}</Card.Title>
                  <Card.Text>{apiitem.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      )}
    </Row>
  );
};

export default CardsColumns;
