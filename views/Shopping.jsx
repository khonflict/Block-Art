const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Shopping extends React.Component{
    render(){
        console.log(this.props.art)
        const { arts } = this.props
        return(
            <DefaultLayout title="Shopping Cart">
            <div class="containerBox">
                    <ul>
                        {
                            arts.map(art => {
                                console.log(art)
                                let source=art.image 
                                return (
                                    <li> 
                                        <p>{`${art._id}`}</p>
                                        <img class="img"  src = {source}></img>
                                    </li>
                                    )
                                })
                         }</ul>
                  <button><a href={'/arts'}>Continue Shopping</a></button>
                  <button><a href={'/carts'}>Checkout</a></button>
            </div>
       </DefaultLayout>
        )
    }
}
module.exports = Shopping