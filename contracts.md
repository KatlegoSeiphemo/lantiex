# Lantiex Landing Page - API Contracts

## Current Implementation Status
- ✅ Frontend-only with mock data (localStorage)
- ✅ All UI components functional
- ✅ Newsletter form with validation
- ✅ Smooth scrolling navigation
- ✅ Mobile responsive design

## Mocked Data (in mock.js)
1. **Newsletter subscriptions** - stored in localStorage
2. **Site content** - static data (hero, about, newsletter, footer)

## Backend Integration Requirements

### 1. Newsletter Subscription API

**Endpoint:** `POST /api/newsletter/subscribe`

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Successfully subscribed!"
}
```

**Response (Already Subscribed):**
```json
{
  "success": false,
  "message": "You are already subscribed!"
}
```

**Response (Invalid Email):**
```json
{
  "success": false,
  "message": "Invalid email address"
}
```

### 2. Get Subscribers API (Optional - Admin)

**Endpoint:** `GET /api/newsletter/subscribers`

**Response:**
```json
{
  "subscribers": [
    {
      "id": "uuid",
      "email": "user@example.com",
      "subscribed_at": "2025-01-04T10:30:00Z"
    }
  ],
  "count": 1
}
```

## MongoDB Schema

### Newsletter Collection
```python
{
  "_id": ObjectId,
  "id": String (UUID),
  "email": String (unique, indexed),
  "subscribed_at": DateTime,
  "is_active": Boolean (default: True)
}
```

## Frontend Integration Changes

### Files to Update:
1. **src/components/Newsletter.jsx**
   - Replace `mockNewsletter.subscribe()` with API call to `/api/newsletter/subscribe`
   - Add proper error handling for network errors
   - Show loading state during submission

### Integration Steps:
1. Create backend model for Newsletter
2. Implement POST /api/newsletter/subscribe endpoint
3. Add email validation on backend
4. Check for duplicate emails (return appropriate message)
5. Update frontend Newsletter.jsx to use real API
6. Remove mock.js import from Newsletter.jsx
7. Test subscription flow end-to-end

## Notes
- Site content (hero, about, footer) can remain static in mock.js - no backend needed
- Newsletter is the only feature requiring database storage
- Email validation should happen on both frontend and backend
- Consider adding unsubscribe functionality in future iterations
