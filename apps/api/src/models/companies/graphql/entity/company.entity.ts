import { Field, ObjectType } from '@nestjs/graphql';
import { Company as CompanyType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Company implements RestrictProperties<Company, CompanyType> {
  @Field({ nullable: true })
  displayName: string;
  @Field({ nullable: true })
  description: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
