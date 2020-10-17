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
            getPosts: async (tag) => {      //Function to get the posts acording to the tag submitted by the user.
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
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            }
        }        
    }
}


export default getState;


