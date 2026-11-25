
# HelpDesk – Backend

A professional HelpDesk / Ticketing System backend built with **Python, FastAPI, PostgreSQL, SQLAlchemy 2.0, and Alembic**.

This project is currently focused on the database layer. It provides the foundation for managing users, support tickets, comments, and ticket categories.

---

## 1. Technologies

| Technology | Purpose |
|---|---|
| Python 3.12+ | Backend programming language |
| FastAPI | Backend framework |
| PostgreSQL | Relational database |
| SQLAlchemy 2.0 | ORM and database models |
| Alembic | Database migrations |
| Pydantic | Data validation and settings |
| uv | Python dependency management |
| Pytest | Automated testing |
| Argon2 / bcrypt | Password hashing |

---

## 2. Project Structure

```text
backend/
│
├── app/
│   ├── core/
│   │   └── config.py
│   │
│   ├── db/
│   │   ├── base.py
│   │   ├── session.py
│   │   └── init_db.py
│   │
│   ├── models/
│   │   ├── user.py
│   │   ├── ticket.py
│   │   ├── comment.py
│   │   └── category.py
│   │
│   └── main.py
│
├── alembic/
│
├── tests/
│
├── .env
├── .env.example
├── alembic.ini
├── pyproject.toml
└── README.md
```

### Folder and File Responsibilities

#### `app/core/`

Contains application-wide configuration.

**config.py**
- Loads environment variables.
- Defines application settings.
- Manages database configuration.
- Uses Pydantic Settings.

#### `app/db/`

Contains database connection and initialization logic.

**base.py**
- Defines the SQLAlchemy declarative base.
- Provides the base class for database models.
- Makes model metadata available to Alembic.

**session.py**
- Creates the SQLAlchemy engine.
- Configures database connections.
- Creates the session factory.
- Provides database sessions.

**init_db.py**
- Initializes default database data.
- Creates default ticket categories.
- Provides initial administrator setup.

#### `app/models/`

Contains SQLAlchemy database models.

**user.py**
- Defines the Users table.
- Stores customers, agents, and administrators.
- Contains user roles and account status.

**ticket.py**
- Defines the Tickets table.
- Stores support ticket information.
- Connects customers, assigned agents, and categories.
- Contains ticket status and priority.

**comment.py**
- Defines the Comments table.
- Stores ticket conversation messages.
- Connects comments to tickets and their authors.

**category.py**
- Defines the Categories table.
- Stores ticket categories.
- Connects categories to tickets.

#### `app/main.py`

- Creates the FastAPI application.
- Provides the application entry point.
- Will include API routers in future development phases.

#### `alembic/`

Contains database migration scripts.

- Tracks database schema changes.
- Generates migration versions.
- Applies and rolls back database changes.

#### `tests/`

Contains automated tests.

- Database connection tests.
- Model relationship tests.
- Constraint tests.
- CRUD operation tests.

---

## 3. Database Architecture

The application uses four main tables.

| Table | Description |
|---|---|
| users | Stores all application users |
| tickets | Stores customer support tickets |
| comments | Stores ticket conversations |
| categories | Stores ticket categories |

### User Roles

The application has exactly three roles:

| Role | Responsibilities |
|---|---|
| customer | Creates and tracks support tickets |
| agent | Manages and resolves tickets |
| admin | Manages users, categories, and the system |

All three roles are stored in one `users` table using a `role` column.

### Entity Relationships

- One customer can create multiple tickets.
- One agent can be assigned multiple tickets.
- One category can contain multiple tickets.
- One ticket can have multiple comments.
- One user can write multiple comments.
- Every ticket belongs to one customer.
- A ticket can have zero or one assigned agent.

### ER Diagram

```mermaid
erDiagram
    USERS ||--o{ TICKETS : creates
    USERS o|--o{ TICKETS : assigned_to
    CATEGORIES ||--o{ TICKETS : categorizes
    TICKETS ||--o{ COMMENTS : contains
    USERS ||--o{ COMMENTS : writes

    USERS {
        UUID id PK
        VARCHAR name
        VARCHAR email UK
        VARCHAR hashed_password
        VARCHAR role
        BOOLEAN is_active
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }

    TICKETS {
        UUID id PK
        VARCHAR ticket_number UK
        VARCHAR title
        TEXT description
        VARCHAR status
        VARCHAR priority
        UUID customer_id FK
        UUID assigned_agent_id FK
        UUID category_id FK
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }

    COMMENTS {
        UUID id PK
        UUID ticket_id FK
        UUID user_id FK
        TEXT message
        TIMESTAMP created_at
    }

    CATEGORIES {
        UUID id PK
        VARCHAR name UK
        TEXT description
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }
```

