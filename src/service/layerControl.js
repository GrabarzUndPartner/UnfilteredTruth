class LayerControl {
  constructor () {
    this.layers = new Map();
    this.layerVisible = 0;
  }

  show (name) {
    Array.from(this.layers.values()).forEach(layer => (layer.visible = false));
    this.layers.get(name).visible = true;
    this.layerVisible++;
  }

  close (name) {
    this.layers.get(name).visible = false;
    this.layerVisible--;
  }

  add (name, component) {
    this.layers.set(name, component);
  }

  remove (name) {
    this.layers.delete(name);
  }
}

export default new LayerControl();
