import React from 'react'
import './modal.css'

const Modal = ({id, header, footer , body, setShowModal}) => {
  return (
    <div id={id || 'Modal'} className='modal-content'>
        <span className='close-icon' onClick={()=> setShowModal(false)}>&times;</span>
            <div className="content">
                <div className="header"><h2>{header ? header : "This is Header"}</h2></div>
                <div className="body"><p>{body ? body : "This is Body"}</p></div>
                <div className="footer"><h4>{footer ? footer : "This is Footer"}</h4></div>
            </div>
    </div>
  )
}

export default Modal