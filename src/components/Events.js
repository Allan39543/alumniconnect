import React, { Fragment, useState, useEffect,useContext } from 'react'
import event1 from '../SiteMedia/event8.jpeg'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { UserContext } from '../App'
import { TiTick } from 'react-icons/ti'
import axios from 'axios'

function Events() {

    const user = useContext(UserContext)

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

    const AttendEvent=async(id)=>{

        console.log("Attend Event")

        const userDetails = {

            email: user.email,
            eventId:id

            
          };

        try {

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/attend`,userDetails)

            


            setLoading(false)


        }
        catch (err) {

            setLoading(false)
        }
    }

    const SaveEvent=async(id)=>{

        console.log("Attend Event")

        const userDetails = {

            email: user.email,
            eventId:id

            
          };

        try {

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/save`,userDetails)

            


            setLoading(false)


        }
        catch (err) {

            setLoading(false)
        }
    }

    console.log('events', events)

    return (

        <Fragment>

            <h1 className='top-eventsh1' id='h1white' >Events</h1>

            <div className='top-events' id='all-events'>

                <h1 className='top-eventsh1' id='top-eventsh1'>Events</h1>


{
    loading? "Loading..."
    :
    events.map((details)=>(

                <div className='post'>

                    <div className='image'>

                        <img src={event1} alt="event-img" />

                    </div>

                    <div className='event-details'>

                        <h3>{details.displayName}</h3>

                        <div className='btns' >

                            <button onClick={()=>AttendEvent(details._id)}><TiTick /> Attend</button>

                            <button onClick={()=>SaveEvent(details._id)}>< BsFillBookmarkFill />save</button>

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