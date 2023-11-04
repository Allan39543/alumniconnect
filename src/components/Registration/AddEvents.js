import React from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'

function AddEvents({closeModal}){

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

<div className="form-wrapper">

    <div className="add-object">

<h1>Add Event</h1>

                <form>

                <div className="form-details">
                <label> Event Title</label>

                <input type="email" required/>
                </div>

                <div className="form-details">
                <label> Event Display Name </label>
                

                <input type="text" required/>
                </div>

  

                <div className="form-details">

                <label> Media </label>

                <input type="file" required/>

                </div>

                <div className="form-details">
                <button type="submit">
                    Register
                </button>
                </div>

            </form>

    </div>


</div>

        </div>
    )
}

export default AddEvents