const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <br />
                <br />
                <br />
                <div class="containerBox">
                <br />
                <h2>Create New Listing</h2>
                <br />
                <br />
                <br />
               <form action="/arts" method="POST">
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image"/>
                    <br />
                    
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <br />
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" />
                    <br />
                    <br />
                    <input class="createListing" type="submit" value="Create Listing" />
                    <br />
                    <br />
                    <button><a href={'/arts'}>Return to Collection</a></button>
                </form>
                </div>
            </DefaultLayout>  
        )
    }
}
