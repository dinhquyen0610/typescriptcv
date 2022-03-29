import {useEffect,useState} from 'react'

import axios from 'axios';
import CakeIcon from '@mui/icons-material/Cake'
import WorkIcon from '@mui/icons-material/Work'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import callApi from '../../untils/callApi'
import {useDispatch,useSelector} from 'react-redux'
import {importInfo} from '../../redux/action'
import "./Sidebar.scss"
function Sidebar(){
    interface MyInfo{
        name?: string,
        image?: string,
        date?: string,
        job?: string,
        email?: string,
        phone?: string

    }
    // const [info,setInfo]= useState<MyInfo>({});
    const dispatch= useDispatch();
    const info: MyInfo= useSelector((state)=>state)
    console.log(info)
    useEffect(()=>{
        async function fetchSidebar(){
            try{
              
              const response= await callApi('infor','GET',null)
              const responseData= await response?.data
            //   console.log(responseData)
              dispatch(importInfo(responseData[0]))
            //   setInfo(responseData[0])
            }
            catch(err){
              console.log(err)
            }
          }
          fetchSidebar()
    },[])
    return(
        <div className="sidebar">
              
                <h3 className="sidebar__header">{info.name}</h3>
                <img className="sidebar_img" src={info.image}/>
                <div className="sidebar__information">
                    <div className="sidebar__information-item">
                        <CakeIcon/>
                        <span>Birthday: {info.date}</span>
                    </div>
                    <div className="sidebar__information-item">
                        <WorkIcon/>
                        <span>Job: {info.job}</span>
                    </div>
                    <div className="sidebar__information-item">
                        <EmailIcon/>
                        <span>{info.email}</span>
                    </div>
                    <div className="sidebar__information-item">
                        <LocalPhoneIcon/>
                        <span>Phone: {info.phone}</span>
                    </div>
                </div>
            </div>
    )
}
export default Sidebar;
