import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Bookmark {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Int)
  userId: number;
}
