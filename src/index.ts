export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "A detailed scene of a small ant mining Bitcoin in a futuristic underground facility, surrounded by powerful animals in sharp business suits — a lion, a bear, and an eagle — standing over it, giving intimidating orders. Digital screens, glowing circuits, dramatic lighting, ultra-detailed, cinematic, 4K, sharp focus, digital art, concept art, symmetrical composition.",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
