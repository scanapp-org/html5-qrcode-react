import React from 'react'

  const Lookup = ({results}) => {
  console.log("Lookup props results " + results)
  const [bookData, setBookData] = React.useState('')
  const [bookTitle, setBookTitle] = React.useState('')
  const [bookAuthor, setBookAuthor] = React.useState('')
  const [bookThumbnail, setBookThumbnail] = React.useState('')
  
  
   const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
    
  

   React.useEffect(() => {
    const getBookData = async (results) => {
    const url = `${API_URL}${results}`
    const res = await fetch(url)
    const data = await res.json()
      console.log("data " + JSON.stringify(data.items))

    setBookTitle(data.items[0].volumeInfo.title)
    setBookAuthor(data.items[0].volumeInfo.authors)
    setBookThumbnail(data.items[0].volumeInfo.imageLinks.smallThumbnail)
   

  }
  getBookData(results)
     
    }, [results])  

  return (
    <div>RESULTS ISBN: {results} 
      <p>Book Title: {bookTitle}</p>
      <p>Book Author: {bookAuthor}</p>
      <img src={bookThumbnail} alt="" />
    </div>

  )
}

export default Lookup