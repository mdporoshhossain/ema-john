import React from 'react';
import ProdactJson from '../../products.json';


import { useParams } from 'react-router-dom';
import Prodact from '../Prodact';


const ProdactDetels = () => {
    const {ProdactKey} = useParams();
    const prodactData = ProdactJson.find(pd => pd.key === ProdactKey);

    return (
        <div>
            <Prodact showAddToCart={false} myProdact={prodactData}></Prodact>
            
        </div>
    );
};

export default ProdactDetels;