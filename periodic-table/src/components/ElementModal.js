import React, { useState } from 'react'; 
import { AnimatePresence, motion } from 'framer-motion'; 

import '../styles/elementModal.css'; 

const ElementModal = ({ element, setCurrentElement, flashcards, setFlashcards }) => {
    //* slice of state managing the status of the modal 
    const [isOpen, setIsOpen] = useState(true); 

    //* handler to reset the current element in PeriodicTable's state - the current element is the one featured in the modal
    const handleOpen = (e) => {
        e.preventDefault();
        setIsOpen(false); 
        setCurrentElement(null); 
    }; 

    //* handler to add a new element to the flashcards - checks if the element is already there
    const addFlashcard = (e) => {
        e.preventDefault();
        const newFlashcards = [...flashcards]; 
        if (newFlashcards.includes(element) === false){
            newFlashcards.push(element); 
        }
        setFlashcards(newFlashcards); 
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
                        { (localStorage.getItem('flashcards').includes(element.name) === false) ? 
                            <motion.button
                            className="add-button study-button"
                            onClick={addFlashcard}
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
                        target="_blank">Learn More <i className="fas fa-external-link-square-alt"/></motion.a> 
                    </motion.div>
                    )}
        </AnimatePresence>
    )
}

export default ElementModal; 