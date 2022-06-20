import PropTypes from 'prop-types'
const PageHeader = (props = {}) => {
    const { title = "" } = props
    return <h1>
        {title}
    </h1>
}

export default PageHeader

PageHeader.propTypes = {
    title: PropTypes.string
}