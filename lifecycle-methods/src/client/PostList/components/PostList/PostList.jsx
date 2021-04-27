import {Component} from "react";

class PostList extends Component {
    state = {
        posts: [],
        loading: false
    }

    componentDidMount(){
        const productsRequest = fetch("https://jsonplaceholder.typicode.com/posts");
        productsRequest
            .then(response => response.json())
            .then(result => {
                this.setState({
                    posts: result
                })
            })
            .catch(error => console.log(error))
    }

    componentDidUpdate(){
        const {loading} = this.state;
        if(loading){
            const productsRequest = fetch("https://jsonplaceholder.typicode.com/posts");
            productsRequest
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        posts: result,
                        loading: false
                    })
                })
                .catch(error => console.log(error))
        }
    }

    fetchNewPosts = ()=>{
        this.setState({
            loading: true
        })
    }

    render(){
        const {posts, loading} = this.state;
        const {fetchNewPosts} = this;
        const postElements = posts.map(item => (
            <li key={`${item.id}`}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
            </li>
        ));
        return (
            <>
            <h2>Список постов
                <button onClick={fetchNewPosts}>Обновить посты</button>
            </h2>
            {loading && <p>Loading ....</p>}
            <ol>
                {postElements}
            </ol>
            </>
        )
    }
}

export default PostList;