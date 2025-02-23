import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, Slot as SlotType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Slot implements RestrictProperties<Slot, SlotType> {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  @Field({ nullable: true })
  displayName: string;
  @Field({ nullable: true })
  length: number;

  @Field(() => $Enums.SlotType)
  type: $Enums.SlotType;

  @Field({ nullable: true })
  width: number;
  @Field({ nullable: true })
  height: number;

  pricePerHour: number;
  garageId: number;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
@ObjectType()
export class ReturnCount {
  count: number;
}
