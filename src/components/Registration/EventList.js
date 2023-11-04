import React from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { nanoid } from 'nanoid';
import {GrUpdate} from 'react-icons/gr'
import {AiTwotoneDelete} from 'react-icons/ai'

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

<div className="form-wrapper" id="list-div">

<table id="table">
    <thead>
        <tr>
        <th>Event Title</th>
        <th>Event Display Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Event Type</th>
        <th>Update</th>
        <th>Delete</th>
        </tr>
    </thead>


    <tbody>
       

        <tr key={nanoid()}>

            <td>AI AI EVENT</td>
            <td>HAPPY AI HAPPY AI HAPPY AI</td>
            <td>2023-11-4</td>
            <td>3:5:49</td>
            <td>Professional Development</td>
            <td ><GrUpdate size="1.1em" className="center-td-content"/></td>
            <td ><AiTwotoneDelete size="1.1em" color="red" className="center-td-content"/></td>
            
            
            
            </tr>
        
       
    
    </tbody>

</table>

</div>

        </div>
    )
}

export default EventList