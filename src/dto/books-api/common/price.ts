import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export default class Price {
  @JsonProperty({ name: 'price' })
  private amount!: number;

  @JsonProperty({ name: 'currency' })
  private currency!: string;
}
