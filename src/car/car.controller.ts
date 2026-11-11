import {
  Body, Controller, Delete, Get, HttpCode, Param,
  ParseIntPipe, Patch, Post,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  findAll() {
    return this.carService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.carService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCarDto) {
    return this.carService.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCarDto) {
    return this.carService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    this.carService.remove(id);
  }
}