# AI-102: Azure AI Engineer Associate - Practice Exam

## Exam Information
- **Duration**: 120 minutes
- **Number of Questions**: 60 questions
- **Passing Score**: 700/1000
- **Question Types**: Multiple choice, multiple answer, drag-and-drop, case studies

---

## Domain 1: Plan and Manage an Azure AI Solution (15-20%)

### Question 1
You are designing an Azure AI solution that processes customer feedback from multiple sources. The solution must handle unexpected spikes in traffic and automatically scale resources.

Which Azure service should you use to host your AI models?

A) Azure Virtual Machines  
B) Azure Container Instances (ACI)  
C) Azure Kubernetes Service (AKS)  
D) Azure Functions

**Answer**: C
**Explanation**: AKS provides automatic scaling, container orchestration, and is ideal for production AI workloads with variable traffic patterns.

---

### Question 2
You need to monitor the performance of your Azure Cognitive Services API calls and set up alerts when error rates exceed 5%.

Which Azure service should you use?

A) Azure Monitor  
B) Azure Security Center  
C) Azure Advisor  
D) Azure Service Health

**Answer**: A
**Explanation**: Azure Monitor collects metrics and logs from Cognitive Services and allows you to create custom alerts based on error rates and other metrics.

---

### Question 3
Your company requires that all AI services comply with GDPR regulations and data must not leave the European region.

What should you configure when creating Azure Cognitive Services resources?

A) Set the pricing tier to Standard  
B) Select a European region during resource creation  
C) Enable virtual network service endpoints  
D) Configure a private endpoint

**Answer**: B
**Explanation**: Selecting a European region ensures data residency compliance. While C and D add security, the primary requirement is selecting the correct region.

---

### Question 4
You are implementing an Azure AI solution that requires authentication. You need to ensure that credentials are not stored in your application code.

Which Azure service should you use to manage secrets?

A) Azure Active Directory  
B) Azure Key Vault  
C) Azure Storage  
D) Azure Configuration

**Answer**: B
**Explanation**: Azure Key Vault securely stores and manages secrets, keys, and certificates used by applications.

---

### Question 5
You need to estimate the monthly cost of implementing an Azure Computer Vision solution that will process approximately 100,000 images per month with OCR capabilities.

What should you use?

A) Azure Monitor  
B) Azure Cost Management  
C) Azure Pricing Calculator  
D) Azure Advisor

**Answer**: C
**Explanation**: Azure Pricing Calculator allows you to estimate costs before deploying resources based on expected usage.

---

### Question 6
Your AI solution needs to handle 50 transactions per second. The current S0 tier of Azure Cognitive Services supports only 10 TPS.

What should you do?

A) Create multiple S0 tier resources and load balance between them  
B) Upgrade to a higher pricing tier  
C) Implement request throttling  
D) Use Azure Content Delivery Network (CDN)

**Answer**: B
**Explanation**: Higher pricing tiers provide increased transaction limits. S1, S2, and higher tiers support more TPS.

---

### Question 7
You need to deploy an Azure AI model that was trained using Azure Machine Learning to a production environment with 99.9% SLA requirements.

Which deployment option should you choose?

A) Azure Machine Learning real-time endpoints  
B) Azure Container Instances  
C) Local development server  
D) Azure Batch

**Answer**: A
**Explanation**: Azure ML real-time endpoints provide managed, scalable deployment with SLA guarantees suitable for production.

---

### Question 8
You are implementing Role-Based Access Control (RBAC) for your Azure Cognitive Services resource. Data scientists should be able to call APIs but not regenerate keys.

Which role should you assign?

A) Cognitive Services Contributor  
B) Cognitive Services User  
C) Cognitive Services Reader  
D) Owner

**Answer**: B
**Explanation**: Cognitive Services User role allows API calls but doesn't permit key regeneration or resource modifications.

---

