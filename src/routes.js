import Home from "./views/Home";
import Login from "./views/Login";
export const routes=[
    {
        path: '/',
        exact:true,
        component:<Home/>,
        auth:true
    },
    {
        path:'/login',
        exact:true,
        component:<Login/>,
        auth:false
    }
]