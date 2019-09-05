import React from 'react';

const SearchArea = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
                    <form onSubmit={props.handleSubmit} className="search">
                        <div className="form-row align-items-center">
                            <div className="col-sm-9">
                                <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                                <input type="text" className={props.searchError ? "form-control error" : "form-control"} id="inlineFormInputName" placeholder="Search movie" onChange={props.handleChange} />
                            </div>
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-primary search-btn mx-auto mt-3 mt-sm-0">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchArea;