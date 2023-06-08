'use client';
import { getRequest } from "@/services/bookservice";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  async function getAllBooks() {
    const books = await getRequest('/books');
    setBookList(books);
  }
  console.log(bookList)
  return (
    <div className="container">
      <div className="row">
        {
          bookList.map((book, key) => {
            return (
              <div className="col-md-4" key={key}>
                <Card {...book} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
