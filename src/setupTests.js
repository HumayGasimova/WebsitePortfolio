/**
* Libraries
*/

import { 
    configure 
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
* Test setup
*/

configure({ adapter: new Adapter() });
