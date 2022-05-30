const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component {
    render() { 
        const { arts } = this.props
        return (
            <DefaultLayout>
               
                    
                        <div class="indexBox">
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
                                    <br />
                                    <p id="indexTitle" ><a href={`/arts/${art._id}`}>{art.name}</a></p>
                                    <br />
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