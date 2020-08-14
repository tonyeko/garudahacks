import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";

const AdminIndexPage = () => {
  const testingCol = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        <Col xs="4" className="p-4">
          {i + 1}of 10
        </Col>
      );
    }
    return arr;
  };

  return (
    <Container>
      <Alert variant="info">Remember to stock up medicines!</Alert>
      <div className="position-relative">
        <h1>Current Medicine Statistics</h1>
        <div
          className="position-absolute bg-info"
          // style={{ bottom: -10, height: "4px", width: "50%" }}
        />
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
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    Paracetamol Mark {index + 1} Version v0.
                    {Math.floor(Math.random() * 10) + 1}.
                    {Math.floor(Math.random() * 15) + 1}
                  </td>
                  <td>{Math.floor(Math.random() * 100)}</td>
                  <td>
                    <a href="#">Details...</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <Row>{testingCol()}</Row>
    </Container>
  );
};

export default AdminIndexPage;
