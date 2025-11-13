import { Review } from "@domain/entities/Review";

export interface MovieProps {
  id: string;
  title: string;
  runtime_minutes: Date;
  genre: string;
  release_year: Date;
  description: string;
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
}

export class Movie {
  private constructor(private props: MovieProps) {}

  static create(
    props: Omit<MovieProps, "id" | "createdAt" | "updatedAt">
  ): Movie {
    return new Movie({
      ...props,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  static formPersistence(props: MovieProps): Movie {
    return new Movie(props);
  }

  get id(): string {
    return this.props.id;
  }

  get title(): string {
    return this.props.title;
  }
  get runtime_minutes(): Date {
    return this.props.runtime_minutes;
  }

  get genre(): string {
    return this.props.genre;
  }

  get release_year(): Date {
    return this.props.release_year;
  }

  get description(): string {
    return this.props.description;
  }

  get reviews(): Review[] {
    return this.props.reviews;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  updateTitle(newTitle: string): void {
    this.props.title = newTitle;
    this.props.updatedAt = new Date();
  }

  updateGenre(newGenre: string): void {
    this.props.genre = newGenre;
    this.props.updatedAt = new Date();
  }

  updateReleaseYear(newRealease_Year: Date): void {
    this.props.release_year = newRealease_Year;
    this.props.updatedAt = new Date();
  }

  updateDescription(newDescription: string): void {
    this.props.description = newDescription;
    this.props.updatedAt = new Date();
  }

  updateRuntime_minutes(newRuntime_minutes: Date): void {
    this.props.runtime_minutes = newRuntime_minutes;
    this.props.updatedAt = new Date();
  }

  toJSON() {
    return {
      id: this.props.id,
      title: this.props.title,
      runtime_minutes: this.runtime_minutes,
      genre: this.props.genre,
      release_year: this.props.release_year,
      description: this.props.description,
      reviews: this.props.reviews,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  }
}
