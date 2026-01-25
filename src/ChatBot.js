import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Paperclip, X, FileText } from 'lucide-react';

export default function ChatBot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm an AI assistant trained on information about the portfolio owner. Feel free to ask me anything about their background, skills, projects, or experience!",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);
  const createdUrlsRef = useRef(new Set());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setInputValue(transcript.trim());
    };

    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  useEffect(() => {
    const currentUrls = createdUrlsRef.current;
    return () => {
      currentUrls.forEach((url) => URL.revokeObjectURL(url));
      currentUrls.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addAttachments = (files) => {
    const newFiles = Array.from(files).map((file) => {
      const isImage = file.type.startsWith('image/');
      const previewUrl = isImage ? URL.createObjectURL(file) : null;
      if (previewUrl) createdUrlsRef.current.add(previewUrl);
      return {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        file,
        name: file.name,
        type: file.type,
        size: file.size,
        previewUrl,
      };
    });
    setAttachments((prev) => [...prev, ...newFiles]);
  };

  const handleFileChange = (e) => {
    if (e.target.files?.length) {
      addAttachments(e.target.files);
    }
    e.target.value = '';
  };

  const handlePaste = (e) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    const pastedFiles = [];
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) pastedFiles.push(file);
      }
    }

    if (pastedFiles.length) {
      e.preventDefault();
      addAttachments(pastedFiles);
    }
  };

  const removeAttachment = (id) => {
    setAttachments((prev) => {
      const target = prev.find((item) => item.id === id);
      if (target?.previewUrl) {
        URL.revokeObjectURL(target.previewUrl);
        createdUrlsRef.current.delete(target.previewUrl);
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch (error) {
      console.error('Speech recognition error:', error);
      setIsListening(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() && attachments.length === 0) return;

    const messageText = inputValue.trim() || 'Sent an attachment.';
    const attachmentsMeta = attachments.map(({ id, name, type, size, previewUrl }) => ({
      id,
      name,
      type,
      size,
      previewUrl,
    }));

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
      attachments: attachmentsMeta,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setAttachments([]);
    setIsLoading(true);

    try {
      // Call your backend API
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          conversationHistory: messages,
          attachments: attachmentsMeta.map(({ name, type, size }) => ({ name, type, size })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      // Add bot response
      const botMessage = {
        id: messages.length + 2,
        text: data.reply,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I encountered an error. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="mt-8 w-full max-w-6xl mx-auto px-4">
      <style>{`
        @keyframes neonGlow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.4), inset 0 0 10px rgba(0, 255, 255, 0.1);
            border-color: rgba(0, 255, 255, 0.7);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.9), 0 0 40px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.15);
            border-color: rgba(0, 255, 255, 0.9);
          }
        }
        .chat-neon {
          animation: neonGlow 2.5s ease-in-out infinite;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(25, 35, 55, 0.8));
        }
      `}</style>
      <div className="chat-neon rounded-2xl flex flex-col border overflow-hidden h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] relative">
        {/* Header with Close Button */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-4 backdrop-blur-lg flex justify-between items-center">
          <div className="flex-1"></div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors text-sm font-medium"
          >
            ← Back
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4" style={{scrollbarWidth: 'thin', scrollbarColor: 'rgba(100, 116, 139, 0.2) transparent'}}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs px-5 py-3 rounded-lg backdrop-blur-md rounded-br-sm border border-blue-400/50 shadow-lg ${
                  message.sender === 'user'
                    ? 'shadow-blue-500/30'
                    : 'bg-slate-700/40 text-gray-100 rounded-bl-sm border-slate-600/50'
                }`}
                style={message.sender === 'user' ? {background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(59, 130, 246))'} : {}}
              >
                <p className={`text-sm leading-relaxed ${message.sender === 'user' ? 'text-white' : 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'}`}>{message.text}</p>
                {message.attachments?.length > 0 && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {message.attachments.map((file) => (
                      <div
                        key={file.id}
                        className="rounded-lg overflow-hidden border border-white/20 bg-slate-900/40"
                      >
                        {file.previewUrl ? (
                          <img src={file.previewUrl} alt={file.name} className="w-full h-20 object-cover" />
                        ) : (
                          <div className="flex items-center gap-2 px-2 py-3 text-xs text-white/80">
                            <FileText size={16} />
                            <span className="truncate">{file.name}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-700/40 text-gray-100 px-5 py-3 rounded-lg backdrop-blur-md border border-slate-600/50">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 space-y-3 backdrop-blur-lg bg-slate-900/30" onPaste={handlePaste}>
          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {attachments.map((file) => (
                <div key={file.id} className="flex items-center gap-2 px-2 py-1 rounded-lg bg-slate-800/50 border border-white/10">
                  {file.previewUrl ? (
                    <img src={file.previewUrl} alt={file.name} className="w-10 h-10 object-cover rounded" />
                  ) : (
                    <FileText size={16} className="text-white/70" />
                  )}
                  <span className="text-xs text-white/80 max-w-[120px] truncate">{file.name}</span>
                  <button type="button" onClick={() => removeAttachment(file.id)} className="text-white/60 hover:text-white">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-3">
            <div className="flex-1 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about the portfolio owner..."
                disabled={isLoading}
                className="flex-1 h-12 px-4 py-3 border border-slate-600/50 rounded-lg bg-slate-800/40 text-white backdrop-blur-md placeholder-slate-400 focus:outline-none focus:border-cyan-500/70 focus:ring-1 focus:ring-cyan-500/50 disabled:opacity-50 transition-all"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-12 h-12 rounded-lg border border-slate-600/50 bg-slate-800/40 hover:bg-cyan-500/20 flex items-center justify-center text-white/70 hover:text-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/60"
                aria-label="attach"
              >
                <Paperclip size={18} />
              </button>
              <button
                type="button"
                onClick={toggleListening}
                className={`w-12 h-12 rounded-lg border border-slate-600/50 bg-slate-800/40 hover:bg-cyan-500/20 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/60 ${isListening ? 'text-cyan-300' : 'text-white/70 hover:text-cyan-300'}`}
                aria-label="voice"
              >
                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading || (!inputValue.trim() && attachments.length === 0)}
              className="h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 disabled:bg-slate-600 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-400/80 hover:scale-105"
            >
              <Send size={24} />
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx,.ppt,.pptx,.txt"
            onChange={handleFileChange}
            className="hidden"
          />
        </form>
      </div>
    </div>
  );
}
