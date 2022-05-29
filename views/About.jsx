const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class About extends React.Component {
    render() {
        console.log(this.props.art)
        const art = this.props.art
        return (
            <DefaultLayout >
                <br />
                <br />
                <br />
                <div class="containerBox">
                <br />
                <h2>About Us</h2>
                <br />
                <br />
                <br />
                <p>Block Art sources and curates exclusive NFTs from up and coming artists from all over the world. Our collections are deigned to delight your senses. Explore the possibilities!</p>
                <br />
                    
                <button><a href={'/arts'}>View Collection</a></button>
                    
                </div>
            </DefaultLayout> 
        )
    }
}

module.exports = About 