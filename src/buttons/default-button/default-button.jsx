import React from "react";
import classes from "./default-button.module.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import {DefaultButtonTypes} from "./default-button-types";

const DefaultButton = ({progress, type, label, disabled, color, className, width, height, rounded, onClick, onMouseLeave, onMouseOver}) => {
    const cls = [
        classes.defaultButton,
        classes[color ?? 'default'],
        className
    ]

    const style = {
        width: width ?? '100%',
        height: height ?? 'auto',
        borderRadius: rounded ? '8px' : ''
    }
    return (
        <button
            type={type}
            disabled={disabled}
            style={style}
            className={cls.join(' ')}
            onClick={onClick}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
        >
            {progress
                ? <ScaleLoader color={'var(--white)'} size={50} height={12} width={1}/>
                : label
            }
        </button>
    )
}

DefaultButton.propTypes = DefaultButtonTypes

export default DefaultButton