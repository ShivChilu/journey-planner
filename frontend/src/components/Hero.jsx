import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight, Code, MapPin, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            Data Structures & Algorithms Project
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Metro Journey Planner
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-4xl mx-auto">
            Shortest Path Finder using <span className="text-blue-400 font-semibold">Dijkstra's Algorithm</span>
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            An interactive demonstration of graph algorithms applied to Delhi Metro network. 
            Built with C++ algorithm implementation and modern web interface.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              onClick={() => document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Try Journey Planner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              onClick={() => window.open('https://github.com/your-username/metro-journey-planner', '_blank')}
            >
              View on GitHub
              <Code className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Optimized Routes</h3>
            </div>
            <p className="text-slate-400">
              Find fastest, cheapest, or route with minimum transfers using advanced graph algorithms.
            </p>
          </Card>
          
          <Card className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Delhi Metro Network</h3>
            </div>
            <p className="text-slate-400">
              Complete Delhi Metro map with real station data and accurate travel times between stations.
            </p>
          </Card>
          
          <Card className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold ml-4">C++ Implementation</h3>
            </div>
            <p className="text-slate-400">
              Clean, well-commented C++ code showcasing professional DSA implementation skills.
            </p>
          </Card>
        </div>
        
        {/* Tech Stack */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-slate-200">Built With</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {['C++', 'React.js', 'Dijkstra\'s Algorithm', 'Graph Theory', 'Tailwind CSS'].map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 font-medium hover:bg-slate-600/50 transition-colors duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;