### Question 9
You need to implement a disaster recovery solution for your Azure Cognitive Services deployment.

What should you do?

A) Enable geo-replication in the same resource  
B) Create resources in multiple regions and implement failover logic  
C) Use Azure Backup  
D) Enable Azure Site Recovery

**Answer**: B
**Explanation**: Cognitive Services resources are regional. Disaster recovery requires creating resources in multiple regions and implementing application-level failover.

---

### Question 10
You are monitoring your Azure OpenAI Service deployment and notice throttling errors during peak hours.

What should you do to resolve this issue?

A) Increase the token limit per minute (TPM) allocation  
B) Add caching to reduce API calls  
C) Switch to a different model  
D) Enable auto-scaling

**Answer**: A
**Explanation**: Throttling in Azure OpenAI is typically due to TPM limits. Requesting increased quota or implementing rate limiting are solutions.

---

## Domain 2: Implement Computer Vision Solutions (15-20%)

### Question 11
You need to analyze images to detect over 10,000 specific products in retail stores.

Which Azure Computer Vision feature should you use?

A) Image Analysis 4.0 with standard tags  
B) Custom Vision with classification model  
C) Custom Vision with object detection model  
D) Face API

**Answer**: C
**Explanation**: Custom Vision object detection allows you to train custom models to detect and locate specific products in images.

---

### Question 12
You are building a solution to extract text from scanned invoices including tables, key-value pairs, and handwritten notes.

Which service should you use?

A) Computer Vision OCR  
B) Azure Form Recognizer (Document Intelligence)  
C) Custom Vision  
D) Text Analytics

**Answer**: B
**Explanation**: Form Recognizer/Document Intelligence is specifically designed to extract structured data from documents including tables and key-value pairs.

---

### Question 13
Your application needs to detect and identify faces in images, but you must not store biometric data due to privacy regulations.

Which approach should you use?

A) Face API with face storage enabled  
B) Face API with detection only (no storage)  
C) Custom Vision face detection  
D) Computer Vision people detection

**Answer**: B
**Explanation**: Face API detection operations can be used without persisting face data, complying with privacy requirements.

---

### Question 14
You need to generate natural language descriptions of images for accessibility purposes.

Which Computer Vision API operation should you use?

A) Analyze Image with Tags feature  
B) Analyze Image with Description feature  
C) Detect Objects  
D) OCR

**Answer**: B
**Explanation**: The Description feature generates human-readable sentences describing image content.

---

### Question 15
You are training a Custom Vision classification model. After 100 iterations, the precision is 95% but recall is only 60%.

What should you do?

A) Add more training images  
B) Add more varied training images, especially for underrepresented classes  
C) Reduce the number of training iterations  
D) Decrease the probability threshold

**Answer**: B
**Explanation**: Low recall with high precision indicates the model is missing many positive cases. Adding more diverse training data improves recall.

---

### Question 16
You need to detect specific brands and logos in social media images.

Which feature should you use?

A) Computer Vision brands detection  
B) Custom Vision classification  
C) Custom Vision object detection  
D) Image Analysis tags

**Answer**: A
**Explanation**: Computer Vision's brand detection feature identifies thousands of commercial brands from images.

---

### Question 17
Your Custom Vision model needs to run on edge devices with no internet connectivity.

What should you do?

A) Export the model to TensorFlow or ONNX format  
B) Use Computer Vision Read API  
C) Deploy to Azure Container Instances  
D) Use Azure IoT Hub

**Answer**: A
**Explanation**: Custom Vision models can be exported to various formats (TensorFlow, ONNX, CoreML) for offline edge deployment.

---

### Question 18
You need to detect adult, racy, or gory content in user-uploaded images and automatically flag inappropriate content.

Which service should you use?

A) Content Moderator  
B) Computer Vision with content flags  
C) Custom Vision  
D) Face API

**Answer**: B
**Explanation**: Computer Vision's Image Analysis includes adult content detection capabilities that classify images for moderation.

---

### Question 19
You are building a solution to analyze videos and extract keyframes, detect scene changes, and generate thumbnails.

Which Azure service should you use?

A) Computer Vision Video Analysis  
B) Azure Media Services Video Indexer  
C) Custom Vision  
D) Azure Video Analyzer

**Answer**: B
**Explanation**: Video Indexer provides comprehensive video analysis including scene detection, thumbnail generation, and content extraction.

---

### Question 20
You need to read text from images that contain both printed and handwritten content in multiple languages.

Which API should you use?

A) Computer Vision OCR (legacy)  
B) Computer Vision Read API  
C) Form Recognizer Layout API  
D) Ink Recognizer

**Answer**: B
**Explanation**: The Read API is optimized for text-heavy images and supports both printed and handwritten text in multiple languages.

---

## Domain 3: Implement Natural Language Processing Solutions (30-35%)

### Question 21
You need to analyze customer reviews and extract specific product features mentioned (e.g., "battery life", "screen quality").

Which Azure Cognitive Service for Language feature should you use?

A) Sentiment Analysis  
B) Key Phrase Extraction  
C) Named Entity Recognition (NER)  
D) Custom Named Entity Recognition

**Answer**: D
**Explanation**: Custom NER allows you to train models to extract domain-specific entities like product features.

---

### Question 22
You are building a chatbot that needs to understand user intents and extract entities from natural language queries.

Which service should you use?

A) Text Analytics  
B) Language Understanding (LUIS) or Conversational Language Understanding (CLU)  
C) QnA Maker  
D) Translator

**Answer**: B
**Explanation**: LUIS/CLU are designed specifically for intent recognition and entity extraction in conversational scenarios.

---

### Question 23
Your organization needs to translate documents while preserving the formatting and structure. The documents contain industry-specific terminology.

What should you use?

A) Translator Text API  
B) Translator Document API with custom glossary  
C) Language Detection API  
D) Text Analytics translation

**Answer**: B
**Explanation**: Document Translation preserves formatting, and custom glossaries ensure accurate translation of domain-specific terms.

---

### Question 24
You need to create a knowledge base from existing FAQ documents and website content to power a customer support bot.

Which service should you use?

A) LUIS  
B) QnA Maker / Question Answering  
C) Text Analytics  
D) Custom Text Classification

**Answer**: B
**Explanation**: QnA Maker/Question Answering is designed to create knowledge bases from FAQs and documents for conversational scenarios.

---

### Question 25
You are analyzing social media posts to determine the overall sentiment (positive, negative, neutral) and identify specific opinions about products.

Which features should you use? (Choose two)

A) Sentiment Analysis  
B) Opinion Mining  
C) Entity Linking  
D) Language Detection  
E) Key Phrase Extraction

**Answer**: A and B
**Explanation**: Sentiment Analysis provides overall sentiment, while Opinion Mining extracts aspect-based sentiment (opinions about specific features).

---

### Question 26
Your LUIS app is showing low precision for certain intents that have overlapping utterances.

What should you do?

A) Add more utterances with clear distinctions between intents  
B) Delete one of the overlapping intents  
C) Use patterns instead of example utterances  
D) Enable active learning

**Answer**: A
**Explanation**: Overlapping intents cause confusion. Adding more diverse, clearly distinguished utterances improves model precision.

---

### Question 27
You need to implement a conversational AI solution that can make restaurant reservations by interacting with external booking systems.

Which service should you use?

A) QnA Maker  
B) LUIS only  
C) Azure Bot Service with LUIS and custom code  
D) Text Analytics

**Answer**: C
**Explanation**: Azure Bot Service provides the framework for complex conversations, LUIS handles intent, and custom code integrates with external systems.

---

### Question 28
You are building a Language Understanding model that needs to extract date and time information from user queries.

What should you use?

