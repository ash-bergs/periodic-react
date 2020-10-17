import React, { useState } from 'react'; 
import '../styles/periodicTable.css'; 
import data from '../data/elementsData.json';
import colorMap from '../data/colorMap'; 
import { motion } from 'framer-motion'; 

// const elements = JSON.parse(data); 

const PeriodicTable = () => {
    const [isOpen, setIsOpen] = useState(false); 
    {/* This approach works for a menu, but when is isOpen becomes false, ALL the boxes grow to scale. We have to toggle a classname */}

    function handleOpen() {
        setIsOpen(!isOpen); 
    }; 

    return(
        <div>
        <h1 className="welcome">The Periodic Table of Elements</h1>
        <div className="periodic-table_main">
            {data.elements.map(element => (
                <motion.div 
                className="periodic-table_element element" 
                key={element.name}
                whileHover={{ scale: 1.5, zIndex: 1 }}
                style={{ 
                    gridRow: element.ypos, 
                    gridColumn: element.xpos,
                    borderColor: colorMap[element.category],
                }}
                >
                    <strong>{element.symbol}</strong>
                    <small className="number">{element.number}</small>
                    <small className="name">{element.name}</small>
                </motion.div>))}
        </div>
        </div>
    );
};

export default PeriodicTable; 