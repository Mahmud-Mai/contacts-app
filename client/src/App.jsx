import AllContactsList from './components/AllContactsList'
import NewContactform from './components/NewContactform'
import './App.css'
import { useState } from 'react'


const App = () => {

const [contactsList, setContactsList] = useState([
    
    {
      name : 'Sani Nabil',
      number : '07012124545' , 
      id: '1',
    }

])
const [ newName, setNewName ] = useState('')
const [ newNumber, setNewNumber ] = useState(0)

const newNameHandler = (e) => {
  setNewName(e.target.value)
} 

const newNumberHandler = (e) => {
  setNewNumber(e.target.value)
}


const SaveContact = (e) => {
  e.preventDefault()

  if(!newName) {
    alert("Name field is empty!!");
  } 
  
  const id = Math.ceil(Math.random() * 100)
  const contactObj = {
    name : newName,
    number : newNumber , 
    id: id,
  }
  setContactsList([...contactsList, contactObj])
  console.log(contactObj)

  setNewName('')
  setNewNumber('')
}


  return (
    <div className="container text-center py-5">
      <div className="row card justify-content-center" >
        <div className="col align-self-center">
        
          <NewContactform onAdd={ SaveContact } newNameHandler={ newNameHandler } newNumberHandler={ newNumberHandler } newName={newName} newNumber={newNumber}/>
          <AllContactsList contactsList={contactsList}/>
       
        </div>
      </div>
    </div>
  )
}

export default App
