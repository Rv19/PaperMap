import React,{Component} from 'react';

class Experience extends Component{
    render(){
        return(
            <div className="rows-xs-3">

            <div className="social-links">
          <div className="col-xs-3">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/rohit-yadav-10a862143/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            </div>
            <div className="col-xs-3">
            {/* Github */}
            <a href="https://github.com/Rv19" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            </div>
            <div className="col-xs-3">
  
            {/* Quora */}
            <a href="https://www.quora.com/profile/Rohit-Yaduvanshi-15" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-quora" aria-hidden="true" />
            </a>
            </div>
            <div className="col-xs-3">
  
            {/* Instagram*/}
            <a href="https://www.instagram.com/yaduvanshi_rv1419/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
            </div>
  
          </div>

          </div>
        )
   }
}
export default Experience;