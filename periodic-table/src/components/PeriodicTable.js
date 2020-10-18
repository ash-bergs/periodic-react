import React, { useState } from 'react'; 
import '../styles/periodicTable.css'; 
import data from '../data/elementsData.json';
import colorMap from '../data/colorMap'; 
import { motion } from 'framer-motion'; 

// I want to create a component that tells a user multiple details about an element, maybe in the form of a pop out? 


const PeriodicTable = () => {
    const [isOpen, setIsOpen] = useState(false); 

    function handleOpen() {
        setIsOpen(!isOpen); 
    }; 

    return(
        <div>
        <div>
            <h1 className="welcome">The Periodic Table of Elements</h1>
        </div>
        <div className="periodic-table_main">
            {data.elements.map((element, index) => (
                <motion.div 
                className="periodic-table_element element" 
                key={index}
                whileHover={{ scale: 1.5, zIndex: 1 }}
                style={{ 
                    gridRow: element.ypos, 
                    gridColumn: element.xpos,
                    borderColor: colorMap[element.category]
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