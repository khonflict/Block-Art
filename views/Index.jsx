const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component {
    render() { 
        const { arts } = this.props
        return (
            <DefaultLayout title="INDEX">
            <div>
                <nav>
                    <a href="/arts/new">Create New Listing</a>
                </nav>
               
                <ul>
                    {
                        arts.map(art => {
                            console.log(art)
                            return (
                                <li key={art._id}>
                                    <p><a href={`/arts/${art._id}`}>{art.name}</a> is available for purchase. The price is {art.price}.</p>
        
                                    <form action={`/arts/${art._id}?_method=DELETE`}method='POST'>
                                        <input type="submit" value = 'DELETE' />
                                    </form>
                                    <button><a href={`/arts/${art._id}/edit`}>{`Edit ${art.name}`}</a></button>

                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </DefaultLayout>
            
        )
    }
}

module.exports = Index



