import { atom} from 'recoil';
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'input form', // default value (aka initial value)
});

export {textState};
