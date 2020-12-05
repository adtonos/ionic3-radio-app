export class Station {
  id: string;
  name: string;
  gaid: string;
  idfa: string;

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

  setGaid(gaid: string) {
    this.gaid = gaid;
  }

  setIdfa(idfa: string) {
    this.idfa = idfa;
  }

  getMP3PlaybackURL(): string {
    let url = `https://play.adtonos.com/${this.id}`;
    if (this.gaid) {
      url = `${url}?gaid=${this.gaid}`;
    }
    if (this.idfa) {
      url = `${url}?idfa=${this.idfa}`;
    }
    return url;
  }
}
