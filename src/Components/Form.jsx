import React,{Component} from 'react';
import axios from 'axios';
import {ToastsContainer, ToastsStore} from 'react-toasts';
import { NotificationManager } from 'react-notifications';
import styled from 'styled-components';

const Container=styled.div`
background-color:white;
color:black;
padding:16px;
position:absolute;
top:${props=>props.top}px;
right:36px;
z-index:999;
transition:top 0.5s ease;`;

class Form extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'',
			Email:'',
			Mobile:'',
			top:-209,
		}
		this.timeout=null;
	}

	changeHandler=(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}
	
	submitHandler=(e)=>{
		e.preventDefault()
		console.log(this.state)
axios.post("https://sheet.best/api/sheets/bd7a12a5-bd2b-4b2f-8a92-e72dd9a3d3e4",
this.state).then(response =>
	{console.log(response)})
	.catch(error=>{console.log(error.repsonse)})
	this.setState({
		name: '',
		Email:'',
		Mobile:''
	  });
	  NotificationManager.success('You have added a new book!', 'Successful!', 2000);
}

showNotification=()=>{
	this.setState({
		top:506,
	},()=>{
		setTimeout(()=>{
			this.setState({
				top:-200
			});
		},3000);
	});
}

    render(){
		const{name,Email,Mobile}=this.state
        return(
<div className="banner-text2">
	<form onSubmit={this.submitHandler} >

	<div class="input-group mb-3">

  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Name</span>
  </div>
	 <input type="text" class="form-control" aria-describedby="emailHelp" name="name" value={name} onChange={this.changeHandler}></input>
		</div>
	


		<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Email</span>
  </div>
<input type="text" class="form-control" aria-describedby="emailHelp"  name="Email" value={Email} onChange={this.changeHandler}></input >

	</div>

		<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Message</span>
  </div>
<input type="text" class="form-control" aria-describedby="emailHelp" name="Mobile" value={Mobile} onChange={this.changeHandler}></input>

</div>
<React.Fragment>
<div className="submit">
<button type="submit" class="btn btn-primary" onClick={this.showNotification}>Submit</button>
             <Container top={this.state.top}>Thank You Soon our Team will contact You</Container>
            

</div>
</React.Fragment>

	</form>

  
   
  

</div>


)
}
}

export default Form;
