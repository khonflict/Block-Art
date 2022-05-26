const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        console.log(this.props.art)
        const art = this.props.art
        return (
            <DefaultLayout title = 'Detailed Information'>
                   
                    <p>{art.name} is still available for purchase. This one of a kind masterpiece will look great in any room! The price is {art.price}.</p>
                    
                    <button>Purchase Now</button>
                    <br />
                    <br />
                    <button><a href={'/arts'}>Back to Collection</a></button>
                    <br />
                    <button><a href={`/arts/${art._id}/edit`}>{'Edit Listing'}</a></button>
                    <br />

                    <form action={`/arts/${art._id}?_method=DELETE`}method='POST'>
                        <input type="submit" value = 'Delete Listing' />
                    </form>

            </DefaultLayout> 
        )
    }
}

module.exports = Show 