A) Create a custom entity  
B) Use prebuilt datetimeV2 entity  
C) Use regex entity  
D) Use list entity

**Answer**: B
**Explanation**: Prebuilt entities like datetimeV2 are optimized for common entity types and handle various date/time formats automatically.

---

### Question 29
You need to summarize long documents into concise abstracts automatically.

Which Azure Cognitive Service feature should you use?

A) Key Phrase Extraction  
B) Text Summarization (extractive and abstractive)  
C) Entity Recognition  
D) Text Analytics Custom

**Answer**: B
**Explanation**: Text Summarization feature provides both extractive (selecting key sentences) and abstractive (generating summaries) capabilities.

---

### Question 30
Your application needs to detect personally identifiable information (PII) in text and redact it before storing.

Which feature should you use?

A) Named Entity Recognition with PII detection  
B) Content Moderator  
C) Sentiment Analysis  
D) Language Detection

**Answer**: A
**Explanation**: NER with PII detection identifies and can redact sensitive information like names, addresses, and credit card numbers.

---

### Question 31
You are creating a LUIS app for a multi-turn conversation where context from previous turns affects intent recognition.

What should you implement?

A) Patterns  
B) Phrase lists  
C) Conversation context  
D) Multiple intents

**Answer**: C
**Explanation**: Conversation context maintains state across turns in a conversation, enabling context-aware intent recognition.

---

### Question 32
You need to analyze call center transcripts to identify speakers and extract insights from conversations.

Which service provides speaker identification and conversation analytics?

A) Speech Service speaker recognition  
B) Text Analytics with conversation analysis  
C) Azure Communication Services  
D) Language Studio conversation summarization

**Answer**: B and D (Best answer: B for full features)
**Explanation**: Text Analytics Conversation Analysis provides speaker identification, topic extraction, and insights from multi-party conversations.

---

### Question 33
Your LUIS application exceeds the authoring limits for a free tier.

What should you do?

A) Create multiple LUIS apps and distribute intents  
B) Upgrade to a paid authoring resource  
C) Delete old utterances  
D) Export and import to a new resource

**Answer**: B
**Explanation**: Upgrading to a paid authoring resource increases limits for applications, intents, entities, and utterances.

---

### Question 34
You need to translate speech in real-time during a video conference between participants speaking different languages.

Which Azure service should you use?

A) Translator Text API  
B) Speech Service with speech translation  
C) Video Indexer  
D) Text Analytics

**Answer**: B
**Explanation**: Speech Service provides real-time speech-to-speech translation capabilities for live conversations.

---

### Question 35
You are building a custom text classification model to categorize support tickets into predefined categories.

Which service should you use?

A) LUIS  
B) Custom Text Classification  
C) Text Analytics standard classification  
D) QnA Maker

**Answer**: B
**Explanation**: Custom Text Classification allows training models for document categorization with custom categories.

---

## Domain 4: Implement Knowledge Mining and Document Intelligence Solutions (10-15%)

### Question 36
You need to create a searchable index of documents stored in Azure Blob Storage, extracting text, entities, and key phrases.

Which service should you use?

A) Azure Cognitive Search  
B) Azure SQL Database Full-Text Search  
C) Azure Data Explorer  
D) Azure Table Storage

**Answer**: A
**Explanation**: Azure Cognitive Search provides AI-powered indexing with built-in cognitive skills for content extraction and enrichment.

---

### Question 37
You are implementing an Azure Cognitive Search solution that needs to extract custom business entities from documents during indexing.

What should you do?

A) Use built-in cognitive skills  
B) Create a custom skill using Azure Functions  
C) Use the Entity Recognition skill with custom categories  
D) Pre-process documents before indexing

**Answer**: B
**Explanation**: Custom skills allow you to extend the enrichment pipeline with custom logic for specialized extraction requirements.

---

### Question 38
Your Azure Cognitive Search index needs to support typos and misspellings in user queries.

What should you configure?

