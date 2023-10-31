type OfficeComplete = {
  name: string;
  level: string;
  officials: Official[];
};

type Official = {
  name: string;
  party: string;
  phone: string;
  link: string;
  twitter: string;
};

function OfficeLine(office: OfficeComplete) {
  const renderedOfficeOfficials = office.officials.map((official: Official) => {
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
        <a href={official.link}>{official.name}</a>
        <p>{official.party}</p>
        <p>{official.phone}</p>
        {/* <a href={official. */}
      </div>
    );
  });

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
        {office.name}
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
