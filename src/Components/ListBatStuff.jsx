import React, { useState, useEffect } from 'react';
import BatStuffService from '../Services/BatStuffService'
import { useNavigate } from 'react-router-dom';


function ListBatStuff (props){
     const [batstuff, setBatstuff]= useState([]);
     const navigate = useNavigate();
     useEffect(()=>{
        BatStuffService.getBatStuff().then((res)=>{
            setBatstuff(res.data);
        })
     },[])

    const updateBatStuff=(id)=>{
    
        navigate(`/UpdateBatStuff/${id}`);
                //      BatStuffService.updateBatStuff(id).then(res => {
                //        batstuff({
                //               batstuff: batstuff.filter(batstuff => batstuff.id !== id)
                //         })
                //       console.log(res)
                //    })
                   
                }

    const deleteBatStuff=(id)=>{
    
  navigate(`/DeleteBatStuff/${id}`);
               BatStuffService.deleteBatStuff(id).then(res => {
                //  batstuff({
                //         batstuff: batstuff.filter(batstuff => batstuff.id !== id)
                //   })
                console.log(res)
             })
             
          }
        
          const viewBatStuff=(id)=>{
    
            navigate(`/ViewBatStuff/${id}`);
                         BatStuffService.viewBatStuff(id).then(res => {
                          //  batstuff({
                          //         batstuff: batstuff.filter(batstuff => batstuff.id !== id)
                          //   })
                          console.log(res)
                       })
                       
                    }
                  
     return (
         <div className='list'>
      {console.log(batstuff)}
           <center><h2>Bat-Information!</h2></center>
             <div> 
                 
             </div>
             <div>
                 <p></p>
             </div>
             <div>
                <center> <table className="table">
                     <thead>
                         <tr>
                             <th>Type</th>
                             <th>Name</th>
                             <th>About</th>
                             <th>First Appereance</th>
                             <th>Image</th>
                             <th>Actions</th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                             batstuff.map(
                                  batstuff =>
                                  <tr key={batstuff.name}>
                                      <td>{batstuff.type}</td>
                                      <td>{batstuff.name}</td>
                                      <td>{batstuff.about}</td>
                                      <td>{batstuff.firstapp}</td>
                                      <td><img className='imgDiv' src={batstuff.image}/></td>
                                      <td>
                                         <button onClick={() =>updateBatStuff(batstuff.id)} className="btn">Update</button><br></br> 
                                         <button onClick={() =>deleteBatStuff(batstuff.name)} className="btn">Delete</button> 
                                         {/* <button onClick={() =>viewBatStuff(batstuff.name)} className="btn btn-primary">View</button>  */}
                                      </td>
                                  </tr>
                             )
                         }
                     </tbody>
                 </table></center>
             </div>

         </div>
     );
 }


export default ListBatStuff





