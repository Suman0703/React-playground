function Wrapper({children}){
    return(
        <div style={{color:"green", border:"5px solid red", width:"300px"}}>
           {children}
        </div>
    )
}

export default Wrapper;