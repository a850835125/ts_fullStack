import { Module } from '@nestjs/common';

import { database } from './config/database.config';
import { ContentModule } from './modules/content/content.module';
import { CoreModule } from './modules/core/core.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
    imports: [ContentModule, CoreModule.forRoot(), DatabaseModule.forRoot(database)],
    controllers: [],
    providers: [],
})
export class AppModule {}
