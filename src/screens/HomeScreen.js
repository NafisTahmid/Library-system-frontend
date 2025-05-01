import {React, useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
// import books from '../books';
import Book from '../components/Book';
import axios from 'axios';

function HomeScreen() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    async function getBooks() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/books/");
      setBooks(data);
    };
    getBooks()
  },[])
  return (
    <div>
      <Row>
        <h1>Latest Books</h1>
        {
            books.map((book) => (
                <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                    <Book book={book}/>
                </Col>
            ))
        }
      </Row>
    </div>
  )
}

export default HomeScreen
