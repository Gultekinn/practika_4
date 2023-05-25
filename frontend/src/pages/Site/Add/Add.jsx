import React, { useState } from 'react'
import "../Add/Add.scss"
import {Formik,Form,Field} from "formik"
import axios from "axios"
const Add = () => {
  const [name,setName]=useState('')
  const [price,setPrice]=useState('')
  const items={
    name,
    price
  }
  return (
    <div>
      <div className="forms">
        <div className="form">
      <Formik onSubmit={(e)=>{
axios.post(`http://localhost:7075/`,items).then((res)=>{

})
      }}
       initialValues={{name:"",price:""}}>
        <Form>
          <label id='name' htmlFor="text">Name</label> <br />
          <Field id='name'  onChange={(e)=>{
            setName(e.target.value)
          }} value={name} type="text"/>
          <label id='number' htmlFor="Number">Price</label> <br />
          <Field id='number' onChange={(e)=>{
            setPrice(e.target.value)
          }} value={price} type="Number"/>
<button type='submit'>submit</button>
          
        </Form>
      </Formik>
      </div>
      </div>
    </div>
  )
}

export default Add
