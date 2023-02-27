function ImgSlide(props) {
  return (
    <div className="slide">
        <div className={props.sectionNumber + "-slide"}>
            <h1>{props.title}</h1>
            <div className="picture-section">
                {props.sectionNumber === "even" && 
                <div className="description-section">
                    <p>{props.description}</p>
                </div> 
                }
                <img src={props.imgUrl} alt={props.title} />
                {props.sectionNumber === "odd" && 
                <div className="description-section">
                    <p>{props.description}</p>
                </div> 
                }
            </div>
        </div>
    </div>
    )
}

export default ImgSlide;