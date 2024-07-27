import { useDispatch, useSelector } from "react-redux";
import { toggleIsLogged } from "../../app/features/authSlice";
import { RootState } from "../../app/store";

const Login = () => {
  const {isLogged} = useSelector( (state:RootState) => state.auth )
  const dispatch = useDispatch()
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        dispatch( toggleIsLogged() )
    }
    console.log(isLogged)
  return (
    <div>
        <h2 className="text-[20px] text-center mb-12">Login</h2>
        <form action="" onSubmit={handleSubmit}>
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="example@email.com"
            className="block mb-[15px] w-[500px] mx-auto bg-gray-800 rounded-md"
            />
            <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Please write your password" 
            className="block mb-[15px] w-[500px] mx-auto bg-gray-800 rounded-md"
            />
            <button className="block bg-gray-800 w-[500px] mx-auto h-[40px] rounded-md">Login</button>
        </form>
    </div>
  )
}

export default Login