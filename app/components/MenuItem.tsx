
type Props={
    title:string;
}
export const MenuItem=(props:Props)=>{
    console.log(props);
    return(
        <div>{props.title}</div>
    )
}