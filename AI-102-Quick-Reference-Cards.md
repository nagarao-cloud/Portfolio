# AI-102 Quick Reference Cards & Visual Study Aids

## 📌 How to Use These Cards

1. **Print & Cut**: Print this document and cut out individual cards
2. **Digital Flashcards**: Use as desktop wallpapers or phone backgrounds
3. **Study Posters**: Print enlarged versions for your study space
4. **Quick Reviews**: Perfect for last-minute reviews before exam

---

## 🎴 MASTER REFERENCE CARD - THE BIG PICTURE

```
╔═══════════════════════════════════════════════════════════╗
║           AI-102: AZURE AI ENGINEER ASSOCIATE             ║
║                    THE BIG PICTURE                        ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  🏰 Memory Palace: 5-Floor Azure AI Mansion              ║
║                                                           ║
║  GROUND: [🏢 Planning] - KEYRPM                          ║
║           Keys, Endpoints, Regions, RBAC, Price, Monitor ║
║                                                           ║
║  1st:    [👁️ Vision] - CRAFT Video                       ║
║           Custom, Read, Analyze, Face, Tags, Video       ║
║                                                           ║
║  2nd:    [🗣️ Language] - BIGGEST FLOOR!                  ║
║           LUIS Translates Text to Bots                   ║
║           + SPOKEN Language (Text Analytics)             ║
║                                                           ║
║  3rd:    [📚 Knowledge] - I.S.K.I.F.S + PLASTIC          ║
║           Search & Forms                                 ║
║                                                           ║
║  4th:    [🤖 Generative AI] - GPT DANCE + RAG            ║
║           Creation Studio & RAG Lab                      ║
║                                                           ║
║  Domain Weights: 15-20 / 15-20 / 30-35 / 10-15 / 10-15  ║
║  Passing Score: 700/1000                                 ║
║  Duration: 120 minutes (60 questions)                    ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

## 🎴 CARD 1: DOMAIN PERCENTAGES

```
╔═══════════════════════════════════════════╗
║      AI-102 EXAM DOMAIN BREAKDOWN         ║
╠═══════════════════════════════════════════╣
║                                           ║
║  Mnemonic: P-L-V-K-G (Say: "PLUG")       ║
║                                           ║
║  1. 🏢 PLAN & MANAGE          15-20%     ║
║     └─ Security, Monitoring, Cost        ║
║                                           ║
║  2. 🗣️ LANGUAGE (NLP)         30-35% ⭐   ║
║     └─ BIGGEST! Focus here most          ║
║                                           ║
║  3. 👁️ VISION                 15-20%     ║
║     └─ Images, Video, OCR, Face          ║
║                                           ║
║  4. 📚 KNOWLEDGE MINING       10-15%     ║
║     └─ Search, Forms, Documents          ║
║                                           ║
║  5. 🤖 GENERATIVE AI          10-15%     ║
║     └─ GPT, DALL-E, RAG, Embeddings      ║
║                                           ║
║  Study Time Allocation:                  ║
║  Language: 35% | Vision: 20% |           ║
║  Planning: 20% | KM: 12% | GenAI: 13%   ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 2: PLANNING & MANAGEMENT

```
╔═══════════════════════════════════════════╗
║    DOMAIN 1: PLAN & MANAGE (15-20%)       ║
╠═══════════════════════════════════════════╣
║                                           ║
║  Mnemonic: KEYRPM                         ║
║                                           ║
║  🔐 KEY VAULT                             ║
║     └─ Store secrets, keys, certificates ║
║     └─ Don't hardcode credentials!       ║
║                                           ║
║  🌐 ENDPOINTS                             ║
║     └─ Public vs Private endpoints       ║
║     └─ VNet integration                  ║
║                                           ║
║  🗺️ YOUR REGION                           ║
║     └─ Data residency & compliance       ║
║     └─ Service availability              ║
║                                           ║
║  🛡️ RBAC (Role-Based Access Control)     ║
║     └─ Contributor: Full access          ║
║     └─ User: Can call APIs               ║
║     └─ Reader: View only                 ║
║                                           ║
║  💰 PRICING                               ║
║     └─ Free tier (F0): Limited           ║
║     └─ Standard (S0, S1...): Production  ║
║     └─ Use Pricing Calculator            ║
║                                           ║
║  📊 MONITORING                            ║
║     └─ Azure Monitor (metrics & logs)    ║
║     └─ Alerts (set thresholds)           ║
║     └─ Application Insights              ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 3: COMPUTER VISION

```
╔═══════════════════════════════════════════╗
║    DOMAIN 2: COMPUTER VISION (15-20%)     ║
╠═══════════════════════════════════════════╣
║                                           ║
║  Mnemonic: CRAFT Video                    ║
║                                           ║
║  🎨 CUSTOM VISION                         ║
║     ├─ Classification (which category?)  ║
║     ├─ Object Detection (where + what?)  ║
║     ├─ Train: 15+ images/class minimum   ║
║     └─ Export: TF, ONNX, CoreML          ║
║                                           ║
║  📖 READ API (OCR)                        ║
║     ├─ Printed & handwritten text        ║
║     ├─ Multiple languages                ║
║     ├─ Async operation (submit → get)    ║
║     └─ Use for: documents, signs, books  ║
║                                           ║
║  🔍 ANALYZE IMAGES                        ║
║     ├─ Tags & descriptions               ║
║     ├─ Objects & brands                  ║
║     ├─ Adult content detection           ║
║     ├─ Color analysis                    ║
║     └─ Thumbnails generation             ║
║                                           ║
║  👤 FACE API                              ║
║     ├─ Detection (find faces)            ║
║     ├─ Verification (same person?)       ║
║     ├─ Identification (who is this?)     ║
║     └─ ⚠️ Privacy: Don't store without   ║
║        permission!                       ║
║                                           ║
║  🏷️ TAGS & OBJECTS                        ║
║     └─ 10,000+ recognizable objects      ║
║                                           ║
║  🎬 VIDEO INDEXER                         ║
║     ├─ Scene detection                   ║
║     ├─ Face tracking                     ║
║     ├─ Speech to text                    ║
║     ├─ Keywords & topics                 ║
║     └─ Content moderation                ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 4: LANGUAGE UNDERSTANDING (LUIS/CLU)

