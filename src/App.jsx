import React, { useContext } from 'react'
import { MyContext } from './components/CompContext'

const App = () => {
  let [name, setName, data] = useContext(MyContext)

  console.log(data.users)

  return (
    <div className="Cards">
      {data.users?.map((elem, idx) => {
        return (
          <div className="Card" key={idx}>
            <img src={elem.image} alt="Not found" />
            <h1>{elem.firstName}</h1>
            <h3>Age : {elem.age}</h3>
            <h3>Gender : {elem.gender}</h3>
            <h2>Department : {elem.company.department}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default App