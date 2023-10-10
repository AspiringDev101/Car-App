-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for carrentals
CREATE DATABASE IF NOT EXISTS `carrentals` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `carrentals`;

-- Dumping structure for table carrentals.brands
CREATE TABLE IF NOT EXISTS `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table carrentals.brands: ~2 rows (approximately)
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` (`id`, `Name`) VALUES
	(1, 'Audi'),
	(2, 'BMW');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;

-- Dumping structure for table carrentals.cars
CREATE TABLE IF NOT EXISTS `cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `model_id` int(11) NOT NULL,
  `transmission` varchar(255) NOT NULL,
  `engine_size` int(11) DEFAULT NULL,
  `fuel_type` varchar(255) NOT NULL,
  `car_body_type` varchar(255) NOT NULL,
  `drive_unit` varchar(255) NOT NULL,
  `number` varchar(255) DEFAULT NULL,
  `color` varchar(255) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `odometer` varchar(255) DEFAULT NULL,
  `fuel_level` decimal(5,2) DEFAULT NULL,
  `tank_volume` int(11) DEFAULT NULL,
  `consumption` decimal(5,2) DEFAULT NULL,
  `number_of_seats` int(11) DEFAULT NULL,
  `number_of_doors` int(11) DEFAULT NULL,
  `large_airbags` int(11) DEFAULT NULL,
  `small_airbags` int(11) DEFAULT NULL,
  `vin` varchar(17) NOT NULL,
  `imei_tracker` varchar(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `number` (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table carrentals.cars: ~2 rows (approximately)
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` (`id`, `group_id`, `brand_id`, `model_id`, `transmission`, `engine_size`, `fuel_type`, `car_body_type`, `drive_unit`, `number`, `color`, `year`, `odometer`, `fuel_level`, `tank_volume`, `consumption`, `number_of_seats`, `number_of_doors`, `large_airbags`, `small_airbags`, `vin`, `imei_tracker`) VALUES
	(1, 1, 1, 1, 'Automatic', 1800, 'Gas', 'Hatchback', 'Front', 'AB124ED', 'Red', 2017, '200,000km', 90.00, 40, 5.50, 5, 2, 1, 1, '23432432532', 'IMEI34423545'),
	(2, 2, 1, 2, 'Automatic', 2000, 'Gas', 'Sedan', 'Front', 'CD435EF', 'Blue', 2022, '180,000km', 65.20, 55, 6.20, 5, 4, 2, 2, '12345678901', 'IMEI98765432');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;

-- Dumping structure for table carrentals.groups
CREATE TABLE IF NOT EXISTS `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table carrentals.groups: ~5 rows (approximately)
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` (`id`, `Name`) VALUES
	(1, 'Compact'),
	(2, 'Economy'),
	(3, 'Luxury'),
	(4, 'Minivan'),
	(5, 'SUV');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;

-- Dumping structure for table carrentals.models
CREATE TABLE IF NOT EXISTS `models` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brand_id` (`brand_id`),
  CONSTRAINT `models_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table carrentals.models: ~4 rows (approximately)
/*!40000 ALTER TABLE `models` DISABLE KEYS */;
INSERT INTO `models` (`id`, `brand_id`, `name`) VALUES
	(1, 1, 'Audi A3'),
	(2, 1, 'Audi A5'),
	(3, 2, 'BMW 3 Series'),
	(4, 2, 'BMW 5 Series');
/*!40000 ALTER TABLE `models` ENABLE KEYS */;

-- Dumping structure for table carrentals.seasons
CREATE TABLE IF NOT EXISTS `seasons` (
  `SeasonID` int(11) NOT NULL AUTO_INCREMENT,
  `SeasonName` varchar(255) DEFAULT '',
  `StartingDate` date DEFAULT NULL,
  `EndingDate` date DEFAULT NULL,
  `Margin` int(11) DEFAULT NULL,
  `Status` int(11) NOT NULL,
  PRIMARY KEY (`SeasonID`),
  KEY `SeasonID` (`SeasonID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table carrentals.seasons: ~31 rows (approximately)
/*!40000 ALTER TABLE `seasons` DISABLE KEYS */;
INSERT INTO `seasons` (`SeasonID`, `SeasonName`, `StartingDate`, `EndingDate`, `Margin`, `Status`) VALUES
	(1, 'Summer season', '2023-09-25', '2023-09-25', 30, 0),
	(2, 'df', '2023-09-08', '2023-09-20', 30, 0),
	(3, 'dfd', '2023-08-31', '2023-09-07', 3, 1),
	(4, 'dd', '2023-09-16', '2023-09-22', 5, 1),
	(5, 'chk', '2023-09-12', '2023-09-21', 4, 1),
	(6, 'fv', '2023-09-29', '2023-09-29', 3, 0),
	(7, 'fff', '2023-09-28', '2023-10-04', 3, 1),
	(8, 'dfd', '2023-09-23', '2023-09-22', 3, 1),
	(9, 'd4', '2023-09-22', '2023-09-28', 4, 0),
	(10, 'dfd', '2023-10-14', '2023-10-20', 2, 0),
	(11, 'KNOW IS ', '2023-10-07', '2023-10-20', 4, 0),
	(12, 'uyu', '2023-10-21', '2023-10-18', 2, 0),
	(13, 'uyu', '2023-10-21', '2023-10-18', 2, 0),
	(14, 'dfd', '2023-10-28', '2023-11-01', 44, 0),
	(15, 'fdsf', '2023-10-27', '2023-10-18', 2, 0),
	(16, 'dfdw', '2023-10-19', '2023-10-28', 44, 0),
	(17, 'fdfds', '2023-10-19', '2023-10-19', 33, 0),
	(18, 'dfdfd fff', '2023-10-18', '2023-10-25', 3, 0),
	(19, 'fdw', '2023-10-14', '2023-11-06', 33, 1),
	(20, 'kls', '2023-10-25', '2023-10-21', 3, 0),
	(21, 'irtizza', '2023-10-26', '2023-10-18', 3, 0),
	(22, 'addw', '2023-10-27', '2023-10-19', 3, 0),
	(23, 'erer', '2023-10-20', '2023-10-10', 4, 0),
	(24, 'dffdg', '2023-10-26', '2023-10-26', 4, 0),
	(25, 'fddw', '2023-10-26', '2023-10-11', 4, 0),
	(26, 'ddfd', '2023-10-28', '2023-10-27', 3, 0),
	(27, 'ADD', '2023-11-03', '2023-10-22', 44, 0),
	(28, 'FD', '2023-11-04', '2023-11-04', 3, 0),
	(29, 'ADF', '2023-10-20', '2023-10-17', 4, 0),
	(30, 'FGF', '2023-10-27', '2023-10-28', 2, 0),
	(31, 'check', '2023-10-14', '2023-10-25', 3, 0),
	(32, 'klkdjf', '2023-10-26', '2023-11-03', 3, 0),
	(33, 'ksneo', '2023-10-27', '2023-11-02', 6, 0),
	(34, 'irtiza test', '2023-11-04', '2023-10-20', 3, 0),
	(35, 'know', '2023-11-02', '2023-11-02', 3, 0),
	(36, 'finales', '2023-10-24', '2023-10-26', 7, 1);
/*!40000 ALTER TABLE `seasons` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
