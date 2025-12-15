# Azure AI Engineer Associate (AI-102) Practice Questions

**Disclaimer:** These questions are designed for practice and study purposes. They cover the official exam objectives for the AI-102 certification but are *not* actual questions from the exam. Memorizing these answers is not a substitute for hands-on experience and understanding the concepts.

## Domain 1: Plan and Manage an Azure AI Solution

### Question 1
You are designing an Azure AI solution that requires analyzing customer reviews in real-time. You need to estimate the costs. Which two metrics are typically used to calculate the cost of Azure AI Services (e.g., Language service)?
A. Number of concurrent users and storage size
B. Number of transactions (API calls) and pricing tier
C. Compute hours and memory usage
D. Network bandwidth and region

<details>
<summary>Answer & Explanation</summary>
**Answer: B**
**Explanation:** Most Azure AI Services (like Language, Vision, Speech) are billed based on the number of transactions (API calls) made and the specific pricing tier (Free vs. Standard) selected. Some services might also have a cost component for training hours or storage, but transactions are the primary metric for inference.
</details>

### Question 2
You have multiple Azure AI resources (Speech, Vision, Language) deployed in a resource group. You want to manage access to all of them using a single API key and endpoint. What should you create?
A. A multi-service Azure AI Services resource
B. A separate resource for each service
C. An Azure Logic App
D. An Azure Key Vault

<details>
<summary>Answer & Explanation</summary>
**Answer: A**
**Explanation:** A multi-service Azure AI Services resource allows you to access multiple Azure AI services (Vision, Language, Speech, etc.) with a single key and endpoint. This simplifies management compared to creating individual resources for each service.
</details>

### Question 3
You need to ensure that your Azure AI service application can only be accessed from a specific virtual network (VNet). What should you configure?
A. Azure Active Directory (Entra ID) authentication
B. Private Endpoints and disable public network access
C. Regenerate the subscription keys
D. Use the Free pricing tier

<details>
<summary>Answer & Explanation</summary>
**Answer: B**
**Explanation:** To restrict access to a VNet, you should configure Private Endpoints for your Azure AI resource and disable public network access. This ensures traffic remains on the Microsoft backbone network and is not exposed to the public internet.
</details>

---

## Domain 2: Implement Content Moderation Solutions

### Question 4
You are building a social media platform and need to automatically detect and block offensive images uploaded by users. Which service should you use?
A. Azure AI Vision - Image Analysis
B. Azure AI Content Safety
C. Azure AI Language - Sentiment Analysis
D. Azure AI Custom Vision

<details>
<summary>Answer & Explanation</summary>
**Answer: B** (or Azure AI Vision - Adult/Racy detection, but Content Safety is the modern standard)
**Explanation:** Azure AI Content Safety is specifically designed to detect harmful content (hate, violence, self-harm, sexual) in text and images. While Azure AI Vision has legacy adult/racy detection, Content Safety is the preferred service for comprehensive moderation.
</details>

---

## Domain 3: Implement Computer Vision Solutions

### Question 5
You need to build an application that can identify specific employees in your office building from a security camera feed. You have a database of employee photos. Which service and feature is most appropriate?
A. Azure AI Vision - Image Analysis
B. Azure AI Face - Verify and Identify
C. Azure AI Custom Vision - Object Detection
D. Azure Video Indexer

<details>
<summary>Answer & Explanation</summary>
**Answer: B**
**Explanation:** The Azure AI Face service provides specific capabilities for face detection, verification (1:1 matching), and identification (1:N matching) against a group of known faces. NOTE: This capability is now Limited Access and requires specific approval from Microsoft.
</details>

### Question 6
You want to train a custom model to detect defects in manufacturing parts. You have a dataset of 50 images of defective parts and 50 images of non-defective parts. Which tool should you use?
A. Azure AI Vision - OCR
B. Azure AI Custom Vision
C. Azure AI Face
D. Azure AI Document Intelligence

<details>
<summary>Answer & Explanation</summary>
**Answer: B**
**Explanation:** Azure AI Custom Vision allows you to train your own image classification or object detection models using your own labeled images. This is ideal for domain-specific tasks like defect detection.
</details>

---

## Domain 4: Implement Natural Language Processing Solutions

### Question 7
You are developing a chatbot that needs to understand user intent (e.g., "Book a flight" vs. "Check flight status") and extract entities (e.g., "London", "tomorrow"). Which service is best suited for this?
A. Azure AI Language - Key Phrase Extraction
B. Azure AI Language - Conversational Language Understanding (CLU)
C. Azure AI QnA Maker
D. Azure AI Speech

