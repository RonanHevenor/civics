export interface CivicAPIData {
  normalizedInput: NormalizedInput;
  kind: string;
  divisions: Divisions;
  offices: Office[];
  officials: Official[];
}

export interface NormalizedInput {
  line1: string;
  city: string;
  state: string;
  zip: string;
}

export interface Divisions {
  "ocd-division/country:us": OcdDivisionCountryUs;
  "ocd-division/country:us/state:ri/place:north_kingstown": OcdDivisionCountryUsStateRiPlaceNorthKingstown;
  "ocd-division/country:us/state:ri": OcdDivisionCountryUsStateRi;
  "ocd-division/country:us/state:ri/cd:2": OcdDivisionCountryUsStateRiCd2;
  "ocd-division/country:us/state:ri/county:washington": OcdDivisionCountryUsStateRiCountyWashington;
}

export interface OcdDivisionCountryUs {
  name: string;
  officeIndices: number[];
}

export interface OcdDivisionCountryUsStateRiPlaceNorthKingstown {
  name: string;
}

export interface OcdDivisionCountryUsStateRi {
  name: string;
  officeIndices: number[];
}

export interface OcdDivisionCountryUsStateRiCd2 {
  name: string;
  officeIndices: number[];
}

export interface OcdDivisionCountryUsStateRiCountyWashington {
  name: string;
}

export interface Office {
  name: string;
  divisionId: string;
  levels: string[];
  roles: string[];
  officialIndices: number[];
}

export interface Official {
  name: string;
  address: Address[];
  party: string;
  phones: string[];
  urls: string[];
  channels: Channel[];
  photoUrl?: string;
}

export interface Address {
  line1: string;
  city: string;
  state: string;
  zip: string;
}

export interface Channel {
  type: string;
  id: string;
}
