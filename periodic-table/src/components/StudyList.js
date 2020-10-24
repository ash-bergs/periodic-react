import React from "react"; 

function StudyList(props) {
    const { studyList } = props; 

    return (
        <React.Fragment>
            <h3>Study List</h3>
            {studyList.map((item, index) => {
                return (
                    <p key={index}>{item.name}</p>
                )
            })}
        </React.Fragment>
    )
}

export default StudyList;