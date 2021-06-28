import React from 'react';
// IMAGES
import imagePlaceholder from 'assets/images/vendor-cover.jpg';

function VendorItem({ vendor }) {
    return (
        <div className="vendors__vendor">
            <div className="vendors__vendor__rate"> {vendor.data.rate} </div>
            <div className="vendors__vendor__cover">
                <img src={vendor.data.coverPath || imagePlaceholder} alt="cover" />
            </div>
            <div className="vendors__vendor__logo">
                <img src={vendor.data.logo} alt="logo" />
            </div>
            <div className="vendors__vendor__details">
                <p> {vendor.data.title} </p>
                <div> {vendor.data.address} </div>
                <div> {vendor.data.description} </div>
            </div>
        </div>
    );
}

export default VendorItem;
