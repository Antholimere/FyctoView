import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Landing from './Landing';

describe('Landing Page', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Landing />).contains(<i className="material-icons">file_download</i>)).toBe(true);
  });
});
