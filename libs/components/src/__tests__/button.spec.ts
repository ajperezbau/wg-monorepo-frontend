import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import { Button } from '../';

describe('button', () => {

  test('should render \'text\' prop', () => {
    const component = mount(Button, {
      props: {
        text: 'testing prop'
      }
    });

    expect(component.text()).toContain('Testing prop');
  });

  test('should render default slot', () => {
    const component = mount(Button, {
      props: {
        message: 'testing prop'
      },
      slots: {
        default: 'testing slot'
      }
    });

    expect(component.text()).toContain('testing slot');
  });

});
