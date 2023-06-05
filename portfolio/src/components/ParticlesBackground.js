import Particles from "react-tsparticles"
import particlesConfig from "./config/praticles-config"

const ParticlesBackground = () => {
    return(
        <Particles id="tsparticles" options={particlesConfig}/>
    );
}

export default ParticlesBackground