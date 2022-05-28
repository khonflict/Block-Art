const React = require('react')


class DefaultLayout extends React.Component {
    render(){
        return(
            <html lang='en'>
                <head>
                    <title>{this.props.title}</title>
                    <link href='https://fonts.googleapis.com/css?family=Allerta Stencil' rel='stylesheet'></link>
                    <link href="http://fonts.cdnfonts.com/css/mont" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <link rel="stylesheet" href="/CSS/styles.css" />
                </head>

                <nav>
                    <a class="navbar-brand" href="#">
                        <img id="logo" src="/images/BlockArtLogo.png"/>
                    </a>
                    <a href="/arts/">COLLECTION</a>
                    {/* <a href="">ABOUT US</a> */}
                    <a href="/arts/new">CREATE LISTING</a>
                    <a href="/cart/">CART <i class="fa fa-shopping-cart"></i></a>
                </nav>
                
                <body>
                    <h2>{this.props.title}</h2> 
                    {this.props.children}  
                </body>
        
            </html>
        )
    }   
}

module.exports = DefaultLayout