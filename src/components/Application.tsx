import React from 'react';
import viqueenIcon from '../assets/viqueen-icon.png';
import {
    HashRouter,
    Redirect,
    Route,
    Switch,
    useParams
} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Hei</h1>
            <img src={viqueenIcon} style={{ maxWidth: 60 }} />
        </div>
    );
};

const Item = () => {
    const { itemId }: any = useParams();
    return (
        <div>
            <h1>some item : {itemId}</h1>
        </div>
    );
};

export default function Application() {
    return (
        <HashRouter>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/item/:itemId">
                    <Item />
                </Route>
            </Switch>
        </HashRouter>
    );
}
