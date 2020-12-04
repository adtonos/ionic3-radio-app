export class Station {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  getID(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getMP3PlaybackURL(): string {
    return `https://play.adtonos.com/${this.id}`
  }
}
