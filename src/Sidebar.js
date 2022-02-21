
/*
import React, { useState } from 'react';

function Sidebar(){

    const [Open,setOpen]=useState(false);
    const [close,setclose]=useState();



     const toggle = () => {
       const width="150px"
      setOpen(true)
    };

   const handleClose=()=>{
     setclose(true)
   }

    return(
        

<div className="icon-bar"    >
  <button onClick={toggle} ><a> <i className=" fa fa-laugh-wink" ></i></a></button>
  <hr></hr>
  <a href='_blank'>  <i className="fa fa-search"></i></a>
  <hr></hr>
  <a href='_blank' ><i className="fa fa-envelope"></i></a>
  <hr></hr>
  <a  href='_blank' >  <i className="fa fa-globe"></i></a>
  <hr></hr>
  <a href="_blank"><i className="fa fa-trash"></i></a>
</div>

 
    )
}

export default Sidebar;
*/
//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons

import { FaChartArea,FaTable,FaGreaterThan,FaLessThan } from "react-icons/fa";
import {FcSettings} from "react-icons/fc";
 import  {RiDashboard3Line} from "react-icons/ri"
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import {AiOutlineTool,AiFillFolder} from "react-icons/ai";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "😉" : "😉 SB ADMIN 2 "}  </p>
            </div>
            
         { /*  <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click 
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
              */}
          </SidebarHeader>
          
          <SidebarContent>
            <Menu >
              <MenuItem   >
               <RiDashboard3Line></RiDashboard3Line>  
                 Dashboard
              
              </MenuItem>
              <hr style={{color:"lightgray"}}></hr>
              <MenuItem >< h4 style={{textSizeAdjust:"none"}}>Interface</h4>
              <ul>
              <MenuItem> <span><FcSettings></FcSettings>component </span></MenuItem>
              <MenuItem>
              <AiOutlineTool/> Utilities</MenuItem>
              </ul>

              </MenuItem>
              <hr style={{color:"lightgray"}}></hr>
              <MenuItem><h4>ADDONES</h4>
              
              <MenuItem>  <AiFillFolder/>   Pages </MenuItem>
              <MenuItem>  <FaChartArea/>  Charts</MenuItem>
              <MenuItem> <FaTable/>    Tables</MenuItem>
              
              </MenuItem>
              <hr style={{color:"lightgray"}}></hr>
              {/*
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <hr></hr>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
              <hr></hr>
              <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click }
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
              </Menu>   */}

              <MenuItem><button style={{borderRadius:"50%" ,border:"1px solid black " ,width:"30px",height:"30px", backGroundColor:"transparent",marginRight:"10px"}}  onClick={menuIconClick}>
                
              {menuCollapse ? (
                <FaGreaterThan/>
              ) : (
                <FaLessThan/>
              )}
                
                
                </button></MenuItem>

            </Menu>
          </SidebarContent>
          <SidebarFooter>
        

            
          </SidebarFooter>
          </ProSidebar> 
      </div>
    </>
  );
};

export default Header;