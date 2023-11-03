type Address = {
  line1: string;
  city: string;
  state: string;
  zip: string;
};

type Channel = {
  type: string;
  id: string;
};

export type Official = {
  name: string;
  address: Address[];
  party: string;
  phones: string[];
  urls: string[];
  photoUrl?: string;
  channels?: Channel[];
};

export type Office = {
  name: string;
  divisionId: string;
  levels: string[];
  roles: string[];
  officialIndices: number[];
};

type Division = {
  name: string;
  officeIndices?: number[];
};

type NormalizedInput = {
  line1: string;
  city: string;
  state: string;
  zip: string;
};

export type OfficeComplete = {
  name: string;
  level: string;
  officials: Official[];
};

export type RepresentativeInfoResponse = {
  normalizedInput: NormalizedInput;
  kind: string;
  divisions: Record<string, Division>;
  offices: Office[];
  officials: Official[];
};
