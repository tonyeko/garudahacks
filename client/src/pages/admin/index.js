import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import MedicineDetails from "../../components/admin/MedicineDetails";

const AdminIndexPage = () => {
  const [show, setShow] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [selectedMed, setSelectedMed] = useState({});

  const getMedicines = useCallback(async () => {
    await axios.get("http://localhost:5000/prescription").then((response) => {
      const data = response.data;
      console.log(data);
      setMedicines(data);
    });
  }, [setMedicines]);

  useEffect(() => {
    getMedicines();
  }, [getMedicines]);

  const testingCol = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        <Col xs="4" className="p-4">
          {i + 1} of 10
        </Col>
      );
    }
    return arr;
  };

  return (
    <Container>
      <Alert variant="info">Remember to stock up medicines!</Alert>
      <h1>Current Medicine Statistics</h1>
      <Table responsive="lg">
        <thead>
          <tr>
            <th>#</th>
            <th>Medicine Name</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.stock}</td>
                <td>
                  <a
                    href="#"
                    onClick={() => {
                      setSelectedMed(value);
                      setShow(true);
                    }}
                  >
                    Details...
                  </a>
                </td>
              </tr>
            );
          })}
          <MedicineDetails
            show={show}
            onHide={() => {
              setShow(false);
            }}
            selected={selectedMed}
          />
        </tbody>
      </Table>

      <Row>{testingCol()}</Row>
    </Container>
  );
};

export default AdminIndexPage;
