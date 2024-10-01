USE TafriHolidays;

-- Check and create the database if it doesn't exist (optional)
CREATE DATABASE IF NOT EXISTS TafriHolidays;

DELIMITER //
CREATE PROCEDURE ApproveUser
(
    IN UserEmail VARCHAR(255),
    IN UserPassword VARCHAR(255)
)
BEGIN
    UPDATE Users
    SET AdminStatus = 'Approved'
    WHERE Users.UserEmail = UserEmail
    AND Users.UserPassword = UserPassword
    AND TIMESTAMPDIFF(MINUTE, Users.DateTimeOfRegistration, NOW()) > 15;
END // 

DELIMITER //
CREATE PROCEDURE ActivateSupplier
(
    IN p_SupplierId INT
)
BEGIN
    UPDATE Suppliers
    SET AdminStatus = 'Approved'
    WHERE SupplierId = p_SupplierId;
END // 

DELIMITER //
CREATE PROCEDURE DeactivateSupplier
(
    IN p_SupplierId INT
)
BEGIN
    UPDATE Suppliers
    SET AdminStatus = 'Pending'
    WHERE SupplierId = p_SupplierId;
END // 

DELIMITER //
CREATE PROCEDURE ActivateUser
(
    IN p_UserId INT
)
BEGIN
    UPDATE Users
    SET AdminStatus = 'Approved'
    WHERE UserId = p_UserId;
END // 

DELIMITER //
CREATE PROCEDURE DeactivateUser
(
    IN p_UserId INT
)
BEGIN
    UPDATE Users
    SET AdminStatus = 'Pending'
    WHERE UserId = p_UserId;
END // 

DELIMITER //
CREATE PROCEDURE AddCompanyProfit
(
    IN p_PackageId INT
)
BEGIN
    UPDATE Packages 
    SET CompanyProfit = PackagePrice * 0.25
    WHERE PackageId = p_PackageId;
END // 

DELIMITER //
CREATE PROCEDURE ApprovePackage -- For Admins
(
    IN p_PackageId INT
)
BEGIN
    UPDATE Packages 
    SET AdminStatus = 'Approved'
    WHERE PackageId = p_PackageId;

    CALL AddCompanyProfit(p_PackageId);
END // 

DELIMITER //
CREATE PROCEDURE DisapprovePackage -- For Admins
(
    IN p_PackageId INT
)
BEGIN
    UPDATE Packages 
    SET AdminStatus = 'Pending'
    WHERE PackageId = p_PackageId;
END // 

DELIMITER //
CREATE PROCEDURE GetCompanyProfits()
BEGIN
    SELECT 
        PackageId, 
        PackagePrice, 
        CompanyProfit AS 'Margin', 
        COUNT(PackageId) AS 'Total Bookings', 
        CompanyProfit * COUNT(PackageId) AS 'Total Profit'
    FROM Bookings 
    INNER JOIN Packages 
    ON Bookings.PackageId = Packages.PackageId 
    GROUP BY PackageId;
END // 

DELIMITER //
CREATE PROCEDURE GetRevenueByPackage()
BEGIN
    SELECT 
        PackageId, 
        SupplierId, 
        PackageName, 
        CalculateSupplierProfitByPackage(PackageId) AS 'SupplierProfit', 
        CalculateRevenueByPackage(PackageId) AS 'Revenue'
    FROM Packages;
END // 

DELIMITER //
CREATE FUNCTION CalculateRevenueByPackage(p_PackageId INT) RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE revenue INT;

    SELECT IFNULL(SUM(CompanyProfit), 0)
    INTO revenue
    FROM Packages 
    INNER JOIN Bookings 
    ON Bookings.PackageId = Packages.PackageId 
    WHERE PackageId = p_PackageId;

    RETURN revenue;
END // 

DELIMITER //
CREATE FUNCTION CalculateSupplierProfitByPackage(p_PackageId INT) RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE revenue INT;

    SELECT IFNULL(SUM(PackagePrice), 0)
    INTO revenue
    FROM Packages 
    INNER JOIN Bookings 
    ON Bookings.PackageId = Packages.PackageId 
    WHERE PackageId = p_PackageId;

    RETURN revenue;
END // 

DELIMITER //
CREATE PROCEDURE LoginAdmin()
BEGIN
    -- No logic yet; consider adding comments or leaving it empty as is.
END //
DELIMITER ;
