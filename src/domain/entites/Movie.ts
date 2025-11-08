export class Movie {
  constructor(
    public title: string,
    public runtime_minutes: Date,
    public genre: string,
    public releaseDate: Date,
    public description: string,
    public rating: number,
    public reviews: { user: string; comment: string }[] = []
  ) {}
}
