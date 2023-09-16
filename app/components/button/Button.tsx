import styles from './Button.module.scss';

type Props ={
    title:string;
    className?:string;
    disabled?:boolean;
    mode?:'fill'|'outline';
}

export default (props:Props)=>{
    const classes=[styles.container, props.className]
    return(
        <div className={classes.join(' ').trim()}>{props.title}</div>
    )
}