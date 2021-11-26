import React from 'react';


const FindUs = () => {
    return (
        <div className='container'>
            <div className="  my-5 card bg-dark text-white">
                <img
                    src="https://i.ibb.co/9w7KtjJ/foodora-3402507-1280.jpg"
                    className="card-img"
                    alt="..."
                    style={{ height: "80%" }}
                />
                <div className="card-img-overlay text-center p-5" style={{ backgroundColor: "rgba(49, 47, 47, 0.584)" }}>
                    <h2 className='custom-color fw-bold py-5'>FASTEST DELIVERY</h2>
                    <p >You can get your valuable item in the <br /> fastest period of  time with safety. <br /> Because your emergency  is our first priority..</p> <br />
                    <h1 className='custom-color '><i className="fas fa-play-circle"></i></h1>
                </div>
            </div>


            <div className=' text-center my-5 fw-bold'>
                <h1 className='fw-bold custom-color '>Find Us</h1>
            </div>
            <div className='container'>
                <div className="card " >
                    <div className="row  g-0 d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <img
                                src="https://i.ibb.co/zbL0mDB/Feature-Image.jpg"
                                alt="..."
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body fw-bold">

                                <p><i className="fas custom-color fa-home me-2"></i>Dhaka,</p>

                                <p><i className="fas custom-color fa-envelope me-2"></i>info@poko-delivery.com.bd</p>
                                <p><i className="fas custom-color fa-phone me-3"></i>01750485095</p>


                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FindUs;