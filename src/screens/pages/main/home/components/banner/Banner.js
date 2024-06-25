import banner4 from "../../../../../../assets/Images/banner4.webp";
import webbanner1 from "../../../../../../assets/Images/webbanner1.jpg";
import banner2 from "../../../../../../assets/Images/banner2.png";
import banner3 from "../../../../../../assets/Images/banner3.webp";
const Banner = () => {
    return (
        <div className="container">
            <div className="row d-flex gap-3">
                <div className="col-9">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner height">
                            <div className="carousel-item active">
                                <img src={banner4} className="w-100" alt="banner4.webp" />
                            </div>
                            <div className="carousel-item">
                                <img src={webbanner1} className="w-100" alt="webbanner1.jpg" />
                            </div>
                            <div className="carousel-item">
                                <img src={banner3} className="w-100" alt="banner3.webp" />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


                <div className="col">
                    <img src={banner2} className="w-100 height" alt="banner2" />
                </div>
            </div >
        </div >
    )
}

export default Banner

