import React,{useEffect,useState,useContext} from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { nanoid } from 'nanoid';
import {GrUpdate} from 'react-icons/gr'
import {AiTwotoneDelete} from 'react-icons/ai'
import { UserContext } from '../../App'
import axios from "axios";

function EventList(props){

    const user = useContext(UserContext)

    const[allEvents,setAllEvents]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(() => {

        const fetchEvents = async () => {

            try {

              if( user && props.type==="Admin"){
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/all`)

                    setAllEvents(response.data)

                    setLoading(false)
              }
                    else if(user && props.type==="user"){
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/userEvents?user=${user ?user.email : ""}`)

                    setAllEvents(response.data)

                    setLoading(false)
                    }


            }
            catch (err) {

                setLoading(false)
            }

        }

        fetchEvents()

    }, [])

    console.log(allEvents)

    return(
        <div className="transparent-modal-wrapper">

<div className='close-modal' onClick={()=>props.closeModal(false)} >

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
        <th>Venue</th>
        <th>Update</th>
        <th>Delete</th>
        </tr>
    </thead>


    <tbody>
       
{
    allEvents.map(details=>(
        <tr key={nanoid()}>

            <td>{details.title}</td>
            <td>{details.displayName}</td>
            <td>{details.date}</td>
            <td>{details.time}</td>
            <td>{details.type}</td>
            <td>{details.venue}</td>
            <td ><GrUpdate size="1.1em" className="center-td-content"/></td>
            <td ><AiTwotoneDelete size="1.1em" color="red" className="center-td-content"/></td>
            
            
            

            </tr>
     ) )
}
       
    
    </tbody>

</table>

</div>

        </div>
    )
}

export default EventList