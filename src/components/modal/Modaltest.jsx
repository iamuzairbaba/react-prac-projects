import React, { useState } from 'react'
import Modal from './Modal';

const Modaltest = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(!showModal)
    }
  return (
    <div>
        <button onClick={handleClick}>Open Modal</button>
        {
            showModal && <Modal body={<div>Customized Body</div>} setShowModal={setShowModal}/>
        }
    </div>
  )
}

export default Modaltest