import React,{useState} from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import axios from 'axios'

function AddAlumniModal({closeModal}){

    const[details,setDetails]=useState({email:"",names:"",userType:"",course:"",gradyr:"",loading:false})

    const HandleSubmit = async (e) => {
        e.preventDefault();
        setDetails({ loading: true });
    
        const userDetails = {
          email: details.email,
          names: details.names,
          course:details.course,
          gradyr:details.gradyr,
          type:details.userType
          
        };
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/v1/users/`,
            userDetails
          );
          
          setDetails({email:"",names:"",userType:"",course:"",gradyr:"",loading:false}); // Reset the comment input after successful submission
        //   props.setCommentSent(prev => !prev); // Toggle commentSent to trigger re-fetching comments
        } catch (error) {
          setDetails({email:"",names:"",userType:"",course:"",gradyr:"",loading:false});
        }
      };

      console.log(details)

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

<h1>Add Alumni</h1>

                <form onSubmit={HandleSubmit}>

                <div className="form-details">
                <label> Email</label>

                <input type="email" onChange={e => setDetails({ ...details, email: e.target.value })}  required/>
                </div>

                <div className="form-details">
                <label> Names </label>
                

                <input type="text" onChange={e => setDetails({ ...details, names: e.target.value })}  required/>
                </div>

                <div className="form-details">

                <label> User Type </label>
                
                <input type="text" onChange={e => setDetails({ ...details, userType: e.target.value })}  required/>

                </div>

                <div className="form-details">

                <label> Course </label>

                <input type="text" onChange={e => setDetails({ ...details, course: e.target.value })}  required/>

                </div>

                <div className="form-details">

                <label> Grad Year </label>

                <input type="text" onChange={e => setDetails({ ...details, gradyr: e.target.value })}  required/>

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

export default AddAlumniModal