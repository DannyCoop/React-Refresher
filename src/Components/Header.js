import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Button from './Button'

const Header = ({title, onAddForm, showAdd}) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'Green'} text={showAdd ? 'Close' : 'Add'} onClick={onAddForm}/>)}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototype = {
    title: PropTypes.string,
    // title: PropTypes.string.isRequired,
}

export default Header
