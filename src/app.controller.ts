import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {
		const {test} = this.obj;
		console.log(test);

		const a = 10;
		console.log(a);
	}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	private obj = {
		test: 1
	};


}
