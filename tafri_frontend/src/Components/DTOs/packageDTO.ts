// src/Models/DTOs/packageDTO.ts

export interface PackageDTO {
    packageId: number;         // Unique identifier for the package
    supplierId: number;        // Unique identifier for the supplier
    packageName: string;       // Name of the package
    packageDesc: string;       // Description of the package
    source: string;            // Starting location for the package
    destination: string;       // Destination for the package
    fasl: string;              // Flight and Accommodation Service Level (or similar)
    duration: number;          // Duration of the package in days
    packagePrice: number;      // Price of the package
    companyProfit: number;     // Profit made by the company
    quantity: number;          // Available quantity of the package
    supplierStatus: string;    // Status of the supplier (Active/Inactive)
    adminStatus: string;       // Approval status (Approved/Pending/Rejected)
  }
  