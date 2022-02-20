import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {myFirestore} from '../../firebase/config';
//style
import "./Recipe.css"

export default function Recipe() {
  const {id} = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    myFirestore.collection("myRecipe").doc(id).get().then((snapshot) => {
      if (snapshot.exists){
        setIsPending(false);
        setRecipe(snapshot.data());
      }else{
        setIsPending(false);
        setError("Sorry, this recipe is not available.")
      }
    })
  },[id])

  return (
    <div className='recipe'>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <div>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(each=> <li key={each}>{each}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
        </div>
      )}
    </div>
  );
}
