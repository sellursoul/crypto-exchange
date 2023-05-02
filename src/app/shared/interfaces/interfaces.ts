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
