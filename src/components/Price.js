import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Price extends Component {

    calculateFraction = x => ((x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0))

    roundNumber = number => this.calculateFraction(number) > 2 ? number.toFixed(2) : number

    regulatePrices = () => {
        const {packIsActive, priceGold, priceRetail, priceGoldAlt, priceRetailAlt} = this.props
        const price = packIsActive ?
            {
                gold: priceGold,
                retail: priceRetail
            } : {
                gold: priceGoldAlt,
                retail: priceRetailAlt
            }
        price.gold = this.roundNumber(price.gold)
        price.retail = this.roundNumber(price.retail)
        return price
    }

    render() {
        const {bonusAmount} = this.props
        const price = this.regulatePrices()
        return (
            <div>
                <p className="product_price_club_card">
                    <span className="product_price_club_card_text">По карте<br/>клуба</span>
                    <span className="goldPrice">{price.gold}</span>
                    <span className="rouble__i black__i">
                                        <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0"
                                             width="30px" height="22px" viewBox="0 0 50 50"
                                             enableBackground="new 0 0 50 50" xmlSpace="preserve">
                                           <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#rouble_black"/>
                                        </svg>
                                     </span>
                </p>

                <p className="product_price_default">
                    <span className="retailPrice">{price.retail}</span>
                    <span className="rouble__i black__i">
                                        <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0"
                                             width="30px" height="22px" viewBox="0 0 50 50"
                                             enableBackground="new 0 0 50 50" xmlSpace="preserve">
                                           <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#rouble_gray"/>
                                        </svg>
                                     </span>
                </p>

                <div className="product_price_points">
                    <p className="ng-binding">Можно купить за {bonusAmount} баллов</p>
                </div>
                <div className="list--unit-padd"/>

            </div>
        )
    }
}

Price.propTypes = {}

export default Price
