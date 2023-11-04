import React from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'

function AlumniList({closeModal}){

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

<div className="form-wrapper" id="list-div">

</div>

        </div>
    )
}

export default AlumniList