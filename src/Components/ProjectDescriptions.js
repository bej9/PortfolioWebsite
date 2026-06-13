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

    };
export default descriptions
