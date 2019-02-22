import { helper } from '@ember/component/helper';

export function upto(params) {
  let [ start, end ] = params;
  let numbers = [];
  for (let i=start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
}

export default helper(upto);
