import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SampleModel {
  @Field()
  sub: string;

  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  freeInput: string;
}
