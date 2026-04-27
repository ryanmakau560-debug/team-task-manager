import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice"; // Ensure path is correct

function AuthForm() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { email: "test@gmail.com" }; // Fake user for demo
    dispatch(login(user));
  };

  return (
    <div className="flex flex-col items-center p-8 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>
      <input 
        type="email" 
        placeholder="Email" 
        className="mb-2 p-2 border rounded w-64"
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="mb-4 p-2 border rounded w-64"
      />
      <button 
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  );
}

export default AuthForm;