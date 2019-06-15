import React, {Component} from 'react'
import Template from './Template'

class App extends Component {
    render() {
        return (
            <div>
                <main className="grid container">
                    <div className="sub_category_page">
                        <div className="column_right column_right_products_container">
                            <div className="product__area">

                                <Template/>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        )
    }
}

App.propTypes = {}

export default App
