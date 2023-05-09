
/*global d3*/
// import * as d3 from "../node_modules/d3/dist/d3.js"
import * as d3 from 'https://unpkg.com/d3?module'
// import * as THREE from 'three';
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import * as THREE from "../node_modules/three/build/three.module.js";
// import * as THREE_ADDONS from "../node_modules/three-addons";
// import { OrbitControls } from '/node_modules/three-addons/node_modules/three/examples/js/controls/OrbitControls.js';
// import { GLTFLoader } from 'node_modules/three-addons/node_modules/three/examples/js/loaders/GLTFLoader.js';

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

// const rawData = [
//     [{
//       year: 2023,
//       type: "multiracial",
//       radiusTop: 10, 
//       radiusBottom: 10, 
//       color: "black"
//     },
//     {
//       year: 2023,
//       type: "poc",
//       radiusTop: 25, 
//       radiusBottom: 25, 
//       color: "plum"
//     },
//     {
//       year: 2023,
//       type: "white",
//       radiusTop: 100, 
//       radiusBottom: 100, 
//       color: "white"
//     }],
//     [{
//       year: 2022,
//       type: "multiracial",
//       radiusTop: 7, 
//       radiusBottom: 7, 
//       color: "black"
//     },
//     {
//       year: 2022,
//       type: "poc",
//       radiusTop: 25, 
//       radiusBottom: 25, 
//       color: "plum"
//     },
//     {
//       year: 2022,
//       type: "white",
//       radiusTop: 100, 
//       radiusBottom: 100, 
//       color: "white"
//     }],
//     [{
//       year: 2021,
//       type: "multiracial",
//       radiusTop: 7, 
//       radiusBottom: 7, 
//       color: "black"
//     },
//     {
//       year: 2021,
//       type: "poc",
//       radiusTop: 25, 
//       radiusBottom: 25, 
//       color: "plum"
//     },
//     {
//       year: 2021,
//       type: "white",
//       radiusTop: 100, 
//       radiusBottom: 100, 
//       color: "white"
//     }],

//     [{
//       year: 2020,
//       type: "multiracial",
//       radiusTop: 5, 
//       radiusBottom: 5, 
//       color: "black"
//     },
//     {
//       year: 2020,
//       type: "poc",
//       radiusTop: 25, 
//       radiusBottom: 25, 
//       color: "plum"
//     },
//     {
//       year: 2020,
//       type: "white",
//       radiusTop: 100, 
//       radiusBottom: 100, 
//       color: "white"
//     }]
//     {
//       year: 2019,
//       type: "multiracial",
//       radiusTop: 2, 
//       radiusBottom: 2, 
//       color: "black"
//     },
    
    
    
    
//     {
//       year: 2019,
//       type: "poc",
//       radiusTop: 25, 
//       radiusBottom: 25, 
//       color: "plum"
//     },
    
    
    
    
//     {
//       year: 2019,
//       type: "white",
//       radiusTop: 100, 
//       radiusBottom: 100, 
//       color: "white"
//     }
//     ]
let rawData =[[{year:2023,type:"multiracial",radiusTop:10,radiusBottom:10,color:"black"},{year:2023,type:"poc",radiusTop:25,radiusBottom:25,color:"plum"},{year:2023,type:"white",radiusTop:100,radiusBottom:100,color:"white"}],[{year:2022,type:"multiracial",radiusTop:7,radiusBottom:7,color:"black"},{year:2022,type:"white",radiusTop:100,radiusBottom:100,color:"white"},{year:2022,type:"poc",radiusTop:25,radiusBottom:25,color:"plum"}],[{year:2021,type:"white",radiusTop:100,radiusBottom:100,color:"white"},{year:2021,type:"multiracial",radiusTop:7,radiusBottom:7,color:"black"},{year:2021,type:"poc",radiusTop:25,radiusBottom:25,color:"plum"}],[{year:2020,type:"multiracial",radiusTop:5,radiusBottom:5,color:"black"},{year:2020,type:"poc",radiusTop:25,radiusBottom:25,color:"plum"},{year:2020,type:"white",radiusTop:100,radiusBottom:100,color:"white"}],[{year:2019,type:"poc",radiusTop:25,radiusBottom:25,color:"plum"},{year:2019,type:"white",radiusTop:100,radiusBottom:100,color:"white"},{year:2019,type:"multiracial",radiusTop:2,radiusBottom:2,color:"black"}]];
// let discData = d3.groups(rawData, d => d.year)
// console.log(discData)

