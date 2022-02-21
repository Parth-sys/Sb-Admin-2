import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { grey } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
function Cards(){
    return(

        < div className='Cards' >
           
                   
          <div className='div1' >
               <div  style={{justifyContent:"center"}}> 
              <h6 className="card-head"   >EARNINGS (MONTHLY)</h6>
              <span style={{marginLeft:"208px",marginTop:"1px"}}><BusinessCenterIcon></BusinessCenterIcon></span>  <br></br>
              <h4 style={{marginTop:"-10px",marginLeft:"5px"}} >$3000</h4>
              
               </div>
           
              
              
              
          </div>  

        
          <div className="div1" >
          <div > 
              <h6 className="card-head" >EARNINGS (ANNUAL)</h6><br></br><span>
               <span style={{display:"flex",justifyContent:"end", marginTop:"-30px" }}><MonetizationOnIcon></MonetizationOnIcon></span></span>
              <h4 style={{marginTop:"-1px",marginLeft:"5px"}} >$3000</h4>
              
               </div>


              </div>  



              <div className="div1" >
              <div> 
              <h6 className="card-head" >Tasks</h6><br></br><span>
               <span style={{display:"flex",justifyContent:"end", marginTop:"-30px" ,color:grey}}><AssignmentIcon></AssignmentIcon></span></span>
                <b  style={{fontSize:"20px"}}>50%</b><progress style={{marginLeft:"5px"}}   max="100" value="50" ></progress>
              
               </div>
              </div>  



              <div className="div1" >
             
              <div> 
              <h6 className="card-head" >Pending Request</h6><br></br><span>
               <span style={{display:"flex",justifyContent:"end", marginTop:"-30px" ,color:grey}}><PendingActionsIcon></PendingActionsIcon></span></span>
              <h2 style={{marginTop:"-1px",marginLeft:"5px"}} >18</h2>
              
               </div>

              </div>





  
  
  
        </div>





    )
}
export default Cards;