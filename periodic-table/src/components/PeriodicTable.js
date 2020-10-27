import React, { useState, useEffect } from 'react'; 
import '../styles/periodicTable.css'; 
import data from '../data/elementsData.json';
import colorMap from '../data/colorMap'; 
import { motion } from 'framer-motion'; 

import ElementModal from './ElementModal'; 
import StudyList from './StudyList';

const localFlashcards = localStorage.getItem('flashcards') ? JSON.parse(localStorage.getItem('flashcards')) : []; 

const PeriodicTable = () => {
    //* slice of state managing the current element in the modal
    const [currentElement, setCurrentElement] = useState(null); 
    
    //* slice of state to add elements to a stack of flashcards stored in local storage 
    const [flashcards, setFlashcards] = useState(localFlashcards);   


//* putting the flashcards in state into local storage for data persistence *// 
    useEffect(() => {
        localStorage.setItem('flashcards', JSON.stringify(flashcards))
    }, [flashcards]); 

    return(
        <div className="page-wrapper">
        {
            //! make sure to abstract this styling into CSS/SASS later !
        }
        <div style={{ border: '1px solid red', width: '10vw', position: 'absolute'}}>
            <StudyList flashcards={flashcards}/>
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
                whileHover={{ scale: 2.5, zIndex: 1 }}
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
                <ElementModal element={currentElement} setCurrentElement={setCurrentElement} flashcards={flashcards} setFlashcards={setFlashcards}/> 
                : null }
        </div>
    );
};

export default PeriodicTable; 