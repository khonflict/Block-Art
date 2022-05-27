const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component {
    render() { 
        const { arts } = this.props
        return (
            <DefaultLayout title="Collection">
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
                                    <p><a href={`/arts/${art._id}`}>{art.name}</a> is a one of a kind piece available for purchase. Clink below to learn more!</p>
        
                                    <button><a href={`/arts/${art._id}`}>{`About ${art.name}`}</a></button>

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



