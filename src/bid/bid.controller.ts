import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BidService } from './bid.service';
import { CreateBidDto } from './dtos/create-bid.dto';
import { Bid } from './bid.schema';

@Controller('bid')
export class BidController {
  constructor(private readonly bidService: BidService) {}

  @Post()
  create(@Body() createBidDto: CreateBidDto): Promise<Bid> {
    return this.bidService.create(createBidDto);
  }

  @Get()
  findAll(): Promise<Bid[]> {
    return this.bidService.findAll();
  }
}