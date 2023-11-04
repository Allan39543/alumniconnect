import React from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'

function EventList({closeModal}){

    return(
        <div className="transparent-modal-wrapper">

<div className='close-modal' onClick={()=>closeModal(false)} >

<div className='close-text'>
    Close
</div>

<div className='close-icon'>
    <AiOutlineCloseCircle size="1.5em" />
</div>

</div>

        </div>
    )
}

export default EventList