import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(matchesTab:any, term: string): any {
    if (term === undefined) {
      return matchesTab;
      }
      // condition sur teamOne et teamTwo
      return matchesTab.filter((obj)=> {
        return (obj.teamOne.toLowerCase().includes(term.toLowerCase()) 
        || obj.teamTwo.toLowerCase().includes(term.toLowerCase()));
        })
  }
}
