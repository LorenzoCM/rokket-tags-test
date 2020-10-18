import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link, useHistory } from 'react-router-dom';

const MainPage = props => {

    const { store, actions } = useContext(Context);
    const history = useHistory();



    return (
        <div className="container content-wrap">
            <div className="row align-items-center justify-content-center top">
                <div className="col-md-12 justify-content-center">
                    <div className="col-md-12 d-flex justify-content-center align-items-center animate__animated animate__bounceIn">
                        <h1 className="text-style">Rokket Tags</h1>
                    </div>
                    <div className="row col-md-12 justify-content-center mt-5">
                        <div className="col-md-8 secondary-text text-center">
                            <p>Rokket Tags is very simple to use, just write a tag word in the search bar, and the app will show you all the posts related with the tag you're interested of!</p>
                            <p>HAVE FUN!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 backGround d-flex justify-content-center align-items-center mb-0 mt-1">
                    <form className="col-md-8 input-group mb-0" onSubmit={(e) => actions.getPosts(e, store.userInput.toLowerCase(), history)}>
                        <input type="text" name="userInput" className="form-control" required placeholder="Add a tag to search..." onChange={actions.handleChange} />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="submit">Button</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MainPage;