A) Fuzzy search with edit distance  
B) Phonetic matching  
C) Autocomplete  
D) Suggestions

**Answer**: A
**Explanation**: Fuzzy search with Levenshtein distance handles typos and spelling variations in queries.

---

### Question 39
You need to extract data from standardized W-2 tax forms including all fields and boxes.

Which Azure service should you use?

A) Computer Vision OCR  
B) Form Recognizer with prebuilt tax document model  
C) Custom Vision  
D) Text Analytics

**Answer**: B
**Explanation**: Form Recognizer provides prebuilt models for common document types like tax forms, invoices, and receipts.

---

### Question 40
Your Cognitive Search solution needs to enrich documents with sentiment scores during indexing.

What should you add to your skillset?

A) SentimentSkill (V3)  
B) KeyPhraseExtractionSkill  
C) EntityRecognitionSkill  
D) LanguageDetectionSkill

**Answer**: A
**Explanation**: SentimentSkill integrates Text Analytics sentiment analysis into the search enrichment pipeline.

---

### Question 41
You need to implement a search solution that returns semantically relevant results, not just keyword matches.

What should you configure in Azure Cognitive Search?

A) Enable semantic search  
B) Use fuzzy search  
C) Implement filters  
D) Add synonyms

**Answer**: A
**Explanation**: Semantic search uses deep learning models to understand query intent and document meaning for better relevance.

---

### Question 42
Your Azure Cognitive Search index contains millions of documents. You need to improve query performance for frequently accessed data.

What should you implement?

A) Increase replica count  
B) Add more partitions  
C) Enable caching  
D) Use a different pricing tier

**Answer**: A
**Explanation**: Replicas improve query performance and provide high availability. Partitions are for storage capacity.

---

### Question 43
You need to extract tables from PDF documents and convert them to structured JSON format.

Which Form Recognizer feature should you use?

A) Prebuilt Invoice model  
B) Layout API  
C) Custom Form model  
D) Business Card model

**Answer**: B
**Explanation**: Layout API extracts text, tables, and structure from documents without requiring custom training.

---

### Question 44
You are building an Azure Cognitive Search solution that needs to provide auto-complete suggestions as users type.

Which feature should you implement?

A) Suggester with suggestions API  
B) Fuzzy search  
C) Faceted navigation  
D) Scoring profiles

**Answer**: A
**Explanation**: Suggesters enable autocomplete and search-as-you-type functionality in Cognitive Search.

---

### Question 45
Your search solution needs to boost results where the title field matches the query more than body content matches.

What should you use?

A) Scoring profiles with field weights  
B) Filters  
C) Facets  
D) Analyzers

**Answer**: A
**Explanation**: Scoring profiles allow you to customize result ranking by assigning weights to different fields.

---

## Domain 5: Implement Generative AI Solutions (10-15%)

### Question 46
You need to implement a solution using Azure OpenAI that generates product descriptions based on specifications.

Which model type should you use?

A) GPT-4 or GPT-3.5-turbo  
B) DALL-E  
C) Embeddings (text-embedding-ada-002)  
D) Codex

**Answer**: A
**Explanation**: GPT models are optimized for text generation tasks like creating product descriptions.

---

### Question 47
You are building a RAG (Retrieval Augmented Generation) solution that answers questions based on your company's internal documents.

Which components do you need? (Choose three)

A) Azure OpenAI for generation  
B) Azure Cognitive Search for retrieval  
C) Embeddings for document vectors  
D) Custom Vision  
E) Speech Service

**Answer**: A, B, and C
**Explanation**: RAG requires document retrieval (Search), vector embeddings for semantic matching, and LLM for generation (OpenAI).

---

### Question 48
You need to prevent your Azure OpenAI application from generating harmful or biased content.

What should you implement?

A) Azure OpenAI content filters  
B) Input length limits  
C) Temperature parameter = 0  
D) Token limits

