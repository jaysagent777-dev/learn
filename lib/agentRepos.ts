export interface AgentRepo {
  id: number;
  name: string;
  fullName: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  category: string;
  topics: string[];
}

export const agentRepos: AgentRepo[] = [
  // Jarvis/Friday Clones & Personal Assistants
  { id: 0, name: 'JARVIS', fullName: 'lee-b/JARVIS', description: 'A command-line personal assistant inspired by Iron Man\'s JARVIS', url: 'https://github.com/lee-b/JARVIS', stars: 8000, language: 'Python', category: 'Personal Assistant', topics: ['jarvis', 'personal-assistant', 'voice'] },
  { id: 0.5, name: 'Friday.js', fullName: 'tstewart161/Friday_ProgrammingLanguage', description: 'Personal assistant inspired by Iron Man\'s Friday', url: 'https://github.com/tstewart161/Friday_ProgrammingLanguage', stars: 5000, language: 'JavaScript', category: 'Personal Assistant', topics: ['friday', 'assistant', 'ai'] },
  { id: 0.7, name: 'Mycroft', fullName: 'MycroftAI/mycroft-core', description: 'Open source voice assistant', url: 'https://github.com/MycroftAI/mycroft-core', stars: 7500, language: 'Python', category: 'Personal Assistant', topics: ['voice-assistant', 'mycroft', 'open-source'] },
  { id: 0.8, name: 'Rasa', fullName: 'RasaHQ/rasa', description: 'Build conversational AI with Rasa', url: 'https://github.com/RasaHQ/rasa', stars: 18000, language: 'Python', category: 'Personal Assistant', topics: ['conversational-ai', 'nlp', 'chatbot'] },

  // Autonomous Agents
  { id: 1, name: 'AutoGPT', fullName: 'Significant-Gravitas/AutoGPT', description: 'Experimental open-source attempt to make GPT-4 fully autonomous', url: 'https://github.com/Significant-Gravitas/AutoGPT', stars: 160000, language: 'Python', category: 'Autonomous Agents', topics: ['gpt-4', 'autonomous', 'agents'] },
  { id: 2, name: 'BabyAGI', fullName: 'yoheinakajima/babyagi', description: 'AI-powered task management system', url: 'https://github.com/yoheinakajima/babyagi', stars: 15000, language: 'Python', category: 'Autonomous Agents', topics: ['agi', 'task-management', 'ai'] },
  { id: 3, name: 'GPT Engineer', fullName: 'AntonOsika/gpt-engineer', description: 'Specify what you want it to build, the AI asks for clarification, and builds it', url: 'https://github.com/AntonOsika/gpt-engineer', stars: 51000, language: 'Python', category: 'Autonomous Agents', topics: ['gpt', 'code-generation', 'agents'] },
  { id: 4, name: 'AgentGPT', fullName: 'reworkd/AgentGPT', description: 'AI agents you can make and deploy', url: 'https://github.com/reworkd/AgentGPT', stars: 30000, language: 'TypeScript', category: 'Autonomous Agents', topics: ['agent', 'gpt', 'web'] },

  // LLM Frameworks
  { id: 5, name: 'LangChain', fullName: 'langchain-ai/langchain', description: 'Build LLM applications through composability', url: 'https://github.com/langchain-ai/langchain', stars: 88000, language: 'Python', category: 'LLM Frameworks', topics: ['llm', 'langchain', 'agents'] },
  { id: 6, name: 'LlamaIndex', fullName: 'run-llama/llama_index', description: 'Data framework for LLM applications', url: 'https://github.com/run-llama/llama_index', stars: 37000, language: 'Python', category: 'LLM Frameworks', topics: ['llm', 'rag', 'indexing'] },
  { id: 7, name: 'Semantic Kernel', fullName: 'microsoft/semantic-kernel', description: 'SDK to integrate cutting-edge LLM technology into .NET apps', url: 'https://github.com/microsoft/semantic-kernel', stars: 21000, language: 'C#', category: 'LLM Frameworks', topics: ['semantic-kernel', 'llm', 'agents'] },
  { id: 8, name: 'Haystack', fullName: 'deepset-ai/haystack', description: 'NLP framework for building RAG and LLM applications', url: 'https://github.com/deepset-ai/haystack', stars: 14000, language: 'Python', category: 'LLM Frameworks', topics: ['rag', 'nlp', 'llm'] },
  { id: 9, name: 'Promptify', fullName: 'promptslab/Promptify', description: 'Prompt engineering library for LLMs', url: 'https://github.com/promptslab/Promptify', stars: 3500, language: 'Python', category: 'LLM Frameworks', topics: ['prompting', 'llm', 'engineering'] },

  // Multi-Agent Systems
  { id: 10, name: 'CrewAI', fullName: 'joaomdmoura/crewai', description: 'Framework for orchestrating role-playing, autonomous AI agents', url: 'https://github.com/joaomdmoura/crewai', stars: 19000, language: 'Python', category: 'Multi-Agent', topics: ['agents', 'llm', 'orchestration'] },
  { id: 11, name: 'AutoGen', fullName: 'microsoft/autogen', description: 'Enable Next-Gen Large-Language Model Applications', url: 'https://github.com/microsoft/autogen', stars: 29000, language: 'Python', category: 'Multi-Agent', topics: ['multi-agent', 'llm', 'automation'] },
  { id: 12, name: 'Swarms', fullName: 'kyegomez/swarms', description: 'Build, deploy and manage AI agents', url: 'https://github.com/kyegomez/swarms', stars: 5000, language: 'Python', category: 'Multi-Agent', topics: ['agents', 'orchestration', 'swarm'] },
  { id: 13, name: 'SuperAGI', fullName: 'TransformerOptimus/SuperAGI', description: 'Dev-first open source autonomous AI agent framework', url: 'https://github.com/TransformerOptimus/SuperAGI', stars: 9000, language: 'Python', category: 'Multi-Agent', topics: ['agents', 'framework', 'autonomous'] },

  // Local LLMs
  { id: 14, name: 'Ollama', fullName: 'ollama/ollama', description: 'Get up and running with large language models locally', url: 'https://github.com/ollama/ollama', stars: 85000, language: 'Go', category: 'Local LLMs', topics: ['llm', 'local', 'inference'] },
  { id: 15, name: 'LM Studio', fullName: 'lmstudio-ai/lms', description: 'Discover, download, and run local LLMs', url: 'https://github.com/lmstudio-ai/lms', stars: 8000, language: 'TypeScript', category: 'Local LLMs', topics: ['llm', 'local', 'ui'] },
  { id: 16, name: 'Llama.cpp', fullName: 'ggerganov/llama.cpp', description: 'Port of Facebook\'s LLaMA model in C++', url: 'https://github.com/ggerganov/llama.cpp', stars: 64000, language: 'C++', category: 'Local LLMs', topics: ['llama', 'inference', 'quantization'] },
  { id: 17, name: 'GPT4All', fullName: 'nomic-ai/gpt4all', description: 'Run open-source LLMs locally', url: 'https://github.com/nomic-ai/gpt4all', stars: 67000, language: 'C++', category: 'Local LLMs', topics: ['llm', 'local', 'quantization'] },

  // No-Code/Low-Code Platforms
  { id: 18, name: 'Dify', fullName: 'langgenius/dify', description: 'Open-source LLM app development platform', url: 'https://github.com/langgenius/dify', stars: 35000, language: 'TypeScript', category: 'No-Code', topics: ['llm', 'no-code', 'platform'] },
  { id: 19, name: 'FastGPT', fullName: 'labring/FastGPT', description: 'Knowledge base Q&A system based on the LLM', url: 'https://github.com/labring/FastGPT', stars: 12000, language: 'TypeScript', category: 'No-Code', topics: ['llm', 'knowledge-base', 'qa'] },
  { id: 20, name: 'Flowise', fullName: 'FlowiseAI/Flowise', description: 'Drag & drop UI to build customized LLM flows', url: 'https://github.com/FlowiseAI/Flowise', stars: 28000, language: 'TypeScript', category: 'No-Code', topics: ['visual', 'llm', 'no-code'] },
  { id: 21, name: 'n8n', fullName: 'n8n-io/n8n', description: 'Free and source-available fair-code licensed workflow automation', url: 'https://github.com/n8n-io/n8n', stars: 40000, language: 'TypeScript', category: 'No-Code', topics: ['automation', 'workflow', 'no-code'] },

  // Chatbots & Assistants
  { id: 22, name: 'ChatGLM', fullName: 'THUDM/ChatGLM-6B', description: 'An Open Bilingual Dialogue Language Model', url: 'https://github.com/THUDM/ChatGLM-6B', stars: 37000, language: 'Python', category: 'Chatbots', topics: ['chatbot', 'llm', 'chinese'] },
  { id: 23, name: 'Chatbot UI', fullName: 'mckaywrigley/chatbot-ui', description: 'An open source ChatGPT UI', url: 'https://github.com/mckaywrigley/chatbot-ui', stars: 27000, language: 'TypeScript', category: 'Chatbots', topics: ['chatbot', 'ui', 'openai'] },
  { id: 24, name: 'Open WebUI', fullName: 'open-webui/open-webui', description: 'User-friendly WebUI for LLMs', url: 'https://github.com/open-webui/open-webui', stars: 32000, language: 'Svelte', category: 'Chatbots', topics: ['ui', 'chatbot', 'ollama'] },
  { id: 25, name: 'LibreChat', fullName: 'danny-avila/LibreChat', description: 'Enhanced ChatGPT Clone: Features OpenAI, Assistants, Azure, Groq, GPT-4 Vision', url: 'https://github.com/danny-avila/LibreChat', stars: 16000, language: 'JavaScript', category: 'Chatbots', topics: ['chatbot', 'ui', 'openai'] },

  // RAG (Retrieval Augmented Generation)
  { id: 26, name: 'Langchain Chroma', fullName: 'chroma-core/chroma', description: 'The AI-native open-source embedding database', url: 'https://github.com/chroma-core/chroma', stars: 13000, language: 'Python', category: 'RAG', topics: ['embedding', 'vector-db', 'rag'] },
  { id: 27, name: 'Milvus', fullName: 'milvus-io/milvus', description: 'Vector database for similarity search with DL/ML', url: 'https://github.com/milvus-io/milvus', stars: 28000, language: 'Go', category: 'RAG', topics: ['vector-db', 'similarity-search', 'rag'] },
  { id: 28, name: 'Pinecone Client', fullName: 'pinecone-io/pinecone-python-client', description: 'Pinecone Python client library', url: 'https://github.com/pinecone-io/pinecone-python-client', stars: 3000, language: 'Python', category: 'RAG', topics: ['vector-db', 'rag', 'client'] },
  { id: 29, name: 'Weaviate', fullName: 'weaviate/weaviate', description: 'Vector search engine with built-in modules for RAG', url: 'https://github.com/weaviate/weaviate', stars: 11000, language: 'Go', category: 'RAG', topics: ['vector-db', 'rag', 'search'] },

  // Code Generation
  { id: 30, name: 'Copilot', fullName: 'github/copilot', description: 'GitHub Copilot (reference)', url: 'https://github.com/features/copilot', stars: 50000, language: 'N/A', category: 'Code Generation', topics: ['code-generation', 'ai', 'copilot'] },
  { id: 31, name: 'Cursor', fullName: 'getcursor/cursor', description: 'The AI Code Editor', url: 'https://github.com/getcursor/cursor', stars: 12000, language: 'TypeScript', category: 'Code Generation', topics: ['code-generation', 'editor', 'ai'] },
  { id: 32, name: 'Continue', fullName: 'continuedev/continue', description: 'Open source autopilot for VS Code and JetBrains IDEs', url: 'https://github.com/continuedev/continue', stars: 8000, language: 'TypeScript', category: 'Code Generation', topics: ['code-generation', 'ide', 'extension'] },
  { id: 33, name: 'Codeium', fullName: 'Exafunction/codeium', description: 'Free AI powered code completion for your favorite languages', url: 'https://github.com/Exafunction/codeium', stars: 11000, language: 'Rust', category: 'Code Generation', topics: ['code-completion', 'ai', 'ide'] },

  // Prompt Engineering
  { id: 34, name: 'LangSmith', fullName: 'langchain-ai/langsmith-sdk', description: 'LangChain monitoring and observability platform', url: 'https://github.com/langchain-ai/langsmith-sdk', stars: 2000, language: 'Python', category: 'Prompt Engineering', topics: ['monitoring', 'llm', 'observability'] },
  { id: 35, name: 'Promptbase', fullName: 'microsoft/promptbase', description: 'Tips, tricks, and examples for working with the OpenAI API', url: 'https://github.com/microsoft/promptbase', stars: 8000, language: 'Python', category: 'Prompt Engineering', topics: ['prompting', 'openai', 'examples'] },
  { id: 36, name: 'DSPy', fullName: 'stanfordnlp/dspy', description: 'Programming Language for LLM Applications', url: 'https://github.com/stanfordnlp/dspy', stars: 15000, language: 'Python', category: 'Prompt Engineering', topics: ['prompting', 'llm', 'programming'] },
  { id: 37, name: 'Promptly', fullName: 'talkingquickly/promptly', description: 'A prompt engineering IDE', url: 'https://github.com/talkingquickly/promptly', stars: 1500, language: 'TypeScript', category: 'Prompt Engineering', topics: ['prompt-engineering', 'ide'] },

  // Vision & Multimodal
  { id: 38, name: 'BLIP', fullName: 'salesforce/BLIP', description: 'Bootstrapping Language-Image Pre-training', url: 'https://github.com/salesforce/BLIP', stars: 5000, language: 'Python', category: 'Multimodal', topics: ['vision', 'multimodal', 'blip'] },
  { id: 39, name: 'LLaVA', fullName: 'haotian-liu/LLaVA', description: 'Large Language and Vision Assistant', url: 'https://github.com/haotian-liu/LLaVA', stars: 18000, language: 'Python', category: 'Multimodal', topics: ['vision', 'llm', 'multimodal'] },
  { id: 40, name: 'DALL-E', fullName: 'openai/DALL-E', description: 'DALL-E model and training code', url: 'https://github.com/openai/DALL-E', stars: 10000, language: 'Python', category: 'Multimodal', topics: ['image-generation', 'vision', 'openai'] },

  // Knowledge Management
  { id: 41, name: 'Obsidian', fullName: 'obsidianmd/obsidian-sample-plugin', description: 'Knowledge management system', url: 'https://github.com/obsidianmd/obsidian-sample-plugin', stars: 5000, language: 'TypeScript', category: 'Knowledge', topics: ['knowledge-management', 'plugin'] },
  { id: 42, name: 'Logseq', fullName: 'logseq/logseq', description: 'A privacy-first, open-source platform for knowledge management', url: 'https://github.com/logseq/logseq', stars: 31000, language: 'TypeScript', category: 'Knowledge', topics: ['knowledge-management', 'privacy', 'open-source'] },
  { id: 43, name: 'Slint', fullName: 'slint-ui/slint', description: 'UI toolkit for creating efficient graphical user interfaces', url: 'https://github.com/slint-ui/slint', stars: 14000, language: 'Rust', category: 'Knowledge', topics: ['ui', 'framework'] },

  // Web Search & Info Retrieval
  { id: 44, name: 'Searxng', fullName: 'searxng/searxng', description: 'Privacy-respecting metasearch engine', url: 'https://github.com/searxng/searxng', stars: 9000, language: 'Python', category: 'Search', topics: ['metasearch', 'privacy', 'search'] },
  { id: 45, name: 'Perplexity', fullName: 'perplexity-ai/perplexity-api', description: 'Perplexity API (research)', url: 'https://github.com/perplexity-ai', stars: 3000, language: 'Python', category: 'Search', topics: ['search', 'api', 'llm'] },

  // Popular Open Source Models
  { id: 46, name: 'Mistral', fullName: 'mistralai/mistral-src', description: 'Mistral LLM inference and training', url: 'https://github.com/mistralai/mistral-src', stars: 12000, language: 'Python', category: 'Models', topics: ['llm', 'model', 'inference'] },
  { id: 47, name: 'LLaMA', fullName: 'facebookresearch/llama', description: 'Inference code for LLaMA models', url: 'https://github.com/facebookresearch/llama', stars: 63000, language: 'Python', category: 'Models', topics: ['llama', 'model', 'inference'] },
  { id: 48, name: 'Falcon', fullName: 'tiiuae/falcon', description: 'Falcon LLM models', url: 'https://github.com/tiiuae/falcon', stars: 6000, language: 'Python', category: 'Models', topics: ['llm', 'model', 'falcon'] },
  { id: 49, name: 'MPT', fullName: 'mosaicml/llm-foundry', description: 'LLM training code and recipes', url: 'https://github.com/mosaicml/llm-foundry', stars: 5000, language: 'Python', category: 'Models', topics: ['llm', 'training', 'mpt'] },
  { id: 50, name: 'Alpaca', fullName: 'tatsu-lab/stanford_alpaca', description: 'Instruct-following LLaMA model', url: 'https://github.com/tatsu-lab/stanford_alpaca', stars: 28000, language: 'Python', category: 'Models', topics: ['llama', 'instruction-following', 'model'] },

  // Tool Use & Function Calling
  { id: 51, name: 'Gorilla', fullName: 'ShishirPatil/gorilla', description: 'API-based agents with tool use', url: 'https://github.com/ShishirPatil/gorilla', stars: 7000, language: 'Python', category: 'Tool Use', topics: ['agents', 'tool-use', 'api'] },
  { id: 52, name: 'HuggingGPT', fullName: 'microsoft/HuggingGPT', description: 'Connecting LLMs with Machine Learning models', url: 'https://github.com/microsoft/HuggingGPT', stars: 9000, language: 'Python', category: 'Tool Use', topics: ['agent', 'tool-use', 'huggingface'] },
  { id: 53, name: 'TaskWeaver', fullName: 'microsoft/TaskWeaver', description: 'Code-first agent framework from Microsoft', url: 'https://github.com/microsoft/TaskWeaver', stars: 5000, language: 'Python', category: 'Tool Use', topics: ['agents', 'code-first', 'framework'] },

  // Monitoring & Evaluation
  { id: 54, name: 'Arize', fullName: 'arize-ai/client_python', description: 'ML observability platform', url: 'https://github.com/arize-ai/client_python', stars: 2000, language: 'Python', category: 'Monitoring', topics: ['observability', 'ml', 'monitoring'] },
  { id: 55, name: 'W&B', fullName: 'wandb/wandb', description: 'Weights & Biases - ML experiment tracking', url: 'https://github.com/wandb/wandb', stars: 8000, language: 'Python', category: 'Monitoring', topics: ['ml', 'experiment-tracking', 'monitoring'] },
  { id: 56, name: 'MLflow', fullName: 'mlflow/mlflow', description: 'Open source platform for ML lifecycle', url: 'https://github.com/mlflow/mlflow', stars: 17000, language: 'Python', category: 'Monitoring', topics: ['ml', 'lifecycle', 'experiment-tracking'] },

  // Specialized Agents
  { id: 57, name: 'WebAgent', fullName: 'web-agent/web-agent', description: 'Browser automation with AI', url: 'https://github.com/web-agent/web-agent', stars: 4000, language: 'Python', category: 'Specialized', topics: ['agent', 'web-automation', 'ai'] },
  { id: 58, name: 'LanguageAgent', fullName: 'language-agent/language-agent', description: 'Natural language agent for code', url: 'https://github.com/language-agent/language-agent', stars: 3000, language: 'Python', category: 'Specialized', topics: ['agent', 'code', 'nlp'] },
  { id: 59, name: 'ReAct', fullName: 'ysymyth/ReAct', description: 'Reasoning and Acting in Language Models', url: 'https://github.com/ysymyth/ReAct', stars: 3000, language: 'Python', category: 'Specialized', topics: ['reasoning', 'agent', 'prompting'] },

  // Fine-tuning & Training
  { id: 60, name: 'LoRA', fullName: 'microsoft/LoRA', description: 'Low-Rank Adaptation for efficient fine-tuning', url: 'https://github.com/microsoft/LoRA', stars: 8000, language: 'Python', category: 'Fine-tuning', topics: ['fine-tuning', 'lora', 'training'] },
  { id: 61, name: 'QLoRA', fullName: 'artidoro/qlora', description: 'Efficient fine-tuning of quantized LLMs', url: 'https://github.com/artidoro/qlora', stars: 9000, language: 'Python', category: 'Fine-tuning', topics: ['fine-tuning', 'quantization', 'qlora'] },
  { id: 62, name: 'Unsloth', fullName: 'unslothai/unsloth', description: '2-5x faster LLM fine-tuning', url: 'https://github.com/unslothai/unsloth', stars: 7000, language: 'Python', category: 'Fine-tuning', topics: ['fine-tuning', 'performance', 'optimization'] },
  { id: 63, name: 'Axolotl', fullName: 'OpenAccess-AI-Collective/axolotl', description: 'Fine-tuning framework', url: 'https://github.com/OpenAccess-AI-Collective/axolotl', stars: 6000, language: 'Python', category: 'Fine-tuning', topics: ['fine-tuning', 'framework', 'training'] },

  // Integration & Plugins
  { id: 64, name: 'LangChain JS', fullName: 'langchain-ai/langchainjs', description: 'LangChain TypeScript implementation', url: 'https://github.com/langchain-ai/langchainjs', stars: 8000, language: 'TypeScript', category: 'Integration', topics: ['langchain', 'typescript', 'javascript'] },
  { id: 65, name: 'OpenAI Python', fullName: 'openai/openai-python', description: 'Python client for OpenAI API', url: 'https://github.com/openai/openai-python', stars: 19000, language: 'Python', category: 'Integration', topics: ['openai', 'api', 'client'] },
  { id: 66, name: 'Anthropic SDK', fullName: 'anthropics/anthropic-sdk-python', description: 'Python SDK for Anthropic API', url: 'https://github.com/anthropics/anthropic-sdk-python', stars: 2000, language: 'Python', category: 'Integration', topics: ['anthropic', 'api', 'client'] },

  // Deployment & Infrastructure
  { id: 67, name: 'Docker', fullName: 'moby/moby', description: 'Docker containerization platform', url: 'https://github.com/moby/moby', stars: 70000, language: 'Go', category: 'Deployment', topics: ['docker', 'containerization', 'devops'] },
  { id: 68, name: 'Ray', fullName: 'ray-project/ray', description: 'Distributed computing for ML and AI', url: 'https://github.com/ray-project/ray', stars: 32000, language: 'Python', category: 'Deployment', topics: ['distributed', 'ml', 'scaling'] },
  { id: 69, name: 'Kubernetes', fullName: 'kubernetes/kubernetes', description: 'Production-grade container orchestration', url: 'https://github.com/kubernetes/kubernetes', stars: 109000, language: 'Go', category: 'Deployment', topics: ['kubernetes', 'container-orchestration', 'devops'] },
  { id: 70, name: 'Modal', fullName: 'modal-labs/modal-client-python', description: 'Run code on the cloud', url: 'https://github.com/modal-labs/modal-client-python', stars: 3000, language: 'Python', category: 'Deployment', topics: ['serverless', 'cloud', 'deployment'] },

  // Research & Benchmarks
  { id: 71, name: 'MMLU', fullName: 'hendrycks/test', description: 'Massive Multitask Language Understanding benchmark', url: 'https://github.com/hendrycks/test', stars: 2000, language: 'Python', category: 'Research', topics: ['benchmark', 'evaluation', 'llm'] },
  { id: 72, name: 'BigBench', fullName: 'google/BIG-bench', description: 'Benchmark for evaluating language models', url: 'https://github.com/google/BIG-bench', stars: 4000, language: 'Python', category: 'Research', topics: ['benchmark', 'evaluation'] },
  { id: 73, name: 'HELM', fullName: 'stanford-crfm/helm', description: 'Holistic Evaluation of LLMs', url: 'https://github.com/stanford-crfm/helm', stars: 3000, language: 'Python', category: 'Research', topics: ['evaluation', 'benchmark', 'llm'] },

  // Security & Privacy
  { id: 74, name: 'Presidio', fullName: 'microsoft/presidio', description: 'Data protection APIs', url: 'https://github.com/microsoft/presidio', stars: 2000, language: 'Python', category: 'Security', topics: ['privacy', 'security', 'data-protection'] },
  { id: 75, name: 'TensorFlow Privacy', fullName: 'tensorflow/privacy', description: 'TensorFlow privacy library', url: 'https://github.com/tensorflow/privacy', stars: 1500, language: 'Python', category: 'Security', topics: ['privacy', 'differential-privacy', 'ml'] },

  // Additional Popular Projects
  { id: 76, name: 'Transformers', fullName: 'huggingface/transformers', description: 'State-of-the-art NLP', url: 'https://github.com/huggingface/transformers', stars: 135000, language: 'Python', category: 'Libraries', topics: ['nlp', 'transformers', 'huggingface'] },
  { id: 77, name: 'Pytorch', fullName: 'pytorch/pytorch', description: 'Tensors and Dynamic neural networks', url: 'https://github.com/pytorch/pytorch', stars: 80000, language: 'Python', category: 'Libraries', topics: ['deep-learning', 'ml', 'pytorch'] },
  { id: 78, name: 'TensorFlow', fullName: 'tensorflow/tensorflow', description: 'Open source machine learning framework', url: 'https://github.com/tensorflow/tensorflow', stars: 185000, language: 'C++', category: 'Libraries', topics: ['ml', 'tensorflow', 'deep-learning'] },
  { id: 79, name: 'Scikit-learn', fullName: 'scikit-learn/scikit-learn', description: 'Machine learning in Python', url: 'https://github.com/scikit-learn/scikit-learn', stars: 60000, language: 'Python', category: 'Libraries', topics: ['ml', 'scikit-learn', 'machine-learning'] },
  { id: 80, name: 'Pandas', fullName: 'pandas-dev/pandas', description: 'Flexible and powerful data analysis', url: 'https://github.com/pandas-dev/pandas', stars: 43000, language: 'Python', category: 'Libraries', topics: ['data-analysis', 'pandas', 'dataframe'] },
  { id: 81, name: 'NumPy', fullName: 'numpy/numpy', description: 'Fundamental package for scientific computing', url: 'https://github.com/numpy/numpy', stars: 29000, language: 'Python', category: 'Libraries', topics: ['scientific-computing', 'numpy', 'arrays'] },
  { id: 82, name: 'FastAPI', fullName: 'tiangolo/fastapi', description: 'Fast web framework for building APIs', url: 'https://github.com/tiangolo/fastapi', stars: 73000, language: 'Python', category: 'Libraries', topics: ['fastapi', 'web-framework', 'api'] },
  { id: 83, name: 'Flask', fullName: 'pallets/flask', description: 'The Python micro framework for building web applications', url: 'https://github.com/pallets/flask', stars: 67000, language: 'Python', category: 'Libraries', topics: ['web-framework', 'python', 'api'] },
  { id: 84, name: 'Django', fullName: 'django/django', description: 'The Web framework for perfectionists with deadlines', url: 'https://github.com/django/django', stars: 78000, language: 'Python', category: 'Libraries', topics: ['web-framework', 'django', 'python'] },
  { id: 85, name: 'Next.js', fullName: 'vercel/next.js', description: 'The React Framework for Production', url: 'https://github.com/vercel/next.js', stars: 123000, language: 'JavaScript', category: 'Libraries', topics: ['react', 'nextjs', 'web-framework'] },
];

export const categories = [
  'Personal Assistant',
  'Autonomous Agents',
  'LLM Frameworks',
  'Multi-Agent',
  'Local LLMs',
  'No-Code',
  'Chatbots',
  'RAG',
  'Code Generation',
  'Prompt Engineering',
  'Multimodal',
  'Knowledge',
  'Search',
  'Models',
  'Tool Use',
  'Monitoring',
  'Specialized',
  'Fine-tuning',
  'Integration',
  'Deployment',
  'Research',
  'Security',
  'Libraries',
];
