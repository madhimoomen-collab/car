import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './car.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarService {
  private cars: Car[] = [];
  private nextId = 1;

  findAll(): Car[] {
    return this.cars;
  }

  findOne(id: number): Car {
    const car = this.cars.find((c) => c.id === id);
    if (!car) throw new NotFoundException(`Car ${id} not found`);
    return car;
  }

  create(dto: CreateCarDto): Car {
    const car: Car = { id: this.nextId++, ...dto };
    this.cars.push(car);
    return car;
  }

  update(id: number, dto: UpdateCarDto): Car {
    const car = this.findOne(id);
    Object.assign(car, dto);
    return car;
  }

  remove(id: number): void {
    const car = this.findOne(id);
    this.cars = this.cars.filter((c) => c.id !== car.id);
  }
}