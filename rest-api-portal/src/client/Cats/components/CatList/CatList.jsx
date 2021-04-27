import styles from "./CatList.module.css";

const CatList = ({list}) => {
    const listElements = list.map(item => <li key={item.id}>
        <img src={item.url} alt="" className={styles.itemImg} />
    </li>)
    return (<ul className={styles.list}>
        {listElements}
    </ul>)
}

export default CatList;