import React from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const DoctorDetails = (props) => {
  const { show, onHide, selectedDoctor } = props;
  const { _id, doctor, prescriptions } = selectedDoctor;

  return (
    <>
      <Modal centered show={show} onHide={onHide} size="lg">
        <Modal.Header>
          <h3>Details</h3>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col xs="4">
                  <b>Name</b>
                </Col>
                <Col>{doctor}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="4">
                  <b>Request History</b>
                </Col>
                <Col>
                  <ol>
                    {prescriptions?.map((value, index) => {
                      return <li key={`doc_presc_${index}`}>{value}</li>;
                    })}
                  </ol>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>OK</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DoctorDetails;
