const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const art = this.props.art
        return (
            <DefaultLayout>
                <br />
                <br />
                <br />
                <div class="containerBox">
                <br />
                <h2>Edit Listing</h2>   
                <br />
                <br /> 
                <br />
                <form action={`/arts/${art._id}?_method=PUT`} 
                    method = "POST">
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image" defaultValue={art.image} />
                    <br />
                    <label htmlFor="name">Name:</label>
                    <input type ="text" id="name" name="name" defaultValue={art.name}/>
                    <br />
                    <label htmlFor="price">Price:</label>
                    <input type ="text" id="price" name="price" defaultValue={art.price}/>
                    <br />
                    <br />
                    <input class="createListing" type="submit" value="Edit Listing"/>
                    <br />
                    <br />
                    <button><a href={'/arts'}>Return to Collection</a></button>
                </form>

               </div>
            </DefaultLayout>
        )
    }
}