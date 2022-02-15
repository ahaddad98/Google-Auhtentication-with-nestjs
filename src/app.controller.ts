import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleauthService } from './googleauth/googleauth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class AppController {
  constructor(private readonly googleauthService: GoogleauthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.googleauthService.googleLogin(req)
  }
}
