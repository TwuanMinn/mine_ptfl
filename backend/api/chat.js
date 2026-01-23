// Backend API handler for the chatbot
// This file should be placed in a backend directory or serverless function

import { PORTFOLIO_INFO } from '../portfolio-info.js';

// Configure your AI API here
const API_KEY = process.env.REACT_APP_AI_API_KEY || '';
const API_PROVIDER = process.env.REACT_APP_AI_PROVIDER || 'openai'; // 'openai' or 'anthropic'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, conversationHistory } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Format conversation history for the API
    const formattedHistory = conversationHistory.map((msg) => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text,
    }));

    let reply;

    if (API_PROVIDER === 'openai') {
      reply = await callOpenAI(message, formattedHistory);
    } else if (API_PROVIDER === 'anthropic') {
      reply = await callAnthropic(message, formattedHistory);
    } else {
      return res.status(500).json({ error: 'Invalid AI provider configured' });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return res
      .status(500)
      .json({ error: 'Failed to process chat message', details: error.message });
  }
}

async function callOpenAI(message, history) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: PORTFOLIO_INFO,
        },
        ...history,
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

async function callAnthropic(message, history) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-3-haiku-20240307',
      max_tokens: 500,
      system: PORTFOLIO_INFO,
      messages: [
        ...history,
        {
          role: 'user',
          content: message,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.content[0].text;
}
