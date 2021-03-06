import React, { useState, useRef } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/DropDown";

const Home = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isEnglish, setIsEnglish] = useState(true);
  const myRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
  };
  const executeScroll = () => scrollToRef(myRef);
  const processFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:5000/ocr", formData);
      setResult(res.data);
      executeScroll();
      setFile(null);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div style={{ padding: "3rem", height: "80vh" }}>
        <section id="upload-page" style={{ height: "100%" }}>
          <h1 style={{ textAlign: "center" }}>OCR For Prescription</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <form style={{ width: "25rem" }} onSubmit={processFile}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {file ? (
                  <img
                    src={URL.createObjectURL(file)}
                    style={{ maxHeight: "300px" }}
                    id="prescription"
                    alt="Not Found"
                  />
                ) : (
                  <div
                    style={{
                      border: "3px dotted blue",
                      width: "100%",
                      minHeight: "300px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>Prescription Here</div>
                  </div>
                )}
              </div>

              <label htmlFor="img" className="casual big">
                Upload
              </label>
              <button className="success big">Submit</button>
              <input
                type="file"
                accept="image/*"
                id="img"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </form>
          </div>
        </section>
        {result && (
          <section ref={myRef} style={{ height: "100vh", marginTop: "12rem" }}>
            <h2 style={{ textAlign: "center", margin: "25px" }}>
              Digital Prescription{" "}
              <span>
                authorize by{" "}
                <span style={{ color: "green" }}>{result.doctor}</span>
              </span>
            </h2>
            <Dropdown style={{ marginBottom: "1rem" }}>
              <Dropdown.Toggle id="dropdown-basic">
                {isEnglish ? "English" : "Indonesia"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setIsEnglish(true)}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setIsEnglish(false)}>
                  Indonesia
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {result.prescriptions.map((medicine) => (
              <Card key={medicine.id} bg="light">
                <Card.Body>
                  <Card.Text>
                    {isEnglish ? medicine.description : medicine.description_id}{" "}
                  </Card.Text>
                  <Card.Text>
                    <b>Use:{medicine.treat}</b>
                  </Card.Text>
                  <Card.Text>
                    <b>Price:{medicine.price}</b>
                  </Card.Text>
                  <Card.Text>
                    <b>Stock:</b>
                    {medicine.stock}
                  </Card.Text>
                  <Card.Text>
                    <b>Dose:</b>
                    {medicine.dose}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
            <div
              style={{
                display: "flex",
                margin: "10px",
                justifyContent: "flex-end",
              }}
            >
              <Button href="/ocr#upload-page">Reupload</Button>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Home;
