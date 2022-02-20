import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './Searchbar.css'


export default function Searchbar() {
    const [term, setTerm] = useState("")
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search?q=${term}`)
    }
  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search recipes' required onChange={(e) => {setTerm(e.target.value)}}/>
        </form>
    </div>
  )
}
