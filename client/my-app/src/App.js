import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './router/index'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'


function App() {


  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            return (
              <Route key={route.path} path={route.path} element={
                <>
                  {route?.isShowHeader && <HeaderComponent/>}

                  <Page></Page>
                </>
              }></Route>
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App