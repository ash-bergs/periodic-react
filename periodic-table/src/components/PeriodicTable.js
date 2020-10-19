import React, { useState } from 'react'; 
import '../styles/periodicTable.css'; 
import data from '../data/elementsData.json';
import colorMap from '../data/colorMap'; 
import { AnimatePresence ,motion } from 'framer-motion'; 

import ElementModal from './ElementModal'; 

// I want to create a component that tells a user multiple details about an element, maybe in the form of a pop out? 
// do I need to set a slice of state for the element, and render a new component based on the element in state? 


const PeriodicTable = () => {
    const [currentElement, setCurrentElement] = useState(null); 

    return(
        <div className="page-wrapper">
        <div>
            <h1 className="welcome">The Periodic Table of Elements</h1>
        </div>
        <div className="periodic-table_main">
            {data.elements.map((element, index) => (
                <motion.div 
                initial={{ opacity: 0, scale: 0.50 }}
                animate={{ opacity: 0.95, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="periodic-table_element element" 
                key={index}
                onClick={() => setCurrentElement(element)}
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
               {currentElement ? <ElementModal element={currentElement} setCurrentElement={setCurrentElement}/> : null }
        </div>
    );
};

export default PeriodicTable; 