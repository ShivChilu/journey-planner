import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { metroLines } from '../data/mock';
import { MapPin, Train, Clock, Ruler } from 'lucide-react';

const MetroMap = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Delhi Metro Network
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Interactive Metro Map
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive Delhi Metro network with 6 operational lines covering over 250 kilometers 
            and connecting major areas across Delhi NCR.
          </p>
        </div>

        {/* Metro Lines Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.entries(metroLines).map(([lineName, lineData]) => (
            <Card key={lineName} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-lg">
                    <div 
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: lineData.color }}
                    />
                    {lineName}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {lineData.code}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Train className="w-4 h-4 mr-2 text-slate-500" />
                      <div>
                        <div className="font-medium text-slate-700">{lineData.totalStations}</div>
                        <div className="text-xs text-slate-500">Stations</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Ruler className="w-4 h-4 mr-2 text-slate-500" />
                      <div>
                        <div className="font-medium text-slate-700">{lineData.length}</div>
                        <div className="text-xs text-slate-500">Length</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-xs text-slate-500 mb-2">Key Stations:</div>
                    <div className="flex flex-wrap gap-1">
                      {lineData.stations.slice(0, 4).map((station, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="text-xs bg-slate-100 text-slate-600"
                        >
                          {station}
                        </Badge>
                      ))}
                      {lineData.stations.length > 4 && (
                        <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-500">
                          +{lineData.stations.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Metro Map */}
        <Card className="shadow-lg border-0 shadow-slate-200/50">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <MapPin className="w-5 h-5 mr-2 text-blue-500" />
              Delhi Metro Network Visualization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-100 p-8 rounded-lg">
              <div className="relative">
                {/* Simplified Metro Map SVG */}
                <div className="w-full h-96 flex items-center justify-center bg-white rounded-lg border-2 border-slate-200">
                  <svg viewBox="0 0 800 400" className="w-full h-full">
                    {/* Red Line (Horizontal - North) */}
                    <line x1="50" y1="100" x2="750" y2="100" stroke="#DC143C" strokeWidth="6" />
                    <text x="400" y="90" textAnchor="middle" className="text-xs font-medium" fill="#DC143C">
                      Red Line (Rithala ↔ Dilshad Garden)
                    </text>
                    
                    {/* Yellow Line (Vertical - Main) */}
                    <line x1="400" y1="50" x2="400" y2="350" stroke="#FFD700" strokeWidth="6" />
                    <text x="410" y="200" className="text-xs font-medium" fill="#DAA520">
                      Yellow Line (Jahangirpuri ↔ HUDA City Centre)
                    </text>
                    
                    {/* Blue Line (Horizontal - Central) */}
                    <line x1="100" y1="200" x2="700" y2="200" stroke="#0000FF" strokeWidth="6" />
                    <text x="400" y="190" textAnchor="middle" className="text-xs font-medium" fill="#0000FF">
                      Blue Line (Dwarka ↔ Noida City Centre)
                    </text>
                    
                    {/* Green Line (Diagonal - Northwest) */}
                    <line x1="150" y1="150" x2="350" y2="250" stroke="#00FF00" strokeWidth="6" />
                    <text x="250" y="175" textAnchor="middle" className="text-xs font-medium" fill="#008000">
                      Green Line
                    </text>
                    
                    {/* Violet Line (Diagonal - Southeast) */}
                    <line x1="400" y1="200" x2="650" y2="350" stroke="#8A2BE2" strokeWidth="6" />
                    <text x="525" y="280" textAnchor="middle" className="text-xs font-medium" fill="#8A2BE2">
                      Violet Line
                    </text>
                    
                    {/* Pink Line (Curved - Circle) */}
                    <circle cx="400" cy="200" r="120" fill="none" stroke="#FFC0CB" strokeWidth="6" />
                    <text x="280" y="200" textAnchor="middle" className="text-xs font-medium" fill="#FF1493">
                      Pink Line (Ring)
                    </text>
                    
                    {/* Major Interchange Stations */}
                    <circle cx="400" cy="100" r="8" fill="#ffffff" stroke="#000" strokeWidth="2" />
                    <text x="400" y="80" textAnchor="middle" className="text-xs font-bold">Kashmere Gate</text>
                    
                    <circle cx="400" cy="200" r="8" fill="#ffffff" stroke="#000" strokeWidth="2" />
                    <text x="400" y="220" textAnchor="middle" className="text-xs font-bold">Rajiv Chowk</text>
                    
                    <circle cx="300" cy="200" r="8" fill="#ffffff" stroke="#000" strokeWidth="2" />
                    <text x="300" y="220" textAnchor="middle" className="text-xs font-bold">Rajouri Garden</text>
                    
                    <circle cx="500" cy="200" r="8" fill="#ffffff" stroke="#000" strokeWidth="2" />
                    <text x="500" y="220" textAnchor="middle" className="text-xs font-bold">Mandi House</text>
                    
                    <circle cx="400" cy="280" r="8" fill="#ffffff" stroke="#000" strokeWidth="2" />
                    <text x="400" y="300" textAnchor="middle" className="text-xs font-bold">Hauz Khas</text>
                  </svg>
                </div>
                
                {/* Map Legend */}
                <div className="mt-6 bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-3">Map Legend</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      {Object.entries(metroLines).slice(0, 3).map(([lineName, lineData]) => (
                        <div key={lineName} className="flex items-center text-sm">
                          <div 
                            className="w-4 h-2 rounded mr-3"
                            style={{ backgroundColor: lineData.color }}
                          />
                          <span className="font-medium text-slate-700">{lineName}</span>
                          <span className="text-slate-500 ml-2">({lineData.totalStations} stations)</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {Object.entries(metroLines).slice(3, 6).map(([lineName, lineData]) => (
                        <div key={lineName} className="flex items-center text-sm">
                          <div 
                            className="w-4 h-2 rounded mr-3"
                            style={{ backgroundColor: lineData.color }}
                          />
                          <span className="font-medium text-slate-700">{lineName}</span>
                          <span className="text-slate-500 ml-2">({lineData.totalStations} stations)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm mt-4 pt-4 border-t border-slate-100">
                    <div className="w-4 h-4 rounded-full bg-white border-2 border-slate-800 mr-3" />
                    <span className="font-medium text-slate-700">Major Interchange Stations</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Network Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-0">
            <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-sm text-blue-700 font-medium">Operational Lines</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border-0">
            <div className="text-3xl font-bold text-green-600 mb-2">250+</div>
            <div className="text-sm text-green-700 font-medium">Total Stations</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-0">
            <div className="text-3xl font-bold text-purple-600 mb-2">390km</div>
            <div className="text-sm text-purple-700 font-medium">Network Length</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-0">
            <div className="text-3xl font-bold text-orange-600 mb-2">6M+</div>
            <div className="text-sm text-orange-700 font-medium">Daily Passengers</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MetroMap;