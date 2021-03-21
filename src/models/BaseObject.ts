export abstract class BaseObject {
  private _id: string;

  constructor(_id: string) {
    this._id = _id;
  }

  get id() {
    return this._id;
  }
}
