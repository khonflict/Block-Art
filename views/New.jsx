const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title='Create New Listing'>
               <div >
               <form action="/arts" method="POST">
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image" />
                    <br />
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <br />
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" />
                    <br />
                    <br />
                    <input type="submit" value="Create Listing" />
                </form>
                    
                <button><a href={'/arts'}>Back</a></button>

               </div>
                
            </DefaultLayout>
            
           
        )
    }
}
