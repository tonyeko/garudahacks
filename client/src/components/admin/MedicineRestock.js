import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const MedicineRestock = (props) => {
  const { show, onHide, medId, stock } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await axios
      .put(`http://localhost:5000/prescription/${medId}`, {
        stock: parseInt(stock) + parseInt(data.amount),
      })
      .then((response) => {
        onHide();
        window.location.reload();
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal centered show={show} onHide={onHide} size="lg">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <h3>Add medicine stock</h3>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="number"
            placeholder=""
            ref={register}
            name="amount"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Confirm</Button>
          <Button onClick={onHide} variant="outline-secondary">
            Cancel
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default MedicineRestock;
