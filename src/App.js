import Login from "./Components/Login";
import {createBrowserRouter , createRoutesFromElements, Route, RouterProvider, Routes} from 'react-router-dom'
import SignUp from "./Components/SignUp";
import Homepage from "./Components/Homepage";
import { departments } from "./Components/Department";
import { subjects } from "./Components/Subject";
import { videos } from "./Components/Lecture";
import DepartmentList from "./Components/DepartmentList";
import SubjectList from "./Components/SubjectList";
import LectureList from "./Components/LectureList";
const route = createBrowserRouter
(
  createRoutesFromElements(
    <Route>
    <Route path = "/" element = {<Login/>}></Route>
    <Route path = "/Homepage" element = {<Homepage/>}></Route>
    <Route path = "/Departments" element ={<DepartmentList departments={departments}/>}></Route>
    <Route path = "/Subject" element = {<SubjectList subjects={subjects}/>}></Route>
    <Route path = "/Lecture" element = {<LectureList videos={videos}/>}></Route>
    </Route>
    
  )
)
 const App = () => {
  return <>

<RouterProvider router={route}/>
</>
}

export default App;