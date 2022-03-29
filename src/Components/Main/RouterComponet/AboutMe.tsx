import {useState,useEffect} from 'react'
import callApi from '../../../untils/callApi'
function AboutMe() {
    interface IState{
        content?: string
    }
    const[aboutMe,setAboutMe]= useState<IState>({})
    useEffect(()=>{
        async function fetchAboutMe(){
            try{
              
              const response= await callApi('aboutMe','GET',null)
              const responseData= await response?.data
            //   console.log(responseData)
              setAboutMe(responseData[0])
            }
            catch(err){
              console.log(err)
            }
          }
          fetchAboutMe()
    },[])
    return (
        <div className="main__wrap">
            <h3 className="main__header">Tóm tắt bản thân</h3>
            <div className="main__content">
                <p>{aboutMe.content}</p>
            </div>

        </div>
    )
}
export default AboutMe;