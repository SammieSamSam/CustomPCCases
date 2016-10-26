/**
 * Created by annepieter on 24/10/2016.
 */
var scene, camera, directionalLight, renderer, controls, ambientlight;
var material,geometry, cube;
var loader, mesh;
init();
animate();
function init(){

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 5;
    directionalLight = new THREE.DirectionalLight(0xE5E5E5,1);
    directionalLight.position.set( camera.position.x,camera.position.y,camera.position.z );
    directionalLight.target.position.set(0,0,0);
    ambientlight = new THREE.AmbientLight(0xE5E5E5,1);

    scene.add(directionalLight);

    material = new THREE.MeshPhongMaterial({color: 0x123456});
    /*geometry = new THREE.BoxGeometry(1,1,1);
    cube = new THREE.Mesh(geometry,material);
    cube.position.set(0,0,0);
    scene.add(cube);*/

    loader = new THREE.JSONLoader();
    loader.load('js/MSI.json', function(MSI){
        mesh = new THREE.Mesh(MSI, material);
        scene.add(mesh);
    });


    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth - 200, window.innerHeight - 200);
    renderer.setClearColor(0xB2DFEE);
    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera);
    controls.addEventListener( 'change' );

    animate();

}

function animate(){
    renderer.render(scene,camera);
    directionalLight.position.set(camera.position.x,camera.position.y,camera.position.z);
    requestAnimationFrame(animate);

}
animate();
