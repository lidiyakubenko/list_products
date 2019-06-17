import React, {Component} from 'react'
import Product from './Product'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            store: []
        }
    }

    componentDidMount() {
             import(/* webpackChunkName: "productsJSON" */ '../../public/products').then(({ default: store }) => {
                this.setState({store: store})
            })
    }

    render() {
        const {store} = this.state
        return (
            <div style={{margin: 'auto', maxWidth: '80%'}}>
                {
                    store.map((product, i) => (<Product key={i} product={product}/>))
                }
            </div>

        )
    }
}

export default App
