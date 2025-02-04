// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Signin from './component/Signin';
import Notfound from './component/Notfound';
import Main from './Main';
import Main2 from './Main2';
import Main3 from './Main3';
import Signup from './component/Signup';
import Forgot from './component/Forgot';
import PrivateRoute from './PrivateRoute';
import { auth } from './config/firebase';
import Profile from './Profile';
import Logo from './component/logo';
import Contact from './Contact';
function App() {

  return (
          <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route path="/main" element={<PrivateRoute component={Main} />} />
        <Route path="/main2"  element={<PrivateRoute component={Main2} />}/>
        <Route path="/main3" element={<PrivateRoute component={Main3} />} />
        <Route path="profile"  element={<PrivateRoute component={Profile} />} />
         <Route path="*" element={<Notfound />} />
      </Routes>
  );
}
export default App;