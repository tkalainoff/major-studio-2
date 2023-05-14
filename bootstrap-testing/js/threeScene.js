
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// import { DoubleSide } from ../node_modules/three/build/three.module.js;
// import * as THREE_ADDONS from ../node_modules/three-addons;
// import { GLTFLoader } from '../node_modules/three-addons/node_modules/three/examples/js/loaders/GLTFLoader.js';

// Test if browser is compatible with WebGL and THREE.js

// import { WebGL } from 'three/addons/capabilities/WebGL.js';

// if ( WebGL.isWebGLAvailable() ) {

// 	// Initiate function or other initializations here
// 	animate();

// } else {

// 	const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );

// }

// data
let rawData = [
    [{
        year: 1993,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 1993,
        type: "poc",
        radiusTop: 1,
        ogData: 1,
        color: "fuchsia"
    },
    {
        year: 1993,
        type: "white",
        radiusTop: 10,
        ogData: 9,
        color: "white"
    }],
    [{
        year: 1994,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 1994,
        type: "poc",
        radiusTop: 1,
        ogData: 1,
        color: "fuchsia"
    },
    {
        year: 1994,
        type: "white",
        radiusTop: 5,
        ogData: 4,
        color: "white"
    }],
    [{
        year: 1995,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 1995,
        type: "poc",
        radiusTop: 2,
        ogData: 2,
        color: "fuchsia"
    },
    {
        year: 1995,
        type: "white",
        radiusTop: 10,
        ogData: 8,
        color: "white"
    }],
    [{
        year: 1996,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 1996,
        type: "poc",
        radiusTop: 2,
        ogData: 2,
        color: "fuchsia"
    },
    {
        year: 1996,
        type: "white",
        radiusTop: 10,
        ogData: 8,
        color: "white"
    }],
    [{
        year: 1997,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 1997,
        type: "poc",
        radiusTop: 2,
        ogData: 2,
        color: "fuchsia"
    },
    {
        year: 1997,
        type: "white",
        radiusTop: 15,
        ogData: 13,
        color: "white"
    }],
    [{
        year: 1998,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 1998,
        type: "poc",
        radiusTop: 2,
        ogData: 2,
        color: "fuchsia"
    },
    {
        year: 1998,
        type: "white",
        radiusTop: 10,
        ogData: 8,
        color: "white"
    }],
    [{
        year: 1999,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 1999,
        type: "poc",
        radiusTop: 2,
        ogData: 2,
        color: "fuchsia"
    },
    {
        year: 1999,
        type: "white",
        radiusTop: 16,
        ogData: 14,
        color: "white"
    }],
    [{
        year: 2000,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 2000,
        type: "poc",
        radiusTop: 3,
        ogData: 3,
        color: "fuchsia"
    },
    {
        year: 2000,
        type: "white",
        radiusTop: 10,
        ogData: 7,
        color: "white"
    }],
    [{
        year: 2001,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 2001,
        type: "poc",
        radiusTop: 2,
        ogData: 2,
        color: "fuchsia"
    },
    {
        year: 2001,
        type: "white",
        radiusTop: 17,
        ogData: 15,
        color: "white"
    }],
    [{
        year: 2002,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 2002,
        type: "poc",
        radiusTop: 2,
        ogData: 2,
        color: "fuchsia"
    },
    {
        year: 2002,
        type: "white",
        radiusTop: 13,
        ogData: 11,
        color: "white"
    }],
    [{
        year: 2003,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 2003,
        type: "poc",
        radiusTop: 4,
        ogData: 4,
        color: "fuchsia"
    },
    {
        year: 2003,
        type: "white",
        radiusTop: 24,
        ogData: 20,
        color: "white"
    }],
    [{
        year: 2004,
        type: "mixed",
        radiusTop: 1,
        ogData: 1,
        color: "black"
    },
    {
        year: 2004,
        type: "poc",
        radiusTop: 6,
        ogData: 5,
        color: "fuchsia"
    },
    {
        year: 2004,
        type: "white",
        radiusTop: 23,
        ogData: 17,
        color: "white"
    }],
    [{
        year: 2005,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 2005,
        type: "poc",
        radiusTop: 3,
        ogData: 3,
        color: "fuchsia"
    },
    {
        year: 2005,
        type: "white",
        radiusTop: 24,
        ogData: 21,
        color: "white"
    }],
    [{
        year: 2006,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 2006,
        type: "poc",
        radiusTop: 4,
        ogData: 4,
        color: "fuchsia"
    },
    {
        year: 2006,
        type: "white",
        radiusTop: 21,
        ogData: 17,
        color: "white"
    }],
    [{
        year: 2007,
        type: "mixed",
        radiusTop: 2,
        ogData: 2,
        color: "black"
    },
    {
        year: 2007,
        type: "poc",
        radiusTop: 5,
        ogData: 3,
        color: "fuchsia"
    },
    {
        year: 2007,
        type: "white",
        radiusTop: 25,
        ogData: 20,
        color: "white"
    }],
    [{
        year: 2008,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 2008,
        type: "poc",
        radiusTop: 1,
        ogData: 1,
        color: "fuchsia"
    },
    {
        year: 2008,
        type: "white",
        radiusTop: 18,
        ogData: 17,
        color: "white"
    }],
    [{
        year: 2009,
        type: "mixed",
        radiusTop: 1,
        ogData: 1,
        color: "black"
    },
    {
        year: 2009,
        type: "poc",
        radiusTop: 6,
        ogData: 5,
        color: "fuchsia"
    },
    {
        year: 2009,
        type: "white",
        radiusTop: 37,
        ogData: 31,
        color: "white"
    }],
    [{
        year: 2010,
        type: "mixed",
        radiusTop: 1,
        ogData: 1,
        color: "black"
    },
    {
        year: 2010,
        type: "poc",
        radiusTop: 4,
        ogData: 3,
        color: "fuchsia"
    },
    {
        year: 2010,
        type: "white",
        radiusTop: 31,
        ogData: 27,
        color: "white"
    }],
    [{
        year: 2011,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 2011,
        type: "poc",
        radiusTop: 7,
        ogData: 7,
        color: "fuchsia"
    },
    {
        year: 2011,
        type: "white",
        radiusTop: 51,
        ogData: 44,
        color: "white"
    }],
    [{
        year: 2012,
        type: "mixed",
        radiusTop: 1,
        ogData: 1,
        color: "black"
    },
    {
        year: 2012,
        type: "poc",
        radiusTop: 11,
        ogData: 10,
        color: "fuchsia"
    },
    {
        year: 2012,
        type: "white",
        radiusTop: 39,
        ogData: 28,
        color: "white"
    }],
    [{
        year: 2013,
        type: "mixed",
        radiusTop: 2,
        ogData: 2,
        color: "black"
    },
    {
        year: 2013,
        type: "poc",
        radiusTop: 5,
        ogData: 3,
        color: "fuchsia"
    },
    {
        year: 2013,
        type: "white",
        radiusTop: 46,
        ogData: 41,
        color: "white"
    }],
    [{
        year: 2014,
        type: "mixed",
        radiusTop: 0,
        ogData: 0,
        color: "black"
    },
    {
        year: 2014,
        type: "poc",
        radiusTop: 15,
        ogData: 15,
        color: "fuchsia"
    },
    {
        year: 2014,
        type: "white",
        radiusTop: 60,
        ogData: 45,
        color: "white"
    }],
    [{
        year: 2015,
        type: "mixed",
        radiusTop: 2,
        ogData: 2,
        color: "black"
    },
    {
        year: 2015,
        type: "poc",
        radiusTop: 16,
        ogData: 14,
        color: "fuchsia"
    },
    {
        year: 2015,
        type: "white",
        radiusTop: 57,
        ogData: 41,
        color: "white"
    }],
    [{
        year: 2016,
        type: "mixed",
        radiusTop: 1,
        ogData: 1,
        color: "black"
    },
    {
        year: 2016,
        type: "poc",
        radiusTop: 14,
        ogData: 13,
        color: "fuchsia"
    },
    {
        year: 2016,
        type: "white",
        radiusTop: 54,
        ogData: 40,
        color: "white"
    }],
    [{
        year: 2017,
        type: "mixed",
        radiusTop: 2,
        ogData: 2,
        color: "black"
    },
    {
        year: 2017,
        type: "poc",
        radiusTop: 12,
        ogData: 10,
        color: "fuchsia"
    },
    {
        year: 2017,
        type: "white",
        radiusTop: 58,
        ogData: 46,
        color: "white"
    }],
    [{
        year: 2018,
        type: "mixed",
        radiusTop: 1,
        ogData: 1,
        color: "black"
    },
    {
        year: 2018,
        type: "poc",
        radiusTop: 17,
        ogData: 16,
        color: "fuchsia"
    },
    {
        year: 2018,
        type: "white",
        radiusTop: 54,
        ogData: 37,
        color: "white"
    }],
    [{
        year: 2019,
        type: "mixed",
        radiusTop: 1,
        ogData: 1,
        color: "black"
    },
    {
        year: 2019,
        type: "poc",
        radiusTop: 17,
        ogData: 16,
        color: "fuchsia"
    },
    {
        year: 2019,
        type: "white",
        radiusTop: 56,
        ogData: 39,
        color: "white"
    }],
    [{
        year: 2020,
        type: "mixed",
        radiusTop: 4,
        ogData: 4,
        color: "black"
    },
    {
        year: 2020,
        type: "poc",
        radiusTop: "26",
        ogData: 22,
        color: "fuchsia"
    },
    {
        year: 2020,
        type: "white",
        radiusTop: 63,
        ogData: 37,
        color: "white"
    }],
    [{
        year: 2021,
        type: "mixed",
        radiusTop: 2,
        ogData: 2,
        color: "black"
    },
    {
        year: 2021,
        type: "poc",
        radiusTop: 22,
        ogData: 20,
        color: "fuchsia"
    },
    {
        year: 2021,
        type: "white",
        radiusTop: 52,
        ogData: 30,
        color: "white"
    }],
    [{
        year: 2022,
        type: "mixed",
        radiusTop: 2,
        ogData: 2,
        color: "black"
    },
    {
        year: 2022,
        type: "poc",
        radiusTop: 14,
        ogData: 12,
        color: "fuchsia"
    },
    {
        year: 2022,
        type: "white",
        radiusTop: 59,
        ogData: 45,
        color: "white"
    }]
]


