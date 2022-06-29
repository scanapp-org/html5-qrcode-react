import React from 'react'

const Lookup = ({results}) => {
console.log("Lookup props results " + results.decodedText )
   const [bookData, setBookData] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  
   const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
   let ISBN = results 
   const test_ISBN = "9781408810552"
   const full_example_string = "https://www.googleapis.com/books/v1/volumes?q=isbn:9781408810552"
   

   React.useEffect(() => {
    const getBookData = async (id) => {
    const url = `${API_URL}${ISBN}`
    const res = await fetch(url)
    const data = await res.json()
      console.log("data " + data)

    setBookData(data)
    setLoading(false)

  }
  getBookData(results )
     
    }, [results ])  

  return (
    <div>RESULTS: {bookData[0]}</div>


   



  )
}

export default Lookup