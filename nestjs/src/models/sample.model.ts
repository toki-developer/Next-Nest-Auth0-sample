import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SampleModel {
  @Field()
  sub: string;

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  freeInput: string;
}
