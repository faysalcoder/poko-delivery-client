import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useServices from '../Hooks/useServices';
import './Footer.css';

const Footer = () => {
  const { services } = useServices();
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className=" text-center text-lg-start bg-light text-light">

        <div className='bg-custom'>

          <section>
            <div className="container text-light text-center text-md-start pt-4 mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 text-light col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <img src="/logo.png" alt="" />
                  </h6>
                  <p className='text-light'>
                    Fast Deliver is a fast growing and promising courier and parcel service in world. With excellent customer service.
                  </p>
                </div>
                {/* <!-- Grid column -->

        <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Services


                  </h6>

                  {
                    services.map(service => <p key={service._id}>
                      <NavLink to={`/placeorder/${service._id}`} className="text-light">{service.title}</NavLink>
                    </p>)
                  }


                </div>
                {/* <!-- Grid column -->

        <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <NavLink to="/services" className="text-light">Our Services</NavLink>
                  </p>
                  <p>
                    <NavLink to="/tracking" className="text-light">Tracking </NavLink>
                  </p>
                  <p>
                    <NavLink to="/login" className="text-light">Login</NavLink>
                  </p>

                </div>
                {/* <!-- Grid column -->

        <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 foot">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                  </h6>
                  <p><i className="fas fa-home me-3"></i> Dhaka, Bangladesh</p>
                  <p>
                    <i className="fas fa-envelope me-3"></i> info@poko-delivery.com.bd
                  </p>
                  <p><i className="fas fa-phone me-3"></i> 01750485095</p>

                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
        </div>
        {/* <!-- Section: Links  -->

  <!-- Copyright --> */}
        <div className=" bg-custom2 p-4" >
          <div className='container px-4 text-center'>
            <p>© 2021 Copyright || Poko-delivery.com.bd</p>

          </div>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
};

export default Footer;