// create scene and objects

    let camera,
        renderer,
        scene,
        controls,
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
        const fov = 15; // AKA Field of View  
        const aspect = width / height;
        const near = 0.5; // the near clipping plane
        const far = 6000; // the far clipping plane

        // camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 0.5, 6000 );
        camera.position.set(0, 0, 1550);
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
  
    function createGeometries(params) {
        const disc = new THREE.CylinderGeometry(params, params, 5, 64 );  
        return {
            disc
        }
        
    }
      
//     Original function
//     function createMeshes() {
        
//         const geometries = createGeometries();
//         // const geometries = addRadii();
//         const group = new THREE.Group();
      
//  [THREE.BackSide, THREE.FrontSide].forEach(side=>{
//         const meshes = [...new Array(15)]
//         // .map((d,i)=>i)
//         .map((d,i)=>{
//           // const geometries = createGeometries(radii[i]);
//           // const geometries = createGeometries(discsMultiracial[i]["radiusTop"], discsPoc[i]["radiusTop"]);
//           const geometries = createGeometries(discData[i]["radiusTop"]);
//           const materials = createMaterials({
//             // color:colors[i], 
//             // color: discsMultiracial[i]["color"],
//             // color: discsPoc[i]["color"],
//             color: discData[i]["color"],
//             side:side
//           });
//           const mesh =  new THREE.Mesh(
//             geometries.disc, 
//             materials.disc
//           );
//           return mesh;
//         })
        
//         meshes.forEach((m,i)=>{
//           const j = i;
//           const m1 = j*10;
//           // const m1 = j%2?1:-1;
//           // if i's remainder is equal to 1, m1 = 1, or else, m1 = -1
//           // const m2 = j%4<2?1:-1 ; 
//           // const m3 = j<=4?1:-1;
//           // m.position.set(unit * m3,unit * m2,unit*m1)
//           m.position.set(0, m1, 0)
//           group.add(m)
//         })
//   })
      
//         discGroup = group;

//         // Add the mesh to the scene
//         scene.add(group);
//         console.log('test meshes!')
//     }

//  New function
    function createMeshes() {
      
      let geometries = createGeometries();
      let materials = createMaterials();

      // make a group for all of the discs
      const formGroup = new THREE.Group();
      
      // make a group for one disc (with 3 meshes)
      const discGroup = new THREE.Group();
      
      [THREE.BackSide, THREE.FrontSide].forEach(side=>{
      // set yOffset to 0
      let yOffset = 0
        // loop through each year
        const discYear = rawData.map((year,i)=>{
          
          console.log(year)
            // loop through each of the 3 raddii
        
              const meshes = year.map((yearObjects,j)=>{
                console.log(yearObjects)
                
                // geometries
                geometries = createGeometries(yearObjects["radiusTop"]);
                // materials
                materials = createMaterials({
                  color: yearObjects["color"],
                  side:side
                });
                // mesh
                const mesh =  new THREE.Mesh(
                  geometries.disc, 
                  materials.disc
                  );
              return mesh});

              // Add the 3 meshes to the group
              discGroup.add(meshes)
            });
              
              return discGroup
          });

          
          // reposition group with offset
          discGroup.position.set(0, yOffset + 10, 0)
        // })
      // add the individual disc to the 3dform
      formGroup.add(discGroup)
      // Add the mesh to the scene
      scene.add(formGroup);
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
        document.body.appendChild( renderer.domElement );
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
  
          // controls = new THREE.OrbitControls(camera, renderer.domElement);
          // invalidation.then(() => (controls.dispose(), renderer.dispose()));
     }
  
    function render() {
        renderer.render(scene, camera);
        // console.log('test render!')
    }
  
    function update() {
       /*********** PUT ANIMATION LOGIC HERE **********/
       discGroup.rotation.x += 0.01;
       discGroup.rotation.y += 0.01;
      //  discGroup.rotation.z += 0.01;
       /***********************************************/
    }
  
    function onWindowResize() {
        camera.aspect = width / height;;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height)
        console.log('test onWindowResize!')
    }
  
    window.addEventListener('resize', onWindowResize)

    function animationLoop(){
      update();
      render();
      // console.log('test animationLoop!')
      // controls.update()
    }
    
    renderer.domElement
    // controls.update()
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.05;
    // controls.rotateSpeed = 0.1;
    renderer.setAnimationLoop(animationLoop)
    
    // invalidation.then(() => {
    //   controls.dispose();
    //   renderer.dispose();
    //   window.removeEventListener('resize', onWindowResize);
    // });
