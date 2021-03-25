import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.use(reactotronRedux())
  .configure()
  .useReactNative()
  .connect();

export default reactotron;
