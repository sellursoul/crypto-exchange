export interface AuthResponseData {
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
  registered?: boolean
}

export interface FooterLink {
  title: string
  values: string[]
}

export interface Icon {
  src: string
  alt: string
}

export interface Logo {
  srcs: string[]
  alt: string
}

export interface DownloadLink {
  src: string
  alt: string
  upperText: string
  lowerText: string
}

export interface Environment {
  ApiKey: string
}

export interface PriceRespData {
  data: CoinsArrayEl[];
  status?: any
}

export interface CoinsArrayEl {
  [index: number]: {
    circulating_supply: number;
    cmc_rank: number;
    date_added: string;
    id: number;
    infinite_supply: boolean;
    is_active: boolean;
    is_fiat: boolean;
    last_updated: string;
    max_supply: number;
    name: string;
    num_market_pairs: number;
    platform: null;
    quote: {
      USD: USD
    };
    self_reported_circulating_supply: null;
    self_reported_market_cap: null;
    slug: string;
    symbol: string;
    tags: Tag[];
    total_supply: number;
    tvl_ratio: null;
  }
  name: string
  price: number
  src?: Icon
}

interface USD {
  fully_diluted_market_cap: number;
  last_updated: string;
  market_cap: number;
  market_cap_dominance: number;
  percent_change_1h: number;
  percent_change_7d: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
  price: number;
  tvl: null;
  volume_24h: number;
  volume_change_24h: number;
}
interface Tag {
  slug: string;
  name: string;
  category: string;
}
