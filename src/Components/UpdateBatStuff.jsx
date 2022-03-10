import React, { useState, useEffect} from 'react';
import BatStuffService from '../Services/BatStuffService'
import axios from 'axios';
import {  useParams, useNavigate } from 'react-router-dom';


 export default function UpdateBatStuff(){
     let params=useParams();
    let navigate=useNavigate();
    const[id, setid]=useState();
    const [name, setName]= useState('');
    const [type, setType]= useState('');
    const [about, setAbout]= useState('');
    const [firstapp, setFirstApp]= useState('');
    const [image, setImage]= useState('');
    const [batstuff, setBatstuff]=useState('')
    

    useEffect(()=>{
        BatStuffService.getBatStuffById(params.id).then((res)=>{
            // setBatstuff(res.data);
            console.log(res.data)
            setName(res.data.name)
            setType(res.data.type);
            setAbout(res.data.about);
            setFirstApp(res.data.firstapp);
            setImage(res.data.image);
        })
    },[])


    const updatedBatStuff = (e) => {
        e.preventDefault()
        let batstuff={
            id, 
            type,
            name,
            about, 
            firstapp,
            image,
        }
        BatStuffService.updateBatStuff(batstuff, params.id).then((res)=>{
                navigate('/ListBatStuff/')

        })
        
    }

    
                return (
                     <div className='list'>
                        <div>
                            <div>
                               <div>
                                <center><h2>Update Bat-Information!</h2></center>
                                   <div>
                                       <center>
                                       <form>  
                                           <div className="form-group">
                                               <label>Type: </label>
                                               <input placeholder='Name' name="type" className="form-control"
                                                  value={type} onChange={(e)=> setType(e.target.value)} />
                                            </div>   
                                            <div className="form-group">
                                               <label>Name: </label>
                                               <input placeholder="Name" name="name" className="form-control"
                                                  value={name} onChange={(e)=> setName(e.target.value)} />
                                            </div>   
                                            <div className="form-group">
                                               <label>About: </label>
                                               <input placeholder="About" name="about" className="form-control"
                                                  value={about} onChange={(e)=> setAbout(e.target.value)} />
                                            </div> 
                                            <div className="form-group">
                                               <label>First Appereance: </label>
                                               <input placeholder="First Appereance" name="firstapp" className="form-control"
                                                 value={firstapp} onChange={(e)=> setFirstApp(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                              <label>Image: </label>
                                               <input placeholder="Image" name="image" className="form-control"
                                                  value={image} onChange={(e)=> setImage(e.target.value)} />
                                            </div>  
                                             <button className="btn btn-success" onClick={updatedBatStuff}> Update </button>
                                             {/* <button className="btn btn-danger" onClick={}> Cancel </button>                     */}
                                       </form>
                                       </center>
                                   </div>
                               </div>
                            </div>
                        </div>
                     </div>
             );
 }
         
