import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
const CreatePost=()=>{

    const [title,setTitle]=useState("")
    const [body,setBody]=useState("");
    const navigate=useNavigate();

    //Data Insereted..

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3005/addpost',{title,body})
        .then((response)=>{
            console.log(response.data);
            navigate('/');
            })
            .catch((error)=>{
                console.log(error);
                });
            }
    return(
       
        <div className="container mt-5">
            <h1>This is CreatPost</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Create a NewPost</h3>
                        </div>
                        <br></br>
                        <div className="card-body">
                             <form onSubmit={handleSubmit}>
                                 <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" className="form-control" placeholder="Enter Title"
                                    value={title} onChange={(e)=>setTitle(e.target.value)}/>
                                 </div>
                                 <br></br>
                                 <div className="form-group">
                                    <label>Body</label>
                                    <textarea className="form-control" placeholder="Enter Body" value={body} onChange={(e)=>setBody(e.target.value)}/>
                                 </div>
                                 <br></br>
                                 <button type="submit" className="btn btn-primary">Create Post</button>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreatePost;