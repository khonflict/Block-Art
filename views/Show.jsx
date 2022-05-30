const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        console.log(this.props.art)
        const art = this.props.art
        return (
            <DefaultLayout >
                <div class="showBox">
                <img id="imgShow" src={`/images/${art.image}`} alt="" />
                    <br />
                    <br />
                    <br />
                    <p id="textShow">{art.name} is a vibrant NFT that will sure to spark conversatons. {art.description} This one of a kind design will look great in any space! The price is {art.price}.</p>
                    <br />

                    {/* <form action ='/arts/:id/cart?_method=PUT'  method="POST" >
                    <button>Purchase Now</button>
                    </form> */}
                    
                    <button><a href={`/arts/${art._id}/Checkout`}>Purchase Now</a></button>
                    <br />
                    
                    <button><a href={'/arts'}>Back to Collection</a></button>  
                    <br />        
                    <button><a href={`/arts/${art._id}/edit`}>{'Edit Listing'}</a></button>
                   
                    <form action={`/arts/${art._id}?_method=DELETE`}method='POST'>
                        <input id="delete" type="submit" value = 'Delete Listing' />
                    </form>
                </div>
            </DefaultLayout> 
        )
    }
}

module.exports = Show 