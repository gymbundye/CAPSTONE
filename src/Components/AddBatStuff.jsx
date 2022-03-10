import React, { Component } from 'react';
import BatStuffService from '../Services/BatStuffService'

class AddBatStuff extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id: '',
           type: '',
           name:'',
           about:'',
           firstapp:'',
           image:'',

        }
        this.idHandler =this.idHandler.bind(this);
        this.typeHandler = this.typeHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.aboutHandler = this.aboutHandler.bind(this);
        this.firstappHandler = this.firstappHandler.bind(this);
        this.imageHandler= this.imageHandler.bind(this);

    }//constructor
    idHandler=(event) =>{
        this.setState({
            id: event.target.value});
    }
     
    typeHandler=(event) => {
        this.setState({
             type: event.target.value});
    }


    nameHandler=(event) => {
        this.setState({
           name: event.target.value});
    }

     
    aboutHandler=(event) => {
        this.setState({
             about: event.target.value});
    }

    firstappHandler=(event)=>{
        this.setState({
            firstapp: event.target.value});
    }

    imageHandler=(event)=>{
        this.setState({
            image: event.target.value});
    }

    saveBatStuff = (e) => {
        e.preventDefault();
        let BatStuff={
            id: this.state.id,
           type: this.state.type,
           name: this.state.name,
           about: this.state.about,
           firstapp:this.state.firstapp,
           image:this.state.image,

        };
        console.log(BatStuff);
        BatStuffService.createBatStuff(BatStuff).then(res =>{
            console.log(this.props)
                this.props.history?.push('/batstuff');  
            }).catch(err=>{
                console.log(err)
                console.log("bat-record not saved.");
            });
       
       
        
        
    }//closing save method

    cancel(){
        this.props.history.push('/batstuff');
    }

    render() {
        return (
            <div className='list'>
               <div>
                   <div>
                      <div>
                          <center><h2>Add Bat-Information!</h2></center>
                          <div>
                            <center>
                              <form className='form'>  
                                  <div>
                                      <label> Type: </label>
                                      <input placeholder="Nana," name="type" className="form-control"
                                         value={this.state.type} onChange={this.typeHandler} />
                                   </div>
                                   <div className="form-group">
                                      <label> Name: </label>
                                      <input placeholder="Nana," name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label> About: </label>
                                      <input placeholder="Nana," name="about" className="form-control"
                                         value={this.state.about} onChange={this.aboutHandler} />
                                   </div>  
                                     <div className="form-group">
                                     <label>First Appereance: </label>
                                     <input placeholder="Nana," name="firstapp" className="form-control"
                                        value={this.state.firstapp} onChange={this.firstappHandler} />
                                  </div>
                                   <div className="form-group">
                                   <label>Image: </label>
                                   <input placeholder="Batman!" name="image" className="form-control"
                                      value={this.state.image} onChange={this.imageHandler} />
                                </div>
                                    <button className="btn btn-success" onClick={this.saveBatStuff}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form></center>
                              
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default AddBatStuff;