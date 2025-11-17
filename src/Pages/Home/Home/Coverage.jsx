import React, { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const services = useLoaderData();
  const mapRef = useRef(null);
  const [found, setFound] = useState(true);
  console.log(services);

  const position = [23.685, 90.3563];
  const handleSearch = (e) => {
    setFound(true);
    e.preventDefault();

    const location = e.target.location.value.trim().toLowerCase();

    const district = services.find(
      (item) => item.district.toLowerCase() === location
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      setFound(true);
      mapRef.current.flyTo(coord, 13);
      // go to the location
    } else {
      setFound(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-20 z-0">
      <h2 className="text-3xl font-bold">We are available in 64 districts</h2>
      <div className="m-10">
        <form onSubmit={handleSearch} className="flex items-center w-120 ">
          <input
            type="text"
            name="location"
            className="w-full border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="btn btn-primary text-black rounded-full -mx-8 z-20"
          >
            Search
          </button>
        </form>
        {!found && (
          <p className="text-red-400">
            <small>Service Not Available for Your Place . </small>
          </p>
        )}
      </div>

      <div className="border w-full h-[400px] overflow-hidden -z-20">
        <MapContainer
          center={position}
          className="h-[400px]"
          zoom={8}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {services.map((center, i) => (
            <Marker key={i} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong>
                <br /> <strong>Areas:</strong> {center.covered_area.join(",")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
