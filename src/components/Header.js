import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

  const onClick = () =>{
    console.log("on click");
  }

  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
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
