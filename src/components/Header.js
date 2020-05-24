import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/popular">Popular</Link>
        </li>
      </ul>
    </div>
  )
}
