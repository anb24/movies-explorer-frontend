import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import {footerLinks} from '../../config/links';

const App = () => {

    return (<div className="app">
        <Switch>
            <Route exact path="/">
                <Header/>
                <Main/>
                <Footer links={footerLinks}/>
            </Route>
            <Route path="/movies">
                <Header/>
                <Movies/>
                <Footer links={footerLinks}/>
            </Route>
            <Route path="/saved-movies">
                <Header/>
                <SavedMovies/>
                <Footer links={footerLinks}/>
            </Route>
            <Route path="/signup">
                <Register/>
            </Route>
            <Route path="/signin">
                <Login/>
            </Route>
            <Route path="/profile">
                <Header/>
                <Profile/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    </div>);
}

export default App;
