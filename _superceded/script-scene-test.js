
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
	camera.position.set(0, -300, 1550);
	camera.position.z = 5;

	// Create renderer
	renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);

	// Create geometry
	// geometry = new THREE.BoxGeometry(1, 1, 1);

       

	// Create material
	// material = new THREE.MeshBasicMaterial({ color: 'plum' });
	function createMaterials(params) {
        const color = params&&params.color||0xff3333;
        const side = params&&params.side||THREE.DoubleSide;
      
        const disc =  new THREE.MeshStandardMaterial({
              color: color,
              flatShading: false,
              opacity: 0.5,
              transparent: true,
              side:side
          })
          // disc.color.convertSRGBToLinear();
          material = {
              disc
          }
          return material;
    	}

	// Create mesh
	// mesh = new THREE.Mesh(geometry, material);
	// scene.add(mesh);

	    function createMeshes() {
        
        const geometries = createGeometries();
        // const geometries = addRadii();
        const group = new THREE.Group();
      
 [THREE.BackSide, THREE.FrontSide].forEach(side=>{
        const meshes = [...new Array(15)]
        // .map((d,i)=>i)
        .map((d,i)=>{
          const geometries = createGeometries(discData[i]["radiusTop"]);
          const materials = createMaterials({
            color: discData[i]["color"],
            side:side
          });
          const mesh =  new THREE.Mesh(
            geometries.disc, 
            materials.disc
          );
          return mesh;
        })
        
        meshes.forEach((m,i)=>{
          const j = i;
          const m1 = j*10;
          m.position.set(0, m1, 0)
          group.add(m)
        })
  })
      
        discGroup = group;

        // Add the mesh to the scene
        scene.add(group);
        console.log('test meshes!')
    }

}

function animate() {
	requestAnimationFrame(animate);

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;

	renderer.render(scene, camera);
}

// functions
	function createGeometries(params) {
        const disc = new THREE.CylinderGeometry(params, params, 5, 64 );  
        return {
            disc
        }