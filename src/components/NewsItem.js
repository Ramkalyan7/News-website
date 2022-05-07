

const NewsItem=(props)=>{
    return (
        <div className="newsitem">
            <img src={props.urlToImage} alt="" />
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <a className="btn" href={props.urll}>Read More</a>
        </div>
    );
}

export default NewsItem;