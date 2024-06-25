import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Authentication from "./Components/Authentication/Authentication";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./Store/store";
import { getUserProfile } from "./Store/Auth/Action";
import { useNavigate } from "react-router-dom";

function App() {
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfile(jwt));
      navigate("/")
    }
  }, [auth.jwt]);
  return (
    <div className="">
      <Routes>
        <Route
          path="/*"
          element={auth.user ? <HomePage /> : <Authentication />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
