const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Shopping extends React.Component{
    render() {
        const { arts } = this.props
        return (
            <DefaultLayout title="Shopping Cart">
                <div class="cartContainer">
                    <div class="Header">
                        <h3 class="Heading">Shopping Cart</h3>
                        <h5 class="Action">Remove All</h5>
                    </div>

                    <div>
                       
                    <ul>
                        {
                            arts.map(art => {
                                console.log(art)
                                return (
                                    <li key={art._id}>
                                        <br />
                                        <br />
                                        <br />
                                        <img id="imgIndex" src={`/images/${art.image}`} alt="" />
                                        
                                        <br />
                                        
                                    </li>
                                    )
                                })
                         }
                    </ul>
                    </div>
                    <button><a href={'/arts'}>Continue Shopping</a></button>
                    <button><a href={'/shopping'}>Checkout</a></button>
                </div>
  
       </DefaultLayout>
        )
    }
}
module.exports = Shopping


