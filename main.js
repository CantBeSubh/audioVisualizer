import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const size={
  w:window.innerWidth,
  h:window.innerHeight
}

const canvas=document.getElementById('canvas')

const renderer=new THREE.WebGL1Renderer({canvas})
renderer.setSize(size.w,size.h)
renderer.setPixelRatio(window.devicePixelRatio)
const scene=new THREE.Scene()
scene.background=new THREE.Color(0x000000)

const cam=new THREE.PerspectiveCamera(75,size.w/size.h,0.01,1000)
cam.position.set(0,0,10)

const control=new OrbitControls(cam,canvas)
control.enableDamping=true

const box=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({wireframe:true}))
scene.add(box)

window.addEventListener('resize',(event)=>{
  size.w=window.innerWidth
  size.h=window.innerHeight
  cam.aspect = size.w / size.h;
  cam.updateProjectionMatrix();
  renderer.setSize(size.w,size.h)
})

function animate(){
  control.update()
  renderer.render(scene,cam)
  window.requestAnimationFrame(animate)
  
}

animate()