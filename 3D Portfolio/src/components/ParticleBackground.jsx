import React from 'react';
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const ParticleBackground = () => {
  const [init, setInit] = useState(true);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = (container) => {
  //   loading = false
  // };

  const options = useMemo(
    () => ({
      backgroundMode: {
          enable: true,
          zIndex: 5
      },
      fps_limit: 60,
      "particles": {
        "number": {
          "value": 250,
          "density": {
            "enable": true,
            "value_area": 1080
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": {
            "min": 0.3,
            "max": 1
          },
          "random": false,
          "animation": {
            "enable": true,
            "speed": 0.7,
            "opacity_min": 0,
            "opacity_max": 1,   
            "sync": false
          }
        },
        "size": {
          "value": {
            "min": 0.5,
            "max": 2
          },
          "random": true,
          "animation": {
            "enable": true,
            "speed": 0.7, 
            "size_min": 0,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.5,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 84,
            "size": 1,
            "duration": 3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
  }),
    [],
  );

  if (init) {
    return (
      <Particles
        className='stars'
        id="tsparticles"
        options={options}
      />
    );
  }

  return <></>;
}

export default ParticleBackground;
