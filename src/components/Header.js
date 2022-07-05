import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onToggleAdd}) => {

  // console.log(onToggleAdd());


  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onToggleAdd}/>
    </header>
  )
}
Header.defaultProps = {
  title: 'React Application'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const HeadingStyle = {
//   color: 'red',
//   backgroundColor:'black'
// }

export default Header
