import { Navigate, Routes, Route } from 'react-router-dom';
import { DcPage } from '../heroes/pages/DcPage';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { LoginPage } from '../auth/pages/LoginPage';
import { Navbar } from '../ui/components/Navbar';

export const AppRouter = () => {
  return (
    <>
       <Navbar/>
       <Routes>
           <Route path="marvel"  element={<MarvelPage/>} />
           <Route path="dc"  element={<DcPage/>}/>
           <Route path="login"  element={<LoginPage/>}/>
            

           <Route path="/" element={<Navigate to="/marvel"/> }/>
       </Routes>
    </>
  )
}
