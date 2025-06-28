# Project Assignment: Async Data Fetcher with Promises

## Project Title

**AsyncDataFetcher: Simulated API Calls and Data Processing with Promises**

---

## Overview

Build a console-based JavaScript application that simulates fetching user data from an API using Promises. The project will help you understand how to create, chain, and handle asynchronous operations with Promises, including error handling and parallel execution.

---

## Functional Requirements

- **Simulate API Calls:**  
  Use Promises to simulate asynchronous API calls for fetching user data, posts, and comments.
- **Chained Promises:**  
  After fetching user data, automatically fetch that user's posts, then fetch comments for each post, using chained Promises.
- **Parallel Execution:**  
  Fetch comments for all posts in parallel using `Promise.all`.
- **Error Handling:**  
  Gracefully handle errors at any stage of the chain and display appropriate messages.
- **User Interaction:**  
  Allow the user to input a user ID to fetch data for, or to simulate an error by entering an invalid ID.

---

## Input and Output Specifications

### Inputs

- **User ID:**  
  Numeric input from the user (e.g., 1, 2, 3).  
  If the user enters an invalid ID (e.g., 0 or a non-existent ID), simulate an API error.

### Outputs

- **User Data:**  
  Display the fetched user’s name and email.
- **Posts:**  
  List all post titles for the user.
- **Comments:**  
  For each post, display the number of comments.
- **Error Messages:**  
  If any fetch fails, display a clear error message indicating at which stage the error occurred.

---

## Example Input/Output

### Example 1: Successful Fetch

Enter User ID: 1

Fetching user data...
User: Alice Smith (alice@example.com)

Fetching posts...
Posts:

My First Post

JavaScript Tips

Fetching comments for each post...
Post: My First Post — 2 comments
Post: JavaScript Tips — 1 comment

### Example 2: Error Handling

Enter User ID: 0

Fetching user data...
Error: User not found. Please enter a valid User ID.

### Example 3: Error in Comments Fetch

Enter User ID: 2

Fetching user data...
User: Bob Lee (bob@example.com)

Fetching posts...
Posts:

Async Await in JS

Fetching comments for each post...
Error: Failed to fetch comments for post "Async Await in JS"
