import React, { useState } from 'react'
import NavBar from '../NavBar'

const BookList = () => {
  const [data,changeData]=useState(
    [
      {"title":"Alchemist","author":"Paulo Coilo","year":2016,"price":599},
      {"title":"Engine","author":"Randy Roysson","year":2016,"price":999},
      {"title":"Dracon","author":"Felicia Rodrigez","year":2024,"price":1099},
      {"title":"Vinland Saga","author":"James Norton","year":2004,"price":799},
      {"title":"Jujutsu Kaisen","author":"Akage Yamamoto","year":2012,"price":699},
    ]
  )
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
    {
      data.map(
        (value,index)=>{
          return <tr>
          <td>{value.title}</td>
          <td>{value.author}</td>
          <td>{value.year}</td>
          <td>{value.price}</td>
        </tr>
        }
      )
    }
    
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