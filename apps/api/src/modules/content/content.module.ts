import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../database/database.module';

import { PostController } from './controller/post.controller';
import { PostEntity } from './entities/post.entity';
import { PostRepository } from './repositories/post.repository';
import { PostService } from './services/post.service';

import { SanitizeService } from './services/sanitize.service';
import { PostSubscriber } from './subscribers/post.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity]), DatabaseModule.forRepository([PostEntity])],
    controllers: [PostController],
    providers: [PostService, PostSubscriber, SanitizeService],
    exports: [PostService, DatabaseModule.forRepository([PostRepository])],
})
export class ContentModule {}
