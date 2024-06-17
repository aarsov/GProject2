// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Login from './components/logIn';
import Register from './components/register';
import FavoriteExercises from './components/FavoriteExercises';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/exercise/:id" component={ExerciseDetail} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/favorites" component={FavoriteExercises} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
