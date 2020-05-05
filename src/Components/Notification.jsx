import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
background-color:#444;
color:white;
padding:16px;
position:absolute;
top:${props=>props.top}px;
right:16px;
z-index:999;
transition:top 0.5s ease;`;
 
 export default class Notification extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            top:-209,
        };
        this.timeout=null;
    } 

    // onShow=()=>{
    //     if(this.timeout){
    //         clearTimeout(this.timeout);
    //         this.setState({top:-100},()=>{
    //             this.timeout=setTimeout(()=>{
    //                 this.showNotification();

    //             },500);
    //         })
    //     }else{
    //         this.showNotification();
    //     }

    // }
    showNotification=()=>{
        this.setState({
            top:16,
        },()=>{
            setTimeout(()=>{
                this.setState({
                    top:-200
                });
            },3000);
        });
    }
    render(){
         
         return(
             <React.Fragment>
                 <button onClick={this.showNotification}>Clicj here</button>
             <Container top={this.state.top}>Exampler here</Container>
             </React.Fragment>
         )
     }
 }
