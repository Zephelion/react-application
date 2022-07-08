import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onToggleAdd, showAdd}) => {

  // console.log(onToggleAdd());


  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onToggleAdd}/>
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
