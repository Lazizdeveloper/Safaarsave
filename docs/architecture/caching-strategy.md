# Caching Topology - Safaar Engine

## Strategy
- **L1 In-Memory Cache**: Node-cache for static hotel metadata.
- **L2 Redis Cache**: Redis cluster for live room availability and booking locks.
- **TTL Policy**: 300s for general listings, 120s for pricing calendar.
