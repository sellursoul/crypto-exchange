export class UserModel {
  constructor(
    public email: string,
    public localId: string,
    private _token: string,
    private expirationDate: Date
  ) {}

  get token() {
    if (new Date() > this.expirationDate) {
      return null
    }
    return this._token
  }

  get expireDate() {
    return this.expirationDate
  }
}

