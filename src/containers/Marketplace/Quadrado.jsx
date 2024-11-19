import React from 'react';
import './Quadrado.css';

function Quadrado({ width = "300px", height = "150px", color, content, title, onClick }) {
    return (
        <div 
            className="quadrado" 
            style={{ width, height, backgroundColor: color || "#E0E0E0" }} 
            onClick={onClick} 
        >
            <div className="quadrado-title">{title}</div>
            <div className="quadrado-content">{content}</div>
        </div>
    );
}

export default Quadrado;