**Answer**: A
**Explanation**: Content filters detect and block harmful content in both inputs and outputs based on severity levels.

---

### Question 49
Your Azure OpenAI application generates inconsistent responses for the same prompt.

What should you adjust to make outputs more deterministic?

A) Reduce temperature parameter (closer to 0)  
B) Increase top_p value  
C) Increase max_tokens  
D) Change the model

**Answer**: A
**Explanation**: Lower temperature values (0-0.3) make outputs more focused and deterministic, while higher values increase randomness.

---

### Question 50
You need to generate embeddings for semantic search across 100,000 documents.

Which Azure OpenAI model should you use?

A) GPT-4  
B) GPT-3.5-turbo  
C) text-embedding-ada-002  
D) DALL-E 3

**Answer**: C
**Explanation**: text-embedding-ada-002 is optimized for creating vector embeddings for semantic search and similarity comparisons.

---

### Question 51
You are implementing prompt engineering for an Azure OpenAI solution. You need to provide examples in the prompt to guide the model's behavior.

Which technique should you use?

A) Zero-shot prompting  
B) Few-shot prompting  
C) Fine-tuning  
D) Temperature adjustment

**Answer**: B
**Explanation**: Few-shot prompting includes examples in the prompt to demonstrate the desired output format and behavior.

---

### Question 52
Your Azure OpenAI deployment needs to handle 500 requests per minute, but you're experiencing throttling.

What should you do?

A) Request quota increase for tokens per minute (TPM)  
B) Deploy multiple models  
C) Reduce max_tokens parameter  
D) Use a different region

**Answer**: A
**Explanation**: Throttling is typically caused by exceeding TPM or RPM quotas. Requesting increased allocation resolves this.

---

### Question 53
You need to generate images based on text descriptions for a marketing campaign.

Which Azure OpenAI model should you use?

A) GPT-4  
B) GPT-3.5-turbo  
C) DALL-E 2 or DALL-E 3  
D) text-embedding-ada-002

**Answer**: C
**Explanation**: DALL-E models are specifically designed for text-to-image generation.

---

### Question 54
You are implementing a chatbot using Azure OpenAI that needs to maintain conversation context across multiple turns.

What should you do?

A) Send the entire conversation history with each request  
B) Use embeddings for each message  
C) Fine-tune a custom model  
D) Increase temperature

**Answer**: A
**Explanation**: GPT models are stateless. To maintain context, include relevant conversation history in each API call within token limits.

---

### Question 55
You need to implement a solution that generates code snippets based on natural language descriptions.

Which approach is most suitable?

A) Use GPT-4 with code-specific prompts  
B) Use DALL-E  
C) Use text-embedding-ada-002  
D) Use Custom Vision

**Answer**: A
**Explanation**: GPT-4 and GPT-3.5 models can generate code effectively when prompted appropriately.

---

## Scenario-Based Questions

### Question 56
**Scenario**: Your company is building a customer support system that needs to:
1. Understand customer inquiries and route them to appropriate departments
2. Answer common questions from a knowledge base
3. Escalate complex issues to human agents
4. Support multiple languages

Which combination of services should you use?

A) LUIS for intent, QnA Maker for answers, Translator for languages, Azure Bot Service for orchestration  
B) Text Analytics only  
C) Custom Vision and Speech Service  
D) Azure Search and Form Recognizer

**Answer**: A
**Explanation**: This solution requires intent recognition (LUIS/CLU), knowledge base (QnA Maker), translation (Translator), and orchestration (Bot Service).

---

### Question 57
**Scenario**: You need to build a solution that processes insurance claim forms. The forms vary in layout but contain similar fields (claimant name, date, amount, description).

What is the best approach?

A) Use Computer Vision OCR and extract with regex  
B) Train a Custom Form Recognizer model with sample forms  
C) Use prebuilt Form Recognizer invoice model  
D) Use Custom Vision classification

