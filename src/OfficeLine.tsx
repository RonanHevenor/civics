// App.tsx
import { OfficeComplete, Official } from "./types";

function OfficeLine(props: { office: OfficeComplete }) {
  const renderedOfficeOfficials = props.office.officials.map(
    (official: Official) => {
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <a href={official.urls[0]}>{official.name}</a>
          <p>{official.party}</p>
          <p>{official.phones}</p>
          {/* <a href={official. */}
        </div>
      );
    }
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 5fr",
        gridTemplateRows: "1fr",
        alignContent: "center",
        padding: "0px",
        width: "80vw",
        alignSelf: "center",
      }}
    >
      <p style={{ gridColumn: "1 / span 1", gridRow: "1 / span 1" }}>
        {props.office.name}
      </p>
      <div
        style={{
          gridColumn: "2 / span 1",
          gridRow: "1 / span 1",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {renderedOfficeOfficials}
        </div>
      </div>
    </div>
  );
}

export default OfficeLine;
