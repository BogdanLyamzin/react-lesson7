import {Component} from "react";

class ErrorBoundary extends Component {
    state = {hasError: false}

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error){

    }

    render(){
        const {hasError} = this.state;
        const {children} = this.props;
        if(hasError){
            return <h2>Произошла ошибка. </h2>
        }
        return (
            <>{children}</>
        )
    }
}

export default ErrorBoundary;