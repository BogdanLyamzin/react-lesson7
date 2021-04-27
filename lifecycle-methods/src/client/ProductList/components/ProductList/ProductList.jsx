import {Component} from "react";

import FormAddProduct from "../FormAddProduct";
import ProductsTable from "../ProductsTable";

import styles from "./ProductList.module.css";

class ProductList extends Component {
    state = {
        products: []
    }

    componentDidMount(){
        const productList = JSON.parse(localStorage.getItem("products"));
        this.setState({
            products: productList || []
        })
    }

    componentDidUpdate(){
        const {products} = this.state;
        const productList = JSON.stringify(products);
        localStorage.setItem("products", productList);
    }

    addProduct = (product)=>{
        this.setState(prevState => {
            const {products} = prevState;
            const newProducts = [...products];
            newProducts.push(product);

            return {
                products: newProducts
            }
        });
    }

    deleteProduct = (idx)=> {
        this.setState(prevState => {
            const {products} = prevState;
            const newProducts = [...products];
            newProducts.splice(idx, 1);

            return {
                products: newProducts
            }
        })
    }

    render(){
        const {products} = this.state;
        const {addProduct, deleteProduct} = this;

        return (
            <div className={styles.productList}>
                <div className={styles.productListRow}>
                    <FormAddProduct onSubmit={addProduct} />
                </div>
                <div className={styles.productListRow}>
                    <ProductsTable list={products} onDelete={deleteProduct} />
                </div>
            </div>
        )
    }
}

export default ProductList;