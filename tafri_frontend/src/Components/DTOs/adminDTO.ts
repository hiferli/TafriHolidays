// src/Models/DTOs/AdminDTO.ts

export interface AdminDTO {
    adminId: number;              // Unique identifier for the admin
    username: string;             // Username for the admin account
    email: string;                // Email address of the admin
    password: string;             // Hashed password of the admin
    role: string;                 // Role of the admin (SuperAdmin, Moderator, etc.)
    lastLogin: string;            // Timestamp of the last login
    status: string;               // Status of the admin (Active, Suspended, etc.)
  }
  