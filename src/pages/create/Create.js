//styles
import {useEffect, useRef, useState} from 'react'
import {useHistory} from 'react-router-dom';
import {myFirestore} from '../../firebase/config';
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [method, setMethod] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);
  const inputRef = useRef('');
  const initialRef = useRef(null);
  const history = useHistory();

  const handleSubmit = async e =>{
    e.preventDefault();
    const doc = {title, cookingTime: `${cookingTime} minutes`, method, ingredients}
    try{
      await myFirestore.collection("myRecipe").get().then((snapshot) => {
        let fetchedData = [];
        snapshot.docs.map((doc) => fetchedData.push(doc.data().title));
        if (!fetchedData.includes(title)){
          myFirestore.collection("myRecipe").add(doc);
          // setError(null);
          console.log("reached if")
        }else {
          console.log("reached else")
          setError("Sorry, that title already exixts. Please try again with a different one.")
          console.log(error)
        }
      })
      console.log("exit await")
      console.log(error)
      if (error == null) history.push("/");
    }catch(err){
      console.log("Post error!")
    }
  }
  console.log("exit all")

  const handleAdd = e =>{
    e.preventDefault();
    const ing = toTitleCase(newIngredient.trim());
    if (ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    inputRef.current.focus();
  }

  useEffect(() => {
    initialRef.current.focus();
  },[])

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
  
  return (
      <div className='create'>
        {error && <p className='error'>{error}</p>}
          <h2 className='page-title'>Add a new Recipe</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Recipe title</span>
              <input type='text' value={title} ref={initialRef} required onChange={e=>setTitle(e.target.value)}/>
            </label>

            <label>
              <span>Ingredients</span>
              <div className='ingredients'>
                <input type='text' value={newIngredient} ref={inputRef} onChange={e=> setNewIngredient(e.target.value)}/>
                <button className='btn' onClick={handleAdd}>Add</button>
              </div>
            </label>

            <p>Ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

            <label>
              <span>Recipe method</span>
              <textarea value={method} required onChange={e=>setMethod(e.target.value)}/>
            </label>

            <label>
              <span>Cooking time (mins)</span>
              <input type='number' value={cookingTime} required onChange={e=>setCookingTime(e.target.value)}/>
            </label>

            <button className='btn'>Submit</button>
          </form>
      </div>
  )
}
