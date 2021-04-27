import styles from "./ProductsTable.module.css";
import {v4} from "uuid";

const ProductsTable = ({list, onDelete})=>{

    const productElements = list.map(({name, price}, index) => (
        <tr key={v4()}>
            <td className={styles.ceil}>{index + 1}</td>
            <td className={styles.ceil}>{name}</td>
            <td className={styles.ceil}>{price}</td>
            <td className={styles.ceil}>
                <button className={styles.btn}>Edit</button>
            </td>
            <td className={styles.ceil}>
                <button onClick={()=>onDelete(index)} className={styles.btn}>Delete</button>
            </td>
        </tr>
    ));

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.ceil}>№</th>
                    <th className={styles.ceil}>Название</th>
                    <th className={styles.ceil}>Цена</th>
                    <th className={styles.ceil}>Удалить</th>
                    <th className={styles.ceil}>Редактировать</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
            <tbody>
                {productElements}
            </tbody>
        </table>
    )
}

export default ProductsTable;