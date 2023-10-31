import getTwitter from "./getTwitter.tsx";
import "./index.css";
import "./OfficeLine.tsx";
import OfficeLine from "./OfficeLine.tsx";
// import { CivicAPIData } from "./dataType.tsx";
import { useState, useEffect } from "react";

function CivicsApp() {
  type Office = {
    name: string;
    divisionId: string;
    levels: string[];
    roles: string[];
    officialIndices: number[];
  };

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
  };

  const [apiData, setFigures] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (address) {
      setLoading(true);
      fetch(
        `https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBEhstCgYZewz3HlAldtxVVIawMqMX5ONI&address=${address}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          setFigures(JSON.parse(JSON.stringify(data)));
        })
        .catch((error) => console.log(error.message));
    }
  }, [address]);

  const offices = apiData.offices?.map((office: Office) => {
    const officials = office.officialIndices.map((index: number) => {
      return {
        name: apiData.officials[index].name,
        party: apiData.officials[index].party,
        phone: apiData.officials[index].phones[0],
        link: apiData.officials[index].urls[0],
        // twitter: apiData.officials[index].channels.filter(getTwitter),
      };
    });
    return {
      name: office.name,
      level: office.levels[0],
      officials: officials,
    };
  });

  console.log(offices);

  const renderedOfficeComponents = offices?.map((office: OfficeComplete) => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{OfficeLine(office)}</div>
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
        </style>
      </head>
      {address === "" ? (
        <div>
          <h2
            style={{
              color: "#2e8bcd",
              marginTop: "80px",
              fontFamily: "Roboto, sans-serif",
              fontSize: "30px",
              textAlign: "center",
              padding: "0px 100px",
            }}
          >
            Enter your residential address, state, town, or zip code below to
            find out who represents you in government!
          </h2>
        </div>
      ) : (
        <div></div>
      )}
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setAddress(e.currentTarget.elements.address.value);
        }}
      >
        <input
          className="inputFields"
          style={{
            width: "40%",
            height: "60px",
            borderRadius: "80px",
            textAlign: "center",
            borderColor: "#1DB525",
            marginTop: "30px",
          }}
          type="text"
          name="address"
          placeholder="First St NE, Washington, DC 20515"
        />
        {/* <button style={{ width: "10%", height: "60px" }} type="submit">
          Search
        </button> */}
      </form>
      {address === "" ? (
        <div>
          <p
            style={{
              color: "#2e8bcd",
              marginLeft: "400px",
              fontFamily: "Roboto, sans-serif",
              fontSize: "10px",
              textAlign: "center",
            }}
          >
            Powered by Google©
          </p>
          <h3
            style={{
              color: "#2e8bcd",
              marginTop: "20px",
              fontFamily: "Roboto, sans-serif",
              fontSize: "20px",
              textAlign: "center",
              padding: "0px 100px",
            }}
          >
            You could type:
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ paddingLeft: "20px", paddingRight: "50px" }}>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                USA
              </li>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                NY
              </li>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                Washington, DC
              </li>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                United States
              </li>
            </div>
            <div style={{ paddingRight: "50px" }}>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                NYC
              </li>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                Manhattan
              </li>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                Washington, DC
              </li>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                New York
              </li>
            </div>
            <div>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                New York, NY
              </li>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                10001
              </li>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                First St NE, Washington, DC 20515
              </li>
              <li
                style={{
                  color: "#2e8bcd",
                  marginTop: "0px",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                NY 10001
              </li>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "80px",
          alignItems: "center",
          alignSelf: "center",
          width: "100%",
        }}
      >
        {isLoading ? <p>Loading...</p> : renderedOfficeComponents}
      </div>
    </div>
  );
}

export default CivicsApp;
