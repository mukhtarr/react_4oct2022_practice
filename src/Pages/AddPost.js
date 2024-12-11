import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddPost() {

    const [showCreateForm, setCreateForm] = useState(false)
    const [newRecord, setNewRecord] = useState({userId:'1', id:'',title:'', body:'', latest: true, oldest: false, liked: false, dislike: false})
    const [singlePost, setSinglePost] = useState()

    //logic to connect API --- to post records
  const createRecord = () => {
    axios
    .post("http://localhost:3001/posts", newRecord)
    .then((response) => {
        alert('Record Added Successfully')
        setCreateForm(false)
    })
    .catch((error) => console.log(error));
  }

  return (
    <div>
        <div className="row mt-4">
            <div className="col-md-12">
            <div className="container row border">
                <label>Title</label>
                <input 
                type="text" 
                className="form-control" 
                onChange={(event)=> setNewRecord({...newRecord, title:event.target.value})}/>

                <label>Body</label>
                <input 
                type="text" 
                className="form-control"
                onChange={(event)=> setNewRecord({...newRecord, body:event.target.value})}/>

                <button onClick={createRecord} className="btn btn-success mt-4">Create</button>

            </div>
            </div>
        </div>
    </div>
  )
}
