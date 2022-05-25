function News( props){
    return (
        <ul>
            {props.propNews.map((news , key) => {
                return(
                    <li key={key}>{news}</li>

                )

            })}

            <li>
            <button onClick ={props.getNewsProp}> GeT NEWS</button>
            </li>
        </ul>
    )
}
export default News;