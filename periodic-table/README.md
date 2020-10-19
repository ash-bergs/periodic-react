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

* What Needs Work: 
    * In my CSS, particularly on the Element Modal, my grid CSS is a mess. 
        * Grid items themselves are using flexbox inside themselves.. there must be a smoother way to center the text items in the elemendts. *research needed*
        * The Grid is set up in a way that I find hard to follow. 
            * What shorthand properties can I use to achieve more fluid grid development? 
            * How well does Sass mixins and functions work with grid generation? 
            * How can 1 (or a small number of) rows in a grid be specifically sized, while the others use 'fr'? (in otherwords, specify just some, otherwise auto)
    * The modal needs exit animation 
        * for that I need to research more about framer-motion, and how it circumvents DOM constraints in React
    * Link sizing for elements with longer summaries 

* Ideas: 
    * Filter the cards you can see (study) based on the elements category 
    * Card matching game
    * Create a Study Elements component, elements the user wants to review later can be clicked and added to it