import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './router/router';
import { useState } from 'react';
import { MainContext } from './Context/Context';
  const router=createBrowserRouter(ROUTES)

function App() {
  const [basketItems,setBasketItmes]=useState([])
  const datas={
    basketItems,
    setBasketItmes
  }
  return (
    <div className="App">
      <MainContext.Provider value={datas}>
        <RouterProvider router={router}/>
        </MainContext.Provider>
     
    </div>
  );
}

export default App;
