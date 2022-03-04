import AdminEditor from '../form/AdminEditor.vue';
import { mount } from '@vue/test-utils';

describe('AdminEditor', () => {
  describe('interaction with fileUpload', () => {
    const wrapper = mount(AdminEditor);
    const setFile = jest.fn();
    it('onChangeFile fn should can invoke the custom event', () => {
      const event = { size: 1000, type: 'image/png', name: 'cover.png' };

      wrapper.setMethods({ setFile });

      const fileComponent = wrapper.find('[data-test=file-upload-component]');
      fileComponent.vm.$emit('on-change-file', event);
      expect(setFile).toHaveBeenCalledWith(event);
    });
  });
});
