import { capitalize } from '../';

describe('string', () => {

  describe('capitalize', () => {

    test('should transform a sentence', () => {
      const result = capitalize('this is a test');

      expect(result).toEqual('This is a test');
    });

  });

});
