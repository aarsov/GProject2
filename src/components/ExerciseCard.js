// src/components/ExerciseCard.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import axios from '../axiosConfig';
import AuthContext from '../contexts/AuthContext';

const ExerciseCard = ({ exercise }) => {
    const { authToken } = useContext(AuthContext);

    const handleFavorite = async (exerciseId) => {
        try {
            await axios.post(`/api/exercise/${exerciseId}/favorite`, {}, {
                headers: { Authorization: `Bearer ${authToken}` }
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">
                <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                {exercise.name}
            </Typography>
            <Button onClick={() => handleFavorite(exercise.id)}>Add to Favorites</Button>
        </Link>
    );
};

export default ExerciseCard;
