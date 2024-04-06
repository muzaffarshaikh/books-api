import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export default class Author {
  @JsonProperty({ name: 'id' })
  private id!: string;

  @JsonProperty({ name: 'name' })
  private name!: string;
}
