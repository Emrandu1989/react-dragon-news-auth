import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
  const {login} = useContext(AuthContext);
  const location = useLocation();
  
  console.log('location in the login page',location)
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null)
  const navigate = useNavigate()
    const handleLogin = e =>{
          e.preventDefault();
          console.log(e.currentTarget)
          const form = new FormData(e.currentTarget);
          const email = form.get('email');
          const password = form.get('password')
          console.log(email,password)
        
          setError('')
          setSuccess('')

          login(email,password)
          .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
         
            
            setSuccess('User login successfully')

            // navigate after login
            navigate(location?.state ? location.state : '/')
          })
          .catch(error =>{
            console.log(error)
            setError(error.message)
          })

         
    }
    return (
        <>
           <NavBar />
             <h2 className="text-3xl">This is Login</h2>   

             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
         
      </form>
        {
          success && <><p>{success}</p></>
        }
        {
          error && <><p>{error}</p></>
        }
      <p className="text-center mt-4">Don't have an account <Link className="btn text-blue-700 font-bold btn-link" to='/register'>Register</Link> </p>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;