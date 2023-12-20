
import { Route, Routes } from 'react-router-dom';

import { authRoutes, publicRoutes } from './routes/routes';
import NotFound from "../pages/NotFound"


const AppRouter = () => {

  const isAuth = false; // replace with actual auth check

  return (
    <Routes>
      
      {/* Public routes */}
      {publicRoutes.map(({ path, Component }) => (
        <Route 
          key={path}
          path={path} 
          element={<Component />}
        />
      ))}

      {/* Protected routes */}
      {isAuth && 
        authRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component />}  
          />
        ))}

      {/* 404 route */}
      <Route 
        path="*"
        element={NotFound}
      />

    </Routes>
  )

}

export default AppRouter;