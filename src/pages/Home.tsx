import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../app/store"
import { increment } from "../app/features/counterSlice"

const Home = () => {
  const {value} = useSelector( (state:RootState) => state.counter )
  const dispatch = useDispatch()
  return (
    <div>
        <h1 className='mb-12 text-center text-[30px]'>Home Page</h1>
        <p>Counter: {value}</p>
        <button 
          className="bg-black w-[100px] h-[40px] px-[20px] rounded-lg mt-3" 
          onClick={ () => dispatch(increment()) }>
          Click
        </button>
    </div>
  )
}

export default Home