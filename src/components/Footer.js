import React from 'react'
import { MapPin, Smartphone, Mail, Facebook, Instagram, PhoneCall, Phone } from 'react-feather'
import { graphql } from 'gatsby'

import './Footer.css'

export default ({
  address,
  phone,
  email,
  facebook,
  instagram,
  whatsapp
}) => (
  <div>
    <footer className="footer">
      <div className="container social">
        {/* <a className="Contact--Details--Item" href={`mailto:lacintacorta@gmail.com`}>
          <Mail /> {`lacintacorta@gmail.com`}
        </a> */}
        <a className="Contact--Details--Item fb" href={`http://facebook.com/lacintacortaprod`}
        target="_blank">
          <Facebook /> {`La Cinta Corta`}
        </a>
        <a className="Contact--Details--Item ig" href={`https://www.instagram.com/lacintacorta/`}
        target="_blank">
          <Instagram /> {`@‌lacintacorta`}
        </a>
        <a className="Contact--Details--Item wa" href={`https://wa.me/+593983130284`}>
          <PhoneCall /> {`+593 98 31 30 284`}
        </a>
      </div>
      <div className="container taCenter">
        <hr />
          <span>
            © Derechos Reservados {new Date().getFullYear()} All rights reserved.
            <br />
            WebDev & Design by{' '}
            <a href="https://bercostudio.com/">BercoStudio</a>, with template by{' '} <a href='http://thrive.com.au'>thrive</a>
          </span>
      </div>
    </footer>
  </div>
)

export const pageQuery = graphql`
  query Footer($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        address
        phone
        email
        facebook
        instagram
        whatsapp
      }
    }
  }
`
