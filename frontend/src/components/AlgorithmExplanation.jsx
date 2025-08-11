import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Play, Pause, RotateCcw, Code2, Clock, Database } from 'lucide-react';
import { cppAlgorithmCode, algorithmSteps, complexityAnalysis } from '../data/mock';

const AlgorithmExplanation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStepForward = () => {
    if (currentStep < algorithmSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetAnimation = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= algorithmSteps.length - 1) {
            setIsPlaying(false);
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    }
  };

  return (
    <section id="algorithm" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Algorithm Implementation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Dijkstra's Algorithm in C++
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional implementation showcasing advanced data structures, 
            graph theory concepts, and algorithm optimization techniques.
          </p>
        </div>

        <Tabs defaultValue="code" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="code" className="text-sm">
              <Code2 className="w-4 h-4 mr-2" />
              C++ Code
            </TabsTrigger>
            <TabsTrigger value="steps" className="text-sm">
              <Play className="w-4 h-4 mr-2" />
              Step-by-Step
            </TabsTrigger>
            <TabsTrigger value="complexity" className="text-sm">
              <Clock className="w-4 h-4 mr-2" />
              Complexity
            </TabsTrigger>
            <TabsTrigger value="features" className="text-sm">
              <Database className="w-4 h-4 mr-2" />
              Features
            </TabsTrigger>
          </TabsList>

          <TabsContent value="code">
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Code2 className="w-5 h-5 mr-2" />
                  Complete C++ Implementation
                </CardTitle>
                <p className="text-slate-400">
                  Production-ready code with proper error handling, optimized data structures, and clean architecture
                </p>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-slate-800 p-6 rounded-lg overflow-x-auto text-sm text-slate-300 border border-slate-600">
                    <code>{cppAlgorithmCode}</code>
                  </pre>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                      C++17
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Key Features</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Adjacency List representation</li>
                      <li>• Priority Queue optimization</li>
                      <li>• Path reconstruction</li>
                      <li>• Error handling</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Data Structures</h4>
                    <ul className="text-sm text-purple-600 space-y-1">
                      <li>• unordered_map for O(1) lookup</li>
                      <li>• vector for dynamic arrays</li>
                      <li>• priority_queue (min-heap)</li>
                      <li>• pair for edge representation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Optimizations</h4>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Early termination check</li>
                      <li>• Efficient memory usage</li>
                      <li>• STL container optimization</li>
                      <li>• Minimal space complexity</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="steps">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Algorithm Visualization
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={handleStepBackward}
                        disabled={currentStep === 0}
                      >
                        ←
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={togglePlayPause}
                        className={isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={handleStepForward}
                        disabled={currentStep === algorithmSteps.length - 1}
                      >
                        →
                      </Button>
                      <Button size="sm" variant="outline" onClick={resetAnimation}>
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-slate-600">
                        Step {currentStep + 1} of {algorithmSteps.length}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentStep + 1) / algorithmSteps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {algorithmSteps.map((step, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border transition-all duration-300 ${
                          index === currentStep 
                            ? 'bg-blue-50 border-blue-300 shadow-md' 
                            : index < currentStep 
                              ? 'bg-green-50 border-green-200' 
                              : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center mb-2">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${
                            index === currentStep 
                              ? 'bg-blue-500 text-white' 
                              : index < currentStep 
                                ? 'bg-green-500 text-white' 
                                : 'bg-slate-300 text-slate-600'
                          }`}>
                            {step.step}
                          </div>
                          <h4 className="font-semibold text-slate-800">{step.title}</h4>
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{step.description}</p>
                        <pre className="bg-slate-800 text-slate-300 p-2 rounded text-xs overflow-x-auto">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Algorithm Properties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-slate-800">Why Dijkstra's Algorithm?</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="font-medium text-slate-700">Optimal for Single-Source Shortest Path</p>
                          <p className="text-sm text-slate-600">Finds shortest path from one source to all vertices</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="font-medium text-slate-700">Non-negative Edge Weights</p>
                          <p className="text-sm text-slate-600">Perfect for metro travel times and distances</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="font-medium text-slate-700">Greedy Approach</p>
                          <p className="text-sm text-slate-600">Makes locally optimal choices leading to global optimum</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 text-slate-800">Real-world Applications</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "GPS Navigation",
                        "Network Routing", 
                        "Social Networks",
                        "Game AI Pathfinding",
                        "Flight Connections",
                        "Internet Protocols"
                      ].map((app, index) => (
                        <div key={index} className="text-sm text-slate-600 bg-slate-100 px-3 py-2 rounded">
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="complexity">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Time Complexity Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {complexityAnalysis.timeComplexity}
                      </div>
                      <p className="text-slate-600">Using Binary Heap (Priority Queue)</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Breakdown:</h4>
                      <p className="text-sm text-blue-700">{complexityAnalysis.explanation.time}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold">Operation Complexities:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <span className="text-sm">Extract minimum from heap</span>
                          <Badge variant="outline">O(log V)</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <span className="text-sm">Decrease key operation</span>
                          <Badge variant="outline">O(log V)</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <span className="text-sm">Total vertices processed</span>
                          <Badge variant="outline">V times</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <span className="text-sm">Total edges relaxed</span>
                          <Badge variant="outline">E times</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    Space Complexity Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {complexityAnalysis.spaceComplexity}
                      </div>
                      <p className="text-slate-600">Linear space requirement</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Memory Usage:</h4>
                      <p className="text-sm text-green-700">{complexityAnalysis.explanation.space}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold">Memory Allocation:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <span className="text-sm">Distance array</span>
                          <Badge variant="outline">O(V)</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <span className="text-sm">Parent array</span>
                          <Badge variant="outline">O(V)</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <span className="text-sm">Priority queue</span>
                          <Badge variant="outline">O(V)</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <span className="text-sm">Adjacency list</span>
                          <Badge variant="outline">O(V + E)</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Graph Representation",
                  description: "Efficient adjacency list using STL containers",
                  features: ["unordered_map for O(1) station lookup", "vector<vector<pair<int,int>>> for edges", "Bidirectional graph implementation"]
                },
                {
                  title: "Priority Queue Optimization",
                  description: "Min-heap for efficient vertex selection",
                  features: ["STL priority_queue with custom comparator", "Lazy deletion for better performance", "Prevents duplicate processing"]
                },
                {
                  title: "Path Reconstruction",
                  description: "Parent tracking for complete route details",
                  features: ["Parent array for path tracing", "Reverse path construction", "Handle disconnected components"]
                },
                {
                  title: "Error Handling",
                  description: "Robust validation and edge cases",
                  features: ["Invalid station validation", "No path found scenarios", "Integer overflow protection"]
                },
                {
                  title: "Memory Efficiency",
                  description: "Optimized space usage and cleanup",
                  features: ["Minimal memory footprint", "Proper resource management", "STL container optimization"]
                },
                {
                  title: "Extensibility",
                  description: "Modular design for easy enhancements",
                  features: ["Template-ready structure", "Multiple weight criteria support", "Easy integration with UI"]
                }
              ].map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AlgorithmExplanation;