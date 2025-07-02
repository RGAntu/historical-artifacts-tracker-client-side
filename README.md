# 🏺 Historical Artifacts Tracker

**Historical Artifacts Tracker** is a full-stack web application that allows users to discover, contribute, and engage with historical artifacts from different time periods and regions. Designed for history enthusiasts, researchers, and students, this platform offers a clean, secure, and interactive interface for browsing, liking, and managing ancient artifacts.

🌐 **Live Site**: [https://historical-artifacts-tra-2e317.web.app/](https://historical-artifacts-tra-2e317.web.app/)  
🔐 **Protected Routes**: Add Artifact, My Artifacts, Update, Liked Artifacts, Artifact Details

---

## 🚀 Features at a Glance

### 👤 Authentication

- Firebase Authentication (Email/Password & Google)
- JWT token creation & storage for secure backend access
- Protected routes for personalized user experience

### 🧾 Artifact Management (CRUD)

- **Add** new artifacts with full historical context
- **Update** & **Delete** own artifacts (without affecting like count)
- SweetAlert/Toast messages for smooth feedback

### ❤️ Like System with Toggle

- Authenticated users can like/unlike artifacts
- Like count updates instantly & reflects in database
- **Liked Artifacts** page shows all favorited items

### 🔍 Smart Search

- Real-time search by artifact name on the **All Artifacts** page
- Server-side filtering with MongoDB for performance

### 🏠 Homepage Highlights

- Eye-catching slider/banner
- **Featured Artifacts**: Top 6 artifacts by like count
- "See All" button links to All Artifacts
- "Join Our Community" animation with framer motion

### 🔐 Private Routes

- My Artifacts, Add Artifact, Liked Artifacts, Update, and Details pages are protected
- Redirects unauthenticated users to login

### 📄 Artifact Details

- Complete view of an artifact with description, discovery details, and like functionality
- Only accessible if logged in

### ⚙️ Dynamic Functionality

- Dynamic page titles for each route
- 404 Not Found Page for invalid routes
- Loading spinners for better user experience

---

## 🧪 Tech Stack

| Frontend | Backend              | Authentication | Styling                          |
| -------- | -------------------- | -------------- | -------------------------------- |
| ReactJS  | Express.js + MongoDB | Firebase + JWT | TailwindCSS + DaisyUI + Flowbite |

**Other Tools**:

- React Router
- Framer Motion
- React Toastify & SweetAlert2
- Axios for API communication

---

## 🧩 Key Pages

| Page               | Access      | Purpose                                             |
| ------------------ | ----------- | --------------------------------------------------- |
| `/` (Home)         | Public      | Hero slider, featured artifacts, Join our community |
| `/login`           | Public      | Email/password login + Google login                 |
| `/register`        | Public      | User registration with password validation          |
| `/all-artifacts`   | Public      | Full artifact catalog with search and view buttons  |
| `/artifact/:id`    | **Private** | Full detail view, like button                       |
| `/add-artifact`    | **Private** | Form to submit new artifacts                        |
| `/my-artifacts`    | **Private** | View, update, delete own artifacts                  |
| `/liked-artifacts` | **Private** | View all liked artifacts                            |
| `/update/:id`      | **Private** | Edit previously added artifacts                     |
| `*` (Not Found)    | Public      | 404 Not Found page                                  |

---

## 🔐 JWT & Security

- On login (email/password or Google), Firebase provides an ID token.
- The token is retrieved using `getIdToken()` from the Firebase user object.
- This token is sent in the Authorization header (`Bearer <token>`) with secure API requests.
- The backend verifies the Firebase token using Firebase Admin SDK before granting access.
- All protected routes and sensitive actions are secured using this verified token.

## ✅ User Experience Highlights

- Fully responsive design for mobile and desktop
- SweetAlert2 and React Toastify used for clear, smooth user feedback
- User avatar dropdown with access to:
  - My Artifacts
  - Liked Artifacts
  - Logout
- Form validations for passwords and URLs
- Loading spinner during data fetch operations

---

## 📌 Developer Notes

- MongoDB stores artifacts with `likeCount` initialized to 0
- Like/dislike toggle keeps frontend and backend in sync
- My Artifacts & Update pages show only user-created data
- Delete prompts a confirmation before removal
- All CRUD operations show appropriate alerts or toasts

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 📝 Credits

Built using React, Firebase, Express, and MongoDB.
