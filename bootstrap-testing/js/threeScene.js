
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// import { DoubleSide } from "../node_modules/three/build/three.module.js";
// import * as THREE_ADDONS from "../node_modules/three-addons";
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
let rawData =[
  [ {year:2023,type:"multiracial",radiusTop:10,radiusBottom:10,color:"black"},
    {year:2023,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"},
    {year:2023,type:"white",radiusTop:100,radiusBottom:100,color:"white"}
  ],
  [ {year:2022,type:"multiracial",radiusTop:7,radiusBottom:7,color:"black"},
    {year:2022,type:"white",radiusTop:100,radiusBottom:100,color:"white"},
    {year:2022,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"}
  ],
  [ {year:2021,type:"white",radiusTop:100,radiusBottom:100,color:"white"},
    {year:2021,type:"multiracial",radiusTop:7,radiusBottom:7,color:"black"},
    {year:2021,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"}
  ],
  [ {year:2020,type:"multiracial",radiusTop:5,radiusBottom:5,color:"black"},
    {year:2020,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"},
    {year:2020,type:"white",radiusTop:100,radiusBottom:100,color:"white"}
  ],
  [ {year:2019,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"},
    {year:2019,type:"white",radiusTop:100,radiusBottom:100,color:"white"},
    {year:2019,type:"multiracial",radiusTop:2,radiusBottom:2,color:"black"}
  ],
  [ {year:2023,type:"multiracial",radiusTop:10,radiusBottom:10,color:"black"},
  {year:2023,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"},
  {year:2023,type:"white",radiusTop:100,radiusBottom:100,color:"white"}
],
[ {year:2022,type:"multiracial",radiusTop:7,radiusBottom:7,color:"black"},
  {year:2022,type:"white",radiusTop:100,radiusBottom:100,color:"white"},
  {year:2022,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"}
],
[ {year:2021,type:"white",radiusTop:100,radiusBottom:100,color:"white"},
  {year:2021,type:"multiracial",radiusTop:7,radiusBottom:7,color:"black"},
  {year:2021,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"}
],
[ {year:2020,type:"multiracial",radiusTop:5,radiusBottom:5,color:"black"},
  {year:2020,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"},
  {year:2020,type:"white",radiusTop:100,radiusBottom:100,color:"white"}
],
[ {year:2019,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"},
  {year:2019,type:"white",radiusTop:100,radiusBottom:100,color:"white"},
  {year:2019,type:"multiracial",radiusTop:2,radiusBottom:2,color:"black"}
],
[ {year:2023,type:"multiracial",radiusTop:10,radiusBottom:10,color:"black"},
{year:2023,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"},
{year:2023,type:"white",radiusTop:100,radiusBottom:100,color:"white"}
],
[ {year:2022,type:"multiracial",radiusTop:7,radiusBottom:7,color:"black"},
{year:2022,type:"white",radiusTop:100,radiusBottom:100,color:"white"},
{year:2022,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"}
],
[ {year:2021,type:"white",radiusTop:100,radiusBottom:100,color:"white"},
{year:2021,type:"multiracial",radiusTop:7,radiusBottom:7,color:"black"},
{year:2021,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"}
],
[ {year:2020,type:"multiracial",radiusTop:5,radiusBottom:5,color:"black"},
{year:2020,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"},
{year:2020,type:"white",radiusTop:100,radiusBottom:100,color:"white"}
],
[ {year:2019,type:"poc",radiusTop:25,radiusBottom:25,color:"Fuchsia"},
{year:2019,type:"white",radiusTop:100,radiusBottom:100,color:"white"},
{year:2019,type:"multiracial",radiusTop:2,radiusBottom:2,color:"black"}
]
];
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
        camera = new THREE.PerspectiveCamera( 10, (window.innerWidth/2) / (window.innerHeight/2), 1, 6000 );
        // camera.position.set(0, 300, 500);
        // {x: 1112.7676355077217, y: 1278.949733627364, z: 2315.942070831095}
        camera.position.set(116, 1500, 1966);
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
        const disc = new THREE.CylinderGeometry(params, params, 5, 64 );  
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
          
          yOffset = i * 15 - j + 25 // adjust offset
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
        renderer.setSize( window.innerWidth, window.innerHeight );
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
    controls.addEventListener( "change", event => {  
      console.log( controls.object.position ); 
  }) 
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
