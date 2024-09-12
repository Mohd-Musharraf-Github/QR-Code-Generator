import React, { useState } from "react";
import QRcode from "react-qr-code";
import "./Style.css"

export default function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQRCode] = useState("");

  console.log(qrCode);

  function handleQRCodeButton() {
    setQRCode(input);
    setInput("");
  }

  if( input && input.trim() === ""){
    console.log("empty");
  }

  return (
    <div>
      <div>
        <h1 className="headline">QR Code Generator..</h1>
        <input
          className="input-box arrange"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter Text Here To Generate QR Code...."
        />
        <button onClick={() => handleQRCodeButton()} className="arrange" 
            disabled = {input && input.trim() !== "" ? false : true} >
           
          Generate Qr Code...
        </button>
      </div>
      <div className="QRcode-Container">
        <div className="QRCode-box">
          <QRcode value={qrCode} size={300} />
        </div>
      </div>
    </div>
  );
}
