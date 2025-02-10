import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit} = useForm<FormValues>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = async(data) => {
   try{
  const response = await fetch("http://localhost:8080/api/users/login",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if(!response.ok){
    throw new Error("Failed to login");
  }
  const result = await response.json();
  localStorage.setItem("authtoken",result.token);
  navigate("/main")
  console.log("login success",result)
   }catch(error){
     console.log(error)
   }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="your@email.com"
            />

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>

          <button  type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            Sign In
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? 
          <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</a>
        </div>
      </div>
    </form>
  );
};

export default Login;
