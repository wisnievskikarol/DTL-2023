import React, { useState } from "react";

const ContainerComponent = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    // Perform submission to the database using the name and text values
    console.log("Submitting data:", name, text);
  };

  return (
    <div style={{ width: "72%", marginRight: "2%", border: "1px solid #08fc9c", backgroundColor: "black", padding: "16px", borderRadius: "8px", justifyContent: "center", margin: "16px auto 0", display: "flex", height: "100%" }}>
      <div style={{ width: "25%", backgroundColor: "#1F2937", border: "2px solid #08fc9c", padding: "16px", borderRadius: "8px" }}>
        <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <p style={{ marginBottom: "8px" }}>Podaj imię</p>
            <input type="text" placeholder="Enter name" value={name} onChange={handleNameChange} style={{ backgroundColor: "#1F2937", border: "1px solid #08fc9c",  padding: "8px", fontSize: "14px", borderRadius: "8px", width: "100%" }} />
            <button onClick={handleSubmit} style={{ marginTop: "8px", backgroundColor: "#08fc9c", border: "2px solid #1F2937", padding: "8px", borderRadius: "8px" }}>Submit</button>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      <div style={{ width: "74%", backgroundColor: "#1F2937", border: "2px solid #08fc9c", borderRadius: "8px", padding: "16px", marginLeft: "1%" }}>
        <div>
          <textarea rows={4} placeholder="Powiedz nam kim jesteś? Czym się zajmujesz? Czego potrzebujesz?" value={text} onChange={handleTextChange} style={{ backgroundColor: "#1F2937", border: "1px solid #08fc9c", padding: "8px", fontSize: "14px", width: "100%", borderRadius: "8px" }} />
        </div>
        {/* SECOND DIV */}
        {/* Text field that takes text and sends it to the database */}
        {/* Clicking the submit button in the FIRST DIV triggers the submission */}
      </div>
    </div>
  );
};

export default ContainerComponent;
