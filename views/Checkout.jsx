const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Checkout extends React.Component {
    render() {
        const art=this.props.art
        const Checkout=({})
        return (
            <DefaultLayout>
            <br />
            <br />
            <br />
            <div class="containerBox">
            <h2>Shopping Cart</h2>
            </div>
            <div>
            <a href={"/arts/cart"}>Checkout</a>
            <button><a href={'/arts'}>Continue Shopping</a></button>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Checkout