<details>
<summary>Answer & Explanation</summary>
**Answer: B**
**Explanation:** Conversational Language Understanding (CLU) is the successor to LUIS. It is designed to predict intents and extract entities from natural language utterances to support conversational applications.
</details>

### Question 8
You need to translate a large batch of technical documents from English to French, Spanish, and German. You want to ensure specific technical terms are translated correctly according to your company's glossary. What feature should you use?
A. Azure AI Translator - Real-time translation
B. Azure AI Translator - Custom Translator
C. Azure AI Language - Sentiment Analysis
D. Azure AI Speech - Speech Translation

<details>
<summary>Answer & Explanation</summary>
**Answer: B**
**Explanation:** Custom Translator allows you to build a translation system that reflects your business, industry, and domain-specific terminology (glossary) and style.
</details>

---

## Domain 5: Implement Knowledge Mining Solutions

### Question 9
You are configuring an Azure AI Search (formerly Cognitive Search) index. You want users to be able to find results even if they misspell the search terms. What should you configure?
A. Scoring profiles
B. Faceted navigation
C. Fuzzy search (using the `~` operator or `queryType=full`)
D. Synonyms

<details>
<summary>Answer & Explanation</summary>
**Answer: C**
**Explanation:** Fuzzy search allows the search engine to match terms that are similar to the query term, handling typos and misspellings. It typically uses the Levenshtein distance algorithm.
</details>

### Question 10
In an Azure AI Search solution, you want to extract text from scanned PDFs and images during the indexing process. What component do you need to add to the skillset?
A. A custom skill
B. An OCR skill (part of Azure AI Vision)
C. A Key Phrase Extraction skill
D. A Shaper skill

<details>
<summary>Answer & Explanation</summary>
**Answer: B**
**Explanation:** To extract text from image-based files (like scanned PDFs), you need to use the OCR skill (often integrated via the "Merge Text" or native OCR capabilities in the skillset) to convert image data into searchable text.
</details>

---

## Domain 6: Implement Document Intelligence Solutions

### Question 11
You need to automate the extraction of data from receipts (merchant name, date, total amount). The receipts come from various stores and have different layouts. Which Azure AI Document Intelligence model should you use?
A. Read model
B. Layout model
C. Prebuilt Receipt model
D. Custom Neural model

<details>
<summary>Answer & Explanation</summary>
**Answer: C**
**Explanation:** The Prebuilt Receipt model is pre-trained to recognize and extract common fields from receipts (like merchant, date, tax, total) without requiring you to train a custom model.
</details>

---

## Domain 7: Implement Generative AI Solutions (Azure OpenAI)

### Question 12
You are using the Azure OpenAI Service `gpt-35-turbo` model. You want to lower the creativity of the model to make the answers more deterministic and focused. Which parameter should you adjust?
A. Increase `temperature`
B. Decrease `temperature`
C. Increase `max_tokens`
D. Decrease `frequency_penalty`

<details>
<summary>Answer & Explanation</summary>
**Answer: B**
**Explanation:** Lowering the `temperature` (closer to 0) makes the model more deterministic and focused, selecting the most likely next token. Higher temperature (closer to 1) makes the output more random and creative.
</details>

### Question 13
You want to ground your Azure OpenAI model's responses in your own company data (RAG - Retrieval Augmented Generation) without fine-tuning the model. What is the recommended approach using Azure tools?
A. Azure OpenAI "Add your data" feature (using Azure AI Search)
B. Retrain the model from scratch
C. Use Fine-tuning API
D. Embed all documents in the system prompt

<details>
<summary>Answer & Explanation</summary>
**Answer: A**
**Explanation:** The "Add your data" feature allows you to connect Azure OpenAI to a data source like Azure AI Search. The system retrieves relevant chunks of data and feeds them into the prompt context to ground the response, implementing the RAG pattern efficiently.
</details>

### Question 14
Which Azure OpenAI role allows a user to create and manage deployments of models?
A. Cognitive Services User
B. Cognitive Services OpenAI User
C. Cognitive Services OpenAI Contributor
D. Reader

<details>
<summary>Answer & Explanation</summary>
**Answer: C**
**Explanation:** The `Cognitive Services OpenAI Contributor` role grants full access to the Azure OpenAI resource, including the ability to create deployments, upload files, and manage fine-tuning. The `User` role is typically for inference only.
</details>
