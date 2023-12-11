import React, { Fragment } from 'react'
import event1 from '../SiteMedia/event8.jpeg'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {TiTick} from 'react-icons/ti'

function TopFourEvents(){

    return(

        <Fragment>
            
            <h1 className='top-eventsh1'>Latest Events</h1>

        <div className='top-events'>

            

        <div className='post'>

<div className='image'>

    <img src={event1} alt="event-img" />

</div>

<div className='event-details'>

<h3>Tech Alumni AI Engineers Event</h3>

<div className='btns'>
    <button><TiTick /> Attend</button>
    <button>< BsFillBookmarkFill />save</button>
    </div>

</div>



</div>

            <div className='post'>

<div className='image'>

    <img src={event1} alt="event-img" />

</div>

<div className='event-details'>

<h3>Tech Alumni AI Engineers Event</h3>

<div className='btns'>
    <button><TiTick /> Attend</button>
    <button>< BsFillBookmarkFill />save</button>
    </div>

</div>



</div>

<div className='post'>

<div className='image'>

    <img src={event1} alt="event-img" />

</div>

<div className='event-details'>

<h3>Tech Alumni AI Engineers Event</h3>

<div className='btns'>
    <button><TiTick /> Attend</button>
    <button>< BsFillBookmarkFill />save</button>
    </div>

</div>



</div>

<div className='post'>

<div className='image'>

    <img src={event1} alt="event-img" />

</div>

<div className='event-details'>

<h3>Tech Alumni AI Engineers Event</h3>

<div className='btns'>
    <button><TiTick /> Attend</button>
    <button>< BsFillBookmarkFill />save</button>
    </div>

</div>



</div>

        </div>
        </Fragment>
    )
}

export default TopFourEvents