import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {}, []);
  const processFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:5000/ocr", formData);
      setResult(res.data);
      console.log(res);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ marginTop: "5rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        OCR For Prescription
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          className="card"
          style={{ width: "18rem" }}
          onSubmit={processFile}
        >
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
                border: "2px dotted blue",
                width: "100%",
                minHeight: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>Upload your prescription</div>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            id="img"
            placeholder="Browse File"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button>Upload </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
