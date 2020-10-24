import React, { useState } from 'react'; 
import { AnimatePresence, motion } from 'framer-motion'; 

import '../styles/elementModal.css'; 

const ElementModal = ({ element, setCurrentElement, studyList, setStudyList }) => {
    const [isOpen, setIsOpen] = useState(true); 

    const handleOpen = (e) => {
        e.preventDefault();
        setIsOpen(false); 
        setCurrentElement(null); 
    }; 

    const addCard = (e) => {
        e.preventDefault();
        const newStudyList = [...studyList]; 
        if (newStudyList.includes(element) === false){
            newStudyList.push(element); 
        }
        setStudyList(newStudyList); 
    }

    return (
            <AnimatePresence>
                    {isOpen && (
                    <motion.div
                        className="element-modal"
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: 0.95, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        <div className="close-button">
                        <motion.button 
                            className="close-button" 
                            onClick={handleOpen}
                            whileHover={{ scale: 1.2}}
                            >
                            <i className="fas fa-times-circle"/>
                        </motion.button>
                        {
                            // Main card details
                        }
                        </div>
                        <h3
                            className="modal-title callout-text"
                        >
                            {element.name} ({element.symbol})</h3> 
                        
                        <p className="modal-item category">
                            <span className="category-flag callout-text">Category: </span> {element.category.toUpperCase()}</p>
                        <p className="modal-item summary">{element.summary}</p>
                        {
                            // logic for adding an element to the flashcard stack
                        }
                        { (studyList.includes(element) === false) ? 
                            <motion.button
                            className="add-button study-button"
                            onClick={addCard}
                            whileHover={{ scale: 1.2 }}
                            >
                            <p>Add flashcard</p>
                        </motion.button> 
                        : 
                        <p className="confirm-card status"><i className="fas fa-check status"/>Element in study list</p> }
                        {
                            // Wikipedia link
                        }
                        <motion.a href={element.source} 
                        className="modal-link" 
                        alt="wikipedia" 
                        whileHover={{ scale: 1.5, color: '#E8D33F'}}
                        target="_blank">Learn More <i className="fas fa-external-link-square-alt"/></motion.a> {/*.learn-more - 5th element on the grid*/}
                    </motion.div>
                    )}
        </AnimatePresence>
    )
}

export default ElementModal; 