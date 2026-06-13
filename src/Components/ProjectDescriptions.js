const descriptions =
    {
        entropy1: "Given the impressive capabilities of modern diffusion models in the speech and music domains, " +
            "a natural-language tool made for composers feels inevitable. " +
            "Unfortunately, current audio models are largely focused on speech and music generation - not individual, high-quality instrument samples. " +
            "In my experience, two things stand in the way - a large data bottleneck and a lack of focus on this specific task. " +
            "Entropy Audio is my attempt at making this tool come to life.",

        entropy2: "The open-source model that first captured my interest was <a href='https://musicgen.com/' target='_blank' rel='noopener noreferrer'>MusicGen from Meta AI [1]</a>, released in June 2023. " +
            "MusicGen is an autoregressive transformer model that predicts time-steps in a compressed, discretized audio sequence. " +
            "Although it was a huge step up in open-source at the time, the limitations of an autoregressive approach to audio modeling quickly became apparent during my fine-tuning experiments (long-range consistency issues and slow inference for long sequences). " +
            "Additionally, the neural audio codec it uses (<a href='https://github.com/facebookresearch/encodec' target='_blank' rel='noopener noreferrer'>Encodec [9]</a>) is good enough, but not quite at the level needed for professional audio.",

        entropy3: "In June 2024, Stability AI released <a href='https://huggingface.co/stabilityai/stable-audio-open-1.0' target='_blank' rel='noopener noreferrer'>Stable Audio Open (SAO) [4]</a>. " +
            "SAO is a 1.2B diffusion transformer (DiT) that operates on a continuous latent space provided by a variational autoencoder called <a href='https://github.com/Harmonai-org/oobleck' target='_blank' rel='noopener noreferrer'>Oobleck</a>. " +
            "As a result, SAO is superior to MusicGen in both audio quality and efficiency. " +
            "The model currently used for Entropy Audio is an adaptation of the SAO DiT.",

        entropy4: "Model architectures have more or less converged to the DiT recipe, but the data bottleneck still remains. " +
            "To solve this, I've been working on a dataset currently sitting at around 3TB. " +
            "The largest portion of this data came from software I made to automate the data gathering and labeling process. " +
            "I used both proprietary LLM APIs and local LLMs (powered by vLLM and a 5090) to generate descriptions. " +
            "Each audio sample in the dataset is paired with a JSON file containing a common set of conditioning fields. " +
            "The dataset design was inspired by the classes from <a href='https://github.com/facebookresearch/audiocraft' target='_blank' rel='noopener noreferrer'>Meta's AudioCraft codebase [2]</a>. " +
            "The rest of the data is open-source, manually labeled, or synthetically generated. <br><br>" +
            "To prep the dataset, I used <a href='https://huggingface.co/docs/transformers/model_doc/clap' target='_blank' rel='noopener noreferrer'>CLAP score [3]</a> to filter out low-quality examples. " +
            "I also balanced the dataset using a weighted sampler, downweighting common metadata values with an inverse frequency weighting:" +
            "<code> w = 1 / ((1 + count / threshold) ^ power)</code>. " +
            "I deduplicated using latent clustering and similarity score thresholding. " +
            "Finally, I encoded the latents ahead of training to improve efficiency.",

        entropy5: "For my training runs, I swapped out the original text conditioning used with SAO for T5Gemma. " +
            "I also conditioned my model globally on CLAP embeddings, BPM, key signature, and loop/oneshot. " +
            "I added adaptive layer normalization, QK normalization, global timestep conditioning, and tweaks to enable stable bfloat16 mixed-precision training. " +
            "I created trainer classes for denoising/flow matching, RL (DDPO, with GRPO-style advantages) [10], and preference alignment (DPO) [11]. " +
            "As for evaluation, I primarily used CLAP score, FAD, and my own ears to listen to examples produced during training. " +
            "Somewhat more interesting are the metrics I used from <a href='https://ai.meta.com/research/publications/meta-audiobox-aesthetics-unified-automatic-quality-assessment-for-speech-music-and-sound/' target='_blank' rel='noopener noreferrer'>Meta's Audiobox Aesthetics [6]</a>. " +
            "This is a pretrained model that predicts scores (out of 10) for an audio's content enjoyment, content quality, production complexity, and production quality. " +
            "I used these scores both as evals during training and as reward signals for RL. " +
            "Finally, for experiment monitoring, I used Weights & Biases.",

        entropy6: "For the Entropy Audio website, I wrote the frontend in Angular and the backend in Python. " +
            "I used AWS Lambda, S3, and DynamoDB, alongside RunPod Serverless Endpoints for the backend infrastructure. " +
            "My goal with the UI's design was to make something that felt like a hybrid between a digital synthesizer and an LLM interface, with a transparent (to the user) data flywheel built into the workflow. " +
            "When a user downloads a generation, it gets marked as 'preferred' in a DynamoDB table. The other generations in theS batch are used as the negative examples during preference training (DPO). " +
            "This way, preference data and synthetic audio are naturally collected during regular use, helping to solve the data bottleneck mentioned earlier. "


        // dslabs1: "DSLabs was a semester long project that I completed while taking Cornell's CS5414 " +
        //     "(Distributed Computing) with Lorenzo Alvisi. This class was easily one of the most challenging, rewarding, " +
        //     "and well designed courses I have ever taken. The project itself consisted of a framework that allows " +
        //     "students to create and test distributed systems, along with four major labs where we were tasked with " +
        //     "implementing a system similar in functionality to Google's Spanner.",
        // dslabs2: "Lab 1 involved implementing an \"at-most-once\" key-value store (duplicate commands will only execute once, results are cached), along" +
        //     " with a basic client and server. Lab 2 consisted of adding primary-backup replication to" +
        //     " lab 1 using an all-knowing view service server that decides on primary backup configurations. This allows for state replication and consistency, " +
        //     "but it also leaves us with a single point of failure (the view service).",
        // dslabs3: "Lab 3 fixes this problem using Paxos. Paxos " +
        //     "is an intriguing algorithm that allows a group of servers to be fault tolerant as long as a majority of servers in the group don't fail. It " +
        //     "also guarantees that consensus can be reached during periods of synchrony. This part involved a bit too many hours " +
        //     "of grinding in order to debug the system, but I'm proud to say that we passed all of the test cases.",
        // dslabs4: "Lab 4 added on multi-key transactions and sharding. This allows the system to process operations " +
        //     "in parallel thus increasing performance proportional to the number of server groups. We also had to implement two" +
        //     " phase commit for agreement between server groups during transactions. On its own 2PC is susceptible to failures, " +
        //     "but when paired with paxos provides agreement without any major availability issues.",
        //
        // sae1: "After working for Professor Kim in 2020, I was rehired as a part-" +
        //     "time developer during my last semester of undergrad. During this semester, my task was to write a program " +
        //     "that would allow Dr. Kim to collect data on how listeners interpret the spatial characteristics of audio. " +
        //     "This was quite an enjoyable project because I was given a general overview of what to build, but every " +
        //     "aspect of design and implementation was left up to me.",
        // sae2: "The main feature of this program is an interactive 3D visual that is supposed to represent audio and its spacial " +
        //     "characteristics. Users hear a series of songs, and then adjust a set of four attribute sliders " +
        //     "(width, depth, immersion, and clarity) to morph the 3D visual until it best describes each song.",
        // sae3: "Given that this project was a website, I decided to use Angular to get some more " +
        //     "experience with it. I really like Angular + Typescript because of the OOP style, and because it helps me keep my " +
        //     "projects organized. As for the 3D visual, I used a library called three.js. This was " +
        //     "easily the most challenging part of the project since it was my first time doing anything related to " +
        //     "graphics, but I learned a lot! I created a custom shader that morphs based on the music's volume and attribute slider values. ",
        // sae4: "For the design of the software, I added UI components such as the attribute sliders and menus, " +
        //     "a view component to hold the three.js canvas, a singular audio service that controls everything sound related " +
        //     "and can be injected into any component, and a singular session values service used to maintain " +
        //     "important values during each instance of the program (such as the current round number or username). " +
        //     "This service was injected into the slider components and the view component, so both the sliders and the 3D graphic could " +
        //     "have realtime access to the attribute sliders' values.",
        //
        // ipt1: "This was one of two projects created during my internship with Professor Sungyoung Kim at RIT. In collaboration with " +
        //     "a team from University of Iowa, " +
        //     "we attempted to evaluate the effectiveness of hearing devices called hybrid cochlear implants. " +
        //     "The team was also interested in people's ability to understand speech depending on background noise level. " +
        //     "I was given the task of independently creating a website that would allow the researchers to test participants hearing abilities " +
        //     "and collect data. This ended up being a great opportunity because it was the largest project I had ever" +
        //     " worked on, I got to learn about web development, and the team successfully published research using the data" +
        //     " collected with the software. It's a good feeling when the software you make is used for something important.",
        // ipt2:"The website contains 5 unique testing modules. The Inharmonicity Training and Speech-In-Noise tests have " +
        //     "2 and 3 different modes respectively. All tests heavily rely on the Javascript Web Audio API to generate " +
        //     "and process sound at various frequencies and levels. The website is connected to a backend SQL database to " +
        //     "store data for each user.",
        // ipt3:"The main focus of the program was the Inharmonicity Training. In this module, users are presented with a " +
        //     "box that produces a tone as their mouse hovers over it. The tone changes depending on the location of the" +
        //     " mouse within the box. This tone consists of a group of low frequency oscillators and a group of " +
        //     "high frequency oscillators set with precise frequency ratios. The goal is for the user to move their mouse " +
        //     "inside the box until the tone sounds most \"harmonic\". After selecting a point, a gradient appears on the " +
        //     "box that shows the user how correct their guess was. This gradient is calculated based on final mouse " +
        //     "position and the randomized frequency ranges of the box's x and y axes set before each trial.",
        // ipt4: "As part of a separate research question, I also added a speech-in-noise test that played a series " +
        //     "of words alongside background noise. The user just has to guess which word was spoken.",
        //
        // gnn1:"For the final research project in my machine learning course at RIT, we were tasked with researching a deep learning " +
        //     "architecture that we didn't cover in class, proposing an experiment, and then putting together a " +
        //     "final paper and presentation. After doing some searching online, I decided to do my project on " +
        //     "graph neural networks (specifically the GraphSAGE architecture).",
        // gnn2:"The GraphSAGE algorithm works by first randomly sampling neighboring nodes of a given node in a graph, " +
        //     "and then combining the original and sampled node's embeddings using an aggregation function. It's best to think of this " +
        //     "as a generalization of convolution for graph data. " +
        //     "Its also similar to the idea of summarizing word embeddings into sentence embeddings in NLP.",
        // gnn3:"For the experiment portion of the project, I proposed that if we methodically select which aggregation function " +
        //     "is used for each layer, then we will get better results out of our model " +
        //     "(most GNNs use a single type of aggregation function for all layers). This is because some aggregators," +
        //     " such as mean pooling, may be better at summarizing earlier layers of " +
        //     "embeddings than max pooling for example. To test this idea out, " +
        //     "I used the CORA dataset (basically MNIST digits for GNNs) along with a PyTorch implementation of GraphSAGE. " +
        //     "I implemented max and mean aggregators to go along with model.",
        // gnn4: "The results showed that the proposed combination of aggregation layers (mean in earlier layers, and max in later layers) " +
        //     "did in fact result in an increase in F1 score. However, this experiment was at such a small scale that testing on a larger " +
        //         "dataset and model would need to be done to make any conclusions.",
        // gnn5: "Overall, this turned out to be a great choice for my project. " +
        //     "I was in the process of finishing up a graph theory course, " +
        //     "so graphs concepts were fresh in my mind. It was also cool to study GNNs given that they " +
        //     "aren't discussed nearly as much as other modalities of deep learning. Lastly, it was a good experience " +
        //     "to learn a little more about writing a project proposal and creating an experiment." +
        //     " Although it was challenging doing a research project on a new topic in a little over a month, " +
        //     "I'm glad I went through it.",
        //
        // eq1: "As an avid user of music production software, I always wondered how the tools I was using were created. " +
        //     "I also wanted to brush up on my C++ skills. Therefore, " +
        //     "to kill two birds with one stone I decided to dive in and make a parametric EQ (a common audio mixing effect).",
        // eq2: "At first, I looked into writing VST3s (the standard format of an audio plugin) from scratch. However, it became " +
        //     "apparent that this wasn't a simple feat for someone starting out. I ended up using an excellent C++ " +
        //     "framework called JUCE that includes libraries for both audio processing and UI elements.",
        // eq3: "My final EQ consisted of 2 notch filters for middle frequencies, a low pass filter to cut high frequencies, " +
        //     "and a high pass filter to cut low frequencies. Each filter has a small bypass button above it. " +
        //     "Writing the program involved routing audio input " +
        //     "through the four filters, and connecting the UI knobs to the filter parameters. " +
        //     "I also created a real-time frequency analyzer that sits behind a visualization of the EQ curve (the orange line). " +
        //     "Lastly, I edited the algorithm for one of the built in JUCE filters to allow the user " +
        //     "to select different slope values for the high and low pass filters.",
        // eq4: "Although its not the worlds flashiest audio plugin, I am very satisfied that I got it working inside " +
        //     "my own music production software. Now that I have more experience behind my belt, I can hopefully tackle more " +
        //     "interesting ideas that I have.",
        //
        // omni1: "Alongside the cochlear implant testing software I created while interning with Professor Kim, I was also given " +
        //     "the task of fleshing out another VR/AR project idea in my free time. This project was created " +
        //     "in an attempt to preserve the aural characteristics of historical buildings.",
        // omni2: "The software is designed to take in a dry audio sample (no reverb), and play it back as if it was " +
        //     "inside a room, from any position in the room. The final result ended up working surprisingly well! " +
        //     "The way something like this is done is by recording impulses, which are essentially isolated reverb " +
        //     "tails, inside a room using an ambisonic 4 channel microphone. Then you convolve the " +
        //     "source file with those impulse recordings, and combine the resulting 4 audio files in such a way such that they create " +
        //     "B format ambisonic files.",
        // omni3: "These B format files can then be converted to stereo using a javascript library called Omnitone. " +
        //     "In the program, users can rotate their position in the room using the VR viewer. Users " +
        //     "can also select different sound source and listening locations, and change which microphone is being used " +
        //     "with the control panel on the bottom.",
        //
        // fv1: "This is a small program that came about as I was working on a project for my internship. I was looking " +
        //     "into how interpretable one could make CNNs, and I came across a Stanford YouTube lecture on " +
        //     "visualization for computer vision. One of the topics briefly discussed in the lecture was called gradient ascent, " +
        //     "which is originally from the paper 'Understanding Neural Networks Through Deep Visualization'.",
        // fv2: "A more common idea that is similar is saliency maps. Saliency maps are created by inputting an " +
        //     "image into a network, and visualizing which pixels are most responsible for the prediction made. " +
        //     "On the other hand, Gradient ascent aims to generate a new image that maximally activates a given output feature or class. " +
        //     "The paper mentioned above discusses this technique, and also talks about how to make the results of gradient ascent into more interpretable, natural looking images.",
        // fv3: "I tried implementing this algorithm myself using PyTorch, and after a little bit of fooling " +
        //     "around with hyperparameters, I was able to get some cool images! I did it by taking a pre-trained PyTorch ResNet50 (trained on ImageNet1K), " +
        //     "creating a blank image and passing it to the optimizer, and then performing gradient ascent on the image pixels until the image exactly maximized " +
        //     "a specified class in the model. Following the advice of the paper, I also added gaussian blurring, L2 regularization, and gradient " +
        //     "clipping which helped make the images much cleaner once I found the right settings. I also made it so the images could be created in parallel/batches. " +
        //     "This way, one could potentially generate separate images for all output features in a given layer in one run.",
        // fv4: "I ended up seeing some very interesting things during my testing. First, this technique does not appear to work " +
        //     "with transformers. The resulting images look like a bunch of small squares with random patterns " +
        //     "stitched together. This is presumably due to the way images are chopped up before being fed into a transformer. " +
        //     "I also found it to be really cool how the visualizations that showed up in my images had different " +
        //     "locations, shapes, and sizes depending on hyperparameters and image initialization. However, they still maintained " +
        //     "the general characteristics of the feature/class that they represented. I think this is a great example " +
        //     "of how CNNs can pick out specific features of an image regardless of location or other factors like size.",
        //
        // portfolio1: "This Website! During quarantine I wanted to give React a try, so I started with a tutorial I found online and " +
        //     "made some edits. I recently did a re-design of the projects page as well.",
        //
        // temp: "Content coming soon..."


    };
export default descriptions
