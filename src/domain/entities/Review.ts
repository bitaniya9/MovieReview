export interface ReviewProps {
  id: string;
  movieId: string;
  userId: string;
  rating: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export class Review {
  private constructor(private props: ReviewProps) {}

  static create(
    props: Omit<ReviewProps, "id" | "createdAt" | "updatedAt">
  ): Review {
    return new Review({
      ...props,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static formPersistence(props: ReviewProps): Review {
    return new Review(props);
  }

  get id(): string {
    return this.props.id;
  }

  get rating(): number {
    return this.props.rating;
  }

  get likes(): number {
    return this.props.likes;
  }

  get movieId(): string {
    return this.props.movieId;
  }

  get userId(): string {
    return this.props.userId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  updateRating(newRating: number): void {
    this.props.rating = newRating;
    this.props.updatedAt = new Date();
  }

  toJSON() {
    return {
      id: this.props.id,
      movieId: this.props.movieId,
      userId: this.props.userId,
      rating: this.props.rating,
      likes: this.props.likes,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  }
}
