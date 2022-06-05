import { useEffect, useState } from 'react';
import {Switch, Route, useHistory } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { footerLinks } from '../../config/links';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import { mainApi } from '../../utils/MainApi';

const App = () => {
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
    const [isUpdateFail, setIsUpdateFail] = useState(false);
    const [preloaderVisibility, setPreloaderVisibility] = useState('');

    const getToken = () => {
        return localStorage.getItem('token');
    };

    const tokenCheck = () => {
        const token = localStorage.getItem('token');
        if (token) {
            mainApi.getUserData(token)
                .then(res => {
                    if (res) setLoggedIn(true);
                })
                .catch(err => console.log(err));
        }
    };

    // регистрация
    const handleRegister = ({ name, email, password }) => {
        setPreloaderVisibility('preloader_visible');
        return mainApi.register({ name, email, password })
            .then(data => {
                if (data) {
                    handleLogin({ email, password });
                    history.push('/movies');
                }
                window.location.reload();
            })
            .catch(err => console.log(err))
            .finally(() => setPreloaderVisibility(''));
    };

    // авторизация
    const handleLogin = ({ email, password }) => {
        setPreloaderVisibility('preloader_visible');
        mainApi.authorize({ email, password })
            .then(data => {
                localStorage.setItem('token', data.token);
                setLoggedIn(true);
                setCurrentUser(data);
                history.push('/movies');
                window.location.reload();
            })
            .catch(err => console.log(err))
            .finally(() => setPreloaderVisibility(''));
    };

    // выход
    const handleSignOut = () => {
        localStorage.clear();
        setLoggedIn(false);
        setCurrentUser({});
        history.push('/');
    };

    // редактирование профиля
    const handleUpdateUser = ({ name, email }) => {
        setPreloaderVisibility('preloader_visible');
        mainApi.editUserData({ name, email }, getToken())
            .then(res => {
                setCurrentUser(res);
                setIsUpdateFail(false);
                setIsUpdateSuccess(true);
                setTimeout(() => setIsUpdateSuccess(false), 3000);
            })
            .catch(err => {
                setIsUpdateFail(true);
                setTimeout(() => setIsUpdateFail(false), 3000);
                console.log(err)
            })
            .finally(() => setPreloaderVisibility(''));
    };

    useEffect(() => {
        tokenCheck()
    }, []);

    useEffect(() => {
        if (loggedIn) {
            mainApi.getUserData(getToken())
                .then(userData => {
                    setCurrentUser(userData);
                })
                .catch(err => console.log(err));
            // history.push('/movies');
        }
    }, [history, loggedIn]);

    return (<div className="app">
        <CurrentUserContext.Provider value={currentUser}>
            <Switch>
                <Route exact path="/">
                    <Header loggedIn={loggedIn} />
                    <Main />
                    <Footer links={footerLinks} />
                </Route>
                <Route path="/signup">
                    <Register onRegister={handleRegister} />
                </Route>
                <Route path="/signin">
                    <Login onLogin={handleLogin} />
                </Route>

                <ProtectedRoute path="/movies"
                    loggedIn={loggedIn}
                    component={Movies}
                />
                <ProtectedRoute path="/saved-movies"
                    loggedIn={loggedIn}
                    component={Movies}
                />
                <ProtectedRoute path="/profile"
                    loggedIn={loggedIn}
                    component={Profile}
                    onSignOut={handleSignOut}
                    onUpdateUser={handleUpdateUser}
                    isUpdateSuccess={isUpdateSuccess}
                    isUpdateFail={isUpdateFail}
                />
                <Route component={NotFound} path='*' />
            </Switch>
        </CurrentUserContext.Provider>
    </div>);
}

export default App;
