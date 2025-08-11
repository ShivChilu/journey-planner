// Mock data for Delhi Metro Journey Planner

export const delhiMetroStations = [
  "Shahdara", "Mansarovar Park", "Jhilmil", "Dilshad Garden", "Jhilmil Industrial Area",
  "Mansarovar Park", "Shahdara", "Welcome", "Seelampur", "Shastri Park",
  "Kashmere Gate", "Tis Hazari", "Pulbangash", "Pratap Nagar", "Shastri Nagar",
  "Inderlok", "Kanhaiya Nagar", "Keshav Puram", "Netaji Subhash Place", "Kohat Enclave",
  "Pitam Pura", "Rohini East", "Rohini West", "Rithala",
  "Rajouri Garden", "Ramesh Nagar", "Moti Nagar", "Kirti Nagar", "Shadipur",
  "Patel Nagar", "Rajendra Place", "Karol Bagh", "Jhandewalan", "New Delhi",
  "Chawri Bazar", "Lal Quila", "Jama Masjid", "Delhi Gate", "ITO",
  "Mandi House", "Janpath", "Central Secretariat", "Khan Market", "JLN Stadium",
  "Jangpura", "Lajpat Nagar", "Moolchand", "Kailash Colony", "Nehru Place",
  "Kalkaji Mandir", "Govind Puri", "Harkesh Nagar Okhla", "Jasola Apollo",
  "Sarita Vihar", "Mohan Estate", "Tughlakabad Station", "Badarpur Border",
  "Sarai Kale Khan", "Hazrat Nizamuddin", "Humayun's Tomb", "JLN Stadium",
  "Pragati Maidan", "Akshardham", "Mayur Vihar-I", "Mayur Vihar Extension",
  "New Ashok Nagar", "Noida Sector 15", "Noida Sector 16", "Noida Sector 18",
  "Botanical Garden", "Golf Course", "Noida City Centre"
];

export const metroLines = {
  "Red Line": {
    color: "#e53e3e",
    stations: ["Rithala", "Rohini West", "Rohini East", "Pitam Pura", "Kohat Enclave", 
               "Netaji Subhash Place", "Keshav Puram", "Kanhaiya Nagar", "Inderlok", 
               "Shastri Nagar", "Pratap Nagar", "Pulbangash", "Tis Hazari", "Kashmere Gate",
               "Shastri Park", "Seelampur", "Welcome", "Shahdara", "Mansarovar Park", 
               "Jhilmil", "Dilshad Garden"]
  },
  "Yellow Line": {
    color: "#ecc94b",
    stations: ["Jahangirpuri", "Adarsh Nagar", "Azadpur", "Model Town", "GTB Nagar", 
               "Vishwa Vidyalaya", "Vidhan Sabha", "Civil Lines", "Kashmere Gate", 
               "Chandni Chowk", "Chawri Bazar", "New Delhi", "Rajiv Chowk", "Patel Chowk",
               "Central Secretariat", "Udyog Bhawan", "Lok Kalyan Marg", "Jor Bagh", 
               "INA", "AIIMS", "Green Park", "Hauz Khas", "Malviya Nagar", "Saket",
               "Qutab Minar", "Chhatarpur", "Sultanpur", "Ghitorni", "Arjan Garh",
               "Guru Dronacharya", "Sikandarpur", "MG Road", "IFFCO Chowk", "HUDA City Centre"]
  },
  "Blue Line": {
    color: "#3182ce",
    stations: ["Dwarka Sector 21", "Dwarka Sector 8", "Dwarka Sector 9", "Dwarka Sector 10",
               "Dwarka Sector 11", "Dwarka Sector 12", "Dwarka Sector 13", "Dwarka Sector 14",
               "Dwarka", "Dwarka Mor", "Nawada", "Uttam Nagar West", "Uttam Nagar East",
               "Janakpuri West", "Janakpuri East", "Tilak Nagar", "Subhash Nagar",
               "Tagore Garden", "Rajouri Garden", "Ramesh Nagar", "Moti Nagar", "Kirti Nagar",
               "Shadipur", "Patel Nagar", "Rajendra Place", "Karol Bagh", "Jhandewalan",
               "New Delhi", "Chawri Bazar", "Lal Quila", "Jama Masjid", "Delhi Gate",
               "ITO", "Mandi House", "Barakhamba Road", "Rajiv Chowk", "Ramakrishna Ashram Marg",
               "Jhandewalan", "Karol Bagh", "Rajendra Place", "Patel Nagar", "Shadipur",
               "Kirti Nagar", "Moti Nagar", "Ramesh Nagar", "Rajouri Garden"]
  },
  "Green Line": {
    color: "#38a169",
    stations: ["Brigadier Hoshiar Singh", "Bahadurgarh City", "Shakurpur", "Nangloi",
               "Nangloi Railway Station", "Rajdhani Park", "Mundka", "Mundka Industrial Area",
               "Ghevra Metro Station", "Tikri Kalan", "Tikri Border", "Pandit Shree Ram Sharma",
               "Bahadurgarh City", "Brigadier Hoshiar Singh"]
  }
};

