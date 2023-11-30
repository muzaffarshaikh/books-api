import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import Author from './author';
import Price from './price';
import Series from './series';

@JsonObject()
export default class Book {
  @JsonProperty({ name: 'id' })
  private id!: string;

  @JsonProperty({ name: 'isbn' })
  private isbn!: string;

  @JsonProperty({ name: 'isbn13' })
  private isbn13!: string;

  @JsonProperty({ name: 'title' })
  private title!: string;

  @JsonProperty({ name: 'author', type: Author })
  private author!: Author;

  @JsonProperty({ name: 'price', type: Price })
  private price?: string;

  @JsonProperty({ name: 'pages' })
  private pages?: number;

  @JsonProperty({ name: 'language' })
  private language!: string;

  @JsonProperty({ name: 'genre' })
  private genre!: Array<string>;

  @JsonProperty({ name: 'coverPhotoURL' })
  private coverPhotoURL!: string;

  @JsonProperty({ name: 'wikipediaURL' })
  private wikipediaURL?: string;

  @JsonProperty({ name: 'type' })
  private type!: string;

  @JsonProperty({ name: 'publicationDate' })
  private publicationDate!: string;

  @JsonProperty({ name: 'series', type: Series })
  private series?: Series;

  @JsonProperty({ name: 'description' })
  private description?: string;

  setID(value: string): void {
    this.id = value;
  }
}
