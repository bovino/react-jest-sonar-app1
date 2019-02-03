import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import App2, {Header, Content} from './App2';

test('shallow render basicao', () => {
  const props = {};
  const wrapper = shallow(<App2 {...props} />);
  console.log('::: DEBUG Shallow Wrapper ::: ' + wrapper.debug());
  expect(wrapper).toMatchSnapshot();
})

test('buscando  Header e Content', () => {
  const props = {};
  const wrapper = shallow(<App2 {...props} />);
  expect(wrapper.find('Header').exists()).toBe(true);
  expect(wrapper.find('Content').exists()).toBe(true);
})

test('montar o componente', () => {
    const props = {};
    const wrapper = mount(<App2 {...props} />);
	console.log('::: DEBUG Mount Wrapper ::: ' + wrapper.debug());
    expect(wrapper.find('Header')).toHaveLength(1);
	expect(wrapper.find('Content')).toHaveLength(1);
});
