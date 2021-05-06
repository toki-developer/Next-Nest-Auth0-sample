import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddSampleDto {
  @Field()
  sub: string;
  @Field()
  name: string;
  @Field()
  freeInput: string;
}
