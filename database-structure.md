# Database Structure Documentation

## ERD Implementation Summary

This Laravel application implements a comprehensive database structure based on the provided ERD diagrams.

### Admin Content Management System

**Admin Table** (`admins`)

- Primary Key: `id_admin`
- Fields: `email`, `password`, `username`
- Relationships: One-to-many with all content tables

**Content Tables** (All have foreign key to `admins.id_admin`)

1. **About Us** (`about_us`) - Company information
2. **News** (`news`) - News articles with publisher and date
3. **Journal** (`journal`) - Journal entries
4. **Events** (`events`) - Event listings
5. **Conferences** (`conferences`) - Conference information
6. **Education and Careers** (`education_and_careers`) - Educational content

### User Management System

**User Table** (`users`)

- Primary Key: `id_user`
- Fields: `email`, `password`, `full_name`, `address`, `zip_code`, `gender`, `phone`, `birth_date`

**User-Related Tables**

1. **Pencarian Members** (`pencarian_members`) - Member search functionality
2. **Jenis Mitra** (`jenis_mitras`) - Partner types
3. **Contacts** (`contacts`) - Contact information (related to both members and partners)

### Relationships

#### Admin System

- Admin → About Us (1:n)
- Admin → News (1:n)
- Admin → Journal (1:n)
- Admin → Events (1:n)
- Admin → Conferences (1:n)
- Admin → Education & Careers (1:n)

#### User System

- User → Pencarian Members (1:n)
- User → Jenis Mitra (1:n)
- Pencarian Members → Contacts (1:1)
- Jenis Mitra → Contacts (1:1)

### Migration Files Created

1. `create_admins_table.php` - Admin authentication
2. `create_about_us_table.php` - Company info
3. `create_news_table.php` - News management
4. `create_journal_table.php` - Journal entries
5. `create_events_table.php` - Event management
6. `create_conferences_table.php` - Conference listings
7. `create_education_and_careers_table.php` - Educational content
8. `create_pencarian_members_table.php` - Member search
9. `create_jenis_mitras_table.php` - Partner management
10. `create_contacts_table.php` - Contact information

### Models Created

All models include proper relationships, fillable attributes, and primary key configurations:

- `Admin.php`
- `AboutUs.php`
- `News.php`
- `User.php` (updated)

### Usage

To run all migrations:

```bash
php artisan migrate
```

To check migration status:

```bash
php artisan migrate:status
```

To rollback:

```bash
php artisan migrate:rollback
```
