'use client'

import { useState } from 'react'

const models = [
  {
    id: '1',
    name: 'LLaMA-7B Chat',
    type: 'LLM',
    category: 'Conversational AI',
    description: 'Conversational AI model based on LLaMA 7B with verifiable inference on blockchain',
    parameters: '7B',
    size: '14 GB',
    zkml: true,
    tee: true,
    accuracy: '91.2%',
    inferences: '892K',
    creator: 'Meta AI',
    license: 'OpenRAIL',
  },
  {
    id: '2',
    name: 'GPT-2 Sentiment',
    type: 'NLP',
    category: 'Sentiment Analysis',
    description: 'Sentiment analysis model based on GPT-2 with zkML proofs for verifiable inference',
    parameters: '1.5B',
    size: '1.5 GB',
    zkml: true,
    tee: true,
    accuracy: '94.5%',
    inferences: '245K',
    creator: 'OpenGradient Labs',
    license: 'MIT',
  },
  {
    id: '3',
    name: 'ResNet-50',
    type: 'Computer Vision',
    category: 'Image Classification',
    description: 'Image classification model with TEE-attested computations for trust verification',
    parameters: '25.6M',
    size: '98 MB',
    zkml: true,
    tee: true,
    accuracy: '92.8%',
    inferences: '1.2M',
    creator: 'Microsoft Research',
    license: 'Apache-2.0',
  },
  {
    id: '4',
    name: 'Whisper Small',
    type: 'Audio',
    category: 'Speech-to-Text',
    description: 'Speech-to-text transcription with zkML proofs ensuring computational correctness',
    parameters: '244M',
    size: '244 MB',
    zkml: true,
    tee: false,
    accuracy: '95.1%',
    inferences: '567K',
    creator: 'OpenAI',
    license: 'MIT',
  },
  {
    id: '5',
    name: 'Stable Diffusion XL',
    type: 'Generative',
    category: 'Image Generation',
    description: 'Image generation model with verifiable pipeline and TEE attestation',
    parameters: '2.6B',
    size: '6.9 GB',
    zkml: false,
    tee: true,
    accuracy: '88.5%',
    inferences: '345K',
    creator: 'Stability AI',
    license: 'CreativeML Open RAIL',
  },
  {
    id: '6',
    name: 'BERT Base',
    type: 'NLP',
    category: 'Language Understanding',
    description: 'Classic BERT model for NLP tasks with full verification capabilities',
    parameters: '110M',
    size: '440 MB',
    zkml: true,
    tee: true,
    accuracy: '93.4%',
    inferences: '2.3M',
    creator: 'Google AI',
    license: 'Apache-2.0',
  },
  {
    id: '7',
    name: 'YOLOv8',
    type: 'Computer Vision',
    category: 'Object Detection',
    description: 'Real-time object detection with TEE attestation for verified computations',
    parameters: '43.7M',
    size: '132 MB',
    zkml: true,
    tee: true,
    accuracy: '89.7%',
    inferences: '789K',
    creator: 'Ultralytics',
    license: 'AGPL-3.0',
  },
  {
    id: '8',
    name: 'Mistral-7B Instruct',
    type: 'LLM',
    category: 'Instruction Following',
    description: 'Instruction-following LLM with zkML proofs for all inference operations',
    parameters: '7B',
    size: '14 GB',
    zkml: true,
    tee: true,
    accuracy: '92.3%',
    inferences: '456K',
    creator: 'Mistral AI',
    license: 'Apache-2.0',
  },
  {
    id: '9',
    name: 'CodeLlama-13B',
    type: 'LLM',
    category: 'Code Generation',
    description: 'Code generation and understanding model with blockchain verification',
    parameters: '13B',
    size: '26 GB',
    zkml: true,
    tee: true,
    accuracy: '90.1%',
    inferences: '234K',
    creator: 'Meta AI',
    license: 'CodeLlama License',
  },
  {
    id: '10',
    name: 'ViT Base',
    type: 'Computer Vision',
    category: 'Image Classification',
    description: 'Vision Transformer for image classification with TEE attestation',
    parameters: '86M',
    size: '346 MB',
    zkml: false,
    tee: true,
    accuracy: '91.5%',
    inferences: '567K',
    creator: 'Google Research',
    license: 'Apache-2.0',
  },
  {
    id: '11',
    name: 'Falcon-40B',
    type: 'LLM',
    category: 'Conversational AI',
    description: 'Powerful instruction-following model with full computation verification',
    parameters: '40B',
    size: '80 GB',
    zkml: true,
    tee: true,
    accuracy: '93.8%',
    inferences: '123K',
    creator: 'TII',
    license: 'Apache-2.0',
  },
  {
    id: '12',
    name: 'CLIP ViT-B/32',
    type: 'Multimodal',
    category: 'Zero-Shot Classification',
    description: 'Multimodal model for text-image understanding with zero-shot capabilities',
    parameters: '151M',
    size: '594 MB',
    zkml: true,
    tee: false,
    accuracy: '87.9%',
    inferences: '678K',
    creator: 'OpenAI',
    license: 'MIT',
  },
]

const types = ['All', 'LLM', 'NLP', 'Computer Vision', 'Audio', 'Generative', 'Multimodal']

