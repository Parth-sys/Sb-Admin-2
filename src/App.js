import React from 'react';
import './App.css';
import DashC1 from './DashC1'
import Cards from "./card"
import Sidebar from './Sidebar';
import Chart from './Chart';
import {Grid} from '@mui/material'

import { Colorbar } from './Colorbar';

function App() {
  
  return (
   <Grid>

   <DashC1/>
    
   <Sidebar></Sidebar>
   <div>
  <h2 style={{marginLeft:"150px", color:'lightgray'}}>Dashboard</h2> 
  <button style={{backgroundColor:"blueviolet",marginLeft:"1000px"}}>Generate report</button>   
  </div>
   <Cards></Cards>

   <Chart></Chart>
   <Colorbar></Colorbar>
   
   </Grid>
  );
}

export default App;