```
╔═══════════════════════════════════════════╗
║        LANGUAGE UNDERSTANDING (LUIS)      ║
╠═══════════════════════════════════════════╣
║                                           ║
║  Mnemonic: I.E.P.U.P (Say: "Iep up!")    ║
║                                           ║
║  🎯 INTENTS                               ║
║     └─ What user WANTS to do             ║
║     └─ Examples: BookFlight, GetWeather  ║
║                                           ║
║  🏷️ ENTITIES                              ║
║     └─ Important DETAILS from utterance  ║
║     └─ Types:                            ║
║        • Simple (learned)                ║
║        • ML (machine learned)            ║
║        • List (exact matches)            ║
║        • Regex (patterns)                ║
║        • Prebuilt (dates, numbers, etc.) ║
║                                           ║
║  📋 PATTERNS                              ║
║     └─ Templates with placeholders       ║
║     └─ "Book [ticket] to {destination}"  ║
║                                           ║
║  💬 UTTERANCES                            ║
║     └─ Example phrases from users        ║
║     └─ Need 15+ per intent (variety!)    ║
║                                           ║
║  🧸 PREBUILT ENTITIES                     ║
║     └─ datetimeV2, number, email, URL    ║
║     └─ age, temperature, dimension       ║
║                                           ║
║  Training Workflow:                      ║
║  Add Intents → Add Entities →            ║
║  Label Utterances → Train → Test →       ║
║  Publish → Integrate                     ║
║                                           ║
║  Best Practices:                         ║
║  ✓ 15+ varied utterances per intent      ║
║  ✓ Use prebuilt entities when possible   ║
║  ✓ Active learning (review endpoint)     ║
║  ✗ Don't overlap intents                 ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 5: TEXT ANALYTICS

```
╔═══════════════════════════════════════════╗
║           TEXT ANALYTICS                  ║
╠═══════════════════════════════════════════╣
║                                           ║
║  Mnemonic: SPOKEN Language                ║
║                                           ║
║  😊😐😢 SENTIMENT ANALYSIS                ║
║     ├─ Positive / Neutral / Negative     ║
║     ├─ Confidence scores (0-1)           ║
║     └─ Document & sentence level         ║
║                                           ║
║  🔒 PII DETECTION                         ║
║     ├─ Find: SSN, credit cards, emails   ║
║     ├─ Redaction capability              ║
║     └─ GDPR compliance helper            ║
║                                           ║
║  💭 OPINION MINING                        ║
║     ├─ Aspect-based sentiment            ║
║     ├─ "Battery life is great BUT...     ║
║     │   screen is too dim"               ║
║     └─ Extract targets & assessments     ║
║                                           ║
║  🔑 KEY PHRASE EXTRACTION                 ║
║     ├─ Main talking points               ║
║     ├─ Quick document summary            ║
║     └─ Works with multiple languages     ║
║                                           ║
║  🏷️ ENTITY RECOGNITION (NER)             ║
║     ├─ Person, Location, Organization    ║
║     ├─ DateTime, Quantity, Event         ║
║     └─ Custom NER: Train your own!       ║
║                                           ║
║  🔤 LANGUAGE DETECTION                    ║
║     ├─ 120+ languages                    ║
║     ├─ Returns ISO code + confidence     ║
║     └─ Useful before translation         ║
║                                           ║
║  📝 TEXT SUMMARIZATION                    ║
║     ├─ Extractive (select sentences)     ║
║     ├─ Abstractive (generate summary)    ║
║     └─ Great for long documents          ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 6: TRANSLATOR & QNA MAKER

```
╔═══════════════════════════════════════════╗
║       TRANSLATOR & QNA MAKER              ║
╠═══════════════════════════════════════════╣
║                                           ║
║  🌍 TRANSLATOR                            ║
║  ─────────────                            ║
║  • Text Translation                      ║
║    └─ 100+ languages                     ║
║    └─ Real-time API                      ║
║                                           ║
║  • Document Translation                  ║
║    └─ Preserves formatting               ║
║    └─ Batch processing                   ║
║    └─ Supports: PDF, Word, HTML          ║
║                                           ║
║  • Custom Glossary                       ║
║    └─ Domain-specific terms              ║
║    └─ Brand names preservation           ║
║                                           ║
║  • Features:                             ║
║    ├─ Language Detection                 ║
║    ├─ Transliteration                    ║
║    └─ Profanity filtering                ║
║                                           ║
║  📚 QNA MAKER / QUESTION ANSWERING       ║
║  ───────────────────────────────          ║
║  • Create from:                          ║
║    ├─ FAQ pages (URL)                    ║
║    ├─ Documents (PDF, Word)              ║
║    ├─ Structured files (TSV, XLS)        ║
║    └─ Manual Q&A pairs                   ║
║                                           ║
║  • Features:                             ║
║    ├─ Multi-turn conversations           ║
║    ├─ Active learning                    ║
║    ├─ Confidence scores                  ║
║    ├─ Synonyms                           ║
║    └─ Metadata filtering                 ║
║                                           ║
║  • Best For:                             ║
║    └─ Customer support bots              ║
║    └─ FAQ automation                     ║
║    └─ Knowledge base queries             ║
║                                           ║
║  LUIS vs QnA Maker:                      ║
║  LUIS: Complex intents, actions          ║
║  QnA:  Simple question → answer          ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 7: AZURE BOT SERVICE

```
╔═══════════════════════════════════════════╗
║          AZURE BOT SERVICE                ║
╠═══════════════════════════════════════════╣
║                                           ║
║  🤖 Components:                           ║
║                                           ║
║  1. Bot Framework SDK                    ║
║     └─ .NET, JavaScript, Python          ║
║                                           ║
║  2. Bot Framework Composer               ║
║     └─ Visual dialog designer            ║
║                                           ║
║  3. Channels                             ║
║     ├─ Microsoft Teams ⭐                 ║
║     ├─ Web Chat                          ║
║     ├─ Slack                             ║
║     ├─ Facebook Messenger                ║
║     ├─ Email                             ║
║     └─ SMS (Twilio)                      ║
║                                           ║
║  4. Integration Services                 ║
║     ├─ LUIS (understand intent)          ║
║     ├─ QnA Maker (answer questions)      ║
║     ├─ Translator (multilingual)         ║
║     └─ Custom code (business logic)      ║
║                                           ║
║  Dialog Types:                           ║
║  • Waterfall: Sequential steps           ║
║  • Component: Reusable dialogs           ║
║  • Adaptive: Dynamic flow                ║
║                                           ║
║  State Management:                       ║
║  • User State (across conversations)     ║
║  • Conversation State (single session)   ║
║  • Private Conversation State            ║
║                                           ║
║  Adaptive Cards:                         ║
║  • Rich UI elements                      ║
║  • Forms, buttons, images                ║
║  • JSON-based format                     ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 8: AZURE COGNITIVE SEARCH

