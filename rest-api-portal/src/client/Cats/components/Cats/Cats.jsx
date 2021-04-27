import {Component, createRef} from "react";

import CatList from "../CatList";
import Pagination from "../Pagination";

import {getOnePage} from "../../../../shared/services/cats";

class Cats extends Component {
    state = {
        cats: [],
        page: 1,
        limit: 10,
        isLoading: false,
        error: null,
        more: false,
        totalPage: 1
    }

    listRef = createRef()

    componentDidMount(){
        this.fetchCats();
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return this.listRef.current.scrollTop
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        const {isLoading} = this.state;
        if(isLoading){
            this.fetchCats();
            window.scrollTo({
                top: this.listRef.current.clientHeight + snapshot,
                behavior: "smooth"
            });
        }
    }

    fetchCats() {
        const {limit, page, more} = this.state;
        const catsRequest = getOnePage(limit, page);

        catsRequest
        .then(({data}) => this.setState(({cats}) => {
            const newCats = more ? [...cats, ...data] : data

            return {
                cats: newCats,
                isLoading: false
            }
        }))
        .catch(error => this.setState({
            error,
            isLoading: false
        }))        
    }

    loadMore = (e) => {
        e.preventDefault();
        this.setState(({page}) => {
            return {
                isLoading: true,
                page: page + 1,
                more: true
            }
        })
    }

    loadNewPage = (e, idx)=> {
        e.preventDefault();
        this.setState({
            isLoading: true,
            page: idx,
            more: false
        })
    }

    loadNextPage = (e, value) =>{
        e.preventDefault()
        this.setState(({page}) => {
            return {
                page: page + value,
                isLoading: true
            }
        })
    }

    render(){
        const {cats, isLoading, error, page} = this.state;
        const {loadMore, loadNewPage, loadNextPage, listRef} = this;

        return (<>
        <div ref={listRef}>
        <CatList list={cats} />
        </div>
        
        {error && <p>Something was wrong ...</p>}
        {isLoading && !error && <p>Loading ...</p>}
        <button onClick={loadMore} >Load More</button>
        <Pagination currentPage={page} showPage={loadNewPage} showNextPage={loadNextPage} />
        </>)
    }
}

export default Cats;