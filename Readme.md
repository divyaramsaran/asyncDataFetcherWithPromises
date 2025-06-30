# Project Assignment: Async Data Fetcher with Promises

## Project Title

**AsyncDataFetcher: Simulated API Calls and Data Processing with Promises**

---

## Overview

Build a console-based JavaScript application that simulates fetching user data from an API using Promises. The project will help you understand how to create, chain, and handle asynchronous operations with Promises, including error handling.

---

## Functional Requirements

- **Simulate API Calls:**  
  Use Promises to simulate asynchronous API calls for fetching user data, posts, and comments.
- **Chained Promises:**  
  After fetching user data, automatically fetch that user's posts, then fetch comments for those posts, using chained Promises.
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
  Display the fetched user’s name and age.
- **Posts:**  
  List all post titles for the user.
- **Comments:**  
  For each comment related to the user's posts, display the comment content.
- **Error Messages:**  
  If any fetch fails, display a clear error message indicating at which stage the error occurred.

---

## Example Input/Output

### Example 1: Successful Fetch

```
Enter User ID: 1

Id: 1 Name: Alice Age: 30
Post ID: 1, Title: Post by Alice
Post ID: 3, Title: Another Post by Alice
Comment ID: 1, Content: Comment on Alice's post
Comment ID: 3, Content: Another comment on  Alice's post
```

### Example 2: Error Handling

```
Enter User ID: 0

Error: User not found.
```

---

## Notes
- This implementation does not use `Promise.all` for parallel comment fetching. Instead, it fetches all comments related to the user's posts in a single step.
- The user data includes name and age. Email is not included in this version.
