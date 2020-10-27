import React from "react"
import PropTypes from "prop-types"

const TextInput = ( {name, label, onChange, placeholder, value, error} ) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control form-input"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {error && <div className="form-error">{error}</div>}
            </div>
        </div>
    )
}

TextInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
}

export default TextInput
