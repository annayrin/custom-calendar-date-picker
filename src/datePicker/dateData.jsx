import React from "react";
import classes from "./dateData.module.css";

const DateData = ({styles, classname, label, month, year, selected, onselect, over, mouseOver}) => {


    const cls = [
        classname && classes.firstTime,
        classes.dateData,
        (selected[0] && selected[1] && (
            selected[0].getTime() <= new Date(year, month, label).getTime()
            && selected[1].getTime() >= new Date(year, month, label).getTime()))
            ? classes.elegido
            : classes.suelto,

        selected[0] && !selected[1] && over && ((
                selected[0].getTime() < new Date(year, month, label).getTime()
                && over >= new Date(year, month, label).getTime()) ||
            (selected[0].getTime() > new Date(year, month, label).getTime()
                && over <= new Date(year, month, label).getTime()))
            ? classes.hover
            : classes.suelto,
        selected[0] && selected[0].getTime() === new Date(year, month, label).getTime()
            ? classes.elegido
            : classes.suelto,

        !selected[0] &&
        new Date(year, month, label).getDate() === new Date().getDate()
        && new Date(year, month, label).getMonth() === new Date().getMonth()
        && new Date(year, month, label).getFullYear() === new Date().getFullYear()
            ? classes.today : classes.suelto
    ]

    return (
        <td
            style={styles}
            className={cls.join(" ")}
            onClick={onselect?.bind(this, label, month, year)}
            onMouseOver={selected[0] ? () => mouseOver(label, month, year) : null}
        >
            {label}
        </td>
    )
}

export default DateData

