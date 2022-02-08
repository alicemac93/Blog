import { useState } from "react";
import { useDispatch } from "react-redux"
import { setActiveUser } from "../features/adminSide/users/UsersSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setActiveUser(user))
    navigate('/home')
  }

  return (
    <form>
      <label>
        <p>Username</p>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <div>
        <button type="submit" onClick={(e) => handleLogin(e)}>Submit</button>
      </div>
    </form>
  )
}