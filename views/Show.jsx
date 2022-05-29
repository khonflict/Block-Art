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
                    <p>{art.name} is a vibrant piece that will sure to spark conversatons. {art.description} This one of a kind design will look great in any space! The price is {art.price}.</p>
                    <br />
                    <button><a href={'/Shopping'}>Add to Cart</a></button>
                    <br />
                    <br />
                    <button><a href={'/arts'}>Back to Collection</a></button>
                    <br />
                    <button><a href={`/arts/${art._id}/edit`}>{'Edit Listing'}</a></button>
                    <br />
                    <form action={`/arts/${art._id}?_method=DELETE`}method='POST'>
                        <input id ="delete" type="submit" value = 'Delete Listing' />
                    </form>
                </div>
            </DefaultLayout> 
        )
    }
}

module.exports = Show 