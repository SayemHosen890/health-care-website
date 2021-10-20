import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const { detailId } = useParams();
    return (
        <div>
            <h2>this is detail :{detailId}</h2>
        </div>
    );
};

export default Detail;