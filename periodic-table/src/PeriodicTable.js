import React from 'react'; 
import './periodicTable.css'; 
import data from './data/elementsData.json';

// const elements = JSON.parse(data); 

const PeriodicTable = () => {
    return(
        <div className="periodic-table_main">
            {data.elements.map(element => <div className="periodic-table_element" key={element.name}>{element.symbol}</div>)}
        </div>
    );
};

export default PeriodicTable; 