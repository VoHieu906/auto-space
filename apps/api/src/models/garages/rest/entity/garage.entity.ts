import { Garage } from '@prisma/client';
import { IsOptional } from 'class-validator';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class GarageEntity implements RestrictProperties<GarageEntity, Garage> {
  createdAt: Date;
  updatedAt: Date;
  @IsOptional()
  displayName: string;
  @IsOptional()
  description: string;
  id: number;
  images: string[];
  companyId: number;
}
