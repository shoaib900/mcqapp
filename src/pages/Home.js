import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1 className='text-center mt-5'>Welcome to Linvex MCQ App</h1>

        <Link to="/mcqapp/quiz1" className='btn btn-primary d-block w-25 mx-auto mt-5 disabled'>Start Quiz</Link>
        <Link to="/mcqapp/quiz2" className='btn btn-success d-block w-25 mx-auto mt-3'>Start Quiz 2</Link>
      
    </div>
  )
}

export default Home
