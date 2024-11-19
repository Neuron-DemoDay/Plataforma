import React from 'react';
import './Modal.css';

function Modal({ title, content, onClose, downloadLink, image }) {
    const handleDownload = () => {
        window.location.href = downloadLink;
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <div className="modal-logo">
                        <img src={image} alt={title} className="logo" />
                    </div>
                    <div className="modal-title">{title}</div>
                </div>
                <div className="modal-content">
                    {content}
                </div>
                <div className="modal-footer">
                    <button onClick={onClose}>Fechar</button>
                    <button onClick={handleDownload}>Baixar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;