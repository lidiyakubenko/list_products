import React, {Component} from 'react'

class PackInfo extends Component {
    render() {
        const {unit,unitAlt,unitRatio,unitRatioAlt} =this.props
        return (
            <div className="list--unit-desc">
                <div className="unit--info">
                    <div className="unit--desc-i"/>
                    <div className="unit--desc-t">
                        <p>
                            <span className="ng-binding">Продается упаковками:</span>
                            <span className="unit--infoInn">{unitRatio} {unit} = {unitRatioAlt} {unitAlt} </span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


export default PackInfo
