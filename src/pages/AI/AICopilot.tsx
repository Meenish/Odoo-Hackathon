import { useState } from 'react';
import { Sparkles, Send, Bot, Lightbulb } from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { Card, CardHeader } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Avatar } from '../../components/common/Avatar';
import { aiSuggestedPrompts, aiInsights } from '../../data/mockData';
import { cn } from '../../utils/cn';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const initialMessages: Message[] = [
  {
    id: 'm1',
    role: 'assistant',
    content:
      "Hi Priya — I'm your ESG Copilot. I can analyze live metrics, draft disclosures, and flag compliance risk. What would you like to explore?",
  },
];

export default function AICopilot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');

  function sendMessage(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content:
            "Here's a quick take based on your current data: emissions are trending 12% below target, driven mostly by the Plant 4 solar rollout. I can put together a full breakdown by department if that would help — just say the word.",
        },
      ]);
    }, 700);
  }

  return (
    <div>
      <PageHeader
        eyebrow="AI Copilot"
        title="EcoSphere Copilot"
        description="Ask questions about your ESG data, generate insights, and draft disclosures in seconds."
        action={
          <Badge tone="brand">
            <Sparkles size={12} /> Live on latest data
          </Badge>
        }
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <Card padding="none" className="flex h-[560px] flex-col overflow-hidden">
            <div className="flex-1 space-y-4 overflow-y-auto p-5 sm:p-6">
              {messages.map((message) => (
                <div key={message.id} className={cn('flex gap-3', message.role === 'user' && 'flex-row-reverse')}>
                  {message.role === 'assistant' ? (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-white">
                      <Bot size={15} />
                    </div>
                  ) : (
                    <Avatar name="Priya Sharma" size={32} />
                  )}
                  <div
                    className={cn(
                      'max-w-[80%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed',
                      message.role === 'assistant'
                        ? 'bg-slate-50 text-slate-700 dark:bg-white/5 dark:text-slate-200'
                        : 'bg-brand-600 text-white'
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 p-4 dark:border-white/5">
              <div className="mb-3 flex flex-wrap gap-2">
                {aiSuggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-[11.5px] font-medium text-slate-500 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/5"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Copilot about your ESG data..."
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:focus:bg-white/10 dark:focus:ring-brand-500/10"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white transition-colors hover:bg-brand-700 active:scale-95"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </Card>
        </div>

        <div className="xl:col-span-2">
          <Card>
            <CardHeader icon={<Lightbulb size={18} />} title="AI-Generated Insights" subtitle="Auto-surfaced from this week's data" />
            <div className="space-y-3">
              {aiInsights.map((insight) => (
                <div key={insight.id} className="rounded-xl border border-slate-100 p-3.5 dark:border-white/5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[13px] font-semibold text-slate-700 dark:text-slate-200">{insight.title}</p>
                    <Badge tone={insight.tone}>Insight</Badge>
                  </div>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500 dark:text-slate-400">{insight.detail}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
