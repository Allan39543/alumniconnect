import React,{useEffect,useState,useContext} from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { nanoid } from 'nanoid';
import {GrUpdate} from 'react-icons/gr'
import {AiTwotoneDelete} from 'react-icons/ai'
import { UserContext } from '../../App'
import axios from "axios";

function AlumniList(props){

    const user = useContext(UserContext)

    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(() => {

        const fetchUsers = async () => {

            try {

                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/allUsers`)

                    setUsers(response.data)

                    setLoading(false)

            }
            catch (err) {

                setLoading(false)
            }

        }

        fetchUsers()

    }, [])

    console.log(users)

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
       
{
    loading ? <h1>Loading</h1>
    :
    users.map(user=>(
        <tr key={nanoid()}>

            <td>{user.email}</td>
            <td>{user.names}</td>
            <td>{user.type}</td>
            <td>{user.course}</td>
            <td>{user.gradyr}</td>
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

export default AlumniList