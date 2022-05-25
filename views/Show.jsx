const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        console.log(this.props.art)
        const art = this.props.art
        return (
            <DefaultLayout title = 'SHOW'>
                
                   
                    <p>{art.name} is still available. The price is {art.price}.</p>
                    
                    <button><a href={'/arts'}>Back</a></button>
                    <button><a href={`/arts/${art._id}/edit`}>{`Edit ${art.name}`}</a></button>
                    <br />
                    <br />
                    <form action={`/arts/${art._id}?_method=DELETE`}method='POST'>
                                        <input type="submit" value = 'DELETE' />
                    </form>

            </DefaultLayout> 
        )
    }
}

module.exports = Show 