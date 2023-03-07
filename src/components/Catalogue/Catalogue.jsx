import React from 'react'
import ProductBox from "./../Product-box/ProductBox";
import Chandler from "./../../images/chandler-all-short-stories.jpg";
import "./Catalogue.css";

const Catalogue = () => {
    return (
        <div className='Catalogue'>
            <ProductBox image={Chandler} title="Todos los cuentos" price="$4600" origin="RAYMOND CARVER"/>
            <ProductBox image={Chandler} title="Todos los cuentos" price="$4600" origin="RAYMOND CARVER"/>
            <ProductBox image={Chandler} title="Todos los cuentos" price="$4600" origin="RAYMOND CARVER"/>
            <ProductBox image={Chandler} title="Todos los cuentos" price="$4600" origin="RAYMOND CARVER"/>
            <ProductBox image={Chandler} title="Todos los cuentos" price="$4600" origin="RAYMOND CARVER"/>
            <ProductBox image={Chandler} title="Todos los cuentos" price="$4600" origin="RAYMOND CARVER"/>
            <ProductBox image={Chandler} title="Todos los cuentos" price="$4600" origin="RAYMOND CARVER"/>
            <ProductBox image={Chandler} title="Todos los cuentos" price="$4600" origin="RAYMOND CARVER"/>
        </div>
    )
}

export default Catalogue