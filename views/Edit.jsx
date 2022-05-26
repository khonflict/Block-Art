const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const art = this.props.art
        return (
            <DefaultLayout title="Edit Listing">
              
                <form action={`/arts/${art._id}?_method=PUT`} 
                    method = "POST">
                    <label htmlFor="name">Name:</label>
                    <input type ="text" id="name" name="name" defaultValue={art.name}/>
                    <br />
                    <label htmlFor="price">Price:</label>
                    <input type ="text" id="price" name="price" defaultValue={art.price}/>
                    <br />
                    <br />
                    <input type="submit" value="Edit Listing"/>
                </form>
                <button><a href={'/arts'}>Back</a></button>
               
            </DefaultLayout>
        )
    }
}