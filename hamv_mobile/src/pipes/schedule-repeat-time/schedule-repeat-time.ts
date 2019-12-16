import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
    name: 'scheduleRepeatTime'
})
export class ScheduleRepeatTime implements PipeTransform {
    constructor(
        private translate: TranslateService,
    ) {
    }

    public transform({ days, active_until }, args?: any[]): string {
        if (!days || days.length === 0 || (active_until > 0 && days.length === 1)) return '';
        if (days.length === 7) { return this.translate.instant('SCHEDULE_REPEAT_TIME.EVERY_DAY'); }
        let s: string = '';
        days.sort();
        if (days.length === 2 && days.every(day => day >= 6)) return this.translate.instant('SCHEDULE_REPEAT_TIME.WEEKENDS');
        if (days.length === 5 && days.every(day => day < 6)) return this.translate.instant('SCHEDULE_REPEAT_TIME.WEEKDAYS');

        if (days.length === 6 && days.every(day => day != 1)) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_MONDAY');
        if (days.length === 6 && days.every(day => day != 2)) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_TUESDAY');
        if (days.length === 6 && days.every(day => day != 3)) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_WEDNESDAY');
        if (days.length === 6 && days.every(day => day != 4)) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_THURSDAY');
        if (days.length === 6 && days.every(day => day != 5)) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_FRIDAY');
        if (days.length === 6 && days.every(day => day != 6)) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_SATURDAY');
        if (days.length === 6 && days.every(day => day != 7)) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_SUNDAY');

        if (days.length === 5 && days.every(day => (day != 1 && day != 2))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_MONDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.TUESDAY');
        if (days.length === 5 && days.every(day => (day != 1 && day != 3))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_MONDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.WEDNESDAY');
        if (days.length === 5 && days.every(day => (day != 1 && day != 4))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_MONDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.THURSDAY');
        if (days.length === 5 && days.every(day => (day != 1 && day != 5))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_MONDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.FRIDAY');
        if (days.length === 5 && days.every(day => (day != 1 && day != 6))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_MONDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.SATURDAY');
        if (days.length === 5 && days.every(day => (day != 1 && day != 7))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_MONDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.SUNDAY');

        if (days.length === 5 && days.every(day => (day != 2 && day != 3))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_TUESDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.WEDNESDAY');
        if (days.length === 5 && days.every(day => (day != 2 && day != 4))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_TUESDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.THURSDAY');
        if (days.length === 5 && days.every(day => (day != 2 && day != 5))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_TUESDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.FRIDAY');
        if (days.length === 5 && days.every(day => (day != 2 && day != 6))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_TUESDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.SATURDAY');
        if (days.length === 5 && days.every(day => (day != 2 && day != 7))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_TUESDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.SUNDAY');

        if (days.length === 5 && days.every(day => (day != 3 && day != 4))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_WEDNESDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.THURSDAY');
        if (days.length === 5 && days.every(day => (day != 3 && day != 5))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_WEDNESDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.FRIDAY');
        if (days.length === 5 && days.every(day => (day != 3 && day != 6))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_WEDNESDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.SATURDAY');
        if (days.length === 5 && days.every(day => (day != 3 && day != 7))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_WEDNESDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.SUNDAY');

        if (days.length === 5 && days.every(day => (day != 4 && day != 5))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_THURSDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.FRIDAY');
        if (days.length === 5 && days.every(day => (day != 4 && day != 6))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_THURSDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.SATURDAY');
        if (days.length === 5 && days.every(day => (day != 4 && day != 7))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_THURSDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.SUNDAY');

        if (days.length === 5 && days.every(day => (day != 5 && day != 6))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_FRIDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.SATURDAY');
        if (days.length === 5 && days.every(day => (day != 5 && day != 7))) return this.translate.instant('SCHEDULE_REPEAT_TIME.WITHOUT_FRIDAY') + ',' + this.translate.instant('SCHEDULE_REPEAT_TIME.SUNDAY');

        days.forEach((current, index, array) => {
            current = +current;
            switch (current) {
                case 1:
                    s += this.translate.instant('SCHEDULE_REPEAT_TIME.MONDAY');
                    break;
                case 2:
                    s += this.translate.instant('SCHEDULE_REPEAT_TIME.TUESDAY');
                    break;
                case 3:
                    s += this.translate.instant('SCHEDULE_REPEAT_TIME.WEDNESDAY');
                    break;
                case 4:
                    s += this.translate.instant('SCHEDULE_REPEAT_TIME.THURSDAY');
                    break;
                case 5:
                    s += this.translate.instant('SCHEDULE_REPEAT_TIME.FRIDAY');
                    break;
                case 6:
                    s += this.translate.instant('SCHEDULE_REPEAT_TIME.SATURDAY');
                    break;
                case 7:
                    s += this.translate.instant('SCHEDULE_REPEAT_TIME.SUNDAY');
                    break;
            }
            if (current > 0 && current < 8 && index < array.length - 1) {
                s += ', ';
            }
        });
        return s;
    }
}
