import { helper } from '@ember/component/helper';

export default helper(function compare(positional /*, named*/) {
  if (positional[0] === positional[1]) {
    return true;
  } else {
    return false;
  }
});
