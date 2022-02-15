import { Module } from '@nestjs/common';
import { GoogleauthService } from './googleauth.service';

@Module({
  providers: [GoogleauthService]
})
export class GoogleauthModule {}
