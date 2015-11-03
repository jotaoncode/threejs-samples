var app = {
  start: function () {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00f00
    });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);
    this.camera.z = 5;
    this.render = function () {
      this.cube.rotation.x += 0.1;
      this.cube.rotation.y += 0.1;
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render.bind(this));
    };

    this.render();
  }
};
