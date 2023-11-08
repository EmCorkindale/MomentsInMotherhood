import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as groupData from "../Data/Groups.json";
import { Icon } from "leaflet";
import { useState } from 'react';

export default function Map() {
  const [Group, setGroup] = useState(null);
  const thing = new Icon({
    iconUrl: "./src/assets/leaf-green.png",
    iconSize: [25, 25]
  });
 

  return (
    <MapContainer className="map" center={[-43.5320, 172.6306]} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {groupData.Groups.map(group => (
        <Marker
          key={group.properties.Name}
          position={[
            group.geometry.coordinates[0],
            group.geometry.coordinates[1]
          ]}
          onClick={() => {
            setGroup(group);
            console.log("jhgjhf", group)
          }}
          icon={thing}
        />
      ))}
      {Group ? <p>{Group.properties.Name}</p> : null}
      {Group && (
        <Popup
          position={[
            Group.geometry.coordinates[0],
            Group.geometry.coordinates[1]
          ]}
          onClose={() => {
            setGroup(null);
          }}
        >
          <div>
            <h2>{Group.properties.Name}</h2>
            <p>{Group.properties.Location}</p>
            <p>{Group.properties.Description}</p>
            <p>{Group.properties.Time}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}