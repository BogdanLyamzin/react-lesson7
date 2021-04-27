import {Component} from "react";

import styles from "./FormAddProduct.module.css";

import {initialState} from "./initialState";

class FormAddProduct extends Component {

    state = {...initialState}

    handleChange = ({target})=>{
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit(this.state);
        this.setState(initialState)
    }

    render(){
        const {name, price} = this.state;
        const {handleChange, handleSubmit} = this;

        return(
            <form  onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Название</label>
                    <input onChange={handleChange} value={name} name="name" type="text" placeholder="Введите название" />
                </div>
                <div className={styles.formGroup}>
                    <label>Цена</label>
                    <input onChange={handleChange} value={price} name="price" type="text" placeholder="Введите цену" />
                </div>
                <button type="submit">Добавить товар</button>
            </form>
        )
    }
}

export default FormAddProduct;