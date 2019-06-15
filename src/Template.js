import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Template extends Component {
    render() {
        return (
            <div id="products_section">
                <div className="products_page pg_0">
                    <div className="product product_horizontal">

                        <span className="product_code">Код: 147268</span>
                        <div className="product_status_tooltip_container">
                            <span className="product_status">Наличие</span>
                        </div>

                        <div className="product_photo">
                            <a href="#" className="url--link product__link">
                                <img src="./misc/df126-52f2-11e5-b9a9-00259036a192_220x220_1.jpg" alt='pic'/>
                            </a>
                        </div>

                        <div className="product_description">
                            <a href="#" className="product__link">Ламинат 31 кл Kronospan Kronofix Афцелия Малайская
                                2,47 м.кв. 7 мм</a>
                        </div>

                        <div className="product_tags hidden-sm">
                            <p>Могут понадобиться:</p>
                            <a href="#" className="url--link">подложка,</a>
                            <a href="#" className="url--link">плинтус натуральный,</a>
                            <a href="#" className="url--link">рулетка,</a>
                            <a href="#" className="url--link">набор для укладки ламината,</a>
                            <a href="#" className="url--link">ножовка по ламинату,</a>
                            <a href="#" className="url--link">гель для стыков ламината Clic Protect.</a>
                        </div>

                        <div className="product_units">
                            <div className="unit--wrapper">
                                <div className="unit--select unit--active">
                                    <p className="ng-binding">За м. кв.</p>
                                </div>
                                <div className="unit--select">
                                    <p className="ng-binding">За упаковку</p>
                                </div>
                            </div>
                        </div>

                        <p className="product_price_club_card">
                            <span className="product_price_club_card_text">По карте<br/>клуба</span>
                            <span className="goldPrice">375,71</span>
                            <span className="rouble__i black__i">
                                        <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
                                           <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#rouble_black"/>
                                        </svg>
                                     </span>
                        </p>

                        <p className="product_price_default">
                            <span className="retailPrice">391,09</span>
                            <span className="rouble__i black__i">
                                        <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve">
                                           <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#rouble_gray"/>
                                        </svg>
                                     </span>
                        </p>

                        <div className="product_price_points">
                            <p className="ng-binding">Можно купить за 231,75 балла</p>
                        </div>
                        <div className="list--unit-padd"/>

                        <div className="list--unit-desc">
                            <div className="unit--info">
                                <div className="unit--desc-i"/>
                                <div className="unit--desc-t">
                                    <p>
                                        <span className="ng-binding">Продается упаковками:</span>
                                        <span className="unit--infoInn">1 упак. = 2.47 м. кв. </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="product__wrapper">

                            <div className="product_count_wrapper">
                                <div className="stepper">
                                    <input className="product__count stepper-input" type="text" defaultValue='1'
                                           onChange={value=>console.log(value)}/>
                                    <span className="stepper-arrow up"/>
                                    <span className="stepper-arrow down"/>
                                </div>
                            </div>

                            <span className="btn btn_cart" data-url="/cart/"
                                  data-product-id="9bf0afd7-5190-11e5-b9a9-00259036a192">
                                        <svg className="ic ic_cart">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart"/>
                                        </svg>
                                        <span className="ng-binding">В корзину</span>
                                    </span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

Template.propTypes = {}

export default Template
