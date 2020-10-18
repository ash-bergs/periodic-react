This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It includes the Framer-Motion library

### Periodic Table of Elements 
*with react and grid* 

* The aim of this project: 
    * Learn about CSS Grid, and how to quickly, responsively create grid layouts 
    * Learn more about adding smooth animations to make a page feel more 'alive' 
    * Create a fun little periodic table app that any 8th grader will appreciate come study time 😜

* Struggles: 
    * Managing the state of isOpen on the Element Modal component. Originally I was managing it on the Periodic Table component, but this created some bugs when it related to resetting the currentElement in state. 
        * **Resolution**: The Periodic Table component no longer has to be concerned with the status of isOpen, it is completely controlled by the modal. While the Periodic Table concerns itself with the element data. 