import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { login, logout, selectUSer } from './features/UserSlice';
import { auth } from './firebase';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';


function App() {
  const user = useSelector(selectUSer);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    })
    return unsubscribe;
  }, [dispatch])
  
  //Nuevo en version actual de react-router-dom -> Routes x Switch y Route se escribe diferente
  return (
    <div className={classes.root}>
      <Router>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/' element={<Home/>}/>
            </Routes>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111",
  },
}));

export default App;
