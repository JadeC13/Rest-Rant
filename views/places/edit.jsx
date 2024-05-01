const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Place: {data.place.name}</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" id="pic" name="pic" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">Place City</label>
                            <input className="form-control" id="city" name="city" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">Place State</label>
                            <input className="form-control" id="state" name="state" />
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
