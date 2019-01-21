import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Avengers' Secret Database</h1>
      <Link to="/avengers" >Enter</Link>
    </div>
  )
}
