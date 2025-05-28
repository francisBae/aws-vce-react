import type { Question } from "../types/question";

export const questions: Question[] = [
  {
    "number": 1,
    "text": "A company makes forecasts each quarter to decide how to optimize operations to meet expected demand. The company uses ML models to make these forecasts.An AI practitioner is writing a report about the trained ML models to provide transparency and explainability to company stakeholders.What should the AI practitioner include in the report to meet the transparency and explainability requirements?",
    "options": [
      "Code for model training",
      "Partial dependence plots (PDPs)",
      "Sample data for training",
      "Model convergence tables"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/150663-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 2,
    "text": "A law firm wants to build an AI application by using large language models (LLMs). The application will read legal documents and extract key points from the documents.Which solution meets these requirements?",
    "options": [
      "Build an automatic named entity recognition system.",
      "Create a recommendation engine.",
      "Develop a summarization chatbot.",
      "Develop a multi-language translation system."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/150664-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 3,
    "text": "A company wants to classify human genes into 20 categories based on gene characteristics. The company needs an ML algorithm to document how the inner mechanism of the model affects the output.Which ML algorithm meets these requirements?",
    "options": [
      "Decision trees",
      "Linear regression",
      "Logistic regression",
      "Neural networks"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150751-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 4,
    "text": "A company has built an image classification model to predict plant diseases from photos of plant leaves. The company wants to evaluate how many images the model classified correctly.Which evaluation metric should the company use to measure the model's performance?",
    "options": [
      "R-squared score",
      "Accuracy",
      "Root mean squared error (RMSE)",
      "Learning rate"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/150625-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 5,
    "text": "A company is using a pre-trained large language model (LLM) to build a chatbot for product recommendations. The company needs the LLM outputs to be short and written in a specific language.Which solution will align the LLM response quality with the company's expectations?",
    "options": [
      "Adjust the prompt.",
      "Choose an LLM of a different size.",
      "Increase the temperature.",
      "Increase the Top K value."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150691-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 6,
    "text": "A company uses Amazon SageMaker for its ML pipeline in a production environment. The company has large input data sizes up to 1 GB and processing times up to 1 hour. The company needs near real-time latency.Which SageMaker inference option meets these requirements?",
    "options": [
      "Real-time inference",
      "Serverless inference",
      "Asynchronous inference",
      "Batch transform"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/150626-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 7,
    "text": "A company is using domain-specific models. The company wants to avoid creating new models from the beginning. The company instead wants to adapt pre-trained models to create models for new, related tasks.Which ML strategy meets these requirements?",
    "options": [
      "Increase the number of epochs.",
      "Use transfer learning.",
      "Decrease the number of epochs.",
      "Use unsupervised learning."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/150727-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 8,
    "text": "A company is building a solution to generate images for protective eyewear. The solution must have high accuracy and must minimize the risk of incorrect annotations.Which solution will meet these requirements?",
    "options": [
      "Human-in-the-loop validation by using Amazon SageMaker Ground Truth Plus",
      "Data augmentation by using an Amazon Bedrock knowledge base",
      "Image recognition by using Amazon Rekognition",
      "Data summarization by using Amazon QuickSight Q"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150728-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 9,
    "text": "A company wants to create a chatbot by using a foundation model (FM) on Amazon Bedrock. The FM needs to access encrypted data that is stored in an Amazon S3 bucket. The data is encrypted with Amazon S3 managed keys (SSE-S3).The FM encounters a failure when attempting to access the S3 bucket data.Which solution will meet these requirements?",
    "options": [
      "Ensure that the role that Amazon Bedrock assumes has permission to decrypt data with the correct encryption key.",
      "Set the access permissions for the S3 buckets to allow public access to enable access over the internet.",
      "Use prompt engineering techniques to tell the model to look for information in Amazon S3.",
      "Ensure that the S3 data does not contain sensitive information."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150687-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 10,
    "text": "A company wants to use language models to create an application for inference on edge devices. The inference must have the lowest latency possible.Which solution will meet these requirements?",
    "options": [
      "Deploy optimized small language models (SLMs) on edge devices.",
      "Deploy optimized large language models (LLMs) on edge devices.",
      "Incorporate a centralized small language model (SLM) API for asynchronous communication with edge devices.",
      "Incorporate a centralized large language model (LLM) API for asynchronous communication with edge devices."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150627-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 11,
    "text": "A company wants to build an ML model by using Amazon SageMaker. The company needs to share and manage variables for model development across multiple teams.Which SageMaker feature meets these requirements?",
    "options": [
      "Amazon SageMaker Feature Store",
      "Amazon SageMaker Data Wrangler",
      "Amazon SageMaker Clarify",
      "Amazon SageMaker Model Cards"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150628-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 12,
    "text": "A company wants to use generative AI to increase developer productivity and software development. The company wants to use Amazon Q Developer.What can Amazon Q Developer do to help the company meet these requirements?",
    "options": [
      "Create software snippets, reference tracking, and open source license tracking.",
      "Run an application without provisioning or managing servers.",
      "Enable voice commands for coding and providing natural language search.",
      "Convert audio files to text documents by using ML models."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150688-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 13,
    "text": "A financial institution is using Amazon Bedrock to develop an AI application. The application is hosted in a VPC. To meet regulatory compliance standards, the VPC is not allowed access to any internet traffic.Which AWS service or feature will meet these requirements?",
    "options": [
      "AWS PrivateLink",
      "Amazon Macie",
      "Amazon CloudFront",
      "Internet gateway"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150689-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 14,
    "text": "A company wants to develop an educational game where users answer questions such as the following: \"A jar contains six red, four green, and three yellow marbles. What is the probability of choosing a green marble from the jar?\"Which solution meets these requirements with the LEAST operational overhead?",
    "options": [
      "Use supervised learning to create a regression model that will predict probability.",
      "Use reinforcement learning to train a model to return the probability.",
      "Use code that will calculate probability by using simple rules and computations.",
      "Use unsupervised learning to create a model that will estimate probability density."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/150690-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 15,
    "text": "Which metric measures the runtime efficiency of operating AI models?",
    "options": [
      "Customer satisfaction score (CSAT)",
      "Training time for each epoch",
      "Average response time",
      "Number of training instances"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/150732-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 16,
    "text": "A company is building a contact center application and wants to gain insights from customer conversations. The company wants to analyze and extract key information from the audio of the customer calls.Which solution meets these requirements?",
    "options": [
      "Build a conversational chatbot by using Amazon Lex.",
      "Transcribe call recordings by using Amazon Transcribe.",
      "Extract information from call recordings by using Amazon SageMaker Model Monitor.",
      "Create classification labels by using Amazon Comprehend."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/150734-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 17,
    "text": "A company has petabytes of unlabeled customer data to use for an advertisement campaign. The company wants to classify its customers into tiers to advertise and promote the company's products.Which methodology should the company use to meet these requirements?",
    "options": [
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning",
      "Reinforcement learning from human feedback (RLHF)"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/150630-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 18,
    "text": "An AI practitioner wants to use a foundation model (FM) to design a search application. The search application must handle queries that have text and images.Which type of FM should the AI practitioner use to power the search application?",
    "options": [
      "Multi-modal embedding model",
      "Text embedding model",
      "Multi-modal generation model",
      "Image generation model"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150631-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 19,
    "text": "A company uses a foundation model (FM) from Amazon Bedrock for an AI search tool. The company wants to fine-tune the model to be more accurate by using the company's data.Which strategy will successfully fine-tune the model?",
    "options": [
      "Provide labeled data with the prompt field and the completion field.",
      "Prepare the training dataset by creating a .txt file that contains multiple lines in .csv format.",
      "Purchase Provisioned Throughput for Amazon Bedrock.",
      "Train the model on journals and textbooks."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150800-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 20,
    "text": "A company wants to use AI to protect its application from threats. The AI solution needs to check if an IP address is from a suspicious source.Which solution meets these requirements?",
    "options": [
      "Build a speech recognition system.",
      "Create a natural language processing (NLP) named entity recognition system.",
      "Develop an anomaly detection system.",
      "Create a fraud forecasting system."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/150632-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 21,
    "text": "Which feature of Amazon OpenSearch Service gives companies the ability to build vector database applications?",
    "options": [
      "Integration with Amazon S3 for object storage",
      "Support for geospatial indexing and queries",
      "Scalable index management and nearest neighbor search capability",
      "Ability to perform real-time analysis on streaming data"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/150801-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 22,
    "text": "Which option is a use case for generative AI models?",
    "options": [
      "Improving network security by using intrusion detection systems",
      "Creating photorealistic images from text descriptions for digital marketing",
      "Enhancing database performance by using optimized indexing",
      "Analyzing financial data to forecast stock market trends"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/150802-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 23,
    "text": "A company wants to build a generative AI application by using Amazon Bedrock and needs to choose a foundation model (FM). The company wants to know how much information can fit into one prompt.Which consideration will inform the company's decision?",
    "options": [
      "Temperature",
      "Context window",
      "Batch size",
      "Model size"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/150803-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 24,
    "text": "A company wants to make a chatbot to help customers. The chatbot will help solve technical problems without human intervention.The company chose a foundation model (FM) for the chatbot. The chatbot needs to produce responses that adhere to company tone.Which solution meets these requirements?",
    "options": [
      "Set a low limit on the number of tokens the FM can produce.",
      "Use batch inferencing to process detailed responses.",
      "Experiment and refine the prompt until the FM produces the desired responses.",
      "Define a higher number for the temperature parameter."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/150804-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 25,
    "text": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company wants to classify the sentiment of text passages as positive or negative.Which prompt engineering strategy meets these requirements?",
    "options": [
      "Provide examples of text passages with corresponding positive or negative labels in the prompt followed by the new text passage to be classified.",
      "Provide a detailed explanation of sentiment analysis and how LLMs work in the prompt.",
      "Provide the new text passage to be classified without any additional context or examples.",
      "Provide the new text passage with a few examples of unrelated tasks, such as text summarization or question answering."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150805-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 26,
    "text": "A security company is using Amazon Bedrock to run foundation models (FMs). The company wants to ensure that only authorized users invoke the models. The company needs to identify any unauthorized access attempts to set appropriate AWS Identity and Access Management (IAM) policies and roles for future iterations of the FMs.Which AWS service should the company use to identify unauthorized users that are trying to access Amazon Bedrock?",
    "options": [
      "AWS Audit Manager",
      "AWS CloudTrail",
      "Amazon Fraud Detector",
      "AWS Trusted Advisor"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/150806-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 27,
    "text": "A company has developed an ML model for image classification. The company wants to deploy the model to production so that a web application can use the model.The company needs to implement a solution to host the model and serve predictions without managing any of the underlying infrastructure.Which solution will meet these requirements?",
    "options": [
      "Use Amazon SageMaker Serverless Inference to deploy the model.",
      "Use Amazon CloudFront to deploy the model.",
      "Use Amazon API Gateway to host the model and serve predictions.",
      "Use AWS Batch to host the model and serve predictions."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/151095-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 28,
    "text": "An AI company periodically evaluates its systems and processes with the help of independent software vendors (ISVs). The company needs to receive email message notifications when an ISV's compliance reports become available.Which AWS service can the company use to meet this requirement?",
    "options": [
      "AWS Audit Manager",
      "AWS Artifact",
      "AWS Trusted Advisor",
      "AWS Data Exchange"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/150807-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 29,
    "text": "A company wants to use a large language model (LLM) to develop a conversational agent. The company needs to prevent the LLM from being manipulated with common prompt engineering techniques to perform undesirable actions or expose sensitive information.Which action will reduce these risks?",
    "options": [
      "Create a prompt template that teaches the LLM to detect attack patterns.",
      "Increase the temperature parameter on invocation requests to the LLM.",
      "Avoid using LLMs that are not listed in Amazon SageMaker.",
      "Decrease the number of input tokens on invocations of the LLM."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150808-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 30,
    "text": "A company is using the Generative AI Security Scoping Matrix to assess security responsibilities for its solutions. The company has identified four different solution scopes based on the matrix.Which solution scope gives the company the MOST ownership of security responsibilities?",
    "options": [
      "Using a third-party enterprise application that has embedded generative AI features.",
      "Building an application by using an existing third-party generative AI foundation model (FM).",
      "Refining an existing third-party generative AI foundation model (FM) by fine-tuning the model by using data specific to the business.",
      "Building and training a generative AI model from scratch by using specific data that a customer owns."
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/150809-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 31,
    "text": "An AI practitioner has a database of animal photos. The AI practitioner wants to automatically identify and categorize the animals in the photos without manual human effort.Which strategy meets these requirements?",
    "options": [
      "Object detection",
      "Anomaly detection",
      "Named entity recognition",
      "Inpainting"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150810-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 32,
    "text": "A company wants to create an application by using Amazon Bedrock. The company has a limited budget and prefers flexibility without long-term commitment.Which Amazon Bedrock pricing model meets these requirements?",
    "options": [
      "On-Demand",
      "Model customization",
      "Provisioned Throughput",
      "Spot Instance"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150811-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 33,
    "text": "Which AWS service or feature can help an AI development team quickly deploy and consume a foundation model (FM) within the team's VPC?",
    "options": [
      "Amazon Personalize",
      "Amazon SageMaker JumpStart",
      "PartyRock, an Amazon Bedrock Playground",
      "Amazon SageMaker endpoints"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/150812-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 34,
    "text": "How can companies use large language models (LLMs) securely on Amazon Bedrock?",
    "options": [
      "Design clear and specific prompts. Configure AWS Identity and Access Management (IAM) roles and policies by using least privilege access.",
      "Enable AWS Audit Manager for automatic model evaluation jobs.",
      "Enable Amazon Bedrock automatic model evaluation jobs.",
      "Use Amazon CloudWatch Logs to make models explainable and to monitor for bias."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150813-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 35,
    "text": "A company has terabytes of data in a database that the company can use for business analysis. The company wants to build an AI-based application that can build a SQL query from input text that employees provide. The employees have minimal experience with technology.Which solution meets these requirements?",
    "options": [
      "Generative pre-trained transformers (GPT)",
      "Residual neural network",
      "Support vector machine",
      "WaveNet"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150814-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 36,
    "text": "A company built a deep learning model for object detection and deployed the model to production.Which AI process occurs when the model analyzes a new image to identify objects?",
    "options": [
      "Training",
      "Inference",
      "Model deployment",
      "Bias correction"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151041-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 37,
    "text": "An AI practitioner is building a model to generate images of humans in various professions. The AI practitioner discovered that the input data is biased and that specific attributes affect the image generation and create bias in the model.Which technique will solve the problem?",
    "options": [
      "Data augmentation for imbalanced classes",
      "Model monitoring for class distribution",
      "Retrieval Augmented Generation (RAG)",
      "Watermark detection for images"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150816-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 38,
    "text": "A company is implementing the Amazon Titan foundation model (FM) by using Amazon Bedrock. The company needs to supplement the model by using relevant data from the company's private data sources.Which solution will meet this requirement?",
    "options": [
      "Use a different FM.",
      "Choose a lower temperature value.",
      "Create an Amazon Bedrock knowledge base.",
      "Enable model invocation logging."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/151094-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 39,
    "text": "A medical company is customizing a foundation model (FM) for diagnostic purposes. The company needs the model to be transparent and explainable to meet regulatory requirements.Which solution will meet these requirements?",
    "options": [
      "Configure the security and compliance by using Amazon Inspector.",
      "Generate simple metrics, reports, and examples by using Amazon SageMaker Clarify.",
      "Encrypt and secure training data by using Amazon Macie.",
      "Gather more data. Use Amazon Rekognition to add custom labels to the data."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/150820-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 40,
    "text": "A company wants to deploy a conversational chatbot to answer customer questions. The chatbot is based on a fine-tuned Amazon SageMaker JumpStart model. The application must comply with multiple regulatory frameworks.Which capabilities can the company show compliance for? (Choose two.)",
    "options": [
      "Auto scaling inference endpoints",
      "Threat detection",
      "Data protection",
      "Cost optimization",
      "Loosely coupled microservices"
    ],
    "answer": "BC",
    "link": "https://www.examtopics.com/discussions/amazon/view/150821-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/",
    "isMultipleChoice": true
  },
  {
    "number": 41,
    "text": "A company is training a foundation model (FM). The company wants to increase the accuracy of the model up to a specific acceptance level.Which solution will meet these requirements?",
    "options": [
      "Decrease the batch size.",
      "Increase the epochs.",
      "Decrease the epochs.",
      "Increase the temperature parameter."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151042-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 42,
    "text": "A company is building a large language model (LLM) question answering chatbot. The company wants to decrease the number of actions call center employees need to take to respond to customer questions.Which business objective should the company use to evaluate the effect of the LLM chatbot?",
    "options": [
      "Website engagement rate",
      "Average call duration",
      "Corporate social responsibility",
      "Regulatory compliance"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151043-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 43,
    "text": "Which functionality does Amazon SageMaker Clarify provide?",
    "options": [
      "Integrates a Retrieval Augmented Generation (RAG) workflow",
      "Monitors the quality of ML models in production",
      "Documents critical details about ML models",
      "Identifies potential bias during data preparation"
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/150822-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 44,
    "text": "A company is developing a new model to predict the prices of specific items. The model performed well on the training dataset. When the company deployed the model to production, the model's performance decreased significantly.What should the company do to mitigate this problem?",
    "options": [
      "Reduce the volume of data that is used in training.",
      "Add hyperparameters to the model.",
      "Increase the volume of data that is used in training.",
      "Increase the model training time."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/151044-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 45,
    "text": "An ecommerce company wants to build a solution to determine customer sentiments based on written customer reviews of products.Which AWS services meet these requirements? (Choose two.)",
    "options": [
      "Amazon Lex",
      "Amazon Comprehend",
      "Amazon Polly",
      "Amazon Bedrock",
      "Amazon Rekognition"
    ],
    "answer": "BD",
    "link": "https://www.examtopics.com/discussions/amazon/view/150924-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/",
    "isMultipleChoice": true
  },
  {
    "number": 46,
    "text": "A company wants to use large language models (LLMs) with Amazon Bedrock to develop a chat interface for the company's product manuals. The manuals are stored as PDF files.Which solution meets these requirements MOST cost-effectively?",
    "options": [
      "Use prompt engineering to add one PDF file as context to the user prompt when the prompt is submitted to Amazon Bedrock.",
      "Use prompt engineering to add all the PDF files as context to the user prompt when the prompt is submitted to Amazon Bedrock.",
      "Use all the PDF documents to fine-tune a model with Amazon Bedrock. Use the fine-tuned model to process user prompts.",
      "Upload PDF documents to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when users submit prompts to Amazon Bedrock."
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/151045-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 47,
    "text": "A social media company wants to use a large language model (LLM) for content moderation. The company wants to evaluate the LLM outputs for bias and potential discrimination against specific groups or individuals.Which data source should the company use to evaluate the LLM outputs with the LEAST administrative effort?",
    "options": [
      "User-generated content",
      "Moderation logs",
      "Content moderation guidelines",
      "Benchmark datasets"
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/150827-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 48,
    "text": "A company wants to use a pre-trained generative AI model to generate content for its marketing campaigns. The company needs to ensure that the generated content aligns with the company's brand voice and messaging requirements.Which solution meets these requirements?",
    "options": [
      "Optimize the model's architecture and hyperparameters to improve the model's overall performance.",
      "Increase the model's complexity by adding more layers to the model's architecture.",
      "Create effective prompts that provide clear instructions and context to guide the model's generation.",
      "Select a large, diverse dataset to pre-train a new generative model."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/151346-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 49,
    "text": "A loan company is building a generative AI-based solution to offer new applicants discounts based on specific business criteria. The company wants to build and use an AI model responsibly to minimize bias that could negatively affect some customers.Which actions should the company take to meet these requirements? (Choose two.)",
    "options": [
      "Detect imbalances or disparities in the data.",
      "Ensure that the model runs frequently.",
      "Evaluate the model's behavior so that the company can provide transparency to stakeholders.",
      "Use the Recall-Oriented Understudy for Gisting Evaluation (ROUGE) technique to ensure that the model is 100% accurate.",
      "Ensure that the model's inference time is within the accepted limits."
    ],
    "answer": "AC",
    "link": "https://www.examtopics.com/discussions/amazon/view/150828-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/",
    "isMultipleChoice": true
  },
  {
    "number": 50,
    "text": "A company is using an Amazon Bedrock base model to summarize documents for an internal use case. The company trained a custom model to improve the summarization quality.Which action must the company take to use the custom model through Amazon Bedrock?",
    "options": [
      "Purchase Provisioned Throughput for the custom model.",
      "Deploy the custom model in an Amazon SageMaker endpoint for real-time inference.",
      "Register the model with the Amazon SageMaker Model Registry.",
      "Grant access to the custom model in Amazon Bedrock."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150829-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 51,
    "text": "A company needs to choose a model from Amazon Bedrock to use internally. The company must identify a model that generates responses in a style that the company's employees prefer.What should the company do to meet these requirements?",
    "options": [
      "Evaluate the models by using built-in prompt datasets.",
      "Evaluate the models by using a human workforce and custom prompt datasets.",
      "Use public model leaderboards to identify the model.",
      "Use the model InvocationLatency runtime metrics in Amazon CloudWatch when trying models."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151350-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 52,
    "text": "A student at a university is copying content from generative AI to write essays.Which challenge of responsible generative AI does this scenario represent?",
    "options": [
      "Toxicity",
      "Hallucinations",
      "Plagiarism",
      "Privacy"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/151742-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 53,
    "text": "A company needs to build its own large language model (LLM) based on only the company's private data. The company is concerned about the environmental effect of the training process.Which Amazon EC2 instance type has the LEAST environmental effect when training LLMs?",
    "options": [
      "Amazon EC2 C series",
      "Amazon EC2 G series",
      "Amazon EC2 P series",
      "Amazon EC2 Trn series"
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/150830-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 54,
    "text": "A company wants to build an interactive application for children that generates new stories based on classic stories. The company wants to use Amazon Bedrock and needs to ensure that the results and topics are appropriate for children.Which AWS service or feature will meet these requirements?",
    "options": [
      "Amazon Rekognition",
      "Amazon Bedrock playgrounds",
      "Guardrails for Amazon Bedrock",
      "Agents for Amazon Bedrock"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/151080-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 55,
    "text": "A company is building an application that needs to generate synthetic data that is based on existing data.Which type of model can the company use to meet this requirement?",
    "options": [
      "Generative adversarial network (GAN)",
      "XGBoost",
      "Residual neural network",
      "WaveNet"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150876-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 56,
    "text": "A digital devices company wants to predict customer demand for memory hardware. The company does not have coding experience or knowledge of ML algorithms and needs to develop a data-driven predictive model. The company needs to perform analysis on internal data and external data.Which solution will meet these requirements?",
    "options": [
      "Store the data in Amazon S3. Create ML models and demand forecast predictions by using Amazon SageMaker built-in algorithms that use the data from Amazon S3.",
      "Import the data into Amazon SageMaker Data Wrangler. Create ML models and demand forecast predictions by using SageMaker built-in algorithms.",
      "Import the data into Amazon SageMaker Data Wrangler. Build ML models and demand forecast predictions by using an Amazon Personalize Trending-Now recipe.",
      "Import the data into Amazon SageMaker Canvas. Build ML models and demand forecast predictions by selecting the values in the data from SageMaker Canvas."
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/151047-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 57,
    "text": "A company has installed a security camera. The company uses an ML model to evaluate the security camera footage for potential thefts. The company has discovered that the model disproportionately flags people who are members of a specific ethnic group.Which type of bias is affecting the model output?",
    "options": [
      "Measurement bias",
      "Sampling bias",
      "Observer bias",
      "Confirmation bias"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151142-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 58,
    "text": "A company is building a customer service chatbot. The company wants the chatbot to improve its responses by learning from past interactions and online resources.Which AI learning strategy provides this self-improvement capability?",
    "options": [
      "Supervised learning with a manually curated dataset of good responses and bad responses",
      "Reinforcement learning with rewards for positive customer feedback",
      "Unsupervised learning to find clusters of similar customer inquiries",
      "Supervised learning with a continuously updated FAQ database"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/152501-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 59,
    "text": "An AI practitioner has built a deep learning model to classify the types of materials in images. The AI practitioner now wants to measure the model performance.Which metric will help the AI practitioner evaluate the performance of the model?",
    "options": [
      "Confusion matrix",
      "Correlation matrix",
      "R2 score",
      "Mean squared error (MSE)"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150995-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 60,
    "text": "A company has built a chatbot that can respond to natural language questions with images. The company wants to ensure that the chatbot does not return inappropriate or unwanted images.Which solution will meet these requirements?",
    "options": [
      "Implement moderation APIs.",
      "Retrain the model with a general public dataset.",
      "Perform model validation.",
      "Automate user feedback integration."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150996-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 61,
    "text": "An AI practitioner is using an Amazon Bedrock base model to summarize session chats from the customer service department. The AI practitioner wants to store invocation logs to monitor model input and output data.Which strategy should the AI practitioner use?",
    "options": [
      "Configure AWS CloudTrail as the logs destination for the model.",
      "Enable invocation logging in Amazon Bedrock.",
      "Configure AWS Audit Manager as the logs destination for the model.",
      "Configure model invocation logging in Amazon EventBridge."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151144-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 62,
    "text": "A company is building an ML model to analyze archived data. The company must perform inference on large datasets that are multiple GBs in size. The company does not need to access the model predictions immediately.Which Amazon SageMaker inference option will meet these requirements?",
    "options": [
      "Batch transform",
      "Real-time inference",
      "Serverless inference",
      "Asynchronous inference"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/151124-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 63,
    "text": "Which term describes the numerical representations of real-world objects and concepts that AI and natural language processing (NLP) models use to improve understanding of textual information?",
    "options": [
      "Embeddings",
      "Tokens",
      "Models",
      "Binaries"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/151750-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 64,
    "text": "A research company implemented a chatbot by using a foundation model (FM) from Amazon Bedrock. The chatbot searches for answers to questions from a large database of research papers.After multiple prompt engineering attempts, the company notices that the FM is performing poorly because of the complex scientific terms in the research papers.How can the company improve the performance of the chatbot?",
    "options": [
      "Use few-shot prompting to define how the FM can answer the questions.",
      "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms.",
      "Change the FM inference parameters.",
      "Clean the research paper data to remove complex scientific terms."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151048-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 65,
    "text": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company needs the LLM to produce more consistent responses to the same input prompt.Which adjustment to an inference parameter should the company make to meet these requirements?",
    "options": [
      "Decrease the temperature value.",
      "Increase the temperature value.",
      "Decrease the length of output tokens.",
      "Increase the maximum generation length."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/150997-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 66,
    "text": "A company wants to develop a large language model (LLM) application by using Amazon Bedrock and customer data that is uploaded to Amazon S3. The company's security policy states that each team can access data for only the team's own customers.Which solution will meet these requirements?",
    "options": [
      "Create an Amazon Bedrock custom service role for each team that has access to only the team's customer data.",
      "Create a custom service role that has Amazon S3 access. Ask teams to specify the customer name on each Amazon Bedrock request.",
      "Redact personal data in Amazon S3. Update the S3 bucket policy to allow team access to customer data.",
      "Create one Amazon Bedrock role that has full Amazon S3 access. Create IAM roles for each team that have access to only each team's customer folders."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/151076-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 67,
    "text": "A medical company deployed a disease detection model on Amazon Bedrock. To comply with privacy policies, the company wants to prevent the model from including personal patient information in its responses. The company also wants to receive notification when policy violations occur.Which solution meets these requirements?",
    "options": [
      "Use Amazon Macie to scan the model's output for sensitive data and set up alerts for potential violations.",
      "Configure AWS CloudTrail to monitor the model's responses and create alerts for any detected personal information.",
      "Use Guardrails for Amazon Bedrock to filter content. Set up Amazon CloudWatch alarms for notification of policy violations.",
      "Implement Amazon SageMaker Model Monitor to detect data drift and receive alerts when model quality degrades."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/151077-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 68,
    "text": "A company manually reviews all submitted resumes in PDF format. As the company grows, the company expects the volume of resumes to exceed the company's review capacity. The company needs an automated system to convert the PDF resumes into plain text format for additional processing.Which AWS service meets this requirement?",
    "options": [
      "Amazon Textract",
      "Amazon Personalize",
      "Amazon Lex",
      "Amazon Transcribe"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/151354-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 69,
    "text": "An education provider is building a question and answer application that uses a generative AI model to explain complex concepts. The education provider wants to automatically change the style of the model response depending on who is asking the question. The education provider will give the model the age range of the user who has asked the question.Which solution meets these requirements with the LEAST implementation effort?",
    "options": [
      "Fine-tune the model by using additional training data that is representative of the various age ranges that the application will support.",
      "Add a role description to the prompt context that instructs the model of the age range that the response should target.",
      "Use chain-of-thought reasoning to deduce the correct style and complexity for a response suitable for that user.",
      "Summarize the response text depending on the age of the user so that younger users receive shorter responses."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151078-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 70,
    "text": "Which strategy evaluates the accuracy of a foundation model (FM) that is used in image classification tasks?",
    "options": [
      "Calculate the total cost of resources used by the model.",
      "Measure the model's accuracy against a predefined benchmark dataset.",
      "Count the number of layers in the neural network.",
      "Assess the color accuracy of images processed by the model."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151147-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 71,
    "text": "An accounting firm wants to implement a large language model (LLM) to automate document processing. The firm must proceed responsibly to avoid potential harms.What should the firm do when developing and deploying the LLM? (Choose two.)",
    "options": [
      "Include fairness metrics for model evaluation.",
      "Adjust the temperature parameter of the model.",
      "Modify the training data to mitigate bias.",
      "Avoid overfitting on the training data.",
      "Apply prompt engineering techniques."
    ],
    "answer": "AC",
    "link": "https://www.examtopics.com/discussions/amazon/view/151079-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/",
    "isMultipleChoice": true
  },
  {
    "number": 72,
    "text": "A company is building an ML model. The company collected new data and analyzed the data by creating a correlation matrix, calculating statistics, and visualizing the data.Which stage of the ML pipeline is the company currently in?",
    "options": [
      "Data pre-processing",
      "Feature engineering",
      "Exploratory data analysis",
      "Hyperparameter tuning"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/150982-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 73,
    "text": "A company has documents that are missing some words because of a database error. The company wants to build an ML model that can suggest potential words to fill in the missing text.Which type of model meets this requirement?",
    "options": [
      "Topic modeling",
      "Clustering models",
      "Prescriptive ML models",
      "BERT-based models"
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/150983-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 74,
    "text": "A company wants to display the total sales for its top-selling products across various retail locations in the past 12 months.Which AWS solution should the company use to automate the generation of graphs?",
    "options": [
      "Amazon Q in Amazon EC2",
      "Amazon Q Developer",
      "Amazon Q in Amazon QuickSight",
      "Amazon Q in AWS Chatbot"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/151150-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 75,
    "text": "A company is building a chatbot to improve user experience. The company is using a large language model (LLM) from Amazon Bedrock for intent detection. The company wants to use few-shot learning to improve intent detection accuracy.Which additional data does the company need to meet these requirements?",
    "options": [
      "Pairs of chatbot responses and correct user intents",
      "Pairs of user messages and correct chatbot responses",
      "Pairs of user messages and correct user intents",
      "Pairs of user intents and correct chatbot responses"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/151658-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 76,
    "text": "A company is using few-shot prompting on a base model that is hosted on Amazon Bedrock. The model currently uses 10 examples in the prompt. The model is invoked once daily and is performing well. The company wants to lower the monthly cost.Which solution will meet these requirements?",
    "options": [
      "Customize the model by using fine-tuning.",
      "Decrease the number of tokens in the prompt.",
      "Increase the number of tokens in the prompt.",
      "Use Provisioned Throughput."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151151-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 77,
    "text": "An AI practitioner is using a large language model (LLM) to create content for marketing campaigns. The generated content sounds plausible and factual but is incorrect.Which problem is the LLM having?",
    "options": [
      "Data leakage",
      "Hallucination",
      "Overfitting",
      "Underfitting"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151856-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 78,
    "text": "An AI practitioner trained a custom model on Amazon Bedrock by using a training dataset that contains confidential data. The AI practitioner wants to ensure that the custom model does not generate inference responses based on confidential data.How should the AI practitioner prevent responses based on confidential data?",
    "options": [
      "Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom model.",
      "Mask the confidential data in the inference responses by using dynamic data masking.",
      "Encrypt the confidential data in the inference responses by using Amazon SageMaker.",
      "Encrypt the confidential data in the custom model by using AWS Key Management Service (AWS KMS)."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/152544-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 79,
    "text": "A company has built a solution by using generative AI. The solution uses large language models (LLMs) to translate training manuals from English into other languages. The company wants to evaluate the accuracy of the solution by examining the text generated for the manuals.Which model evaluation strategy meets these requirements?",
    "options": [
      "Bilingual Evaluation Understudy (BLEU)",
      "Root mean squared error (RMSE)",
      "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
      "F1 score"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/152546-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 80,
    "text": "A large retailer receives thousands of customer support inquiries about products every day. The customer support inquiries need to be processed and responded to quickly. The company wants to implement Agents for Amazon Bedrock.What are the key benefits of using Amazon Bedrock agents that could help this retailer?",
    "options": [
      "Generation of custom foundation models (FMs) to predict customer needs",
      "Automation of repetitive tasks and orchestration of complex workflows",
      "Automatically calling multiple foundation models (FMs) and consolidating the results",
      "Selecting the foundation model (FM) based on predefined criteria and metrics"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/151660-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 81,
    "text": "Which option is a benefit of ongoing pre-training when fine-tuning a foundation model (FM)?",
    "options": [
      "Helps decrease the model's complexity",
      "Improves model performance over time",
      "Decreases the training time requirement",
      "Optimizes model inference time"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/152545-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 82,
    "text": "What are tokens in the context of generative AI models?",
    "options": [
      "Tokens are the basic units of input and output that a generative AI model operates on, representing words, subwords, or other linguistic units.",
      "Tokens are the mathematical representations of words or concepts used in generative AI models.",
      "Tokens are the pre-trained weights of a generative AI model that are fine-tuned for specific tasks.",
      "Tokens are the specific prompts or instructions given to a generative AI model to generate output."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/151661-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 83,
    "text": "A company wants to assess the costs that are associated with using a large language model (LLM) to generate inferences. The company wants to use Amazon Bedrock to build generative AI applications.Which factor will drive the inference costs?",
    "options": [
      "Number of tokens consumed",
      "Temperature value",
      "Amount of data used to train the LLM",
      "Total training time"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/151662-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 84,
    "text": "A company is using Amazon SageMaker Studio notebooks to build and train ML models. The company stores the data in an Amazon S3 bucket. The company needs to manage the flow of data from Amazon S3 to SageMaker Studio notebooks.Which solution will meet this requirement?",
    "options": [
      "Use Amazon Inspector to monitor SageMaker Studio.",
      "Use Amazon Macie to monitor SageMaker Studio.",
      "Configure SageMaker to use a VPC with an S3 endpoint.",
      "Configure SageMaker to use S3 Glacier Deep Archive."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/152547-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 85,
    "text": "A company has a foundation model (FM) that was customized by using Amazon Bedrock to answer customer queries about products. The company wants to validate the model's responses to new types of queries. The company needs to upload a new dataset that Amazon Bedrock can use for validation.Which AWS service meets these requirements?",
    "options": [
      "Amazon S3",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Elastic File System (Amazon EFS)",
      "AWS Snowcone"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/151663-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 86,
    "text": "Which prompting attack directly exposes the configured behavior of a large language model (LLM)?",
    "options": [
      "Prompted persona switches",
      "Exploiting friendliness and trust",
      "Ignoring the prompt template",
      "Extracting the prompt template"
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/153534-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 87,
    "text": "A company wants to use Amazon Bedrock. The company needs to review which security aspects the company is responsible for when using Amazon Bedrock.Which security aspect will the company be responsible for?",
    "options": [
      "Patching and updating the versions of Amazon Bedrock",
      "Protecting the infrastructure that hosts Amazon Bedrock",
      "Securing the company's data in transit and at rest",
      "Provisioning Amazon Bedrock within the company network"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/153535-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 88,
    "text": "A social media company wants to use a large language model (LLM) to summarize messages. The company has chosen a few LLMs that are available on Amazon SageMaker JumpStart. The company wants to compare the generated output toxicity of these models.Which strategy gives the company the ability to evaluate the LLMs with the LEAST operational overhead?",
    "options": [
      "Crowd-sourced evaluation",
      "Automatic model evaluation",
      "Model evaluation with human workers",
      "Reinforcement learning from human feedback (RLHF)"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/153464-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 89,
    "text": "A company is testing the security of a foundation model (FM). During testing, the company wants to get around the safety features and make harmful content.Which security technique is this an example of?",
    "options": [
      "Fuzzing training data to find vulnerabilities",
      "Denial of service (DoS)",
      "Penetration testing with authorization",
      "Jailbreak"
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/153465-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 90,
    "text": "A company needs to use Amazon SageMaker for model training and inference. The company must comply with regulatory requirements to run SageMaker jobs in an isolated environment without internet access.Which solution will meet these requirements?",
    "options": [
      "Run SageMaker training and inference by using SageMaker Experiments.",
      "Run SageMaker training and Inference by using network Isolation.",
      "Encrypt the data at rest by using encryption for SageMaker geospatial capabilities.",
      "Associate appropriate AWS Identity and Access Management (IAM) roles with the SageMaker jobs."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/153538-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 91,
    "text": "An ML research team develops custom ML models. The model artifacts are shared with other teams for integration into products and services. The ML team retains the model training code and data. The ML team wants to build a mechanism that the ML team can use to audit models.Which solution should the ML team use when publishing the custom ML models?",
    "options": [
      "Create documents with the relevant information. Store the documents in Amazon S3.",
      "Use AWS AI Service Cards for transparency and understanding models.",
      "Create Amazon SageMaker Model Cards with intended uses and training and inference details.",
      "Create model training scripts. Commit the model training scripts to a Git repository."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/153539-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 92,
    "text": "A software company builds tools for customers. The company wants to use AI to increase software development productivity.Which solution will meet these requirements?",
    "options": [
      "Use a binary classification model to generate code reviews.",
      "Install code recommendation software in the company's developer tools.",
      "Install a code forecasting tool to predict potential code issues.",
      "Use a natural language processing (NLP) tool to generate code."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/153540-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 93,
    "text": "A retail store wants to predict the demand for a specific product for the next few weeks by using the Amazon SageMaker DeepAR forecasting algorithm.Which type of data will meet this requirement?",
    "options": [
      "Text data",
      "Image data",
      "Time series data",
      "Binary data"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/153541-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 94,
    "text": "A large retail bank wants to develop an ML system to help the risk management team decide on loan allocations for different demographics.What must the bank do to develop an unbiased ML model?",
    "options": [
      "Reduce the size of the training dataset.",
      "Ensure that the ML model predictions are consistent with historical results.",
      "Create a different ML model for each demographic group.",
      "Measure class imbalance on the training dataset. Adapt the training process accordingly."
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/153542-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 95,
    "text": "Which prompting technique can protect against prompt injection attacks?",
    "options": [
      "Adversarial prompting",
      "Zero-shot prompting",
      "Least-to-most prompting",
      "Chain-of-thought prompting"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153530-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 96,
    "text": "A company has fine-tuned a large language model (LLM) to answer questions for a help desk. The company wants to determine if the fine-tuning has enhanced the model's accuracy.Which metric should the company use for the evaluation?",
    "options": [
      "Precision",
      "Time to first token",
      "F1 score",
      "Word error rate"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/153531-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 97,
    "text": "A company is using Retrieval Augmented Generation (RAG) with Amazon Bedrock and Stable Diffusion to generate product images based on text descriptions. The results are often random and lack specific details. The company wants to increase the specificity of the generated images.Which solution meets these requirements?",
    "options": [
      "Increase the number of generation steps.",
      "Use the MASK_IMAGE_BLACK mask source option.",
      "Increase the classifier-free guidance (CFG) scale.",
      "Increase the prompt strength."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/153489-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 98,
    "text": "A company wants to implement a large language model (LLM) based chatbot to provide customer service agents with real-time contextual responses to customers' inquiries. The company will use the company's policies as the knowledge base.Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      "Retrain the LLM on the company policy data.",
      "Fine-tune the LLM on the company policy data.",
      "Implement Retrieval Augmented Generation (RAG) for in-context responses.",
      "Use pre-training and data augmentation on the company policy data."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/153544-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 99,
    "text": "A company wants to create a new solution by using AWS Glue. The company has minimal programming experience with AWS Glue.Which AWS service can help the company use AWS Glue?",
    "options": [
      "Amazon Q Developer",
      "AWS Config",
      "Amazon Personalize",
      "Amazon Comprehend"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153547-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 100,
    "text": "A company is developing a mobile ML app that uses a phone's camera to diagnose and treat insect bites. The company wants to train an image classification model by using a diverse dataset of insect bite photos from different genders, ethnicities, and geographic locations around the world.Which principle of responsible AI does the company demonstrate in this scenario?",
    "options": [
      "Fairness",
      "Explainability",
      "Governance",
      "Transparency"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153548-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 101,
    "text": "A company is developing an ML model to make loan approvals. The company must implement a solution to detect bias in the model. The company must also be able to explain the model's predictions.Which solution will meet these requirements?",
    "options": [
      "Amazon SageMaker Clarify",
      "Amazon SageMaker Data Wrangler",
      "Amazon SageMaker Model Cards",
      "AWS AI Service Cards"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153549-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 102,
    "text": "A company has developed a generative text summarization model by using Amazon Bedrock. The company will use Amazon Bedrock automatic model evaluation capabilities.Which metric should the company use to evaluate the accuracy of the model?",
    "options": [
      "Area Under the ROC Curve (AUC) score",
      "F1 score",
      "BERTScore",
      "Real world knowledge (RWK) score"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/153532-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 103,
    "text": "An AI practitioner wants to predict the classification of flowers based on petal length, petal width, sepal length, and sepal width.Which algorithm meets these requirements?",
    "options": [
      "K-nearest neighbors (k-NN)",
      "K-mean",
      "Autoregressive Integrated Moving Average (ARIMA)",
      "Linear regression"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153490-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 104,
    "text": "A company is using custom models in Amazon Bedrock for a generative AI application. The company wants to use a company managed encryption key to encrypt the model artifacts that the model customization jobs create.Which AWS service meets these requirements?",
    "options": [
      "AWS Key Management Service (AWS KMS)",
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Secrets Manager"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153550-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 105,
    "text": "A company wants to use large language models (LLMs) to produce code from natural language code comments.Which LLM feature meets these requirements?",
    "options": [
      "Text summarization",
      "Text generation",
      "Text completion",
      "Text classification"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/153552-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 106,
    "text": "A company is introducing a mobile app that helps users learn foreign languages. The app makes text more coherent by calling a large language model (LLM). The company collected a diverse dataset of text and supplemented the dataset with examples of more readable versions. The company wants the LLM output to resemble the provided examples.Which metric should the company use to assess whether the LLM meets these requirements?",
    "options": [
      "Value of the loss function",
      "Semantic robustness",
      "Recall-Oriented Understudy for Gisting Evaluation (ROUGE) score",
      "Latency of the text generation"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/153468-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 107,
    "text": "A company notices that its foundation model (FM) generates images that are unrelated to the prompts. The company wants to modify the prompt techniques to decrease unrelated images.Which solution meets these requirements?",
    "options": [
      "Use zero-shot prompts.",
      "Use negative prompts.",
      "Use positive prompts.",
      "Use ambiguous prompts."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/153469-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 108,
    "text": "A company wants to use a large language model (LLM) to generate concise, feature-specific descriptions for the company\u2019s products.Which prompt engineering technique meets these requirements?",
    "options": [
      "Create one prompt that covers all products. Edit the responses to make the responses more specific, concise, and tailored to each product.",
      "Create prompts for each product category that highlight the key features. Include the desired output format and length for each prompt response.",
      "Include a diverse range of product features in each prompt to generate creative and unique descriptions.",
      "Provide detailed, product-specific prompts to ensure precise and customized descriptions."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/153470-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 109,
    "text": "A company is developing an ML model to predict customer churn. The model performs well on the training dataset but does not accurately predict churn for new data.Which solution will resolve this issue?",
    "options": [
      "Decrease the regularization parameter to increase model complexity.",
      "Increase the regularization parameter to decrease model complexity.",
      "Add more features to the input data.",
      "Train the model for more epochs."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/153472-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 110,
    "text": "A company is implementing intelligent agents to provide conversational search experiences for its customers. The company needs a database service that will support storage and queries of embeddings from a generative AI model as vectors in the database.Which AWS service will meet these requirements?",
    "options": [
      "Amazon Athena",
      "Amazon Aurora PostgreSQL",
      "Amazon Redshift",
      "Amazon EMR"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/153473-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 111,
    "text": "A financial institution is building an AI solution to make loan approval decisions by using a foundation model (FM). For security and audit purposes, the company needs the AI solution's decisions to be explainable.Which factor relates to the explainability of the AI solution's decisions?",
    "options": [
      "Model complexity",
      "Training time",
      "Number of hyperparameters",
      "Deployment time"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153477-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 112,
    "text": "A pharmaceutical company wants to analyze user reviews of new medications and provide a concise overview for each medication.Which solution meets these requirements?",
    "options": [
      "Create a time-series forecasting model to analyze the medication reviews by using Amazon Personalize.",
      "Create medication review summaries by using Amazon Bedrock large language models (LLMs).",
      "Create a classification model that categorizes medications into different groups by using Amazon SageMaker.",
      "Create medication review summaries by using Amazon Rekognition."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/153478-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 113,
    "text": "A company wants to build a lead prioritization application for its employees to contact potential customers. The application must give employees the ability to view and adjust the weights assigned to different variables in the model based on domain knowledge and expertise.Which ML model type meets these requirements?",
    "options": [
      "Logistic regression model",
      "Deep learning model built on principal components",
      "K-nearest neighbors (k-NN) model",
      "Neural network"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153515-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 114,
    "text": "HOTSPOT-A company wants to build an ML application.Select and order the correct steps from the following list to develop a well-architected ML workload. Each step should be selected one time.",
    "options": [],
    "answer": "''",
    "link": "https://www.examtopics.com/discussions/amazon/view/156318-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/",
    "isMultipleChoice": true,
    "images": {
      "question": [
        "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image1.png"
      ],
      "answer": [
        "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image2.png"
      ]
    }
  },
  {
    "number": 115,
    "text": "Which strategy will determine if a foundation model (FM) effectively meets business objectives?",
    "options": [
      "Evaluate the model's performance on benchmark datasets.",
      "Analyze the model's architecture and hyperparameters.",
      "Assess the model's alignment with specific use cases.",
      "Measure the computational resources required for model deployment."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/153554-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 116,
    "text": "A company needs to train an ML model to classify images of different types of animals. The company has a large dataset of labeled images and will not label more data.Which type of learning should the company use to train the model?",
    "options": [
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning",
      "Active learning"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153555-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 117,
    "text": "Which phase of the ML lifecycle determines compliance and regulatory requirements?",
    "options": [
      "Feature engineering",
      "Model training",
      "Data collection",
      "Business goal identification"
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/153516-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 118,
    "text": "A food service company wants to develop an ML model to help decrease daily food waste and increase sales revenue. The company needs to continuously improve the model's accuracy.Which solution meets these requirements?",
    "options": [
      "Use Amazon SageMaker and iterate with newer data.",
      "Use Amazon Personalize and iterate with historical data.",
      "Use Amazon CloudWatch to analyze customer orders.",
      "Use Amazon Rekognition to optimize the model."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153556-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 119,
    "text": "A company has developed an ML model to predict real estate sale prices. The company wants to deploy the model to make predictions without managing servers or infrastructure.Which solution meets these requirements?",
    "options": [
      "Deploy the model on an Amazon EC2 instance.",
      "Deploy the model on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.",
      "Deploy the model by using Amazon CloudFront with an Amazon S3 integration.",
      "Deploy the model by using an Amazon SageMaker endpoint."
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/153557-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 120,
    "text": "A company wants to develop an AI application to help its employees check open customer claims, identify details for a specific claim, and access documents for a claim.Which solution meets these requirements?",
    "options": [
      "Use Agents for Amazon Bedrock with Amazon Fraud Detector to build the application.",
      "Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the application.",
      "Use Amazon Personalize with Amazon Bedrock knowledge bases to build the application.",
      "Use Amazon SageMaker to build the application by training a new ML model."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/153517-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 121,
    "text": "A manufacturing company uses AI to inspect products and find any damages or defects.Which type of AI application is the company using?",
    "options": [
      "Recommendation system",
      "Natural language processing (NLP)",
      "Computer vision",
      "Image processing"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/153558-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 122,
    "text": "A company wants to create an ML model to predict customer satisfaction. The company needs fully automated model tuning.Which AWS service meets these requirements?",
    "options": [
      "Amazon Personalize",
      "Amazon SageMaker",
      "Amazon Athena",
      "Amazon Comprehend"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/153559-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 123,
    "text": "Which technique can a company use to lower bias and toxicity in generative AI applications during the post-processing ML lifecycle?",
    "options": [
      "Human-in-the-loop",
      "Data augmentation",
      "Feature engineering",
      "Adversarial training"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153518-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 124,
    "text": "A bank has fine-tuned a large language model (LLM) to expedite the loan approval process. During an external audit of the model, the company discovered that the model was approving loans at a faster pace for a specific demographic than for other demographics.How should the bank fix this issue MOST cost-effectively?",
    "options": [
      "Include more diverse training data. Fine-tune the model again by using the new data.",
      "Use Retrieval Augmented Generation (RAG) with the fine-tuned model.",
      "Use AWS Trusted Advisor checks to eliminate bias.",
      "Pre-train a new LLM with more diverse training data."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/153560-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 125,
    "text": "HOTSPOT-A company has developed a large language model (LLM) and wants to make the LLM available to multiple internal teams. The company needs to select the appropriate inference mode for each team.Select the correct inference mode from the following list for each use case. Each inference mode should be selected one or more times.",
    "options": [],
    "answer": "''",
    "link": "https://www.examtopics.com/discussions/amazon/view/156319-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/",
    "isMultipleChoice": true,
    "images": {
      "question": [
        "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image3.png"
      ],
      "answer": [
        "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image4.png"
      ]
    }
  },
  {
    "number": 126,
    "text": "A company needs to log all requests made to its Amazon Bedrock API. The company must retain the logs securely for 5 years at the lowest possible cost.Which combination of AWS service and storage class meets these requirements? (Choose two.)",
    "options": [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Audit Manager",
      "Amazon S3 Intelligent-Tiering",
      "Amazon S3 Standard"
    ],
    "answer": "AD",
    "link": "https://www.examtopics.com/discussions/amazon/view/153592-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/",
    "isMultipleChoice": true
  },
  {
    "number": 127,
    "text": "An ecommerce company wants to improve search engine recommendations by customizing the results for each user of the company\u2019s ecommerce platform.Which AWS service meets these requirements?",
    "options": [
      "Amazon Personalize",
      "Amazon Kendra",
      "Amazon Rekognition",
      "Amazon Transcribe"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/155863-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 128,
    "text": "A hospital is developing an AI system to assist doctors in diagnosing diseases based on patient records and medical images. To comply with regulations, the sensitive patient data must not leave the country the data is located in.Which data governance strategy will ensure compliance and protect patient privacy?",
    "options": [
      "Data residency",
      "Data quality",
      "Data discoverability",
      "Data enrichment"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/155864-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 129,
    "text": "A company needs to monitor the performance of its ML systems by using a highly scalable AWS service.Which AWS service meets these requirements?",
    "options": [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "AWS Config"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/155866-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 130,
    "text": "An AI practitioner is developing a prompt for an Amazon Titan model. The model is hosted on Amazon Bedrock. The AI practitioner is using the model to solve numerical reasoning challenges. The AI practitioner adds the following phrase to the end of the prompt: \u201cAsk the model to show its work by explaining its reasoning step by step.\u201dWhich prompt engineering technique is the AI practitioner using?",
    "options": [
      "Chain-of-thought prompting",
      "Prompt injection",
      "Few-shot prompting",
      "Prompt templating"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/155868-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 131,
    "text": "Which AWS service makes foundation models (FMs) available to help users build and scale generative AI applications?",
    "options": [
      "Amazon Q Developer",
      "Amazon Bedrock",
      "Amazon Kendra",
      "Amazon Comprehend"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/155869-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 132,
    "text": "A company is building a mobile app for users who have a visual impairment. The app must be able to hear what users say and provide voice responses.Which solution will meet these requirements?",
    "options": [
      "Use a deep learning neural network to perform speech recognition.",
      "Build ML models to search for patterns in numeric data.",
      "Use generative AI summarization to generate human-like text.",
      "Build custom models for image classification and recognition."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/155870-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 133,
    "text": "A company wants to enhance response quality for a large language model (LLM) for complex problem-solving tasks. The tasks require detailed reasoning and a step-by-step explanation process.Which prompt engineering technique meets these requirements?",
    "options": [
      "Few-shot prompting",
      "Zero-shot prompting",
      "Directional stimulus prompting",
      "Chain-of-thought prompting"
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/155871-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 134,
    "text": "A company wants to keep its foundation model (FM) relevant by using the most recent data. The company wants to implement a model training strategy that includes regular updates to the FM.Which solution meets these requirements?",
    "options": [
      "Batch learning",
      "Continuous pre-training",
      "Static training",
      "Latent training"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/155867-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 135,
    "text": "HOTSPOT-A company wants to develop ML applications to improve business operations and efficiency.Select the correct ML paradigm from the following list for each use case. Each ML paradigm should be selected one or more times.",
    "options": [],
    "answer": "''",
    "link": "https://www.examtopics.com/discussions/amazon/view/155872-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/",
    "isMultipleChoice": true,
    "images": {
      "question": [
        "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image5.png"
      ],
      "answer": [
        "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image6.png"
      ]
    }
  },
  {
    "number": 136,
    "text": "Which option is a characteristic of AI governance frameworks for building trust and deploying human-centered AI technologies?",
    "options": [
      "Expanding initiatives across business units to create long-term business value",
      "Ensuring alignment with business standards, revenue goals, and stakeholder expectations",
      "Overcoming challenges to drive business transformation and growth",
      "Developing policies and guidelines for data, transparency, responsible AI, and compliance"
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/155873-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 137,
    "text": "An ecommerce company is using a generative AI chatbot to respond to customer inquiries. The company wants to measure the financial effect of the chatbot on the company\u2019s operations.Which metric should the company use?",
    "options": [
      "Number of customer inquiries handled",
      "Cost of training AI models",
      "Cost for each customer conversation",
      "Average handled time (AHT)"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/155936-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 138,
    "text": "A company wants to find groups for its customers based on the customers\u2019 demographics and buying patterns.Which algorithm should the company use to meet this requirement?",
    "options": [
      "K-nearest neighbors (k-NN)",
      "K-means",
      "Decision tree",
      "Support vector machine"
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/155916-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 139,
    "text": "A company\u2019s large language model (LLM) is experiencing hallucinations.How can the company decrease hallucinations?",
    "options": [
      "Set up Agents for Amazon Bedrock to supervise the model training.",
      "Use data pre-processing and remove any data that causes hallucinations.",
      "Decrease the temperature inference parameter for the model.",
      "Use a foundation model (FM) that is trained to not hallucinate."
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/155917-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 140,
    "text": "A company is using a large language model (LLM) on Amazon Bedrock to build a chatbot. The chatbot processes customer support requests. To resolve a request, the customer and the chatbot must interact a few times.Which solution gives the LLM the ability to use content from previous customer messages?",
    "options": [
      "Turn on model invocation logging to collect messages.",
      "Add messages to the model prompt.",
      "Use Amazon Personalize to save conversation history.",
      "Use Provisioned Throughput for the LLM."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/155918-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 141,
    "text": "A company\u2019s employees provide product descriptions and recommendations to customers when customers call the customer service center. These recommendations are based on where the customers are located. The company wants to use foundation models (FMs) to automate this process.Which AWS service meets these requirements?",
    "options": [
      "Amazon Macie",
      "Amazon Transcribe",
      "Amazon Bedrock",
      "Amazon Textract"
    ],
    "answer": "C",
    "link": "https://www.examtopics.com/discussions/amazon/view/155919-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 142,
    "text": "A company wants to upload customer service email messages to Amazon S3 to develop a business analysis application. The messages sometimes contain sensitive data. The company wants to receive an alert every time sensitive information is found.Which solution fully automates the sensitive information detection process with the LEAST development effort?",
    "options": [
      "Configure Amazon Macie to detect sensitive information in the documents that are uploaded to Amazon S3.",
      "Use Amazon SageMaker endpoints to deploy a large language model (LLM) to redact sensitive data.",
      "Develop multiple regex patterns to detect sensitive data. Expose the regex patterns on an Amazon SageMaker notebook.",
      "Ask the customers to avoid sharing sensitive information in their email messages."
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/155920-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 143,
    "text": "HOTSPOT-A company is training its employees on how to structure prompts for foundation models.Select the correct prompt engineering technique from the following list for each prompt template. Each prompt engineering technique should be selected one time.",
    "options": [],
    "answer": "''",
    "link": "https://www.examtopics.com/discussions/amazon/view/156390-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/",
    "isMultipleChoice": true,
    "images": {
      "question": [
        "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image7.png"
      ],
      "answer": [
        "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image8.png"
      ]
    }
  },
  {
    "number": 144,
    "text": "Empty question",
    "options": [
      "Choose A",
      "Choose A",
      "Choose A",
      "Choose A"
    ],
    "answer": "A",
    "link": ""
  },
  {
    "number": 145,
    "text": "Which option is a benefit of using Amazon SageMaker Model Cards to document AI models?",
    "options": [
      "Providing a visually appealing summary of a mode\u2019s capabilities.",
      "Standardizing information about a model\u2019s purpose, performance, and limitations.",
      "Reducing the overall computational requirements of a model.",
      "Physically storing models for archival purposes."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/302406-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 146,
    "text": "What does an F1 score measure in the context of foundation model (FM) performance?",
    "options": [
      "Model precision and recall",
      "Model speed in generating responses",
      "Financial cost of operating the model",
      "Energy efficiency of the model\u2019s computations"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/302407-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 147,
    "text": "A company deployed an AI/ML solution to help customer service agents respond to frequently asked questions. The questions can change over time. The company wants to give customer service agents the ability to ask questions and receive automatically generated answers to common customer questions.Which strategy will meet these requirements MOST cost-effectively?",
    "options": [
      "Fine-tune the model regularly.",
      "Train the model by using context data.",
      "Pre-train and benchmark the model by using context data.",
      "Use Retrieval Augmented Generation (RAG) with prompt engineering techniques."
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/302408-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 148,
    "text": "A company built an AI-powered resume screening system. The company used a large dataset to train the model. The dataset contained resumes that were not representative of all demographics.Which core dimension of responsible AI does this scenario present?",
    "options": [
      "Fairness",
      "Explainability",
      "Privacy and security",
      "Transparency"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/302409-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 149,
    "text": "A global financial company has developed an ML application to analyze stock market data and provide stock market trends. The company wants to continuously monitor the application development phases and to ensure that company policies and industry regulations are followed.Which AWS services will help the company assess compliance requirements? (Choose two.)",
    "options": [
      "AWS Audit Manager",
      "AWS Config",
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS CloudTrail"
    ],
    "answer": "AB",
    "link": "https://www.examtopics.com/discussions/amazon/view/302410-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/",
    "isMultipleChoice": true
  },
  {
    "number": 150,
    "text": "A company wants to improve the accuracy of the responses from a generative AI application. The application uses a foundation model (FM) on Amazon Bedrock.Which solution meets these requirements MOST cost-effectively?",
    "options": [
      "Fine-tune the FM.",
      "Retrain the FM.",
      "Train a new FM.",
      "Use prompt engineering."
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/302411-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 151,
    "text": "A company wants to identify harmful language in the comments section of social media posts by using an ML model. The company will not use labeled data to train the model.Which strategy should the company use to identify harmful language?",
    "options": [
      "Use Amazon Rekognition moderation.",
      "Use Amazon Comprehend toxicity detection.",
      "Use Amazon SageMaker built-in algorithms to train the model.",
      "Use Amazon Polly to monitor comments."
    ],
    "answer": "B",
    "link": "https://www.examtopics.com/discussions/amazon/view/302412-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 152,
    "text": "A media company wants to analyze viewer behavior and demographics to recommend personalized content. The company wants to deploy a customized ML model in its production environment. The company also wants to observe if the model quality drifts over time.Which AWS service or feature meets these requirements?",
    "options": [
      "Amazon Rekognition",
      "Amazon SageMaker Clarify",
      "Amazon Comprehend",
      "Amazon SageMaker Model Monitor"
    ],
    "answer": "D",
    "link": "https://www.examtopics.com/discussions/amazon/view/302413-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 153,
    "text": "A company is deploying AI/ML models by using AWS services. The company wants to offer transparency into the models\u2019 decision-making processes and provide explanations for the model outputs.Which AWS service or feature meets these requirements?",
    "options": [
      "Amazon SageMaker Model Cards",
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Lex"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/302414-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 154,
    "text": "A manufacturing company wants to create product descriptions in multiple languages.Which AWS service will automate this task?",
    "options": [
      "Amazon Translate",
      "Amazon Transcribe",
      "Amazon Kendra",
      "Amazon Polly"
    ],
    "answer": "A",
    "link": "https://www.examtopics.com/discussions/amazon/view/302415-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/"
  },
  {
    "number": 155,
    "text": "HOTSPOT-A company wants more customized responses to its generative AI models\u2019 prompts.Select the correct customization methodology from the following list for each use case. Each use case should be selected one time.",
    "options": [],
    "answer": "''",
    "link": "https://www.examtopics.com/discussions/amazon/view/302416-exam-aws-certified-ai-practitioner-aif-c01-topic-1-question/",
    "isMultipleChoice": true,
    "images": {
      "question": [
        "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image11.png"
      ],
      "answer": [
        "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01/image12.png"
      ]
    }
  }
];