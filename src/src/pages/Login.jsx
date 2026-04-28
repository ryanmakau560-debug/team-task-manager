import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate('/');
  };

  return (
    <div>
      <h1>Login to task manager</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
