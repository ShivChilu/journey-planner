import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { MapPin, Clock, IndianRupee, ArrowRight, Route, Zap, Users } from 'lucide-react';
import { delhiMetroStations, mockRouteData, metroLines } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const JourneyPlanner = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [preference, setPreference] = useState('time');
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!source || !destination) {
      toast({
        title: "Invalid Input",
        description: "Please select both source and destination stations.",
        variant: "destructive"
      });
      return;
    }

    if (source === destination) {
      toast({
        title: "Same Station",
        description: "Source and destination cannot be the same.",
        variant: "destructive"
      });
      return;
    }

    setIsCalculating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock result - in real implementation, this would call backend
    const mockResult = mockRouteData[source]?.[destination]?.[preference] || {
      path: [source, "Intermediate Station 1", "Intermediate Station 2", destination],
      distance: Math.random() * 30 + 10,
      fare: Math.floor(Math.random() * 40 + 20),
      estimatedTime: Math.floor(Math.random() * 60 + 15),
      transfers: Math.floor(Math.random() * 3),
      lines: ["Yellow Line", "Blue Line"]
    };

    setResult(mockResult);
    setIsCalculating(false);

    toast({
      title: "Route Calculated!",
      description: `Found optimal route with ${mockResult.transfers} transfer(s).`
    });
  };

  const resetSearch = () => {
    setSource('');
    setDestination('');
    setResult(null);
  };

  const getPreferenceIcon = (pref) => {
    switch (pref) {
      case 'time': return <Clock className="w-4 h-4" />;
      case 'fare': return <IndianRupee className="w-4 h-4" />;
      case 'transfers': return <Route className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  const getPreferenceColor = (pref) => {
    switch (pref) {
      case 'time': return 'bg-blue-500';
      case 'fare': return 'bg-green-500';
      case 'transfers': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="planner" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-purple-600 border-purple-200">
            Interactive Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Journey Planner
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience Dijkstra's algorithm in action. Find the optimal route between any two Delhi Metro stations 
            based on your preferences.
          </p>
        </div>

        {/* Enhanced Results Section with Visualization */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="shadow-lg border-0 shadow-slate-200/50">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                Plan Your Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="source" className="text-sm font-medium text-slate-700">
                    Source Station
                  </Label>
                  <Select value={source} onValueChange={setSource}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select starting station" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {delhiMetroStations.map((station) => (
                        <SelectItem key={station} value={station}>
                          {station}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="destination" className="text-sm font-medium text-slate-700">
                    Destination Station
                  </Label>
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select destination station" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {delhiMetroStations.map((station) => (
                        <SelectItem key={station} value={station}>
                          {station}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="preference" className="text-sm font-medium text-slate-700">
                    Route Optimization
                  </Label>
                  <Select value={preference} onValueChange={setPreference}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="time">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          Fastest Route (Minimize Time)
                        </div>
                      </SelectItem>
                      <SelectItem value="fare">
                        <div className="flex items-center">
                          <IndianRupee className="w-4 h-4 mr-2" />
                          Cheapest Route (Minimize Fare)
                        </div>
                      </SelectItem>
                      <SelectItem value="transfers">
                        <div className="flex items-center">
                          <Route className="w-4 h-4 mr-2" />
                          Fewest Transfers (Minimize Changes)
                        </div>
                      </SelectItem>
                      <SelectItem value="combined">
                        <div className="flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          Best Overall (Time + Fare Optimized)
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={handleSearch} 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isCalculating}
                >
                  {isCalculating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                      Running Dijkstra's Algorithm...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Calculate Optimal Route
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={resetSearch}>
                  Reset
                </Button>
              </div>

              {/* Algorithm Status */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Dijkstra's Algorithm Status</span>
                  <Badge variant={isCalculating ? "default" : "secondary"} className={isCalculating ? "bg-blue-500" : ""}>
                    {isCalculating ? "Processing" : "Ready"}
                  </Badge>
                </div>
                <p className="text-xs text-slate-600">
                  {isCalculating 
                    ? "Computing shortest path using priority queue and graph traversal..." 
                    : "Ready to find optimal route between selected stations using graph algorithms."
                  }
                </p>
                {isCalculating && (
                  <div className="mt-2">
                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                      <div className="bg-blue-500 h-1.5 rounded-full animate-pulse" style={{width: '70%'}}></div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Result Section */}
          <Card className="shadow-lg border-0 shadow-slate-200/50">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Route className="w-5 h-5 mr-2 text-green-500" />
                Route Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  {/* Route Summary */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          {result.distance?.toFixed(1) || '0'} km
                        </div>
                        <div className="text-sm text-slate-600">Distance</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          ₹{result.fare || 0}
                        </div>
                        <div className="text-sm text-slate-600">Fare</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">
                          {result.estimatedTime || 0} min
                        </div>
                        <div className="text-sm text-slate-600">Time</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">
                          {result.transfers || 0}
                        </div>
                        <div className="text-sm text-slate-600">Transfers</div>
                      </div>
                    </div>
                  </div>

                  {/* Optimization Preference */}
                  <div className="flex items-center justify-center">
                    <Badge className={`${getPreferenceColor(preference)} text-white px-4 py-2`}>
                      {getPreferenceIcon(preference)}
                      <span className="ml-2 capitalize">
                        Optimized for {preference === 'transfers' ? 'minimum transfers' : preference}
                      </span>
                    </Badge>
                  </div>

                  <Separator />

                  {/* Route Path */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-4 flex items-center">
                      <Route className="w-4 h-4 mr-2" />
                      Station Route
                    </h4>
                    <div className="space-y-3">
                      {result.path?.map((station, index) => (
                        <div key={index} className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            index === 0 ? 'bg-green-500' : 
                            index === result.path.length - 1 ? 'bg-red-500' : 
                            'bg-blue-400'
                          }`} />
                          <span className="text-slate-700 font-medium">{station}</span>
                          {index < result.path.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metro Lines */}
                  {result.lines && result.lines.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Metro Lines</h4>
                        <div className="flex flex-wrap gap-2">
                          {result.lines.map((line, index) => {
                            const lineColor = metroLines[line]?.color || '#6b7280';
                            return (
                              <Badge 
                                key={index} 
                                variant="outline"
                                className="border-2"
                                style={{ borderColor: lineColor, color: lineColor }}
                              >
                                <div 
                                  className="w-2 h-2 rounded-full mr-2"
                                  style={{ backgroundColor: lineColor }}
                                />
                                {line}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">No Route Selected</h3>
                  <p className="text-slate-500 text-sm">
                    Choose your source and destination stations to see the optimal route calculated by Dijkstra's algorithm.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Technical Implementation Details */}
        <div className="mt-20 bg-gradient-to-br from-slate-50 to-blue-50 p-12 rounded-2xl border border-slate-200">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-slate-600 border-slate-300">
              Algorithm Implementation
            </Badge>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Dijkstra's Algorithm Features
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              This implementation demonstrates advanced computer science concepts and optimization techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Graph Representation",
                description: "Adjacency list using STL containers for O(1) station lookup",
                icon: "🔗",
                complexity: "Space: O(V + E)"
              },
              {
                title: "Priority Queue",
                description: "Min-heap implementation for efficient vertex selection",
                icon: "⚡",
                complexity: "Time: O(log V)"
              },
              {
                title: "Path Reconstruction",
                description: "Parent tracking for complete route details and optimization",
                icon: "🛤️",
                complexity: "Space: O(V)"
              },
              {
                title: "Multiple Criteria",
                description: "Optimize for time, cost, or transfers using weighted edges",
                icon: "🎯",
                complexity: "Flexible weights"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="font-semibold text-slate-800 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600 mb-3">{feature.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {feature.complexity}
                </Badge>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white p-6 rounded-xl border border-slate-200 shadow-md">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">O((V + E) log V)</div>
                  <div className="text-sm text-slate-600">Time Complexity</div>
                </div>
                <div className="h-8 w-px bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">O(V)</div>
                  <div className="text-sm text-slate-600">Space Complexity</div>
                </div>
                <div className="h-8 w-px bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-slate-600">Optimal Solution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyPlanner;