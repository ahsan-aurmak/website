import { motion, AnimatePresence } from "motion/react";
import { X, Send, Sparkles, Mail } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import aurmakLogo from "figma:asset/c65624d69fb977da64433f38bb3017c7d3aed415.png";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ContactInfo {
  name: string;
  company: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({ name: "", company: "" });
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const presetPrompts = [
    "What services does AURMAK offer?",
    "Tell me about your AI solutions",
    "How can I work with AURMAK?",
    "Where are you located?"
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Start with empty messages - no welcome message
      setMessages([]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Contact intent detection
    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email") || lowerMessage.includes("call")) {
      setShowContactForm(true);
      return "I'd be happy to help connect you with our team! Please share your contact details below, and one of our specialists will reach out to you shortly.";
    }

    // Services
    if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("do")) {
      return "AURMAK offers comprehensive technology solutions:\n\n• AI & Machine Learning - Custom AI models, automation, and intelligent systems\n• Industrial Automation - Process optimization and control systems\n• Enterprise Software - Scalable SaaS and enterprise applications\n• Product Strategy - UX design, product development, and consulting\n\nWould you like to learn more about any specific service?";
    }

    // AI Solutions
    if (lowerMessage.includes("ai") || lowerMessage.includes("machine learning") || lowerMessage.includes("automation")) {
      return "Our AI solutions include:\n\n• Custom AI model development\n• Process automation and optimization\n• Intelligent data analytics\n• Predictive maintenance systems\n• Computer vision applications\n\nWe've delivered AI projects across manufacturing, logistics, and enterprise sectors. Would you like to discuss a specific use case?";
    }

    // Work with us
    if (lowerMessage.includes("work with") || lowerMessage.includes("hire") || lowerMessage.includes("collaborate")) {
      return "There are several ways to work with AURMAK:\n\n1. **Enterprise Clients** - Partner with us for custom solutions\n2. **Join Our Team** - Check our careers page for open positions\n3. **Consultation** - Schedule a discovery call to discuss your project\n\nWould you like me to connect you with our team?";
    }

    // Location
    if (lowerMessage.includes("location") || lowerMessage.includes("office") || lowerMessage.includes("where")) {
      return "AURMAK operates globally with offices in:\n\n🇬🇧 London, United Kingdom\n🇦🇪 Dubai, UAE\n🇵🇰 Lahore, Pakistan\n\nOur multi-regional presence enables us to serve clients across different time zones with 24/7 support.";
    }

    // Case studies / projects
    if (lowerMessage.includes("case") || lowerMessage.includes("project") || lowerMessage.includes("example") || lowerMessage.includes("portfolio")) {
      return "We've successfully delivered projects including:\n\n• AI-powered inventory optimization for logistics\n• Industrial IoT monitoring systems\n• Enterprise SaaS platforms for healthcare\n• Automated quality control systems\n\nVisit our Case Studies page to see detailed project breakdowns and outcomes.";
    }

    // Pricing
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("budget")) {
      return "Our pricing is customized based on:\n\n• Project scope and complexity\n• Timeline and delivery model\n• Technology stack requirements\n• Ongoing support needs\n\nLet's discuss your specific requirements. Would you like to schedule a consultation?";
    }

    // Default response
    return "Thanks for your question! While I can provide general information about AURMAK, I'd recommend connecting with our team for detailed discussions.\n\nYou can:\n• Share your contact info and we'll reach out\n• Visit our Contact page\n• Email us directly at hello@aurmak.com\n\nHow else can I assist you?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handlePresetPrompt = (prompt: string) => {
    setInputValue(prompt);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this to your backend/CRM
    
    setIsContactSubmitted(true);
    
    // Add a new bot message confirming submission
    const confirmationMessage: Message = {
      id: Date.now().toString(),
      text: `Thank you, ${contactInfo.name}! 🎉\n\nWe've received your information and someone from our ${contactInfo.company ? `team specializing in solutions for ${contactInfo.company}` : 'team'} will reach out to you within 24 hours.\n\nIn the meantime, feel free to ask me anything else about AURMAK!`,
      sender: "bot",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, confirmationMessage]);
    setShowContactForm(false);
  };

  return (
    <>
      {/* AI Assistant Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 group"
          >
            {/* Outer glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-50 blur-xl animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-30 blur-2xl" />
            
            {/* Main button */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-full border-2 border-cyan-500/50 flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
              
              {/* AI Brain icon */}
              <img
                src={aurmakLogo}
                alt="AURMAK"
                className="relative z-10 w-7 h-7"
              />
              
              {/* Orbiting particles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-purple-400 rounded-full" />
              </motion.div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* AI Assistant Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 w-full sm:max-w-md"
            style={{ maxHeight: "calc(100vh - 80px)" }}
          >
            <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[500px] sm:h-[600px] md:h-[650px] relative">
              {/* Animated background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-600/5 pointer-events-none" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />
              
              {/* Header */}
              <div className="relative border-b border-slate-700/50 p-6">
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-4">
                    {/* AI Avatar */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-50 blur-lg rounded-2xl" />
                      <motion.div 
                        className="relative w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-cyan-500/30 overflow-hidden"
                      >
                        {/* Animated scanline effect */}
                        <motion.div
                          animate={{ y: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
                        />
                        <img src={aurmakLogo} alt="AURMAK" className="w-6 h-6 relative z-10" />
                      </motion.div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white text-lg tracking-tight">AURMAK AI</h3>
                        <div className="flex items-center gap-1">
                          <img
                            src={aurmakLogo}
                            alt="AURMAK"
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">Neural Intelligence Assistant</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 hover:text-white transition-colors bg-slate-800/50 backdrop-blur-sm p-2 rounded-xl hover:bg-slate-700/50 border border-slate-700/30"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-2 flex-shrink-0 shadow-lg">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                          : "bg-slate-800/80 backdrop-blur-sm text-slate-100 border border-slate-700/50"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                      <span className={`text-xs mt-1.5 block ${message.sender === "user" ? "text-white/70" : "text-slate-500"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {/* Contact Form */}
                {showContactForm && !isContactSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-5 shadow-xl"
                  >
                    <h4 className="font-semibold text-cyan-400 mb-4 flex items-center text-base">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-2.5">
                        <Mail className="w-4 h-4 text-cyan-400" />
                      </div>
                      Let's Connect
                    </h4>
                    <form onSubmit={handleContactSubmit} className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-2">Name *</label>
                        <input
                          type="text"
                          value={contactInfo.name}
                          onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-2.5 bg-slate-900/60 border border-slate-700/50 rounded-xl text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-600"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-2">Company Name</label>
                        <input
                          type="text"
                          value={contactInfo.company}
                          onChange={(e) => setContactInfo(prev => ({ ...prev, company: e.target.value }))}
                          className="w-full px-4 py-2.5 bg-slate-900/60 border border-slate-700/50 rounded-xl text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-600"
                          placeholder="Your Company"
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={!contactInfo.name}
                        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Submit Contact Info
                      </motion.button>
                    </form>
                  </motion.div>
                )}

                {/* Preset Prompts */}
                {messages.length === 0 && !showContactForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <p className="text-sm text-cyan-400 font-semibold mb-4">👋 Hi! How can I help you today?</p>
                    {presetPrompts.map((prompt, index) => (
                      <motion.button
                        key={prompt}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handlePresetPrompt(prompt)}
                        className="w-full text-left px-5 py-4 bg-gradient-to-br from-slate-700/80 to-slate-800/80 hover:from-slate-700 hover:to-slate-800 border border-slate-600/50 hover:border-cyan-500/70 rounded-xl text-sm text-slate-100 hover:text-cyan-300 transition-all shadow-lg hover:shadow-cyan-500/20 font-medium"
                      >
                        {prompt}
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-5 bg-slate-900/50 backdrop-blur-xl border-t border-slate-800/50">
                <div className="flex items-end space-x-2 mb-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-600"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
                {isContactSubmitted && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-green-400 text-center flex items-center justify-center font-medium"
                  >
                    <span className="mr-1.5">✓</span> Contact details received. We'll be in touch soon!
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}