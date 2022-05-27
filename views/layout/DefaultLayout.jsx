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
                    {/* <a class="navbar-brand" href="">
                        <div class="logo-image">
                        <img src="images/BlockArtLogo.png" alt="" />
                        </div>
                    </a>   */}
                    
                    {/* Got image to show but not logo itsels */}
                   {/* <ul class="nav">
                    <li><img src="images/BlockArtLogo.png" id="logo"/> </li>  
                    <li><a href="/arts/">COLLECTION</a></li>
                    <li><a href="/arts/new">CREATE NEW LISTING</a></li>
                    
                    </ul>  */}

                    <a class="navbar-brand" href="#">
                        <img id="logo" src="/images/BlockArtLogo.png"/>
                    </a>
                    <a href="/arts/">COLLECTION</a>
                    <a href="/arts/new">CREATE LISTING</a>
                 
                </nav>
                <body>
                    <div class="Cart-Container"></div>
                    <h1>{this.props.title}</h1> 
                    {this.props.children}  
                </body>
        
            </html>
        )
    }
        
}

module.exports = DefaultLayout