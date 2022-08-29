import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, test, vi } from 'vitest';

import App from '../app.vue';

describe('app', () => {
  const alertMock = vi.spyOn(window, 'alert').mockImplementation((message) => console.log(message));

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should render button properly', () => {
    const component = mount(App);
    component.find('[data-test-id="button"]').trigger('click');

    expect(component.html()).toContain('<button data-test-id="button">Hello, World!</button>');
    expect(alertMock).toHaveBeenCalledWith('Hello, World!');
  });

});
