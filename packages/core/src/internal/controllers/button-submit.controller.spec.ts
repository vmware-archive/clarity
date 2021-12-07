import { html, LitElement } from 'lit';
import { customElement, property, buttonSubmit } from '@cds/core/internal';
import { componentIsStable, createTestElement, emulatedClick, onceEvent, removeTestElement } from '@cds/core/test';

@buttonSubmit<ButtonSubmitControllerTestElement>()
@customElement('button-submit-controller-test-element')
class ButtonSubmitControllerTestElement extends LitElement {
  @property({ type: String }) name: string;
  @property({ type: String }) value: string;
  @property({ type: Boolean }) disabled: boolean;
  @property({ type: String }) type: 'button' | 'submit';
  @property({ type: Boolean }) readonly: boolean;
}

describe('button-submit.controller', () => {
  let button: ButtonSubmitControllerTestElement;
  let buttonInForm: ButtonSubmitControllerTestElement;
  let submitButtonInForm: ButtonSubmitControllerTestElement;
  let element: HTMLElement;
  let form: HTMLFormElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`
        <button-submit-controller-test-element></button-submit-controller-test-element>
        <form>
          <button-submit-controller-test-element type="button"></button-submit-controller-test-element>
          <button-submit-controller-test-element></button-submit-controller-test-element>
        </form>
      `
    );

    form = element.querySelector('form');
    form.addEventListener('submit', e => e.preventDefault());
    button = element.querySelectorAll<ButtonSubmitControllerTestElement>('button-submit-controller-test-element')[0];
    buttonInForm = element.querySelectorAll<ButtonSubmitControllerTestElement>(
      'button-submit-controller-test-element'
    )[1];
    submitButtonInForm = element.querySelectorAll<ButtonSubmitControllerTestElement>(
      'button-submit-controller-test-element'
    )[2];
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should set the button type to submit if not defined and in a form element', async () => {
    await componentIsStable(button);
    expect(button.type).toBe(undefined);
    expect(buttonInForm.type).toBe('button');
    expect(submitButtonInForm.type).toBe('submit');
  });

  it('should add or remove button event listeners when readonly updates', async () => {
    await componentIsStable(submitButtonInForm);
    expect(submitButtonInForm.readonly).toBe(undefined);

    spyOn(submitButtonInForm, 'removeEventListener').and.callThrough();
    submitButtonInForm.readonly = true;
    await componentIsStable(submitButtonInForm);
    expect(submitButtonInForm.removeEventListener).toHaveBeenCalledWith('click', jasmine.any(Function));
    expect(submitButtonInForm.removeEventListener).toHaveBeenCalledWith('keyup', jasmine.any(Function));

    spyOn(submitButtonInForm, 'addEventListener').and.callThrough();
    submitButtonInForm.readonly = false;
    await componentIsStable(submitButtonInForm);
    expect(submitButtonInForm.addEventListener).toHaveBeenCalledWith('click', jasmine.any(Function));
    expect(submitButtonInForm.addEventListener).toHaveBeenCalledWith('keyup', jasmine.any(Function));
  });

  it('should work with form elements when clicked; defaults to type="submit"', async () => {
    await componentIsStable(submitButtonInForm);
    const event = onceEvent(form, 'submit');
    emulatedClick(submitButtonInForm);
    expect((await event) instanceof SubmitEvent).toBe(true);
  });

  it('should work with form elements when clicked via keyboard; defaults to type="submit"', async () => {
    await componentIsStable(submitButtonInForm);
    const event = onceEvent(form, 'submit');
    submitButtonInForm.focus();
    submitButtonInForm.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    expect((await event) instanceof SubmitEvent).toBe(true);
  });

  it('should not interact with form elements if type is button', async () => {
    submitButtonInForm.type = 'button';
    await componentIsStable(submitButtonInForm);
    const o = {
      f: () => {
        // Do nothing
      },
    };
    spyOn(o, 'f');
    form.addEventListener('submit', o.f);
    submitButtonInForm.click();
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    submitButtonInForm.focus();
    submitButtonInForm.dispatchEvent(event);
    expect(o.f).not.toHaveBeenCalled();
  });

  it('should handle dynamic changes in button type', async () => {
    const o = {
      f: () => {
        // Do nothing
      },
    };
    spyOn(o, 'f');

    // change from default (implicit "submit") to type="button"
    submitButtonInForm.type = 'button';
    await componentIsStable(submitButtonInForm);
    form.addEventListener('submit', o.f);
    emulatedClick(submitButtonInForm);
    expect(o.f).not.toHaveBeenCalled();

    // change from type="button" to type="submit"
    submitButtonInForm.type = 'submit';
    await componentIsStable(submitButtonInForm);
    form.removeEventListener('submit', o.f);
    emulatedClick(submitButtonInForm);

    // change from type="submit" to type="button"
    submitButtonInForm.type = 'button';
    await componentIsStable(submitButtonInForm);
    form.addEventListener('submit', o.f);
    emulatedClick(submitButtonInForm);
    expect(o.f).not.toHaveBeenCalled();
  });

  it('should not interact with form elements if disabled (1)', async () => {
    submitButtonInForm.disabled = true;
    await componentIsStable(submitButtonInForm);
    const o = {
      f: () => {
        // Do nothing
      },
    };
    spyOn(o, 'f');
    form.addEventListener('submit', o.f);
    expect(o.f).not.toHaveBeenCalled();
  });

  it('should not interact with form elements if disabled (2)', async () => {
    submitButtonInForm.disabled = true;
    await componentIsStable(submitButtonInForm);
    const o = {
      f: () => {
        // Do nothing
      },
    };
    spyOn(o, 'f');
    form.addEventListener('submit', o.f);
    expect(o.f).not.toHaveBeenCalled();
  });
});
