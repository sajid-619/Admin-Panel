import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewPartner from "./pages/newPartner/NewPartner";
import NewUser from "./pages/newUser/NewUser";
import Partner from "./pages/partner/Partner";
import PartnerList from "./pages/partnerList/PartnerList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";
import { selectUserState } from "./store/userSlice";

function App() {
  const { userInfo } = useSelector(selectUserState);

  return (
    <Router>
      <>
        <Topbar />
        <div className="container">
          {userInfo && <Sidebar />}
          <Routes>
            <Route path="/" element={<Home />} />
            {!userInfo ? (
              <Route path="/login" element={<Login />} />
            ) : (
              <Route path="/login" element={<Navigate replace to="/" />} />
            )}
            <Route path="/users" element={<Home />} />
            <Route path="/users/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser/>} />
            <Route path="/userList" element={<UserList/>} />
            <Route path="/partnerList" element={<PartnerList/>} />
            <Route path="/newPartner" element={<NewPartner/>} />
            <Route path="/partners/:partnerId" element={<Partner />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;