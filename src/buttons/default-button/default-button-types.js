import PropTypes from 'prop-types';

export const DefaultButtonTypes = {
    progress: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    disabled: PropTypes.bool,
    color: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    rounded: PropTypes.bool,
    onClick: PropTypes.func
}