import { Routes, Route } from 'react-router-dom'
import "./Main.scss"
import AboutMe from './RouterComponet/AboutMe'
import Skill from './RouterComponet/Skill'
import CareerGoals from './RouterComponet/CareerGoals'
import ChangeInfo from './RouterComponet/ChangeInfo'
function Main() {
    return (
        <div className="main">
          
           <Routes>
               <Route path='/' element={<AboutMe/>}/>
               <Route path='/Skill' element={<Skill/>}/>
               <Route path='/CareerGoals' element={<CareerGoals/>} />
               <Route path='/ChangeInfo' element={<ChangeInfo/>} />
           </Routes>
        </div>
        
    )
}
export default Main;