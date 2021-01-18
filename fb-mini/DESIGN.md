# Overview
The database will contain 3 tables: users, posts and friends.


# Users
| Users   |        |        |        |          |        |
|---------|--------|--------|--------|----------|--------|
| User Id | First  | Last   | bio    | birthday | Status |
| uuid     | string | string | string | int      | Enum   |

Ps: 
- Birthday is int because we store a date-stamp (more efficient)
- Status is an enumeration (single, married, ...)
# Posts
| Posts   |        |         |          |           |             |            |
|---------|--------|---------|----------|-----------|-------------|------------|
| Post Id | Text   | User Id | NumLikes | Media_Uri | Date Posted | Date Edited |
| uuid     | string | int     | int      | string    | int         | int        |

# Friends
| Friendships |             |             |          |        |              |
|-------------|-------------|-------------|----------|--------|--------------|
| RequestId   | RequestorId | RequestedId | DateSent | Status | DateAccepted |
| int         | int         | int         | int      | enum   | int          |