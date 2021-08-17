import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAddForm, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'Green'} text={showAdd ? 'Close' : 'Add'} onClick={onAddForm}/>
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
