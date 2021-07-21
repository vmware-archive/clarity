import { html, LitElement } from 'lit';
import { customElement, layer, LayerController } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@layer<LayerControllerTestElement>()
@customElement('layer-controller-test-element')
class LayerControllerTestElement extends LitElement {
  layerController: LayerController<this>;
}

describe('layer.controller', () => {
  let componentOne: LayerControllerTestElement;
  let componentTwo: LayerControllerTestElement;
  let componentThree: LayerControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html` <layer-controller-test-element three hidden></layer-controller-test-element>
        <layer-controller-test-element one></layer-controller-test-element>
        <layer-controller-test-element two hidden></layer-controller-test-element>`
    );
    componentOne = element.querySelector<LayerControllerTestElement>('[one]');
    componentTwo = element.querySelector<LayerControllerTestElement>('[two]');
    componentThree = element.querySelector<LayerControllerTestElement>('[three]');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should mark last layer as active', async () => {
    await componentIsStable(componentOne);
    await componentIsStable(componentTwo);

    expect(componentOne.layerController.isActiveLayer).toBe(true);
    expect(componentTwo.layerController.isActiveLayer).toBe(false);

    componentTwo.hidden = false;
    await componentIsStable(componentOne);
    await componentIsStable(componentTwo);

    expect(componentOne.layerController.isActiveLayer).toBe(false);
    expect(componentTwo.layerController.isActiveLayer).toBe(true);
  });

  it('should set the layer index with the starting layer at 0', async () => {
    await componentIsStable(componentOne);
    await componentIsStable(componentTwo);

    expect(componentOne.layerController.layerIndex).toBe(0);
    expect(componentTwo.layerController.layerIndex).toBe(null);

    expect(componentOne.getAttribute('cds-layer')).toBe('0');
    expect(componentTwo.getAttribute('cds-layer')).toBe(null);

    componentTwo.hidden = false;
    await componentIsStable(componentOne);
    await componentIsStable(componentTwo);

    expect(componentOne.layerController.layerIndex).toBe(0);
    expect(componentTwo.layerController.layerIndex).toBe(1);

    expect(componentOne.getAttribute('cds-layer')).toBe('0');
    expect(componentTwo.getAttribute('cds-layer')).toBe('1');
  });

  it('should set the cds-layer attr index with the starting layer at 0', async () => {
    await componentIsStable(componentOne);
    await componentIsStable(componentTwo);

    expect(componentOne.getAttribute('cds-layer')).toBe('0');
    expect(componentTwo.getAttribute('cds-layer')).toBe(null);

    componentTwo.hidden = false;
    await componentIsStable(componentOne);
    await componentIsStable(componentTwo);

    expect(componentOne.getAttribute('cds-layer')).toBe('0');
    expect(componentTwo.getAttribute('cds-layer')).toBe('1');
  });

  it('should set the layers based on order they are active not DOM order', async () => {
    // show layer one
    await componentIsStable(componentOne);
    await componentIsStable(componentTwo);
    await componentIsStable(componentThree);
    expect(componentOne.layerController.isActiveLayer).toBe(true);
    expect(componentTwo.layerController.isActiveLayer).toBe(false);
    expect(componentThree.layerController.isActiveLayer).toBe(false);
    expect(componentOne.layerController.layerIndex).toBe(0);
    expect(componentTwo.layerController.layerIndex).toBe(null);
    expect(componentThree.layerController.layerIndex).toBe(null);
    expect(componentOne.getAttribute('cds-layer')).toBe('0');
    expect(componentTwo.getAttribute('cds-layer')).toBe(null);
    expect(componentThree.getAttribute('cds-layer')).toBe(null);

    // show layer two
    componentTwo.hidden = false;
    await componentIsStable(componentOne);
    await componentIsStable(componentTwo);
    await componentIsStable(componentThree);
    expect(componentOne.layerController.isActiveLayer).toBe(false);
    expect(componentTwo.layerController.isActiveLayer).toBe(true);
    expect(componentThree.layerController.isActiveLayer).toBe(false);
    expect(componentOne.layerController.layerIndex).toBe(0);
    expect(componentTwo.layerController.layerIndex).toBe(1);
    expect(componentThree.layerController.layerIndex).toBe(null);
    expect(componentOne.getAttribute('cds-layer')).toBe('0');
    expect(componentTwo.getAttribute('cds-layer')).toBe('1');
    expect(componentThree.getAttribute('cds-layer')).toBe(null);

    // show layer three
    componentThree.hidden = false;
    await componentIsStable(componentOne);
    await componentIsStable(componentTwo);
    await componentIsStable(componentThree);
    expect(componentOne.layerController.isActiveLayer).toBe(false);
    expect(componentTwo.layerController.isActiveLayer).toBe(false);
    expect(componentThree.layerController.isActiveLayer).toBe(true);
    expect(componentOne.layerController.layerIndex).toBe(0);
    expect(componentTwo.layerController.layerIndex).toBe(1);
    expect(componentThree.layerController.layerIndex).toBe(2);
    expect(componentOne.getAttribute('cds-layer')).toBe('0');
    expect(componentTwo.getAttribute('cds-layer')).toBe('1');
    expect(componentThree.getAttribute('cds-layer')).toBe('2');

    // hide layer two
    componentTwo.hidden = true;
    await componentIsStable(componentOne);
    await componentIsStable(componentTwo);
    await componentIsStable(componentThree);
    expect(componentOne.layerController.isActiveLayer).toBe(false);
    expect(componentTwo.layerController.isActiveLayer).toBe(false);
    expect(componentThree.layerController.isActiveLayer).toBe(true);
    expect(componentOne.layerController.layerIndex).toBe(0);
    expect(componentTwo.layerController.layerIndex).toBe(null);
    expect(componentThree.layerController.layerIndex).toBe(1);
    expect(componentOne.getAttribute('cds-layer')).toBe('0');
    expect(componentTwo.getAttribute('cds-layer')).toBe(null);
    expect(componentThree.getAttribute('cds-layer')).toBe('1');
  });
});
