import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import delete_icon from '../assets/delete_icon.svg'
import {myFirestore} from '../firebase/config';
//styles
import './RecipeList.css'


export default function RecipeList({recipes}) {
    const history = useHistory();
    const handleDelete = async (id) => {
        await myFirestore.collection("myRecipe").doc(id).delete();
        history.go(0);
    }
    return (
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div key={recipe.id} className='card'>
                    <h3>{recipe.title}</h3>
                    <img src={delete_icon} className='delete' onClick={() => handleDelete(recipe.id)} />
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                </div>
            ))}
        </div>
    );
}
