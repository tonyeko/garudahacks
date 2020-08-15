import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const MedicineDetails = (props) => {
  const { show, onHide } = props;

  return (
    <Modal centered show={show} onHide={onHide}>
      <Modal.Header>
        <h3>Details</h3>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col>Nama</Col>
              <Col>nama obatnye</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Stok obat</Col>
              <Col>vount</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>dwdwd</ListGroup.Item>
          <ListGroup.Item>dwdwd</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>OK</Button>
        <Button onClick={onHide}>Edit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MedicineDetails;
