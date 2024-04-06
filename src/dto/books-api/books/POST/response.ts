import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import Request from './request';

@JsonObject()
export default class Response extends Request {
  @JsonProperty({ name: 'id' })
  private id!: string;
}
