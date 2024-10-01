import React from "react";

export interface User{
    userName: string;
    userEmail: string;
    userPassword: string;
    userPhoneNumber: string;
    addressId: number;
    userDOB: Date | null; 
    userGender: 'Male' | 'Female' | 'Others';
    dateTimeOfRegistration: Date;
    adminStatus: 'Approved' | 'Pending';
}

export interface Supplier{
    SupplierId: number;
    SupplierName: string;
    SupplierContact: string;
    SupplierEmail: string;
    SupplierPassword: string;
    SupplierGSTNumber: string;
    SupplierAadhar: string;
    addressId: number;
    adminStatus: 'Approved' | 'Pending';
}

export interface Address { 
    AddressId: number;
    AddressDesc: string;
    City: string;
    State: string;
    Pincode: number;
    Lat: string | null;
    Lon : string | null;
}

export interface Packages{
    PackageId: number;
    SupplierId: number;
    PackageName: string;
    PackageDesc: string;
    Source: string;
    Destination: string;
    FASL: string;
    Duration: number;
    PackagePrice: number;
    CompanyProfit: number | 5000;
    Quantity: number | 1;
    SupplierStatus: 'Active' | 'Inactive';
    AdminStatus: 'Approved' | 'Pending';
    
}

export interface Bookings { 
    BookingId: number;
    UserId: number;
    PackageId: number;
    JourneyStartDatetime: Date;
    SupplierStatus: 'Confirmed' | 'Under Process';  
}

export interface Payments {
    PaymentId: number;
    BookingId: number;
    PaymentAmount: number;
    PaymentDatetime: Date;
    PaymentMode: string;
    PaymentStatus: 'Approved' | 'Pending';
 }

export interface Travellers{
    BookingId: number;
    PersonName: string;
    PersonPhoneNumber: string;
    AddressId: number;  // Address table reference
}

export interface UserSection{
    UserId: number; 
    PackageId : number,
    Section : string,
}

export interface AdminDetails{
    adminId : number;
    adminEmail : string;
    adminPassword : string;  
}
