import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, description, image } = props.service;
    return (
        <div>
            <div className="col p-4" id="services">
                <div className="card p-2 service shadow-lg">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div>
                        <Link to={`/detail/${id}`}><button className="button px-2 rounded">More Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;



