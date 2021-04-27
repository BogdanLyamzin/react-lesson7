import {Component} from "react";

import {getAllPosts} from "../../../../services/posts";
class PostList extends Component {
    state = {
        posts: [],
        loading: false,
        error: null
    }

    componentDidMount(){
        this.fetchPosts();
    }

    componentDidUpdate(prevProps, prevState, spanshot){
        if(this.state.loading !== prevState.loading) {
            const {loading} = this.state;
            if(loading){
                this.fetchPosts();
            }
        }
    }

    fetchPosts(){
        // const productsRequest = fetch("https://jsonplaceholder.typicode.com/posts");
        const productsRequest = getAllPosts();
        
        productsRequest
            .then(({data}) => {
                this.setState({
                    posts: data
                })
            })
            .catch(error => this.setState({
                error
            }))
            .finally(data => this.setState({
                loading: false
            }))
    }

    getNewPosts = ()=>{
        this.setState({
            loading: true
        })
    }

    render(){
        const {posts, loading, error} = this.state;
        const {getNewPosts} = this;
        const postElements = posts.map(item => (
            <li key={`${item.id}`}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
            </li>
        ));
        return (
            <>
            <h2>Список постов
                <button onClick={getNewPosts}>Обновить посты</button>
            </h2>
            {loading && !error && <p>Loading ....</p>}
            {error && <p>{error.message}.</p>}
            <ol>
                {postElements}
            </ol>
            </>
        )
    }
}

export default PostList;