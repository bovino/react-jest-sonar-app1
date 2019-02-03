import React from 'react';
import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import App2 from './App2';

// poder setup global se preferir 
// Enzyme.configure({adapter: new Adapter()});

test('shallow render basicao', () => {
  const props = {}
  const wrapper = shallow(<App2 {...props} />);
  console.log('::: DEBUG ::: ' + wrapper.debug());
  expect(wrapper).toMatchSnapshot();
})

test('buscando  Header e Content', () => {
  const props = {}
  const wrapper = shallow(<App2 {...props} />);
  expect(wrapper.find('Header')).toEqual(true);
  expect(wrapper.find('Content')).toEqual(true);
})
