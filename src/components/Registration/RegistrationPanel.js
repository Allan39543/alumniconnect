import React from "react";
import {AiOutlineUserAdd} from'react-icons/ai'
import {VscDiffAdded} from 'react-icons/vsc'
import {CiCircleList} from 'react-icons/ci'
import {CgUserList} from 'react-icons/cg'

function RegistrationPanel(){

    return(

        <div className="regcont">

        <div className="event-modals">

        <div className="reg-modal" ><AiOutlineUserAdd size='6em' /> <h1>Add Alumni</h1> </div>

        <div className="reg-modal"><CgUserList size='6em'/> <h1>Alumni List</h1></div>

        <div className="reg-modal"><VscDiffAdded size='6em'/> <h1>Add Events</h1></div>

        <div className="reg-modal" ><CiCircleList size='6em'/> <h1>Event List</h1></div>

        </div>

        </div>
    )
}

export default RegistrationPanel