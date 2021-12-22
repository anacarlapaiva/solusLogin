import { Route, Routes } from 'react-router-dom';

import Login from "../pages/Login";
import Dashboard from '../pages/Dashboard';
import LoginCreate from '../pages/LoginCreate'
import LoginReset from '../pages/LoginReset'

const Router = () => {
    
    return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/create"element={<LoginCreate />}/>
                <Route path="/reset"element={<LoginReset />}/>
                <Route path="/dashboard"element={<Dashboard />}/>            
            </Routes>
    )
}
export default Router
