import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
} from '@nestjs/common';

import { PaginateOptions } from '@/modules/database/types';

import { PostService } from '../services/post.service';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {}

    @Get()
    async list(@Query() options: PaginateOptions) {
        return this.postService.paginate(options);
    }

    @Get(':id')
    async show(@Param('id', new ParseIntPipe()) id: string) {
        return this.postService.detail(id);
    }

    @Post()
    async store(
        @Body()
        data: Record<string, any>,
    ) {
        return this.postService.create(data);
    }

    @Patch(':id')
    async update(
        @Body()
        data: Record<string, any>,
    ) {
        return this.postService.update(data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.postService.delete(id);
    }
}
