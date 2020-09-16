import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const requestPermission = async () => {
      try {
        const { granted } = await Permissions.askAsync(Permissions.LOCATION);

        if (!granted) return;

        // for perfomance reasons, its better to get the last know position
        const {
          coords: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync();

        setLocation({ latitude, longitude });
      } catch (error) {
        console.log(error);
      }
    };

    requestPermission();
  }, []);

  return location;
};

export default useLocation;
