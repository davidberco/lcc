import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import _get from 'lodash/get'

import './Image.css'

const extractImageData = (src = '') => {
  if (!src) return null
  if (typeof src === 'string') return { type: 'url', value: src }
  const gatsbyImageData = _get(src, 'childImageSharp.gatsbyImageData')
  if (gatsbyImageData) return { type: 'gatsby', value: gatsbyImageData }
  const publicURL = _get(src, 'publicURL')
  if (publicURL) return { type: 'url', value: publicURL }
  return null
}

class PubFooter extends React.Component {
  render() {
    let {
      background,
      backgroundSize = 'cover',
      className = '',
      src,
      source,
      onClick,
      alt,
      style,
      imgStyle
    } = this.props

    const imageData = extractImageData(src || source)

    if (background) {
      if (!imageData) return <div className={`BackgroundImage absolute ${className}`} />

      if (imageData.type === 'url') {
        return (
          <div
            className={`BackgroundImage absolute ${className}`}
            style={{ backgroundImage: `url(${imageData.value})`, backgroundSize }}
          />
        )
      }

      return (
        <div className={`BackgroundImage absolute ${className}`}>
          <GatsbyImage
            image={imageData.value}
            alt={alt || ''}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            imgStyle={{ objectFit: backgroundSize }}
          />
        </div>
      )
    }

    if (imageData && imageData.type === 'gatsby') {
      return (
        <GatsbyImage
          className={`Image ${className}`}
          image={imageData.value}
          onClick={onClick}
          alt={alt || ''}
          style={style}
          imgStyle={imgStyle}
        />
      )
    }

    const src_ = imageData ? imageData.value : (typeof src === 'string' ? src : '')
    return (
      <img
        className={`Image ${className}`}
        src={src_}
        onClick={onClick}
        alt={alt || ''}
      />
    )
  }
}

PubFooter.propTypes = {
  alt: PropTypes.string.isRequired
}

export default PubFooter
