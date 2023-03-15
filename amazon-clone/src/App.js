import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { getAuth , onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

function App() {

  const [{user},dispatch] = useStateValue();

  // const auth = getAuth()

  useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //user is logged in
        dispatch({
          type : "SET_USER",
          user : authUser
        })
      }
      else {
        //user is logged out
        dispatch({
          type : "SET_USER",
          user : null
        })
      }
   });

   return () => {
     //any clean up operations go in here..
     unsubscribe()
   }
  },[])

console.log(user)


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}> </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
