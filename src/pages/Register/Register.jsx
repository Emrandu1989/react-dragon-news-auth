import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
  const {createUser} = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
          console.log(e.currentTarget)
          const form = new FormData(e.currentTarget);
          const name = form.get('name');
          const photoURL = form.get('photoURL');
          const email = form.get('email');
          const password = form.get('password')
          console.log(name, photoURL,email, password,)
          createUser(email,password)
          .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
          })
          .catch(error =>{
            console.log(error)
          })
    }
    return (
        <>
        <NavBar />
          <h2 className="text-3xl">This is Login</h2>   

          <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col">
 <div className="text-center lg:text-left">
   <h1 className="text-5xl font-bold">Register now!</h1>
   
 </div>
 <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
   <form onSubmit={handleRegister} className="card-body">
     <div className="form-control">
       <label className="label">
         <span className="label-text">Name</span>
       </label>
       <input type="text" name="name" placeholder="name" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Photo URl</span>
       </label>
       <input type="text" name="photoURL" placeholder="PhotoURL" className="input input-bordered" required />
     </div>
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
       <button className="btn btn-primary">Register</button>
     </div>
   </form>
   <p className="text-center mt-4">Already have an account <Link className="btn text-blue-700 font-bold btn-link" to='/login'>Login</Link> </p>
 </div>
</div>
</div>
     </>
    );
};

export default Register;