# 📺 YouTube Clone – Learning Project

This is a **fun learning project** where I built a mini YouTube clone to understand and implement key frontend concepts like **Debouncing**, **API Polling**, and working with the **YouTube Data API**. It includes features like video search, hero section video display, and a dummy live chat.

🚀 **Live Demo**: _[Coming Soon]_  
🧠 **Tech Stack**: React, JavaScript, Tailwind CSS, YouTube Data API

---

## 📚 What I Learned

### ✅ Debouncing

- Implemented debouncing in the **search field**.
- The API call triggers **only after 200ms** of no key press, instead of firing on every keystroke.

### ✅ API Polling

- Built a **dummy live chat feature** to simulate polling.
- The client makes repeated API calls at fixed intervals to mimic live updates in a chat system.

### ✅ YouTube API Integration

- Used the **YouTube Data API v3** to fetch videos.
- Displayed video thumbnails and titles in a **hero section**.
- Integrated **video playback functionality**.

---

## ✨ Features

- 🔍 **Search Functionality**  
  A responsive search bar that uses debouncing for efficient API usage, similar to YouTube’s real-time search.

- 🎥 **Hero Section with Trending Videos**  
  Fetches and displays popular videos from YouTube using the official API.

- ▶️ **Video Player**  
  Ability to play YouTube videos directly within the app.

- 💬 **Dummy Live Chat**  
  Simulates a real-time chat by polling mock messages every few seconds.

---

## 🔧 Technologies Used

| Technology             | Purpose                         |
| ---------------------- | ------------------------------- |
| React                  | Frontend Framework              |
| Tailwind CSS           | Styling                         |
| YouTube API            | Fetching video data             |
| JavaScript             | Core logic and DOM manipulation |
| setTimeout/setInterval | Debouncing and Polling          |

---

## 🧠 Key Concepts Breakdown

### 📌 Debouncing Example

```js
let timer;
const handleInput = (e) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    fetchSearchResults(e.target.value);
  }, 200);
};
```

# Debouncing

    typing slow = 200ms
    typing fast = 30ms

    Perfomance Issue:
    - for calling for every key press

    (Ex: Flipkart):
    so if the diff between 2 key stroke is <200ms - Decline API call or dont make API call

    in youtube the debouncing is very less if you write fact then it still make API call.

# 📌 API Polling Example

```js
useEffect(() => {
  const interval = setInterval(() => {
    fetchLiveChatMessages();
  }, 2000); // Polling every 2 seconds

  return () => clearInterval(interval); // Clean up on unmount
}, []);
```
