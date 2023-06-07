'use client';
import { getRequest } from "@/services/bookservice";
import { useEffect, useState } from "react"

export default function Home() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
   getRequest('/books').then(data => {
    setBookList(data);
   });
  }, [])

  return (
      <main >
        Harikrishnan
      </main>
  )
}
