/**
 * Created by Takamichi on 2/5/16.
 */
import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: "100%"}} />}
            googleMapElement={
                    <GoogleMap
                        defaultZoom={12}
                        defaultCenter={props.coordinate} />
                }
        />
    )
}
