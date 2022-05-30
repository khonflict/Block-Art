const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Checkout extends React.Component {
    render() {
        const arts=this.props.arts
        const Checkout=({})
        return (
            <DefaultLayout>
                {/* <div>
                    <ul>
                        {
                            art.map((art) => {
                            let source=art.image 
                            return (
                                <li>
                                    <p>
                                        {`${art._id}`}
                                    </p>
                                        <img class="img" src={source} alt="" />
                                </li>
                                )    
                            })
                        }
                    </ul>
                </div> */}
            <br />
            <br />
            <br />
            <div class="containerBox">
            <h2>Shopping Cart</h2>
            </div>
            <div>
            <a href={"/arts/cart"}>Checkout</a>
            <button><a href={'/arts'}>Continue Shopping</a></button>
            <br />
            <br />
            </div>
            <
            </DefaultLayout>
        )
    }
}

module.exports = Checkout


