import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          data-testid="add-button"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

// import { useCallback, useState } from "react";
// import Map, { Marker, Popup } from "react-map-gl";

// import * as parksData from "./data/skateboard-parks.json";

// function App() {
//   const token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;
//   const [count, setCount] = useState(0);
//   const [viewState, setViewState] = useState({
//     latitude: 45.4211,
//     longitude: -75.6903,
//     // width: "100%",
//     // height: "100%",
//     zoom: 10,
//   });
//   const [selectedPark, setSelectedPark] = useState<any>(null);
//   console.log(selectedPark);
//   return (
//     <div
//       style={{
//         width: "80vw",
//         margin: "auto",
//       }}
//     >
//       <Map
//         {...viewState}
//         // mapLib={import("mapbox-gl")}
//         mapboxAccessToken={token}
//         mapStyle="mapbox://styles/mapbox/streets-v9"
//         style={{ width: "80vw", height: "100vh" }}
//         onMove={(evt) => {
//           setViewState(evt.viewState);
//         }}
//       >
//         {parksData.features.map((park) => (
//           <Marker
//             longitude={park.geometry.coordinates[0]}
//             latitude={park.geometry.coordinates[1]}
//             key={park.properties.PARK_ID}
//             onClick={() => {
//               setSelectedPark(park);
//             }}
//           >
//             <button className="marker-btn">
//               <img src="/skateboarding.svg" alt="Skate Park Icon" />
//             </button>
//           </Marker>
//         ))}

//         {selectedPark != null && (
//           <Popup
//             style={{ background: "teal" }}
//             // latitude={selectedPark?.geometry?.coordinates[1]}
//             // longitude={selectedPark?.geometry?.coordinates[0]}
//             longitude={-100}
//             latitude={40}
//             onOpen={(e) => {
//               console.log(e, "open");
//             }}
//             onClose={(e) => {
//               console.log(e, "close");
//               setSelectedPark(null);
//             }}
//           >
//             <div style={{ background: "teal" }}>
//               <h2>{selectedPark.properties.NAME}</h2>
//               <p>{selectedPark.properties.DESCRIPTIO}</p>
//             </div>
//           </Popup>
//         )}
//       </Map>
//     </div>
//   );
// }

// export default App;
