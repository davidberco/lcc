import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  white,
  className = '',
  classNameColor = ''
}) => {
  if (large) className += ' PageHeader-large'
  if (white) classNameColor += ' PageHeader-white'
  return (
    <div className={`PageHeader relative ${className} ${classNameColor}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title">{title}</h1>
        
          {subtitle && (
            <Content className="PageHeader--Subtitle" src={subtitle} />
          )}
        
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
