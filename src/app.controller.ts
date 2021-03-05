import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('create')
  @Render('citizens/create-citizen.html')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createForm() {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  @Render('index.html')
  getHello2(): {} {
    return this.appService.getHello2();
  }

  @Get()
  @Render('home.html')
  // eslint-disable-next-line @typescript-eslint/ban-types
  getHome(): {} {
    return this.appService.getHome();
  }

  @Get('about-us')
  @Render('about-us.html')
  getAboutUs(): {} {
    return this.appService.getAboutUs();
  }

}
