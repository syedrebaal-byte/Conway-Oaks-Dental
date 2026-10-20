import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles, Layers, Info, CheckCircle2 } from 'lucide-react';

type ToothMode = 'natural' | 'crown' | 'implant';

export const Interactive3DTooth: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<ToothMode>('natural');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [activeFeature, setActiveFeature] = useState<string>('crown');

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const toothGroupRef = useRef<THREE.Group | null>(null);
  const crownMeshRef = useRef<THREE.Mesh | null>(null);
  const rootMesh1Ref = useRef<THREE.Mesh | null>(null);
  const rootMesh2Ref = useRef<THREE.Mesh | null>(null);
  const implantPostRef = useRef<THREE.Mesh | null>(null);
  const implantScrewRef = useRef<THREE.Mesh | null>(null);
  const abutmentRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 420;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 6.2);

    // 2. Renderer with antialiasing
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.8);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.8);
    fillLight.position.set(-5, 2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xccfbf1, 2.2);
    rimLight.position.set(0, -4, -4);
    scene.add(rimLight);

    // 4. Main Tooth Group
    const toothGroup = new THREE.Group();
    scene.add(toothGroup);
    toothGroupRef.current = toothGroup;

    // Materials
    // Natural Enamel Material (Warm pearlescent porcelain look)
    const enamelMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfbfbfa,
      emissive: 0x0a1014,
      roughness: 0.12,
      metalness: 0.05,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      transmission: 0.15,
      ior: 1.55,
      reflectivity: 0.9,
    });

    // Root Dentin Material
    const rootMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5eedc,
      roughness: 0.35,
      metalness: 0.02,
    });

    // Medical Grade Titanium Material
    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x71717a,
      roughness: 0.28,
      metalness: 0.88,
    });

    // Gold/Zirconia Abutment
    const abutmentMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8,
      roughness: 0.18,
      metalness: 0.75,
    });

    // Geometries
    // Procedural Anatomical Molar Crown (Sculpted using lathed & deformed surfaces)
    const crownGeo = new THREE.CylinderGeometry(1.28, 1.05, 1.45, 32, 16);
    // Sculpt subtle cusps on the occlusal surface
    const pos = crownGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const x = pos.getX(i);
      const z = pos.getZ(i);
      if (y > 0.4) {
        // Cusp modulation
        const angle = Math.atan2(z, x);
        const cuspMod = Math.sin(angle * 4) * 0.15;
        const dip = Math.sqrt(x * x + z * z) < 0.6 ? -0.22 : 0;
        pos.setY(i, y + cuspMod + dip);
      }
    }
    crownGeo.computeVertexNormals();

    const crownMesh = new THREE.Mesh(crownGeo, enamelMaterial);
    crownMesh.position.y = 0.55;
    toothGroup.add(crownMesh);
    crownMeshRef.current = crownMesh;

    // Root 1 (Mesial root)
    const rootGeo1 = new THREE.ConeGeometry(0.55, 2.1, 24, 16);
    rootGeo1.translate(0, -1.05, 0);
    const rootMesh1 = new THREE.Mesh(rootGeo1, rootMaterial);
    rootMesh1.position.set(-0.45, -0.15, 0);
    rootMesh1.rotation.z = 0.12;
    toothGroup.add(rootMesh1);
    rootMesh1Ref.current = rootMesh1;

    // Root 2 (Distal root)
    const rootGeo2 = new THREE.ConeGeometry(0.5, 2.0, 24, 16);
    rootGeo2.translate(0, -1.0, 0);
    const rootMesh2 = new THREE.Mesh(rootGeo2, rootMaterial);
    rootMesh2.position.set(0.45, -0.15, 0);
    rootMesh2.rotation.z = -0.14;
    toothGroup.add(rootMesh2);
    rootMesh2Ref.current = rootMesh2;

    // Implant Post (Threaded titanium cylinder with ribbed details)
    const implantGroup = new THREE.Group();
    const implantPostGeo = new THREE.CylinderGeometry(0.48, 0.32, 2.2, 32);
    const implantPost = new THREE.Mesh(implantPostGeo, titaniumMaterial);
    implantPost.position.y = -1.1;

    // Screw thread ridges
    for (let r = 0; r < 8; r++) {
      const ringGeo = new THREE.TorusGeometry(0.45 - r * 0.015, 0.04, 12, 32);
      ringGeo.rotateX(Math.PI / 2);
      const ring = new THREE.Mesh(ringGeo, titaniumMaterial);
      ring.position.y = -0.35 - r * 0.22;
      implantPost.add(ring);
    }
    implantGroup.add(implantPost);
    implantPostRef.current = implantPost;

    // Abutment collar
    const abutmentGeo = new THREE.CylinderGeometry(0.7, 0.52, 0.5, 32);
    const abutment = new THREE.Mesh(abutmentGeo, abutmentMaterial);
    abutment.position.y = -0.05;
    implantGroup.add(abutment);
    abutmentRef.current = abutment;

    implantGroup.visible = false;
    toothGroup.add(implantGroup);
    implantScrewRef.current = implantGroup as unknown as THREE.Mesh;

    // Subtle glow pedestal
    const pedestalGeo = new THREE.CylinderGeometry(1.9, 2.1, 0.06, 40);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x0f766e,
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 0.35,
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -2.35;
    scene.add(pedestal);

    // Mouse Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !toothGroupRef.current) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      toothGroupRef.current.rotation.y += deltaX * 0.009;
      toothGroupRef.current.rotation.x = Math.max(
        -0.4,
        Math.min(0.4, toothGroupRef.current.rotation.x + deltaY * 0.009)
      );
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile devices
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !toothGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      toothGroupRef.current.rotation.y += deltaX * 0.01;
      toothGroupRef.current.rotation.x = Math.max(
        -0.4,
        Math.min(0.4, toothGroupRef.current.rotation.x + deltaY * 0.01)
      );
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };
    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight || 420;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (toothGroupRef.current && isRotating && !isDragging) {
        toothGroupRef.current.rotation.y += delta * 0.65;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      crownGeo.dispose();
      rootGeo1.dispose();
      rootGeo2.dispose();
      implantPostGeo.dispose();
      abutmentGeo.dispose();
      enamelMaterial.dispose();
      rootMaterial.dispose();
      titaniumMaterial.dispose();
      abutmentMaterial.dispose();
    };
  }, []);

  // Mode switching reaction
  useEffect(() => {
    if (!crownMeshRef.current || !rootMesh1Ref.current || !rootMesh2Ref.current || !implantScrewRef.current) return;

    if (mode === 'natural') {
      crownMeshRef.current.visible = true;
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).color.setHex(0xfbfbfa);
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).roughness = 0.18;
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).clearcoat = 0.8;
      rootMesh1Ref.current.visible = true;
      rootMesh2Ref.current.visible = true;
      implantScrewRef.current.visible = false;
      setActiveFeature('crown');
    } else if (mode === 'crown') {
      crownMeshRef.current.visible = true;
      // High-grade Zirconia / e.max appearance: ultra smooth, high index of refraction
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).color.setHex(0xffffff);
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).roughness = 0.05;
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).clearcoat = 1.0;
      rootMesh1Ref.current.visible = true;
      rootMesh2Ref.current.visible = true;
      implantScrewRef.current.visible = false;
      setActiveFeature('zirconia');
    } else if (mode === 'implant') {
      crownMeshRef.current.visible = true;
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).color.setHex(0xffffff);
      (crownMeshRef.current.material as THREE.MeshPhysicalMaterial).roughness = 0.06;
      rootMesh1Ref.current.visible = false;
      rootMesh2Ref.current.visible = false;
      implantScrewRef.current.visible = true;
      setActiveFeature('titanium');
    }
  }, [mode]);

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-stone-900 to-slate-950 p-6 text-white border border-stone-800 shadow-2xl overflow-hidden">
      {/* Background ambient lighting glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header controls bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-800/80">
        <div>
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-teal-400 font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Clinical Anatomy</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-stone-100">
            Precision Biomimetic Visualizer
          </h3>
          <p className="text-xs text-stone-400 mt-0.5">
            Rotate 360° to explore enamel architecture, restorative crowns, and osseointegrated dental implants.
          </p>
        </div>

        {/* View Mode Segmented Switcher */}
        <div className="inline-flex items-center p-1 bg-stone-900/90 rounded-xl border border-stone-800 shrink-0">
          <button
            onClick={() => setMode('natural')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
              mode === 'natural'
                ? 'bg-teal-700 text-white shadow-sm shadow-teal-900/50'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Natural Molar
          </button>
          <button
            onClick={() => setMode('crown')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
              mode === 'crown'
                ? 'bg-teal-700 text-white shadow-sm shadow-teal-900/50'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Ceramic Crown
          </button>
          <button
            onClick={() => setMode('implant')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
              mode === 'implant'
                ? 'bg-teal-700 text-white shadow-sm shadow-teal-900/50'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Titanium Implant
          </button>
        </div>
      </div>

      {/* 3D Canvas Area */}
      <div className="relative w-full h-80 sm:h-96 my-2 cursor-grab active:cursor-grabbing">
        <div ref={mountRef} className="w-full h-full" />

        {/* Rotation indicator badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900/80 border border-stone-800 text-[11px] text-stone-300 backdrop-blur-md">
          <RotateCw className={`w-3 h-3 text-teal-400 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          <span>Drag to orbit · Pinch to zoom</span>
        </div>

        {/* Auto-rotate toggle */}
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-stone-900/80 border border-stone-800 text-[11px] text-stone-300 hover:text-white transition-colors backdrop-blur-md"
        >
          {isRotating ? 'Pause Spin' : 'Resume Spin'}
        </button>

        {/* Educational Callouts Overlay based on active mode */}
        <div className="absolute bottom-3 left-3 right-3 z-10 p-3 rounded-xl bg-stone-900/90 border border-stone-800/90 backdrop-blur-md">
          {mode === 'natural' && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-950/80 border border-teal-800/50 flex items-center justify-center shrink-0 text-teal-300">
                <Info className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-stone-200">Natural Enamel & Root Architecture</div>
                <div className="text-stone-400 text-[11px] leading-relaxed mt-0.5">
                  Natural human enamel is the hardest biological substance. Dr. Lyman prioritizes biomimetic dentistry: conserving as much healthy enamel and dentin as possible during every restorative treatment.
                </div>
              </div>
            </div>
          )}

          {mode === 'crown' && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center shrink-0 text-cyan-300">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-stone-200">Precision Metal-Free Zirconia Crown</div>
                <div className="text-stone-400 text-[11px] leading-relaxed mt-0.5">
                  Milled with 10-micron digital precision to seamlessly cap fractured or root-canal-treated teeth. No unsightly gray metal borders at the gumline, high fracture resistance, and lifelike light translucency.
                </div>
              </div>
            </div>
          )}

          {mode === 'implant' && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center shrink-0 text-emerald-300">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-stone-200">Grade 4 Titanium Osteointegrated Fixture</div>
                <div className="text-stone-400 text-[11px] leading-relaxed mt-0.5">
                  Replaces the missing natural root directly in the jawbone. Micro-threaded ridges encourage bone fusion, preventing long-term facial bone recession while permanently supporting a custom crown.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-stone-800/80 text-center">
        <div className="p-2 rounded-lg bg-stone-900/40">
          <div className="text-[10px] text-stone-400 uppercase tracking-wider">Fit Tolerance</div>
          <div className="text-sm font-bold text-teal-300 font-mono">±12 Microns</div>
        </div>
        <div className="p-2 rounded-lg bg-stone-900/40">
          <div className="text-[10px] text-stone-400 uppercase tracking-wider">Material Grade</div>
          <div className="text-sm font-bold text-teal-300 font-mono">100% Medical</div>
        </div>
        <div className="p-2 rounded-lg bg-stone-900/40">
          <div className="text-[10px] text-stone-400 uppercase tracking-wider">Longevity</div>
          <div className="text-sm font-bold text-teal-300 font-mono">15–25+ Years</div>
        </div>
      </div>
    </div>
  );
};
