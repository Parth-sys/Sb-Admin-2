import React from "react";
import { Grid } from "@mui/material";

export function Colorbar(){

return(
 
    
    <Grid>
     <div className="colordiv">   

    <div className="primary">
   <p>primary  #4e73df </p>   
       

    </div>

    <div className="secondary">
   <p> Success #1cc88a  </p>
    

    </div>


    <div className="info">
   <p> Success #1cc88a  </p>
    

    </div>

    <div className="Warning">
   <p> Success #1cc88a  </p>
    

    </div>
    <div className="danger">
   <p> Success #1cc88a  </p>
    

    </div>
    <div className="sec">
   <p> Success #1cc88a  </p>
    

    </div>
  
 
    </div>


   <div className="information">
       <h5 className="Tcolor">development Approach</h5>
       <hr></hr>
       <p className="para">SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. 
        Custom CSS classes are used to create custom components and custom utility classes.

        Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
       
   </div>


</Grid>
 
)

}