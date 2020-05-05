import React,{Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Notification from './Notification';

class TechnicalStack extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          search:'',
          activeTab: 0 };
      }
      toggleCategories() {
   
        if(this.state.activeTab === 1){
            return(
               
           <div className="stack-grid1">
            <div className="stack-grid2">
         <div className="col-xs-3">
     <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(algo.jpeg) center / cover'}} >Algorithm Design</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%', height: '36px'}} colored><a href="https://drive.google.com/drive/folders/0B77M9U2EbAqVMkRnUmRyMS1uanM?usp=sharing" target="_blank">CSA</a></Button>
              </CardActions>
            
            </Card>
            </div>
         </div>

         <div className="stack-grid2">
         <div className="col-xs-3">
     <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(csa.jpeg) center / cover'}} >Computer Architecture</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%', height: '36px'}} colored><a href="https://drive.google.com/drive/folders/0B77M9U2EbAqVMkRnUmRyMS1uanM?usp=sharing" target="_blank">CSA</a></Button>
              </CardActions>
            
            </Card>
            </div>
            </div>
        
            <div className="stack-grid2">
            <div className="col-xs-3">
              <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#000', height: '176px', background: 'url(coa.jpeg) center / cover'}} >Computer Organization</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1QyA6HQ46UZhE54KBQDfNuKz3oO2KnL1U" target="_blank">COA</a></Button>
              </CardActions>
            
            </Card>
            </div>
            </div>

            <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(ds.jpeg) center / cover'}} >Data Structures(DS)     </CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1_tLzvZ_YFYb3cCARqpHDmhB49PA2auMF"target="_blank">DS</a></Button>
              </CardActions>
            
            </Card>
        </div>
            </div>

            <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(dsd.jpeg) center / cover'}} >Digital System Design</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1u7p--fByrCCn6OD7lGceeuz0cJ2r3Ph2" target="_blank">DSD</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#000', height: '176px', background: 'url(edc.jpeg) center / cover'}} >Electron Devices</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1VZdvyRgFtUZVd3E2HWko8gf7dyseGaIu" target="_blank">EDC</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(eecs.jpeg) center / cover'}} >Electrical Control Sys</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=10bQV5jsvPFR_ZcgSPANkAhm_KS1mgbuY" target="_blank">EECS</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(gl.jpeg) center / cover'}} >German Language (GL)</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1aaB0wTWNFVeFX6E9swVAlEvaFps0VbQV" target="_blank">GL</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#000', height: '176px', background: 'url(ml.jpeg) center / cover'}} >Machine Learning(ML)</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://github.com/Rv19/ReactPortfolio" target="_blank">ML</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(micro.jpeg) center / cover'}} >Microprocessors Systems (MS)</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=13r39SQgxxORjPupmvjJXfTYzXkixJQ5c"target="_blank">MS</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#000', height: '176px', background: 'url(ooad.jpeg) center / cover'}} >Object oriented Analysis</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1E7h_9kNSXqMh4_UVoIJl7eeXGN5uZSME"target="_blank">OOAD</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(c++.jpeg) center / cover'}} >Programming in C++</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1_0HdwaorF7Kc7WJ0di4Rb5HPAKS5ZEWS"target="_blank">C++</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#000', height: '176px', background: 'url(prob.jpeg) center / cover'}} >Probability And Queueing</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1iHPEqd7oZu7h_KukhyKcCOmxn2w3Z-im"target="_blank">P&Q</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(ethics.jpeg) center / cover'}} >Professional Ethics</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1-P9CfxQI6ODlbTMBnDDFs_vR2VHsC3QF"target="_blank">PE</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(java.jpeg) center / cover'}} >Programming in Java</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1qVdgNVbKTfbsT3MKuK3xqzbTgRVxgUye"target="_blank">Java</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#000', height: '176px', background: 'url(transform.jpeg) center / cover'}} >Trasform and Boundary</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=13ZMzxKlmNP52afZwLhKzbQOLI7_oz0UT"target="_blank">Transform</a></Button>
              </CardActions>
            </Card>
        </div>
        </div>
              <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(french.jpeg) center / cover'}} >French Language</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1LSHiHypK05tmeJ5WeIyxLYQWn6njJlcb"target="_blank">FL</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>


        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#000', style:'bold', height: '176px', background: 'url(chinese.jpeg) center / cover'}} >Chinese Language</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1tig54pOg_U-wVMklsR0c0t3yzhCSzg_S"target="_blank">CL</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>


        </div>
      
        )}


 else if(this.state.activeTab === 0) {
                return(
                      
           <div className="stack-grid1">
           <div className="stack-grid2">
        <div className="col-xs-3">
    <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(calculus.jpeg) center / cover'}} >Advanced Calculus</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%', height: '36px'}} colored><a href="https://drive.google.com/open?id=1MLCKrieKSWCt0XAsKyYmGfMJ3KlWQQQ1" target="_blank">AC</a></Button>
             </CardActions>
           
           </Card>
           </div>
        </div>

        <div className="stack-grid2">
        <div className="col-xs-3">
    <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(civil.jpeg) center / cover'}} >Basic Civil Engineering</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%', height: '36px'}} colored><a href="https://drive.google.com/open?id=1Zs5jfcVcyc2vand1ALS7ymEgWwE9v48_" target="_blank">BCE</a></Button>
             </CardActions>
           
           </Card>
           </div>
           </div>
       
           <div className="stack-grid2">
           <div className="col-xs-3">
             <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(electrical.jpeg) center / cover'}} >Basic Electrical Engineering</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=10bQV5jsvPFR_ZcgSPANkAhm_KS1mgbuY" target="_blank">BE</a></Button>
             </CardActions>
           
           </Card>
           </div>
           </div>

           <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(electronics.jpeg) center / cover'}} >Basic Electronics </CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1nPRCmqUJvtRKv8XBtbBuxyMa5t0Xmtqg"target="_blank">BE</a></Button>
             </CardActions>
           
           </Card>
       </div>
           </div>

           <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(mechanical.jpeg) center / cover'}} >Basic Mechanical </CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1ROL5fQwXTY5idQnLS3FiiOvqU7Pt-87T" target="_blank">BME</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>



       <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(biology.jpeg) center / cover'}} >Biology For Engineers  (BIO)</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=15CuA6Eq151n_9P9dNSkuoVcVPXMNcquS" target="_blank">BIO</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>

       <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#000', height: '176px', background: 'url(calculusolid.jpeg) center / cover'}} >Calculus And Solid Geo</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1MUAS9hGC8IwmoGmrTolTGIgr35i6MgDP" target="_blank">CSG</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>

       <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#000', height: '176px', background: 'url(chemistry.jpeg) center / cover'}} >Chemistry for Engineers</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1ttfkZSXOW0Bx1DyNIiDlVOEyxNkgNgQX" target="_blank">Chem</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>

       <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(english.jpeg) center / cover'}} >English For Engineers</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1GBYWXiQakIHVLBJJQqojRzoX-ztFUfeY" target="_blank">Eng</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>

       <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#000', height: '176px', background: 'url(graphics.jpeg) center / cover'}} >Engineering Graphics (EG)</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1zGFkUuwXFwejAWQODfFgJ0puecM5oqsY"target="_blank">EG</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>

       <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(material.jpeg) center / cover'}} >Material Science (MS)</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1bC_SqL7EzDEFoXk6Y9-AkkaSbN_Grt61"target="_blank">MS</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>

       <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(pdd.jpeg) center / cover'}} >Program Design (PDD)</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1SSe4kazagA45TgbFXBEk3sepWzSaU7oS"target="_blank">PDD</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>

       <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(physics.jpeg) center / cover'}} >Physics for Engineers</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=17dn2iBQB8T9Dge8l6ejmvDeLUatIqoIE"target="_blank">Phy</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>

       <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(evs.jpeg) center / cover'}} >Environmental Science (EVS)</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1WswoatU-x1iKVsJW9nFxHeNEHW3G_TGm"target="_blank">EVS</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>

       <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#000', height: '176px', background: 'url(value.jpeg) center / cover'}} >Value Education (Soft Skills)</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1ECdAGMh-CaPZS1GU-jZ9G2u2wjFEAXRN"target="_blank">VE</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>

       <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(scilab.jpeg) center / cover'}} >Scilab for Engineers</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1W4xbbVXjbHIPNf05_hs68EIRbSmz3coF"target="_blank">Sci</a></Button>
             </CardActions>
           </Card>
       </div>
       </div>
             <div className="stack-grid2">
           <div className="col-xs-3">
           <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(hardware.jpeg) center / cover'}} >Hardware Lab (HL)</CardTitle>
             {/* <CardText>
             Portfolio React application tells about the Resume, Projects and many other things.
             </CardText> */}
             <CardActions border>
               <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1__3fao_7oLR5flvKmhO1enk89TWCH2qi"target="_blank">Har</a></Button>
             </CardActions>
           
           </Card>
       </div>
       </div>


       </div>
     )}

         else if(this.state.activeTab === 2) {
          return (
             
            <div className="stack-grid1">
            <div className="stack-grid2">
         <div className="col-xs-3">
     <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(cn.jpeg) center / cover'}} >Computer Networks</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%', height: '36px'}} colored><a href="https://drive.google.com/open?id=1_g0T1H1KTfg1sXwPDqo33Kn84L14h4kT" target="_blank">CN</a></Button>
              </CardActions>
            
            </Card>
            </div>
         </div>

         <div className="stack-grid2">
         <div className="col-xs-3">
     <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(compiler.jpeg) center / cover'}} >Compiler Design</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%', height: '36px'}} colored><a href="https://drive.google.com/open?id=1X7DFHOqtcha-S5jfS491aqy31LXX54DT" target="_blank">CD</a></Button>
              </CardActions>
            
            </Card>
            </div>
            </div>
        
            <div className="stack-grid2">
            <div className="col-xs-3">
              <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(computational.jpeg) center / cover'}} >Computational Logic</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=11_qpdPKJwUbm1wGeVvNzHUPcd0dvAsk5" target="_blank">CL</a></Button>
              </CardActions>
            
            </Card>
            </div>
            </div>

            <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(crypto.jpeg) center / cover'}} >Cryptography and Network  </CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=15PvUZjnYsTOqioziFAEFft2L6Jk0ZGpJ"target="_blank">C&N</a></Button>
              </CardActions>
            
            </Card>
        </div>
            </div>

            <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#000', height: '176px', background: 'url(mining.jpeg) center / cover'}} >Data Mining (DM)</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1W1-rVdL5CWOxwZOaTkPgfCgDf2Go0lim" target="_blank">DM</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(bigdata.jpeg) center / cover'}} >Data Sci/Big Data</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1KiP7HLnpwJ8th0vNKavO91kW2ao017UI" target="_blank">DS/BD</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(dbms.jpeg) center / cover'}} >Database Management</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1TboR78BzqlPyMP3Bh1P5U4cF6tiFN8Qy" target="_blank">DM</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(digitalsignal.jpeg) center / cover'}} >Digital Signal Processing</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1K-lp3htzDm_eBlUk2H27Y_x2u8L25RV4" target="_blank">DIP</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(discreete.jpeg) center / cover'}} >Discreete Mathematics</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1jotAX07kli80wfPkVeEz_QcvM5BtttLK" target="_blank">ML</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(digitallogic.jpeg) center / cover'}} >Digital Logic (PLDS&VHDL)</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1FnVt6CDTHUf5oi4ifjtKeuKD_dOsSL-B"target="_blank">DL</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(evsbio.jpeg) center / cover'}} >Environmental biotechnology</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1EsuhmMwj_7XTXNwzTkCzMKHegxfgPT_c"target="_blank">EB</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#000', height: '176px', background: 'url(itn.jpeg) center / cover'}} >Info and Net. Security</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=15jTjO3kWD_kUyy_mEubfwAHhBKmP3aiO"target="_blank">INS</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(mad.jpeg) center / cover'}} >Mobile APP Development</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1-aHUzLKklEOfjSzA21a1Y8ynH5L3N2O9"target="_blank">MAD</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(oslinux.jpeg) center / cover'}} >Operating Sys and Linux</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=14X_YRVP4kzH_bGRZS56-s5S10wgFwYlZ"target="_blank">PE</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(os.jpeg) center / cover'}} >Operating System (OS)</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1GYHcSLXtGK_RkyuSglj1D6Y3NdVharUE"target="_blank">OS</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(python.jpeg) center / cover'}} >Python Programming</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1WCtYDDkJp3snP2XKMIs2Z_ykD6nF9-Im"target="_blank">PP</a></Button>
              </CardActions>
            </Card>
        </div>
        </div>
              <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(php.jpeg) center / cover'}} >Programming in PHP</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1xMALERL4r-7CRNftnQFskHWEzQDuaVJ7"target="_blank">PHP</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>


        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(sep.jpeg) center / cover'}} >Software Eng. Principles</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1VxGTuS8c5FnU_hq4Ib3zUk79ipA-gE_H"target="_blank">SEP</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>


        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#000', height: '176px', background: 'url(toc.jpeg) center / cover'}} >Theory of Computation</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1UaA37AO3K5cldPnMx06ZiR33twgiLgwF"target="_blank">TOC</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>


        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(pd.jpeg) center / cover'}} >Professional/Personal Development</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1ECdAGMh-CaPZS1GU-jZ9G2u2wjFEAXRN"target="_blank">PD</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>





        </div>
      )}

        else if(this.state.activeTab === 3) {
          return (
            <div className="stack-grid1">
          <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(ecom.jpeg) center / cover'}} >E-Commerce (EC)</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1bAXtDoFi5c45dBsKPnjmejyRbIT7YCF7"target="_blank">E-Commerce</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(ia.jpeg) center / cover'}} >Information Assurance(IA)</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1pK0TdziOxn5vZitiNP6-XmX7WZvIk7Jy"target="_blank">IA</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(ip.jpeg) center / cover'}} >Integrated Programming(IP)</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1IVTJHLiSqKUqKMF2FOl90bbB1VoRns1v"target="_blank">IP</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(mi.jpeg) center / cover'}} >Management Information (MI)</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1AVmRf9oLOinacu1RasmIkro7ZZWI_VyB"target="_blank">MI</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(ns.jpeg) center / cover'}} >Network Security (NS)</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1CKJBGpZ_7YsCz-ZVIjfwsBDUull6aJ3Y"target="_blank">NS</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(cloud.jpeg) center / cover'}} >Cloud Computing</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1u07CJA6jyx0Y0Wz8CTZYyVyfDv4jEk7Y"target="_blank">CC</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(testing.jpeg) center / cover'}} >Software Testing</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1z_iz_-om0stLSed__vKBT-DtjSZ8bqK9"target="_blank">ST</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>

        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(ai.jpeg) center / cover'}} >Artificial Intelligence</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1IP-kscJnMU6GEuBPWZ6qCuPAqdjF7vaZ"target="_blank">ST</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>
        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(dc.jpeg) center / cover'}} >Distributed Computing</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=157hz2DqBne2ULBzafO0ogGiAzR6kd5XB"target="_blank">ST</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>
        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(iot.jpeg) center / cover'}} >Internet of Things</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=18XaBd_2vOR09BvWJS-qCfTisZaK8GLvg"target="_blank">ST</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>
        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle title="algo" style={{color: '#000', height: '176px', background: 'url(sqa.jpeg) center / cover'}} >Software Qual Assurance</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=1AiR5DNZbxid2q_wyaMlp4HDDd3oClaUt"target="_blank">SQA</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>
        <div className="stack-grid2">
            <div className="col-xs-3">
            <Card className="card" shadow={1} style={{width:'210px',height:'220px'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(web.jpeg) center / cover'}} >Web Technology</CardTitle>
              {/* <CardText>
              Portfolio React application tells about the Resume, Projects and many other things.
              </CardText> */}
              <CardActions border>
                <Button style={{width:'100%'}} colored><a href="https://drive.google.com/open?id=13oTH_MuYaPN64CQ3_f0KJu3DoOPDadW7"target="_blank">ST</a></Button>
              </CardActions>
            
            </Card>
        </div>
        </div>
      

        </div>
          )
        }



      }
    
    
      onchange = e => {
        this.setState({ search: e.target.value });
      };
    
      render() {
        const { search } = this.state;
        return(
          <div>
           <div className="rows">
               <div className="col-xs-3">  
               {/* <input label="Search" icon="search" onChange={this.onChange}/> */}
            <Tabs className="col-xs-3"activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab className="col-xs-3">1st Year</Tab>
              <Tab className="col-xs-3">2nd Year</Tab>
              <Tab className="col-xs-3">3rd Year</Tab>
              <Tab className="col-xs-3">4th Year</Tab>
            </Tabs>
            </div>
            </div>
    
              <Grid>
                <Cell col={12}>
                <div className="rows">  
           <div className="col-xs-3">
                  <div >{this.toggleCategories()}</div>
                  </div>
                  </div>
                </Cell>
              </Grid>
    
    
          </div>
        )
      }
    }      

export default TechnicalStack;