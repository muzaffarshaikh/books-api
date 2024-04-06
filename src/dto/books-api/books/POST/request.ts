import * as Joi from 'joi';
import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import Author from '../../common/author';
import Price from '../../common/price';
import Series from '../../common/series';

@JsonObject()
export default class Request {
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

  validate(): Joi.ValidationResult {
    const authorSchema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
    });
    const priceSchema = Joi.object({
      amount: Joi.number().required(),
      currency: Joi.string().required(),
    });
    const seriesSchema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
    });
    const schema = Joi.object({
      isbn: Joi.string().required(),
      isbn13: Joi.string().required(),
      title: Joi.string().required(),
      author: authorSchema.required(),
      price: priceSchema.optional(),
      pages: Joi.number().optional(),
      language: Joi.string().required(),
      genre: Joi.array().required(),
      coverPhotoURL: Joi.string().required(),
      wikipediaURL: Joi.string().optional(),
      type: Joi.string().required(),
      publicationDate: Joi.string().required(),
      series: seriesSchema.optional(),
      description: Joi.string().optional(),
    });

    return schema.validate(this);
  }
}
