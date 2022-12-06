import React, { useEffect, useState } from 'react';
import Layout from './layouts/Layout';
import RadioComponent from './components/input/RadioComponent';

type Location = {
  latitude: number;
  longitude: number;
};

export default function App() {
  const [location, setLocation] = useState<Location | null>(null);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Layout title="이거먹어">
      {location ? (
        <div>
          <span>{location.latitude}</span>
          <span>{location.longitude}</span>
        </div>
      ) : (
        <div>
          <span>값이 없습니당</span>
        </div>
      )}
      <RadioComponent />
    </Layout>
  );
}
