import { useState } from "react";
import { useDispatch } from "react-redux"
import { setActiveUser } from "../features/adminSide/users/UsersSlice";
import { useNavigate } from "react-router-dom";
import { PublishButton } from "../styled-componets";

export default function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setActiveUser(user))
    navigate('/home')
  }

  return (
    <div className="login-wrapper">
      <form className="column">
        <label for="userName">Username</label>
        <input id="userName" name="userName" type="text" onChange={(e) => setUser(e.target.value)} />
        <label for="password">Password</label>
        <input id="password" name="password" type="text" onChange={(e) => setPassword(e.target.value)} />
        <PublishButton type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </PublishButton>
      </form>
    </div>
  )
}