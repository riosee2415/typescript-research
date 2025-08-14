// 타입 별칭   Type Alias
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "라이언",
  nickname: "삿자!",
  birth: "1990.01.01",
  bio: "라이어어언",
  location: "카카오프렌즈",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
