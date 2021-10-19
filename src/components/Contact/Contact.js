import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <hr></hr>
            <h2>Do you want to appoint the clinic?</h2>
            <br />
            <h5>Email Address : Loyalclinic@gmail.com</h5>
            <br />
            <h5>Phone Number : +08801747459745</h5>
            <br />
            <h5>Location : Mirpur-10,Dhaka,Bangladesh</h5>
            <br />
            <br />
            <h5>Fillup the form and contact us</h5>
            <form className="row g-3 needs-validation mx-5 mb-5" novalidate>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" required />
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" required />
                </div>
                <div className="col-md-4">
                    <label for="validationCustomUsername" className="form-label">Your email</label>
                    <div className="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend"></span> */}
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label text-center">Your address</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                </div>
                <div className="col-md-6">
                    <label for="validationCustom03" className="form-label text-center">Phone number</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                </div>
                <div className="col-12">
                    <button className="btn btn button px-3" type="">Contact Now</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;