import { useEffect, useReducer } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function RecipeAPI() {
    const [result, dispatch] = useReducer(reducer, {
        loading: true,
        recipe: [], // empty until data is fetched
        error: '' // empty unless there was an error
    })
    

    useEffect(() => {
        axios.get("https://api.edamam.com/api/recipes/v2?type=public&app") // I have removed the key due to this being on a public git hub repository.
            .then(response => {
                // object passed to dispatch holds all data needed for updating state: both type of update and associated data
                dispatch({ type: "FETCH_SUCCESS", payload: response.data }) // dispatch calls reducer function and triggers re-render
            })
            .catch(error => {
                dispatch({ type: "FETCH_ERROR", payload: error.message }) // lets us handle different types of state changes differently
            })
    }, []);

    return (
        <div className="PostList componentBox">
            {result.loading ? <div>Loading...</div> :
                result.recipe.map(recipe => (
                    <div className="recipeBox" key={recipe.recipe.uri}>
                        <h3>Recipes {recipe.recipe.label}</h3>
                        <Link to={recipe.recipe.url}><img src={recipe.recipe.image}></img></Link>
                    </div>
                ))}
            <div className="error">{result.error}</div>
        </div>
    )
}
// reducer function for axios fetch response
// called from dispatch when state is updated, lets us handle different actions
// return object should match same structure as initial state passed to useReducer
function reducer(result, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { loading: false, recipe: action.payload.hits, error: '' }
        case 'FETCH_ERROR':
            return { loading: false, recipe: [], error: action.payload.hits }
        default:
            return { ...result, loading: false }
    }
}