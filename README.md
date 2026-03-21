# OpenGradient Model Hub

🚀 A beautiful, interactive platform for exploring verifiable AI models on OpenGradient with zkML proofs and TEE attestations.

![OpenGradient Model Hub](./public/og-screenshot.png)

## ✨ Features

- 🔍 **Advanced Search** - Search models by name, type, or category
- 🎯 **Smart Filtering** - Filter by model type (LLM, NLP, Computer Vision, Audio, DeFi, etc.)
- 📊 **Sorting Options** - Sort by popularity, rating, accuracy, inferences, or date
- ⭐ **Favorites** - Save your favorite models for quick access
- 📄 **Deploy Guide** - Interactive step-by-step deployment instructions with code examples
- 🔐 **Verification Badges** - Clear indicators for zkML verified and TEE attested models
- 📱 **Fully Responsive** - Beautiful on desktop, tablet, and mobile
- 🎨 **Modern UI** - Dark theme with smooth animations and gradient effects

## 🧠 Models Included

**44+ AI models** across 8 categories:

### LLM (Large Language Models)
- LLaMA-7B/13B Chat
- Mistral-7B/8x7B Instruct
- CodeLlama-13B/34B
- Falcon-40B/180B
- Gemma-7B/2B
- Qwen-14B/72B

### NLP
- BERT Base/Large
- RoBERTa Base
- DeBERTa-v3
- T5 Base
- DistilBERT
- GPT-2 Sentiment Analysis

### Computer Vision
- ResNet-50/101
- EfficientNet-B7
- ViT Base/Large
- YOLOv8/v8x
- DETR
- Segment Anything (SAM)

### Audio
- Whisper Small/Large-v3
- Wav2Vec2 Base
- AudioLDM

### Generative
- Stable Diffusion XL/2.1
- ControlNet
- Midjourney Alternative

### Multimodal
- CLIP ViT-B/32, L/14
- BLIP-2
- LLaVA 13B

### DeFi Analytics
- OG 1hr Volatility ETH/USDT
- OG AMM Fee Optimization
- OG 30min Return SUI/USDT
- ETH Volatility Oracle

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **API:** OpenGradient API + REST
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wabrent/OpenGradient-Model-Hub.git
   cd OpenGradient-Model-Hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
opengradient-model-hub/
├── app/
│   ├── components/
│   │   ├── Stats.tsx          # Network statistics cards
│   │   ├── Filters.tsx        # Search and filter controls
│   │   ├── ModelCard.tsx      # Individual model card
│   │   ├── ModelModal.tsx     # Model details modal
│   │   ├── Pagination.tsx     # Pagination controls
│   │   └── SortDropdown.tsx   # Sort options dropdown
│   ├── data/
│   │   └── models.ts          # Model data and types
│   ├── lib/
│   │   └── opengradient-api.ts # API integration
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🔌 API Integration

The app integrates with OpenGradient API for real-time model data:

```typescript
// Fetch models from API
const response = await fetch('https://hub.opengradient.ai/api/models?limit=50')
const data = await response.json()

// Fallback to mock data if API fails
```

### Available API Endpoints

- `GET /api/models` - Fetch all models
- `GET /api/models/:id` - Fetch single model
- `POST /api/models/deploy` - Deploy model
- `POST /api/inference` - Run inference
- `GET /api/stats` - Get network statistics

## 🎨 Customization

### Add Your Own Models

Edit `app/data/models.ts` to add custom models:

```typescript
{
  id: '45',
  name: 'Your Model Name',
  description: 'Model description',
  type: 'LLM',
  category: 'Your Category',
  size: 'X GB',
  parameters: 'XB',
  zkmlVerified: true,
  teeAttested: true,
  totalInferences: 123456,
  avgAccuracy: 95.5,
  creator: 'Your Name',
  tags: ['tag1', 'tag2'],
  createdAt: '2024-03-21',
  updatedAt: '2024-03-21',
  license: 'MIT',
  downloadCount: 1234,
  rating: 4.8,
}
```

### Theme Colors

Modify `app/globals.css` to customize colors and gradients:

```css
.gradient-primary {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
}
```

## 📱 Features Showcase

### Search & Filter
- Real-time search across name, type, and category
- Multi-select filters for verification types
- Type-based filtering (8 model categories)

### Sorting Options
- Most Popular (by download count)
- Highest Rated
- Most Inferences
- Highest Accuracy
- Newest First
- Oldest First

### Model Details Modal
- Complete model information
- Verification badges (zkML/TEE)
- Performance metrics
- Tags and categories
- Deploy button with guide

### Deploy Guide
Step-by-step instructions for deploying models:
1. **Preparation** - Get tokens, install SDK
2. **Wallet Setup** - Configure private key, Permit2 approval
3. **Deploy Model** - Copy-paste deployment code
4. **Run Inference** - Example inference code

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Deploy to Other Platforms

```bash
# Build the app
npm run build

# Start production server
npm start
```

Or use Docker:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenGradient](https://opengradient.ai) for the amazing API and SDK
- [Next.js](https://nextjs.org) for the fantastic framework
- [Tailwind CSS](https://tailwindcss.com) for the beautiful styling
- All the model creators from Meta AI, Google, OpenAI, Mistral AI, and more

## 📬 Contact

- **Twitter:** [@yourhandle](https://twitter.com/yourhandle)
- **GitHub:** [wabrent](https://github.com/wabrent)
- **Discord:** your_discord_username

## 🔗 Links

- **Live Demo:** [Your Vercel Link]
- **GitHub Repository:** [github.com/wabrent/OpenGradient-Model-Hub](https://github.com/wabrent/OpenGradient-Model-Hub)
- **OpenGradient:** [opengradient.ai](https://opengradient.ai)
- **Documentation:** [docs.opengradient.ai](https://docs.opengradient.ai)

---

<div align="center">

**Built with 💜 for the OpenGradient Community**

[⭐ Star on GitHub](https://github.com/wabrent/OpenGradient-Model-Hub) • [🐦 Follow on Twitter](https://twitter.com/yourhandle) • [🌐 Visit Live Site](https://your-vercel-link.vercel.app)

</div>
