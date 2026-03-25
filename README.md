markdown

# 📸 Photo Sharing API

A RESTful backend API for a photo sharing app — built with **Node.js**, **Express.js**, and **MongoDB**. Supports photo uploads, an up/down voting system with mutual exclusivity, pagination, and user management.

---

## ✨ Features

- 🖼️ **Photo Upload** — upload images only (validated via Multer), stored with UUID-based unique filenames
- 👍👎 **Up & Down Voting** — users can upvote or downvote photos, but **never both at the same time**
  - Upvoting auto-removes any existing downvote (and vice versa)
  - Clicking the same vote again **toggles it off**
  - All handled in a **single atomic MongoDB query**
- 📄 **Pagination** — fetch photos in pages, sorted by popularity (`count` descending)
- 👤 **User Signup** — create users with name, email, password, and age
- 🔗 **Populated Responses** — photo responses include creator & voter info

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js v5 |
| Database | MongoDB + Mongoose |
| File Upload | Multer + UUID |
| Config | dotenv |

---

## 📁 Project Structure

```
├── app.js                  # Entry point
├── apis/
│   ├── user.api.js         # User routes
│   └── photo.api.js        # Photo routes
├── services/
│   ├── user.service.js     # User business logic
│   └── photo.service.js    # Photo business logic
├── models/
│   ├── user.model.js       # User schema
│   └── photo.model.js      # Photo schema
├── common/
│   └── uploadimg.js        # Multer config
└── uploads/                # Stored images
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB running locally on port `27017`

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/photo-sharing-api.git
cd photo-sharing-api

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
