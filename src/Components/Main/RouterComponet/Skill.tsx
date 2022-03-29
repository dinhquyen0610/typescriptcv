import { useEffect,useState}  from 'react'
import callApi from '../../../untils/callApi'
import "./Skill.scss"
interface IState{ 
    id: string,
    name: string,
    value: string
}
function Skill() {
    const[skill,setSkill]= useState<IState[]>([])
    useEffect(()=>{
        async function fetchSkill(){
            try{
              
              const response= await callApi('skill','GET',null)
              const responseData= await response?.data
            //   console.log(responseData)
              setSkill(responseData)
            }
            catch(err){
              console.log(err)
            }
          }
          fetchSkill()
    },[])
    const color= ['#04AA6D','#2196F3','#f44336','#808080','#04AA6D'];
    return (
        <div className="main__wrap">
            <h3 className="main__header">Kỹ năng</h3>

            {skill.map((skillItem,index) => {
                return (
                    <div className="main__content" key={skillItem.id}>
                        <p>{skillItem.name.toUpperCase()}</p>
                        {/* {console.log(skillItem.name)} */}
                        <div className="skill_wrap">
                            <div className={`skill_item`} style={{width: skillItem.value, backgroundColor: color[index] }} >{skillItem.value}</div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
export default Skill;