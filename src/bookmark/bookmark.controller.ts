import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorator';
import { CreateBookmarkDto, UpdateBookmarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Get()
  findAll(@GetUser('id') userId: number) {
    return this.bookmarkService.findAll(userId);
  }

  @Get(':id')
  findOne(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.bookmarkService.findOne(id, userId);
  }

  @Post()
  create(@GetUser('id') userId: number, @Body() dto: CreateBookmarkDto) {
    return this.bookmarkService.create(userId, dto);
  }

  @Patch(':id')
  update(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBookmarkDto,
  ) {
    return this.bookmarkService.update(id, userId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@GetUser('id') userId: number, @Param('id', ParseIntPipe) id: number) {
    return this.bookmarkService.remove(id, userId);
  }
}
