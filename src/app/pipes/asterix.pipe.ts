import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {
// ch= "houda"=> "h**d*"
transform(ch: string) {
  let result: string = "";
  let x :any;
  let voyels = ["a", "e", "u", "i", "o", "y"];
  for (let i = 0; i < ch.length; i++) {
    x = ch[i];
    for (let j = 0; j < voyels.length; j++) {
     if (ch[i].toLowerCase() == voyels[j]) {
      x = "*";
      break;
     } 
    }
    result = result + x;
  }
  return result;
}
}
