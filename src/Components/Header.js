import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showTask}) => {

  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        <Button color={showTask ? 'red' : 'green'} text={showTask ? 'Close' : 'Add'} onClick={onAdd}/>
      </header>
    </div>
  )
}
Header.defaultProps = {
    title: 'Task Trackers',
}

Header.propTypes = {
    title:PropTypes.string.isRequired,
}
//css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header

