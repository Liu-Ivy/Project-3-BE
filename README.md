# Auth backend server


💣💣💣💣 rename the file `.env.sample` to `.env` and spicify your database name; 💣💣💣💣

## Routes

| Method | Path | Description |
|--------|------|-------------|
| `get`  | `/auth/me` | check if i'm logged |
| `post` | `/auth/login` | login |
| `post` | `/auth/signup` | signup |
| `post` | `/auth/logut` | logout |
| `get`  | `/auth/private` | private route for test |