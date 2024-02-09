import './App.css';
import accordionData from './AccordionData';
import { useState } from 'react';
function App() {
    const [selected,setSelected]=useState(null);
    const [enableMultipleSelection,setEnableMultipleSelection]=useState(false);

    const handleSingleSelection=(getTitle)=>{
        if(selected===getTitle){
            setSelected(null)
        }
        else{
            setSelected(getTitle)
        }
        console.log(`${getTitle} selected`);
    }

    const handleMultipleSelction=()=>{

    }
    return(
        <div className='acc-wrapper'>
            <button onClick={()=>setEnableMultipleSelection(!enableMultipleSelection)}>
                Enable Multi Selection
            </button>
            <div className='accordion'>
                {
                    accordionData && accordionData.length > 0 ?(
                        accordionData.map(
                            (data)=>(
                                <div className='item'>
                                    <div className='title'
                                    onClick={
                                        enableMultipleSelection
                                        ?()=>handleMultipleSelction(data.title)
                                        :()=>handleSingleSelection(data.title)
                                    }
                                    >
                                        <h3>{data.title}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        selected===data.title &&
                                        <div className='content'>
                                            {data.content}
                                        </div>
                                    }
                                </div>
                            )
                        )
                    )
                    :
                    <div>
                        <h3>No Data Found</h3>
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
