export class LikeDTO {
  readonly uuid: string;
  readonly idMovie: number;
  readonly idUser: string;
  readonly nameMovie: string;
  readonly dateMovie: Date;
  readonly image: string;

  constructor(
    uuid: string,
    idMovie: number,
    idUser: string,
    nameMovie: string,
    dateMovie: Date,
    image: string
  ) {
    this.uuid = uuid;
    this.idMovie = idMovie;
    this.idUser = idUser;
    this.nameMovie = nameMovie;
    this.dateMovie = dateMovie;
    this.image = image;
  }
}
