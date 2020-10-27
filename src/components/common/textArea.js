import React from "react"
import PropTypes from "prop-types"

const TextArea = ( {name, label, onChange, placeholder, value, error} ) => {

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <textarea
                    name={name}
                    className="form-control form-input form-text-area"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {error && <div className="form-error">{error}</div>}
            </div>
        </div>
    )
}

TextArea.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
}

export default TextArea
