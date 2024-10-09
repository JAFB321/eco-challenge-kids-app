

export const BackgroundStars =  ({rain}) => {

    

    return (
        <> 
        <section className={`z-0 background-starts ${rain ? 'rain': ''}`}>

            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>

            {rain ? 
            <>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            <span className="star-span"></span>
            </>    : <></>
        }

        </section>
        </>
    )

}