```
╔═══════════════════════════════════════════╗
║      AZURE COGNITIVE SEARCH               ║
╠═══════════════════════════════════════════╣
║                                           ║
║  Mnemonic: I.S.K.I.F.S (Say: "I skip fs")║
║                                           ║
║  📇 INDEX                                 ║
║     └─ Searchable collection of docs     ║
║     └─ Fields: searchable, filterable,   ║
║        facetable, sortable               ║
║                                           ║
║  ⚙️ SKILLSET                              ║
║     └─ AI enrichment pipeline            ║
║     └─ Built-in skills:                  ║
║        • OCR                             ║
║        • Key Phrase Extraction           ║
║        • Entity Recognition              ║
║        • Language Detection              ║
║        • Image Analysis                  ║
║        • Sentiment                       ║
║                                           ║
║  💾 KNOWLEDGE STORE                       ║
║     └─ Save enriched data                ║
║     └─ Azure Storage (tables, objects)   ║
║                                           ║
║  🔄 INDEXER                               ║
║     └─ Crawls data sources               ║
║     └─ Supported:                        ║
║        • Azure SQL                       ║
║        • Cosmos DB                       ║
║        • Blob Storage                    ║
║        • Table Storage                   ║
║                                           ║
║  🔍 FUZZY SEARCH                          ║
║     └─ Handles typos & misspellings      ║
║     └─ Edit distance (Levenshtein)       ║
║     └─ Example: "Microsft" → "Microsoft" ║
║                                           ║
║  🧠 SEMANTIC SEARCH                       ║
║     └─ Understands MEANING not keywords  ║
║     └─ Deep learning models              ║
║     └─ Better relevance ranking          ║
║                                           ║
║  Additional Features:                    ║
║  • Suggester (autocomplete)              ║
║  • Scoring Profiles (custom ranking)     ║
║  • Faceted Navigation                    ║
║  • Geo-spatial Search                    ║
║  • Custom Skills (Azure Functions)       ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 9: FORM RECOGNIZER

```
╔═══════════════════════════════════════════╗
║   FORM RECOGNIZER / DOCUMENT INTELLIGENCE║
╠═══════════════════════════════════════════╣
║                                           ║
║  Mnemonic: PLASTIC Forms                  ║
║                                           ║
║  🧾 PREBUILT MODELS                       ║
║     ├─ Invoice                           ║
║     ├─ Receipt                           ║
║     ├─ ID Card (passport, driver's)      ║
║     ├─ Business Card                     ║
║     ├─ W-2 Tax Form                      ║
║     ├─ 1099 Tax Form                     ║
║     └─ Health Insurance Card             ║
║                                           ║
║  📄 LAYOUT API                            ║
║     ├─ Extract structure                 ║
║     ├─ Tables (rows, columns, cells)     ║
║     ├─ Selection marks (checkboxes)      ║
║     ├─ Text blocks                       ║
║     └─ No training required!             ║
║                                           ║
║  🔧 CUSTOM MODELS                         ║
║     ├─ Train on YOUR forms               ║
║     ├─ Supervised learning               ║
║     ├─ Min 5 sample forms                ║
║     ├─ Labels: key-value pairs           ║
║     └─ Use Form Recognizer Studio        ║
║                                           ║
║  📊 TABLE EXTRACTION                      ║
║     └─ Preserves structure               ║
║     └─ Returns JSON with coordinates     ║
║                                           ║
║  🤖 AI-POWERED                            ║
║     └─ Handles varying layouts           ║
║     └─ Works with printed & handwritten  ║
║                                           ║
║  Use Cases:                              ║
║  • Invoice processing                    ║
║  • Expense management                    ║
║  • Contract analysis                     ║
║  • Tax document handling                 ║
║  • Identity verification                 ║
║                                           ║
║  When to use what:                       ║
║  Layout API: Just need structure         ║
║  Prebuilt: Common document types         ║
║  Custom: Your specific forms             ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 10: AZURE OPENAI SERVICE

```
╔═══════════════════════════════════════════╗
║          AZURE OPENAI SERVICE             ║
╠═══════════════════════════════════════════╣
║                                           ║
║  Mnemonic: GPT DANCE                      ║
║                                           ║
║  🧠 GPT MODELS                            ║
║     ├─ GPT-4: Most capable               ║
║     ├─ GPT-3.5-turbo: Fast & efficient   ║
║     └─ Use for: text generation, Q&A,    ║
║        summarization, translation        ║
║                                           ║
║  ✍️ PROMPT ENGINEERING                    ║
║     ├─ System message (behavior)         ║
║     ├─ User message (query)              ║
║     ├─ Assistant message (history)       ║
║     └─ Clear, specific instructions      ║
║                                           ║
║  🌡️ TEMPERATURE (Creativity Control)     ║
║     ├─ 0.0-0.3: ❄️ ICE (deterministic)   ║
║     ├─ 0.4-0.7: 💧 WATER (balanced)       ║
║     └─ 0.8-1.0: ☁️ STEAM (creative)       ║
║                                           ║
║  🎨 DALL-E (Image Generation)            ║
║     ├─ DALL-E 2: Good quality            ║
║     ├─ DALL-E 3: Best quality            ║
║     └─ Text → Image                      ║
║                                           ║
║  💎 ADA (Embeddings)                      ║
║     ├─ text-embedding-ada-002            ║
║     ├─ Convert text → vectors            ║
║     └─ Use for: semantic search,         ║
║        similarity, clustering, RAG       ║
║                                           ║
║  🔢 TOKENS                                ║
║     ├─ TPM: Tokens Per Minute (quota)    ║
║     ├─ RPM: Requests Per Minute          ║
║     ├─ ~4 chars = 1 token (English)      ║
║     └─ Watch limits! Request increases   ║
║                                           ║
║  🛡️ CONTENT FILTERS                       ║
║     ├─ Hate, Violence, Sexual, Self-harm ║
║     ├─ Severity: Safe, Low, Medium, High ║
║     ├─ Filters INPUT & OUTPUT            ║
║     └─ Configurable per deployment       ║
║                                           ║
║  📚 EXAMPLES (Few-Shot Learning)         ║
║     └─ Show examples in prompt           ║
║     └─ GPT learns from pattern           ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 11: RAG (RETRIEVAL AUGMENTED GENERATION)

```
╔═══════════════════════════════════════════╗
║     RAG: RETRIEVAL AUGMENTED GENERATION   ║
╠═══════════════════════════════════════════╣
║                                           ║
║  What is RAG?                            ║
║  Combining SEARCH + GPT to answer        ║
║  questions using YOUR company data       ║
║                                           ║
║  🎯 The RAG Three-Step Dance:            ║
║                                           ║
║  1️⃣ 🔍 RETRIEVAL                          ║
║     ├─ User asks question                ║
║     ├─ Convert to embedding (Ada)        ║
║     ├─ Search for similar docs           ║
║     └─ Find top-k relevant chunks        ║
║                                           ║
║  2️⃣ 📚 AUGMENTED                          ║
║     ├─ Take retrieved documents          ║
║     ├─ Add to prompt as context          ║
║     └─ "Given this info: [docs]..."      ║
║                                           ║
║  3️⃣ ✍️ GENERATION                         ║
║     ├─ GPT reads context                 ║
║     ├─ Generates answer using docs       ║
║     └─ Returns answer + citations        ║
║                                           ║
║  Architecture:                           ║
║  ┌─────────────────────────────────────┐ ║
║  │ User Question                       │ ║
║  └───────────┬─────────────────────────┘ ║
║              ↓                           ║
║  ┌─────────────────────────────────────┐ ║
║  │ Embedding Model (Ada)               │ ║
║  └───────────┬─────────────────────────┘ ║
║              ↓                           ║
║  ┌─────────────────────────────────────┐ ║
║  │ Vector Search (Cognitive Search)    │ ║
║  └───────────┬─────────────────────────┘ ║
║              ↓                           ║
║  ┌─────────────────────────────────────┐ ║
║  │ Retrieved Docs → Prompt             │ ║
║  └───────────┬─────────────────────────┘ ║
║              ↓                           ║
║  ┌─────────────────────────────────────┐ ║
║  │ GPT Generation                      │ ║
║  └───────────┬─────────────────────────┘ ║
║              ↓                           ║
║  ┌─────────────────────────────────────┐ ║
║  │ Answer with Citations               │ ║
║  └─────────────────────────────────────┘ ║
║                                           ║
║  Key Components:                         ║
║  • Document Store (Blob Storage)         ║
║  • Embedding Model (text-embedding-ada)  ║
║  • Vector Database (Cognitive Search)    ║
║  • LLM (GPT-4 or GPT-3.5-turbo)          ║
║                                           ║
║  Best Practices:                         ║
║  ✓ Chunk docs (500-1000 tokens)          ║
║  ✓ Include metadata                      ║
║  ✓ Use hybrid search (vector + keyword)  ║
║  ✓ Implement citations                   ║
║  ✓ Handle hallucinations                 ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 12: COMPARISON MATRIX

```
╔═══════════════════════════════════════════════════════════╗
║               SERVICE COMPARISON MATRIX                   ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  COMPUTER VISION vs CUSTOM VISION                        ║
║  ─────────────────────────────────────                    ║
║  Computer Vision:  Prebuilt | 10K+ objects | No training ║
║  Custom Vision:    Custom   | Your objects | Need images ║
║                                                           ║
║  READ API vs OCR                                         ║
║  ────────────────                                         ║
║  Read API: Modern | Handwriting | Async | Recommended    ║
║  OCR:      Legacy | Printed text | Sync | Use Read!      ║
║                                                           ║
║  LUIS vs QnA MAKER                                       ║
║  ──────────────────                                       ║
║  LUIS:      Complex intents | Actions | Entities         ║
║  QnA Maker: Simple Q&A | FAQ automation | KB             ║
║                                                           ║
║  SENTIMENT vs OPINION MINING                             ║
║  ────────────────────────────                             ║
║  Sentiment:      Overall emotion (pos/neg/neutral)       ║
║  Opinion Mining: Aspect-level ("battery: good, screen:   ║
║                  bad")                                   ║
║                                                           ║
║  PREBUILT vs CUSTOM (Form Recognizer)                    ║
║  ─────────────────────────────────────                    ║
║  Prebuilt: Invoice, Receipt, ID | No training            ║
║  Custom:   Your unique forms | Need 5+ samples           ║
║                                                           ║
║  GPT-4 vs GPT-3.5-TURBO                                  ║
║  ───────────────────────                                  ║
║  GPT-4:        Best quality | More expensive | Complex   ║
║  GPT-3.5-turbo: Fast | Cheaper | Simple tasks            ║
║                                                           ║
║  EMBEDDINGS vs GPT                                       ║
║  ──────────────────                                       ║
║  Embeddings: Text → vectors | Search | Similarity        ║
║  GPT:        Text → text | Generation | Q&A              ║
║                                                           ║
║  INDEXER vs INDEX (Cognitive Search)                     ║
║  ────────────────────────────────────                     ║
║  Indexer: PROCESS that crawls & indexes                  ║
║  Index:   DATA STRUCTURE for searching                   ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

## 🎴 CARD 13: COMMON SCENARIOS

```
╔═══════════════════════════════════════════╗
║          COMMON EXAM SCENARIOS            ║
╠═══════════════════════════════════════════╣
║                                           ║
║  📸 Scenario 1: Product Recognition      ║
║  ─────────────────────────────────        ║
║  Need: Detect 100+ specific products     ║
║  Solution: Custom Vision (Object Det.)   ║
║                                           ║
║  📄 Scenario 2: Invoice Processing       ║
║  ───────────────────────────────          ║
║  Need: Extract data from invoices        ║
║  Solution: Form Recognizer (Prebuilt)    ║
║                                           ║
║  💬 Scenario 3: Customer Support Bot     ║
║  ─────────────────────────────────        ║
║  Need: Answer FAQs automatically         ║
║  Solution: QnA Maker + Bot Service       ║
║                                           ║
║  🔍 Scenario 4: Document Search          ║
║  ───────────────────────────              ║
║  Need: Search PDFs with AI insights      ║
║  Solution: Cognitive Search + Skillset   ║
║                                           ║
║  📝 Scenario 5: Text Analysis            ║
║  ─────────────────────────                ║
║  Need: Analyze sentiment in reviews      ║
║  Solution: Text Analytics API            ║
║                                           ║
║  🌍 Scenario 6: Multi-Language App       ║
║  ──────────────────────────────           ║
║  Need: Translate in real-time            ║
║  Solution: Translator + custom glossary  ║
║                                           ║
║  🤖 Scenario 7: Company Q&A with RAG     ║
║  ─────────────────────────────────        ║
║  Need: Answer using company docs         ║
║  Solution: Azure OpenAI + Cognitive      ║
║            Search (RAG pattern)          ║
║                                           ║
║  👤 Scenario 8: Visitor Check-in         ║
║  ────────────────────────────             ║
║  Need: Recognize authorized faces        ║
║  Solution: Face API (with privacy!)      ║
║                                           ║
║  📊 Scenario 9: Form Variety             ║
║  ────────────────────────                 ║
║  Need: Process varying form layouts      ║
║  Solution: Custom Form Recognizer        ║
║                                           ║
║  🎨 Scenario 10: Marketing Images        ║
║  ─────────────────────────────            ║
║  Need: Generate images from text         ║
║  Solution: DALL-E 2 or DALL-E 3          ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 14: KEY NUMBERS TO REMEMBER

```
╔═══════════════════════════════════════════╗
║         IMPORTANT NUMBERS & LIMITS        ║
╠═══════════════════════════════════════════╣
║                                           ║
║  ⏱️ EXAM                                  ║
║     • Duration: 120 minutes              ║
║     • Questions: 60                      ║
║     • Passing: 700/1000                  ║
║                                           ║
║  📊 DOMAIN WEIGHTS                        ║
║     • Planning: 15-20%                   ║
║     • Vision: 15-20%                     ║
║     • Language: 30-35% ⭐ BIGGEST         ║
║     • Knowledge Mining: 10-15%           ║
║     • Generative AI: 10-15%              ║
║                                           ║
║  🎨 CUSTOM VISION                         ║
║     • Min images per class: 15           ║
║     • Recommended: 50+                   ║
║     • Max tags: 500                      ║
║     • Max projects: varies by tier       ║
║                                           ║
║  🗣️ LUIS                                  ║
║     • Min utterances per intent: 15      ║
║     • Max intents: 500                   ║
║     • Max entities: 100                  ║
║     • Max utterance length: 500 chars    ║
║                                           ║
║  📋 FORM RECOGNIZER                       ║
║     • Custom model min samples: 5        ║
║     • Recommended: 10-15                 ║
║                                           ║
║  🤖 AZURE OPENAI                          ║
║     • GPT-4 max tokens: 8K or 32K        ║
║     • GPT-3.5-turbo: 4K or 16K           ║
║     • Temperature range: 0.0 - 2.0       ║
║       (typical: 0.0 - 1.0)               ║
║     • Token ratio: ~4 chars = 1 token    ║
║                                           ║
║  💰 FREE TIERS                            ║
║     • Computer Vision: 20/min, 5K/month  ║
║     • Text Analytics: 5K/month           ║
║     • Translator: 2M chars/month         ║
║     • LUIS: 10K/month                    ║
║     • Custom Vision: 2 projects          ║
║                                           ║
║  🔍 COGNITIVE SEARCH                      ║
║     • Free tier: 50 MB, 3 indexes        ║
║     • Fuzzy edit distance: 0, 1, or 2    ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 15: EXAM DAY QUICK TIPS

```
╔═══════════════════════════════════════════╗
║           EXAM DAY QUICK TIPS             ║
╠═══════════════════════════════════════════╣
║                                           ║
║  🌅 MORNING OF EXAM                       ║
║  ─────────────────                        ║
║  ✓ Healthy breakfast                     ║
║  ✓ 20-min exercise                       ║
║  ✓ Quick mnemonic review (5 min)         ║
║  ✓ NO heavy studying!                    ║
║                                           ║
║  📝 BRAIN DUMP STRATEGY                   ║
║  ───────────────────                      ║
║  As soon as exam starts:                 ║
║  1. Request scratch paper                ║
║  2. Write down mnemonics:                ║
║     • PLVKG                              ║
║     • KEYRPM                             ║
║     • CRAFT Video                        ║
║     • GPT DANCE                          ║
║     • I.S.K.I.F.S                        ║
║  3. Quick Memory Palace sketch           ║
║                                           ║
║  ⏱️ TIME MANAGEMENT                       ║
║  ─────────────────                        ║
║  • 120 min ÷ 60 Q = 2 min/question       ║
║  • Spend 90 min on first pass            ║
║  • Save 30 min for review                ║
║  • Flag difficult questions              ║
║  • Don't get stuck!                      ║
║                                           ║
║  🎯 QUESTION STRATEGIES                   ║
║  ──────────────────                       ║
║  • Read ENTIRE question carefully        ║
║  • Identify: What's the GOAL?            ║
║  • Look for keywords:                    ║
║    - "BEST solution"                     ║
║    - "minimize cost"                     ║
║    - "most secure"                       ║
║  • Eliminate obviously wrong answers     ║
║  • Choose BEST fit, not perfect fit      ║
║                                           ║
║  ⚠️ WATCH OUT FOR                         ║
║  ───────────────                          ║
║  • "All of the above" is rarely correct  ║
║  • Very similar services (know diffs!)   ║
║  • Scenario-based questions (read all!)  ║
║  • Negative questions ("NOT", "EXCEPT")  ║
║                                           ║
║  🧘 STAY CALM                             ║
║  ─────────                                ║
║  • Deep breaths between sections         ║
║  • If stuck, flag and move on            ║
║  • Trust your preparation                ║
║  • You've got this! 🚀                    ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 16: MNEMONIC MASTER LIST

```
╔═══════════════════════════════════════════╗
║         ALL MNEMONICS AT A GLANCE         ║
╠═══════════════════════════════════════════╣
║                                           ║
║  🏰 PLVKG (Domains)                       ║
║     Plan, Language, Vision,              ║
║     Knowledge, Generative                ║
║                                           ║
║  🏢 KEYRPM (Planning)                     ║
║     Key vault, Endpoints, Your region,   ║
║     RBAC, Pricing, Monitoring            ║
║                                           ║
║  👁️ CRAFT Video (Computer Vision)        ║
║     Custom, Read, Analyze, Face,         ║
║     Tags, Video                          ║
║                                           ║
║  🗣️ LUIS Translates Text to Bots         ║
║     (NLP Services)                       ║
║                                           ║
║  🔤 SPOKEN Language (Text Analytics)     ║
║     Sentiment, PII, Opinion, Key,        ║
║     Entities, NER                        ║
║                                           ║
║  🎯 I.E.P.U.P (LUIS/CLU)                 ║
║     Intents, Entities, Patterns,         ║
║     Utterances, Prebuilt                 ║
║                                           ║
║  🔍 I.S.K.I.F.S (Cognitive Search)       ║
║     Index, Skillset, Knowledge store,    ║
║     Indexer, Fuzzy, Semantic             ║
║                                           ║
║  📋 PLASTIC Forms (Form Recognizer)      ║
║     Prebuilt, Layout, API, Supervised,   ║
║     Tables, Intelligence, Custom         ║
║                                           ║
║  🤖 GPT DANCE (Azure OpenAI)             ║
║     GPT, Prompt, Temperature, DALL-E,    ║
║     Ada, Number tokens, Content,         ║
║     Examples                             ║
║                                           ║
║  🔄 R.A.G. (RAG System)                  ║
║     Retrieval, Augmented, Generation     ║
║                                           ║
║  🌡️ Ice Water Steam (Temperature)        ║
║     0-0.3 (cold/deterministic)           ║
║     0.4-0.7 (balanced)                   ║
║     0.8-1.0 (hot/creative)               ║
║                                           ║
║  🛡️ KEEP Private Nets (Security)         ║
║     Key vault, Endpoints, Encryption,    ║
║     Private networks                     ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 17: DECISION TREES

```
╔═══════════════════════════════════════════╗
║            DECISION TREES                 ║
╠═══════════════════════════════════════════╣
║                                           ║
║  🖼️ IMAGE PROCESSING DECISION            ║
║                                           ║
║  Need to detect objects?                 ║
║  ├─ Standard objects (cars, people)      ║
║  │  └─ Computer Vision                   ║
║  └─ Custom objects (your products)       ║
║     └─ Custom Vision                     ║
║                                           ║
║  Need to read text?                      ║
║  ├─ Just text extraction                 ║
║  │  └─ Read API                          ║
║  ├─ Forms with structure                 ║
║  │  ├─ Common forms (invoice, receipt)   ║
║  │  │  └─ Form Recognizer (Prebuilt)     ║
║  │  └─ Custom forms                      ║
║  │     └─ Form Recognizer (Custom)       ║
║  └─ Just layout & tables                 ║
║     └─ Form Recognizer (Layout API)      ║
║                                           ║
║  ─────────────────────────────────────    ║
║                                           ║
║  💬 LANGUAGE PROCESSING DECISION          ║
║                                           ║
║  Need conversational AI?                 ║
║  ├─ Understand user intent               ║
║  │  └─ LUIS / CLU                        ║
║  ├─ Answer FAQ questions                 ║
║  │  └─ QnA Maker                         ║
║  ├─ Answer from company docs             ║
║  │  └─ Azure OpenAI + RAG                ║
║  └─ Complete chatbot                     ║
║     └─ Bot Service (with above)          ║
║                                           ║
║  Need text analysis?                     ║
║  ├─ Sentiment (positive/negative)        ║
║  │  └─ Text Analytics (Sentiment)        ║
║  ├─ Find PII (private info)              ║
║  │  └─ Text Analytics (PII)              ║
║  ├─ Extract entities (names, places)     ║
║  │  └─ Text Analytics (NER)              ║
║  └─ Custom entities                      ║
║     └─ Custom NER                        ║
║                                           ║
║  ─────────────────────────────────────    ║
║                                           ║
║  🔍 SEARCH DECISION                       ║
║                                           ║
║  Need AI-powered search?                 ║
║  └─ Azure Cognitive Search               ║
║     ├─ With OCR/enrichment → Skillset   ║
║     ├─ Handle typos → Fuzzy Search       ║
║     ├─ Understand meaning → Semantic     ║
║     └─ Autocomplete → Suggester          ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 18: API PATTERNS

```
╔═══════════════════════════════════════════╗
║          COMMON API PATTERNS              ║
╠═══════════════════════════════════════════╣
║                                           ║
║  🔐 AUTHENTICATION                        ║
║  ──────────────                           ║
║  1. Subscription Key (in header)         ║
║     Header: Ocp-Apim-Subscription-Key    ║
║                                           ║
║  2. Azure AD Token                       ║
║     Header: Authorization: Bearer <token>║
║                                           ║
║  3. Managed Identity (recommended!)      ║
║     No keys in code                      ║
║                                           ║
║  🌐 ENDPOINT STRUCTURE                    ║
║  ──────────────────                       ║
║  https://<region>.api.cognitive.         ║
║  microsoft.com/<service>/<version>/      ║
║  <operation>                             ║
║                                           ║
║  Example:                                ║
║  https://eastus.api.cognitive.           ║
║  microsoft.com/vision/v3.2/analyze       ║
║                                           ║
║  ⏱️ ASYNC PATTERN (Long-running ops)     ║
║  ─────────────────────────────            ║
║  1. POST request → returns operation ID  ║
║  2. GET status using operation ID        ║
║  3. Poll until status = "succeeded"      ║
║  4. GET results                          ║
║                                           ║
║  Used by:                                ║
║  • Read API (OCR)                        ║
║  • Form Recognizer (custom models)       ║
║  • Text Summarization (long docs)        ║
║                                           ║
║  📄 REQUEST FORMAT                        ║
║  ──────────────                           ║
║  {                                       ║
║    "url": "https://...",  // OR          ║
║    "data": "<base64>"    // inline       ║
║  }                                       ║
║                                           ║
║  📊 RESPONSE FORMAT                       ║
║  ───────────────                          ║
║  {                                       ║
║    "status": "succeeded",                ║
║    "result": { ... },                    ║
║    "error": null                         ║
║  }                                       ║
║                                           ║
║  ⚠️ ERROR HANDLING                        ║
║  ──────────────                           ║
║  Common HTTP codes:                      ║
║  • 200: Success                          ║
║  • 400: Bad request                      ║
║  • 401: Unauthorized (check key)         ║
║  • 429: Rate limit (throttling)          ║
║  • 500: Server error                     ║
║                                           ║
║  Handle throttling:                      ║
║  • Implement retry with backoff          ║
║  • Check Retry-After header              ║
║  • Request quota increase                ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 19: BEST PRACTICES

```
╔═══════════════════════════════════════════╗
║             BEST PRACTICES                ║
╠═══════════════════════════════════════════╣
║                                           ║
║  🔐 SECURITY                              ║
║  ────────                                 ║
║  ✓ Store keys in Key Vault               ║
║  ✓ Use Managed Identity when possible    ║
║  ✓ Implement private endpoints           ║
║  ✓ Enable RBAC, principle of least       ║
║    privilege                             ║
║  ✗ NEVER hardcode keys in source code    ║
║  ✗ NEVER commit keys to repositories     ║
║                                           ║
║  💰 COST OPTIMIZATION                     ║
║  ─────────────────                        ║
║  ✓ Use Free tier for dev/test            ║
║  ✓ Implement caching to reduce calls     ║
║  ✓ Batch operations when possible        ║
║  ✓ Monitor usage with Azure Monitor      ║
║  ✓ Set spending alerts                   ║
║  ✗ Don't overprovision resources         ║
║                                           ║
║  🚀 PERFORMANCE                           ║
║  ───────────                              ║
║  ✓ Deploy resources in same region       ║
║  ✓ Use CDN for static content            ║
║  ✓ Implement retry logic with backoff    ║
║  ✓ Cache frequent queries                ║
║  ✓ Optimize image sizes before upload    ║
║                                           ║
║  📊 MONITORING                            ║
║  ──────────                               ║
║  ✓ Enable diagnostic logging             ║
║  ✓ Set up alerts for errors & throttling ║
║  ✓ Track metrics (latency, errors, etc.) ║
║  ✓ Use Application Insights              ║
║  ✓ Regular review of logs                ║
║                                           ║
║  🎯 MODEL TRAINING (Custom Services)     ║
║  ────────────────────────────             ║
║  ✓ Use diverse training data             ║
║  ✓ Balance classes (similar # samples)   ║
║  ✓ Validate with separate test set       ║
║  ✓ Iterate based on metrics              ║
║  ✓ Use active learning                   ║
║                                           ║
║  🔄 DEPLOYMENT                            ║
║  ──────────                               ║
║  ✓ Use staging environments              ║
║  ✓ Implement CI/CD pipelines             ║
║  ✓ Version your models                   ║
║  ✓ Have rollback plans                   ║
║  ✓ Test thoroughly before production     ║
║                                           ║
║  ⚖️ RESPONSIBLE AI                        ║
║  ──────────────                           ║
║  ✓ Consider bias in training data        ║
║  ✓ Test for fairness                     ║
║  ✓ Be transparent about AI use           ║
║  ✓ Respect privacy (especially Face API) ║
║  ✓ Get proper consent                    ║
║  ✓ Enable content filtering              ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎴 CARD 20: MEMORY PALACE FLOOR PLAN

```
╔═══════════════════════════════════════════╗
║      THE AZURE AI MANSION FLOOR PLAN      ║
╠═══════════════════════════════════════════╣
║                                           ║
║  🏰 YOUR COMPLETE MEMORY PALACE           ║
║                                           ║
║  4th: 🤖 [CREATION CASTLE]               ║
║       ┌─────────────────────────┐        ║
║       │ R11: OpenAI Studio      │        ║
║       │   • GPT Brain 🧠        │        ║
║       │   • DALL-E Canvas 🎨    │        ║
║       │   • Ada Crystals 💎     │        ║
║       │   • Temp Dial 🌡️        │        ║
║       │   • Content Shield 🛡️   │        ║
║       ├─────────────────────────┤        ║
║       │ R12: RAG Laboratory     │        ║
║       │   • Doc Vault 📚        │        ║
║       │   • Search Engine 🔍    │        ║
║       │   • Embedding Machine   │        ║
║       └─────────────────────────┘        ║
║                                           ║
║  3rd: 📚 [KNOWLEDGE ARCHIVES]            ║
║       ┌─────────────────────────┐        ║
║       │ R9: Search Tower 🗼      │        ║
║       │   • Index Catalog 📇    │        ║
║       │   • Skill Stations ⚙️   │        ║
║       │   • Fuzzy Finder 🔍     │        ║
║       │   • Semantic Brain 🧠   │        ║
║       ├─────────────────────────┤        ║
║       │ R10: Form Station 📋    │        ║
║       │   • Prebuilt Sorter     │        ║
║       │   • Layout Scanner      │        ║
║       │   • Custom Trainer      │        ║
║       └─────────────────────────┘        ║
║                                           ║
║  2nd: 🗣️ [LANGUAGE LIBRARY] ⭐ BIGGEST    ║
║       ┌─────────────────────────┐        ║
║       │ R4: Conversation Lounge │        ║
║       │   • Intent Detective 🔍 │        ║
║       │   • Entity Collector 🏷️│        ║
║       ├─────────────────────────┤        ║
║       │ R5: Translation Chamber │        ║
║       │   • Translator Twins 🌍 │        ║
║       │   • Custom Dictionary   │        ║
║       ├─────────────────────────┤        ║
║       │ R6: Analysis Lab 🔬     │        ║
║       │   • Dr. Sentiment 😊😐😢│        ║
║       │   • Professor NER 🏷️   │        ║
║       │   • Key Phrase 🔑       │        ║
║       │   • Summary Bot 📝      │        ║
║       │   • PII Guardian 🔒     │        ║
║       ├─────────────────────────┤        ║
║       │ R7: Q&A Room 📚         │        ║
║       │   • Librarian QnA       │        ║
║       ├─────────────────────────┤        ║
║       │ R8: Bot Workshop 🤖     │        ║
║       │   • Builder Bot         │        ║
║       │   • Channel Connectors  │        ║
║       └─────────────────────────┘        ║
║                                           ║
║  1st: 👁️ [VISION GALLERY]                ║
║       ┌─────────────────────────┐        ║
║       │ R3: Art Gallery         │        ║
║       │   🔮 GIANT EYEBALL      │        ║
║       │   • Camera 📷           │        ║
║       │   • Reading Nook 📖     │        ║
║       │   • Face Door 👤        │        ║
║       │   • Custom Canvas 🎨    │        ║
║       │   • Video Theater 🎬    │        ║
║       └─────────────────────────┘        ║
║                                           ║
║  GND: 🏢 [PLANNING LOBBY]                ║
║       ┌─────────────────────────┐        ║
║       │ R1: Reception Desk      │        ║
║       │   • KeyVault Safe 🔐    │        ║
║       │   • Regional Maps 🗺️    │        ║
║       │   • Price Calculator 💰 │        ║
║       │   • Monitor Screens 📺  │        ║
║       ├─────────────────────────┤        ║
║       │ R2: Security Vault      │        ║
║       │   • Badge Rack (RBAC)   │        ║
║       │   • Private Tunnel      │        ║
║       └─────────────────────────┘        ║
║                                           ║
║  WALK THIS PALACE DAILY! 🚶‍♂️             ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 📌 PRINTABLE CHECKLIST

```
╔═══════════════════════════════════════════╗
║        FINAL WEEK CHECKLIST               ║
╠═══════════════════════════════════════════╣
║                                           ║
║  7 DAYS BEFORE                           ║
║  ☐ Scoring 85%+ on practice exams        ║
║  ☐ Completed 3+ full-length exams        ║
║  ☐ Memory Palace 100% complete           ║
║  ☐ All mnemonics <5 seconds              ║
║  ☐ Reviewed all weak areas               ║
║                                           ║
║  3 DAYS BEFORE                           ║
║  ☐ Light review only                     ║
║  ☐ Practice exams 88%+                   ║
║  ☐ Good sleep pattern established        ║
║  ☐ Exam logistics confirmed              ║
║                                           ║
║  1 DAY BEFORE                            ║
║  ☐ NO new studying                       ║
║  ☐ Memory Palace final walk              ║
║  ☐ Relaxing activity                     ║
║  ☐ Clothes & materials ready             ║
║  ☐ 8 hours sleep scheduled               ║
║                                           ║
║  EXAM MORNING                            ║
║  ☐ Healthy breakfast                     ║
║  ☐ 20-min exercise                       ║
║  ☐ Quick mnemonic review                 ║
║  ☐ Positive mindset                      ║
║  ☐ Arrive 15 min early                   ║
║                                           ║
║  DURING EXAM                             ║
║  ☐ Brain dump mnemonics                  ║
║  ☐ Read questions carefully              ║
║  ☐ Flag difficult questions              ║
║  ☐ Manage time (2 min/Q)                 ║
║  ☐ Review flagged questions              ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

## 🎊 CONGRATULATIONS CARD

```
╔═══════════════════════════════════════════╗
║                                           ║
║              🎉 YOU DID IT! 🎉            ║
║                                           ║
║         AZURE AI ENGINEER ASSOCIATE       ║
║              AI-102 CERTIFIED             ║
║                                           ║
║  ─────────────────────────────────────    ║
║                                           ║
║  You've mastered:                        ║
║  ✓ Computer Vision                       ║
║  ✓ Natural Language Processing           ║
║  ✓ Knowledge Mining                      ║
║  ✓ Generative AI                         ║
║  ✓ Planning & Management                 ║
║                                           ║
║  Your Memory Palace guided you through   ║
║  Your mnemonics made it stick            ║
║  Your active recall strengthened it      ║
║  Your spaced repetition perfected it     ║
║                                           ║
║  🏆 YOU ARE NOW AN AZURE AI ENGINEER! 🏆  ║
║                                           ║
║  Next steps:                             ║
║  • Update LinkedIn                       ║
║  • Share your success                    ║
║  • Help others pass                      ║
║  • Build amazing AI solutions!           ║
║                                           ║
║  The Azure Kingdom awaits your           ║
║  innovative AI creations!                ║
║                                           ║
║         Congratulations! 🚀               ║
║                                           ║
║  – Professor Azure & The Memory Palace   ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

**END OF QUICK REFERENCE CARDS**

**Print these cards and place them:**
- 📱 On your phone (take photos)
- 🖥️ As desktop wallpaper
- 📋 On your study wall
- 🎒 In your bag for quick reviews
- 🚗 In your car for commute reviews

**You now have:**
✅ Complete Memory Palace Guide
✅ 60-Question Practice Exam
✅ 30-Day Study Tracker
✅ 20 Quick Reference Cards

**GO ACE THAT AI-102! 🎓✨**
