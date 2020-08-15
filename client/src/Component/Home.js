import React, { useState } from "react";

const Home = () => {
  const [file, setFile] = useState(null);

  const processFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      body: formData,
    };

    try {
      await fetch("http://localhost:5000/ocr", requestOptions);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>OCR For Prescription</h2>
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
    </>
  );
};

export default Home;