// let discData = d3.groups(rawData, d => d.year)
// console.log(discData)

// create scene and objects

    let camera,
        renderer,
        scene,
        controls,
        formGroup,
        invalidation,
        discMesh,
        discGroup, 
        folder,
        renderOnDemand=true,
        renderRequested=false,
        mainLight,
        material,
        width=500,
        height=500;
  
    init();


    function createCamera() {
        // Create a Camera
        const fov = 30; // AKA Field of View  
        const aspect = width / height;
        const near = 0.5; // the near clipping plane
        const far = 6000; // the far clipping plane

        // camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera = new THREE.PerspectiveCamera( 10, (window.innerWidth/1.5) / (window.innerHeight/1.5), 1, 6000 );
        // camera.position.set(0, 300, 500);
        // {x: 1112.7676355077217, y: 1278.949733627364, z: 2315.942070831095}
        camera.position.set(0, 1200, 800);
        camera.lookAt(new THREE.Vector3(0,0,0)); // Set look at coordinate like this
        // camera.position.set(10, 10, 10);

        // camera.position.z = 10;
        console.log('test cameras!')
    } 
    
    function createLights() {
        // Create a directional light
        const ambientLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 9);
        mainLight = new THREE.DirectionalLight(0xffffff, 3.0);
        scene.add(ambientLight);

        // move the light back and up a bit
        mainLight.position.set(10, 10, 10);

        // remember to add the light to the scene
        scene.add(ambientLight, mainLight);
        console.log('test lights!')
    }

    function createMaterials(params) {
          const color = params&&params.color||0xff3333;
          const side = params&&params.side||THREE.DoubleSide;
      
          const disc =  new THREE.MeshStandardMaterial({
              color: color,
              flatShading: false,
              opacity: 0.18,
              transparent: true,
              side:side
          })
          // disc.color.convertSRGBToLinear();
          material = {
              disc
          }
          return material;
    }
  
    function createGeometries(params) {
        const disc = new THREE.CylinderGeometry(params, params, 3, 64 );  
        return {
            disc
        }
        
    }

    //  New function2
    function createMeshes() {

      let yOffset = 0
      let geometries = createGeometries();
      let materials = createMaterials();
      formGroup = new THREE.Group(); // create form group

      const discs = rawData.map((year, i) => {  // loop through each year

        const meshes = year.map((yearObjects, j) => { // loop through each cylinder (3)
          
          yOffset = i * 7 - j + 20 // adjust offset
          const discGroup = new THREE.Group(); // create disc group for each year
          // geometries
          geometries = createGeometries(yearObjects["radiusTop"]);
          // materials
          materials = createMaterials({
            color: yearObjects["color"],
            side: THREE.DoubleSide
          });
          // mesh
          const mesh = new THREE.Mesh(
            geometries.disc,
            materials.disc
          );
    
          discGroup.add(mesh) // add each mesh to disc group
          console.log('cylinder added to disc!')

          discGroup.position.set(0, yOffset, 0) // set the position of each disc group
          console.log('position set!')

          formGroup.add(discGroup) // add each disc to the form group
        });

      });
    
      scene.add(formGroup); // add the form group to the scene
      console.log('test meshes!')
    }

    function createRenderer() {
        // create the renderer
        renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        // renderer.setSize(width, height);
        renderer.setSize( (window.innerWidth/1.5), (window.innerHeight/1.5) );
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.gammaFactor = 2.2;
        renderer.gammaOutput = true;
        renderer.useLegacyLights = true;
        
        // add a HTML element to it 
        const container = document.getElementById('three-container');
        container.appendChild( renderer.domElement );
        console.log('test renderers!')

    }
  
    function init() {
          // create a Scene
          scene = new THREE.Scene();
  
          // Set the background color
          scene.background = new THREE.Color('powderblue');
  
          createCamera();
          createLights();
          createMeshes();
          createRenderer();
          console.log('test init!')
  
          controls = new OrbitControls(camera, renderer.domElement);
          // invalidation.then(() => (controls.dispose(), renderer.dispose()));
     }
  
    function render() {
        renderer.render(scene, camera);
        // console.log('test render!')
    }
  
    function update() {
       /*********** PUT ANIMATION LOGIC HERE **********/
      //  discGroup.rotation.x += 0.01;
      //  discGroup.rotation.y += 0.01;
      //  discGroup.rotation.z += 0.01;

      //  formGroup.rotation.x += 0.01;
      //  formGroup.rotation.y += 0.01;
      //  formGroup.rotation.z += 0.01;
       /***********************************************/
    }
  
    function onWindowResize() {
        camera.aspect = width / height;;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height)
        console.log('test onWindowResize!')
    }
  
    window.addEventListener('resize', onWindowResize)
  //   controls.addEventListener(change, event => {  
  //     console.log( controls.object.position ); 
  // }) 
    function animationLoop(){
      update();
      render();
      // console.log('test animationLoop!')
      // controls.update()
    }
    
    renderer.domElement
    controls.update()
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.1;
    renderer.setAnimationLoop(animationLoop)
    
    // invalidation.then(() => {
    //   controls.dispose();
    //   renderer.dispose();
    //   window.removeEventListener('resize', onWindowResize);
    // });
