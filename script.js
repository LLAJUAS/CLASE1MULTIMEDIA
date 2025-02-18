// Escena, cámara y renderizador
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

// Cargar textura
const loader = new THREE.TextureLoader();
const textura = loader.load('4.jpg');

// Crear un icosaedro con material y textura
const geometria = new THREE.IcosahedronGeometry();
const material = new THREE.MeshStandardMaterial({ map: textura, color: 0xffffff });
const icosaedro = new THREE.Mesh(geometria, material);
escena.add(icosaedro);

// Agregar luz
const luz = new THREE.DirectionalLight(0xffffff, 1);
luz.position.set(1, 1, 1).normalize();
escena.add(luz);

// Posicionar la cámara
camara.position.z = 5;

// Animación del icosaedro
function animacion() {
    requestAnimationFrame(animacion);
    icosaedro.rotation.x += 0.01;
    icosaedro.rotation.y += 0.01;
    renderizador.render(escena, camara);
}

animacion();

// Ajustar el tamaño de la ventana al cambiar su tamaño
window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderizador.setSize(window.innerWidth, window.innerHeight);
});
