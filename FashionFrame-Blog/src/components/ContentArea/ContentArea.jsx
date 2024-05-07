import '../../styles/ContentArea.css'
import PropTypes from 'prop-types'
import Home from './Home'
import AboutMe from './AboutMe'
import WhereToFindMe from './WhereToFindMe'
import Posts from './Posts'
import { ErrorState, Loading, Empty } from '../Status/Status'

const Main = ({ currentSection, posts, isLoading, error }) => {
  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <ErrorState message={error} />
  }

  if (posts.length === 0 && currentSection === 'POSTS') {
    return <Empty />
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'HOME':
        return <Home />
      case 'POSTS':
        return <Posts posts={posts}></Posts>
      case 'ABOUT ME':
        return <AboutMe />
      case 'WHERE TO FIND ME':
        return <WhereToFindMe />
      default:
        return <div>Content not found!</div>
    }
  }

  return <div className="main-content">{renderSection()}</div>
}

Main.propTypes = {
  currentSection: PropTypes.oneOf(['HOME', 'POSTS', 'ABOUT ME', 'WHERE TO FIND ME']),
  posts: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  error: PropTypes.string
}

export default Main
