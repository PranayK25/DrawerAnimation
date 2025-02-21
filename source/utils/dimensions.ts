import {Dimensions} from 'react-native';

const {width: WINDOW_WIDTH} = Dimensions.get('window');

const guidelineBaseWidth = 360;

const scale = (size: number): number =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export {WINDOW_WIDTH, scale};
