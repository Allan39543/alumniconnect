import React, { Fragment, useState, useEffect } from 'react'
import event1 from '../SiteMedia/event8.jpeg'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import axios from 'axios'

function Events() {

    const [events, setAllEvents] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchEvents = async () => {

        try {

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/all`)

            setAllEvents(response.data)


            setLoading(false)


        }
        catch (err) {

            setLoading(false)
        }

    }

    useEffect(() => {

        fetchEvents()

    }, [])

    console.log('events', events)

    return (

        <Fragment>

            <h1 className='top-eventsh1' id='h1white' >Events</h1>

            <div className='top-events' id='all-events'>

                <h1 className='top-eventsh1' id='top-eventsh1'>Events</h1>


{
    events.map((details)=>(

                <div className='post'>

                    <div className='image'>

                        <img src={event1} alt="event-img" />

                    </div>

                    <div className='event-details'>

                        <h3>{details.displayName}</h3>

                        <div className='btns' >
                            <button><TiTick /> Attend</button>
                            <button>< BsFillBookmarkFill />save</button>
                        </div>

                    </div>



                </div>
      )  )

}



            </div>
        </Fragment>
    )
}

export default Events