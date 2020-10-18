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
                            onClick={handleOpen}
                            className="element-modal"
                            initial={{ opacity: 0, scale: 0.75 }}
                            animate={{ opacity: 0.9, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                        >
                        <h3 className="modal-title">{element.name}</h3>
                        <p className="modal-item">Category: {element.category}</p>
                        <p className="modal-item">{element.summary}</p>
                        <a href={element.source} className="modal-link" alt="wikipedia" target="_blank">Learn More</a>
                        </motion.div>
                    )}
        </AnimatePresence>
    )
}

export default ElementModal; 