---
sidebar_position: 4
---

# Challenges & Solutions

## Challenge 1: Debouncing Search Input

- **Problem**: The search input triggered API calls on every keystroke, causing performance issues.
- **Solution**: Implemented a debounce function to delay API calls until the user stops typing.

## Challenge 2: Responsive Design

- **Problem**: The app looked inconsistent across different screen sizes.
- **Solution**: Used CSS Flexbox and media queries to ensure a responsive layout.

## Challenge 3: State Management Complexity

- **Problem**: Managing state across multiple components became difficult.
- **Solution**: Adopted React Query for server state and Zustand for client state to simplify state management.