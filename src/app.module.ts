import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { getEnvPath } from './common/helper/env.helper';
import { ApiModule } from './api/api.module';
import { MongooseModule } from '@nestjs/mongoose';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ApiModule,
  ],
  providers: [AppService],
})
export class AppModule { }