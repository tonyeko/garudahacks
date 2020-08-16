import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";
import MedicineDetails from "../../components/admin/MedicineDetails";
import DoctorDetails from "../../components/admin/DoctorDetails";

const AdminIndexPage = () => {
  const [show, setShow] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [requests, setRequests] = useState([]);
  const [selectedMed, setSelectedMed] = useState({});
  const [selectedDoctor, setSelectedDoctor] = useState({});

  const getMedicines = useCallback(async () => {
    await axios.get("http://localhost:5000/prescription").then((response) => {
      const data = response.data;
      console.log(data);
      setMedicines(data);
    });
  }, [setMedicines]);

  const getDoctors = useCallback(async () => {
    await axios.get("http://localhost:5000/doctor").then((response) => {
      const data = response.data;
      console.log(data);
      setDoctors(data);
    });
  }, [setDoctors]);

  const getRequests = useCallback(async () => {
    await axios.get("http://localhost:5000/request").then((response) => {
      const data = response.data;
      console.log(data);
      setRequests(data);
    });
  }, [setRequests]);

  useEffect(() => {
    getMedicines();
  }, [getMedicines]);

  useEffect(() => {
    getDoctors();
  }, [getDoctors]);

  useEffect(() => {
    getRequests();
  }, [getRequests]);

  const checkRequest = (doctor, doctorIndex) => {
    if (requests.find((value) => value.id === doctors[doctorIndex]._id)) {
      return (
        <a
          href="#"
          onClick={() => {
            setSelectedDoctor(doctor);
            setShow(true);
          }}
        >
          Details...
        </a>
      );
    }
  };

  return (
    <Container>
      <Alert variant="info" className="mt-4">Remember to stock up medicines!</Alert>
      <div class="pb-4">
        <h2>Current Medicine Statistics</h2>
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
      </div>
      <h2>Listed Doctors</h2>
      <Table responsive="lg">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Specialist</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {doctors.map((value, index) => {
            return (
              <tr key={`doctor_${index}`}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.specialist}</td>
                <td>
                  {checkRequest(value, index)}
                  {/* <a
                    href="#"
                    onClick={() => {
                      setSelectedDoctor(value);
                      setShow(true);
                    }}
                  >
                    Details...
                  </a> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <DoctorDetails
        show={showDoctor}
        onHide={() => {
          setShowDoctor(false);
        }}
        selectedDoctor={selectedDoctor}
        prescriptions={
          requests.find((value) => value.id === selectedDoctor._id)
            ?.prescriptions
        }
      />
    </Container>
  );
};

export default AdminIndexPage;
