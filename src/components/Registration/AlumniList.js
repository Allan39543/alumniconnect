import React from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { nanoid } from 'nanoid';
import {GrUpdate} from 'react-icons/gr'
import {AiTwotoneDelete} from 'react-icons/ai'

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

<table id="table">
    <thead>
        <tr>
        <th>Email</th>
        <th>Names</th>
        <th>User Type</th>
        <th>Course</th>
        <th>Graduation Year</th>
        <th>Update</th>
        <th>Delete</th>
        </tr>
    </thead>


    <tbody>
       

        <tr key={nanoid()}>

            <td>warigiachegesa@gmail.com</td>
            <td>HALLAN CHEGE WARIGIA</td>
            <td>Admin</td>
            <td>COMPUTER SCINECE</td>
            <td>2024</td>
            <td ><GrUpdate size="1.1em" className="center-td-content"/></td>
            <td ><AiTwotoneDelete size="1.1em" color="red" className="center-td-content"/></td>
            
            
            
            </tr>
        
       
    
    </tbody>

</table>

</div>

        </div>
    )
}

export default AlumniList