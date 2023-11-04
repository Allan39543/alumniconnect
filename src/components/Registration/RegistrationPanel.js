import React,{useState} from "react";
import {AiOutlineUserAdd} from'react-icons/ai'
import {VscDiffAdded} from 'react-icons/vsc'
import {CiCircleList} from 'react-icons/ci'
import {CgUserList} from 'react-icons/cg'
import AddAlumniModal from "./AddAlumniModal";
import AlumniList from "./AlumniList";
import EventList from "./EventList";
import AddEvents from "./AddEvents";

function RegistrationPanel(){

    const [addAlumni,setAddAlumni]=useState(false)
    const [alumniList,setAlumniList]=useState(false)
    const [events,setEvents]=useState(false)
    const [eventList,setEventList]=useState(false)

    return(

        <div className="regcont">

        <div className="event-modals">

        <div className="reg-modal" onClick={()=>setAddAlumni(true)} ><AiOutlineUserAdd size='6em' /> <h1>Add Alumni</h1> </div>

        <div className="reg-modal" onClick={()=>setAlumniList(true)}><CgUserList size='6em'/> <h1>Alumni List</h1></div>

        <div className="reg-modal" onClick={()=>setEvents(true)}><VscDiffAdded size='6em'/> <h1>Add Events</h1></div>

        <div className="reg-modal" onClick={()=>setEventList(true)}><CiCircleList size='6em'/> <h1>Event List</h1></div>

        </div>

       {addAlumni && <AddAlumniModal closeModal={setAddAlumni} /> } 
       {alumniList && <AlumniList closeModal={setAlumniList} /> } 
       {events && <AddEvents closeModal={setEvents} /> } 
       {eventList && <EventList closeModal={setEventList} /> } 

        </div>
    )
}

export default RegistrationPanel