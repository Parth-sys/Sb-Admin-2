import { Grid } from '@mui/material';
import React from  'react';

import Linechart from './Linechart';
import Piechart from './Piechart';

function Chart(){

    return(
      <Grid>
        <div   className="chart" >

        <div className='div3'  >
              <h6 style={{color:"blue"}}>Earnigs overview</h6>
              <hr></hr>
            <Linechart></Linechart>


      </div>
              


           

      <div className='div4' >
              <h6 style={{color:"blue"}}>Revenue sources</h6>
              <hr></hr>
              <Piechart></Piechart>

           


      </div>

      
   

</div>

<div  style={{display:"flex" ,justifyContent:'center', marginLeft:'120px' }} >
    <div className='div4'>
    <h5 className='Tcolor'>Projects </h5>  
        <hr></hr>
     <h5>Sales tracking</h5>   
    <progress max="100" value="20"   style={{backgroundColor:"red"}} ></progress>

    <h5> Server migration</h5>
    <progress max={100} value="40"  className='yellow' ></progress>

    <h5>Customer Database</h5>
    <progress max={100} value="60"  className='sky' ></progress>

    <h5>Payout Details</h5>
    <progress max={100} value="80"  className='f' ></progress>

    <h5>Customer Support</h5>
    <progress max={100} value="80"  className='f' ></progress>
 


    </div>


    <div className='div2'>
    <h5 className='Tcolor'>llustrations </h5>  
    <hr></hr>
   <img src="https://previews.123rf.com/images/rrraven/rrraven1804/rrraven180400055/100287496-man-working-on-computer-vector-business-icon.jpg" alt='Img' className="im" ></img>
   <p className='para'>Add some quality, svg illustrations to your project courtesy of<br></br> <a href='_blank' className='a'>unDraw</a>, 
     a constantly updated collection of beautiful svg images that<br></br>
     you can use completely free and without attribution!</p>
    </div>

</div>

   </Grid>





    )
  }
  
  
  export default Chart;




