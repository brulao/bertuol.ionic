import { NgModule } from '@angular/core';
import { DateFormatPipe } from './date-format/date-format';
import { DateTimeFormatPipe } from './date-time-format/date-time-format';
@NgModule({
	declarations: [DateFormatPipe,
    DateTimeFormatPipe],
	imports: [],
	exports: [DateFormatPipe,
    DateTimeFormatPipe]
})
export class PipesModule {}
