/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import robotScene from "../assets/3d/robot.glb";
import PropTypes from "prop-types";

const Robot = ({ scale, position }) => {
  const robotRef = useRef();
  const { scene, animations } = useGLTF(robotScene);
  const { actions } = useAnimations(animations, robotRef);

  useEffect(() => {
    actions["Idle"]?.play();
  }, [actions]);

  return (
    <mesh ref={robotRef} position={position} scale={scale} rotation={[0, 2.2,0]}>
      <primitive object={scene} />
    </mesh>
  )
};

Robot.propTypes = {
  scale: PropTypes.arrayOf(PropTypes.number).isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const RobotCanvas = ({ scrollContainer }) => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [scale, setScale] = useState([2, 2, 2]);
    const [position, setPosition] = useState([0.2, -0.7, 0]);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = scrollContainer.current.scrollTop;
        const rotationXValue = scrollTop * -0.0006;
        const rotationYValue = scrollTop * -0.00075;
        setRotationX(rotationXValue);
        setRotationY(rotationYValue);
      };
  
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setScale([1, 1, 1]);
          setPosition([0.2, -0.1, 0]);
        } else if (window.innerWidth < 1024) {
          setScale([1.33, 1.33, 1.33]);
          setPosition([0.2, -0.3, 0]);
        } else if (window.innerWidth < 1280) {
          setScale([1.5, 1.5, 1.5]);
          setPosition([0.2, -0.4, 0]);
        } else if (window.innerWidth < 1536) {
          setScale([1.66, 1.66, 1.66]);
          setPosition([0.2, -0.5, 0]);
        } else {
          setScale([2, 2, 2]);
          setPosition([0.2, -0.7, 0]);
        }
      };
  
      handleResize();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, [scrollContainer]);
  
    return (
      <Canvas className={`w-full h-screen bg-transparent z-10`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight color="#b1e1ff" groundColor="#000000" intensity={1} />
  
          <Robot rotationX={rotationX} rotationY={rotationY} scale={scale} position={position} />
        </Suspense>
      </Canvas>
    );
  };

  RobotCanvas.propTypes = {
    scrollContainer: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  };



export default RobotCanvas;
