import '../../styles/Status.css'
import PropTypes from 'prop-types'

const loadingImage = 'https://cssbud.com/wp-content/uploads/2021/08/beepboop.gif'
const emptyImage =
  'https://imgb.ifunny.co/images/e31a96295618e4fc51ccd879cafb4e5e102062f64fa9aed8dca3b71ecd719655_1.webp'
const errorImage = 'https://i.imgur.com/MZKl6Ju.jpeg'

const ImageSection = ({ image }) => (
  <div className="image-section">
    <img src={image} alt="Status Image" className="status-image" />
  </div>
)

export const Loading = () => (
  <div className="loading-container">
    <ImageSection image={loadingImage} />
    <div className="status-message">Loading...</div>
  </div>
)

export const Empty = () => (
  <div className="empty-container">
    <ImageSection image={emptyImage} />
    <div className="status-message">No posts found.</div>
  </div>
)

export const ErrorState = ({ message }) => (
  <div className="error-container">
    <ImageSection image={errorImage} />
    <div className="status-message">Error: {message}</div>
  </div>
)

ErrorState.propTypes = {
  message: PropTypes.string.isRequired
}

ImageSection.propTypes = {
  image: PropTypes.string.isRequired
}
