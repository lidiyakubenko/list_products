import React, {Component} from 'react'

class Description extends Component {

    addModificatorToImage() {
        const {image} = this.props
        const arr = image.split('.').reverse()
        const [format, ...rest] = arr
        const url = rest.reverse()
        return `${url.join('.')}_220x220_1.${format}`
    }


    render() {
        const {code, title, assocProducts} = this.props
        const arr = assocProducts.split(`\n`)
        const products = arr.map(str => str.replace(/;/g, ''))

        return (
            <div>
                <span className="product_code">Код: {code}</span>
                <div className="product_status_tooltip_container">
                    <span className="product_status">Наличие</span>
                </div>

                <div className="product_photo">
                    <a href="#" className="url--link product__link">
                        <img src={this.addModificatorToImage()} alt='pic'/>
                    </a>
                </div>

                <div className="product_description">
                    <a href="#" className="product__link">{title}</a>
                </div>

                <div className="product_tags hidden-sm">
                    <p>Могут понадобиться:</p>
                    {products.map((prod, i) =>
                        (<a key={i} href="#" className="url--link"> {prod}{i === products.length - 1 ? '.' : ','}</a>))}
                </div>
            </div>
        )
    }
}


export default Description
