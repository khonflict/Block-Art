const React = require('react')


class DefaultLayout extends React.Component {
    render(){
        return(
            <html lang='en'>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/CSS/styles.css" />
                </head>

                <nav>
                    {/* Logo not showing up */}
                    {/* <a class="navbar-brand" href="/">
                        <div className="logo-image">
                        <img src="images/BlockArtLogo.png" alt="" />
                        </div>
                    </a>   */}

                    <a href="/arts/">Collection</a>
                    <a href="/arts/new">Create New Listing</a>
                    {/* Add shopping cart/image */}
                </nav>
                <body>
                    <h1>{this.props.title}</h1> 
                    {this.props.children}  
                </body>
        
            </html>
        )
    }
        
}

module.exports = DefaultLayout