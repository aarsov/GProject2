// src/components/FavoriteExercises.js
import React, { useEffect, useState, useContext } from 'react';
import axios from '../axiosConfig';
import AuthContext from '../contexts/AuthContext';
import ExerciseCard from './ExerciseCard';

const FavoriteExercises = () => {
    const [favorites, setFavorites] = useState([]);
    const { authToken } = useContext(AuthContext);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get('/api/exercise/favorites', {
                    headers: { Authorization: `Bearer ${authToken}` }
                });
                setFavorites(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFavorites();
    }, [authToken]);

    return (
        <div>
            <h2>Your Favorite Exercises</h2>
            <div className="favorites-grid">
                {favorites.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
        </div>
    );
};

export default FavoriteExercises;
