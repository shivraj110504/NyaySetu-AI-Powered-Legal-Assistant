import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, Upload, FileText } from "lucide-react";

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
  documentName?: string;
  isDocumentReview?: boolean;
}

export const ChatDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI Legal Assistant. I can help you with legal research, document drafting, and case analysis. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    },
    {
      id: 2,
      content: "Please review this rental agreement draft and point out the important clauses I should be aware of.",
      isUser: true,
      timestamp: new Date(),
      documentName: "Rental_Agreement_Draft.pdf",
      isDocumentReview: true
    },
    {
      id: 3,
      content: "Sure! I've reviewed your rental agreement draft. Here are the key points:\n- Clause 3: You have to pay the full rental amount in advance each month.\n- Clause 5: The security deposit is non-refundable — you may want to negotiate this.\n- Clause 7: Maintenance responsibilities are entirely on the tenant; make sure this is acceptable.\n- Clause 10: A penalty for late payment is mentioned, but no grace period is specified.\n\n⚖️ Suggestion: These points should be clarified to avoid disputes.\n\nOther important checks in rental agreements include:\n- Confirm the lock-in period to avoid penalties for early exit.\n- Verify if the landlord can increase rent mid-term.\n- Ensure clarity on usage rights (parking, shared areas).\n- Check the termination notice period — usually 1–3 months.",
      isUser: false,
      timestamp: new Date(),
      documentName: "Rental_Agreement_Draft.pdf",
      isDocumentReview: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const demoResponses = [
    "I can help you draft that contract. Based on your requirements, I'll create a comprehensive agreement that includes all necessary clauses and protections.",
    "Let me analyze the legal precedents for your case. I found 15 relevant cases from the Supreme Court and High Courts that support your position.",
    "I've prepared a legal notice draft for you. The document includes proper legal formatting and citations. Would you like me to explain any specific clauses?",
    "Based on Indian legal provisions, here's what you need to know about your rights in this matter. I can also help you understand the procedural requirements.",
    "I've researched the applicable laws for your situation. Here are the key statutes and their implications for your case."
  ];

  const documentReviewResponses = [
    "In point no 3, you have to pay full amount and all other terms which are in rental agreement. This clause ensures timely payment and covers all associated costs.",
    "The security deposit clause in section 5 requires 2 months advance payment, which is standard practice for rental agreements in India.",
    "The maintenance responsibility outlined in clause 7 clearly states that minor repairs are tenant's responsibility while major structural issues are landlord's duty.",
    "The termination notice period of 30 days mentioned in section 9 is legally compliant with Indian rental laws and provides adequate time for both parties."
  ];


  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const isDocumentReview = inputValue.toLowerCase().includes('review') || inputValue.toLowerCase().includes('rental');
      const botMessage: Message = {
        id: messages.length + 2,
        content: isDocumentReview 
          ? documentReviewResponses[Math.floor(Math.random() * documentReviewResponses.length)]
          : demoResponses[Math.floor(Math.random() * demoResponses.length)],
        isUser: false,
        timestamp: new Date(),
        documentName: isDocumentReview ? "Rental Agreement Draft" : undefined,
        isDocumentReview: isDocumentReview
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="demo" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-6">NyaySetu AI Chatbot <span className="italic">(Demo)</span></h2>
          <p className="text-muted-foreground">To act as a legal guidance chatbot that explains complex IPC sections, legal terms, and document purposes in simple English. It also helps with incident analysis, document explainability, and basic legal research, guiding users toward the correct next steps.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="h-[600px] flex flex-col overflow-hidden shadow-2xl">
            {/* Chat Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Bot className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">NyaySetu AI Assistant</h3>
                  <p className="text-sm opacity-90">Online • Ready to help</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button size="sm" variant="secondary" className="text-xs">
                  <Upload className="w-4 h-4 mr-1" />
                  Export
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`chat-bubble ${message.isUser ? 'user' : 'bot'} flex items-start space-x-2 max-w-xs lg:max-w-md`}>
                    {!message.isUser && (
                      <Bot className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      {message.isDocumentReview && message.documentName && (
                        <div className="flex items-center space-x-2 mb-2 p-2 bg-muted/50 rounded-lg">
                          <FileText className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium text-accent">{message.documentName}</span>
                        </div>
                      )}
                      <div className="text-sm whitespace-pre-line">{message.content}</div>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    {message.isUser && (
                      <User className="w-5 h-5 text-primary-foreground mt-1 flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="chat-bubble bot flex items-center space-x-2">
                    <Bot className="w-5 h-5 text-accent" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Chat Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me anything about legal matters..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-accent text-accent-foreground hover:bg-accent-light"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-red-600 mt-2">
                This is a demo. Responses are simulated for demonstration purposes.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};