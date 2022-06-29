import React from 'react'

const Lookup = ({ results }) => {
   const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
   const test_ISBN = "9781408810552"
   const full_example_string = "https://www.googleapis.com/books/v1/volumes?q=isbn:9781408810552"
   
  return (
    <div>{results[0]}</div>


   



  )
}

export default Lookup