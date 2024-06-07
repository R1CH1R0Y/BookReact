import React from 'react'
import NavBar from '../NavBar'

const BookList = () => {
  return (
    <div>
        <NavBar/>
        <br />
        <div class="card text-center mb-3">
  <div class="card-body">
    <h5 class="card-title">Book List</h5>
    <p></p>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Book Title</th>
      <th scope="col">Author</th>
      <th scope="col">Published Year</th>
      <th scope="col">Price (Rs.)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Alchemist</th>
      <td>Mark</td>
      <td>2020</td>
      <td>599</td>
    </tr>
    <tr>
      <th>Alchemist</th>
      <td>Mark</td>
      <td>2020</td>
      <td>599</td>
    </tr>
    <tr>
      <th>Alchemist</th>
      <td>Mark</td>
      <td>2020</td>
      <td>599</td>
    </tr>
    <tr>
      <th>Alchemist</th>
      <td>Mark</td>
      <td>2020</td>
      <td>599</td>
    </tr>
    <tr>
      <th>Alchemist</th>
      <td>Mark</td>
      <td>2020</td>
      <td>599</td>
    </tr>
    <tr>
      <th>Alchemist</th>
      <td>Mark</td>
      <td>2020</td>
      <td>599</td>
    </tr>
    <tr>
      <th>Alchemist</th>
      <td>Mark</td>
      <td>2020</td>
      <td>599</td>
    </tr>
    <tr>
      <th>Alchemist</th>
      <td>Mark</td>
      <td>2020</td>
      <td>599</td>
    </tr>
    <tr>
      <th>Alchemist</th>
      <td>Mark</td>
      <td>2020</td>
      <td>599</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
    </div>
  </div>
</div>
<br />
    </div>
  )
}

export default BookList