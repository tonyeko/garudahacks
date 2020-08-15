import React, { useState, useRef } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
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
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div style={{ padding: "3rem", height: "80vh" }}>
        <section id="upload-page" style={{ height: "100%" }}>
          <h2 style={{ textAlign: "center" }}>OCR For Prescription</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <form style={{ width: "18rem" }} onSubmit={processFile}>
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
                  <span>Upload your prescription</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                id="img"
                placeholder="Browse File"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button>Upload</button>
            </form>
          </div>
        </section>
        {result && (
          <section ref={myRef} style={{ height: "100vh" }}>
            <h2 style={{ textAlign: "center", margin: "25px" }}>Description</h2>
            {result.map((medicine) => (
              <Card key={medicine.id} bg="light">
                <Card.Body>
                  <Card.Text>{medicine.description}</Card.Text>
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
              <Button href="#upload-page" variant="success">
                Reupload
              </Button>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Home;
