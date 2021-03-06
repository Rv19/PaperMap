import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Landingpage from './Landingpage';
import Achievement from './Achievement';
import Contactme from './Contactme';
import Projects from './Projects';
import Resume from './Resume';
import TechnicalStack from './TechnicalStack'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';


const Main = () => (
  <Switch>
    <Route exact path="/" component={TechnicalStack} />
    <Route path="/contact" component={Contactme} />
    <NotificationContainer />
  </Switch>
)

export default Main;