import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,countWithNum } from './redux/counterSlice';
function Counter() {
    const count=useSelector((store)=>store.counterReducer.counter)
    console.log(count);
    const dispatch=useDispatch()
    const [num,setNum]=useState(0)
    
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                <div className='w-75 border border-2 border-light p-5 border '>
                    <h3 style={{ color: "purple" }} className='text-center '>COUNTER</h3>
                    <h2 className='text-center text-light'>{count}</h2>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-success me-3' onClick={()=>{dispatch(increment())}}>+ Increment</button>
                        <button className='btn btn-danger me-3' onClick={()=>{dispatch(decrement())}}>- Decrement</button>
                        <button className='btn btn-info'onClick={()=>{dispatch(reset())}}>Reset</button>
                    </div>
                    <div className='d-flex my-3  justify-content-around '>
                        <input type="number" onChange={(e)=>{setNum(e.target.value)}} placeholder='enter number'className='form-control' />
                   <button className='btn btn-primary ms-3' onClick={()=>{dispatch(countWithNum(num))}}> Count</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter