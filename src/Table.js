
import React,{useState} from 'react'
import {connect} from 'react-redux'
import {add} from './action'
const Table = ({contacte,add}) => {
  const[data,setdata]=useState(
    {
      name:"",
      phoneno:" ",
      email:" "
    }
  );
const submitHandler=e=>
{
  e.preventDefault();
  add({data})
 console.log(contacte)
}
  return (
    <div>
     
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open modal
</button>


<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      
      <div class="modal-body">
       <form onSubmit={submitHandler}> 
       name <input value={data.name} onChange={(e)=>setdata({...data,name:e.target.value})}></input><br/>
       phone <input value={data.phoneno} onChange={(e)=>setdata({...data,phoneno:e.target.value})}></input><br/>
       email <input valur={data.email} onChange={(e)=>setdata({...data,email:e.target.value})}></input><br/>
       <input type="submit" value="submit"></input>
       </form>
      </div>

      
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
        <div class="container mt-3">            
  <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th>sno</th>
        <th>Name</th>
        <th>phoneno</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {contacte.map((contact,index)=>(
      <tr>
        <th>{index+1}</th>
        <td>{contact.name}</td>
         <td>{contact.phoneno}</td>
        <td>{contact.email}</td>
        <td><button className="btn btn-danger">EDit</button><button className='btn btn-primary'>Add</button></td>
      </tr>
        ) )}
    </tbody>
  </table>
</div>
    </div>
  )
}
const mapStateToProps=state=>
(
  {
    contacte:state
  }
)
export default connect(mapStateToProps,{add})(Table)