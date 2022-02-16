import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './googleauth/google.strategy'
import { GoogleauthService } from './googleauth/googleauth.service';

@Module({
  imports: [GoogleauthService],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy, GoogleauthService],
  // exports: [GoogleauthService],
})
export class AppModule {}
