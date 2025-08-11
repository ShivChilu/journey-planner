# Metro Journey Planner - Backend Integration Contracts

## Overview
This document outlines the integration plan to replace frontend mock data with actual C++ Dijkstra's algorithm implementation via FastAPI backend.

## API Contracts

### 1. Get All Stations
**Endpoint:** `GET /api/stations`
**Purpose:** Retrieve all available metro stations
**Response:**
```json
{
  "stations": [
    "Shahdara", "Mansarovar Park", "Jhilmil", "Dilshad Garden", ...
  ]
}
```

### 2. Get Metro Lines
**Endpoint:** `GET /api/metro-lines`
**Purpose:** Get metro line information with colors and stations
**Response:**
```json
{
  "lines": {
    "Red Line": {
      "color": "#e53e3e",
      "stations": ["Rithala", "Rohini West", ...]
    },
    "Yellow Line": {
      "color": "#ecc94b", 
      "stations": ["Jahangirpuri", "Adarsh Nagar", ...]
    }
  }
}
```

### 3. Calculate Route (Main Algorithm)
**Endpoint:** `POST /api/calculate-route`
**Purpose:** Run Dijkstra's algorithm to find optimal route
**Request Body:**
```json
{
  "source": "MG Road",
  "destination": "Botanical Garden", 
  "preference": "time" // "time", "fare", or "transfers"
}
```
**Response:**
```json
{
  "route": {
    "path": ["MG Road", "Sikandarpur", "Hauz Khas", "Botanical Garden"],
    "distance": 42.8,
    "fare": 50,
    "estimatedTime": 72,
    "transfers": 1,
    "lines": ["Yellow Line", "Blue Line"],
    "optimization": "time"
  }
}
```

## Mock Data to Replace

### Frontend Files to Update:
1. **`/app/frontend/src/data/mock.js`**
   - Remove `delhiMetroStations` array → Replace with API call to `/api/stations`
   - Remove `metroLines` object → Replace with API call to `/api/metro-lines`  
   - Remove `mockRouteData` object → Replace with API call to `/api/calculate-route`

2. **`/app/frontend/src/components/JourneyPlanner.jsx`**
   - Replace mock calculation in `handleSearch()` with actual API call
   - Update stations loading from API instead of mock array
   - Remove hardcoded delay simulation

## Backend Implementation Plan

### 1. Data Structure Setup
- Create Delhi Metro graph representation in memory
- Station nodes with coordinates and line information
- Weighted edges for time, distance, and fare between adjacent stations
- Store metro line mappings for proper route visualization

### 2. Algorithm Implementation  
- Implement C++ Dijkstra's algorithm class in Python backend
- Support multiple optimization criteria (time/fare/transfers)
- Return complete path with station-by-station route
- Calculate total metrics (distance, fare, time, transfers)

### 3. API Endpoints
- **FastAPI routes** for all endpoints listed above
- **Input validation** for station names and preferences
- **Error handling** for invalid routes or missing stations
- **Performance optimization** for quick route calculations

## Integration Steps

1. **Backend Development:**
   - Create graph data structure with Delhi Metro network
   - Implement Dijkstra's algorithm with different weight criteria
   - Build FastAPI endpoints as per contracts above
   - Add proper error handling and validation

2. **Frontend Integration:**
   - Replace mock data imports with API service calls
   - Update component state management for async data loading
   - Add loading states and error handling
   - Remove hardcoded delays and mock calculations

3. **Data Flow:**
   - User selects stations → Frontend validates input
   - Frontend calls `/api/calculate-route` → Backend runs Dijkstra's algorithm  
   - Backend returns optimal path → Frontend displays results with visualization
   - Metro line colors and station information loaded from backend APIs

## Technical Considerations

- **Performance:** Cache graph structure in memory for fast calculations
- **Validation:** Ensure source and destination stations exist in network
- **Error Handling:** Graceful fallbacks for disconnected stations
- **Algorithm:** Support different optimization criteria with weighted edges
- **Real-time:** Quick response times for interactive user experience

This contracts file ensures seamless integration between the C++ algorithm implementation and the modern web interface, maintaining the professional DSA project showcase while providing full functionality.