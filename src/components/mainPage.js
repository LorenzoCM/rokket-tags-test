import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const MainPage = (props) => {

    const { store, actions } = useContext(Context);


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
                    <div className="col-md-8 input-group mb-0">
                        <input type="text" name="userInput" className="form-control" placeholder="Add a tag to search..." onChange={actions.handleChange} />
                        <div className="input-group-append">
                            <Link to="/posts"><button className="btn btn-secondary" type="submit" onClick={(e) => actions.getPosts(store.userInput.toLowerCase())}>Button</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;