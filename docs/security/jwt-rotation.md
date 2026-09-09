# JWT Rotation & Revocation

- Access tokens: 15-minute lifespan.
- Refresh tokens: Stored in HTTP-only SameSite cookies.
- Reuse detection: If a refresh token is used twice, all associated sessions are invalidated immediately.
