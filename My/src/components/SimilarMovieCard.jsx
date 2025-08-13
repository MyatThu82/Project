import React from 'react'
import { movieContext } from '../context/ContextProvider';
import { useContext } from 'react';

function SimilarMovieCard({movie}) {
  const {movieCardView} = useContext(movieContext);

  return (
    <div
      key={movie.imdbID}
      className="relative group w-32 sm:w-36 md:w-38 lg:w-42 xl:w-42 rounded-xl overflow-hidden shadow-lg bg-gray-600"
      onClick={() => {
        movieCardView(movie)
      }}
    >
      <img
        alt={movie.name}
        className="w-full h-48 sm:h-55 md:h-55 object-cover"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAMFBMVEX4+frv8PHL1+PV3ujs8PTx8/bJ1eLZ4erU3ef2+Pn7/Pzj6e/O2eXz9ffo7fLg5u13A3RMAAADRUlEQVR4nO3c0XKbMBRFUSJAgBDw/39bHdy0IZZjQ4Lauez96EQzsAzCmJGr6vK9/esN+A/CAAOFAQYKAwwUBhgoDDBQGGCgMMBAYYCBwgADhQEGCgMMFAYYKAwwUBhgoDDAQGGAgcIAA4UBBgoDDBQGGCgMMFAYYKAwwEBhgIHCAAOFAQYKAwwUBhgoDDBQGGCgMMBAFTMI1TS1e5qmNKZIhQzCXDu/N1fPRRTKGEy9dwcMnO+nAltXxKD1zsdlbvY1LzGNa8/fvBIGg4tuPHJUhzGNHH58ez5XwCB0zh08scPsXHf6nFDAYPLH9yP5+dOnhAIGo3PHd2NybvzBbcl2vkF6K+PxwznE80+GAgb1d/YiCdYYYIABButoDK5mkP2naxnMXe7O4FIGwfsl9/KVDKox+13BtQyYDx6OxgCDCoN1NAYYVNYNQnhl3wwbhGns6m5pnu6eXYOh8075+OxLd7MGrfY/1r0epz2ZK6watC66btJ8MEfnMwjh71xh1KD10f+ZCPq7IyG0Sx37bhzWl20abAjuEYb6NlW42620SYN0IvjN5WCL0K5P3Luu14wx2DS4I9gipIPELYPmgykdDwnBoMGnE+HWXwT9+f1qGRYh2DPIHAXqHWErtCJU1gweELwjfD5IhNDXtgweEtwQ7s+TsKRPEqYMmscEK0JmqlgRDBl8SSCE3J91OtgxeEKQ+8T4e7QZg6cEK8L97hq6Nr5AkEewY/DFFeFjGQQzBvn5LtM9ghmD+CJBBsGOwasEN4TNaCsGrxMIwTcfR1sx2PV8oes2oy9pEGzOBzxnwgCDCgOFAQYq7UX/DYPewhoOreU5vjZtMLGWR4+OlqNvZVgKrHAssbavdm7HDcNmaFPg68QiazynD0+PdhXmNPL81b5F1vqmd9P3865V72ru/fYm8qTKrPlu48E137HAcudiv38wxt0E3sfTLwlr5X4DYti57L1phtNnw1v8FggGCgMMFAYYKAwwUBhgoDDAQGGAgcIAA4UBBgoDDBQGGCgMMFAYYKAwwEBhgIHCAAOFAQYKAwwUBhgoDDBQGGCgMMBAYYCBwgADhQEGCgMMFAYYKAwwUBhgoDDAQGGAgcIAA/X2CzRJIzRbdsIbAAAAAElFTkSuQmCC"
        }
      />
      <div className="absolute inset-0 bg-black bg-opacity-55 opacity-0 group-hover:opacity-50 flex items-start justify-start transition-opacity duration-300 px-2">
        <p className="text-white text-xs md:text-lg font-bold ">{movie.Title}</p>
      </div>
    </div>
  );
}

export default SimilarMovieCard
