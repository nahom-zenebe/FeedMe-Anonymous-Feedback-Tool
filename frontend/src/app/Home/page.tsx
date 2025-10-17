"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Zap, Users, FileText, CheckCircle, MessageCircle, BarChart, Settings } from "lucide-react";
import { useRef, RefObject } from "react";

export default function Homepage() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Sparkles className="w-10 h-10 text-purple-400 mb-4" />,
      title: "AI-Powered Insights",
      desc: "Get intelligent summaries and sentiment analysis for every piece of feedback.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-400 mb-4" />,
      title: "Secure & Private",
      desc: "All your data is encrypted end-to-end. You control what's shared.",
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-400 mb-4" />,
      title: "Real-Time Collaboration",
      desc: "Work together instantly—see feedback updates live as they happen.",
    },
  ] as const;

  const steps = [
    {
      step: 1,
      title: "Sign Up",
      description: "Create your account in seconds",
      icon: <Users className="w-8 h-8" />,
      image: "/placeholder-signup.jpg"
    },
    {
      step: 2,
      title: "Create Board",
      description: "Set up your feedback board",
      icon: <FileText className="w-8 h-8" />,
      image: "/placeholder-board.jpg"
    },
    {
      step: 3,
      title: "Invite Team",
      description: "Add your team members",
      icon: <MessageCircle className="w-8 h-8" />,
      image: "/placeholder-team.jpg"
    },
    {
      step: 4,
      title: "Collect Feedback",
      description: "Start gathering insights",
      icon: <BarChart className="w-8 h-8" />,
      image: "/placeholder-feedback.jpg"
    }
  ] as const;

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      feedback: "Feedback.ly transformed how we collect and analyze user feedback. The AI insights helped us identify critical pain points we had missed for months.",
      metric: "62% increase in user satisfaction",
      avatar: "/placeholder-avatar1.jpg"
    },
    {
      name: "Marcus Chen",
      role: "CTO, StartupXYZ",
      feedback: "The real-time collaboration features saved our team countless hours. We can now respond to customer feedback within hours instead of days.",
      metric: "45% faster response time",
      avatar: "/placeholder-avatar2.jpg"
    }
  ] as const;

  const advancedFeatures = [
    {
      title: "Smart Analytics Dashboard",
      description: "Get deep insights with our comprehensive analytics platform",
      features: ["Sentiment Analysis", "Trend Detection", "Priority Scoring", "Custom Reports"],
      image: "/placeholder-analytics.jpg",
      icon: <BarChart className="w-8 h-8" />
    },
    {
      title: "Customizable Workflows",
      description: "Tailor the feedback process to your team's needs",
      features: ["Automated Routing", "Custom Status", "SLAs", "Integration"],
      image: "/placeholder-workflows.jpg",
      icon: <Settings className="w-8 h-8" />
    }
  ] as const;

  const metrics = [
    { number: "10K+", label: "Active Users" },
    { number: "500+", label: "Teams" },
    { number: "1M+", label: "Feedback Items" },
    { number: "98%", label: "Satisfaction Rate" },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("/background.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md py-4 px-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
            FEEDBACK.<span className="text-gray-400">LY</span>
          </h1>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection(featuresRef)}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection(testimonialsRef)}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection(stepsRef)}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              How It Works
            </button>
          </nav>
          <button className="px-6 py-2 border border-gray-500 text-gray-400 rounded-full hover:border-white hover:text-white transition-all duration-300 ease-in-out hover:bg-gray-800">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative pt-24 px-6">
        {/* Glowing Orbs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-6 leading-tight">
            FEEDBACK.<span className="text-gray-400">LY</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
            Welcome to the <span className="font-semibold text-white">feedback revolution</span>.  
            Share thoughts. Spark change. Build better experiences with seamless, real-time collaboration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
            <button className="px-10 py-4 bg-gradient-to-r from-gray-800 to-blue-800 text-white rounded-full font-semibold shadow-2xl hover:shadow-purple-500/25 hover:from-gray-700 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
            <button 
              onClick={() => scrollToSection(featuresRef)}
              className="px-10 py-4 border-2 border-gray-500 text-gray-300 rounded-full font-semibold hover:border-white hover:text-white transition-all duration-300 ease-in-out hover:bg-gray-800"
            >
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <section ref={featuresRef} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 text-center shadow-lg hover:border-gray-600 hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </section>
      </section>

      {/* How It Works Section */}
      <section ref={stepsRef} className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get started in just 4 simple steps and transform how you collect feedback
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                {/* Image Placeholder */}
                <div className="mb-6 h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl flex items-center justify-center border border-gray-800">
                  <div className="text-center text-gray-400">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      {item.icon}
                    </div>
                    <p className="text-sm">Step {item.step} Image</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 px-6 relative bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Loved by Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how teams are transforming their feedback processes
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  {/* Avatar Placeholder */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.feedback}&quot;</p>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>{testimonial.metric}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {metrics.map((metric, index) => (
              <div key={index}>
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                  {metric.number}
                </div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to master customer feedback
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-r from-purple-900/50 to-blue-900/50 flex items-center justify-center border-b border-gray-800">
                  <div className="text-center text-gray-400">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                      {feature.icon}
                    </div>
                    <p>Feature Image</p>
                    <p className="text-sm">{feature.image}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 relative bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Ready to Transform Your Feedback?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join thousands of teams already using Feedback.ly to build better products
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-12 py-4 bg-gradient-to-r from-gray-800 to-blue-800 text-white rounded-full font-semibold shadow-2xl hover:shadow-purple-500/25 hover:from-gray-700 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-12 py-4 border-2 border-gray-500 text-gray-300 rounded-full font-semibold hover:border-white hover:text-white transition-all duration-300 ease-in-out hover:bg-gray-800">
                Schedule Demo
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-8">
              No credit card required • 14-day free trial • Setup in minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-12 text-center text-sm text-gray-500 border-t border-gray-800 relative z-10 w-full"
      >
        <p>Join 10,000+ teams transforming feedback into action</p>
        <div className="flex justify-center space-x-8 text-sm text-gray-400 mt-2">
          <span>Powered by AI</span>
          <span>Secure & Private</span>
          <span>Free to Start</span>
        </div>
        <p className="mt-8">
          © {new Date().getFullYear()} FEEDBACK.LY — Built for Better Communication
        </p>
      </motion.footer>
    </div>
  );
}