import React from 'react';

/**
     * Park Address
 */

 export default class ParkAddress extends React.Component {
    render() {




        return (
            <div className="container">
                <div className="row no-gutters">
                
                <div className="col-1">
                <svg id="map-location-icon" xmlns="http://www.w3.org/2000/svg" width="20px" fill="#298CFA" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"/></svg>
                </div>

                <div className="col-11">
                <h3 id="park-text-address" className="address">{this.props.address}</h3>
                </div>
            </div>
            </div>
        );
    };
}



// Where is the park Address coming from??