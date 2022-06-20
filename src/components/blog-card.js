import React from 'react'

import PropTypes from 'prop-types'

import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className={`blog-card-blog-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-card-image"
      />
      <span className="blog-card-text">
        <span>
          Movie aficionado, way too much time on his hand, way too much. TGI
        </span>
      </span>
    </div>
  )
}

BlogCard.defaultProps = {
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
}

BlogCard.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogCard
