import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './event.entity';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Post()
    create(@Body() event: Event): Promise<Event> {
        return this.eventsService.create(event);
    }

    @Get()
    findAll(): Promise<Event[]> {
        return this.eventsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Event> {
        return this.eventsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateEvent: Partial<Event>): Promise<Event> {
        return this.eventsService.update(id, updateEvent);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.eventsService.remove(id);
    }
}
