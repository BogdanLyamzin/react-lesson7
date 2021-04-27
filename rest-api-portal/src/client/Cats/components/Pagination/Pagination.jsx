import styles from "./Pagination.module.css";

const Pagination = ({currentPage, showPage, showNextPage, totalPage = 10})=>{
    const pageElements = new Array(totalPage).fill("").map((_, idx) => 
    <li className={(currentPage === idx + 1) ? styles.itemActive : styles.item} onClick={(e) => showPage(e, idx + 1)}>{idx + 1}</li>);

    return (
        <ul className={styles.list}>
            {currentPage !== 1 && <li onClick={(e)=> showNextPage(e, -1)} className={styles.item}> &lt; </li>}
            {pageElements}
            {currentPage !== totalPage && <li onClick={(e)=> showNextPage(e, 1)} className={styles.item}> &gt; </li>}
        </ul>
    )
}

export default Pagination;