import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(Event)
        private eventsRepository: Repository<Event>,
    ) {}

    async create(event: Event): Promise<Event> {
        return this.eventsRepository.save(event);
    }

    async findAll(): Promise<Event[]> {
        return this.eventsRepository.find();
    }

    async findOne(id: number): Promise<Event> {
        const event = await this.eventsRepository.findOneBy({ id });
        if (!event) {
            throw new NotFoundException(`Event with ID ${id} not found`);
        }
        return event;
    }

    async update(id: number, updateEvent: Partial<Event>): Promise<Event> {
        await this.eventsRepository.update(id, updateEvent);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        const result = await this.eventsRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Event with ID ${id} not found`);
        }
    }
}
