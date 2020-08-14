import React, { useState } from "react";

const Home = () => {
  const [file, setFile] = useState(null);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h2></h2>
      <div className="card" style={{ width: "18rem" }}>
        {file ? (
          <img
            src={file}
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
          name="image"
          name="Upload"
          onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
        />
      </div>
    </div>
  );
};

export default Home;
