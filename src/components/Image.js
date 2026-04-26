import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
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

class Image extends React.Component {
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

      // gatsby image as background
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

Image.propTypes = {
  alt: PropTypes.string.isRequired
}

export default Image

export const query = graphql`
  fragment FluidImage on File {
    publicURL
    childImageSharp {
      gatsbyImageData(width: 2800, quality: 75, formats: [AUTO, WEBP])
    }
  }
  fragment NoBlurImage on File {
    publicURL
    childImageSharp {
      gatsbyImageData(width: 2800, quality: 75, formats: [AUTO, WEBP], placeholder: NONE)
    }
  }
  fragment TracedImage on File {
    publicURL
    childImageSharp {
      gatsbyImageData(width: 2800, quality: 75, formats: [AUTO, WEBP], placeholder: TRACED_SVG)
    }
  }
  fragment LargeImage on File {
    publicURL
    childImageSharp {
      gatsbyImageData(width: 1800, quality: 75, formats: [AUTO, WEBP])
    }
  }
  fragment MediumImage on File {
    publicURL
    childImageSharp {
      gatsbyImageData(width: 800, quality: 75, formats: [AUTO, WEBP])
    }
  }
  fragment SmallImage on File {
    publicURL
    childImageSharp {
      gatsbyImageData(width: 400, quality: 75, formats: [AUTO, WEBP])
    }
  }
  fragment LargeImageFixed on File {
    publicURL
    childImageSharp {
      gatsbyImageData(width: 1800, quality: 75, formats: [AUTO, WEBP], layout: FIXED)
    }
  }
  fragment MediumImageFixed on File {
    publicURL
    childImageSharp {
      gatsbyImageData(width: 800, quality: 75, formats: [AUTO, WEBP], layout: FIXED)
    }
  }
  fragment SmallImageFixed on File {
    publicURL
    childImageSharp {
      gatsbyImageData(width: 400, quality: 75, formats: [AUTO, WEBP], layout: FIXED)
    }
  }
`
