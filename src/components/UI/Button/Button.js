import classes from "./Button.module.css";

const button = (props) => {
    const classNames = [classes.Button];
    classNames.push(props.type);
    return (
        <button className={classNames.join(" ")} onClick={props.clicked}>{props.children}</button>
    )
}

export default button;