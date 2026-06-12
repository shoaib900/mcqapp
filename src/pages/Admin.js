import React from 'react'
import { db } from '../auth/fbconfig'
import { collection, getDocs, setDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'



const Admin = () => {


  return (
    <div>
        <h1>Admin Panel</h1>

        <label htmlFor="question">
            Question: <input type="text" id="question" />
        </label>


      
    </div>
  )
}

export default Admin