**Answer**: B
**Explanation**: Custom Form Recognizer models handle varying layouts and can be trained to extract specific fields consistently.

---

### Question 58
**Scenario**: Your retail application needs to:
- Detect faces in store cameras
- Determine age range and gender
- NOT store any biometric data

Which approach ensures compliance?

A) Face API with detection only, no face list or person group  
B) Face API with face list but auto-delete after 24 hours  
C) Custom Vision face detection  
D) Computer Vision person detection without Face API

**Answer**: A
**Explanation**: Using Face API detection operations without persisting data to face lists or person groups ensures no biometric storage.

---

### Question 59
**Scenario**: You are implementing an e-learning platform that needs to:
- Convert lecture audio to text
- Identify different speakers (professor, students)
- Generate summaries of discussions
- Create searchable transcripts

Which services should you combine? (Choose three)

A) Speech-to-Text with speaker diarization  
B) Text Summarization  
C) Azure Cognitive Search  
D) Custom Vision  
E) DALL-E

**Answer**: A, B, and C
**Explanation**: Speech-to-Text handles transcription and speaker identification, Text Summarization creates summaries, and Cognitive Search enables searchable transcripts.

---

### Question 60
**Scenario**: Your company wants to implement an AI-powered document processing pipeline that:
1. Extracts text and structure from PDFs
2. Classifies documents by type (invoice, receipt, contract, etc.)
3. Routes to appropriate systems
4. Makes documents searchable

Design the solution architecture.

Which services should you use? (Choose all that apply)

A) Form Recognizer for extraction  
B) Custom Text Classification for document type  
C) Azure Logic Apps or Functions for routing  
D) Azure Cognitive Search for searchability  
E) Custom Vision

**Answer**: A, B, C, and D
**Explanation**: This solution requires document extraction (Form Recognizer), classification (Custom Text), workflow automation (Logic Apps/Functions), and search (Cognitive Search).

---

## Answer Key Summary

| Question | Answer | Question | Answer | Question | Answer |
|----------|--------|----------|--------|----------|--------|
| 1 | C | 21 | D | 41 | A |
| 2 | A | 22 | B | 42 | A |
| 3 | B | 23 | B | 43 | B |
| 4 | B | 24 | B | 44 | A |
| 5 | C | 25 | A, B | 45 | A |
| 6 | B | 26 | A | 46 | A |
| 7 | A | 27 | C | 47 | A,B,C |
| 8 | B | 28 | B | 48 | A |
| 9 | B | 29 | B | 49 | A |
| 10 | A | 30 | A | 50 | C |
| 11 | C | 31 | C | 51 | B |
| 12 | B | 32 | B | 52 | A |
| 13 | B | 33 | B | 53 | C |
| 14 | B | 34 | B | 54 | A |
| 15 | B | 35 | B | 55 | A |
| 16 | A | 36 | A | 56 | A |
| 17 | A | 37 | B | 57 | B |
| 18 | B | 38 | A | 58 | A |
| 19 | B | 39 | B | 59 | A,B,C |
| 20 | B | 40 | A | 60 | A,B,C,D |

---

## Exam Tips

1. **Time Management**: 2 minutes per question average
2. **Read Carefully**: Scenario-based questions may have multiple correct approaches—choose the BEST answer
3. **Eliminate Wrong Answers**: Rule out obviously incorrect options first
4. **Hands-On Experience**: Practice with actual Azure services is crucial
5. **Review Docs**: Microsoft Learn and official documentation are your best resources

## Study Resources

- Microsoft Learn: AI-102 Learning Path
- Microsoft Docs: Azure Cognitive Services
- Azure AI Studio for hands-on practice
- Microsoft Practice Assessments (official)

---

**Disclaimer**: These are practice questions created for study purposes based on the official AI-102 exam objectives. They are not actual exam questions and are designed to help you prepare for the concepts covered in the certification.
