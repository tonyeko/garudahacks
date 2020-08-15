import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const MedicineEdit = (props) => {
  const { show, onHide } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Modal centered show={show} onHide={onHide} size="lg">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <h3>Edit medicine data</h3>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col xs="4">
                  <b>Name</b>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder=""
                    ref={register}
                    name="name"
                  />
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="4">
                  <b>Count</b>
                </Col>
                <Col>
                  <Form.Control
                    type="number"
                    placeholder=""
                    ref={register}
                    name="count"
                  />
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="4">
                  <b>Treats</b>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder=""
                    ref={register}
                    name="treats"
                  />
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="4">
                  <b>Treats</b>
                </Col>
                <Col>
                  <Form.Control
                    as="textarea"
                    rows="4"
                    ref={register}
                    name="description"
                  />
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Save</Button>
          <Button onClick={onHide} variant="outline-secondary">
            Cancel
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default MedicineEdit;
