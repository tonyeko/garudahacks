import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MedicineEdit from "./MedicineEdit";

const MedicineDetails = (props) => {
  const { show, onHide, selected } = props;
  const {
    name,
    stock,
    description,
    description_id,
    dose,
    price,
    treat,
  } = selected;
  const [showEdit, setShowEdit] = useState(false);
  const [lang, setLang] = useState("EN");

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
                <Col>{name}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="4">
                  <b>Count</b>
                </Col>
                <Col>{stock}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="4">
                  <b>Treats</b>
                </Col>
                <Col>{treat}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="4">
                  <b>Dose</b>
                </Col>
                <Col>{dose}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="4">
                  <b>Price</b>
                </Col>
                <Col>{price * 1000} IDR</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col xs="4">
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      setLang(lang === "EN" ? "ID" : "EN");
                    }}
                    style={{ width: "100%" }}
                  >
                    {lang}
                  </Button>
                  <b>Description</b>
                </Col>
                <Col>{lang === "EN" ? description : description_id}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>OK</Button>
          <Button
            onClick={() => {
              onHide();
              setShowEdit(true);
            }}
          >
            Edit
          </Button>
          <Button onClick={onHide}>Restock</Button>
        </Modal.Footer>
      </Modal>
      <MedicineEdit
        show={showEdit}
        onHide={() => {
          setShowEdit(false);
        }}
      />
    </>
  );
};

export default MedicineDetails;