export const mockRouteData = {
  "MG Road": {
    "Botanical Garden": {
      time: {
        path: ["MG Road", "Sikandarpur", "Guru Dronacharya", "Arjan Garh", "Ghitorni", 
               "Sultanpur", "Chhatarpur", "Qutab Minar", "Saket", "Malviya Nagar", 
               "Hauz Khas", "Green Park", "AIIMS", "INA", "Jor Bagh", "Lok Kalyan Marg",
               "Udyog Bhawan", "Central Secretariat", "Mandi House", "Barakhamba Road",
               "Rajiv Chowk", "New Delhi", "Chawri Bazar", "Lal Quila", "Jama Masjid",
               "Delhi Gate", "ITO", "Mandi House", "Pragati Maidan", "Akshardham",
               "Mayur Vihar-I", "Mayur Vihar Extension", "New Ashok Nagar", "Noida Sector 15",
               "Noida Sector 16", "Noida Sector 18", "Botanical Garden"],
        distance: 45.2,
        fare: 55,
        estimatedTime: 68,
        transfers: 1,
        lines: ["Yellow Line", "Blue Line"]
      },
      fare: {
        path: ["MG Road", "Sikandarpur", "Hauz Khas", "Green Park", "AIIMS", "INA",
               "Jor Bagh", "Lok Kalyan Marg", "Udyog Bhawan", "Central Secretariat",
               "Mandi House", "Barakhamba Road", "Rajiv Chowk", "New Delhi", "Chawri Bazar",
               "Lal Quila", "Jama Masjid", "Delhi Gate", "ITO", "Mandi House", "Pragati Maidan",
               "Akshardham", "Mayur Vihar-I", "Mayur Vihar Extension", "New Ashok Nagar",
               "Noida Sector 15", "Noida Sector 16", "Noida Sector 18", "Botanical Garden"],
        distance: 42.8,
        fare: 50,
        estimatedTime: 72,
        transfers: 1,
        lines: ["Yellow Line", "Blue Line"]
      },
      transfers: {
        path: ["MG Road", "Sikandarpur", "Guru Dronacharya", "Arjan Garh", "Ghitorni",
               "Sultanpur", "Chhatarpur", "Qutab Minar", "Saket", "Malviya Nagar",
               "Hauz Khas", "Green Park", "AIIMS", "INA", "Jor Bagh", "Lok Kalyan Marg",
               "Udyog Bhawan", "Central Secretariat", "Mandi House", "Barakhamba Road",
               "Rajiv Chowk", "New Delhi", "Chawri Bazar", "Lal Quila", "Jama Masjid",
               "Delhi Gate", "ITO", "Mandi House", "Pragati Maidan", "Akshardham",
               "Mayur Vihar-I", "Mayur Vihar Extension", "New Ashok Nagar", "Noida Sector 15",
               "Noida Sector 16", "Noida Sector 18", "Botanical Garden"],
        distance: 45.2,
        fare: 55,
        estimatedTime: 68,
        transfers: 1,
        lines: ["Yellow Line", "Blue Line"]
      }
    }
  }
};

export const cppAlgorithmCode = `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
#include <unordered_map>
#include <string>
using namespace std;

class MetroGraph {
private:
    unordered_map<string, int> stationToIndex;
    vector<string> indexToStation;
    vector<vector<pair<int, int>>> adjList; // {destination, weight}
    int numStations;

public:
    MetroGraph(int n) : numStations(n) {
        adjList.resize(n);
    }
    
    void addStation(const string& station) {
        if (stationToIndex.find(station) == stationToIndex.end()) {
            int index = indexToStation.size();
            stationToIndex[station] = index;
            indexToStation.push_back(station);
        }
    }
    
    void addEdge(const string& from, const string& to, int weight) {
        int fromIdx = stationToIndex[from];
        int toIdx = stationToIndex[to];
        adjList[fromIdx].push_back({toIdx, weight});
        adjList[toIdx].push_back({fromIdx, weight}); // Undirected graph
    }
    
    vector<string> dijkstraShortestPath(const string& source, 
                                       const string& destination) {
        if (stationToIndex.find(source) == stationToIndex.end() || 
            stationToIndex.find(destination) == stationToIndex.end()) {
            return {}; // Invalid stations
        }
        
        int src = stationToIndex[source];
        int dest = stationToIndex[destination];
        
        vector<int> dist(numStations, INT_MAX);
        vector<int> parent(numStations, -1);
        priority_queue<pair<int, int>, vector<pair<int, int>>, 
                      greater<pair<int, int>>> pq;
        
        dist[src] = 0;
        pq.push({0, src});
        
        while (!pq.empty()) {
            int currentDist = pq.top().first;
            int currentNode = pq.top().second;
            pq.pop();
            
            if (currentDist > dist[currentNode]) continue;
            
            for (auto& edge : adjList[currentNode]) {
                int nextNode = edge.first;
                int edgeWeight = edge.second;
                
                if (dist[currentNode] + edgeWeight < dist[nextNode]) {
                    dist[nextNode] = dist[currentNode] + edgeWeight;
                    parent[nextNode] = currentNode;
                    pq.push({dist[nextNode], nextNode});
                }
            }
        }
        
        // Reconstruct path
        vector<string> path;
        if (dist[dest] == INT_MAX) return path; // No path found
        
        int current = dest;
        while (current != -1) {
            path.push_back(indexToStation[current]);
            current = parent[current];
        }
        
        reverse(path.begin(), path.end());
        return path;
    }
    
    void printShortestPath(const string& source, const string& destination) {
        vector<string> path = dijkstraShortestPath(source, destination);
        
        if (path.empty()) {
            cout << "No path found between " << source 
                 << " and " << destination << endl;
            return;
        }
        
        cout << "Shortest path from " << source << " to " << destination << ":" << endl;
        for (int i = 0; i < path.size(); i++) {
            cout << path[i];
            if (i < path.size() - 1) cout << " -> ";
        }
        cout << endl;
    }
};

int main() {
    MetroGraph delhiMetro(100); // Assuming max 100 stations
    
    // Add Delhi Metro stations and connections
    delhiMetro.addStation("MG Road");
    delhiMetro.addStation("Sikandarpur");
    delhiMetro.addStation("Hauz Khas");
    delhiMetro.addStation("Botanical Garden");
    // ... add more stations
    
    // Add edges with weights (travel time in minutes)
    delhiMetro.addEdge("MG Road", "Sikandarpur", 3);
    delhiMetro.addEdge("Sikandarpur", "Hauz Khas", 15);
    delhiMetro.addEdge("Hauz Khas", "Botanical Garden", 25);
    // ... add more connections
    
    // Find shortest path
    delhiMetro.printShortestPath("MG Road", "Botanical Garden");
    
    return 0;
}`;

export const algorithmSteps = [
  {
    step: 1,
    title: "Initialize",
    description: "Set source distance to 0, all other distances to infinity. Create priority queue.",
    code: "dist[src] = 0;\nfor(int i = 0; i < numStations; i++) {\n    if(i != src) dist[i] = INT_MAX;\n}"
  },
  {
    step: 2,
    title: "Extract Minimum",
    description: "Extract vertex with minimum distance from priority queue.",
    code: "int currentNode = pq.top().second;\nint currentDist = pq.top().first;\npq.pop();"
  },
  {
    step: 3,
    title: "Relax Edges",
    description: "Update distances of adjacent vertices if shorter path found.",
    code: "if (dist[currentNode] + edgeWeight < dist[nextNode]) {\n    dist[nextNode] = dist[currentNode] + edgeWeight;\n    parent[nextNode] = currentNode;\n    pq.push({dist[nextNode], nextNode});\n}"
  },
  {
    step: 4,
    title: "Repeat",
    description: "Continue until priority queue is empty or destination reached.",
    code: "while (!pq.empty()) {\n    // Extract minimum and relax edges\n}"
  },
  {
    step: 5,
    title: "Reconstruct Path",
    description: "Use parent array to trace back the shortest path.",
    code: "while (current != -1) {\n    path.push_back(indexToStation[current]);\n    current = parent[current];\n}\nreverse(path.begin(), path.end());"
  }
];

export const complexityAnalysis = {
  timeComplexity: "O((V + E) log V)",
  spaceComplexity: "O(V)",
  explanation: {
    time: "V vertices, E edges. Each vertex extracted once from priority queue (O(V log V)). Each edge relaxed once (O(E log V) for priority queue operations).",
    space: "Distance array O(V), parent array O(V), priority queue O(V) in worst case."
  }
};