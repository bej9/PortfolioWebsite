import dslabs1 from "../Images/dslabs1.PNG";
import dslabs2 from "../Images/dslabs2.png";
import SynthLM3 from '../Images/SynthLM3.PNG';
import SynthLM4 from '../Images/SynthLM4.PNG';
import SAE1 from "../Images/SAE1.PNG";
import SAE2 from "../Images/SAE2.PNG";
import SAE4 from "../Images/SAE4.PNG";
import ITP1 from "../Images/ITP1.PNG";
import ITP2 from "../Images/ITP2.PNG";
import ITP3 from "../Images/ITP3.PNG";
import ITP4 from "../Images/ITP4.PNG";
import GNN1 from "../Images/GNN1.PNG";
import GNN2 from "../Images/GNN2.png";
import EQ2 from "../Images/EQ2.PNG";
import OMNI1 from "../Images/OMNI1.PNG";
import OMNI2 from "../Images/OMNI2.PNG";
import OMNI4 from "../Images/OMNI4.PNG";
import FV1 from "../Images/FV3.PNG";
import FV2 from "../Images/layer2_feat2.png";
import FV3 from "../Images/FV5.png";

import dry from "../Images/clarinet-dry.mp3"
import wet from "../Images/clarinet-wet.mp3"
import wet2 from "../Images/clarinet-wet2.mp3"
import eqdry from "../Images/eq-dry.mp3"
import eqwet from "../Images/eq-wet.mp3"
import audiocraft1 from "../Images/audiocraft1.png"
import audiocraft2 from "../Images/frontend.PNG"
import dit from "../Images/dit.png"
import pc from "../Images/IMG_8809.JPEG"
import ea from "../Images/EntropyAudio (2).png"
import ddpo from "../Images/Screenshot from 2026-02-01 11-47-10.png"

import descriptions from "./ProjectDescriptions"

