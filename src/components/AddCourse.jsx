import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddCourse = () => {
    const [data,setData]=useState(
        {
            "cotitle":"",
            "codesc":"",
            "codate":"",
            "codurn":"",
            "covenue":"",
            "cotrainer":""
    
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        //console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("Succesfully added")
                    }
                    else{
                        alert("Error")
                    }
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <h1><center><i>COURSE REGISTRATION</i></center></h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course Title</label>
                            <input type="text" className="form-control" name='cotitle' value={data.cotitle} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course Description</label>
                            <input type="text" className="form-control" name='codesc' value={data.codesc} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course date</label>
                            <input type="text" className="form-control" name='codate' value={data.codate} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" className="form-control" name='codurn' value={data.codurn} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Venue</label>
                            <input type="text" className="form-control" name='covenue' value={data.covenue} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Trainer Name</label>
                            <input type="text" className="form-control" name='cotrainer' value={data.cotrainer} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCourse