import AdminEditor from '../input/AdminEditor.vue';
import { shallowMount } from '@vue/test-utils';

describe('AdminEditor', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AdminEditor, {
      data() {
        return {
          inputText: ''
        };
      }
    });
  });

  describe('input', () => {
    let input;
    let modalValue = (AdminEditor.data().inputText = 'Hello, world!');

    beforeEach(async () => {
      input = wrapper.find('.admin-editor__field');
      await input.setValue('Hello, world!');
    });

    it('it shuold be rendered by an input', () => {
      expect(input.is('input')).toBe(true);
    });
    it('it shuold be should update binding data of model from input text', () => {
      expect(input.element.value).toBe(modalValue);
    });
  });
});
