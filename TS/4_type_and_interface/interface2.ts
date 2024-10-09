interface 맥주 {
  브랜드: string;
  가격?: number;
  readonly 품절: boolean;
  readonly 납품?: symbol;
}

const beer: 맥주 = {
  브랜드: "cass",
  품절: true,
};

beer.품절 = false;
