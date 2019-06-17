import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ShopBasket extends Component {
    state = {
        count: 1
    }
    changeProductCount = (e, value) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({count:value <=1 ? 1 : value})
    }

    render() {
        const {count} = this.state
        const {id} = this.props
        return (
            <div className="product__wrapper">

                <div className="product_count_wrapper">
                    <div className="stepper">
                        <input className="product__count stepper-input" type="text" value={count}
                        onChange={()=>{}}/>
                        <span className="stepper-arrow up" onClick={e => this.changeProductCount(e, count + 1)}/>
                        <span className="stepper-arrow down" onClick={e => this.changeProductCount(e, count - 1)}/>
                    </div>
                </div>

                <span className="btn btn_cart" data-url="/cart/"
                      data-product-id="9bf0afd7-5190-11e5-b9a9-00259036a192">
                                        <svg className="ic ic_cart">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart"/>
                                        </svg>
                                        <span data-product-id={id} className="ng-binding">В корзину</span>
                                    </span>
            </div>
        )
    }
}

ShopBasket.propTypes = {}

export default ShopBasket
