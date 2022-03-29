import {useState,useEffect} from 'react'
import callApi from '../../../untils/callApi'
function CareerGoals() {
    interface IState{
        content?: string
    }
    const[careerGoals,setCareerGoals]= useState<IState>({})
    useEffect(()=>{
        async function fetchCareerGoals(){
            try{
              
              const response= await callApi('careerGoals','GET',null)
              const responseData= await response?.data
            //   console.log(responseData)
              setCareerGoals(responseData[0])
            }
            catch(err){
              console.log(err)
            }
          }
          fetchCareerGoals()
    },[])
    return (
        <div className="main__wrap">
            <h3 className="main__header">Mục tiêu nghề nghiệp</h3>
            <div className="main__content">
                <p>{careerGoals.content}</p>
            </div>

        </div>
    )
}
export default CareerGoals;