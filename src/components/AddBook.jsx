import React from 'react'
import NavBar from '../NavBar'

const AddBook = () => {
    return (
        <div>
            <NavBar/>
            <br />
            <div class="card text-center mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Add Book</h5>
                        <p></p>
                            <div className="container">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <div className="row g-3">
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <label htmlFor="" className="form-label">Book Title :</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <label htmlFor="" className="form-label">Category :</label>
                                                <select name="" id="" className="form-control">
                                                    <option className="option">Fiction</option>
                                                    <option className="option">Non-Fiction</option>
                                                </select>
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <label htmlFor="" className="form-label">Author Name :</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <label htmlFor="" className="form-label">Publisher Year :</label>
                                                <input type="date" name="" id="" className="form-control" />
                                            </div>
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <label htmlFor="" className="form-label">Book Description :</label>
                                                <textarea name="" id="" className="form-control"></textarea>
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <label htmlFor="" className="form-label">Distributor Name :</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <label htmlFor="" className="form-label">Publisher Name :</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <label htmlFor="" className="form-label">Price (Rs.) :</label>
                                                <input type="number" name="" id="" className="form-control" />
                                            </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <label htmlFor="" className="form-label">Edition :</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                         <button className="btn btn-success">Add</button>
                    </div>
            </div>
            <br />
        </div>
    )
}

export default AddBook