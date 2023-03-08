import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import React, { useEffect, useRef } from 'react'

function Cube2() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x00000000, 0)

    // Create the cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
    const cubeMaterials = [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/Portfolio/images/react.png'), transparent: true, opacity: 1 }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/Portfolio/images/figma.png'), transparent: true, opacity: 1 }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/Portfolio/images/git.png'), transparent: true, opacity: 1 }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/Portfolio/images/html.png'), transparent: true, opacity: 1 }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/Portfolio/images/js.png'), transparent: true, opacity: 1 }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/Portfolio/images/Sass.png'), transparent: true, opacity: 1 })
      ];
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterials)

    // Add the cube to the scene
    scene.add(cube)

    // Set the camera position
    camera.position.z = 3
    // Add lights to the scene
    const light1 = new THREE.PointLight(0xffffff, 1)
    light1.position.set(2, 2, 2)
    scene.add(light1)
    const light2 = new THREE.AmbientLight( 0.5)
    scene.add(light2)

    const edges = new THREE.EdgesGeometry(cubeGeometry)
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xc6a0d3}))
    cube.add(line)

      // Create Orbit Controls and attach to camera
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
    // Animate the cube
    const animate = function () {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.008
      cube.rotation.y += 0.008

      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} />
}

export default Cube2;


