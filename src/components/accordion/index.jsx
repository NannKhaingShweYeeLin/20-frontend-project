//single selection
//multiple selection
import data from './data'
import { useState } from "react"
import './styles.css';

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enabelMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);

    }

    function handleMultiSelection(getCurrentId){
        let cpyMutiple = [...multiple];
        const findIndedOfCurrentId = cpyMutiple.indexOf(getCurrentId)

        console.log(findIndedOfCurrentId);
        if(findIndedOfCurrentId === -1) cpyMutiple.push(getCurrentId)
        else cpyMutiple.splice(findIndedOfCurrentId , 1)

        setMultiple(cpyMutiple)
    }
    console.log(selected, multiple);

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enabelMultiSelection)}>
                Enable Multi Selection</button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick={ 
                                enabelMultiSelection 
                                ? () => handleMultiSelection(dataItem.id) 
                                : () => handleSingleSelection(dataItem.id)
                                } 
                                className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enabelMultiSelection ?
                                multiple.indexOf(dataItem.id) !== -1 && (
                                <div className="content">{dataItem.answer}</div>
                                ) :
                                selected === dataItem.id && (
                                <div className="content">{dataItem.answer}</div>
                                )}

                            
                            
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    )
}