import React, {useEffect, useState} from "react";
import {myFirestore} from "../../firebase/config";
import RecipeList from "../../components/RecipeList";

//styles
import "./Home.css";

export default function Home() {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        setIsPending(true);
        myFirestore
            .collection("myRecipe")
            .get()
            .then((snapshot) => {
                if (snapshot.empty) {
                    setError("No recipes available!");
                    setIsPending(false);
                } else {
                    let fetchedData = [];
                    snapshot.docs.map((doc) => {
                        fetchedData.push({id: doc.id, ...doc.data()});
                    });
                    setData(fetchedData);
                    setIsPending(false);
                }
            }).catch(err => {
                setError(err.message);
                setIsPending(false);
            });
    }, []);
    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    );
}
