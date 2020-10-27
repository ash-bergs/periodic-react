import React from "react"; 
import { Link } from "react-router-dom"; 

//* use local storage to give the flashcards persistence *//  

function StudyList({ flashcards }) { 

    return (
        <React.Fragment>
            <h3>Study List</h3>
            {flashcards.map((item, index) => {
                return (
                    <p key={index}>{item.name}</p>
                )
            })}
            <Link to="/flashcards">Study up!</Link>
        </React.Fragment>
    )
}

export default StudyList;