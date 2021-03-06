import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import moment from 'moment';
import { Link } from 'react-router-dom';



const Posts = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

    return (
        <div className="container container-fluid content-wrap">
            {/* Link button to let the user go back to the home screen */}
            <Link to="/" className="btn btn-secondary mt-5 mb-0 search">Go Home</Link>
            <div className="row">
                <div id="posts" className="container cardsGroup">
                    {/* Conditional rendering section, shows the loading spinner while fetching and if there are o are not posts to show to the user */}
                    {
                        store.loading && <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>}
                    {
                        !!store.posts && store.posts.length === 0 &&
                        <div className="d-flex justify-content-center mb-5 align-items-center animate__animated  animate__fadeInUp">
                            <div className="text-center">
                                <h2 className="text-style">There are no posts with #{store.userInput}</h2>
                            </div>
                        </div>}
                    {
                        !!store.posts && store.posts.length > 0 &&
                        <div className="d-flex justify-content-center showing-title align-items-center animate__animated  animate__fadeInUp">
                            <div className="text-center">
                                <h2 className="text-style">Showing tags of #{store.userInput}</h2>
                            </div>
                        </div>
                    }
                    {/* Posts section, showing the posts according to a map() in the respective variable in the store. */}
                    <div className="card-columns">
                        {!!store.posts &&
                            store.posts.map((post, index) => {
                                let seconds = 0;
                                return (
                                    <div className={`card col-lg-12 mb-3 animate__animated animate__fadeInUp`} key={index}>
                                        <div className="container card-body no-gutters d-flex">
                                            <div className="col-md-2 col-2">
                                                <div><img className="card-img-top img-fluid rounded-circle profile-pic" src={post.owner.picture} /></div>
                                            </div>
                                            <div className="col-md-10 col-10 mt-1 info">
                                                <div className="col-md-12">
                                                    <div className=""><b>{post.owner.firstName} {post.owner.lastName}</b></div>
                                                </div>
                                                <div className="col-md-12 email">
                                                    <div className="">{post.owner.email}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="card-img-top img-fluid rounded-0 pics" src={post.image} />
                                        <div className="card-body">
                                            <p className="card-text">{post.text}</p>
                                        </div>
                                        <hr />
                                        <div className="card-body d-flex justify-content-between c-footer">
                                            <span><i className="fas fa-heart"></i> {post.likes}</span> <span className="text-right">{moment(post.publishDate).format('MMMM Do YYYY, H:mm:ss')}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;