
// threejs scene

var scene, camera, renderer, geometry, material, mesh;

init();
animate();

function init() {
	// Create scene
	scene = new THREE.Scene();
    scene.background = new THREE.Color('powderblue');

	// Create camera
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 5;

	// Create renderer
	renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);

	// Create geometry
	geometry = new THREE.BoxGeometry(1, 1, 1);

	// Create material
	material = new THREE.MeshBasicMaterial({ color: 'plum' });

	// Create mesh
	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);
}

function animate() {
	requestAnimationFrame(animate);

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;

	renderer.render(scene, camera);
}

