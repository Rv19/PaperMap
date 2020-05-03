import React,{Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Form from './Form';
class Contactme extends Component{
    render(){
        return(
          <div className="contact-grid">
            <div className="contact-body">
            <Grid className="final">
              <Cell col={6}>
              <div className="rows">
                <div className="col-xs-3">
                <h2 style={{ width: '100%', paddingTop: '1em'}}>Rohit Yadav</h2>
                <img
                  src="Rohit.png"
                  alt="avatar"
                  style={{height: '250px'}}
                   />
                   
                 <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>If You have any Query please fill the Form Soon I will contact You. Thanks!!</p>
                 </div>
                 </div>
          
              </Cell>
              
              <Cell col={6}>
              <div className="rows">
                <div className="col-xs-3">
                <h2 style={{paddingTop: '1em'}}>Contact Me</h2>
               
                <div style={{ width: '100%'}}>
                <Form/>
                </div>
                </div>
                 </div>
              </Cell>
            </Grid>
          </div>
          </div>
        )
   }
}
export default Contactme;