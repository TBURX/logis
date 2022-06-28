import * as React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

const MapProvider: React.FC<IProps> = ({latlng}) =>{
    const map = useMapEvents({
        click(e){
            map.flyTo(e.latlng);
            console.log('fly to', e.latlng);
        }
    });
    React.useEffect(()=>{
        map.flyTo(latlng, 15);
    },[latlng, map]);
    return null;
}

interface IProps{
    latlng: LatLngExpression
}

const Map:React.FC<IProps> = (props)=>{
    const {latlng} = props;
    return <MapContainer  style={{width: 500, height: 400}} center={latlng} zoom={15}>
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapProvider {...props} />
    </MapContainer>
}

export default Map;