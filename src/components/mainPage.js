import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useHistory } from 'react-router-dom';

const MainPage = props => {

    const { store, actions } = useContext(Context);
    const history = useHistory();

    return (
        <div className="container content-wrap">
            <div className="row align-items-center justify-content-center top">
                <div className="col-md-12 justify-content-center">
                    {/* Principal App Title */}
                    <div className="col-md-12 d-flex justify-content-center align-items-center animate__animated animate__bounceIn">
                        <h1 className="text-style">Rokket Tags</h1>
                    </div>
                    {/* App description and how to use */}
                    <div className="row col-md-12 justify-content-center mt-5">
                        <div className="col-md-8 secondary-text text-center">
                            <p>Rokket Tags is very simple to use, just write a tag word in the search bar, and the app will show you all the posts related with the tag you're interested of!</p>
                            <p><b>HAVE FUN!</b></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* App input search bar to let the user search for a Tag */}
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <form className="col-md-8 input-group mb-0" onSubmit={(e) => actions.getPosts(e, store.userInput.toLowerCase(), history)}>
                        <input type="text" name="userInput" className="form-control" required placeholder="Add a tag to search..." onChange={actions.handleChange} />
                        <div className="input-group-append">
                            <button className="btn btn-secondary search" type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 secondary-text d-flex justify-content-center align-items-center mt-4">
                    <span>Example tags:</span>
                </div>
                <br />
                <div className="col-md-12 d-flex justify-content-center align-items-center mt-3">
                    <div className="col-md-8 text-center">
                        {
                            store.tags === null ?
                                <div className="spinner-grow text-success mt-4" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                :
                                store.tags.map(item => <span className="badge badge-pill badge-secondary p-2 m-2 animate__animated animate__bounceIn" onClick={(e) => actions.getPosts(e, item, history)}>{item}</span>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;