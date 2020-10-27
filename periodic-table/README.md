This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Periodic Table of Elements ~ with React, CSS Grid, & LocalStorage ~

#### Project Goal: 
* Learn about CSS Grid, and how to quickly, responsively create grid layouts 
* Learn more about adding smooth animations to make a page feel more 'alive' 
* Implement Local Storage to create persistant data without a backend
* Create a fun little periodic table app that anyone in a basic chemistry class could appreciate 🧪🔬

### Struggles: 

* Managing the state of isOpen on the Element Modal component. 
    * **Problem**: Originally I was managing it on the Periodic Table component, but this created some bugs when it related to resetting the currentElement in state. 
    * **Resolution**: The Periodic Table component no longer has to be concerned with the status of isOpen, it is completely controlled by the modal. While the Periodic Table concerns itself with the element data. 
* Students want to create a stack of flashcards so they can review those pesky, hard to remember elements. 
    * **Problem**: Right now I'm just props-drilling an array to store elements in. The modal is the component that manages the studyList state, but the FlashCards component will be the one to consume it. 
    * **Resolution**: Implementing Local Storage to give the flashcards some *data persistence*  
    * **Implementation Problems**: When trying to set the flashcards state into Local Storage, there is a specific issue: The cards are only saved after a manual refresh. They are successfully added, and appear in the local storage tab, but when navigating from the component to another, and then back, those elements are gone. What am I doing wrong here? 
        * What it could be: Though I can't say why, I have a suspicion this is a problem in the useEffect hook in PeriodicTable. Currently the flashcards array is set up as a dependency array. I am doing this because it should run the hook again when the array updates, saving the changes. It is not working like I expected. Why is that? 

* What Needs Work: 
    * The CSS, particularly on the Element Modal, is a mess. 
        * Grid items themselves are using flexbox inside themselves.. there must be a smoother way to center the text items in the elemendts.
    * [*Later*] The modal needs exit animation 
        * for that - research more about framer-motion, and how it circumvents DOM constraints in React
    * Link sizing for elements with longer summaries [✅ dealt with this in the grid layout, there must be a more eloquent way to plan a grid though. Research!]

* Current Branch [study-list]:
    * This component will render a list of elements that a user has stored so they can more closely review them. 
    * A slice of state must be made to save certain elements to an array. - [flashcards]
    * The state will be initialized in the PeriodTable component, and passed to the StudyList component

* Ideas: 
    * Filter the cards you can see (study) based on the elements category 
    * Card matching game
    * Create a Study Elements component, elements the user wants to review later can be clicked and added to it