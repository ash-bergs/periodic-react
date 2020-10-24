import React, { useState } from 'react'; 
import '../styles/periodicTable.css'; 
import data from '../data/elementsData.json';
import colorMap from '../data/colorMap'; 
import { motion } from 'framer-motion'; 

import ElementModal from './ElementModal'; 
import StudyList from './StudyList';

const PeriodicTable = () => {
    const [currentElement, setCurrentElement] = useState(null); 
    // studyList starts out as an empty array - when an element is added it will be in the form of an object
    const [studyList, setStudyList] = useState([]); 

    return(
        <div className="page-wrapper">
        <div style={{ float: 'right', border: '1px solid red', width: '10vw'}}>
            <StudyList studyList={studyList}/>
        </div>
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
               {currentElement ? 
                <ElementModal element={currentElement} setCurrentElement={setCurrentElement} studyList={studyList} setStudyList={setStudyList}/> 
                : null }
        </div>
    );
};

export default PeriodicTable; 