import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Github, ExternalLink, Code2, BookOpen, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-500/30 bg-blue-500/10">
            Project Repository
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            View Complete Implementation
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Access the full C++ source code, documentation, and implementation details on GitHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold ml-3 text-white">C++ Implementation</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Complete Dijkstra's algorithm implementation with graph data structures
            </p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold ml-3 text-white">Documentation</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Detailed algorithm explanation, complexity analysis, and usage guide
            </p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold ml-3 text-white">Live Demo</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Interactive web interface showcasing the algorithm in action
            </p>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-700/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold ml-3 text-white">Open Source</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Free to use, modify, and contribute. Educational resource for DSA learning
            </p>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-slate-800 p-6 rounded-xl border border-slate-700">
            <Github className="w-8 h-8 text-slate-400" />
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-1">GitHub Repository</h3>
              <p className="text-slate-400 text-sm">Complete source code and documentation</p>
            </div>
            <button 
              onClick={() => window.open('https://github.com/your-username/metro-journey-planner', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center ml-4"
            >
              View Repository
              <ExternalLink className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-slate-800">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-slate-200">Technical Skills Demonstrated</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Graph Theory',
                'Dijkstra\'s Algorithm', 
                'C++ Programming',
                'Data Structures',
                'Algorithm Optimization',
                'Priority Queues',
                'Shortest Path Problems',
                'Graph Traversal'
              ].map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="bg-slate-800 text-slate-300 border-slate-600 hover:bg-slate-700 transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <p className="text-slate-500">
            Built as a Data Structures & Algorithms project to demonstrate advanced programming concepts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;