import { Module } from '@nestjs/common';
import { CarController } from './car.controller.js';
import { CarService } from './car.service.js';

@Module({
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule {}
