import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Currency from './Currency'
import Description from './Description'
import Price from './Price'
import PackInfo from './PackInfo'
import ShopBasket from './ShopBasket'
import SwitchPrice from './SwitchPrice'

class Product extends Component {
    state = {
        packIsActive: false
    }

    turnOnPackActive = e => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({packIsActive: true})
    }

    turnOffPackActive = e => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({packIsActive: false})
    }


    render() {
        const {
            productId, code, title, primaryImageUrl, assocProducts, priceRetail,
            priceRetailAlt, priceGold, priceGoldAlt, bonusAmount,
            unit, unitAlt, unitRatio, unitRatioAlt
        } = this.props.product
        return (
            <div className="product product_horizontal">
                <Description
                    code={code}
                    title={title}
                    assocProducts={assocProducts}
                    image={primaryImageUrl}
                />
                <Price
                    priceRetail={priceRetail}
                    priceRetailAlt={priceRetailAlt}
                    priceGold={priceGold}
                    priceGoldAlt={priceGoldAlt}
                    bonusAmount={bonusAmount}
                    packIsActive={this.state.packIsActive}
                />
                <PackInfo
                    unit={unit}
                    unitAlt={unitAlt}
                    unitRatio={unitRatio}
                    unitRatioAlt={unitRatioAlt}
                />
                <SwitchPrice
                    unitAlt={unitAlt}
                    packIsActive={this.state.packIsActive}
                    turnOffPackActive={this.turnOffPackActive}
                    turnOnPackActive={this.turnOnPackActive}
                />
                <ShopBasket
                    id={productId}
                />
                <Currency/>
            </div>
        )
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product