export default function Home() {
  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedModel, setSelectedModel] = useState(null)
  const [zkmlOnly, setZkmlOnly] = useState(false)
  const [teeOnly, setTeeOnly] = useState(false)

  const filtered = models.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.type.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase())
    const matchesType = selectedType === 'All' || m.type === selectedType
    const matchesZkml = !zkmlOnly || m.zkml
    const matchesTee = !teeOnly || m.tee
    return matchesSearch && matchesType && matchesZkml && matchesTee
  })

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '12px', background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          OpenGradient Model Hub
        </h1>
        <p style={{ color: '#888', fontSize: '16px' }}>
          Explore 1500+ verifiable AI models with zkML proofs and TEE attestations
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', maxWidth: '800px', margin: '0 auto 32px' }}>
        <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#6366f1' }}>1.5K+</div>
          <div style={{ fontSize: '12px', color: '#888' }}>Total Models</div>
        </div>
        <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#8b5cf6' }}>2.1M+</div>
          <div style={{ fontSize: '12px', color: '#888' }}>Inferences</div>
        </div>
        <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#06b6d4' }}>345K+</div>
          <div style={{ fontSize: '12px', color: '#888' }}>zkML Proofs</div>
        </div>
        <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>567K+</div>
          <div style={{ fontSize: '12px', color: '#888' }}>TEE Attestations</div>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search models by name, type, or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          display: 'block',
          margin: '0 auto 24px',
          padding: '14px 24px',
          width: '100%',
          maxWidth: '500px',
          background: '#1a1a2e',
          border: '1px solid #333',
          borderRadius: '12px',
          color: '#fff',
          fontSize: '16px'
        }}
      />

      {/* Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '24px' }}>
        {types.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            style={{
              padding: '8px 16px',
              background: selectedType === type ? '#6366f1' : '#1a1a2e',
              border: '1px solid #333',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Verification Filters */}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '32px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={zkmlOnly}
            onChange={(e) => setZkmlOnly(e.target.checked)}
            style={{ width: '18px', height: '18px' }}
          />
          <span style={{ color: '#818cf8', fontSize: '14px' }}>zkML Only</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={teeOnly}
            onChange={(e) => setTeeOnly(e.target.checked)}
            style={{ width: '18px', height: '18px' }}
          />
          <span style={{ color: '#34d399', fontSize: '14px' }}>TEE Only</span>
        </label>
      </div>

      {/* Models Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {filtered.map((model) => (
          <div
            key={model.id}
            onClick={() => setSelectedModel(model)}
            style={{
              background: '#1a1a2e',
              border: '1px solid #333',
              borderRadius: '16px',
              padding: '24px',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              {model.zkml && (
                <span style={{
                  padding: '4px 10px',
                  background: '#6366f122',
                  border: '1px solid #6366f1',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#818cf8'
                }}>
                  zkML ✓
                </span>
              )}
              {model.tee && (
                <span style={{
                  padding: '4px 10px',
                  background: '#10b98122',
                  border: '1px solid #10b981',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#34d399'
                }}>
                  TEE ✓
                </span>
              )}
            </div>
            <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#fff' }}>
              {model.name}
            </h3>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '12px', lineHeight: '1.4' }}>
              {model.description}
            </p>
            <div style={{ display: 'flex', gap: '12px', fontSize: '13px', color: '#666' }}>
              <span>{model.type}</span>
              <span>•</span>
              <span>{model.parameters}</span>
              <span>•</span>
              <span style={{ color: '#34d399' }}>{model.accuracy}</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666', marginTop: '40px', fontSize: '18px' }}>
          No models found
        </p>
      )}

      {/* Modal */}
      {selectedModel && (
        <div
          onClick={() => setSelectedModel(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 1000
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#1a1a2e',
              border: '1px solid #333',
              borderRadius: '20px',
              padding: '32px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '80vh',
              overflow: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '24px', margin: 0 }}>{selectedModel.name}</h2>
              <button
                onClick={() => setSelectedModel(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#888',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '0 8px'
                }}
              >
                ×
              </button>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              {selectedModel.zkml && (
                <span style={{
                  padding: '6px 12px',
                  background: '#6366f122',
                  border: '1px solid #6366f1',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#818cf8'
                }}>
                  zkML Verified ✓
                </span>
              )}
              {selectedModel.tee && (
                <span style={{
                  padding: '6px 12px',
                  background: '#10b98122',
                  border: '1px solid #10b981',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#34d399'
                }}>
                  TEE Attested ✓
                </span>
              )}
            </div>

            <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              {selectedModel.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: '#0a0a0f', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>Type</div>
                <div style={{ fontSize: '16px', color: '#fff' }}>{selectedModel.type}</div>
              </div>
              <div style={{ background: '#0a0a0f', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>Category</div>
                <div style={{ fontSize: '16px', color: '#fff' }}>{selectedModel.category}</div>
              </div>
              <div style={{ background: '#0a0a0f', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>Parameters</div>
                <div style={{ fontSize: '16px', color: '#fff' }}>{selectedModel.parameters}</div>
              </div>
              <div style={{ background: '#0a0a0f', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>Size</div>
                <div style={{ fontSize: '16px', color: '#fff' }}>{selectedModel.size}</div>
              </div>
              <div style={{ background: '#0a0a0f', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>Accuracy</div>
                <div style={{ fontSize: '16px', color: '#34d399' }}>{selectedModel.accuracy}</div>
              </div>
              <div style={{ background: '#0a0a0f', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>Inferences</div>
                <div style={{ fontSize: '16px', color: '#fff' }}>{selectedModel.inferences}</div>
              </div>
              <div style={{ background: '#0a0a0f', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>Creator</div>
                <div style={{ fontSize: '16px', color: '#fff' }}>{selectedModel.creator}</div>
              </div>
              <div style={{ background: '#0a0a0f', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>License</div>
                <div style={{ fontSize: '16px', color: '#fff' }}>{selectedModel.license}</div>
              </div>
            </div>

            <button
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                border: 'none',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Deploy Model
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        marginTop: '60px',
        paddingTop: '20px',
        borderTop: '1px solid #333',
        color: '#666',
        fontSize: '14px'
      }}>
        OpenGradient Model Hub - Verifiable AI on Blockchain
      </footer>
    </div>
  )
}
