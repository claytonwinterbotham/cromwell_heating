// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
//import { faMoneyBill } from '@fortawesome/pro-solid-svg-icons';
import { faLeaf, faDollarSign, faTag, faQuestionCircle, faFire, faFan, faShower } from '@fortawesome/pro-light-svg-icons/'
//import { faCode, faHighlighter } from '@fortawesome/free-regular-svg-icons';

export const fontawesome = library.add(
  faLeaf,
  faDollarSign,
  faTag,
  faQuestionCircle,
  faFire,
  faFan,
  faShower
  // more icons go here
);