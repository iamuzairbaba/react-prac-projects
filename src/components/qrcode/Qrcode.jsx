import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'

const Qrcode = () => {
    const [qrcode, setQrcode] = useState('');
    const [input, setInput] = useState('');
    const handleGenerate = () => {
        setQrcode(input)
    }
  return (
    <div>
        <h1>QR CODE Generator</h1>
        <div>
            <input type="text" placeholder='Enter Value' onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleGenerate}>Generate</button>
        </div>
        <div>
            <QRCode 
            id='qr-code-value' value={qrcode}/>
        </div>
    </div>
  )
}

export default Qrcode