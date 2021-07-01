-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 01-07-2021 a las 14:18:39
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `s1_sys`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `candidate`
--

DROP TABLE IF EXISTS `candidate`;
CREATE TABLE IF NOT EXISTS `candidate` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Lastname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Location` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Phone` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Lastjob` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Salary` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Comentaries` varchar(1500) COLLATE utf8_unicode_ci NOT NULL,
  `Vacancy` int(11) NOT NULL,
  `Date` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Candidate_fk0` (`Vacancy`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `englishlevel`
--

DROP TABLE IF EXISTS `englishlevel`;
CREATE TABLE IF NOT EXISTS `englishlevel` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Description` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `englishlevel`
--

INSERT INTO `englishlevel` (`ID`, `Description`) VALUES
(1, 'No aplica'),
(2, 'Principiante'),
(3, 'Elemental'),
(4, 'Pre-intermedio'),
(5, 'Intermedio avanzado'),
(6, 'Avanzado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profile`
--

DROP TABLE IF EXISTS `profile`;
CREATE TABLE IF NOT EXISTS `profile` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Vacancy` int(11) NOT NULL,
  `Description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Percentage` int(11) NOT NULL,
  `Type` int(11) NOT NULL,
  `Status` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Profile_fk0` (`Vacancy`),
  KEY `Profile_fk1` (`Type`),
  KEY `Profile_fk2` (`Status`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

DROP TABLE IF EXISTS `status`;
CREATE TABLE IF NOT EXISTS `status` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Description` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`ID`, `Description`) VALUES
(1, 'Abierta'),
(2, 'Cerrada'),
(3, 'Cancelada'),
(4, 'En espera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Description` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `type`
--

INSERT INTO `type` (`ID`, `Description`) VALUES
(1, 'Competencia Hard'),
(2, 'Competencia Soft');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacancy`
--

DROP TABLE IF EXISTS `vacancy`;
CREATE TABLE IF NOT EXISTS `vacancy` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `VacancyName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Location` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaxSalary` decimal(10,0) DEFAULT NULL,
  `MinSalary` decimal(10,0) DEFAULT NULL,
  `EnglishLevel` int(11) DEFAULT NULL,
  `Description` varchar(2500) COLLATE utf8_unicode_ci NOT NULL,
  `LaborExperience` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `Scholarship` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `Created` datetime NOT NULL,
  `CreatedBy` int(11) NOT NULL,
  `Modified` datetime NOT NULL,
  `ModifiedBy` int(11) NOT NULL,
  `Estatus` int(11) NOT NULL,
  `ShowSalary` tinyint(1) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Vacancy_fk0` (`EnglishLevel`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
