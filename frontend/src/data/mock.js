// Realistic Delhi Metro Journey Planner Data

export const delhiMetroStations = [
  // Red Line
  "Rithala", "Rohini West", "Rohini East", "Pitam Pura", "Kohat Enclave", 
  "Netaji Subhash Place", "Keshav Puram", "Kanhaiya Nagar", "Inderlok", 
  "Shastri Nagar", "Pratap Nagar", "Pulbangash", "Tis Hazari", "Kashmere Gate",
  "Shastri Park", "Seelampur", "Welcome", "Shahdara", "Mansarovar Park", 
  "Jhilmil", "Dilshad Garden",
  
  // Yellow Line
  "Jahangirpuri", "Adarsh Nagar", "Azadpur", "Model Town", "GTB Nagar", 
  "Vishwa Vidyalaya", "Vidhan Sabha", "Civil Lines", "Chandni Chowk", 
  "Chawri Bazar", "New Delhi", "Rajiv Chowk", "Patel Chowk",
  "Central Secretariat", "Udyog Bhawan", "Lok Kalyan Marg", "Jor Bagh", 
  "INA", "AIIMS", "Green Park", "Hauz Khas", "Malviya Nagar", "Saket",
  "Qutab Minar", "Chhatarpur", "Sultanpur", "Ghitorni", "Arjan Garh",
  "Guru Dronacharya", "Sikandarpur", "MG Road", "IFFCO Chowk", "HUDA City Centre",
  
  // Blue Line
  "Dwarka Sector 21", "Dwarka Sector 8", "Dwarka Sector 9", "Dwarka Sector 10",
  "Dwarka Sector 11", "Dwarka Sector 12", "Dwarka Sector 13", "Dwarka Sector 14",
  "Dwarka", "Dwarka Mor", "Nawada", "Uttam Nagar West", "Uttam Nagar East",
  "Janakpuri West", "Janakpuri East", "Tilak Nagar", "Subhash Nagar",
  "Tagore Garden", "Rajouri Garden", "Ramesh Nagar", "Moti Nagar", "Kirti Nagar",
  "Shadipur", "Patel Nagar", "Rajendra Place", "Karol Bagh", "Jhandewalan",
  "Lal Quila", "Jama Masjid", "Delhi Gate", "ITO", "Mandi House", 
  "Barakhamba Road", "Ramakrishna Ashram Marg",
  
  // Green Line
  "Brigadier Hoshiar Singh", "Bahadurgarh City", "Shakurpur", "Nangloi",
  "Nangloi Railway Station", "Rajdhani Park", "Mundka", "Mundka Industrial Area",
  
  // Blue Line Extension (Noida)
  "Pragati Maidan", "Akshardham", "Mayur Vihar-I", "Mayur Vihar Extension",
  "New Ashok Nagar", "Noida Sector 15", "Noida Sector 16", "Noida Sector 18",
  "Botanical Garden", "Golf Course", "Noida City Centre",
  
  // Violet Line
  "Escorts Mujesar", "Raja Nahar Singh", "Ballabhgarh", "Mohan Estate",
  "Tughlakabad Station", "Sarita Vihar", "Jasola Apollo", "Okhla NSIC",
  "Kalkaji Mandir", "Nehru Place", "Kailash Colony", "Moolchand", "Lajpat Nagar",
  "Jangpura", "Khan Market", "JLN Stadium", "Central Secretariat",
  
  // Pink Line
  "Majlis Park", "Azadpur", "Shalimar Bagh", "Netaji Subhash Place", 
  "Shakurpur", "Punjabi Bagh West", "ESI-Basaidarapur", "Rajouri Garden",
  "Mayapuri", "Naraina Vihar", "Delhi Cantonment", "Durgabai Deshmukh South Campus",
  "Sir Vishveshwaraiah Moti Bagh", "Bhikaji Cama Place", "Sarojini Nagar",
  "Dilli Haat-INA", "South Extension", "Lajpat Nagar", "Vinobapuri", 
  "Ashram", "Sarai Kale Khan", "Hazrat Nizamuddin", "Mayur Vihar Pocket-1"
];

export const metroLines = {
  "Red Line": {
    color: "#DC143C",
    code: "Line 1",
    stations: ["Rithala", "Rohini West", "Rohini East", "Pitam Pura", "Kohat Enclave", 
               "Netaji Subhash Place", "Keshav Puram", "Kanhaiya Nagar", "Inderlok", 
               "Shastri Nagar", "Pratap Nagar", "Pulbangash", "Tis Hazari", "Kashmere Gate",
               "Shastri Park", "Seelampur", "Welcome", "Shahdara", "Mansarovar Park", 
               "Jhilmil", "Dilshad Garden"],
    length: "25.09 km",
    totalStations: 21
  },
  "Yellow Line": {
    color: "#FFD700",
    code: "Line 2",
    stations: ["Jahangirpuri", "Adarsh Nagar", "Azadpur", "Model Town", "GTB Nagar", 
               "Vishwa Vidyalaya", "Vidhan Sabha", "Civil Lines", "Kashmere Gate",
               "Chandni Chowk", "Chawri Bazar", "New Delhi", "Rajiv Chowk", "Patel Chowk",
               "Central Secretariat", "Udyog Bhawan", "Lok Kalyan Marg", "Jor Bagh", 
               "INA", "AIIMS", "Green Park", "Hauz Khas", "Malviya Nagar", "Saket",
               "Qutab Minar", "Chhatarpur", "Sultanpur", "Ghitorni", "Arjan Garh",
               "Guru Dronacharya", "Sikandarpur", "MG Road", "IFFCO Chowk", "HUDA City Centre"],
    length: "49.0 km",
    totalStations: 34
  },
  "Blue Line": {
    color: "#0000FF",
    code: "Line 3 & 4",
    stations: ["Dwarka Sector 21", "Dwarka Sector 8", "Dwarka Sector 9", "Dwarka Sector 10",
               "Dwarka Sector 11", "Dwarka Sector 12", "Dwarka Sector 13", "Dwarka Sector 14",
               "Dwarka", "Dwarka Mor", "Nawada", "Uttam Nagar West", "Uttam Nagar East",
               "Janakpuri West", "Janakpuri East", "Tilak Nagar", "Subhash Nagar",
               "Tagore Garden", "Rajouri Garden", "Ramesh Nagar", "Moti Nagar", "Kirti Nagar",
               "Shadipur", "Patel Nagar", "Rajendra Place", "Karol Bagh", "Jhandewalan",
               "New Delhi", "Chawri Bazar", "Lal Quila", "Jama Masjid", "Delhi Gate",
               "ITO", "Mandi House", "Barakhamba Road", "Rajiv Chowk", "Ramakrishna Ashram Marg",
               "Pragati Maidan", "Akshardham", "Mayur Vihar-I", "Mayur Vihar Extension",
               "New Ashok Nagar", "Noida Sector 15", "Noida Sector 16", "Noida Sector 18",
               "Botanical Garden", "Golf Course", "Noida City Centre"],
    length: "65.1 km", 
    totalStations: 50
  },
  "Green Line": {
    color: "#00FF00",
    code: "Line 5",
    stations: ["Brigadier Hoshiar Singh", "Bahadurgarh City", "Shakurpur", "Nangloi",
               "Nangloi Railway Station", "Rajdhani Park", "Mundka", "Mundka Industrial Area"],
    length: "24.82 km",
    totalStations: 8
  },
  "Violet Line": {
    color: "#8A2BE2",
    code: "Line 6",
    stations: ["Escorts Mujesar", "Raja Nahar Singh", "Ballabhgarh", "Mohan Estate",
               "Tughlakabad Station", "Sarita Vihar", "Jasola Apollo", "Okhla NSIC",
               "Kalkaji Mandir", "Nehru Place", "Kailash Colony", "Moolchand", "Lajpat Nagar",
               "Jangpura", "Khan Market", "JLN Stadium", "Central Secretariat"],
    length: "38.99 km",
    totalStations: 17
  },
  "Pink Line": {
    color: "#FFC0CB",
    code: "Line 7",
    stations: ["Majlis Park", "Azadpur", "Shalimar Bagh", "Netaji Subhash Place", 
               "Shakurpur", "Punjabi Bagh West", "ESI-Basaidarapur", "Rajouri Garden",
               "Mayapuri", "Naraina Vihar", "Delhi Cantonment", "Durgabai Deshmukh South Campus",
               "Sir Vishveshwaraiah Moti Bagh", "Bhikaji Cama Place", "Sarojini Nagar",
               "Dilli Haat-INA", "South Extension", "Lajpat Nagar", "Vinobapuri", 
               "Ashram", "Sarai Kale Khan", "Hazrat Nizamuddin", "Mayur Vihar Pocket-1"],
    length: "58.59 km",
    totalStations: 23
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