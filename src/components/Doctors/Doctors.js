import React from 'react';
import './Doctor.css'

const Doctors = () => {
    return (
        <div className="mb-5" id="doctors">
            <h2>Our Doctors</h2>
            <div>
                <div className="row row-cols-1 row-cols-md-2 g-4 doctor">
                    <div className="col">
                        <div className="h-100 p-2">
                            <img src="https://www.lewermark.com/wp-content/uploads/2018/07/doctor5-1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Elina Kartus</h5>
                                <p className="card-text">Heart Specialist</p>
                            </div>
                            <div>
                                <button className="button px-4">Visit Here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100 p-2">
                            <img src="https://www.blogoval.com/wp-content/uploads/2021/07/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">John Edus</h5>
                                <p className="card-text">Mental Health Specialist</p>
                            </div>
                            <div>
                                <button className="button px-4">Visit Here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100 p-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHT-GSJV3tH5XGkcvIYXagHA2aN2T76FWx0Q&usqp=CAU" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Antenio Marus</h5>
                                <p className="card-text">Surgeon</p>
                            </div>
                            <div>
                                <button className="button px-4">Visit Here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="h-100 p-2">
                            <img src="https://www.medzul.com/uploads/doctor/1594436374_Dr.%20Mukesh%20Pandey%20Medzul%20health.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Carlous Sheu</h5>
                                <p className="card-text">Cardiologist</p>
                            </div>
                            <div>
                                <button className="button px-4">Visit Here</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;