import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeInfo.css';

const RecipeInfo = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/recipes/getrecipebyid/${id}`);
                const data = await response.json();
                console.log(data);
                setRecipe(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!recipe) {
        return <div>No recipe found.</div>;
    }

    const { img, title, description } = recipe;

    return (
        <div className='recipe-cont'>
            <img className="recipes-image" src={img} alt={title} />
            <h2>{title}</h2>
            <div className='desc'>
                {description}
            </div>
        </div>
    );
};

export default RecipeInfo;
