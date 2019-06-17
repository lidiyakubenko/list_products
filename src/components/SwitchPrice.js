import React, {Component} from 'react'

class SwitchPrice extends Component {

    render() {
        const {unitAlt,packIsActive,turnOffPackActive,turnOnPackActive} = this.props
        return (
            <div className="product_units">
                <div className="unit--wrapper">
                    <div className={`unit--select ${packIsActive ? '' : 'unit--active'}`}
                         onClick={turnOffPackActive}>
                        <p className="ng-binding">За {unitAlt}</p>
                    </div>
                    {unitAlt === 'шт.' ? <div/> :
                        <div className={`unit--select ${!packIsActive ? '' : 'unit--active'}`}
                             onClick={turnOnPackActive}>
                            <p className="ng-binding">За упаковку</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default SwitchPrice
