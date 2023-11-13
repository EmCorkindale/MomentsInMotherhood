import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Groups } from "../pages/Groups";
import { Milestones } from "../pages/Milestones";
import { PageNotFound } from "../pages/PageNotFound";
import { Recipes } from "../pages/Recipes";



function AppRoutes() {
    return (
        <>
        
     
        <Routes>
            {/* index matches on default/home URL: / */}
            {/* <Route path="/" element={<DrawerAppBar {...props}/>}> */}
            {/* nested routes, matches on /dash/tasks etc */}
            <Route path="Home" element={<Home/>}/>
            <Route path="Groups" element={<Groups />} />
            <Route path="Milestones" element={<Milestones />} />
            <Route path="Recipes" element={<Recipes/>}/>
            {/* </Route> */}
            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        </>
    )
}
export default AppRoutes;