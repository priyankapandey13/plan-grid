import { useContext } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Context from "./Context";

const SearchForm = () => {
  const { handleChange } = useContext(Context);

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Row className="justify-content-md-center py-5">
      <Col xs lg={7} className="py-lg-5">
        <h1>Search posts</h1>
        <Form onSubmit={formSubmitHandler}>
          <Form.Control
            className="mb-2 mr-sm-2"
            placeholder="Start Search Here...."
            size="lg"
            onChange={handleChange}
            autoFocus
          />
        </Form>
      </Col>
    </Row>
  );
};

export default SearchForm;