import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons";
import {faChrome} from "@fortawesome/free-brands-svg-icons";
const portfolios = [
    {
        id: 1,
        category: ['2023'],
        link: 'https://entropyaudio.io/',
        icon: faChrome,
        descriptions: [descriptions.entropy1, descriptions.entropy2, descriptions.entropy3, descriptions.entropy4
        , descriptions.entropy5, descriptions.entropy6],
        title: 'Generative, Transformer-Based Models For Sound Design',
        images: [audiocraft1, dit, ea, ddpo, pc],
        imagecap: ["1. MusicGen + Encodec Architecture", "2. Scalable Diffusion Models with Transformers (Peebles et al., 2023)", "3. Generation Flow System Design", "4. Training Diffusion Models with Reinforcement Learning (Black et al., 2024)", "5. My Local Workstation"],
        citations: [
            "https://musicgen.com/",
            "https://github.com/facebookresearch/audiocraft",
            "https://huggingface.co/docs/transformers/model_doc/clap",
            "https://huggingface.co/stabilityai/stable-audio-open-1.0",
            "https://github.com/Stability-AI/stable-audio-tools",
            "https://ai.meta.com/research/publications/meta-audiobox-aesthetics-unified-automatic-quality-assessment-for-speech-music-and-sound/",
            "https://github.com/EntropyAudio/entropy_frontend",
            "https://entropyaudio.io/",
            "https://github.com/facebookresearch/encodec",
        ]
    },
    // {
    //     id: 2,
    //     category: ['2023'],
    //     link: 'https://github.com/emichael/dslabs',
    //     icon: faGithub,
    //     descriptions: [descriptions.dslabs1, descriptions.dslabs2, descriptions.dslabs3, descriptions.dslabs4],
    //     images: [dslabs1, dslabs2],
    //     imagecap: ["1: The Part-Time Parliament", "2: The greatest moment of my life"],
    //     title: 'DSLabs - Sharded Key-Value Store'
    // },
    // {
    //     id: 10,
    //     category: ['2023'],
    //     descriptions: [descriptions.fv1, descriptions.fv2, descriptions.fv3, descriptions.fv4, descriptions.fv5],
    //     title: 'FeatureViz - Deep Learning Visualization',
    //     link:"https://github.com/Bej9038/FeatureViz",
    //     icon: faGithub,
    //     images: [FV1, FV2, FV3],
    //     imagecap: ["1: A cool looking feature from the third group of layers in ResNet50",
    //         "2: A more basic feature from an earlier layer",
    //         "3: A faint visualization of the stingray class from the final classifier"],
    // },
    // {
    //     id: 7,
    //     category: ['2021'],
    //     link: 'https://github.com/Bej9038/EQ',
    //     icon: faGithub,
    //     descriptions: [descriptions.eq1, descriptions.eq2, descriptions.eq3, descriptions.eq4],
    //     audio: [eqdry, eqwet],
    //     audiocap:["A drum loop with the EQ bypassed", "The same drum loop after applying the EQ curve shown in the image above"],
    //     images: [EQ2],
    //     imagecap: ["1: The EQ in action in my music production software"],
    //     title: 'EQ Audio Plugin'
    // },
    // {
    //     id: 4,
    //     category: ['2020'],
    //     link: 'https://github.com/Bej9038/ImplantTestingProgram',
    //     icon: faGithub,
    //     descriptions: [descriptions.ipt1, descriptions.ipt2, descriptions.ipt3, descriptions.ipt4],
    //     images: [ITP1, ITP3, ITP4, ITP2],
    //     imagecap: ["1: The main menu", "2: Inharmonicty training",
    //         "3: Setting the frequency ranges on the canvas's axes and creating the oscillators", "4: Speech to noise ratio selection"],
    //     title: 'Implant Testing Program'
    // },
    // {
    //     id: 3,
    //     category: ['2022'],
    //     link: 'https://github.com/Bej9038/SpatialAttributeEvaluation',
    //     icon: faGithub,
    //     descriptions: [descriptions.sae1, descriptions.sae2, descriptions.sae3, descriptions.sae4],
    //     images: [SAE4, SAE1, SAE2],
    //     imagecap: ["1: Part of the initial project specifications", "2: Welcome menu","3: Playing around with the controls"],
    //     title: 'Spatial Attributes Evaluation'
    // },
    // {
    //     id: 8,
    //     category: ['2020'],
    //     link: 'https://github.com/Bej9038/OmnitoneV2',
    //     icon: faGithub,
    //     descriptions: [descriptions.omni1, descriptions.omni2, descriptions.omni3],
    //     audio: [dry, wet, wet2],
    //     audiocap:["The original audio file", "The audio file being played inside the simulated savings bank"],
    //     images: [OMNI1, OMNI2, OMNI4],
    //     imagecap: ["1: The Omnitone interface displaying the Rochester savings bank. " +
    //     "Users can use their mouse to explore the VR room and its audio characteristics.",
    //         "2: The second selectable room"],
    //     title: 'Omnitone'
    // },
    // {
    //     id: 5,
    //     category: ['2022'],
    //     link: 'https://github.com/Bej9038/GraphSAGE-ML-Project',
    //     icon: faGithub,
    //     descriptions: [descriptions.gnn1, descriptions.gnn2, descriptions.gnn3, descriptions.gnn4, descriptions.gnn5],
    //     images: [GNN2, GNN1],
    //     imagecap: [
    //         "1: A GraphSAGE layer visualized",
    //         "2: Visualization of the CORA dataset. It consists of 2708 scientific publications classified " +
    //     "into one of seven classes. The citation network consists of 5429 directed links between papers.",
    //         ],
    //     title: 'Graph Neural Network Research Project'
    // },
    // {
    //     id: 6,
    //     category: ['2021'],
    //     link: 'https://github.com/Bej9038/PortfolioWebsite',
    //     icon: faGithub,
    //     descriptions: [descriptions.portfolio1],
    //     title: 'Portfolio Website'
    // },
    // {
    //     id: 9,
    //     category: ['2022'],
    //     link: 'https://github.com/Bej9038/OmnitoneV2',
    //     icon: faGithub,
    //     // image: port2,
    //     title: 'Encrypted Messenger'
    // },
]

export default portfolios;
