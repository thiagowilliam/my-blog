import React from "react"
import { Link } from "gatsby"

const ContactPage = () => (
  <>
    <h1>Pagina de Contato</h1>

    <ul>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" activeStyle={{ color: "red" }}>
          About
        </Link>
      </li>

      <li>
        <Link to="/contact" activeStyle={{ color: "red" }}>
          Contact
        </Link>
      </li>
    </ul>
  </>
)

export default ContactPage
