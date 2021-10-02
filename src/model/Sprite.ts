export class Sprite {
  static readonly PLAYER = new Sprite('player', 'assets/sprites/character.png');

  private _name: string;
  private _path: string;

  constructor(name: string, path: string) {
    this._name = name;
    this._path = path;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get path(): string {
    return this._path;
  }

  public set path(path: string) {
    this._path = path;
  }
}
