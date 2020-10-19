import React, { useState } from 'react'; 
import { AnimatePresence, motion } from 'framer-motion'; 

import '../styles/elementModal.css'; 

const ElementModal = ({ element, setCurrentElement }) => {
    const [isOpen, setIsOpen] = useState(true); 

    // closes the modal, and resets the currentElement in its parent component 
    function handleOpen() {
        setIsOpen(false); 
        setCurrentElement(null); 
    }; 

    return (
            <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="element-modal"
                            initial={{ opacity: 0, scale: 0.75 }}
                            animate={{ opacity: 0.95, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                        >
                        <div className="button">
                        <motion.button 
                            className="button" 
                            onClick={handleOpen}
                            whileHover={{ scale: 1.5}}
                            >
                            <i class="fas fa-times-circle"/>
                        </motion.button>
                        </div>
                        <h3
                            className="modal-title"
                        >
                            {element.name}</h3> 
                        <p className="modal-item category">
                            <span className="category-flag">Category: </span> {element.category.toUpperCase()}</p>
                        <p className="modal-item summary">{element.summary}</p>
                        <motion.a href={element.source} 
                        className="modal-link" 
                        alt="wikipedia" 
                        whileHover={{ scale: 1.5}}
                        target="_blank">Learn More <i className="fas fa-external-link-square-alt"/></motion.a> {/*.learn-more - 5th element on the grid*/}
                        </motion.div>
                    )}
        </AnimatePresence>
    )
}

export default ElementModal; 