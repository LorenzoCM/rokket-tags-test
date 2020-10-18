const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiURL: "https://dummyapi.io/data/api",
            posts: null,
            tags: null,
            userInput: "",
            loading: true            
        },
        actions: {
            getPosts: async (e, tag, history) => {      //Function to get the posts acording to the tag submitted by the user.
                e.preventDefault();
                setStore({
                    loading: true,
                    posts: null,
                    userInput:tag                    
                }) 
                history.push('/posts');                
                const store = getStore();
                const resp = await fetch(`${store.apiURL}/tag/${tag}/post`, {
                    method: 'GET',
                    headers: {
                        "app-id": "5f89bf78b0baa448f47363a6"
                    }
                })
                const datos = await resp.json();
                let { data } = datos
                console.log(data);                
                setStore({
                    posts: data,
                    loading: false
                })                
            },
            getTags: async () => {      //Function to get the first tags and give the user a sample of what to search for.
                const store = getStore();
                const resp = await fetch(`${store.apiURL}/tag`, {
                    method: 'GET',
                    headers: {
                        "app-id": "5f89bf78b0baa448f47363a6"
                    }
                })
                const datos = await resp.json();                
                let { data } = datos;
                setStore({
                    tags: data
                })
            },            
            handleChange: e => {   //Function to catch the user's input tag and store it in a variable in the store.
                setStore({
                    [e.target.name]: e.target.value
                })
            }            
        }        
    }
}


export default getState;