---

## 4. Ticket Configuration

### Ticket Status

| Status | Description |
|---|---|
| Open | Newly created ticket |
| In Progress | Agent is working on the ticket |
| Waiting for Customer | Waiting for customer information |
| Resolved | Issue has been resolved |
| Closed | Ticket is closed |

### Ticket Priority

| Priority | Description |
|---|---|
| Low | Minor issue |
| Medium | Normal issue |
| High | Important issue |
| Urgent | Requires immediate attention |

### Default Categories

1. Technical Issue
2. Billing
3. Account Problem
4. Feature Request
5. Other

---

## 5. Environment Configuration

Create a `.env` file in the backend root directory.

Example:

```env
APP_NAME=HelpDesk API
APP_ENV=development
DEBUG=True

DATABASE_URL=postgresql+psycopg://postgres:password@localhost:5432/helpdesk_db
```

Create `.env.example` with the same variable names but placeholder values.

**Important:** Never commit `.env` to Git.

---

## 6. Installation

### Prerequisites

Make sure you have installed:

- Python 3.12+
- PostgreSQL
- uv
- Git

### Step 1: Navigate to backend

```bash
cd backend
```

### Step 2: Initialize Python project

If `pyproject.toml` does not already exist:

```bash
uv init
```

If it already exists, skip this command.

### Step 3: Install dependencies

```bash
uv add fastapi uvicorn sqlalchemy alembic psycopg pydantic-settings python-dotenv
```

Install testing dependencies:

```bash
uv add --dev pytest
```

### Step 4: Synchronize dependencies

```bash
uv sync
```

### Step 5: Configure PostgreSQL

Create the database:

```sql
CREATE DATABASE helpdesk_db;
```

Update the database URL in `.env`.

---

## 7. Database Migrations

Alembic manages database schema changes.

### Initialize Alembic

```bash
uv run alembic init alembic
```

Only run this once.

### Generate the initial migration

```bash
uv run alembic revision --autogenerate -m "create initial tables"
```

### Apply migrations

```bash
uv run alembic upgrade head
```

### Check migration history

```bash
uv run alembic history
```

### Check current migration

```bash
uv run alembic current
```

### Roll back one migration

```bash
uv run alembic downgrade -1
```

---

## 8. Running the Application

Start the FastAPI development server:

```bash
uv run uvicorn app.main:app --reload
```

Application URL:

```text
http://127.0.0.1:8000
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

**Note:** During the database-only phase, API endpoints are not implemented yet.

---

## 9. Testing

Run all tests:

```bash
uv run pytest
```

Run tests with verbose output:

```bash
uv run pytest -v
```

Run a specific test file:

```bash
uv run pytest tests/test_models.py -v
```

### Recommended Test Cases

- Verify database connection.
- Verify UUID primary keys.
- Verify unique email constraint.
- Verify unique ticket number.
- Verify valid user roles.
- Verify valid ticket statuses.
- Verify valid ticket priorities.
- Verify customer-ticket relationships.
- Verify agent-ticket relationships.
- Verify ticket-comment relationships.
- Verify category-ticket relationships.
- Verify safe foreign key deletion behavior.

---

## 10. Security and Database Rules

- Passwords must be stored as hashes, never plaintext.
- Email addresses must be unique.
- Customers can only access their own tickets.
- Agents can access tickets according to their permissions.
- Only administrators can manage users and categories.
- Public registration must always create a customer account.
- Agent and administrator accounts must be created through a protected process.
- Assigned agents must be nullable.
- Users with existing tickets or comments must not be deleted in a way that destroys historical records.
- Database credentials must be stored in environment variables.

**Important:** Role-based authorization is enforced in the backend application, not just through database constraints.

---

## 11. Development Roadmap

| Phase | Feature | Status |
|---|---|---|
| 1 | Project setup and structure | Planned |
| 2 | PostgreSQL and SQLAlchemy models | Planned |
| 3 | Alembic migrations and seed data | Planned |
| 4 | Authentication and user roles | Planned |
| 5 | Ticket CRUD operations | Planned |
| 6 | Ticket comments and conversations | Planned |
| 7 | Customer dashboard | Planned |
| 8 | Support agent dashboard | Planned |
| 9 | Admin dashboard and statistics | Planned |
| 10 | Frontend integration | Planned |
| 11 | Testing and Docker | Planned |

---

## 12. Future Improvements

After implementing the first database version, consider adding:

- Ticket attachments.
- Ticket status history.
- Ticket assignment history.
- Notifications.
- Refresh token management.
- Audit logs.

These features can be introduced through additional SQLAlchemy models and Alembic migrations when needed.

---

## 13. License

This project is developed for educational and practical full-stack development purposes.
