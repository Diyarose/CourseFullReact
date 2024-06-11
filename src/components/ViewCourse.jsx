import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewCourse = () => {
    const [data,setData]=useState(
        [
            
        ]
    )
    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Course Title</th>
                                            <th scope="col">Course Desc</th>
                                            <th scope="col">Course Date</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">Venue</th>
                                            <th scope="col">Trainer Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {data.map(
                                        (value,index)=>{
                                            return  <tr>
                                            <th scope="row">{value.cotitle}</th>
                                            <td>{value.cotitle}</td>
                                            <td>{value.codate}</td>
                                            <td>{value.codurn}</td>
                                            <td>{value.covenue}</td>
                                            <td>{value.cotrainer}</td>
                                        </tr>
                                        }
                                       )}
                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCourse