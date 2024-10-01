// src/Models/DTOs/SupplierDTO.ts

export interface SupplierDTO {
    supplierId: number;           // Unique identifier for the supplier
    supplierName: string;         // Name of the supplier
    contactPerson: string;        // Name of the contact person
    email: string;                // Email address of the supplier
    phone: string;                // Phone number of the supplier
    address: string;              // Physical address of the supplier
    registrationDate: string;     // Date when the supplier registered
    status: string;               // Status of the supplier (Active, Inactive, etc.)
  }
  