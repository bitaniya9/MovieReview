export class Review {
  constructor(
    public id: string,
    public movieId: string,
    public userId: string,
    public rating: number,
    public likes: number,
    public comment: string,
    public createdAt: Date = new Date()
  ) {}
}
