#!/bin/bash
set -e

echo "=============================================="
echo "Cheko Project - Start Script"
echo "=============================================="

echo "Building and starting containers..."
docker compose up --build -d

echo "Backend is live! Checking endpoints..."
echo "Total menu items:"
curl -s http://localhost:8080/menu-items | jq '. | length'

echo ""
echo "Project is running!"
echo "Frontend: http://localhost:5173"
echo "Backend:  http://localhost:8080"
