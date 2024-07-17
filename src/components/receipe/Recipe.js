import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Recipe.css';
 
const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
};
 
const RecipeCard = ({ _id, title, description, img }) => (
    <div className="recipe-card">
        <img src={img} alt={title} className="recipe-image" />
        <h3>{title}</h3>
        <p>{truncateDescription(description, 70)}</p>
        <Link className="read-more" to={`/recipe/${_id}`}>Read More</Link>
    </div>
);
 
 
const Recipe = () => {
    const [recipes, setRecipes] = useState([]); // State to store recipes
    const [categoryFilter, setCategoryFilter] = useState(''); // State to store selected category filter
 
    // Function to handle category filtering
    const handleCategoryFilter = (event) => {
        setCategoryFilter(event.target.value); // Update categoryFilter state with selected value
    };
 
    // Fetch recipes from the API
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/recipes/getallrecipes');
                console.log('ho rha h loading')
                setRecipes(response.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
 
        fetchRecipes();
    }, []); // Empty dependency array means this effect runs once when the component mounts
 
    // Apply filter if categoryFilter is set, otherwise show all recipes
    const filteredRecipes = categoryFilter ? recipes.filter(recipe => recipe.category === categoryFilter) : recipes;
 
    return (
        <div>
            <div className="filter-dropdown">
                <label className='labels' htmlFor="category-filter">Filter by Category:</label>
                <select className='dropdown' value={categoryFilter} onChange={handleCategoryFilter}>
                    <option value="">All</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>
            </div>
            <div className="containers">
                {filteredRecipes.map(recipe => (
                    <div className="recipe-container" key={recipe._id}>
                        <RecipeCard {...recipe} />
                    </div>
                ))}
            </div>
        </div>
    );
};
 
export default Recipe;
 
 