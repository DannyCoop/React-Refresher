import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = (e) => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text = "Add" onClick={onClick}/>
            <Button color='red' text = "hello" onClick={onClick}/>
            <Button color='blue' text = "bye" onClick={onclick}/>
            
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
