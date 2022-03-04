import FileUpload from '../FileUpload.vue';
import { mount } from '@vue/test-utils';

describe('FileUpload', () => {
  let wrapper = null;
  let fileInput = null;
  beforeEach(() => {
    wrapper = mount(FileUpload);
    fileInput = wrapper.find('[type=file]');
  });

  it('should calls onChange methods', async () => {
    wrapper.setMethods({
      onChange: jest.fn(),
    });
    await fileInput.trigger('change');
    expect(wrapper.vm.onChange).toHaveBeenCalled();
  });

  it('the event listener onChange should pass an the file from the event', () => {
    //stub out the event and file
    const file = { size: 1000, type: 'image/png', name: 'cover.png' };
    const event = {
      target: {
        files: [file],
      },
    };
    expect(wrapper.vm.takeFile(event)).toEqual(file);
  });
});
