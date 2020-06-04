---
id: api
title: Backend API Docs
---

All the api exposed by the app are documented here.

## APIs

**Get All Online Users**

Route: `/api/list`
Method: **GET**

Response: 

```json
[
  {
    "_id": "5ed779baf9bb2c44f1733202",
    "username": "darshkpatel",
    "pod": "Pod 0.3.2",
    "podId": "38677",
    "online": true,
    "__v": 0,
    "room": null,
    "profile": [
      {
        "_id": "5ed8cd1b69b676edffe8d191",
        "nickname": "darshkpatel",
        "name": "Darsh Patel",
        "picture": "https://avatars0.githubusercontent.com/u/11258286?v=4",
        "updated_at": "2020-06-04T05:37:44.469Z",
        "sub": "",
        "__v": 0
      }
    ]
  }
]
```

**Getting a Room**

Route: `/api/rooms/create`
Method: **GET**

Response:

```json
{
    "message":""
}

```

**Open Room**

Route: `/api/redirect/:id`
Method: **GET**

Response:

**Login**

Route: `/api/loign`
Method: **GET**

Response:

**Logout**

Route: `/api/logout`
Method: **GET**

Response: