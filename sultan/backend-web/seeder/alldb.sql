-- MySQL dump 10.19  Distrib 10.3.34-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: 
-- ------------------------------------------------------
-- Server version	10.3.34-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+07:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `sqlearn_cs_auto_assess_tes`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_auto_assess_tes`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_auto_assess_tes` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_auto_assess_tes`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_auto_assess_tes_47_1_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_auto_assess_tes_47_1_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_auto_assess_tes_47_1_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_auto_assess_tes_47_1_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_auto_assess_tes_47_1_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_auto_assess_tes_47_1_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_auto_assess_tes_47_1_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_auto_assess_tes_47_1_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_auto_assess_tes_52_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_auto_assess_tes_52_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_auto_assess_tes_52_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_auto_assess_tes_52_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_auto_assess_tes_52_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_auto_assess_tes_52_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_auto_assess_tes_52_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_auto_assess_tes_52_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_auto_assess_tes_57_22_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_auto_assess_tes_57_22_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_auto_assess_tes_57_22_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_auto_assess_tes_57_22_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_auto_assess_tes_57_22_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_auto_assess_tes_57_22_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_auto_assess_tes_57_22_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_auto_assess_tes_57_22_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_auto_assess_tes_59_19_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_auto_assess_tes_59_19_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_auto_assess_tes_59_19_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_auto_assess_tes_59_19_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_auto_assess_tes_59_19_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_auto_assess_tes_59_19_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_auto_assess_tes_59_19_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_auto_assess_tes_59_19_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_auto_assess_tes_61_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_auto_assess_tes_61_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_auto_assess_tes_61_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_auto_assess_tes_61_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_auto_assess_tes_61_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_auto_assess_tes_61_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_auto_assess_tes_61_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_auto_assess_tes_61_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_auto_assess_2r10iw`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_auto_assess_2r10iw`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_auto_assess_2r10iw` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_auto_assess_2r10iw`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_46_1_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_46_1_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_46_1_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_46_1_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_46_1_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_46_1_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_46_1_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_46_1_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_48_1_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_48_1_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_48_1_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_48_1_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_48_1_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_48_1_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_48_1_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_48_1_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_49_1_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_49_1_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_49_1_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_49_1_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_49_1_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_49_1_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_49_1_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_49_1_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_50_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_50_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_50_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_50_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_50_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_50_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_50_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_50_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_51_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_51_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_51_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_51_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_51_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_51_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_51_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_51_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_53_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_53_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_53_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_53_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_53_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_53_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_53_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_53_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_54_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_54_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_54_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_54_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_54_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_54_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_54_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_54_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_55_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_55_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_55_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_55_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_55_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_55_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_55_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_55_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_56_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_56_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_56_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_56_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_56_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_56_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_56_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_56_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_58_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_58_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_58_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_58_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_58_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_58_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_58_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_58_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_60_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_60_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_60_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_60_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_60_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_60_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_60_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_60_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_62_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_62_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_62_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_62_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_62_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_62_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_62_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_62_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_63_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_63_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_63_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_63_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_63_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_63_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_63_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_63_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_64_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_64_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_64_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_64_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_64_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_64_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_64_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_64_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_65_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_65_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_65_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_65_21_key`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_65_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_65_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_65_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_coba_di_deploy_wvj429_65_21_student`;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `kelas` varchar(10) NOT NULL,
  `ipk` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_mahasiswa`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES (1,'Daffa','4C',3.00),(2,'Akbar','4D',3.50),(5,'Dwiputra','4A',2.00),(6,'Damarriyanto','4A',2.50),(7,'John','4B',3.00),(8,'Doe','4B',2.50),(9,'Jane','4C',4.00),(10,'Budi','4D',3.50),(11,'Ani','4C',3.00);
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `waktu_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_mahasiswa` int(11) NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_ibfk_1` (`id_mahasiswa`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (25,'1741720001','2021-04-14 03:40:49',1),(26,'1741720002','2021-05-19 03:40:49',2),(27,'1741720003','2021-05-21 03:40:49',5),(28,'1741720004','2021-05-27 03:44:59',6),(29,'1741720005','2021-05-27 03:44:59',7),(30,'1741720006','2021-05-26 03:40:49',8),(31,'1741720007','2021-05-27 03:44:59',9),(32,'1741720008','2021-05-25 03:40:49',10),(33,'1741720009','2021-05-27 04:02:50',11);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl`;

--
-- Table structure for table `dosen`
--

DROP TABLE IF EXISTS `dosen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dosen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_dosen` varchar(255) NOT NULL,
  `nama_dosen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dosen`
--

LOCK TABLES `dosen` WRITE;
/*!40000 ALTER TABLE `dosen` DISABLE KEYS */;
INSERT INTO `dosen` VALUES (1,'D001','Abdul Chalim, SAg., MPd.I'),(2,'D002','Ade Ismail'),(3,'D003','Agung Nugroho Pramudhita ST., MT.'),(4,'D004','Ahmadi Yuli Ananta ST., MM.'),(5,'D005','Ane Fany Novitasari, SH.MKn.'),(6,'D006','Annisa Puspa Kirana MKom.'),(7,'D007','Annisa Taufika Firdausi ST., MT.'),(8,'D008','Anugrah Nur Rahmanto SSn., MDs.'),(9,'D009','Ariadi Retno Ririd SKom., MKom.'),(10,'D010','Arie Rachmad Syulistyo SKom., MKom.'),(11,'D011','Arief Prasetyo SKom., MKom.'),(12,'D012','Arwin Sumari ST., MT., DR.'),(13,'D013','Atiqah Nurul Asri SPd., MPd.'),(14,'D014','Bagas Satya Dian Nugraha, ST., MT.'),(15,'D015','Banni Satria Andoko, S. Kom., M.MSI'),(16,'D016','Budi Harijanto ST., MMKom.'),(17,'D017','Cahya Rahmad ST., MKom. DR.Eng'),(18,'D018','Candra Bella Vista SKom., MT.'),(19,'D019','Candrasena Setiadi ST., MMT.'),(20,'D020','Deasy Sandhya Elya Ikawati SSi., MSi.'),(21,'D021','Deddy Kusbianto PA Ir. MMKom.'),(22,'D022','Dhebys Suryani SKom. MT.'),(23,'D023','Dian Hanifudin Subhi SKom., MT.'),(24,'D024','Dika Rizky Yunianto SKom., MKom.'),(25,'D025','Dimas Wahyu Wibowo ST., MT.'),(26,'D026','Dodit Supriyanto SKom., MT.'),(27,'D027','Dwi Puspitasari SKom., MKom.'),(28,'D028','Eka Larasati Amalia, SST., MT.'),(29,'D029','Ekojono, ST., M.Kom.'),(30,'D030','Elok Nur Hamdana, ST., MT'),(31,'D031','Erfan Rohadi, ST., MEng., PhD.'),(32,'D032','Faiz Ushbah Mubarok, SPd., MPd.'),(33,'D033','Farid Angga Pribadi, SKom.,MKom.'),(34,'D034','Farida Ulfa, SPd., MPd.'),(35,'D035','Gunawan Budi Prasetyo, ST., MMT., Ph.D.'),(36,'D036','Habibie Ed Dien, MT.'),(37,'D037','Hairus'),(38,'D038','Hendra Pradibta, SE., M.Sc.'),(39,'D039','Ika Kusumaning Putri, MT.'),(40,'D040','Imam Fahrur Rozi, ST., MT.'),(41,'D041','Indra Dharma Wijaya, ST., MMT.'),(42,'D042','Irsyad Arif Mashudi, M.Kom'),(43,'D043','Kadek Suarjuna Batubulan, SKom, MT.'),(44,'D044','Luqman Affandi, SKom., MMSI.'),(45,'D045','M. Hasyim Ratsanjani'),(46,'D046','Mamluatul Haniah'),(47,'D047','Meyti Eka Apriyani ST., MT.'),(48,'D048','Milyun Nima Shoumi'),(49,'D049','Moch. Zawaruddin Abdullah, S.ST., M.Kom'),(50,'D050','Moh. Amin'),(51,'D051','Muhammad Afif Hendrawan, S.Kom.'),(52,'D052','Muhammad Shulhan Khairy, SKom., MKom.'),(53,'D053','Muhammad Unggul Pamenang, SSt., MT.'),(54,'D054','Mungki Astiningrum, ST., MKom.'),(55,'D055','Mustika Mentari, SKom., MKom.'),(56,'D056','Noprianto'),(57,'D057','Odhitya Desta Triswidrananta, SPd., MPd.'),(58,'D058','Pramana Yoga Saputra, SKom., MMT.'),(59,'D059','Putra Prima A., ST., MKom.'),(60,'D060','Rakhmat Arianto SST., MKom.'),(61,'D061','Rawansyah., Drs., MPd.'),(62,'D062','Retno Damayanti, SPd.'),(63,'D063','Ridwan Rismanto, SST., MKom.'),(64,'D064','Rizki Putri Ramadhani, S.S., M.Pd.'),(65,'D065','Rizky Ardiansyah, SKom., MT.'),(66,'D066','Robby Anggriawan SE., ME.'),(67,'D067','Rokhimatul Wakhidah SPd. MT.'),(68,'D068','Rosa Andrie Asmara, ST., MT., Dr. Eng.'),(69,'D069','Rudy Ariyanto, ST., MCs.'),(70,'D070','Satrio Binusa S, SS, M.Pd'),(71,'D071','Septian Enggar Sukmana, SPd., MT.'),(72,'D072','Shohib Muslim'),(73,'D073','Siti Romlah, Dra., M.M.'),(74,'D074','Sofyan Noor Arief, S.ST., M.Kom.'),(75,'D075','Ulla Delfiana Rosiani, ST., MT.'),(76,'D076','Usman Nurhasan, S.Kom., MT.'),(77,'D077','Very Sugiarto, SPd., MKom.'),(78,'D078','Vipkas Al Hadid Firdaus, ST.,MT.'),(79,'D079','Vivi Nur Wijayaningrum, S.Kom, M.Kom'),(80,'D080','Vivin Ayu Lestari, SPd.'),(81,'D081','Widaningsih Condrowardhani, SH., MH.'),(82,'D082','Wilda Imama Sabilla, S.Kom., M.Kom.'),(83,'D083','Yoppy Yunhasnawa, SST., MSc.'),(84,'D084','Yuri Ariyanto, SKom., MKom.'),(85,'D085','Zulmy Faqihuddin Putera, S.Pd., M.Pd');
/*!40000 ALTER TABLE `dosen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hari`
--

DROP TABLE IF EXISTS `hari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_hari` varchar(255) NOT NULL,
  `nama_hari` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hari`
--

LOCK TABLES `hari` WRITE;
/*!40000 ALTER TABLE `hari` DISABLE KEYS */;
INSERT INTO `hari` VALUES (1,'001','Senin'),(2,'002','Selasa'),(3,'003','Rabu'),(4,'004','Kamis'),(5,'005','Jumat'),(6,'006','Sabtu'),(7,'007','Minggu');
/*!40000 ALTER TABLE `hari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jadwal`
--

DROP TABLE IF EXISTS `jadwal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jadwal` varchar(255) NOT NULL,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_dosen` varchar(255) NOT NULL,
  `kode_mk` varchar(255) NOT NULL,
  `kode_ruang` varchar(255) NOT NULL,
  `kode_hari` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=371 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jadwal`
--

LOCK TABLES `jadwal` WRITE;
/*!40000 ALTER TABLE `jadwal` DISABLE KEYS */;
INSERT INTO `jadwal` VALUES (1,'1','2021020101','D001','02001','0504','001','7','9'),(2,'2','2021010103','D001','02001','0506','002','9','11'),(3,'3','2021010105','D001','02001','0806','003','10','12'),(4,'4','2021010102','D001','02001','0506','004','1','3'),(5,'5','2021010106','D001','02001','0806','004','4','6'),(6,'6','2021010101','D001','02001','0506','004','7','9'),(7,'7','2021010104','D001','02001','0506','005','10','12'),(8,'8','2021010206','D002','02037','0702','001','7','12'),(9,'9','2021020202','D002','02036','0708','003','2','4'),(10,'10','2021010205','D002','02037','0713','004','1','6'),(11,'11','2021020209','D002','02025','0719','004','7','12'),(12,'12','2021020301','D003','02012','0508','002','1','4'),(13,'13','2021020302','D003','02012','0508','002','1','4'),(14,'14','2021010201','D003','02017','0719','003','2','5'),(15,'15','2021010202','D003','02017','0719','003','2','5'),(16,'16','2021010203','D003','02017','0507','005','2','5'),(17,'17','2021010106','D004','02028','0704','001','1','3'),(18,'18','2021020203','D004','02032','0507','001','10','12'),(19,'19','2021010201','D004','02034','0617','002','7','12'),(20,'20','2021020203','D004','02032','0708','004','1','6'),(21,'21','2021020104','D005','02016','0717','001','1','3'),(22,'22','2021020108','D005','02016','0504','001','4','6'),(23,'23','2021020106','D005','02016','0805','001','10','12'),(24,'24','2021020105','D005','02016','0502','002','1','3'),(25,'25','2021020102','D005','02016','0806','002','4','6'),(26,'26','2021020103','D005','02016','0502','003','4','6'),(27,'27','2021020107','D005','02016','0806','004','1','3'),(28,'28','2021020109','D005','02016','0502','005','1','3'),(29,'29','2021010105','D006','02010','0701','002','1','3'),(30,'30','2021010105','D006','02030','0618','004','1','6'),(31,'31','2021010203','D006','02037','0705','004','7','12'),(32,'32','2021010204','D006','02037','0619','005','7','12'),(33,'33','2021010103','D007','02011','0705','002','2','6'),(34,'34','2021020101','D007','02038','0503','003','3','5'),(35,'35','2021020102','D007','02038','0503','003','3','5'),(36,'36','2021010102','D007','02011','0615','004','8','12'),(37,'37','2021010101','D007','02011','0703','005','2','6'),(38,'38','2021010306','D008','02012','0619','001','2','5'),(39,'39','2021020203','D008','02036','0716','003','2','4'),(40,'40','2021020104','D008','02038','0505','004','4','6'),(41,'41','2021020105','D008','02038','0505','004','4','6'),(42,'42','2021010304','D008','02012','0507','005','9','12'),(43,'43','2021010305','D008','02012','0507','005','9','12'),(44,'44','2021020103','D009','02035','0505','002','7','10'),(45,'45','2021020104','D009','02035','0505','002','7','10'),(46,'46','2021020204','D009','02005','0704','003','7','12'),(47,'47','2021020203','D009','02005','0705','005','1','6'),(48,'48','2021010103','D010','02026','0806','001','3','4'),(49,'49','2021010202','D010','02023','0704','001','8','11'),(50,'50','2021010202','D010','02023','0713','002','7','10'),(51,'51','2021010201','D010','02023','0705','003','7','10'),(52,'52','2021010201','D010','02023','0716','005','8','11'),(53,'53','2021010201','D011','02019','0718','002','1','5'),(54,'54','2021010203','D011','02019','0706','004','1','5'),(55,'55','2021010204','D011','02019','0716','004','8','12'),(56,'56','2021010202','D011','02019','0706','005','1','5'),(57,'57','2021020204','D012','02018','0702','001','1','5'),(58,'58','2021020203','D012','02018','0619','002','1','5'),(59,'59','2021010204','D012','02020','0704','002','9','11'),(60,'60','2021010302','D013','02008','0805','002','4','6'),(61,'61','2021020109','D013','02007','0805','002','7','9'),(62,'62','2021010301','D013','02009','0717','003','4','6'),(63,'63','2021020101','D013','02008','0717','003','7','9'),(64,'64','2021020401','D013','02009','0717','004','4','6'),(65,'65','2021020107','D013','02008','0717','005','2','4'),(66,'66','2021020102','D013','02008','0506','005','7','9'),(67,'67','2021020301','D014','02017','0720','004','1','4'),(68,'68','2021020302','D014','02017','0720','004','1','4'),(69,'69','2021020303','D014','02017','0714','005','2','5'),(70,'70','2021020308','D014','02017','0714','005','7','10'),(71,'71','2021020206','D015','02032','0720','002','3','5'),(72,'72','2021020206','D015','02005','0619','002','7','12'),(73,'73','2021020205','D015','02005','0713','003','7','12'),(74,'74','2021020206','D015','02033','0701','004','7','12'),(75,'75','2021020103','D016','02038','0506','001','1','3'),(76,'76','2021020204','D016','02032','0615','001','7','9'),(77,'77','2021010103','D016','02038','0501','004','4','6'),(78,'78','2021010104','D016','02038','0501','004','4','6'),(79,'79','2021020204','D016','02033','0719','005','7','12'),(80,'80','2021020106','D017','02004','0805','004','3','6'),(81,'81','2021020302','D017','02027','0702','004','7','12'),(82,'82','2021020301','D017','02027','0704','005','1','6'),(83,'83','2021020109','D017','02002','0717','005','7','10'),(84,'84','2021020302','D018','02039','0701','001','1','6'),(85,'85','2021010203','D018','02013','0501','001','10','12'),(86,'86','2021010204','D018','02013','0501','001','10','12'),(87,'87','2021020301','D019','02022','0620','001','7','12'),(88,'88','2021020302','D019','02022','0702','005','1','6'),(89,'89','2021020108','D020','02004','0502','004','9','12'),(90,'90','2021020107','D020','02004','0502','005','7','10'),(91,'91','2021020207','D021','02005','0615','001','1','6'),(92,'92','2021020207','D021','02032','0707','002','1','3'),(93,'93','2021020207','D021','02033','0718','003','1','6'),(94,'94','2021010303','D021','02012','0703','003','8','11'),(95,'95','2021010204','D022','02033','0704','003','1','6'),(96,'96','2021010205','D022','02033','0706','003','7','12'),(97,'97','2021020306','D022','02012','0504','005','1','4'),(98,'98','2021010205','D023','02023','0508','001','1','4'),(99,'99','2021020206','D023','02025','0706','003','1','6'),(100,'100','2021010206','D023','02023','0618','003','8','11'),(101,'101','2021010205','D023','02023','0701','005','1','4'),(102,'102','2021010206','D023','02023','0705','005','7','10'),(103,'103','2021010201','D024','02037','0713','001','1','6'),(104,'104','2021010103','D024','02010','0615','001','10','12'),(105,'105','2021010103','D024','02010','0619','003','1','6'),(106,'106','2021010202','D024','02037','0701','005','7','12'),(107,'107','2021020305','D025','02024','0615','001','1','6'),(108,'108','2021020306','D025','02022','0713','002','1','6'),(109,'109','2021020304','D025','02017','0620','005','1','4'),(110,'110','2021020305','D025','02017','0620','005','1','4'),(111,'111','2021020305','D026','02015','0508','003','7','12'),(112,'112','2021020306','D026','02041','0701','004','1','6'),(113,'113','2021020103','D027','02010','0501','002','4','6'),(114,'114','2021020104','D027','02010','0501','002','4','6'),(115,'115','2021010106','D027','02035','0707','003','1','4'),(116,'116','2021020103','D027','02010','0615','004','7','12'),(117,'117','2021020104','D027','02010','0617','005','1','6'),(118,'118','2021010104','D028','02026','0504','002','1','4'),(119,'119','2021020107','D028','02035','0503','002','8','11'),(120,'120','2021020108','D028','02035','0503','002','8','11'),(121,'121','2021010105','D028','02026','0505','003','3','6'),(122,'122','2021010106','D028','02026','0505','003','3','6'),(123,'123','2021020209','D029','02032','0503','001','7','9'),(124,'124','2021020204','D029','02036','0703','003','1','3'),(125,'125','2021020205','D029','02036','0703','003','1','3'),(126,'126','2021020209','D029','02033','0508','004','1','6'),(127,'127','2021020206','D029','02036','0501','005','1','3'),(128,'128','2021020207','D029','02036','0501','005','1','3'),(129,'129','2021020109','D030','02010','0716','001','4','6'),(130,'130','2021020108','D030','02010','0715','002','2','4'),(131,'131','2021020201','D030','02036','0502','003','1','3'),(132,'132','2021020109','D030','02030','0620','004','1','6'),(133,'133','2021020108','D030','02030','0615','005','1','6'),(134,'134','2021020202','D031','02032','0507','001','7','9'),(135,'135','2021010203','D031','02020','0718','002','7','9'),(136,'136','2021010201','D031','02020','0501','004','7','9'),(137,'137','2021010202','D031','02020','0501','004','7','9'),(138,'138','2021020202','D031','02033','0707','005','7','12'),(139,'139','2021020104','D032','02008','0806','001','7','9'),(140,'140','2021020103','D032','02008','0717','002','1','3'),(141,'141','2021020403','D032','02009','0502','002','10','12'),(142,'142','2021010304','D032','02009','0506','003','4','6'),(143,'143','2021020402','D032','02009','0504','004','4','6'),(144,'144','2021020105','D032','02009','0717','004','8','10'),(145,'145','2021010303','D032','02009','0806','005','7','9'),(146,'146','2021020203','D033','02037','0716','003','7','12'),(147,'147','2021020108','D034','02008','0502','001','1','3'),(148,'148','2021020106','D034','02008','0502','002','7','9'),(149,'149','2021010305','D034','02009','0805','003','4','6'),(150,'150','2021010306','D034','02009','0506','004','4','6'),(151,'151','2021020208','D035','02018','0618','002','2','6'),(152,'152','2021020307','D035','02041','0716','002','7','12'),(153,'153','2021020308','D035','02041','0716','005','1','6'),(154,'154','2021020207','D035','02018','0615','005','8','12'),(155,'155','2021020209','D036','02036','0704','001','4','6'),(156,'156','2021020304','D036','02022','0508','001','7','12'),(157,'157','2021020303','D036','02022','0704','002','1','6'),(158,'158','2021020202','D036','02025','0706','002','7','12'),(159,'159','2021010102','D037','02016','0506','001','7','9'),(160,'160','2021010107','D037','02016','0806','002','7','9'),(161,'161','2021010104','D037','02016','0504','002','10','12'),(162,'162','2021020101','D037','02016','0717','003','10','12'),(163,'163','2021010106','D037','02016','0717','004','1','3'),(164,'164','2021010103','D037','02016','0504','005','7','9'),(165,'165','2021010101','D037','02016','0806','005','10','12'),(166,'166','2021020307','D038','02012','0714','002','2','5'),(167,'167','2021020209','D038','02020','0620','003','10','12'),(168,'168','2021010301','D038','02012','0503','005','1','4'),(169,'169','2021010302','D038','02012','0503','005','1','4'),(170,'170','2021010101','D039','02040','0503','001','1','3'),(171,'171','2021010102','D039','02040','0503','001','1','3'),(172,'172','2021020209','D039','02037','0703','002','1','6'),(173,'173','2021010102','D039','02040','0617','003','8','12'),(174,'174','2021010101','D039','02040','0617','004','2','6'),(175,'175','2021020109','D040','02003','0713','001','9','11'),(176,'176','2021010202','D040','02033','0619','003','7','12'),(177,'177','2021020109','D040','02003','0718','004','7','12'),(178,'178','2021010101','D041','02038','0507','001','4','6'),(179,'179','2021010102','D041','02038','0507','001','4','6'),(180,'180','2021010101','D041','02028','0501','002','1','3'),(181,'181','2021010102','D041','02028','0501','002','1','3'),(182,'182','2021020205','D042','02037','0703','001','7','12'),(183,'183','2021020204','D042','02037','0715','004','7','12'),(184,'184','2021020101','D042','02035','0505','005','2','5'),(185,'185','2021020102','D042','02035','0505','005','2','5'),(186,'186','2021010204','D043','02017','0705','001','2','5'),(187,'187','2021010205','D043','02017','0505','002','2','5'),(188,'188','2021010204','D043','02017','0505','002','2','5'),(189,'189','2021020208','D043','02036','0507','004','7','9'),(190,'190','2021020205','D043','02025','0720','005','1','6'),(191,'191','2021020201','D044','02032','0706','001','3','5'),(192,'192','2021010205','D044','02021','0618','001','10','12'),(193,'193','2021010206','D044','02021','0618','001','10','12'),(194,'194','2021020206','D044','02020','0707','004','3','5'),(195,'195','2021020207','D044','02020','0707','004','3','5'),(196,'196','2021020201','D044','02033','0713','004','7','12'),(197,'197','2021020208','D045','02037','0718','001','1','6'),(198,'198','2021020107','D045','02010','0702','001','9','11'),(199,'199','2021020107','D045','02030','0615','003','1','6'),(200,'200','2021020207','D045','02037','0619','004','7','12'),(201,'201','2021020103','D046','02003','0501','001','4','6'),(202,'202','2021020101','D046','02010','0617','002','3','5'),(203,'203','2021020101','D046','02030','0704','004','1','6'),(204,'204','2021020209','D046','02018','0707','005','1','5'),(205,'205','2021020103','D046','02003','0702','005','7','12'),(206,'206','2021020308','D047','02022','0620','001','1','6'),(207,'207','2021020203','D047','02020','0805','001','7','9'),(208,'208','2021020201','D047','02020','0620','002','1','3'),(209,'209','2021020202','D047','02020','0620','002','1','3'),(210,'210','2021020307','D047','02022','0715','003','1','6'),(211,'211','2021020305','D048','02027','0716','002','1','6'),(212,'212','2021020201','D048','02025','0503','004','1','6'),(213,'213','2021020208','D048','02025','0713','005','1','6'),(214,'214','2021020306','D048','02027','0620','005','7','12'),(215,'215','2021010106','D049','02010','0716','001','7','9'),(216,'216','2021020204','D049','02025','0719','002','1','6'),(217,'217','2021020203','D049','02025','0703','002','7','12'),(218,'218','2021010106','D049','02030','0706','004','7','12'),(219,'219','2021020106','D050','02001','0717','001','4','6'),(220,'220','2021020103','D050','02001','0506','001','7','9'),(221,'221','2021020105','D050','02001','0504','001','10','12'),(222,'222','2021020109','D050','02001','0805','003','1','3'),(223,'223','2021020102','D050','02001','0504','003','8','10'),(224,'224','2021020104','D050','02001','0805','004','7','9'),(225,'225','2021020107','D050','02001','0805','004','10','12'),(226,'226','2021020108','D050','02001','0805','005','7','9'),(227,'227','2021020206','D051','02037','0715','001','1','6'),(228,'228','2021020208','D051','02020','0508','003','2','4'),(229,'229','2021020306','D051','02039','0701','003','7','12'),(230,'230','2021020305','D051','02039','0619','004','1','6'),(231,'231','2021010104','D052','02010','0701','001','4','6'),(232,'232','2021020201','D052','02005','0708','002','7','12'),(233,'233','2021020202','D052','02005','0720','003','7','12'),(234,'234','2021010104','D052','02030','0618','005','1','6'),(235,'235','2021020105','D053','02010','0708','001','7','9'),(236,'236','2021020105','D053','02030','0704','005','7','12'),(237,'237','2021020101','D054','02003','0703','001','2','4'),(238,'238','2021020102','D054','02003','0703','001','2','4'),(239,'239','2021010205','D054','02013','0501','001','7','9'),(240,'240','2021020102','D054','02029','0620','002','7','12'),(241,'241','2021020101','D054','02029','0720','004','7','12'),(242,'242','2021020106','D055','02003','0716','001','1','3'),(243,'243','2021020304','D055','02027','0718','004','1','6'),(244,'244','2021020106','D055','02029','0618','004','7','12'),(245,'245','2021020303','D055','02027','0718','005','7','12'),(246,'246','2021020107','D056','02003','0708','001','4','6'),(247,'247','2021020303','D056','02015','0715','001','7','12'),(248,'248','2021020304','D056','02015','0713','003','1','6'),(249,'249','2021020107','D056','02029','0702','003','7','12'),(250,'250','2021020201','D057','02037','0720','001','7','12'),(251,'251','2021020305','D057','02041','0618','005','7','12'),(252,'252','2021020208','D058','02032','0502','001','10','12'),(253,'253','2021020303','D058','02041','0720','003','1','6'),(254,'254','2021020208','D058','02033','0716','004','1','6'),(255,'255','2021020304','D058','02041','0615','005','7','12'),(256,'256','2021010203','D059','02023','0719','001','1','4'),(257,'257','2021010204','D059','02023','0702','002','2','5'),(258,'258','2021020207','D059','02025','0701','002','7','12'),(259,'259','2021010204','D059','02023','0718','005','2','5'),(260,'260','2021010203','D059','02023','0715','005','8','11'),(261,'261','2021020308','D060','02039','0619','001','7','12'),(262,'262','2021020201','D060','02018','0615','003','7','11'),(263,'263','2021020202','D060','02018','0708','005','1','5'),(264,'264','2021020307','D060','02039','0708','005','7','12'),(265,'265','2021020101','D061','02004','0717','002','9','12'),(266,'266','2021020104','D061','02004','0504','003','3','6'),(267,'267','2021020105','D061','02004','0805','003','7','10'),(268,'268','2021020102','D061','02004','0806','004','8','11'),(269,'269','2021020103','D061','02004','0806','005','2','5'),(270,'270','2021010106','D062','02011','0615','002','7','11'),(271,'271','2021010104','D062','02011','0703','004','8','12'),(272,'272','2021010105','D062','02011','0715','005','1','5'),(273,'273','2021010105','D062','02038','0501','005','10','12'),(274,'274','2021010106','D062','02038','0501','005','10','12'),(275,'275','2021020209','D063','02005','0719','002','7','12'),(276,'276','2021010101','D063','02026','0507','003','1','4'),(277,'277','2021010102','D063','02026','0507','003','1','4'),(278,'278','2021020208','D063','02005','0708','003','7','12'),(279,'279','2021010301','D064','02006','0805','001','1','3'),(280,'280','2021010303','D064','02006','0506','001','4','6'),(281,'281','2021010302','D064','02006','0805','002','1','3'),(282,'282','2021010305','D064','02006','0506','003','1','3'),(283,'283','2021010306','D064','02006','0504','004','1','3'),(284,'284','2021010304','D064','02006','0805','005','2','4'),(285,'285','2021020102','D065','02010','0708','002','1','3'),(286,'286','2021020102','D065','02030','0615','004','1','6'),(287,'287','2021010206','D066','02013','0503','001','4','6'),(288,'288','2021020104','D067','02003','0805','001','4','6'),(289,'289','2021020105','D067','02003','0805','001','4','6'),(290,'290','2021020105','D067','02029','0705','003','1','6'),(291,'291','2021010201','D067','02013','0506','004','10','12'),(292,'292','2021020104','D067','02029','0703','005','7','12'),(293,'293','2021020308','D068','02027','0714','002','7','12'),(294,'294','2021020307','D068','02027','0703','004','1','6'),(295,'295','2021020303','D069','02039','0618','002','7','12'),(296,'296','2021010206','D069','02033','0702','004','1','6'),(297,'297','2021020406','D070','02009','0502','001','4','6'),(298,'298','2021020405','D070','02009','0806','001','10','12'),(299,'299','2021020404','D070','02009','0717','002','4','6'),(300,'300','2021020407','D070','02009','0806','003','4','6'),(301,'301','2021020306','D071','02017','0505','001','1','4'),(302,'302','2021020307','D071','02017','0505','001','1','4'),(303,'303','2021020108','D071','02003','0714','001','7','9'),(304,'304','2021020308','D071','02017','0501','003','1','4'),(305,'305','2021020108','D071','02029','0719','004','1','6'),(306,'306','2021010303','D072','02014','0720','001','1','3'),(307,'307','2021010304','D072','02014','0720','001','1','3'),(308,'308','2021010305','D072','02014','0714','001','10','12'),(309,'309','2021010306','D072','02014','0714','001','10','12'),(310,'310','2021010301','D072','02014','0501','005','7','9'),(311,'311','2021010302','D072','02014','0501','005','7','9'),(312,'312','2021020305','D073','02012','0714','003','1','4'),(313,'313','2021020106','D074','02038','0507','002','3','5'),(314,'314','2021020107','D074','02038','0507','002','3','5'),(315,'315','2021020109','D074','02038','0805','002','10','12'),(316,'316','2021020108','D074','02038','0806','003','7','9'),(317,'317','2021010206','D074','02019','0719','005','1','5'),(318,'318','2021010205','D074','02019','0713','005','7','11'),(319,'319','2021010105','D075','02028','0501','001','1','3'),(320,'320','2021020304','D075','02039','0706','002','1','6'),(321,'321','2021020301','D075','02039','0618','003','1','6'),(322,'322','2021010103','D075','02028','0503','003','8','10'),(323,'323','2021010104','D075','02028','0503','003','8','10'),(324,'324','2021020303','D076','02012','0618','001','1','4'),(325,'325','2021020304','D076','02012','0618','001','1','4'),(326,'326','2021020307','D076','02015','0701','001','7','12'),(327,'327','2021020308','D076','02015','0718','003','7','12'),(328,'328','2021020306','D077','02015','0705','001','7','12'),(329,'329','2021020202','D077','02037','0715','004','1','6'),(330,'330','2021020205','D078','02018','0615','002','1','5'),(331,'331','2021020301','D078','02015','0715','002','7','12'),(332,'332','2021020302','D078','02015','0617','003','1','6'),(333,'333','2021020206','D078','02018','0706','005','8','12'),(334,'334','2021010105','D079','02040','0503','002','4','6'),(335,'335','2021010106','D079','02040','0503','002','4','6'),(336,'336','2021010105','D079','02031','0705','002','8','12'),(337,'337','2021010106','D079','02031','0715','003','8','12'),(338,'338','2021020105','D079','02035','0506','005','2','5'),(339,'339','2021010103','D080','02040','0505','001','7','9'),(340,'340','2021010104','D080','02040','0505','001','7','9'),(341,'341','2021020109','D080','02035','0506','002','1','4'),(342,'342','2021010104','D080','02031','0701','003','2','6'),(343,'343','2021010103','D080','02031','0508','004','8','12'),(344,'344','2021020405','D081','02014','0507','001','1','3'),(345,'345','2021020406','D081','02014','0507','001','1','3'),(346,'346','2021020403','D081','02014','0503','002','1','3'),(347,'347','2021020404','D081','02014','0503','002','1','3'),(348,'348','2021020407','D081','02014','0506','003','8','10'),(349,'349','2021020401','D081','02014','0501','004','1','3'),(350,'350','2021020402','D081','02014','0501','004','1','3'),(351,'351','2021010202','D082','02013','0806','002','1','3'),(352,'352','2021010101','D082','02010','0707','002','4','6'),(353,'353','2021010102','D082','02010','0707','002','4','6'),(354,'354','2021010101','D082','02030','0720','002','7','12'),(355,'355','2021010102','D082','02030','0508','005','1','6'),(356,'356','2021020106','D083','02010','0617','001','7','9'),(357,'357','2021020302','D083','02041','0508','002','7','12'),(358,'358','2021020106','D083','02030','0719','003','7','12'),(359,'359','2021020301','D083','02041','0708','004','7','12'),(360,'360','2021020205','D084','02032','0708','001','1','3'),(361,'361','2021010203','D084','02033','0620','003','1','6'),(362,'362','2021020204','D084','02020','0505','004','1','3'),(363,'363','2021020205','D084','02020','0505','004','1','3'),(364,'364','2021020205','D084','02033','0620','004','7','12'),(365,'365','2021010202','D085','02006','0504','001','1','3'),(366,'366','2021010204','D085','02006','0502','001','7','9'),(367,'367','2021010205','D085','02006','0504','002','7','9'),(368,'368','2021010203','D085','02006','0806','002','10','12'),(369,'369','2021010206','D085','02006','0806','003','1','3'),(370,'370','2021010201','D085','02006','0502','004','2','4');
/*!40000 ALTER TABLE `jadwal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jp`
--

DROP TABLE IF EXISTS `jp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jp` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jp`
--

LOCK TABLES `jp` WRITE;
/*!40000 ALTER TABLE `jp` DISABLE KEYS */;
INSERT INTO `jp` VALUES (1,'1','07:00:00','07:50:00'),(2,'2','07:50:00','08:40:00'),(3,'3','08:40:00','09:30:00'),(4,'4','09:40:00','10:30:00'),(5,'5','10:30:00','11:20:00'),(6,'6','11:20:00','12:10:00'),(7,'7','12:50:00','13:40:00'),(8,'8','13:40:00','14:30:00'),(9,'9','14:30:00','15:20:00'),(10,'10','15:30:00','15:30:00'),(11,'11','16:20:00','17:10:00'),(12,'12','17:10:00','18:00:00');
/*!40000 ALTER TABLE `jp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kelas`
--

DROP TABLE IF EXISTS `kelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_kelas` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kelas`
--

LOCK TABLES `kelas` WRITE;
/*!40000 ALTER TABLE `kelas` DISABLE KEYS */;
INSERT INTO `kelas` VALUES (1,'2021010101','001','MI-1A'),(2,'2021010102','001','MI-1B'),(3,'2021010103','001','MI-1C'),(4,'2021010104','001','MI-1D'),(5,'2021010105','001','MI-1E'),(6,'2021010106','001','MI-1F'),(7,'2021010107','001','MI-1H'),(8,'2021010201','001','MI-2A'),(9,'2021010202','001','MI-2B'),(10,'2021010203','001','MI-2C'),(11,'2021010204','001','MI-2D'),(12,'2021010205','001','MI-2E'),(13,'2021010206','001','MI-2F'),(14,'2021010301','001','MI-3A'),(15,'2021010302','001','MI-3B'),(16,'2021010303','001','MI-3C'),(17,'2021010304','001','MI-3D'),(18,'2021010305','001','MI-3E'),(19,'2021010306','001','MI-3F'),(20,'2021020101','002','TI-1A'),(21,'2021020102','002','TI-1B'),(22,'2021020103','002','TI-1C'),(23,'2021020104','002','TI-1D'),(24,'2021020105','002','TI-1E'),(25,'2021020106','002','TI-1F'),(26,'2021020107','002','TI-1G'),(27,'2021020108','002','TI-1H'),(28,'2021020109','002','TI-1I'),(29,'2021020201','002','TI-2A'),(30,'2021020202','002','TI-2B'),(31,'2021020203','002','TI-2C'),(32,'2021020204','002','TI-2D'),(33,'2021020205','002','TI-2E'),(34,'2021020206','002','TI-2F'),(35,'2021020207','002','TI-2G'),(36,'2021020208','002','TI-2H'),(37,'2021020209','002','TI-2I'),(38,'2021020301','002','TI-3A'),(39,'2021020302','002','TI-3B'),(40,'2021020303','002','TI-3C'),(41,'2021020304','002','TI-3D'),(42,'2021020305','002','TI-3E'),(43,'2021020306','002','TI-3F'),(44,'2021020307','002','TI-3G'),(45,'2021020308','002','TI-3H'),(46,'2021020401','002','TI-4A'),(47,'2021020402','002','TI-4B'),(48,'2021020403','002','TI-4C'),(49,'2021020404','002','TI-4D'),(50,'2021020405','002','TI-4E'),(51,'2021020406','002','TI-4F'),(52,'2021020407','002','TI-4G');
/*!40000 ALTER TABLE `kelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mk`
--

DROP TABLE IF EXISTS `mk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_mk` varchar(255) NOT NULL,
  `nama_mk` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mk`
--

LOCK TABLES `mk` WRITE;
/*!40000 ALTER TABLE `mk` DISABLE KEYS */;
INSERT INTO `mk` VALUES (1,'02001','Agama'),(2,'02002','Alajabar Linier'),(3,'02003','Algoritma dan Struktur Data'),(4,'02004','Aljabar Linier'),(5,'02005','Analisis Dan Desan Berorientasi Objek'),(6,'02006','Bahasa Indonesia'),(7,'02007','Bahasa Inggris'),(8,'02008','Bahasa Inggris 2'),(9,'02009','Bahasa Inggris Persiapan Kerja'),(10,'02010','Basis Data'),(11,'02011','Desain Pemrograman Web'),(12,'02012','Digital Entrepreneurship'),(13,'02013','E-Business'),(14,'02014','Etika Profesi Bidang TI'),(15,'02015','Internet Of Things'),(16,'02016','Kewarganegaraan'),(17,'02017','Komputasi Multimedia'),(18,'02018','Machine Learning'),(19,'02019','Manajemen Jaringan Komputer'),(20,'02020','Manajemen Proyek'),(21,'02021','Manajemen Proyek '),(22,'02022','Pemrograman Berbasis Framework'),(23,'02023','Pemrograman Mobile'),(24,'02024','Pemrograman Multimedia'),(25,'02025','Pemrograman Web Lanjut'),(26,'02026','Pengembangan Perangkat Lunak Berbasis Object'),(27,'02027','Pengolahan Citra dan Visi Komputer'),(28,'02028','Penulisan Ilmiah'),(29,'02029','Praktikum Algoritma dan Struktur Data'),(30,'02030','Praktikum Basis Data'),(31,'02031','Praktikum Struktur Data'),(32,'02032','Proyek 1_P1'),(33,'02033','Proyek 1_P2'),(34,'02034','Proyek 2_P2'),(35,'02035','Rekayasa Perangkat Lunak'),(36,'02036','Sistem Informasi'),(37,'02037','Sistem Manajemen Basis Data'),(38,'02038','Sistem Operasi'),(39,'02039','Sistem Pendukung Keputusan'),(40,'02040','Struktur Data'),(41,'02041','Teknologi Data');
/*!40000 ALTER TABLE `mk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodi`
--

DROP TABLE IF EXISTS `prodi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_prodi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodi`
--

LOCK TABLES `prodi` WRITE;
/*!40000 ALTER TABLE `prodi` DISABLE KEYS */;
INSERT INTO `prodi` VALUES (1,'001','D3 Manajemen Informatika'),(2,'002','D4 Teknik Informatika');
/*!40000 ALTER TABLE `prodi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruang`
--

DROP TABLE IF EXISTS `ruang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_ruang` varchar(255) NOT NULL,
  `nama_ruang` varchar(255) NOT NULL,
  `deskripsi_ruang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruang`
--

LOCK TABLES `ruang` WRITE;
/*!40000 ALTER TABLE `ruang` DISABLE KEYS */;
INSERT INTO `ruang` VALUES (1,'0501','RT01','Ruang Teori 1'),(2,'0502','RT02','Ruang Teori 2'),(3,'0503','RT03','Ruang Teori 3'),(4,'0504','RT04','Ruang Teori 4'),(5,'0505','RT05','Ruang Teori 5'),(6,'0506','RT06','Ruang Teori 6'),(7,'0507','RT07','Ruang Teori 7'),(8,'0508','LPY1','Laboratorium Proyek 1'),(9,'0615','LSI1','Laboratorium Sistem Informasi 1'),(10,'0617','LSI2','Laboratorium Sistem Informasi 2'),(11,'0618','LSI3','Laboratorium Sistem Informasi 3'),(12,'0619','LPY2','Laboratorium Proyek 2'),(13,'0620','LPY3','Laboratorium Proyek 3'),(14,'0701','LPR1','Laboratorium Pemrograman 1'),(15,'0702','LPR2','Laboratorium Pemrograman 2'),(16,'0703','LPR3','Laboratorium Pemrograman 3'),(17,'0704','LPR4','Laboratorium Pemrograman 4'),(18,'0705','LPR5','Laboratorium Pemrograman 5'),(19,'0706','LPR6','Laboratorium Pemrograman 6'),(20,'0707','LKJ1','Laboratorium Keamanan Jaringan 1'),(21,'0708','LPR7','Laboratorium Pemrograman 7'),(22,'0713','LKJ2','Laboratorium Keamanan Jaringan 2'),(23,'0714','LPR8','Laboratorium Pemrograman 8'),(24,'0715','LKJ3','Laboratorium Keamanan Jaringan 3'),(25,'0716','LIG1','Laboratorium Visi Komputer 1'),(26,'0717','RT08','Ruang Teori 8'),(27,'0718','LIG2','Laboratorium Visi Komputer 2'),(28,'0719','LPY4','Laboratorium Proyek 4'),(29,'0720','LAI1','Laboratorium Kecerdasan Buatan 1'),(30,'0801','L DTS','Laboratorium DTS'),(31,'0805','RT09','Ruang Teori 9'),(32,'0806','RT10','Ruang Teori 10'),(33,'1001','RT11','Ruang Teori 11'),(34,'1002','ROL1','Ruang Online 1'),(35,'1003','ROL2','Ruang Online 2'),(36,'1004','ROL3','Ruang Online 3');
/*!40000 ALTER TABLE `ruang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_62_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_62_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_62_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_62_21_key`;

--
-- Table structure for table `dosen`
--

DROP TABLE IF EXISTS `dosen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dosen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_dosen` varchar(255) NOT NULL,
  `nama_dosen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dosen`
--

LOCK TABLES `dosen` WRITE;
/*!40000 ALTER TABLE `dosen` DISABLE KEYS */;
INSERT INTO `dosen` VALUES (1,'D001','Abdul Chalim, SAg., MPd.I'),(2,'D002','Ade Ismail'),(3,'D003','Agung Nugroho Pramudhita ST., MT.'),(4,'D004','Ahmadi Yuli Ananta ST., MM.'),(5,'D005','Ane Fany Novitasari, SH.MKn.'),(6,'D006','Annisa Puspa Kirana MKom.'),(7,'D007','Annisa Taufika Firdausi ST., MT.'),(8,'D008','Anugrah Nur Rahmanto SSn., MDs.'),(9,'D009','Ariadi Retno Ririd SKom., MKom.'),(10,'D010','Arie Rachmad Syulistyo SKom., MKom.'),(11,'D011','Arief Prasetyo SKom., MKom.'),(12,'D012','Arwin Sumari ST., MT., DR.'),(13,'D013','Atiqah Nurul Asri SPd., MPd.'),(14,'D014','Bagas Satya Dian Nugraha, ST., MT.'),(15,'D015','Banni Satria Andoko, S. Kom., M.MSI'),(16,'D016','Budi Harijanto ST., MMKom.'),(17,'D017','Cahya Rahmad ST., MKom. DR.Eng'),(18,'D018','Candra Bella Vista SKom., MT.'),(19,'D019','Candrasena Setiadi ST., MMT.'),(20,'D020','Deasy Sandhya Elya Ikawati SSi., MSi.'),(21,'D021','Deddy Kusbianto PA Ir. MMKom.'),(22,'D022','Dhebys Suryani SKom. MT.'),(23,'D023','Dian Hanifudin Subhi SKom., MT.'),(24,'D024','Dika Rizky Yunianto SKom., MKom.'),(25,'D025','Dimas Wahyu Wibowo ST., MT.'),(26,'D026','Dodit Supriyanto SKom., MT.'),(27,'D027','Dwi Puspitasari SKom., MKom.'),(28,'D028','Eka Larasati Amalia, SST., MT.'),(29,'D029','Ekojono, ST., M.Kom.'),(30,'D030','Elok Nur Hamdana, ST., MT'),(31,'D031','Erfan Rohadi, ST., MEng., PhD.'),(32,'D032','Faiz Ushbah Mubarok, SPd., MPd.'),(33,'D033','Farid Angga Pribadi, SKom.,MKom.'),(34,'D034','Farida Ulfa, SPd., MPd.'),(35,'D035','Gunawan Budi Prasetyo, ST., MMT., Ph.D.'),(36,'D036','Habibie Ed Dien, MT.'),(37,'D037','Hairus'),(38,'D038','Hendra Pradibta, SE., M.Sc.'),(39,'D039','Ika Kusumaning Putri, MT.'),(40,'D040','Imam Fahrur Rozi, ST., MT.'),(41,'D041','Indra Dharma Wijaya, ST., MMT.'),(42,'D042','Irsyad Arif Mashudi, M.Kom'),(43,'D043','Kadek Suarjuna Batubulan, SKom, MT.'),(44,'D044','Luqman Affandi, SKom., MMSI.'),(45,'D045','M. Hasyim Ratsanjani'),(46,'D046','Mamluatul Haniah'),(47,'D047','Meyti Eka Apriyani ST., MT.'),(48,'D048','Milyun Nima Shoumi'),(49,'D049','Moch. Zawaruddin Abdullah, S.ST., M.Kom'),(50,'D050','Moh. Amin'),(51,'D051','Muhammad Afif Hendrawan, S.Kom.'),(52,'D052','Muhammad Shulhan Khairy, SKom., MKom.'),(53,'D053','Muhammad Unggul Pamenang, SSt., MT.'),(54,'D054','Mungki Astiningrum, ST., MKom.'),(55,'D055','Mustika Mentari, SKom., MKom.'),(56,'D056','Noprianto'),(57,'D057','Odhitya Desta Triswidrananta, SPd., MPd.'),(58,'D058','Pramana Yoga Saputra, SKom., MMT.'),(59,'D059','Putra Prima A., ST., MKom.'),(60,'D060','Rakhmat Arianto SST., MKom.'),(61,'D061','Rawansyah., Drs., MPd.'),(62,'D062','Retno Damayanti, SPd.'),(63,'D063','Ridwan Rismanto, SST., MKom.'),(64,'D064','Rizki Putri Ramadhani, S.S., M.Pd.'),(65,'D065','Rizky Ardiansyah, SKom., MT.'),(66,'D066','Robby Anggriawan SE., ME.'),(67,'D067','Rokhimatul Wakhidah SPd. MT.'),(68,'D068','Rosa Andrie Asmara, ST., MT., Dr. Eng.'),(69,'D069','Rudy Ariyanto, ST., MCs.'),(70,'D070','Satrio Binusa S, SS, M.Pd'),(71,'D071','Septian Enggar Sukmana, SPd., MT.'),(72,'D072','Shohib Muslim'),(73,'D073','Siti Romlah, Dra., M.M.'),(74,'D074','Sofyan Noor Arief, S.ST., M.Kom.'),(75,'D075','Ulla Delfiana Rosiani, ST., MT.'),(76,'D076','Usman Nurhasan, S.Kom., MT.'),(77,'D077','Very Sugiarto, SPd., MKom.'),(78,'D078','Vipkas Al Hadid Firdaus, ST.,MT.'),(79,'D079','Vivi Nur Wijayaningrum, S.Kom, M.Kom'),(80,'D080','Vivin Ayu Lestari, SPd.'),(81,'D081','Widaningsih Condrowardhani, SH., MH.'),(82,'D082','Wilda Imama Sabilla, S.Kom., M.Kom.'),(83,'D083','Yoppy Yunhasnawa, SST., MSc.'),(84,'D084','Yuri Ariyanto, SKom., MKom.'),(85,'D085','Zulmy Faqihuddin Putera, S.Pd., M.Pd');
/*!40000 ALTER TABLE `dosen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hari`
--

DROP TABLE IF EXISTS `hari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_hari` varchar(255) NOT NULL,
  `nama_hari` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hari`
--

LOCK TABLES `hari` WRITE;
/*!40000 ALTER TABLE `hari` DISABLE KEYS */;
INSERT INTO `hari` VALUES (1,'001','Senin'),(2,'002','Selasa'),(3,'003','Rabu'),(4,'004','Kamis'),(5,'005','Jumat'),(6,'006','Sabtu'),(7,'007','Minggu');
/*!40000 ALTER TABLE `hari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jadwal`
--

DROP TABLE IF EXISTS `jadwal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jadwal` varchar(255) NOT NULL,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_dosen` varchar(255) NOT NULL,
  `kode_mk` varchar(255) NOT NULL,
  `kode_ruang` varchar(255) NOT NULL,
  `kode_hari` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=371 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jadwal`
--

LOCK TABLES `jadwal` WRITE;
/*!40000 ALTER TABLE `jadwal` DISABLE KEYS */;
INSERT INTO `jadwal` VALUES (1,'1','2021020101','D001','02001','0504','001','7','9'),(2,'2','2021010103','D001','02001','0506','002','9','11'),(3,'3','2021010105','D001','02001','0806','003','10','12'),(4,'4','2021010102','D001','02001','0506','004','1','3'),(5,'5','2021010106','D001','02001','0806','004','4','6'),(6,'6','2021010101','D001','02001','0506','004','7','9'),(7,'7','2021010104','D001','02001','0506','005','10','12'),(8,'8','2021010206','D002','02037','0702','001','7','12'),(9,'9','2021020202','D002','02036','0708','003','2','4'),(10,'10','2021010205','D002','02037','0713','004','1','6'),(11,'11','2021020209','D002','02025','0719','004','7','12'),(12,'12','2021020301','D003','02012','0508','002','1','4'),(13,'13','2021020302','D003','02012','0508','002','1','4'),(14,'14','2021010201','D003','02017','0719','003','2','5'),(15,'15','2021010202','D003','02017','0719','003','2','5'),(16,'16','2021010203','D003','02017','0507','005','2','5'),(17,'17','2021010106','D004','02028','0704','001','1','3'),(18,'18','2021020203','D004','02032','0507','001','10','12'),(19,'19','2021010201','D004','02034','0617','002','7','12'),(20,'20','2021020203','D004','02032','0708','004','1','6'),(21,'21','2021020104','D005','02016','0717','001','1','3'),(22,'22','2021020108','D005','02016','0504','001','4','6'),(23,'23','2021020106','D005','02016','0805','001','10','12'),(24,'24','2021020105','D005','02016','0502','002','1','3'),(25,'25','2021020102','D005','02016','0806','002','4','6'),(26,'26','2021020103','D005','02016','0502','003','4','6'),(27,'27','2021020107','D005','02016','0806','004','1','3'),(28,'28','2021020109','D005','02016','0502','005','1','3'),(29,'29','2021010105','D006','02010','0701','002','1','3'),(30,'30','2021010105','D006','02030','0618','004','1','6'),(31,'31','2021010203','D006','02037','0705','004','7','12'),(32,'32','2021010204','D006','02037','0619','005','7','12'),(33,'33','2021010103','D007','02011','0705','002','2','6'),(34,'34','2021020101','D007','02038','0503','003','3','5'),(35,'35','2021020102','D007','02038','0503','003','3','5'),(36,'36','2021010102','D007','02011','0615','004','8','12'),(37,'37','2021010101','D007','02011','0703','005','2','6'),(38,'38','2021010306','D008','02012','0619','001','2','5'),(39,'39','2021020203','D008','02036','0716','003','2','4'),(40,'40','2021020104','D008','02038','0505','004','4','6'),(41,'41','2021020105','D008','02038','0505','004','4','6'),(42,'42','2021010304','D008','02012','0507','005','9','12'),(43,'43','2021010305','D008','02012','0507','005','9','12'),(44,'44','2021020103','D009','02035','0505','002','7','10'),(45,'45','2021020104','D009','02035','0505','002','7','10'),(46,'46','2021020204','D009','02005','0704','003','7','12'),(47,'47','2021020203','D009','02005','0705','005','1','6'),(48,'48','2021010103','D010','02026','0806','001','3','4'),(49,'49','2021010202','D010','02023','0704','001','8','11'),(50,'50','2021010202','D010','02023','0713','002','7','10'),(51,'51','2021010201','D010','02023','0705','003','7','10'),(52,'52','2021010201','D010','02023','0716','005','8','11'),(53,'53','2021010201','D011','02019','0718','002','1','5'),(54,'54','2021010203','D011','02019','0706','004','1','5'),(55,'55','2021010204','D011','02019','0716','004','8','12'),(56,'56','2021010202','D011','02019','0706','005','1','5'),(57,'57','2021020204','D012','02018','0702','001','1','5'),(58,'58','2021020203','D012','02018','0619','002','1','5'),(59,'59','2021010204','D012','02020','0704','002','9','11'),(60,'60','2021010302','D013','02008','0805','002','4','6'),(61,'61','2021020109','D013','02007','0805','002','7','9'),(62,'62','2021010301','D013','02009','0717','003','4','6'),(63,'63','2021020101','D013','02008','0717','003','7','9'),(64,'64','2021020401','D013','02009','0717','004','4','6'),(65,'65','2021020107','D013','02008','0717','005','2','4'),(66,'66','2021020102','D013','02008','0506','005','7','9'),(67,'67','2021020301','D014','02017','0720','004','1','4'),(68,'68','2021020302','D014','02017','0720','004','1','4'),(69,'69','2021020303','D014','02017','0714','005','2','5'),(70,'70','2021020308','D014','02017','0714','005','7','10'),(71,'71','2021020206','D015','02032','0720','002','3','5'),(72,'72','2021020206','D015','02005','0619','002','7','12'),(73,'73','2021020205','D015','02005','0713','003','7','12'),(74,'74','2021020206','D015','02033','0701','004','7','12'),(75,'75','2021020103','D016','02038','0506','001','1','3'),(76,'76','2021020204','D016','02032','0615','001','7','9'),(77,'77','2021010103','D016','02038','0501','004','4','6'),(78,'78','2021010104','D016','02038','0501','004','4','6'),(79,'79','2021020204','D016','02033','0719','005','7','12'),(80,'80','2021020106','D017','02004','0805','004','3','6'),(81,'81','2021020302','D017','02027','0702','004','7','12'),(82,'82','2021020301','D017','02027','0704','005','1','6'),(83,'83','2021020109','D017','02002','0717','005','7','10'),(84,'84','2021020302','D018','02039','0701','001','1','6'),(85,'85','2021010203','D018','02013','0501','001','10','12'),(86,'86','2021010204','D018','02013','0501','001','10','12'),(87,'87','2021020301','D019','02022','0620','001','7','12'),(88,'88','2021020302','D019','02022','0702','005','1','6'),(89,'89','2021020108','D020','02004','0502','004','9','12'),(90,'90','2021020107','D020','02004','0502','005','7','10'),(91,'91','2021020207','D021','02005','0615','001','1','6'),(92,'92','2021020207','D021','02032','0707','002','1','3'),(93,'93','2021020207','D021','02033','0718','003','1','6'),(94,'94','2021010303','D021','02012','0703','003','8','11'),(95,'95','2021010204','D022','02033','0704','003','1','6'),(96,'96','2021010205','D022','02033','0706','003','7','12'),(97,'97','2021020306','D022','02012','0504','005','1','4'),(98,'98','2021010205','D023','02023','0508','001','1','4'),(99,'99','2021020206','D023','02025','0706','003','1','6'),(100,'100','2021010206','D023','02023','0618','003','8','11'),(101,'101','2021010205','D023','02023','0701','005','1','4'),(102,'102','2021010206','D023','02023','0705','005','7','10'),(103,'103','2021010201','D024','02037','0713','001','1','6'),(104,'104','2021010103','D024','02010','0615','001','10','12'),(105,'105','2021010103','D024','02010','0619','003','1','6'),(106,'106','2021010202','D024','02037','0701','005','7','12'),(107,'107','2021020305','D025','02024','0615','001','1','6'),(108,'108','2021020306','D025','02022','0713','002','1','6'),(109,'109','2021020304','D025','02017','0620','005','1','4'),(110,'110','2021020305','D025','02017','0620','005','1','4'),(111,'111','2021020305','D026','02015','0508','003','7','12'),(112,'112','2021020306','D026','02041','0701','004','1','6'),(113,'113','2021020103','D027','02010','0501','002','4','6'),(114,'114','2021020104','D027','02010','0501','002','4','6'),(115,'115','2021010106','D027','02035','0707','003','1','4'),(116,'116','2021020103','D027','02010','0615','004','7','12'),(117,'117','2021020104','D027','02010','0617','005','1','6'),(118,'118','2021010104','D028','02026','0504','002','1','4'),(119,'119','2021020107','D028','02035','0503','002','8','11'),(120,'120','2021020108','D028','02035','0503','002','8','11'),(121,'121','2021010105','D028','02026','0505','003','3','6'),(122,'122','2021010106','D028','02026','0505','003','3','6'),(123,'123','2021020209','D029','02032','0503','001','7','9'),(124,'124','2021020204','D029','02036','0703','003','1','3'),(125,'125','2021020205','D029','02036','0703','003','1','3'),(126,'126','2021020209','D029','02033','0508','004','1','6'),(127,'127','2021020206','D029','02036','0501','005','1','3'),(128,'128','2021020207','D029','02036','0501','005','1','3'),(129,'129','2021020109','D030','02010','0716','001','4','6'),(130,'130','2021020108','D030','02010','0715','002','2','4'),(131,'131','2021020201','D030','02036','0502','003','1','3'),(132,'132','2021020109','D030','02030','0620','004','1','6'),(133,'133','2021020108','D030','02030','0615','005','1','6'),(134,'134','2021020202','D031','02032','0507','001','7','9'),(135,'135','2021010203','D031','02020','0718','002','7','9'),(136,'136','2021010201','D031','02020','0501','004','7','9'),(137,'137','2021010202','D031','02020','0501','004','7','9'),(138,'138','2021020202','D031','02033','0707','005','7','12'),(139,'139','2021020104','D032','02008','0806','001','7','9'),(140,'140','2021020103','D032','02008','0717','002','1','3'),(141,'141','2021020403','D032','02009','0502','002','10','12'),(142,'142','2021010304','D032','02009','0506','003','4','6'),(143,'143','2021020402','D032','02009','0504','004','4','6'),(144,'144','2021020105','D032','02009','0717','004','8','10'),(145,'145','2021010303','D032','02009','0806','005','7','9'),(146,'146','2021020203','D033','02037','0716','003','7','12'),(147,'147','2021020108','D034','02008','0502','001','1','3'),(148,'148','2021020106','D034','02008','0502','002','7','9'),(149,'149','2021010305','D034','02009','0805','003','4','6'),(150,'150','2021010306','D034','02009','0506','004','4','6'),(151,'151','2021020208','D035','02018','0618','002','2','6'),(152,'152','2021020307','D035','02041','0716','002','7','12'),(153,'153','2021020308','D035','02041','0716','005','1','6'),(154,'154','2021020207','D035','02018','0615','005','8','12'),(155,'155','2021020209','D036','02036','0704','001','4','6'),(156,'156','2021020304','D036','02022','0508','001','7','12'),(157,'157','2021020303','D036','02022','0704','002','1','6'),(158,'158','2021020202','D036','02025','0706','002','7','12'),(159,'159','2021010102','D037','02016','0506','001','7','9'),(160,'160','2021010107','D037','02016','0806','002','7','9'),(161,'161','2021010104','D037','02016','0504','002','10','12'),(162,'162','2021020101','D037','02016','0717','003','10','12'),(163,'163','2021010106','D037','02016','0717','004','1','3'),(164,'164','2021010103','D037','02016','0504','005','7','9'),(165,'165','2021010101','D037','02016','0806','005','10','12'),(166,'166','2021020307','D038','02012','0714','002','2','5'),(167,'167','2021020209','D038','02020','0620','003','10','12'),(168,'168','2021010301','D038','02012','0503','005','1','4'),(169,'169','2021010302','D038','02012','0503','005','1','4'),(170,'170','2021010101','D039','02040','0503','001','1','3'),(171,'171','2021010102','D039','02040','0503','001','1','3'),(172,'172','2021020209','D039','02037','0703','002','1','6'),(173,'173','2021010102','D039','02040','0617','003','8','12'),(174,'174','2021010101','D039','02040','0617','004','2','6'),(175,'175','2021020109','D040','02003','0713','001','9','11'),(176,'176','2021010202','D040','02033','0619','003','7','12'),(177,'177','2021020109','D040','02003','0718','004','7','12'),(178,'178','2021010101','D041','02038','0507','001','4','6'),(179,'179','2021010102','D041','02038','0507','001','4','6'),(180,'180','2021010101','D041','02028','0501','002','1','3'),(181,'181','2021010102','D041','02028','0501','002','1','3'),(182,'182','2021020205','D042','02037','0703','001','7','12'),(183,'183','2021020204','D042','02037','0715','004','7','12'),(184,'184','2021020101','D042','02035','0505','005','2','5'),(185,'185','2021020102','D042','02035','0505','005','2','5'),(186,'186','2021010204','D043','02017','0705','001','2','5'),(187,'187','2021010205','D043','02017','0505','002','2','5'),(188,'188','2021010204','D043','02017','0505','002','2','5'),(189,'189','2021020208','D043','02036','0507','004','7','9'),(190,'190','2021020205','D043','02025','0720','005','1','6'),(191,'191','2021020201','D044','02032','0706','001','3','5'),(192,'192','2021010205','D044','02021','0618','001','10','12'),(193,'193','2021010206','D044','02021','0618','001','10','12'),(194,'194','2021020206','D044','02020','0707','004','3','5'),(195,'195','2021020207','D044','02020','0707','004','3','5'),(196,'196','2021020201','D044','02033','0713','004','7','12'),(197,'197','2021020208','D045','02037','0718','001','1','6'),(198,'198','2021020107','D045','02010','0702','001','9','11'),(199,'199','2021020107','D045','02030','0615','003','1','6'),(200,'200','2021020207','D045','02037','0619','004','7','12'),(201,'201','2021020103','D046','02003','0501','001','4','6'),(202,'202','2021020101','D046','02010','0617','002','3','5'),(203,'203','2021020101','D046','02030','0704','004','1','6'),(204,'204','2021020209','D046','02018','0707','005','1','5'),(205,'205','2021020103','D046','02003','0702','005','7','12'),(206,'206','2021020308','D047','02022','0620','001','1','6'),(207,'207','2021020203','D047','02020','0805','001','7','9'),(208,'208','2021020201','D047','02020','0620','002','1','3'),(209,'209','2021020202','D047','02020','0620','002','1','3'),(210,'210','2021020307','D047','02022','0715','003','1','6'),(211,'211','2021020305','D048','02027','0716','002','1','6'),(212,'212','2021020201','D048','02025','0503','004','1','6'),(213,'213','2021020208','D048','02025','0713','005','1','6'),(214,'214','2021020306','D048','02027','0620','005','7','12'),(215,'215','2021010106','D049','02010','0716','001','7','9'),(216,'216','2021020204','D049','02025','0719','002','1','6'),(217,'217','2021020203','D049','02025','0703','002','7','12'),(218,'218','2021010106','D049','02030','0706','004','7','12'),(219,'219','2021020106','D050','02001','0717','001','4','6'),(220,'220','2021020103','D050','02001','0506','001','7','9'),(221,'221','2021020105','D050','02001','0504','001','10','12'),(222,'222','2021020109','D050','02001','0805','003','1','3'),(223,'223','2021020102','D050','02001','0504','003','8','10'),(224,'224','2021020104','D050','02001','0805','004','7','9'),(225,'225','2021020107','D050','02001','0805','004','10','12'),(226,'226','2021020108','D050','02001','0805','005','7','9'),(227,'227','2021020206','D051','02037','0715','001','1','6'),(228,'228','2021020208','D051','02020','0508','003','2','4'),(229,'229','2021020306','D051','02039','0701','003','7','12'),(230,'230','2021020305','D051','02039','0619','004','1','6'),(231,'231','2021010104','D052','02010','0701','001','4','6'),(232,'232','2021020201','D052','02005','0708','002','7','12'),(233,'233','2021020202','D052','02005','0720','003','7','12'),(234,'234','2021010104','D052','02030','0618','005','1','6'),(235,'235','2021020105','D053','02010','0708','001','7','9'),(236,'236','2021020105','D053','02030','0704','005','7','12'),(237,'237','2021020101','D054','02003','0703','001','2','4'),(238,'238','2021020102','D054','02003','0703','001','2','4'),(239,'239','2021010205','D054','02013','0501','001','7','9'),(240,'240','2021020102','D054','02029','0620','002','7','12'),(241,'241','2021020101','D054','02029','0720','004','7','12'),(242,'242','2021020106','D055','02003','0716','001','1','3'),(243,'243','2021020304','D055','02027','0718','004','1','6'),(244,'244','2021020106','D055','02029','0618','004','7','12'),(245,'245','2021020303','D055','02027','0718','005','7','12'),(246,'246','2021020107','D056','02003','0708','001','4','6'),(247,'247','2021020303','D056','02015','0715','001','7','12'),(248,'248','2021020304','D056','02015','0713','003','1','6'),(249,'249','2021020107','D056','02029','0702','003','7','12'),(250,'250','2021020201','D057','02037','0720','001','7','12'),(251,'251','2021020305','D057','02041','0618','005','7','12'),(252,'252','2021020208','D058','02032','0502','001','10','12'),(253,'253','2021020303','D058','02041','0720','003','1','6'),(254,'254','2021020208','D058','02033','0716','004','1','6'),(255,'255','2021020304','D058','02041','0615','005','7','12'),(256,'256','2021010203','D059','02023','0719','001','1','4'),(257,'257','2021010204','D059','02023','0702','002','2','5'),(258,'258','2021020207','D059','02025','0701','002','7','12'),(259,'259','2021010204','D059','02023','0718','005','2','5'),(260,'260','2021010203','D059','02023','0715','005','8','11'),(261,'261','2021020308','D060','02039','0619','001','7','12'),(262,'262','2021020201','D060','02018','0615','003','7','11'),(263,'263','2021020202','D060','02018','0708','005','1','5'),(264,'264','2021020307','D060','02039','0708','005','7','12'),(265,'265','2021020101','D061','02004','0717','002','9','12'),(266,'266','2021020104','D061','02004','0504','003','3','6'),(267,'267','2021020105','D061','02004','0805','003','7','10'),(268,'268','2021020102','D061','02004','0806','004','8','11'),(269,'269','2021020103','D061','02004','0806','005','2','5'),(270,'270','2021010106','D062','02011','0615','002','7','11'),(271,'271','2021010104','D062','02011','0703','004','8','12'),(272,'272','2021010105','D062','02011','0715','005','1','5'),(273,'273','2021010105','D062','02038','0501','005','10','12'),(274,'274','2021010106','D062','02038','0501','005','10','12'),(275,'275','2021020209','D063','02005','0719','002','7','12'),(276,'276','2021010101','D063','02026','0507','003','1','4'),(277,'277','2021010102','D063','02026','0507','003','1','4'),(278,'278','2021020208','D063','02005','0708','003','7','12'),(279,'279','2021010301','D064','02006','0805','001','1','3'),(280,'280','2021010303','D064','02006','0506','001','4','6'),(281,'281','2021010302','D064','02006','0805','002','1','3'),(282,'282','2021010305','D064','02006','0506','003','1','3'),(283,'283','2021010306','D064','02006','0504','004','1','3'),(284,'284','2021010304','D064','02006','0805','005','2','4'),(285,'285','2021020102','D065','02010','0708','002','1','3'),(286,'286','2021020102','D065','02030','0615','004','1','6'),(287,'287','2021010206','D066','02013','0503','001','4','6'),(288,'288','2021020104','D067','02003','0805','001','4','6'),(289,'289','2021020105','D067','02003','0805','001','4','6'),(290,'290','2021020105','D067','02029','0705','003','1','6'),(291,'291','2021010201','D067','02013','0506','004','10','12'),(292,'292','2021020104','D067','02029','0703','005','7','12'),(293,'293','2021020308','D068','02027','0714','002','7','12'),(294,'294','2021020307','D068','02027','0703','004','1','6'),(295,'295','2021020303','D069','02039','0618','002','7','12'),(296,'296','2021010206','D069','02033','0702','004','1','6'),(297,'297','2021020406','D070','02009','0502','001','4','6'),(298,'298','2021020405','D070','02009','0806','001','10','12'),(299,'299','2021020404','D070','02009','0717','002','4','6'),(300,'300','2021020407','D070','02009','0806','003','4','6'),(301,'301','2021020306','D071','02017','0505','001','1','4'),(302,'302','2021020307','D071','02017','0505','001','1','4'),(303,'303','2021020108','D071','02003','0714','001','7','9'),(304,'304','2021020308','D071','02017','0501','003','1','4'),(305,'305','2021020108','D071','02029','0719','004','1','6'),(306,'306','2021010303','D072','02014','0720','001','1','3'),(307,'307','2021010304','D072','02014','0720','001','1','3'),(308,'308','2021010305','D072','02014','0714','001','10','12'),(309,'309','2021010306','D072','02014','0714','001','10','12'),(310,'310','2021010301','D072','02014','0501','005','7','9'),(311,'311','2021010302','D072','02014','0501','005','7','9'),(312,'312','2021020305','D073','02012','0714','003','1','4'),(313,'313','2021020106','D074','02038','0507','002','3','5'),(314,'314','2021020107','D074','02038','0507','002','3','5'),(315,'315','2021020109','D074','02038','0805','002','10','12'),(316,'316','2021020108','D074','02038','0806','003','7','9'),(317,'317','2021010206','D074','02019','0719','005','1','5'),(318,'318','2021010205','D074','02019','0713','005','7','11'),(319,'319','2021010105','D075','02028','0501','001','1','3'),(320,'320','2021020304','D075','02039','0706','002','1','6'),(321,'321','2021020301','D075','02039','0618','003','1','6'),(322,'322','2021010103','D075','02028','0503','003','8','10'),(323,'323','2021010104','D075','02028','0503','003','8','10'),(324,'324','2021020303','D076','02012','0618','001','1','4'),(325,'325','2021020304','D076','02012','0618','001','1','4'),(326,'326','2021020307','D076','02015','0701','001','7','12'),(327,'327','2021020308','D076','02015','0718','003','7','12'),(328,'328','2021020306','D077','02015','0705','001','7','12'),(329,'329','2021020202','D077','02037','0715','004','1','6'),(330,'330','2021020205','D078','02018','0615','002','1','5'),(331,'331','2021020301','D078','02015','0715','002','7','12'),(332,'332','2021020302','D078','02015','0617','003','1','6'),(333,'333','2021020206','D078','02018','0706','005','8','12'),(334,'334','2021010105','D079','02040','0503','002','4','6'),(335,'335','2021010106','D079','02040','0503','002','4','6'),(336,'336','2021010105','D079','02031','0705','002','8','12'),(337,'337','2021010106','D079','02031','0715','003','8','12'),(338,'338','2021020105','D079','02035','0506','005','2','5'),(339,'339','2021010103','D080','02040','0505','001','7','9'),(340,'340','2021010104','D080','02040','0505','001','7','9'),(341,'341','2021020109','D080','02035','0506','002','1','4'),(342,'342','2021010104','D080','02031','0701','003','2','6'),(343,'343','2021010103','D080','02031','0508','004','8','12'),(344,'344','2021020405','D081','02014','0507','001','1','3'),(345,'345','2021020406','D081','02014','0507','001','1','3'),(346,'346','2021020403','D081','02014','0503','002','1','3'),(347,'347','2021020404','D081','02014','0503','002','1','3'),(348,'348','2021020407','D081','02014','0506','003','8','10'),(349,'349','2021020401','D081','02014','0501','004','1','3'),(350,'350','2021020402','D081','02014','0501','004','1','3'),(351,'351','2021010202','D082','02013','0806','002','1','3'),(352,'352','2021010101','D082','02010','0707','002','4','6'),(353,'353','2021010102','D082','02010','0707','002','4','6'),(354,'354','2021010101','D082','02030','0720','002','7','12'),(355,'355','2021010102','D082','02030','0508','005','1','6'),(356,'356','2021020106','D083','02010','0617','001','7','9'),(357,'357','2021020302','D083','02041','0508','002','7','12'),(358,'358','2021020106','D083','02030','0719','003','7','12'),(359,'359','2021020301','D083','02041','0708','004','7','12'),(360,'360','2021020205','D084','02032','0708','001','1','3'),(361,'361','2021010203','D084','02033','0620','003','1','6'),(362,'362','2021020204','D084','02020','0505','004','1','3'),(363,'363','2021020205','D084','02020','0505','004','1','3'),(364,'364','2021020205','D084','02033','0620','004','7','12'),(365,'365','2021010202','D085','02006','0504','001','1','3'),(366,'366','2021010204','D085','02006','0502','001','7','9'),(367,'367','2021010205','D085','02006','0504','002','7','9'),(368,'368','2021010203','D085','02006','0806','002','10','12'),(369,'369','2021010206','D085','02006','0806','003','1','3'),(370,'370','2021010201','D085','02006','0502','004','2','4');
/*!40000 ALTER TABLE `jadwal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jp`
--

DROP TABLE IF EXISTS `jp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jp` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jp`
--

LOCK TABLES `jp` WRITE;
/*!40000 ALTER TABLE `jp` DISABLE KEYS */;
INSERT INTO `jp` VALUES (1,'1','07:00:00','07:50:00'),(2,'2','07:50:00','08:40:00'),(3,'3','08:40:00','09:30:00'),(4,'4','09:40:00','10:30:00'),(5,'5','10:30:00','11:20:00'),(6,'6','11:20:00','12:10:00'),(7,'7','12:50:00','13:40:00'),(8,'8','13:40:00','14:30:00'),(9,'9','14:30:00','15:20:00'),(10,'10','15:30:00','15:30:00'),(11,'11','16:20:00','17:10:00'),(12,'12','17:10:00','18:00:00');
/*!40000 ALTER TABLE `jp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kelas`
--

DROP TABLE IF EXISTS `kelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_kelas` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kelas`
--

LOCK TABLES `kelas` WRITE;
/*!40000 ALTER TABLE `kelas` DISABLE KEYS */;
INSERT INTO `kelas` VALUES (1,'2021010101','001','MI-1A'),(2,'2021010102','001','MI-1B'),(3,'2021010103','001','MI-1C'),(4,'2021010104','001','MI-1D'),(5,'2021010105','001','MI-1E'),(6,'2021010106','001','MI-1F'),(7,'2021010107','001','MI-1H'),(8,'2021010201','001','MI-2A'),(9,'2021010202','001','MI-2B'),(10,'2021010203','001','MI-2C'),(11,'2021010204','001','MI-2D'),(12,'2021010205','001','MI-2E'),(13,'2021010206','001','MI-2F'),(14,'2021010301','001','MI-3A'),(15,'2021010302','001','MI-3B'),(16,'2021010303','001','MI-3C'),(17,'2021010304','001','MI-3D'),(18,'2021010305','001','MI-3E'),(19,'2021010306','001','MI-3F'),(20,'2021020101','002','TI-1A'),(21,'2021020102','002','TI-1B'),(22,'2021020103','002','TI-1C'),(23,'2021020104','002','TI-1D'),(24,'2021020105','002','TI-1E'),(25,'2021020106','002','TI-1F'),(26,'2021020107','002','TI-1G'),(27,'2021020108','002','TI-1H'),(28,'2021020109','002','TI-1I'),(29,'2021020201','002','TI-2A'),(30,'2021020202','002','TI-2B'),(31,'2021020203','002','TI-2C'),(32,'2021020204','002','TI-2D'),(33,'2021020205','002','TI-2E'),(34,'2021020206','002','TI-2F'),(35,'2021020207','002','TI-2G'),(36,'2021020208','002','TI-2H'),(37,'2021020209','002','TI-2I'),(38,'2021020301','002','TI-3A'),(39,'2021020302','002','TI-3B'),(40,'2021020303','002','TI-3C'),(41,'2021020304','002','TI-3D'),(42,'2021020305','002','TI-3E'),(43,'2021020306','002','TI-3F'),(44,'2021020307','002','TI-3G'),(45,'2021020308','002','TI-3H'),(46,'2021020401','002','TI-4A'),(47,'2021020402','002','TI-4B'),(48,'2021020403','002','TI-4C'),(49,'2021020404','002','TI-4D'),(50,'2021020405','002','TI-4E'),(51,'2021020406','002','TI-4F'),(52,'2021020407','002','TI-4G');
/*!40000 ALTER TABLE `kelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mk`
--

DROP TABLE IF EXISTS `mk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_mk` varchar(255) NOT NULL,
  `nama_mk` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mk`
--

LOCK TABLES `mk` WRITE;
/*!40000 ALTER TABLE `mk` DISABLE KEYS */;
INSERT INTO `mk` VALUES (1,'02001','Agama'),(2,'02002','Alajabar Linier'),(3,'02003','Algoritma dan Struktur Data'),(4,'02004','Aljabar Linier'),(5,'02005','Analisis Dan Desan Berorientasi Objek'),(6,'02006','Bahasa Indonesia'),(7,'02007','Bahasa Inggris'),(8,'02008','Bahasa Inggris 2'),(9,'02009','Bahasa Inggris Persiapan Kerja'),(10,'02010','Basis Data'),(11,'02011','Desain Pemrograman Web'),(12,'02012','Digital Entrepreneurship'),(13,'02013','E-Business'),(14,'02014','Etika Profesi Bidang TI'),(15,'02015','Internet Of Things'),(16,'02016','Kewarganegaraan'),(17,'02017','Komputasi Multimedia'),(18,'02018','Machine Learning'),(19,'02019','Manajemen Jaringan Komputer'),(20,'02020','Manajemen Proyek'),(21,'02021','Manajemen Proyek '),(22,'02022','Pemrograman Berbasis Framework'),(23,'02023','Pemrograman Mobile'),(24,'02024','Pemrograman Multimedia'),(25,'02025','Pemrograman Web Lanjut'),(26,'02026','Pengembangan Perangkat Lunak Berbasis Object'),(27,'02027','Pengolahan Citra dan Visi Komputer'),(28,'02028','Penulisan Ilmiah'),(29,'02029','Praktikum Algoritma dan Struktur Data'),(30,'02030','Praktikum Basis Data'),(31,'02031','Praktikum Struktur Data'),(32,'02032','Proyek 1_P1'),(33,'02033','Proyek 1_P2'),(34,'02034','Proyek 2_P2'),(35,'02035','Rekayasa Perangkat Lunak'),(36,'02036','Sistem Informasi'),(37,'02037','Sistem Manajemen Basis Data'),(38,'02038','Sistem Operasi'),(39,'02039','Sistem Pendukung Keputusan'),(40,'02040','Struktur Data'),(41,'02041','Teknologi Data');
/*!40000 ALTER TABLE `mk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodi`
--

DROP TABLE IF EXISTS `prodi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_prodi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodi`
--

LOCK TABLES `prodi` WRITE;
/*!40000 ALTER TABLE `prodi` DISABLE KEYS */;
INSERT INTO `prodi` VALUES (1,'001','D3 Manajemen Informatika'),(2,'002','D4 Teknik Informatika');
/*!40000 ALTER TABLE `prodi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruang`
--

DROP TABLE IF EXISTS `ruang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_ruang` varchar(255) NOT NULL,
  `nama_ruang` varchar(255) NOT NULL,
  `deskripsi_ruang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruang`
--

LOCK TABLES `ruang` WRITE;
/*!40000 ALTER TABLE `ruang` DISABLE KEYS */;
INSERT INTO `ruang` VALUES (1,'0501','RT01','Ruang Teori 1'),(2,'0502','RT02','Ruang Teori 2'),(3,'0503','RT03','Ruang Teori 3'),(4,'0504','RT04','Ruang Teori 4'),(5,'0505','RT05','Ruang Teori 5'),(6,'0506','RT06','Ruang Teori 6'),(7,'0507','RT07','Ruang Teori 7'),(8,'0508','LPY1','Laboratorium Proyek 1'),(9,'0615','LSI1','Laboratorium Sistem Informasi 1'),(10,'0617','LSI2','Laboratorium Sistem Informasi 2'),(11,'0618','LSI3','Laboratorium Sistem Informasi 3'),(12,'0619','LPY2','Laboratorium Proyek 2'),(13,'0620','LPY3','Laboratorium Proyek 3'),(14,'0701','LPR1','Laboratorium Pemrograman 1'),(15,'0702','LPR2','Laboratorium Pemrograman 2'),(16,'0703','LPR3','Laboratorium Pemrograman 3'),(17,'0704','LPR4','Laboratorium Pemrograman 4'),(18,'0705','LPR5','Laboratorium Pemrograman 5'),(19,'0706','LPR6','Laboratorium Pemrograman 6'),(20,'0707','LKJ1','Laboratorium Keamanan Jaringan 1'),(21,'0708','LPR7','Laboratorium Pemrograman 7'),(22,'0713','LKJ2','Laboratorium Keamanan Jaringan 2'),(23,'0714','LPR8','Laboratorium Pemrograman 8'),(24,'0715','LKJ3','Laboratorium Keamanan Jaringan 3'),(25,'0716','LIG1','Laboratorium Visi Komputer 1'),(26,'0717','RT08','Ruang Teori 8'),(27,'0718','LIG2','Laboratorium Visi Komputer 2'),(28,'0719','LPY4','Laboratorium Proyek 4'),(29,'0720','LAI1','Laboratorium Kecerdasan Buatan 1'),(30,'0801','L DTS','Laboratorium DTS'),(31,'0805','RT09','Ruang Teori 9'),(32,'0806','RT10','Ruang Teori 10'),(33,'1001','RT11','Ruang Teori 11'),(34,'1002','ROL1','Ruang Online 1'),(35,'1003','ROL2','Ruang Online 2'),(36,'1004','ROL3','Ruang Online 3');
/*!40000 ALTER TABLE `ruang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_62_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_62_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_62_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_62_21_student`;

--
-- Table structure for table `dosen`
--

DROP TABLE IF EXISTS `dosen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dosen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_dosen` varchar(255) NOT NULL,
  `nama_dosen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dosen`
--

LOCK TABLES `dosen` WRITE;
/*!40000 ALTER TABLE `dosen` DISABLE KEYS */;
INSERT INTO `dosen` VALUES (1,'D001','Abdul Chalim, SAg., MPd.I'),(2,'D002','Ade Ismail'),(3,'D003','Agung Nugroho Pramudhita ST., MT.'),(4,'D004','Ahmadi Yuli Ananta ST., MM.'),(5,'D005','Ane Fany Novitasari, SH.MKn.'),(6,'D006','Annisa Puspa Kirana MKom.'),(7,'D007','Annisa Taufika Firdausi ST., MT.'),(8,'D008','Anugrah Nur Rahmanto SSn., MDs.'),(9,'D009','Ariadi Retno Ririd SKom., MKom.'),(10,'D010','Arie Rachmad Syulistyo SKom., MKom.'),(11,'D011','Arief Prasetyo SKom., MKom.'),(12,'D012','Arwin Sumari ST., MT., DR.'),(13,'D013','Atiqah Nurul Asri SPd., MPd.'),(14,'D014','Bagas Satya Dian Nugraha, ST., MT.'),(15,'D015','Banni Satria Andoko, S. Kom., M.MSI'),(16,'D016','Budi Harijanto ST., MMKom.'),(17,'D017','Cahya Rahmad ST., MKom. DR.Eng'),(18,'D018','Candra Bella Vista SKom., MT.'),(19,'D019','Candrasena Setiadi ST., MMT.'),(20,'D020','Deasy Sandhya Elya Ikawati SSi., MSi.'),(21,'D021','Deddy Kusbianto PA Ir. MMKom.'),(22,'D022','Dhebys Suryani SKom. MT.'),(23,'D023','Dian Hanifudin Subhi SKom., MT.'),(24,'D024','Dika Rizky Yunianto SKom., MKom.'),(25,'D025','Dimas Wahyu Wibowo ST., MT.'),(26,'D026','Dodit Supriyanto SKom., MT.'),(27,'D027','Dwi Puspitasari SKom., MKom.'),(28,'D028','Eka Larasati Amalia, SST., MT.'),(29,'D029','Ekojono, ST., M.Kom.'),(30,'D030','Elok Nur Hamdana, ST., MT'),(31,'D031','Erfan Rohadi, ST., MEng., PhD.'),(32,'D032','Faiz Ushbah Mubarok, SPd., MPd.'),(33,'D033','Farid Angga Pribadi, SKom.,MKom.'),(34,'D034','Farida Ulfa, SPd., MPd.'),(35,'D035','Gunawan Budi Prasetyo, ST., MMT., Ph.D.'),(36,'D036','Habibie Ed Dien, MT.'),(37,'D037','Hairus'),(38,'D038','Hendra Pradibta, SE., M.Sc.'),(39,'D039','Ika Kusumaning Putri, MT.'),(40,'D040','Imam Fahrur Rozi, ST., MT.'),(41,'D041','Indra Dharma Wijaya, ST., MMT.'),(42,'D042','Irsyad Arif Mashudi, M.Kom'),(43,'D043','Kadek Suarjuna Batubulan, SKom, MT.'),(44,'D044','Luqman Affandi, SKom., MMSI.'),(45,'D045','M. Hasyim Ratsanjani'),(46,'D046','Mamluatul Haniah'),(47,'D047','Meyti Eka Apriyani ST., MT.'),(48,'D048','Milyun Nima Shoumi'),(49,'D049','Moch. Zawaruddin Abdullah, S.ST., M.Kom'),(50,'D050','Moh. Amin'),(51,'D051','Muhammad Afif Hendrawan, S.Kom.'),(52,'D052','Muhammad Shulhan Khairy, SKom., MKom.'),(53,'D053','Muhammad Unggul Pamenang, SSt., MT.'),(54,'D054','Mungki Astiningrum, ST., MKom.'),(55,'D055','Mustika Mentari, SKom., MKom.'),(56,'D056','Noprianto'),(57,'D057','Odhitya Desta Triswidrananta, SPd., MPd.'),(58,'D058','Pramana Yoga Saputra, SKom., MMT.'),(59,'D059','Putra Prima A., ST., MKom.'),(60,'D060','Rakhmat Arianto SST., MKom.'),(61,'D061','Rawansyah., Drs., MPd.'),(62,'D062','Retno Damayanti, SPd.'),(63,'D063','Ridwan Rismanto, SST., MKom.'),(64,'D064','Rizki Putri Ramadhani, S.S., M.Pd.'),(65,'D065','Rizky Ardiansyah, SKom., MT.'),(66,'D066','Robby Anggriawan SE., ME.'),(67,'D067','Rokhimatul Wakhidah SPd. MT.'),(68,'D068','Rosa Andrie Asmara, ST., MT., Dr. Eng.'),(69,'D069','Rudy Ariyanto, ST., MCs.'),(70,'D070','Satrio Binusa S, SS, M.Pd'),(71,'D071','Septian Enggar Sukmana, SPd., MT.'),(72,'D072','Shohib Muslim'),(73,'D073','Siti Romlah, Dra., M.M.'),(74,'D074','Sofyan Noor Arief, S.ST., M.Kom.'),(75,'D075','Ulla Delfiana Rosiani, ST., MT.'),(76,'D076','Usman Nurhasan, S.Kom., MT.'),(77,'D077','Very Sugiarto, SPd., MKom.'),(78,'D078','Vipkas Al Hadid Firdaus, ST.,MT.'),(79,'D079','Vivi Nur Wijayaningrum, S.Kom, M.Kom'),(80,'D080','Vivin Ayu Lestari, SPd.'),(81,'D081','Widaningsih Condrowardhani, SH., MH.'),(82,'D082','Wilda Imama Sabilla, S.Kom., M.Kom.'),(83,'D083','Yoppy Yunhasnawa, SST., MSc.'),(84,'D084','Yuri Ariyanto, SKom., MKom.'),(85,'D085','Zulmy Faqihuddin Putera, S.Pd., M.Pd');
/*!40000 ALTER TABLE `dosen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hari`
--

DROP TABLE IF EXISTS `hari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_hari` varchar(255) NOT NULL,
  `nama_hari` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hari`
--

LOCK TABLES `hari` WRITE;
/*!40000 ALTER TABLE `hari` DISABLE KEYS */;
INSERT INTO `hari` VALUES (1,'001','Senin'),(2,'002','Selasa'),(3,'003','Rabu'),(4,'004','Kamis'),(5,'005','Jumat'),(6,'006','Sabtu'),(7,'007','Minggu');
/*!40000 ALTER TABLE `hari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jadwal`
--

DROP TABLE IF EXISTS `jadwal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jadwal` varchar(255) NOT NULL,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_dosen` varchar(255) NOT NULL,
  `kode_mk` varchar(255) NOT NULL,
  `kode_ruang` varchar(255) NOT NULL,
  `kode_hari` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=371 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jadwal`
--

LOCK TABLES `jadwal` WRITE;
/*!40000 ALTER TABLE `jadwal` DISABLE KEYS */;
INSERT INTO `jadwal` VALUES (1,'1','2021020101','D001','02001','0504','001','7','9'),(2,'2','2021010103','D001','02001','0506','002','9','11'),(3,'3','2021010105','D001','02001','0806','003','10','12'),(4,'4','2021010102','D001','02001','0506','004','1','3'),(5,'5','2021010106','D001','02001','0806','004','4','6'),(6,'6','2021010101','D001','02001','0506','004','7','9'),(7,'7','2021010104','D001','02001','0506','005','10','12'),(8,'8','2021010206','D002','02037','0702','001','7','12'),(9,'9','2021020202','D002','02036','0708','003','2','4'),(10,'10','2021010205','D002','02037','0713','004','1','6'),(11,'11','2021020209','D002','02025','0719','004','7','12'),(12,'12','2021020301','D003','02012','0508','002','1','4'),(13,'13','2021020302','D003','02012','0508','002','1','4'),(14,'14','2021010201','D003','02017','0719','003','2','5'),(15,'15','2021010202','D003','02017','0719','003','2','5'),(16,'16','2021010203','D003','02017','0507','005','2','5'),(17,'17','2021010106','D004','02028','0704','001','1','3'),(18,'18','2021020203','D004','02032','0507','001','10','12'),(19,'19','2021010201','D004','02034','0617','002','7','12'),(20,'20','2021020203','D004','02032','0708','004','1','6'),(21,'21','2021020104','D005','02016','0717','001','1','3'),(22,'22','2021020108','D005','02016','0504','001','4','6'),(23,'23','2021020106','D005','02016','0805','001','10','12'),(24,'24','2021020105','D005','02016','0502','002','1','3'),(25,'25','2021020102','D005','02016','0806','002','4','6'),(26,'26','2021020103','D005','02016','0502','003','4','6'),(27,'27','2021020107','D005','02016','0806','004','1','3'),(28,'28','2021020109','D005','02016','0502','005','1','3'),(29,'29','2021010105','D006','02010','0701','002','1','3'),(30,'30','2021010105','D006','02030','0618','004','1','6'),(31,'31','2021010203','D006','02037','0705','004','7','12'),(32,'32','2021010204','D006','02037','0619','005','7','12'),(33,'33','2021010103','D007','02011','0705','002','2','6'),(34,'34','2021020101','D007','02038','0503','003','3','5'),(35,'35','2021020102','D007','02038','0503','003','3','5'),(36,'36','2021010102','D007','02011','0615','004','8','12'),(37,'37','2021010101','D007','02011','0703','005','2','6'),(38,'38','2021010306','D008','02012','0619','001','2','5'),(39,'39','2021020203','D008','02036','0716','003','2','4'),(40,'40','2021020104','D008','02038','0505','004','4','6'),(41,'41','2021020105','D008','02038','0505','004','4','6'),(42,'42','2021010304','D008','02012','0507','005','9','12'),(43,'43','2021010305','D008','02012','0507','005','9','12'),(44,'44','2021020103','D009','02035','0505','002','7','10'),(45,'45','2021020104','D009','02035','0505','002','7','10'),(46,'46','2021020204','D009','02005','0704','003','7','12'),(47,'47','2021020203','D009','02005','0705','005','1','6'),(48,'48','2021010103','D010','02026','0806','001','3','4'),(49,'49','2021010202','D010','02023','0704','001','8','11'),(50,'50','2021010202','D010','02023','0713','002','7','10'),(51,'51','2021010201','D010','02023','0705','003','7','10'),(52,'52','2021010201','D010','02023','0716','005','8','11'),(53,'53','2021010201','D011','02019','0718','002','1','5'),(54,'54','2021010203','D011','02019','0706','004','1','5'),(55,'55','2021010204','D011','02019','0716','004','8','12'),(56,'56','2021010202','D011','02019','0706','005','1','5'),(57,'57','2021020204','D012','02018','0702','001','1','5'),(58,'58','2021020203','D012','02018','0619','002','1','5'),(59,'59','2021010204','D012','02020','0704','002','9','11'),(60,'60','2021010302','D013','02008','0805','002','4','6'),(61,'61','2021020109','D013','02007','0805','002','7','9'),(62,'62','2021010301','D013','02009','0717','003','4','6'),(63,'63','2021020101','D013','02008','0717','003','7','9'),(64,'64','2021020401','D013','02009','0717','004','4','6'),(65,'65','2021020107','D013','02008','0717','005','2','4'),(66,'66','2021020102','D013','02008','0506','005','7','9'),(67,'67','2021020301','D014','02017','0720','004','1','4'),(68,'68','2021020302','D014','02017','0720','004','1','4'),(69,'69','2021020303','D014','02017','0714','005','2','5'),(70,'70','2021020308','D014','02017','0714','005','7','10'),(71,'71','2021020206','D015','02032','0720','002','3','5'),(72,'72','2021020206','D015','02005','0619','002','7','12'),(73,'73','2021020205','D015','02005','0713','003','7','12'),(74,'74','2021020206','D015','02033','0701','004','7','12'),(75,'75','2021020103','D016','02038','0506','001','1','3'),(76,'76','2021020204','D016','02032','0615','001','7','9'),(77,'77','2021010103','D016','02038','0501','004','4','6'),(78,'78','2021010104','D016','02038','0501','004','4','6'),(79,'79','2021020204','D016','02033','0719','005','7','12'),(80,'80','2021020106','D017','02004','0805','004','3','6'),(81,'81','2021020302','D017','02027','0702','004','7','12'),(82,'82','2021020301','D017','02027','0704','005','1','6'),(83,'83','2021020109','D017','02002','0717','005','7','10'),(84,'84','2021020302','D018','02039','0701','001','1','6'),(85,'85','2021010203','D018','02013','0501','001','10','12'),(86,'86','2021010204','D018','02013','0501','001','10','12'),(87,'87','2021020301','D019','02022','0620','001','7','12'),(88,'88','2021020302','D019','02022','0702','005','1','6'),(89,'89','2021020108','D020','02004','0502','004','9','12'),(90,'90','2021020107','D020','02004','0502','005','7','10'),(91,'91','2021020207','D021','02005','0615','001','1','6'),(92,'92','2021020207','D021','02032','0707','002','1','3'),(93,'93','2021020207','D021','02033','0718','003','1','6'),(94,'94','2021010303','D021','02012','0703','003','8','11'),(95,'95','2021010204','D022','02033','0704','003','1','6'),(96,'96','2021010205','D022','02033','0706','003','7','12'),(97,'97','2021020306','D022','02012','0504','005','1','4'),(98,'98','2021010205','D023','02023','0508','001','1','4'),(99,'99','2021020206','D023','02025','0706','003','1','6'),(100,'100','2021010206','D023','02023','0618','003','8','11'),(101,'101','2021010205','D023','02023','0701','005','1','4'),(102,'102','2021010206','D023','02023','0705','005','7','10'),(103,'103','2021010201','D024','02037','0713','001','1','6'),(104,'104','2021010103','D024','02010','0615','001','10','12'),(105,'105','2021010103','D024','02010','0619','003','1','6'),(106,'106','2021010202','D024','02037','0701','005','7','12'),(107,'107','2021020305','D025','02024','0615','001','1','6'),(108,'108','2021020306','D025','02022','0713','002','1','6'),(109,'109','2021020304','D025','02017','0620','005','1','4'),(110,'110','2021020305','D025','02017','0620','005','1','4'),(111,'111','2021020305','D026','02015','0508','003','7','12'),(112,'112','2021020306','D026','02041','0701','004','1','6'),(113,'113','2021020103','D027','02010','0501','002','4','6'),(114,'114','2021020104','D027','02010','0501','002','4','6'),(115,'115','2021010106','D027','02035','0707','003','1','4'),(116,'116','2021020103','D027','02010','0615','004','7','12'),(117,'117','2021020104','D027','02010','0617','005','1','6'),(118,'118','2021010104','D028','02026','0504','002','1','4'),(119,'119','2021020107','D028','02035','0503','002','8','11'),(120,'120','2021020108','D028','02035','0503','002','8','11'),(121,'121','2021010105','D028','02026','0505','003','3','6'),(122,'122','2021010106','D028','02026','0505','003','3','6'),(123,'123','2021020209','D029','02032','0503','001','7','9'),(124,'124','2021020204','D029','02036','0703','003','1','3'),(125,'125','2021020205','D029','02036','0703','003','1','3'),(126,'126','2021020209','D029','02033','0508','004','1','6'),(127,'127','2021020206','D029','02036','0501','005','1','3'),(128,'128','2021020207','D029','02036','0501','005','1','3'),(129,'129','2021020109','D030','02010','0716','001','4','6'),(130,'130','2021020108','D030','02010','0715','002','2','4'),(131,'131','2021020201','D030','02036','0502','003','1','3'),(132,'132','2021020109','D030','02030','0620','004','1','6'),(133,'133','2021020108','D030','02030','0615','005','1','6'),(134,'134','2021020202','D031','02032','0507','001','7','9'),(135,'135','2021010203','D031','02020','0718','002','7','9'),(136,'136','2021010201','D031','02020','0501','004','7','9'),(137,'137','2021010202','D031','02020','0501','004','7','9'),(138,'138','2021020202','D031','02033','0707','005','7','12'),(139,'139','2021020104','D032','02008','0806','001','7','9'),(140,'140','2021020103','D032','02008','0717','002','1','3'),(141,'141','2021020403','D032','02009','0502','002','10','12'),(142,'142','2021010304','D032','02009','0506','003','4','6'),(143,'143','2021020402','D032','02009','0504','004','4','6'),(144,'144','2021020105','D032','02009','0717','004','8','10'),(145,'145','2021010303','D032','02009','0806','005','7','9'),(146,'146','2021020203','D033','02037','0716','003','7','12'),(147,'147','2021020108','D034','02008','0502','001','1','3'),(148,'148','2021020106','D034','02008','0502','002','7','9'),(149,'149','2021010305','D034','02009','0805','003','4','6'),(150,'150','2021010306','D034','02009','0506','004','4','6'),(151,'151','2021020208','D035','02018','0618','002','2','6'),(152,'152','2021020307','D035','02041','0716','002','7','12'),(153,'153','2021020308','D035','02041','0716','005','1','6'),(154,'154','2021020207','D035','02018','0615','005','8','12'),(155,'155','2021020209','D036','02036','0704','001','4','6'),(156,'156','2021020304','D036','02022','0508','001','7','12'),(157,'157','2021020303','D036','02022','0704','002','1','6'),(158,'158','2021020202','D036','02025','0706','002','7','12'),(159,'159','2021010102','D037','02016','0506','001','7','9'),(160,'160','2021010107','D037','02016','0806','002','7','9'),(161,'161','2021010104','D037','02016','0504','002','10','12'),(162,'162','2021020101','D037','02016','0717','003','10','12'),(163,'163','2021010106','D037','02016','0717','004','1','3'),(164,'164','2021010103','D037','02016','0504','005','7','9'),(165,'165','2021010101','D037','02016','0806','005','10','12'),(166,'166','2021020307','D038','02012','0714','002','2','5'),(167,'167','2021020209','D038','02020','0620','003','10','12'),(168,'168','2021010301','D038','02012','0503','005','1','4'),(169,'169','2021010302','D038','02012','0503','005','1','4'),(170,'170','2021010101','D039','02040','0503','001','1','3'),(171,'171','2021010102','D039','02040','0503','001','1','3'),(172,'172','2021020209','D039','02037','0703','002','1','6'),(173,'173','2021010102','D039','02040','0617','003','8','12'),(174,'174','2021010101','D039','02040','0617','004','2','6'),(175,'175','2021020109','D040','02003','0713','001','9','11'),(176,'176','2021010202','D040','02033','0619','003','7','12'),(177,'177','2021020109','D040','02003','0718','004','7','12'),(178,'178','2021010101','D041','02038','0507','001','4','6'),(179,'179','2021010102','D041','02038','0507','001','4','6'),(180,'180','2021010101','D041','02028','0501','002','1','3'),(181,'181','2021010102','D041','02028','0501','002','1','3'),(182,'182','2021020205','D042','02037','0703','001','7','12'),(183,'183','2021020204','D042','02037','0715','004','7','12'),(184,'184','2021020101','D042','02035','0505','005','2','5'),(185,'185','2021020102','D042','02035','0505','005','2','5'),(186,'186','2021010204','D043','02017','0705','001','2','5'),(187,'187','2021010205','D043','02017','0505','002','2','5'),(188,'188','2021010204','D043','02017','0505','002','2','5'),(189,'189','2021020208','D043','02036','0507','004','7','9'),(190,'190','2021020205','D043','02025','0720','005','1','6'),(191,'191','2021020201','D044','02032','0706','001','3','5'),(192,'192','2021010205','D044','02021','0618','001','10','12'),(193,'193','2021010206','D044','02021','0618','001','10','12'),(194,'194','2021020206','D044','02020','0707','004','3','5'),(195,'195','2021020207','D044','02020','0707','004','3','5'),(196,'196','2021020201','D044','02033','0713','004','7','12'),(197,'197','2021020208','D045','02037','0718','001','1','6'),(198,'198','2021020107','D045','02010','0702','001','9','11'),(199,'199','2021020107','D045','02030','0615','003','1','6'),(200,'200','2021020207','D045','02037','0619','004','7','12'),(201,'201','2021020103','D046','02003','0501','001','4','6'),(202,'202','2021020101','D046','02010','0617','002','3','5'),(203,'203','2021020101','D046','02030','0704','004','1','6'),(204,'204','2021020209','D046','02018','0707','005','1','5'),(205,'205','2021020103','D046','02003','0702','005','7','12'),(206,'206','2021020308','D047','02022','0620','001','1','6'),(207,'207','2021020203','D047','02020','0805','001','7','9'),(208,'208','2021020201','D047','02020','0620','002','1','3'),(209,'209','2021020202','D047','02020','0620','002','1','3'),(210,'210','2021020307','D047','02022','0715','003','1','6'),(211,'211','2021020305','D048','02027','0716','002','1','6'),(212,'212','2021020201','D048','02025','0503','004','1','6'),(213,'213','2021020208','D048','02025','0713','005','1','6'),(214,'214','2021020306','D048','02027','0620','005','7','12'),(215,'215','2021010106','D049','02010','0716','001','7','9'),(216,'216','2021020204','D049','02025','0719','002','1','6'),(217,'217','2021020203','D049','02025','0703','002','7','12'),(218,'218','2021010106','D049','02030','0706','004','7','12'),(219,'219','2021020106','D050','02001','0717','001','4','6'),(220,'220','2021020103','D050','02001','0506','001','7','9'),(221,'221','2021020105','D050','02001','0504','001','10','12'),(222,'222','2021020109','D050','02001','0805','003','1','3'),(223,'223','2021020102','D050','02001','0504','003','8','10'),(224,'224','2021020104','D050','02001','0805','004','7','9'),(225,'225','2021020107','D050','02001','0805','004','10','12'),(226,'226','2021020108','D050','02001','0805','005','7','9'),(227,'227','2021020206','D051','02037','0715','001','1','6'),(228,'228','2021020208','D051','02020','0508','003','2','4'),(229,'229','2021020306','D051','02039','0701','003','7','12'),(230,'230','2021020305','D051','02039','0619','004','1','6'),(231,'231','2021010104','D052','02010','0701','001','4','6'),(232,'232','2021020201','D052','02005','0708','002','7','12'),(233,'233','2021020202','D052','02005','0720','003','7','12'),(234,'234','2021010104','D052','02030','0618','005','1','6'),(235,'235','2021020105','D053','02010','0708','001','7','9'),(236,'236','2021020105','D053','02030','0704','005','7','12'),(237,'237','2021020101','D054','02003','0703','001','2','4'),(238,'238','2021020102','D054','02003','0703','001','2','4'),(239,'239','2021010205','D054','02013','0501','001','7','9'),(240,'240','2021020102','D054','02029','0620','002','7','12'),(241,'241','2021020101','D054','02029','0720','004','7','12'),(242,'242','2021020106','D055','02003','0716','001','1','3'),(243,'243','2021020304','D055','02027','0718','004','1','6'),(244,'244','2021020106','D055','02029','0618','004','7','12'),(245,'245','2021020303','D055','02027','0718','005','7','12'),(246,'246','2021020107','D056','02003','0708','001','4','6'),(247,'247','2021020303','D056','02015','0715','001','7','12'),(248,'248','2021020304','D056','02015','0713','003','1','6'),(249,'249','2021020107','D056','02029','0702','003','7','12'),(250,'250','2021020201','D057','02037','0720','001','7','12'),(251,'251','2021020305','D057','02041','0618','005','7','12'),(252,'252','2021020208','D058','02032','0502','001','10','12'),(253,'253','2021020303','D058','02041','0720','003','1','6'),(254,'254','2021020208','D058','02033','0716','004','1','6'),(255,'255','2021020304','D058','02041','0615','005','7','12'),(256,'256','2021010203','D059','02023','0719','001','1','4'),(257,'257','2021010204','D059','02023','0702','002','2','5'),(258,'258','2021020207','D059','02025','0701','002','7','12'),(259,'259','2021010204','D059','02023','0718','005','2','5'),(260,'260','2021010203','D059','02023','0715','005','8','11'),(261,'261','2021020308','D060','02039','0619','001','7','12'),(262,'262','2021020201','D060','02018','0615','003','7','11'),(263,'263','2021020202','D060','02018','0708','005','1','5'),(264,'264','2021020307','D060','02039','0708','005','7','12'),(265,'265','2021020101','D061','02004','0717','002','9','12'),(266,'266','2021020104','D061','02004','0504','003','3','6'),(267,'267','2021020105','D061','02004','0805','003','7','10'),(268,'268','2021020102','D061','02004','0806','004','8','11'),(269,'269','2021020103','D061','02004','0806','005','2','5'),(270,'270','2021010106','D062','02011','0615','002','7','11'),(271,'271','2021010104','D062','02011','0703','004','8','12'),(272,'272','2021010105','D062','02011','0715','005','1','5'),(273,'273','2021010105','D062','02038','0501','005','10','12'),(274,'274','2021010106','D062','02038','0501','005','10','12'),(275,'275','2021020209','D063','02005','0719','002','7','12'),(276,'276','2021010101','D063','02026','0507','003','1','4'),(277,'277','2021010102','D063','02026','0507','003','1','4'),(278,'278','2021020208','D063','02005','0708','003','7','12'),(279,'279','2021010301','D064','02006','0805','001','1','3'),(280,'280','2021010303','D064','02006','0506','001','4','6'),(281,'281','2021010302','D064','02006','0805','002','1','3'),(282,'282','2021010305','D064','02006','0506','003','1','3'),(283,'283','2021010306','D064','02006','0504','004','1','3'),(284,'284','2021010304','D064','02006','0805','005','2','4'),(285,'285','2021020102','D065','02010','0708','002','1','3'),(286,'286','2021020102','D065','02030','0615','004','1','6'),(287,'287','2021010206','D066','02013','0503','001','4','6'),(288,'288','2021020104','D067','02003','0805','001','4','6'),(289,'289','2021020105','D067','02003','0805','001','4','6'),(290,'290','2021020105','D067','02029','0705','003','1','6'),(291,'291','2021010201','D067','02013','0506','004','10','12'),(292,'292','2021020104','D067','02029','0703','005','7','12'),(293,'293','2021020308','D068','02027','0714','002','7','12'),(294,'294','2021020307','D068','02027','0703','004','1','6'),(295,'295','2021020303','D069','02039','0618','002','7','12'),(296,'296','2021010206','D069','02033','0702','004','1','6'),(297,'297','2021020406','D070','02009','0502','001','4','6'),(298,'298','2021020405','D070','02009','0806','001','10','12'),(299,'299','2021020404','D070','02009','0717','002','4','6'),(300,'300','2021020407','D070','02009','0806','003','4','6'),(301,'301','2021020306','D071','02017','0505','001','1','4'),(302,'302','2021020307','D071','02017','0505','001','1','4'),(303,'303','2021020108','D071','02003','0714','001','7','9'),(304,'304','2021020308','D071','02017','0501','003','1','4'),(305,'305','2021020108','D071','02029','0719','004','1','6'),(306,'306','2021010303','D072','02014','0720','001','1','3'),(307,'307','2021010304','D072','02014','0720','001','1','3'),(308,'308','2021010305','D072','02014','0714','001','10','12'),(309,'309','2021010306','D072','02014','0714','001','10','12'),(310,'310','2021010301','D072','02014','0501','005','7','9'),(311,'311','2021010302','D072','02014','0501','005','7','9'),(312,'312','2021020305','D073','02012','0714','003','1','4'),(313,'313','2021020106','D074','02038','0507','002','3','5'),(314,'314','2021020107','D074','02038','0507','002','3','5'),(315,'315','2021020109','D074','02038','0805','002','10','12'),(316,'316','2021020108','D074','02038','0806','003','7','9'),(317,'317','2021010206','D074','02019','0719','005','1','5'),(318,'318','2021010205','D074','02019','0713','005','7','11'),(319,'319','2021010105','D075','02028','0501','001','1','3'),(320,'320','2021020304','D075','02039','0706','002','1','6'),(321,'321','2021020301','D075','02039','0618','003','1','6'),(322,'322','2021010103','D075','02028','0503','003','8','10'),(323,'323','2021010104','D075','02028','0503','003','8','10'),(324,'324','2021020303','D076','02012','0618','001','1','4'),(325,'325','2021020304','D076','02012','0618','001','1','4'),(326,'326','2021020307','D076','02015','0701','001','7','12'),(327,'327','2021020308','D076','02015','0718','003','7','12'),(328,'328','2021020306','D077','02015','0705','001','7','12'),(329,'329','2021020202','D077','02037','0715','004','1','6'),(330,'330','2021020205','D078','02018','0615','002','1','5'),(331,'331','2021020301','D078','02015','0715','002','7','12'),(332,'332','2021020302','D078','02015','0617','003','1','6'),(333,'333','2021020206','D078','02018','0706','005','8','12'),(334,'334','2021010105','D079','02040','0503','002','4','6'),(335,'335','2021010106','D079','02040','0503','002','4','6'),(336,'336','2021010105','D079','02031','0705','002','8','12'),(337,'337','2021010106','D079','02031','0715','003','8','12'),(338,'338','2021020105','D079','02035','0506','005','2','5'),(339,'339','2021010103','D080','02040','0505','001','7','9'),(340,'340','2021010104','D080','02040','0505','001','7','9'),(341,'341','2021020109','D080','02035','0506','002','1','4'),(342,'342','2021010104','D080','02031','0701','003','2','6'),(343,'343','2021010103','D080','02031','0508','004','8','12'),(344,'344','2021020405','D081','02014','0507','001','1','3'),(345,'345','2021020406','D081','02014','0507','001','1','3'),(346,'346','2021020403','D081','02014','0503','002','1','3'),(347,'347','2021020404','D081','02014','0503','002','1','3'),(348,'348','2021020407','D081','02014','0506','003','8','10'),(349,'349','2021020401','D081','02014','0501','004','1','3'),(350,'350','2021020402','D081','02014','0501','004','1','3'),(351,'351','2021010202','D082','02013','0806','002','1','3'),(352,'352','2021010101','D082','02010','0707','002','4','6'),(353,'353','2021010102','D082','02010','0707','002','4','6'),(354,'354','2021010101','D082','02030','0720','002','7','12'),(355,'355','2021010102','D082','02030','0508','005','1','6'),(356,'356','2021020106','D083','02010','0617','001','7','9'),(357,'357','2021020302','D083','02041','0508','002','7','12'),(358,'358','2021020106','D083','02030','0719','003','7','12'),(359,'359','2021020301','D083','02041','0708','004','7','12'),(360,'360','2021020205','D084','02032','0708','001','1','3'),(361,'361','2021010203','D084','02033','0620','003','1','6'),(362,'362','2021020204','D084','02020','0505','004','1','3'),(363,'363','2021020205','D084','02020','0505','004','1','3'),(364,'364','2021020205','D084','02033','0620','004','7','12'),(365,'365','2021010202','D085','02006','0504','001','1','3'),(366,'366','2021010204','D085','02006','0502','001','7','9'),(367,'367','2021010205','D085','02006','0504','002','7','9'),(368,'368','2021010203','D085','02006','0806','002','10','12'),(369,'369','2021010206','D085','02006','0806','003','1','3'),(370,'370','2021010201','D085','02006','0502','004','2','4');
/*!40000 ALTER TABLE `jadwal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jp`
--

DROP TABLE IF EXISTS `jp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jp` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jp`
--

LOCK TABLES `jp` WRITE;
/*!40000 ALTER TABLE `jp` DISABLE KEYS */;
INSERT INTO `jp` VALUES (1,'1','07:00:00','07:50:00'),(2,'2','07:50:00','08:40:00'),(3,'3','08:40:00','09:30:00'),(4,'4','09:40:00','10:30:00'),(5,'5','10:30:00','11:20:00'),(6,'6','11:20:00','12:10:00'),(7,'7','12:50:00','13:40:00'),(8,'8','13:40:00','14:30:00'),(9,'9','14:30:00','15:20:00'),(10,'10','15:30:00','15:30:00'),(11,'11','16:20:00','17:10:00'),(12,'12','17:10:00','18:00:00');
/*!40000 ALTER TABLE `jp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kelas`
--

DROP TABLE IF EXISTS `kelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_kelas` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kelas`
--

LOCK TABLES `kelas` WRITE;
/*!40000 ALTER TABLE `kelas` DISABLE KEYS */;
INSERT INTO `kelas` VALUES (1,'2021010101','001','MI-1A'),(2,'2021010102','001','MI-1B'),(3,'2021010103','001','MI-1C'),(4,'2021010104','001','MI-1D'),(5,'2021010105','001','MI-1E'),(6,'2021010106','001','MI-1F'),(7,'2021010107','001','MI-1H'),(8,'2021010201','001','MI-2A'),(9,'2021010202','001','MI-2B'),(10,'2021010203','001','MI-2C'),(11,'2021010204','001','MI-2D'),(12,'2021010205','001','MI-2E'),(13,'2021010206','001','MI-2F'),(14,'2021010301','001','MI-3A'),(15,'2021010302','001','MI-3B'),(16,'2021010303','001','MI-3C'),(17,'2021010304','001','MI-3D'),(18,'2021010305','001','MI-3E'),(19,'2021010306','001','MI-3F'),(20,'2021020101','002','TI-1A'),(21,'2021020102','002','TI-1B'),(22,'2021020103','002','TI-1C'),(23,'2021020104','002','TI-1D'),(24,'2021020105','002','TI-1E'),(25,'2021020106','002','TI-1F'),(26,'2021020107','002','TI-1G'),(27,'2021020108','002','TI-1H'),(28,'2021020109','002','TI-1I'),(29,'2021020201','002','TI-2A'),(30,'2021020202','002','TI-2B'),(31,'2021020203','002','TI-2C'),(32,'2021020204','002','TI-2D'),(33,'2021020205','002','TI-2E'),(34,'2021020206','002','TI-2F'),(35,'2021020207','002','TI-2G'),(36,'2021020208','002','TI-2H'),(37,'2021020209','002','TI-2I'),(38,'2021020301','002','TI-3A'),(39,'2021020302','002','TI-3B'),(40,'2021020303','002','TI-3C'),(41,'2021020304','002','TI-3D'),(42,'2021020305','002','TI-3E'),(43,'2021020306','002','TI-3F'),(44,'2021020307','002','TI-3G'),(45,'2021020308','002','TI-3H'),(46,'2021020401','002','TI-4A'),(47,'2021020402','002','TI-4B'),(48,'2021020403','002','TI-4C'),(49,'2021020404','002','TI-4D'),(50,'2021020405','002','TI-4E'),(51,'2021020406','002','TI-4F'),(52,'2021020407','002','TI-4G');
/*!40000 ALTER TABLE `kelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mk`
--

DROP TABLE IF EXISTS `mk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_mk` varchar(255) NOT NULL,
  `nama_mk` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mk`
--

LOCK TABLES `mk` WRITE;
/*!40000 ALTER TABLE `mk` DISABLE KEYS */;
INSERT INTO `mk` VALUES (1,'02001','Agama'),(2,'02002','Alajabar Linier'),(3,'02003','Algoritma dan Struktur Data'),(4,'02004','Aljabar Linier'),(5,'02005','Analisis Dan Desan Berorientasi Objek'),(6,'02006','Bahasa Indonesia'),(7,'02007','Bahasa Inggris'),(8,'02008','Bahasa Inggris 2'),(9,'02009','Bahasa Inggris Persiapan Kerja'),(10,'02010','Basis Data'),(11,'02011','Desain Pemrograman Web'),(12,'02012','Digital Entrepreneurship'),(13,'02013','E-Business'),(14,'02014','Etika Profesi Bidang TI'),(15,'02015','Internet Of Things'),(16,'02016','Kewarganegaraan'),(17,'02017','Komputasi Multimedia'),(18,'02018','Machine Learning'),(19,'02019','Manajemen Jaringan Komputer'),(20,'02020','Manajemen Proyek'),(21,'02021','Manajemen Proyek '),(22,'02022','Pemrograman Berbasis Framework'),(23,'02023','Pemrograman Mobile'),(24,'02024','Pemrograman Multimedia'),(25,'02025','Pemrograman Web Lanjut'),(26,'02026','Pengembangan Perangkat Lunak Berbasis Object'),(27,'02027','Pengolahan Citra dan Visi Komputer'),(28,'02028','Penulisan Ilmiah'),(29,'02029','Praktikum Algoritma dan Struktur Data'),(30,'02030','Praktikum Basis Data'),(31,'02031','Praktikum Struktur Data'),(32,'02032','Proyek 1_P1'),(33,'02033','Proyek 1_P2'),(34,'02034','Proyek 2_P2'),(35,'02035','Rekayasa Perangkat Lunak'),(36,'02036','Sistem Informasi'),(37,'02037','Sistem Manajemen Basis Data'),(38,'02038','Sistem Operasi'),(39,'02039','Sistem Pendukung Keputusan'),(40,'02040','Struktur Data'),(41,'02041','Teknologi Data');
/*!40000 ALTER TABLE `mk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodi`
--

DROP TABLE IF EXISTS `prodi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_prodi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodi`
--

LOCK TABLES `prodi` WRITE;
/*!40000 ALTER TABLE `prodi` DISABLE KEYS */;
INSERT INTO `prodi` VALUES (1,'001','D3 Manajemen Informatika'),(2,'002','D4 Teknik Informatika');
/*!40000 ALTER TABLE `prodi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruang`
--

DROP TABLE IF EXISTS `ruang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_ruang` varchar(255) NOT NULL,
  `nama_ruang` varchar(255) NOT NULL,
  `deskripsi_ruang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruang`
--

LOCK TABLES `ruang` WRITE;
/*!40000 ALTER TABLE `ruang` DISABLE KEYS */;
INSERT INTO `ruang` VALUES (1,'0501','RT01','Ruang Teori 1'),(2,'0502','RT02','Ruang Teori 2'),(3,'0503','RT03','Ruang Teori 3'),(4,'0504','RT04','Ruang Teori 4'),(5,'0505','RT05','Ruang Teori 5'),(6,'0506','RT06','Ruang Teori 6'),(7,'0507','RT07','Ruang Teori 7'),(8,'0508','LPY1','Laboratorium Proyek 1'),(9,'0615','LSI1','Laboratorium Sistem Informasi 1'),(10,'0617','LSI2','Laboratorium Sistem Informasi 2'),(11,'0618','LSI3','Laboratorium Sistem Informasi 3'),(12,'0619','LPY2','Laboratorium Proyek 2'),(13,'0620','LPY3','Laboratorium Proyek 3'),(14,'0701','LPR1','Laboratorium Pemrograman 1'),(15,'0702','LPR2','Laboratorium Pemrograman 2'),(16,'0703','LPR3','Laboratorium Pemrograman 3'),(17,'0704','LPR4','Laboratorium Pemrograman 4'),(18,'0705','LPR5','Laboratorium Pemrograman 5'),(19,'0706','LPR6','Laboratorium Pemrograman 6'),(20,'0707','LKJ1','Laboratorium Keamanan Jaringan 1'),(21,'0708','LPR7','Laboratorium Pemrograman 7'),(22,'0713','LKJ2','Laboratorium Keamanan Jaringan 2'),(23,'0714','LPR8','Laboratorium Pemrograman 8'),(24,'0715','LKJ3','Laboratorium Keamanan Jaringan 3'),(25,'0716','LIG1','Laboratorium Visi Komputer 1'),(26,'0717','RT08','Ruang Teori 8'),(27,'0718','LIG2','Laboratorium Visi Komputer 2'),(28,'0719','LPY4','Laboratorium Proyek 4'),(29,'0720','LAI1','Laboratorium Kecerdasan Buatan 1'),(30,'0801','L DTS','Laboratorium DTS'),(31,'0805','RT09','Ruang Teori 9'),(32,'0806','RT10','Ruang Teori 10'),(33,'1001','RT11','Ruang Teori 11'),(34,'1002','ROL1','Ruang Online 1'),(35,'1003','ROL2','Ruang Online 2'),(36,'1004','ROL3','Ruang Online 3');
/*!40000 ALTER TABLE `ruang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_63_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_63_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_63_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_63_21_key`;

--
-- Table structure for table `dosen`
--

DROP TABLE IF EXISTS `dosen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dosen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_dosen` varchar(255) NOT NULL,
  `nama_dosen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dosen`
--

LOCK TABLES `dosen` WRITE;
/*!40000 ALTER TABLE `dosen` DISABLE KEYS */;
INSERT INTO `dosen` VALUES (1,'D001','Abdul Chalim, SAg., MPd.I'),(2,'D002','Ade Ismail'),(3,'D003','Agung Nugroho Pramudhita ST., MT.'),(4,'D004','Ahmadi Yuli Ananta ST., MM.'),(5,'D005','Ane Fany Novitasari, SH.MKn.'),(6,'D006','Annisa Puspa Kirana MKom.'),(7,'D007','Annisa Taufika Firdausi ST., MT.'),(8,'D008','Anugrah Nur Rahmanto SSn., MDs.'),(9,'D009','Ariadi Retno Ririd SKom., MKom.'),(10,'D010','Arie Rachmad Syulistyo SKom., MKom.'),(11,'D011','Arief Prasetyo SKom., MKom.'),(12,'D012','Arwin Sumari ST., MT., DR.'),(13,'D013','Atiqah Nurul Asri SPd., MPd.'),(14,'D014','Bagas Satya Dian Nugraha, ST., MT.'),(15,'D015','Banni Satria Andoko, S. Kom., M.MSI'),(16,'D016','Budi Harijanto ST., MMKom.'),(17,'D017','Cahya Rahmad ST., MKom. DR.Eng'),(18,'D018','Candra Bella Vista SKom., MT.'),(19,'D019','Candrasena Setiadi ST., MMT.'),(20,'D020','Deasy Sandhya Elya Ikawati SSi., MSi.'),(21,'D021','Deddy Kusbianto PA Ir. MMKom.'),(22,'D022','Dhebys Suryani SKom. MT.'),(23,'D023','Dian Hanifudin Subhi SKom., MT.'),(24,'D024','Dika Rizky Yunianto SKom., MKom.'),(25,'D025','Dimas Wahyu Wibowo ST., MT.'),(26,'D026','Dodit Supriyanto SKom., MT.'),(27,'D027','Dwi Puspitasari SKom., MKom.'),(28,'D028','Eka Larasati Amalia, SST., MT.'),(29,'D029','Ekojono, ST., M.Kom.'),(30,'D030','Elok Nur Hamdana, ST., MT'),(31,'D031','Erfan Rohadi, ST., MEng., PhD.'),(32,'D032','Faiz Ushbah Mubarok, SPd., MPd.'),(33,'D033','Farid Angga Pribadi, SKom.,MKom.'),(34,'D034','Farida Ulfa, SPd., MPd.'),(35,'D035','Gunawan Budi Prasetyo, ST., MMT., Ph.D.'),(36,'D036','Habibie Ed Dien, MT.'),(37,'D037','Hairus'),(38,'D038','Hendra Pradibta, SE., M.Sc.'),(39,'D039','Ika Kusumaning Putri, MT.'),(40,'D040','Imam Fahrur Rozi, ST., MT.'),(41,'D041','Indra Dharma Wijaya, ST., MMT.'),(42,'D042','Irsyad Arif Mashudi, M.Kom'),(43,'D043','Kadek Suarjuna Batubulan, SKom, MT.'),(44,'D044','Luqman Affandi, SKom., MMSI.'),(45,'D045','M. Hasyim Ratsanjani'),(46,'D046','Mamluatul Haniah'),(47,'D047','Meyti Eka Apriyani ST., MT.'),(48,'D048','Milyun Nima Shoumi'),(49,'D049','Moch. Zawaruddin Abdullah, S.ST., M.Kom'),(50,'D050','Moh. Amin'),(51,'D051','Muhammad Afif Hendrawan, S.Kom.'),(52,'D052','Muhammad Shulhan Khairy, SKom., MKom.'),(53,'D053','Muhammad Unggul Pamenang, SSt., MT.'),(54,'D054','Mungki Astiningrum, ST., MKom.'),(55,'D055','Mustika Mentari, SKom., MKom.'),(56,'D056','Noprianto'),(57,'D057','Odhitya Desta Triswidrananta, SPd., MPd.'),(58,'D058','Pramana Yoga Saputra, SKom., MMT.'),(59,'D059','Putra Prima A., ST., MKom.'),(60,'D060','Rakhmat Arianto SST., MKom.'),(61,'D061','Rawansyah., Drs., MPd.'),(62,'D062','Retno Damayanti, SPd.'),(63,'D063','Ridwan Rismanto, SST., MKom.'),(64,'D064','Rizki Putri Ramadhani, S.S., M.Pd.'),(65,'D065','Rizky Ardiansyah, SKom., MT.'),(66,'D066','Robby Anggriawan SE., ME.'),(67,'D067','Rokhimatul Wakhidah SPd. MT.'),(68,'D068','Rosa Andrie Asmara, ST., MT., Dr. Eng.'),(69,'D069','Rudy Ariyanto, ST., MCs.'),(70,'D070','Satrio Binusa S, SS, M.Pd'),(71,'D071','Septian Enggar Sukmana, SPd., MT.'),(72,'D072','Shohib Muslim'),(73,'D073','Siti Romlah, Dra., M.M.'),(74,'D074','Sofyan Noor Arief, S.ST., M.Kom.'),(75,'D075','Ulla Delfiana Rosiani, ST., MT.'),(76,'D076','Usman Nurhasan, S.Kom., MT.'),(77,'D077','Very Sugiarto, SPd., MKom.'),(78,'D078','Vipkas Al Hadid Firdaus, ST.,MT.'),(79,'D079','Vivi Nur Wijayaningrum, S.Kom, M.Kom'),(80,'D080','Vivin Ayu Lestari, SPd.'),(81,'D081','Widaningsih Condrowardhani, SH., MH.'),(82,'D082','Wilda Imama Sabilla, S.Kom., M.Kom.'),(83,'D083','Yoppy Yunhasnawa, SST., MSc.'),(84,'D084','Yuri Ariyanto, SKom., MKom.'),(85,'D085','Zulmy Faqihuddin Putera, S.Pd., M.Pd');
/*!40000 ALTER TABLE `dosen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hari`
--

DROP TABLE IF EXISTS `hari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_hari` varchar(255) NOT NULL,
  `nama_hari` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hari`
--

LOCK TABLES `hari` WRITE;
/*!40000 ALTER TABLE `hari` DISABLE KEYS */;
INSERT INTO `hari` VALUES (1,'001','Senin'),(2,'002','Selasa'),(3,'003','Rabu'),(4,'004','Kamis'),(5,'005','Jumat'),(6,'006','Sabtu'),(7,'007','Minggu');
/*!40000 ALTER TABLE `hari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jadwal`
--

DROP TABLE IF EXISTS `jadwal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jadwal` varchar(255) NOT NULL,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_dosen` varchar(255) NOT NULL,
  `kode_mk` varchar(255) NOT NULL,
  `kode_ruang` varchar(255) NOT NULL,
  `kode_hari` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=371 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jadwal`
--

LOCK TABLES `jadwal` WRITE;
/*!40000 ALTER TABLE `jadwal` DISABLE KEYS */;
INSERT INTO `jadwal` VALUES (1,'1','2021020101','D001','02001','0504','001','7','9'),(2,'2','2021010103','D001','02001','0506','002','9','11'),(3,'3','2021010105','D001','02001','0806','003','10','12'),(4,'4','2021010102','D001','02001','0506','004','1','3'),(5,'5','2021010106','D001','02001','0806','004','4','6'),(6,'6','2021010101','D001','02001','0506','004','7','9'),(7,'7','2021010104','D001','02001','0506','005','10','12'),(8,'8','2021010206','D002','02037','0702','001','7','12'),(9,'9','2021020202','D002','02036','0708','003','2','4'),(10,'10','2021010205','D002','02037','0713','004','1','6'),(11,'11','2021020209','D002','02025','0719','004','7','12'),(12,'12','2021020301','D003','02012','0508','002','1','4'),(13,'13','2021020302','D003','02012','0508','002','1','4'),(14,'14','2021010201','D003','02017','0719','003','2','5'),(15,'15','2021010202','D003','02017','0719','003','2','5'),(16,'16','2021010203','D003','02017','0507','005','2','5'),(17,'17','2021010106','D004','02028','0704','001','1','3'),(18,'18','2021020203','D004','02032','0507','001','10','12'),(19,'19','2021010201','D004','02034','0617','002','7','12'),(20,'20','2021020203','D004','02032','0708','004','1','6'),(21,'21','2021020104','D005','02016','0717','001','1','3'),(22,'22','2021020108','D005','02016','0504','001','4','6'),(23,'23','2021020106','D005','02016','0805','001','10','12'),(24,'24','2021020105','D005','02016','0502','002','1','3'),(25,'25','2021020102','D005','02016','0806','002','4','6'),(26,'26','2021020103','D005','02016','0502','003','4','6'),(27,'27','2021020107','D005','02016','0806','004','1','3'),(28,'28','2021020109','D005','02016','0502','005','1','3'),(29,'29','2021010105','D006','02010','0701','002','1','3'),(30,'30','2021010105','D006','02030','0618','004','1','6'),(31,'31','2021010203','D006','02037','0705','004','7','12'),(32,'32','2021010204','D006','02037','0619','005','7','12'),(33,'33','2021010103','D007','02011','0705','002','2','6'),(34,'34','2021020101','D007','02038','0503','003','3','5'),(35,'35','2021020102','D007','02038','0503','003','3','5'),(36,'36','2021010102','D007','02011','0615','004','8','12'),(37,'37','2021010101','D007','02011','0703','005','2','6'),(38,'38','2021010306','D008','02012','0619','001','2','5'),(39,'39','2021020203','D008','02036','0716','003','2','4'),(40,'40','2021020104','D008','02038','0505','004','4','6'),(41,'41','2021020105','D008','02038','0505','004','4','6'),(42,'42','2021010304','D008','02012','0507','005','9','12'),(43,'43','2021010305','D008','02012','0507','005','9','12'),(44,'44','2021020103','D009','02035','0505','002','7','10'),(45,'45','2021020104','D009','02035','0505','002','7','10'),(46,'46','2021020204','D009','02005','0704','003','7','12'),(47,'47','2021020203','D009','02005','0705','005','1','6'),(48,'48','2021010103','D010','02026','0806','001','3','4'),(49,'49','2021010202','D010','02023','0704','001','8','11'),(50,'50','2021010202','D010','02023','0713','002','7','10'),(51,'51','2021010201','D010','02023','0705','003','7','10'),(52,'52','2021010201','D010','02023','0716','005','8','11'),(53,'53','2021010201','D011','02019','0718','002','1','5'),(54,'54','2021010203','D011','02019','0706','004','1','5'),(55,'55','2021010204','D011','02019','0716','004','8','12'),(56,'56','2021010202','D011','02019','0706','005','1','5'),(57,'57','2021020204','D012','02018','0702','001','1','5'),(58,'58','2021020203','D012','02018','0619','002','1','5'),(59,'59','2021010204','D012','02020','0704','002','9','11'),(60,'60','2021010302','D013','02008','0805','002','4','6'),(61,'61','2021020109','D013','02007','0805','002','7','9'),(62,'62','2021010301','D013','02009','0717','003','4','6'),(63,'63','2021020101','D013','02008','0717','003','7','9'),(64,'64','2021020401','D013','02009','0717','004','4','6'),(65,'65','2021020107','D013','02008','0717','005','2','4'),(66,'66','2021020102','D013','02008','0506','005','7','9'),(67,'67','2021020301','D014','02017','0720','004','1','4'),(68,'68','2021020302','D014','02017','0720','004','1','4'),(69,'69','2021020303','D014','02017','0714','005','2','5'),(70,'70','2021020308','D014','02017','0714','005','7','10'),(71,'71','2021020206','D015','02032','0720','002','3','5'),(72,'72','2021020206','D015','02005','0619','002','7','12'),(73,'73','2021020205','D015','02005','0713','003','7','12'),(74,'74','2021020206','D015','02033','0701','004','7','12'),(75,'75','2021020103','D016','02038','0506','001','1','3'),(76,'76','2021020204','D016','02032','0615','001','7','9'),(77,'77','2021010103','D016','02038','0501','004','4','6'),(78,'78','2021010104','D016','02038','0501','004','4','6'),(79,'79','2021020204','D016','02033','0719','005','7','12'),(80,'80','2021020106','D017','02004','0805','004','3','6'),(81,'81','2021020302','D017','02027','0702','004','7','12'),(82,'82','2021020301','D017','02027','0704','005','1','6'),(83,'83','2021020109','D017','02002','0717','005','7','10'),(84,'84','2021020302','D018','02039','0701','001','1','6'),(85,'85','2021010203','D018','02013','0501','001','10','12'),(86,'86','2021010204','D018','02013','0501','001','10','12'),(87,'87','2021020301','D019','02022','0620','001','7','12'),(88,'88','2021020302','D019','02022','0702','005','1','6'),(89,'89','2021020108','D020','02004','0502','004','9','12'),(90,'90','2021020107','D020','02004','0502','005','7','10'),(91,'91','2021020207','D021','02005','0615','001','1','6'),(92,'92','2021020207','D021','02032','0707','002','1','3'),(93,'93','2021020207','D021','02033','0718','003','1','6'),(94,'94','2021010303','D021','02012','0703','003','8','11'),(95,'95','2021010204','D022','02033','0704','003','1','6'),(96,'96','2021010205','D022','02033','0706','003','7','12'),(97,'97','2021020306','D022','02012','0504','005','1','4'),(98,'98','2021010205','D023','02023','0508','001','1','4'),(99,'99','2021020206','D023','02025','0706','003','1','6'),(100,'100','2021010206','D023','02023','0618','003','8','11'),(101,'101','2021010205','D023','02023','0701','005','1','4'),(102,'102','2021010206','D023','02023','0705','005','7','10'),(103,'103','2021010201','D024','02037','0713','001','1','6'),(104,'104','2021010103','D024','02010','0615','001','10','12'),(105,'105','2021010103','D024','02010','0619','003','1','6'),(106,'106','2021010202','D024','02037','0701','005','7','12'),(107,'107','2021020305','D025','02024','0615','001','1','6'),(108,'108','2021020306','D025','02022','0713','002','1','6'),(109,'109','2021020304','D025','02017','0620','005','1','4'),(110,'110','2021020305','D025','02017','0620','005','1','4'),(111,'111','2021020305','D026','02015','0508','003','7','12'),(112,'112','2021020306','D026','02041','0701','004','1','6'),(113,'113','2021020103','D027','02010','0501','002','4','6'),(114,'114','2021020104','D027','02010','0501','002','4','6'),(115,'115','2021010106','D027','02035','0707','003','1','4'),(116,'116','2021020103','D027','02010','0615','004','7','12'),(117,'117','2021020104','D027','02010','0617','005','1','6'),(118,'118','2021010104','D028','02026','0504','002','1','4'),(119,'119','2021020107','D028','02035','0503','002','8','11'),(120,'120','2021020108','D028','02035','0503','002','8','11'),(121,'121','2021010105','D028','02026','0505','003','3','6'),(122,'122','2021010106','D028','02026','0505','003','3','6'),(123,'123','2021020209','D029','02032','0503','001','7','9'),(124,'124','2021020204','D029','02036','0703','003','1','3'),(125,'125','2021020205','D029','02036','0703','003','1','3'),(126,'126','2021020209','D029','02033','0508','004','1','6'),(127,'127','2021020206','D029','02036','0501','005','1','3'),(128,'128','2021020207','D029','02036','0501','005','1','3'),(129,'129','2021020109','D030','02010','0716','001','4','6'),(130,'130','2021020108','D030','02010','0715','002','2','4'),(131,'131','2021020201','D030','02036','0502','003','1','3'),(132,'132','2021020109','D030','02030','0620','004','1','6'),(133,'133','2021020108','D030','02030','0615','005','1','6'),(134,'134','2021020202','D031','02032','0507','001','7','9'),(135,'135','2021010203','D031','02020','0718','002','7','9'),(136,'136','2021010201','D031','02020','0501','004','7','9'),(137,'137','2021010202','D031','02020','0501','004','7','9'),(138,'138','2021020202','D031','02033','0707','005','7','12'),(139,'139','2021020104','D032','02008','0806','001','7','9'),(140,'140','2021020103','D032','02008','0717','002','1','3'),(141,'141','2021020403','D032','02009','0502','002','10','12'),(142,'142','2021010304','D032','02009','0506','003','4','6'),(143,'143','2021020402','D032','02009','0504','004','4','6'),(144,'144','2021020105','D032','02009','0717','004','8','10'),(145,'145','2021010303','D032','02009','0806','005','7','9'),(146,'146','2021020203','D033','02037','0716','003','7','12'),(147,'147','2021020108','D034','02008','0502','001','1','3'),(148,'148','2021020106','D034','02008','0502','002','7','9'),(149,'149','2021010305','D034','02009','0805','003','4','6'),(150,'150','2021010306','D034','02009','0506','004','4','6'),(151,'151','2021020208','D035','02018','0618','002','2','6'),(152,'152','2021020307','D035','02041','0716','002','7','12'),(153,'153','2021020308','D035','02041','0716','005','1','6'),(154,'154','2021020207','D035','02018','0615','005','8','12'),(155,'155','2021020209','D036','02036','0704','001','4','6'),(156,'156','2021020304','D036','02022','0508','001','7','12'),(157,'157','2021020303','D036','02022','0704','002','1','6'),(158,'158','2021020202','D036','02025','0706','002','7','12'),(159,'159','2021010102','D037','02016','0506','001','7','9'),(160,'160','2021010107','D037','02016','0806','002','7','9'),(161,'161','2021010104','D037','02016','0504','002','10','12'),(162,'162','2021020101','D037','02016','0717','003','10','12'),(163,'163','2021010106','D037','02016','0717','004','1','3'),(164,'164','2021010103','D037','02016','0504','005','7','9'),(165,'165','2021010101','D037','02016','0806','005','10','12'),(166,'166','2021020307','D038','02012','0714','002','2','5'),(167,'167','2021020209','D038','02020','0620','003','10','12'),(168,'168','2021010301','D038','02012','0503','005','1','4'),(169,'169','2021010302','D038','02012','0503','005','1','4'),(170,'170','2021010101','D039','02040','0503','001','1','3'),(171,'171','2021010102','D039','02040','0503','001','1','3'),(172,'172','2021020209','D039','02037','0703','002','1','6'),(173,'173','2021010102','D039','02040','0617','003','8','12'),(174,'174','2021010101','D039','02040','0617','004','2','6'),(175,'175','2021020109','D040','02003','0713','001','9','11'),(176,'176','2021010202','D040','02033','0619','003','7','12'),(177,'177','2021020109','D040','02003','0718','004','7','12'),(178,'178','2021010101','D041','02038','0507','001','4','6'),(179,'179','2021010102','D041','02038','0507','001','4','6'),(180,'180','2021010101','D041','02028','0501','002','1','3'),(181,'181','2021010102','D041','02028','0501','002','1','3'),(182,'182','2021020205','D042','02037','0703','001','7','12'),(183,'183','2021020204','D042','02037','0715','004','7','12'),(184,'184','2021020101','D042','02035','0505','005','2','5'),(185,'185','2021020102','D042','02035','0505','005','2','5'),(186,'186','2021010204','D043','02017','0705','001','2','5'),(187,'187','2021010205','D043','02017','0505','002','2','5'),(188,'188','2021010204','D043','02017','0505','002','2','5'),(189,'189','2021020208','D043','02036','0507','004','7','9'),(190,'190','2021020205','D043','02025','0720','005','1','6'),(191,'191','2021020201','D044','02032','0706','001','3','5'),(192,'192','2021010205','D044','02021','0618','001','10','12'),(193,'193','2021010206','D044','02021','0618','001','10','12'),(194,'194','2021020206','D044','02020','0707','004','3','5'),(195,'195','2021020207','D044','02020','0707','004','3','5'),(196,'196','2021020201','D044','02033','0713','004','7','12'),(197,'197','2021020208','D045','02037','0718','001','1','6'),(198,'198','2021020107','D045','02010','0702','001','9','11'),(199,'199','2021020107','D045','02030','0615','003','1','6'),(200,'200','2021020207','D045','02037','0619','004','7','12'),(201,'201','2021020103','D046','02003','0501','001','4','6'),(202,'202','2021020101','D046','02010','0617','002','3','5'),(203,'203','2021020101','D046','02030','0704','004','1','6'),(204,'204','2021020209','D046','02018','0707','005','1','5'),(205,'205','2021020103','D046','02003','0702','005','7','12'),(206,'206','2021020308','D047','02022','0620','001','1','6'),(207,'207','2021020203','D047','02020','0805','001','7','9'),(208,'208','2021020201','D047','02020','0620','002','1','3'),(209,'209','2021020202','D047','02020','0620','002','1','3'),(210,'210','2021020307','D047','02022','0715','003','1','6'),(211,'211','2021020305','D048','02027','0716','002','1','6'),(212,'212','2021020201','D048','02025','0503','004','1','6'),(213,'213','2021020208','D048','02025','0713','005','1','6'),(214,'214','2021020306','D048','02027','0620','005','7','12'),(215,'215','2021010106','D049','02010','0716','001','7','9'),(216,'216','2021020204','D049','02025','0719','002','1','6'),(217,'217','2021020203','D049','02025','0703','002','7','12'),(218,'218','2021010106','D049','02030','0706','004','7','12'),(219,'219','2021020106','D050','02001','0717','001','4','6'),(220,'220','2021020103','D050','02001','0506','001','7','9'),(221,'221','2021020105','D050','02001','0504','001','10','12'),(222,'222','2021020109','D050','02001','0805','003','1','3'),(223,'223','2021020102','D050','02001','0504','003','8','10'),(224,'224','2021020104','D050','02001','0805','004','7','9'),(225,'225','2021020107','D050','02001','0805','004','10','12'),(226,'226','2021020108','D050','02001','0805','005','7','9'),(227,'227','2021020206','D051','02037','0715','001','1','6'),(228,'228','2021020208','D051','02020','0508','003','2','4'),(229,'229','2021020306','D051','02039','0701','003','7','12'),(230,'230','2021020305','D051','02039','0619','004','1','6'),(231,'231','2021010104','D052','02010','0701','001','4','6'),(232,'232','2021020201','D052','02005','0708','002','7','12'),(233,'233','2021020202','D052','02005','0720','003','7','12'),(234,'234','2021010104','D052','02030','0618','005','1','6'),(235,'235','2021020105','D053','02010','0708','001','7','9'),(236,'236','2021020105','D053','02030','0704','005','7','12'),(237,'237','2021020101','D054','02003','0703','001','2','4'),(238,'238','2021020102','D054','02003','0703','001','2','4'),(239,'239','2021010205','D054','02013','0501','001','7','9'),(240,'240','2021020102','D054','02029','0620','002','7','12'),(241,'241','2021020101','D054','02029','0720','004','7','12'),(242,'242','2021020106','D055','02003','0716','001','1','3'),(243,'243','2021020304','D055','02027','0718','004','1','6'),(244,'244','2021020106','D055','02029','0618','004','7','12'),(245,'245','2021020303','D055','02027','0718','005','7','12'),(246,'246','2021020107','D056','02003','0708','001','4','6'),(247,'247','2021020303','D056','02015','0715','001','7','12'),(248,'248','2021020304','D056','02015','0713','003','1','6'),(249,'249','2021020107','D056','02029','0702','003','7','12'),(250,'250','2021020201','D057','02037','0720','001','7','12'),(251,'251','2021020305','D057','02041','0618','005','7','12'),(252,'252','2021020208','D058','02032','0502','001','10','12'),(253,'253','2021020303','D058','02041','0720','003','1','6'),(254,'254','2021020208','D058','02033','0716','004','1','6'),(255,'255','2021020304','D058','02041','0615','005','7','12'),(256,'256','2021010203','D059','02023','0719','001','1','4'),(257,'257','2021010204','D059','02023','0702','002','2','5'),(258,'258','2021020207','D059','02025','0701','002','7','12'),(259,'259','2021010204','D059','02023','0718','005','2','5'),(260,'260','2021010203','D059','02023','0715','005','8','11'),(261,'261','2021020308','D060','02039','0619','001','7','12'),(262,'262','2021020201','D060','02018','0615','003','7','11'),(263,'263','2021020202','D060','02018','0708','005','1','5'),(264,'264','2021020307','D060','02039','0708','005','7','12'),(265,'265','2021020101','D061','02004','0717','002','9','12'),(266,'266','2021020104','D061','02004','0504','003','3','6'),(267,'267','2021020105','D061','02004','0805','003','7','10'),(268,'268','2021020102','D061','02004','0806','004','8','11'),(269,'269','2021020103','D061','02004','0806','005','2','5'),(270,'270','2021010106','D062','02011','0615','002','7','11'),(271,'271','2021010104','D062','02011','0703','004','8','12'),(272,'272','2021010105','D062','02011','0715','005','1','5'),(273,'273','2021010105','D062','02038','0501','005','10','12'),(274,'274','2021010106','D062','02038','0501','005','10','12'),(275,'275','2021020209','D063','02005','0719','002','7','12'),(276,'276','2021010101','D063','02026','0507','003','1','4'),(277,'277','2021010102','D063','02026','0507','003','1','4'),(278,'278','2021020208','D063','02005','0708','003','7','12'),(279,'279','2021010301','D064','02006','0805','001','1','3'),(280,'280','2021010303','D064','02006','0506','001','4','6'),(281,'281','2021010302','D064','02006','0805','002','1','3'),(282,'282','2021010305','D064','02006','0506','003','1','3'),(283,'283','2021010306','D064','02006','0504','004','1','3'),(284,'284','2021010304','D064','02006','0805','005','2','4'),(285,'285','2021020102','D065','02010','0708','002','1','3'),(286,'286','2021020102','D065','02030','0615','004','1','6'),(287,'287','2021010206','D066','02013','0503','001','4','6'),(288,'288','2021020104','D067','02003','0805','001','4','6'),(289,'289','2021020105','D067','02003','0805','001','4','6'),(290,'290','2021020105','D067','02029','0705','003','1','6'),(291,'291','2021010201','D067','02013','0506','004','10','12'),(292,'292','2021020104','D067','02029','0703','005','7','12'),(293,'293','2021020308','D068','02027','0714','002','7','12'),(294,'294','2021020307','D068','02027','0703','004','1','6'),(295,'295','2021020303','D069','02039','0618','002','7','12'),(296,'296','2021010206','D069','02033','0702','004','1','6'),(297,'297','2021020406','D070','02009','0502','001','4','6'),(298,'298','2021020405','D070','02009','0806','001','10','12'),(299,'299','2021020404','D070','02009','0717','002','4','6'),(300,'300','2021020407','D070','02009','0806','003','4','6'),(301,'301','2021020306','D071','02017','0505','001','1','4'),(302,'302','2021020307','D071','02017','0505','001','1','4'),(303,'303','2021020108','D071','02003','0714','001','7','9'),(304,'304','2021020308','D071','02017','0501','003','1','4'),(305,'305','2021020108','D071','02029','0719','004','1','6'),(306,'306','2021010303','D072','02014','0720','001','1','3'),(307,'307','2021010304','D072','02014','0720','001','1','3'),(308,'308','2021010305','D072','02014','0714','001','10','12'),(309,'309','2021010306','D072','02014','0714','001','10','12'),(310,'310','2021010301','D072','02014','0501','005','7','9'),(311,'311','2021010302','D072','02014','0501','005','7','9'),(312,'312','2021020305','D073','02012','0714','003','1','4'),(313,'313','2021020106','D074','02038','0507','002','3','5'),(314,'314','2021020107','D074','02038','0507','002','3','5'),(315,'315','2021020109','D074','02038','0805','002','10','12'),(316,'316','2021020108','D074','02038','0806','003','7','9'),(317,'317','2021010206','D074','02019','0719','005','1','5'),(318,'318','2021010205','D074','02019','0713','005','7','11'),(319,'319','2021010105','D075','02028','0501','001','1','3'),(320,'320','2021020304','D075','02039','0706','002','1','6'),(321,'321','2021020301','D075','02039','0618','003','1','6'),(322,'322','2021010103','D075','02028','0503','003','8','10'),(323,'323','2021010104','D075','02028','0503','003','8','10'),(324,'324','2021020303','D076','02012','0618','001','1','4'),(325,'325','2021020304','D076','02012','0618','001','1','4'),(326,'326','2021020307','D076','02015','0701','001','7','12'),(327,'327','2021020308','D076','02015','0718','003','7','12'),(328,'328','2021020306','D077','02015','0705','001','7','12'),(329,'329','2021020202','D077','02037','0715','004','1','6'),(330,'330','2021020205','D078','02018','0615','002','1','5'),(331,'331','2021020301','D078','02015','0715','002','7','12'),(332,'332','2021020302','D078','02015','0617','003','1','6'),(333,'333','2021020206','D078','02018','0706','005','8','12'),(334,'334','2021010105','D079','02040','0503','002','4','6'),(335,'335','2021010106','D079','02040','0503','002','4','6'),(336,'336','2021010105','D079','02031','0705','002','8','12'),(337,'337','2021010106','D079','02031','0715','003','8','12'),(338,'338','2021020105','D079','02035','0506','005','2','5'),(339,'339','2021010103','D080','02040','0505','001','7','9'),(340,'340','2021010104','D080','02040','0505','001','7','9'),(341,'341','2021020109','D080','02035','0506','002','1','4'),(342,'342','2021010104','D080','02031','0701','003','2','6'),(343,'343','2021010103','D080','02031','0508','004','8','12'),(344,'344','2021020405','D081','02014','0507','001','1','3'),(345,'345','2021020406','D081','02014','0507','001','1','3'),(346,'346','2021020403','D081','02014','0503','002','1','3'),(347,'347','2021020404','D081','02014','0503','002','1','3'),(348,'348','2021020407','D081','02014','0506','003','8','10'),(349,'349','2021020401','D081','02014','0501','004','1','3'),(350,'350','2021020402','D081','02014','0501','004','1','3'),(351,'351','2021010202','D082','02013','0806','002','1','3'),(352,'352','2021010101','D082','02010','0707','002','4','6'),(353,'353','2021010102','D082','02010','0707','002','4','6'),(354,'354','2021010101','D082','02030','0720','002','7','12'),(355,'355','2021010102','D082','02030','0508','005','1','6'),(356,'356','2021020106','D083','02010','0617','001','7','9'),(357,'357','2021020302','D083','02041','0508','002','7','12'),(358,'358','2021020106','D083','02030','0719','003','7','12'),(359,'359','2021020301','D083','02041','0708','004','7','12'),(360,'360','2021020205','D084','02032','0708','001','1','3'),(361,'361','2021010203','D084','02033','0620','003','1','6'),(362,'362','2021020204','D084','02020','0505','004','1','3'),(363,'363','2021020205','D084','02020','0505','004','1','3'),(364,'364','2021020205','D084','02033','0620','004','7','12'),(365,'365','2021010202','D085','02006','0504','001','1','3'),(366,'366','2021010204','D085','02006','0502','001','7','9'),(367,'367','2021010205','D085','02006','0504','002','7','9'),(368,'368','2021010203','D085','02006','0806','002','10','12'),(369,'369','2021010206','D085','02006','0806','003','1','3'),(370,'370','2021010201','D085','02006','0502','004','2','4');
/*!40000 ALTER TABLE `jadwal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jp`
--

DROP TABLE IF EXISTS `jp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jp` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jp`
--

LOCK TABLES `jp` WRITE;
/*!40000 ALTER TABLE `jp` DISABLE KEYS */;
INSERT INTO `jp` VALUES (1,'1','07:00:00','07:50:00'),(2,'2','07:50:00','08:40:00'),(3,'3','08:40:00','09:30:00'),(4,'4','09:40:00','10:30:00'),(5,'5','10:30:00','11:20:00'),(6,'6','11:20:00','12:10:00'),(7,'7','12:50:00','13:40:00'),(8,'8','13:40:00','14:30:00'),(9,'9','14:30:00','15:20:00'),(10,'10','15:30:00','15:30:00'),(11,'11','16:20:00','17:10:00'),(12,'12','17:10:00','18:00:00');
/*!40000 ALTER TABLE `jp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kelas`
--

DROP TABLE IF EXISTS `kelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_kelas` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kelas`
--

LOCK TABLES `kelas` WRITE;
/*!40000 ALTER TABLE `kelas` DISABLE KEYS */;
INSERT INTO `kelas` VALUES (1,'2021010101','001','MI-1A'),(2,'2021010102','001','MI-1B'),(3,'2021010103','001','MI-1C'),(4,'2021010104','001','MI-1D'),(5,'2021010105','001','MI-1E'),(6,'2021010106','001','MI-1F'),(7,'2021010107','001','MI-1H'),(8,'2021010201','001','MI-2A'),(9,'2021010202','001','MI-2B'),(10,'2021010203','001','MI-2C'),(11,'2021010204','001','MI-2D'),(12,'2021010205','001','MI-2E'),(13,'2021010206','001','MI-2F'),(14,'2021010301','001','MI-3A'),(15,'2021010302','001','MI-3B'),(16,'2021010303','001','MI-3C'),(17,'2021010304','001','MI-3D'),(18,'2021010305','001','MI-3E'),(19,'2021010306','001','MI-3F'),(20,'2021020101','002','TI-1A'),(21,'2021020102','002','TI-1B'),(22,'2021020103','002','TI-1C'),(23,'2021020104','002','TI-1D'),(24,'2021020105','002','TI-1E'),(25,'2021020106','002','TI-1F'),(26,'2021020107','002','TI-1G'),(27,'2021020108','002','TI-1H'),(28,'2021020109','002','TI-1I'),(29,'2021020201','002','TI-2A'),(30,'2021020202','002','TI-2B'),(31,'2021020203','002','TI-2C'),(32,'2021020204','002','TI-2D'),(33,'2021020205','002','TI-2E'),(34,'2021020206','002','TI-2F'),(35,'2021020207','002','TI-2G'),(36,'2021020208','002','TI-2H'),(37,'2021020209','002','TI-2I'),(38,'2021020301','002','TI-3A'),(39,'2021020302','002','TI-3B'),(40,'2021020303','002','TI-3C'),(41,'2021020304','002','TI-3D'),(42,'2021020305','002','TI-3E'),(43,'2021020306','002','TI-3F'),(44,'2021020307','002','TI-3G'),(45,'2021020308','002','TI-3H'),(46,'2021020401','002','TI-4A'),(47,'2021020402','002','TI-4B'),(48,'2021020403','002','TI-4C'),(49,'2021020404','002','TI-4D'),(50,'2021020405','002','TI-4E'),(51,'2021020406','002','TI-4F'),(52,'2021020407','002','TI-4G');
/*!40000 ALTER TABLE `kelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mk`
--

DROP TABLE IF EXISTS `mk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_mk` varchar(255) NOT NULL,
  `nama_mk` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mk`
--

LOCK TABLES `mk` WRITE;
/*!40000 ALTER TABLE `mk` DISABLE KEYS */;
INSERT INTO `mk` VALUES (1,'02001','Agama'),(2,'02002','Alajabar Linier'),(3,'02003','Algoritma dan Struktur Data'),(4,'02004','Aljabar Linier'),(5,'02005','Analisis Dan Desan Berorientasi Objek'),(6,'02006','Bahasa Indonesia'),(7,'02007','Bahasa Inggris'),(8,'02008','Bahasa Inggris 2'),(9,'02009','Bahasa Inggris Persiapan Kerja'),(10,'02010','Basis Data'),(11,'02011','Desain Pemrograman Web'),(12,'02012','Digital Entrepreneurship'),(13,'02013','E-Business'),(14,'02014','Etika Profesi Bidang TI'),(15,'02015','Internet Of Things'),(16,'02016','Kewarganegaraan'),(17,'02017','Komputasi Multimedia'),(18,'02018','Machine Learning'),(19,'02019','Manajemen Jaringan Komputer'),(20,'02020','Manajemen Proyek'),(21,'02021','Manajemen Proyek '),(22,'02022','Pemrograman Berbasis Framework'),(23,'02023','Pemrograman Mobile'),(24,'02024','Pemrograman Multimedia'),(25,'02025','Pemrograman Web Lanjut'),(26,'02026','Pengembangan Perangkat Lunak Berbasis Object'),(27,'02027','Pengolahan Citra dan Visi Komputer'),(28,'02028','Penulisan Ilmiah'),(29,'02029','Praktikum Algoritma dan Struktur Data'),(30,'02030','Praktikum Basis Data'),(31,'02031','Praktikum Struktur Data'),(32,'02032','Proyek 1_P1'),(33,'02033','Proyek 1_P2'),(34,'02034','Proyek 2_P2'),(35,'02035','Rekayasa Perangkat Lunak'),(36,'02036','Sistem Informasi'),(37,'02037','Sistem Manajemen Basis Data'),(38,'02038','Sistem Operasi'),(39,'02039','Sistem Pendukung Keputusan'),(40,'02040','Struktur Data'),(41,'02041','Teknologi Data');
/*!40000 ALTER TABLE `mk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodi`
--

DROP TABLE IF EXISTS `prodi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_prodi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodi`
--

LOCK TABLES `prodi` WRITE;
/*!40000 ALTER TABLE `prodi` DISABLE KEYS */;
INSERT INTO `prodi` VALUES (1,'001','D3 Manajemen Informatika'),(2,'002','D4 Teknik Informatika');
/*!40000 ALTER TABLE `prodi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruang`
--

DROP TABLE IF EXISTS `ruang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_ruang` varchar(255) NOT NULL,
  `nama_ruang` varchar(255) NOT NULL,
  `deskripsi_ruang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruang`
--

LOCK TABLES `ruang` WRITE;
/*!40000 ALTER TABLE `ruang` DISABLE KEYS */;
INSERT INTO `ruang` VALUES (1,'0501','RT01','Ruang Teori 1'),(2,'0502','RT02','Ruang Teori 2'),(3,'0503','RT03','Ruang Teori 3'),(4,'0504','RT04','Ruang Teori 4'),(5,'0505','RT05','Ruang Teori 5'),(6,'0506','RT06','Ruang Teori 6'),(7,'0507','RT07','Ruang Teori 7'),(8,'0508','LPY1','Laboratorium Proyek 1'),(9,'0615','LSI1','Laboratorium Sistem Informasi 1'),(10,'0617','LSI2','Laboratorium Sistem Informasi 2'),(11,'0618','LSI3','Laboratorium Sistem Informasi 3'),(12,'0619','LPY2','Laboratorium Proyek 2'),(13,'0620','LPY3','Laboratorium Proyek 3'),(14,'0701','LPR1','Laboratorium Pemrograman 1'),(15,'0702','LPR2','Laboratorium Pemrograman 2'),(16,'0703','LPR3','Laboratorium Pemrograman 3'),(17,'0704','LPR4','Laboratorium Pemrograman 4'),(18,'0705','LPR5','Laboratorium Pemrograman 5'),(19,'0706','LPR6','Laboratorium Pemrograman 6'),(20,'0707','LKJ1','Laboratorium Keamanan Jaringan 1'),(21,'0708','LPR7','Laboratorium Pemrograman 7'),(22,'0713','LKJ2','Laboratorium Keamanan Jaringan 2'),(23,'0714','LPR8','Laboratorium Pemrograman 8'),(24,'0715','LKJ3','Laboratorium Keamanan Jaringan 3'),(25,'0716','LIG1','Laboratorium Visi Komputer 1'),(26,'0717','RT08','Ruang Teori 8'),(27,'0718','LIG2','Laboratorium Visi Komputer 2'),(28,'0719','LPY4','Laboratorium Proyek 4'),(29,'0720','LAI1','Laboratorium Kecerdasan Buatan 1'),(30,'0801','L DTS','Laboratorium DTS'),(31,'0805','RT09','Ruang Teori 9'),(32,'0806','RT10','Ruang Teori 10'),(33,'1001','RT11','Ruang Teori 11'),(34,'1002','ROL1','Ruang Online 1'),(35,'1003','ROL2','Ruang Online 2'),(36,'1004','ROL3','Ruang Online 3');
/*!40000 ALTER TABLE `ruang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_63_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_63_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_63_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_63_21_student`;

--
-- Table structure for table `dosen`
--

DROP TABLE IF EXISTS `dosen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dosen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_dosen` varchar(255) NOT NULL,
  `nama_dosen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dosen`
--

LOCK TABLES `dosen` WRITE;
/*!40000 ALTER TABLE `dosen` DISABLE KEYS */;
INSERT INTO `dosen` VALUES (1,'D001','Abdul Chalim, SAg., MPd.I'),(2,'D002','Ade Ismail'),(3,'D003','Agung Nugroho Pramudhita ST., MT.'),(4,'D004','Ahmadi Yuli Ananta ST., MM.'),(5,'D005','Ane Fany Novitasari, SH.MKn.'),(6,'D006','Annisa Puspa Kirana MKom.'),(7,'D007','Annisa Taufika Firdausi ST., MT.'),(8,'D008','Anugrah Nur Rahmanto SSn., MDs.'),(9,'D009','Ariadi Retno Ririd SKom., MKom.'),(10,'D010','Arie Rachmad Syulistyo SKom., MKom.'),(11,'D011','Arief Prasetyo SKom., MKom.'),(12,'D012','Arwin Sumari ST., MT., DR.'),(13,'D013','Atiqah Nurul Asri SPd., MPd.'),(14,'D014','Bagas Satya Dian Nugraha, ST., MT.'),(15,'D015','Banni Satria Andoko, S. Kom., M.MSI'),(16,'D016','Budi Harijanto ST., MMKom.'),(17,'D017','Cahya Rahmad ST., MKom. DR.Eng'),(18,'D018','Candra Bella Vista SKom., MT.'),(19,'D019','Candrasena Setiadi ST., MMT.'),(20,'D020','Deasy Sandhya Elya Ikawati SSi., MSi.'),(21,'D021','Deddy Kusbianto PA Ir. MMKom.'),(22,'D022','Dhebys Suryani SKom. MT.'),(23,'D023','Dian Hanifudin Subhi SKom., MT.'),(24,'D024','Dika Rizky Yunianto SKom., MKom.'),(25,'D025','Dimas Wahyu Wibowo ST., MT.'),(26,'D026','Dodit Supriyanto SKom., MT.'),(27,'D027','Dwi Puspitasari SKom., MKom.'),(28,'D028','Eka Larasati Amalia, SST., MT.'),(29,'D029','Ekojono, ST., M.Kom.'),(30,'D030','Elok Nur Hamdana, ST., MT'),(31,'D031','Erfan Rohadi, ST., MEng., PhD.'),(32,'D032','Faiz Ushbah Mubarok, SPd., MPd.'),(33,'D033','Farid Angga Pribadi, SKom.,MKom.'),(34,'D034','Farida Ulfa, SPd., MPd.'),(35,'D035','Gunawan Budi Prasetyo, ST., MMT., Ph.D.'),(36,'D036','Habibie Ed Dien, MT.'),(37,'D037','Hairus'),(38,'D038','Hendra Pradibta, SE., M.Sc.'),(39,'D039','Ika Kusumaning Putri, MT.'),(40,'D040','Imam Fahrur Rozi, ST., MT.'),(41,'D041','Indra Dharma Wijaya, ST., MMT.'),(42,'D042','Irsyad Arif Mashudi, M.Kom'),(43,'D043','Kadek Suarjuna Batubulan, SKom, MT.'),(44,'D044','Luqman Affandi, SKom., MMSI.'),(45,'D045','M. Hasyim Ratsanjani'),(46,'D046','Mamluatul Haniah'),(47,'D047','Meyti Eka Apriyani ST., MT.'),(48,'D048','Milyun Nima Shoumi'),(49,'D049','Moch. Zawaruddin Abdullah, S.ST., M.Kom'),(50,'D050','Moh. Amin'),(51,'D051','Muhammad Afif Hendrawan, S.Kom.'),(52,'D052','Muhammad Shulhan Khairy, SKom., MKom.'),(53,'D053','Muhammad Unggul Pamenang, SSt., MT.'),(54,'D054','Mungki Astiningrum, ST., MKom.'),(55,'D055','Mustika Mentari, SKom., MKom.'),(56,'D056','Noprianto'),(57,'D057','Odhitya Desta Triswidrananta, SPd., MPd.'),(58,'D058','Pramana Yoga Saputra, SKom., MMT.'),(59,'D059','Putra Prima A., ST., MKom.'),(60,'D060','Rakhmat Arianto SST., MKom.'),(61,'D061','Rawansyah., Drs., MPd.'),(62,'D062','Retno Damayanti, SPd.'),(63,'D063','Ridwan Rismanto, SST., MKom.'),(64,'D064','Rizki Putri Ramadhani, S.S., M.Pd.'),(65,'D065','Rizky Ardiansyah, SKom., MT.'),(66,'D066','Robby Anggriawan SE., ME.'),(67,'D067','Rokhimatul Wakhidah SPd. MT.'),(68,'D068','Rosa Andrie Asmara, ST., MT., Dr. Eng.'),(69,'D069','Rudy Ariyanto, ST., MCs.'),(70,'D070','Satrio Binusa S, SS, M.Pd'),(71,'D071','Septian Enggar Sukmana, SPd., MT.'),(72,'D072','Shohib Muslim'),(73,'D073','Siti Romlah, Dra., M.M.'),(74,'D074','Sofyan Noor Arief, S.ST., M.Kom.'),(75,'D075','Ulla Delfiana Rosiani, ST., MT.'),(76,'D076','Usman Nurhasan, S.Kom., MT.'),(77,'D077','Very Sugiarto, SPd., MKom.'),(78,'D078','Vipkas Al Hadid Firdaus, ST.,MT.'),(79,'D079','Vivi Nur Wijayaningrum, S.Kom, M.Kom'),(80,'D080','Vivin Ayu Lestari, SPd.'),(81,'D081','Widaningsih Condrowardhani, SH., MH.'),(82,'D082','Wilda Imama Sabilla, S.Kom., M.Kom.'),(83,'D083','Yoppy Yunhasnawa, SST., MSc.'),(84,'D084','Yuri Ariyanto, SKom., MKom.'),(85,'D085','Zulmy Faqihuddin Putera, S.Pd., M.Pd');
/*!40000 ALTER TABLE `dosen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hari`
--

DROP TABLE IF EXISTS `hari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_hari` varchar(255) NOT NULL,
  `nama_hari` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hari`
--

LOCK TABLES `hari` WRITE;
/*!40000 ALTER TABLE `hari` DISABLE KEYS */;
INSERT INTO `hari` VALUES (1,'001','Senin'),(2,'002','Selasa'),(3,'003','Rabu'),(4,'004','Kamis'),(5,'005','Jumat'),(6,'006','Sabtu'),(7,'007','Minggu');
/*!40000 ALTER TABLE `hari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jadwal`
--

DROP TABLE IF EXISTS `jadwal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jadwal` varchar(255) NOT NULL,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_dosen` varchar(255) NOT NULL,
  `kode_mk` varchar(255) NOT NULL,
  `kode_ruang` varchar(255) NOT NULL,
  `kode_hari` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=371 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jadwal`
--

LOCK TABLES `jadwal` WRITE;
/*!40000 ALTER TABLE `jadwal` DISABLE KEYS */;
INSERT INTO `jadwal` VALUES (1,'1','2021020101','D001','02001','0504','001','7','9'),(2,'2','2021010103','D001','02001','0506','002','9','11'),(3,'3','2021010105','D001','02001','0806','003','10','12'),(4,'4','2021010102','D001','02001','0506','004','1','3'),(5,'5','2021010106','D001','02001','0806','004','4','6'),(6,'6','2021010101','D001','02001','0506','004','7','9'),(7,'7','2021010104','D001','02001','0506','005','10','12'),(8,'8','2021010206','D002','02037','0702','001','7','12'),(9,'9','2021020202','D002','02036','0708','003','2','4'),(10,'10','2021010205','D002','02037','0713','004','1','6'),(11,'11','2021020209','D002','02025','0719','004','7','12'),(12,'12','2021020301','D003','02012','0508','002','1','4'),(13,'13','2021020302','D003','02012','0508','002','1','4'),(14,'14','2021010201','D003','02017','0719','003','2','5'),(15,'15','2021010202','D003','02017','0719','003','2','5'),(16,'16','2021010203','D003','02017','0507','005','2','5'),(17,'17','2021010106','D004','02028','0704','001','1','3'),(18,'18','2021020203','D004','02032','0507','001','10','12'),(19,'19','2021010201','D004','02034','0617','002','7','12'),(20,'20','2021020203','D004','02032','0708','004','1','6'),(21,'21','2021020104','D005','02016','0717','001','1','3'),(22,'22','2021020108','D005','02016','0504','001','4','6'),(23,'23','2021020106','D005','02016','0805','001','10','12'),(24,'24','2021020105','D005','02016','0502','002','1','3'),(25,'25','2021020102','D005','02016','0806','002','4','6'),(26,'26','2021020103','D005','02016','0502','003','4','6'),(27,'27','2021020107','D005','02016','0806','004','1','3'),(28,'28','2021020109','D005','02016','0502','005','1','3'),(29,'29','2021010105','D006','02010','0701','002','1','3'),(30,'30','2021010105','D006','02030','0618','004','1','6'),(31,'31','2021010203','D006','02037','0705','004','7','12'),(32,'32','2021010204','D006','02037','0619','005','7','12'),(33,'33','2021010103','D007','02011','0705','002','2','6'),(34,'34','2021020101','D007','02038','0503','003','3','5'),(35,'35','2021020102','D007','02038','0503','003','3','5'),(36,'36','2021010102','D007','02011','0615','004','8','12'),(37,'37','2021010101','D007','02011','0703','005','2','6'),(38,'38','2021010306','D008','02012','0619','001','2','5'),(39,'39','2021020203','D008','02036','0716','003','2','4'),(40,'40','2021020104','D008','02038','0505','004','4','6'),(41,'41','2021020105','D008','02038','0505','004','4','6'),(42,'42','2021010304','D008','02012','0507','005','9','12'),(43,'43','2021010305','D008','02012','0507','005','9','12'),(44,'44','2021020103','D009','02035','0505','002','7','10'),(45,'45','2021020104','D009','02035','0505','002','7','10'),(46,'46','2021020204','D009','02005','0704','003','7','12'),(47,'47','2021020203','D009','02005','0705','005','1','6'),(48,'48','2021010103','D010','02026','0806','001','3','4'),(49,'49','2021010202','D010','02023','0704','001','8','11'),(50,'50','2021010202','D010','02023','0713','002','7','10'),(51,'51','2021010201','D010','02023','0705','003','7','10'),(52,'52','2021010201','D010','02023','0716','005','8','11'),(53,'53','2021010201','D011','02019','0718','002','1','5'),(54,'54','2021010203','D011','02019','0706','004','1','5'),(55,'55','2021010204','D011','02019','0716','004','8','12'),(56,'56','2021010202','D011','02019','0706','005','1','5'),(57,'57','2021020204','D012','02018','0702','001','1','5'),(58,'58','2021020203','D012','02018','0619','002','1','5'),(59,'59','2021010204','D012','02020','0704','002','9','11'),(60,'60','2021010302','D013','02008','0805','002','4','6'),(61,'61','2021020109','D013','02007','0805','002','7','9'),(62,'62','2021010301','D013','02009','0717','003','4','6'),(63,'63','2021020101','D013','02008','0717','003','7','9'),(64,'64','2021020401','D013','02009','0717','004','4','6'),(65,'65','2021020107','D013','02008','0717','005','2','4'),(66,'66','2021020102','D013','02008','0506','005','7','9'),(67,'67','2021020301','D014','02017','0720','004','1','4'),(68,'68','2021020302','D014','02017','0720','004','1','4'),(69,'69','2021020303','D014','02017','0714','005','2','5'),(70,'70','2021020308','D014','02017','0714','005','7','10'),(71,'71','2021020206','D015','02032','0720','002','3','5'),(72,'72','2021020206','D015','02005','0619','002','7','12'),(73,'73','2021020205','D015','02005','0713','003','7','12'),(74,'74','2021020206','D015','02033','0701','004','7','12'),(75,'75','2021020103','D016','02038','0506','001','1','3'),(76,'76','2021020204','D016','02032','0615','001','7','9'),(77,'77','2021010103','D016','02038','0501','004','4','6'),(78,'78','2021010104','D016','02038','0501','004','4','6'),(79,'79','2021020204','D016','02033','0719','005','7','12'),(80,'80','2021020106','D017','02004','0805','004','3','6'),(81,'81','2021020302','D017','02027','0702','004','7','12'),(82,'82','2021020301','D017','02027','0704','005','1','6'),(83,'83','2021020109','D017','02002','0717','005','7','10'),(84,'84','2021020302','D018','02039','0701','001','1','6'),(85,'85','2021010203','D018','02013','0501','001','10','12'),(86,'86','2021010204','D018','02013','0501','001','10','12'),(87,'87','2021020301','D019','02022','0620','001','7','12'),(88,'88','2021020302','D019','02022','0702','005','1','6'),(89,'89','2021020108','D020','02004','0502','004','9','12'),(90,'90','2021020107','D020','02004','0502','005','7','10'),(91,'91','2021020207','D021','02005','0615','001','1','6'),(92,'92','2021020207','D021','02032','0707','002','1','3'),(93,'93','2021020207','D021','02033','0718','003','1','6'),(94,'94','2021010303','D021','02012','0703','003','8','11'),(95,'95','2021010204','D022','02033','0704','003','1','6'),(96,'96','2021010205','D022','02033','0706','003','7','12'),(97,'97','2021020306','D022','02012','0504','005','1','4'),(98,'98','2021010205','D023','02023','0508','001','1','4'),(99,'99','2021020206','D023','02025','0706','003','1','6'),(100,'100','2021010206','D023','02023','0618','003','8','11'),(101,'101','2021010205','D023','02023','0701','005','1','4'),(102,'102','2021010206','D023','02023','0705','005','7','10'),(103,'103','2021010201','D024','02037','0713','001','1','6'),(104,'104','2021010103','D024','02010','0615','001','10','12'),(105,'105','2021010103','D024','02010','0619','003','1','6'),(106,'106','2021010202','D024','02037','0701','005','7','12'),(107,'107','2021020305','D025','02024','0615','001','1','6'),(108,'108','2021020306','D025','02022','0713','002','1','6'),(109,'109','2021020304','D025','02017','0620','005','1','4'),(110,'110','2021020305','D025','02017','0620','005','1','4'),(111,'111','2021020305','D026','02015','0508','003','7','12'),(112,'112','2021020306','D026','02041','0701','004','1','6'),(113,'113','2021020103','D027','02010','0501','002','4','6'),(114,'114','2021020104','D027','02010','0501','002','4','6'),(115,'115','2021010106','D027','02035','0707','003','1','4'),(116,'116','2021020103','D027','02010','0615','004','7','12'),(117,'117','2021020104','D027','02010','0617','005','1','6'),(118,'118','2021010104','D028','02026','0504','002','1','4'),(119,'119','2021020107','D028','02035','0503','002','8','11'),(120,'120','2021020108','D028','02035','0503','002','8','11'),(121,'121','2021010105','D028','02026','0505','003','3','6'),(122,'122','2021010106','D028','02026','0505','003','3','6'),(123,'123','2021020209','D029','02032','0503','001','7','9'),(124,'124','2021020204','D029','02036','0703','003','1','3'),(125,'125','2021020205','D029','02036','0703','003','1','3'),(126,'126','2021020209','D029','02033','0508','004','1','6'),(127,'127','2021020206','D029','02036','0501','005','1','3'),(128,'128','2021020207','D029','02036','0501','005','1','3'),(129,'129','2021020109','D030','02010','0716','001','4','6'),(130,'130','2021020108','D030','02010','0715','002','2','4'),(131,'131','2021020201','D030','02036','0502','003','1','3'),(132,'132','2021020109','D030','02030','0620','004','1','6'),(133,'133','2021020108','D030','02030','0615','005','1','6'),(134,'134','2021020202','D031','02032','0507','001','7','9'),(135,'135','2021010203','D031','02020','0718','002','7','9'),(136,'136','2021010201','D031','02020','0501','004','7','9'),(137,'137','2021010202','D031','02020','0501','004','7','9'),(138,'138','2021020202','D031','02033','0707','005','7','12'),(139,'139','2021020104','D032','02008','0806','001','7','9'),(140,'140','2021020103','D032','02008','0717','002','1','3'),(141,'141','2021020403','D032','02009','0502','002','10','12'),(142,'142','2021010304','D032','02009','0506','003','4','6'),(143,'143','2021020402','D032','02009','0504','004','4','6'),(144,'144','2021020105','D032','02009','0717','004','8','10'),(145,'145','2021010303','D032','02009','0806','005','7','9'),(146,'146','2021020203','D033','02037','0716','003','7','12'),(147,'147','2021020108','D034','02008','0502','001','1','3'),(148,'148','2021020106','D034','02008','0502','002','7','9'),(149,'149','2021010305','D034','02009','0805','003','4','6'),(150,'150','2021010306','D034','02009','0506','004','4','6'),(151,'151','2021020208','D035','02018','0618','002','2','6'),(152,'152','2021020307','D035','02041','0716','002','7','12'),(153,'153','2021020308','D035','02041','0716','005','1','6'),(154,'154','2021020207','D035','02018','0615','005','8','12'),(155,'155','2021020209','D036','02036','0704','001','4','6'),(156,'156','2021020304','D036','02022','0508','001','7','12'),(157,'157','2021020303','D036','02022','0704','002','1','6'),(158,'158','2021020202','D036','02025','0706','002','7','12'),(159,'159','2021010102','D037','02016','0506','001','7','9'),(160,'160','2021010107','D037','02016','0806','002','7','9'),(161,'161','2021010104','D037','02016','0504','002','10','12'),(162,'162','2021020101','D037','02016','0717','003','10','12'),(163,'163','2021010106','D037','02016','0717','004','1','3'),(164,'164','2021010103','D037','02016','0504','005','7','9'),(165,'165','2021010101','D037','02016','0806','005','10','12'),(166,'166','2021020307','D038','02012','0714','002','2','5'),(167,'167','2021020209','D038','02020','0620','003','10','12'),(168,'168','2021010301','D038','02012','0503','005','1','4'),(169,'169','2021010302','D038','02012','0503','005','1','4'),(170,'170','2021010101','D039','02040','0503','001','1','3'),(171,'171','2021010102','D039','02040','0503','001','1','3'),(172,'172','2021020209','D039','02037','0703','002','1','6'),(173,'173','2021010102','D039','02040','0617','003','8','12'),(174,'174','2021010101','D039','02040','0617','004','2','6'),(175,'175','2021020109','D040','02003','0713','001','9','11'),(176,'176','2021010202','D040','02033','0619','003','7','12'),(177,'177','2021020109','D040','02003','0718','004','7','12'),(178,'178','2021010101','D041','02038','0507','001','4','6'),(179,'179','2021010102','D041','02038','0507','001','4','6'),(180,'180','2021010101','D041','02028','0501','002','1','3'),(181,'181','2021010102','D041','02028','0501','002','1','3'),(182,'182','2021020205','D042','02037','0703','001','7','12'),(183,'183','2021020204','D042','02037','0715','004','7','12'),(184,'184','2021020101','D042','02035','0505','005','2','5'),(185,'185','2021020102','D042','02035','0505','005','2','5'),(186,'186','2021010204','D043','02017','0705','001','2','5'),(187,'187','2021010205','D043','02017','0505','002','2','5'),(188,'188','2021010204','D043','02017','0505','002','2','5'),(189,'189','2021020208','D043','02036','0507','004','7','9'),(190,'190','2021020205','D043','02025','0720','005','1','6'),(191,'191','2021020201','D044','02032','0706','001','3','5'),(192,'192','2021010205','D044','02021','0618','001','10','12'),(193,'193','2021010206','D044','02021','0618','001','10','12'),(194,'194','2021020206','D044','02020','0707','004','3','5'),(195,'195','2021020207','D044','02020','0707','004','3','5'),(196,'196','2021020201','D044','02033','0713','004','7','12'),(197,'197','2021020208','D045','02037','0718','001','1','6'),(198,'198','2021020107','D045','02010','0702','001','9','11'),(199,'199','2021020107','D045','02030','0615','003','1','6'),(200,'200','2021020207','D045','02037','0619','004','7','12'),(201,'201','2021020103','D046','02003','0501','001','4','6'),(202,'202','2021020101','D046','02010','0617','002','3','5'),(203,'203','2021020101','D046','02030','0704','004','1','6'),(204,'204','2021020209','D046','02018','0707','005','1','5'),(205,'205','2021020103','D046','02003','0702','005','7','12'),(206,'206','2021020308','D047','02022','0620','001','1','6'),(207,'207','2021020203','D047','02020','0805','001','7','9'),(208,'208','2021020201','D047','02020','0620','002','1','3'),(209,'209','2021020202','D047','02020','0620','002','1','3'),(210,'210','2021020307','D047','02022','0715','003','1','6'),(211,'211','2021020305','D048','02027','0716','002','1','6'),(212,'212','2021020201','D048','02025','0503','004','1','6'),(213,'213','2021020208','D048','02025','0713','005','1','6'),(214,'214','2021020306','D048','02027','0620','005','7','12'),(215,'215','2021010106','D049','02010','0716','001','7','9'),(216,'216','2021020204','D049','02025','0719','002','1','6'),(217,'217','2021020203','D049','02025','0703','002','7','12'),(218,'218','2021010106','D049','02030','0706','004','7','12'),(219,'219','2021020106','D050','02001','0717','001','4','6'),(220,'220','2021020103','D050','02001','0506','001','7','9'),(221,'221','2021020105','D050','02001','0504','001','10','12'),(222,'222','2021020109','D050','02001','0805','003','1','3'),(223,'223','2021020102','D050','02001','0504','003','8','10'),(224,'224','2021020104','D050','02001','0805','004','7','9'),(225,'225','2021020107','D050','02001','0805','004','10','12'),(226,'226','2021020108','D050','02001','0805','005','7','9'),(227,'227','2021020206','D051','02037','0715','001','1','6'),(228,'228','2021020208','D051','02020','0508','003','2','4'),(229,'229','2021020306','D051','02039','0701','003','7','12'),(230,'230','2021020305','D051','02039','0619','004','1','6'),(231,'231','2021010104','D052','02010','0701','001','4','6'),(232,'232','2021020201','D052','02005','0708','002','7','12'),(233,'233','2021020202','D052','02005','0720','003','7','12'),(234,'234','2021010104','D052','02030','0618','005','1','6'),(235,'235','2021020105','D053','02010','0708','001','7','9'),(236,'236','2021020105','D053','02030','0704','005','7','12'),(237,'237','2021020101','D054','02003','0703','001','2','4'),(238,'238','2021020102','D054','02003','0703','001','2','4'),(239,'239','2021010205','D054','02013','0501','001','7','9'),(240,'240','2021020102','D054','02029','0620','002','7','12'),(241,'241','2021020101','D054','02029','0720','004','7','12'),(242,'242','2021020106','D055','02003','0716','001','1','3'),(243,'243','2021020304','D055','02027','0718','004','1','6'),(244,'244','2021020106','D055','02029','0618','004','7','12'),(245,'245','2021020303','D055','02027','0718','005','7','12'),(246,'246','2021020107','D056','02003','0708','001','4','6'),(247,'247','2021020303','D056','02015','0715','001','7','12'),(248,'248','2021020304','D056','02015','0713','003','1','6'),(249,'249','2021020107','D056','02029','0702','003','7','12'),(250,'250','2021020201','D057','02037','0720','001','7','12'),(251,'251','2021020305','D057','02041','0618','005','7','12'),(252,'252','2021020208','D058','02032','0502','001','10','12'),(253,'253','2021020303','D058','02041','0720','003','1','6'),(254,'254','2021020208','D058','02033','0716','004','1','6'),(255,'255','2021020304','D058','02041','0615','005','7','12'),(256,'256','2021010203','D059','02023','0719','001','1','4'),(257,'257','2021010204','D059','02023','0702','002','2','5'),(258,'258','2021020207','D059','02025','0701','002','7','12'),(259,'259','2021010204','D059','02023','0718','005','2','5'),(260,'260','2021010203','D059','02023','0715','005','8','11'),(261,'261','2021020308','D060','02039','0619','001','7','12'),(262,'262','2021020201','D060','02018','0615','003','7','11'),(263,'263','2021020202','D060','02018','0708','005','1','5'),(264,'264','2021020307','D060','02039','0708','005','7','12'),(265,'265','2021020101','D061','02004','0717','002','9','12'),(266,'266','2021020104','D061','02004','0504','003','3','6'),(267,'267','2021020105','D061','02004','0805','003','7','10'),(268,'268','2021020102','D061','02004','0806','004','8','11'),(269,'269','2021020103','D061','02004','0806','005','2','5'),(270,'270','2021010106','D062','02011','0615','002','7','11'),(271,'271','2021010104','D062','02011','0703','004','8','12'),(272,'272','2021010105','D062','02011','0715','005','1','5'),(273,'273','2021010105','D062','02038','0501','005','10','12'),(274,'274','2021010106','D062','02038','0501','005','10','12'),(275,'275','2021020209','D063','02005','0719','002','7','12'),(276,'276','2021010101','D063','02026','0507','003','1','4'),(277,'277','2021010102','D063','02026','0507','003','1','4'),(278,'278','2021020208','D063','02005','0708','003','7','12'),(279,'279','2021010301','D064','02006','0805','001','1','3'),(280,'280','2021010303','D064','02006','0506','001','4','6'),(281,'281','2021010302','D064','02006','0805','002','1','3'),(282,'282','2021010305','D064','02006','0506','003','1','3'),(283,'283','2021010306','D064','02006','0504','004','1','3'),(284,'284','2021010304','D064','02006','0805','005','2','4'),(285,'285','2021020102','D065','02010','0708','002','1','3'),(286,'286','2021020102','D065','02030','0615','004','1','6'),(287,'287','2021010206','D066','02013','0503','001','4','6'),(288,'288','2021020104','D067','02003','0805','001','4','6'),(289,'289','2021020105','D067','02003','0805','001','4','6'),(290,'290','2021020105','D067','02029','0705','003','1','6'),(291,'291','2021010201','D067','02013','0506','004','10','12'),(292,'292','2021020104','D067','02029','0703','005','7','12'),(293,'293','2021020308','D068','02027','0714','002','7','12'),(294,'294','2021020307','D068','02027','0703','004','1','6'),(295,'295','2021020303','D069','02039','0618','002','7','12'),(296,'296','2021010206','D069','02033','0702','004','1','6'),(297,'297','2021020406','D070','02009','0502','001','4','6'),(298,'298','2021020405','D070','02009','0806','001','10','12'),(299,'299','2021020404','D070','02009','0717','002','4','6'),(300,'300','2021020407','D070','02009','0806','003','4','6'),(301,'301','2021020306','D071','02017','0505','001','1','4'),(302,'302','2021020307','D071','02017','0505','001','1','4'),(303,'303','2021020108','D071','02003','0714','001','7','9'),(304,'304','2021020308','D071','02017','0501','003','1','4'),(305,'305','2021020108','D071','02029','0719','004','1','6'),(306,'306','2021010303','D072','02014','0720','001','1','3'),(307,'307','2021010304','D072','02014','0720','001','1','3'),(308,'308','2021010305','D072','02014','0714','001','10','12'),(309,'309','2021010306','D072','02014','0714','001','10','12'),(310,'310','2021010301','D072','02014','0501','005','7','9'),(311,'311','2021010302','D072','02014','0501','005','7','9'),(312,'312','2021020305','D073','02012','0714','003','1','4'),(313,'313','2021020106','D074','02038','0507','002','3','5'),(314,'314','2021020107','D074','02038','0507','002','3','5'),(315,'315','2021020109','D074','02038','0805','002','10','12'),(316,'316','2021020108','D074','02038','0806','003','7','9'),(317,'317','2021010206','D074','02019','0719','005','1','5'),(318,'318','2021010205','D074','02019','0713','005','7','11'),(319,'319','2021010105','D075','02028','0501','001','1','3'),(320,'320','2021020304','D075','02039','0706','002','1','6'),(321,'321','2021020301','D075','02039','0618','003','1','6'),(322,'322','2021010103','D075','02028','0503','003','8','10'),(323,'323','2021010104','D075','02028','0503','003','8','10'),(324,'324','2021020303','D076','02012','0618','001','1','4'),(325,'325','2021020304','D076','02012','0618','001','1','4'),(326,'326','2021020307','D076','02015','0701','001','7','12'),(327,'327','2021020308','D076','02015','0718','003','7','12'),(328,'328','2021020306','D077','02015','0705','001','7','12'),(329,'329','2021020202','D077','02037','0715','004','1','6'),(330,'330','2021020205','D078','02018','0615','002','1','5'),(331,'331','2021020301','D078','02015','0715','002','7','12'),(332,'332','2021020302','D078','02015','0617','003','1','6'),(333,'333','2021020206','D078','02018','0706','005','8','12'),(334,'334','2021010105','D079','02040','0503','002','4','6'),(335,'335','2021010106','D079','02040','0503','002','4','6'),(336,'336','2021010105','D079','02031','0705','002','8','12'),(337,'337','2021010106','D079','02031','0715','003','8','12'),(338,'338','2021020105','D079','02035','0506','005','2','5'),(339,'339','2021010103','D080','02040','0505','001','7','9'),(340,'340','2021010104','D080','02040','0505','001','7','9'),(341,'341','2021020109','D080','02035','0506','002','1','4'),(342,'342','2021010104','D080','02031','0701','003','2','6'),(343,'343','2021010103','D080','02031','0508','004','8','12'),(344,'344','2021020405','D081','02014','0507','001','1','3'),(345,'345','2021020406','D081','02014','0507','001','1','3'),(346,'346','2021020403','D081','02014','0503','002','1','3'),(347,'347','2021020404','D081','02014','0503','002','1','3'),(348,'348','2021020407','D081','02014','0506','003','8','10'),(349,'349','2021020401','D081','02014','0501','004','1','3'),(350,'350','2021020402','D081','02014','0501','004','1','3'),(351,'351','2021010202','D082','02013','0806','002','1','3'),(352,'352','2021010101','D082','02010','0707','002','4','6'),(353,'353','2021010102','D082','02010','0707','002','4','6'),(354,'354','2021010101','D082','02030','0720','002','7','12'),(355,'355','2021010102','D082','02030','0508','005','1','6'),(356,'356','2021020106','D083','02010','0617','001','7','9'),(357,'357','2021020302','D083','02041','0508','002','7','12'),(358,'358','2021020106','D083','02030','0719','003','7','12'),(359,'359','2021020301','D083','02041','0708','004','7','12'),(360,'360','2021020205','D084','02032','0708','001','1','3'),(361,'361','2021010203','D084','02033','0620','003','1','6'),(362,'362','2021020204','D084','02020','0505','004','1','3'),(363,'363','2021020205','D084','02020','0505','004','1','3'),(364,'364','2021020205','D084','02033','0620','004','7','12'),(365,'365','2021010202','D085','02006','0504','001','1','3'),(366,'366','2021010204','D085','02006','0502','001','7','9'),(367,'367','2021010205','D085','02006','0504','002','7','9'),(368,'368','2021010203','D085','02006','0806','002','10','12'),(369,'369','2021010206','D085','02006','0806','003','1','3'),(370,'370','2021010201','D085','02006','0502','004','2','4');
/*!40000 ALTER TABLE `jadwal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jp`
--

DROP TABLE IF EXISTS `jp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jp` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jp`
--

LOCK TABLES `jp` WRITE;
/*!40000 ALTER TABLE `jp` DISABLE KEYS */;
INSERT INTO `jp` VALUES (1,'1','07:00:00','07:50:00'),(2,'2','07:50:00','08:40:00'),(3,'3','08:40:00','09:30:00'),(4,'4','09:40:00','10:30:00'),(5,'5','10:30:00','11:20:00'),(6,'6','11:20:00','12:10:00'),(7,'7','12:50:00','13:40:00'),(8,'8','13:40:00','14:30:00'),(9,'9','14:30:00','15:20:00'),(10,'10','15:30:00','15:30:00'),(11,'11','16:20:00','17:10:00'),(12,'12','17:10:00','18:00:00');
/*!40000 ALTER TABLE `jp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kelas`
--

DROP TABLE IF EXISTS `kelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_kelas` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kelas`
--

LOCK TABLES `kelas` WRITE;
/*!40000 ALTER TABLE `kelas` DISABLE KEYS */;
INSERT INTO `kelas` VALUES (1,'2021010101','001','MI-1A'),(2,'2021010102','001','MI-1B'),(3,'2021010103','001','MI-1C'),(4,'2021010104','001','MI-1D'),(5,'2021010105','001','MI-1E'),(6,'2021010106','001','MI-1F'),(7,'2021010107','001','MI-1H'),(8,'2021010201','001','MI-2A'),(9,'2021010202','001','MI-2B'),(10,'2021010203','001','MI-2C'),(11,'2021010204','001','MI-2D'),(12,'2021010205','001','MI-2E'),(13,'2021010206','001','MI-2F'),(14,'2021010301','001','MI-3A'),(15,'2021010302','001','MI-3B'),(16,'2021010303','001','MI-3C'),(17,'2021010304','001','MI-3D'),(18,'2021010305','001','MI-3E'),(19,'2021010306','001','MI-3F'),(20,'2021020101','002','TI-1A'),(21,'2021020102','002','TI-1B'),(22,'2021020103','002','TI-1C'),(23,'2021020104','002','TI-1D'),(24,'2021020105','002','TI-1E'),(25,'2021020106','002','TI-1F'),(26,'2021020107','002','TI-1G'),(27,'2021020108','002','TI-1H'),(28,'2021020109','002','TI-1I'),(29,'2021020201','002','TI-2A'),(30,'2021020202','002','TI-2B'),(31,'2021020203','002','TI-2C'),(32,'2021020204','002','TI-2D'),(33,'2021020205','002','TI-2E'),(34,'2021020206','002','TI-2F'),(35,'2021020207','002','TI-2G'),(36,'2021020208','002','TI-2H'),(37,'2021020209','002','TI-2I'),(38,'2021020301','002','TI-3A'),(39,'2021020302','002','TI-3B'),(40,'2021020303','002','TI-3C'),(41,'2021020304','002','TI-3D'),(42,'2021020305','002','TI-3E'),(43,'2021020306','002','TI-3F'),(44,'2021020307','002','TI-3G'),(45,'2021020308','002','TI-3H'),(46,'2021020401','002','TI-4A'),(47,'2021020402','002','TI-4B'),(48,'2021020403','002','TI-4C'),(49,'2021020404','002','TI-4D'),(50,'2021020405','002','TI-4E'),(51,'2021020406','002','TI-4F'),(52,'2021020407','002','TI-4G');
/*!40000 ALTER TABLE `kelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mk`
--

DROP TABLE IF EXISTS `mk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_mk` varchar(255) NOT NULL,
  `nama_mk` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mk`
--

LOCK TABLES `mk` WRITE;
/*!40000 ALTER TABLE `mk` DISABLE KEYS */;
INSERT INTO `mk` VALUES (1,'02001','Agama'),(2,'02002','Alajabar Linier'),(3,'02003','Algoritma dan Struktur Data'),(4,'02004','Aljabar Linier'),(5,'02005','Analisis Dan Desan Berorientasi Objek'),(6,'02006','Bahasa Indonesia'),(7,'02007','Bahasa Inggris'),(8,'02008','Bahasa Inggris 2'),(9,'02009','Bahasa Inggris Persiapan Kerja'),(10,'02010','Basis Data'),(11,'02011','Desain Pemrograman Web'),(12,'02012','Digital Entrepreneurship'),(13,'02013','E-Business'),(14,'02014','Etika Profesi Bidang TI'),(15,'02015','Internet Of Things'),(16,'02016','Kewarganegaraan'),(17,'02017','Komputasi Multimedia'),(18,'02018','Machine Learning'),(19,'02019','Manajemen Jaringan Komputer'),(20,'02020','Manajemen Proyek'),(21,'02021','Manajemen Proyek '),(22,'02022','Pemrograman Berbasis Framework'),(23,'02023','Pemrograman Mobile'),(24,'02024','Pemrograman Multimedia'),(25,'02025','Pemrograman Web Lanjut'),(26,'02026','Pengembangan Perangkat Lunak Berbasis Object'),(27,'02027','Pengolahan Citra dan Visi Komputer'),(28,'02028','Penulisan Ilmiah'),(29,'02029','Praktikum Algoritma dan Struktur Data'),(30,'02030','Praktikum Basis Data'),(31,'02031','Praktikum Struktur Data'),(32,'02032','Proyek 1_P1'),(33,'02033','Proyek 1_P2'),(34,'02034','Proyek 2_P2'),(35,'02035','Rekayasa Perangkat Lunak'),(36,'02036','Sistem Informasi'),(37,'02037','Sistem Manajemen Basis Data'),(38,'02038','Sistem Operasi'),(39,'02039','Sistem Pendukung Keputusan'),(40,'02040','Struktur Data'),(41,'02041','Teknologi Data');
/*!40000 ALTER TABLE `mk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodi`
--

DROP TABLE IF EXISTS `prodi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_prodi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodi`
--

LOCK TABLES `prodi` WRITE;
/*!40000 ALTER TABLE `prodi` DISABLE KEYS */;
INSERT INTO `prodi` VALUES (1,'001','D3 Manajemen Informatika'),(2,'002','D4 Teknik Informatika');
/*!40000 ALTER TABLE `prodi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruang`
--

DROP TABLE IF EXISTS `ruang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_ruang` varchar(255) NOT NULL,
  `nama_ruang` varchar(255) NOT NULL,
  `deskripsi_ruang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruang`
--

LOCK TABLES `ruang` WRITE;
/*!40000 ALTER TABLE `ruang` DISABLE KEYS */;
INSERT INTO `ruang` VALUES (1,'0501','RT01','Ruang Teori 1'),(2,'0502','RT02','Ruang Teori 2'),(3,'0503','RT03','Ruang Teori 3'),(4,'0504','RT04','Ruang Teori 4'),(5,'0505','RT05','Ruang Teori 5'),(6,'0506','RT06','Ruang Teori 6'),(7,'0507','RT07','Ruang Teori 7'),(8,'0508','LPY1','Laboratorium Proyek 1'),(9,'0615','LSI1','Laboratorium Sistem Informasi 1'),(10,'0617','LSI2','Laboratorium Sistem Informasi 2'),(11,'0618','LSI3','Laboratorium Sistem Informasi 3'),(12,'0619','LPY2','Laboratorium Proyek 2'),(13,'0620','LPY3','Laboratorium Proyek 3'),(14,'0701','LPR1','Laboratorium Pemrograman 1'),(15,'0702','LPR2','Laboratorium Pemrograman 2'),(16,'0703','LPR3','Laboratorium Pemrograman 3'),(17,'0704','LPR4','Laboratorium Pemrograman 4'),(18,'0705','LPR5','Laboratorium Pemrograman 5'),(19,'0706','LPR6','Laboratorium Pemrograman 6'),(20,'0707','LKJ1','Laboratorium Keamanan Jaringan 1'),(21,'0708','LPR7','Laboratorium Pemrograman 7'),(22,'0713','LKJ2','Laboratorium Keamanan Jaringan 2'),(23,'0714','LPR8','Laboratorium Pemrograman 8'),(24,'0715','LKJ3','Laboratorium Keamanan Jaringan 3'),(25,'0716','LIG1','Laboratorium Visi Komputer 1'),(26,'0717','RT08','Ruang Teori 8'),(27,'0718','LIG2','Laboratorium Visi Komputer 2'),(28,'0719','LPY4','Laboratorium Proyek 4'),(29,'0720','LAI1','Laboratorium Kecerdasan Buatan 1'),(30,'0801','L DTS','Laboratorium DTS'),(31,'0805','RT09','Ruang Teori 9'),(32,'0806','RT10','Ruang Teori 10'),(33,'1001','RT11','Ruang Teori 11'),(34,'1002','ROL1','Ruang Online 1'),(35,'1003','ROL2','Ruang Online 2'),(36,'1004','ROL3','Ruang Online 3');
/*!40000 ALTER TABLE `ruang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_64_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_64_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_64_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_64_21_key`;

--
-- Table structure for table `dosen`
--

DROP TABLE IF EXISTS `dosen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dosen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_dosen` varchar(255) NOT NULL,
  `nama_dosen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dosen`
--

LOCK TABLES `dosen` WRITE;
/*!40000 ALTER TABLE `dosen` DISABLE KEYS */;
INSERT INTO `dosen` VALUES (1,'D001','Abdul Chalim, SAg., MPd.I'),(2,'D002','Ade Ismail'),(3,'D003','Agung Nugroho Pramudhita ST., MT.'),(4,'D004','Ahmadi Yuli Ananta ST., MM.'),(5,'D005','Ane Fany Novitasari, SH.MKn.'),(6,'D006','Annisa Puspa Kirana MKom.'),(7,'D007','Annisa Taufika Firdausi ST., MT.'),(8,'D008','Anugrah Nur Rahmanto SSn., MDs.'),(9,'D009','Ariadi Retno Ririd SKom., MKom.'),(10,'D010','Arie Rachmad Syulistyo SKom., MKom.'),(11,'D011','Arief Prasetyo SKom., MKom.'),(12,'D012','Arwin Sumari ST., MT., DR.'),(13,'D013','Atiqah Nurul Asri SPd., MPd.'),(14,'D014','Bagas Satya Dian Nugraha, ST., MT.'),(15,'D015','Banni Satria Andoko, S. Kom., M.MSI'),(16,'D016','Budi Harijanto ST., MMKom.'),(17,'D017','Cahya Rahmad ST., MKom. DR.Eng'),(18,'D018','Candra Bella Vista SKom., MT.'),(19,'D019','Candrasena Setiadi ST., MMT.'),(20,'D020','Deasy Sandhya Elya Ikawati SSi., MSi.'),(21,'D021','Deddy Kusbianto PA Ir. MMKom.'),(22,'D022','Dhebys Suryani SKom. MT.'),(23,'D023','Dian Hanifudin Subhi SKom., MT.'),(24,'D024','Dika Rizky Yunianto SKom., MKom.'),(25,'D025','Dimas Wahyu Wibowo ST., MT.'),(26,'D026','Dodit Supriyanto SKom., MT.'),(27,'D027','Dwi Puspitasari SKom., MKom.'),(28,'D028','Eka Larasati Amalia, SST., MT.'),(29,'D029','Ekojono, ST., M.Kom.'),(30,'D030','Elok Nur Hamdana, ST., MT'),(31,'D031','Erfan Rohadi, ST., MEng., PhD.'),(32,'D032','Faiz Ushbah Mubarok, SPd., MPd.'),(33,'D033','Farid Angga Pribadi, SKom.,MKom.'),(34,'D034','Farida Ulfa, SPd., MPd.'),(35,'D035','Gunawan Budi Prasetyo, ST., MMT., Ph.D.'),(36,'D036','Habibie Ed Dien, MT.'),(37,'D037','Hairus'),(38,'D038','Hendra Pradibta, SE., M.Sc.'),(39,'D039','Ika Kusumaning Putri, MT.'),(40,'D040','Imam Fahrur Rozi, ST., MT.'),(41,'D041','Indra Dharma Wijaya, ST., MMT.'),(42,'D042','Irsyad Arif Mashudi, M.Kom'),(43,'D043','Kadek Suarjuna Batubulan, SKom, MT.'),(44,'D044','Luqman Affandi, SKom., MMSI.'),(45,'D045','M. Hasyim Ratsanjani'),(46,'D046','Mamluatul Haniah'),(47,'D047','Meyti Eka Apriyani ST., MT.'),(48,'D048','Milyun Nima Shoumi'),(49,'D049','Moch. Zawaruddin Abdullah, S.ST., M.Kom'),(50,'D050','Moh. Amin'),(51,'D051','Muhammad Afif Hendrawan, S.Kom.'),(52,'D052','Muhammad Shulhan Khairy, SKom., MKom.'),(53,'D053','Muhammad Unggul Pamenang, SSt., MT.'),(54,'D054','Mungki Astiningrum, ST., MKom.'),(55,'D055','Mustika Mentari, SKom., MKom.'),(56,'D056','Noprianto'),(57,'D057','Odhitya Desta Triswidrananta, SPd., MPd.'),(58,'D058','Pramana Yoga Saputra, SKom., MMT.'),(59,'D059','Putra Prima A., ST., MKom.'),(60,'D060','Rakhmat Arianto SST., MKom.'),(61,'D061','Rawansyah., Drs., MPd.'),(62,'D062','Retno Damayanti, SPd.'),(63,'D063','Ridwan Rismanto, SST., MKom.'),(64,'D064','Rizki Putri Ramadhani, S.S., M.Pd.'),(65,'D065','Rizky Ardiansyah, SKom., MT.'),(66,'D066','Robby Anggriawan SE., ME.'),(67,'D067','Rokhimatul Wakhidah SPd. MT.'),(68,'D068','Rosa Andrie Asmara, ST., MT., Dr. Eng.'),(69,'D069','Rudy Ariyanto, ST., MCs.'),(70,'D070','Satrio Binusa S, SS, M.Pd'),(71,'D071','Septian Enggar Sukmana, SPd., MT.'),(72,'D072','Shohib Muslim'),(73,'D073','Siti Romlah, Dra., M.M.'),(74,'D074','Sofyan Noor Arief, S.ST., M.Kom.'),(75,'D075','Ulla Delfiana Rosiani, ST., MT.'),(76,'D076','Usman Nurhasan, S.Kom., MT.'),(77,'D077','Very Sugiarto, SPd., MKom.'),(78,'D078','Vipkas Al Hadid Firdaus, ST.,MT.'),(79,'D079','Vivi Nur Wijayaningrum, S.Kom, M.Kom'),(80,'D080','Vivin Ayu Lestari, SPd.'),(81,'D081','Widaningsih Condrowardhani, SH., MH.'),(82,'D082','Wilda Imama Sabilla, S.Kom., M.Kom.'),(83,'D083','Yoppy Yunhasnawa, SST., MSc.'),(84,'D084','Yuri Ariyanto, SKom., MKom.'),(85,'D085','Zulmy Faqihuddin Putera, S.Pd., M.Pd');
/*!40000 ALTER TABLE `dosen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hari`
--

DROP TABLE IF EXISTS `hari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_hari` varchar(255) NOT NULL,
  `nama_hari` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hari`
--

LOCK TABLES `hari` WRITE;
/*!40000 ALTER TABLE `hari` DISABLE KEYS */;
INSERT INTO `hari` VALUES (1,'001','Senin'),(2,'002','Selasa'),(3,'003','Rabu'),(4,'004','Kamis'),(5,'005','Jumat'),(6,'006','Sabtu'),(7,'007','Minggu');
/*!40000 ALTER TABLE `hari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jadwal`
--

DROP TABLE IF EXISTS `jadwal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jadwal` varchar(255) NOT NULL,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_dosen` varchar(255) NOT NULL,
  `kode_mk` varchar(255) NOT NULL,
  `kode_ruang` varchar(255) NOT NULL,
  `kode_hari` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=371 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jadwal`
--

LOCK TABLES `jadwal` WRITE;
/*!40000 ALTER TABLE `jadwal` DISABLE KEYS */;
INSERT INTO `jadwal` VALUES (1,'1','2021020101','D001','02001','0504','001','7','9'),(2,'2','2021010103','D001','02001','0506','002','9','11'),(3,'3','2021010105','D001','02001','0806','003','10','12'),(4,'4','2021010102','D001','02001','0506','004','1','3'),(5,'5','2021010106','D001','02001','0806','004','4','6'),(6,'6','2021010101','D001','02001','0506','004','7','9'),(7,'7','2021010104','D001','02001','0506','005','10','12'),(8,'8','2021010206','D002','02037','0702','001','7','12'),(9,'9','2021020202','D002','02036','0708','003','2','4'),(10,'10','2021010205','D002','02037','0713','004','1','6'),(11,'11','2021020209','D002','02025','0719','004','7','12'),(12,'12','2021020301','D003','02012','0508','002','1','4'),(13,'13','2021020302','D003','02012','0508','002','1','4'),(14,'14','2021010201','D003','02017','0719','003','2','5'),(15,'15','2021010202','D003','02017','0719','003','2','5'),(16,'16','2021010203','D003','02017','0507','005','2','5'),(17,'17','2021010106','D004','02028','0704','001','1','3'),(18,'18','2021020203','D004','02032','0507','001','10','12'),(19,'19','2021010201','D004','02034','0617','002','7','12'),(20,'20','2021020203','D004','02032','0708','004','1','6'),(21,'21','2021020104','D005','02016','0717','001','1','3'),(22,'22','2021020108','D005','02016','0504','001','4','6'),(23,'23','2021020106','D005','02016','0805','001','10','12'),(24,'24','2021020105','D005','02016','0502','002','1','3'),(25,'25','2021020102','D005','02016','0806','002','4','6'),(26,'26','2021020103','D005','02016','0502','003','4','6'),(27,'27','2021020107','D005','02016','0806','004','1','3'),(28,'28','2021020109','D005','02016','0502','005','1','3'),(29,'29','2021010105','D006','02010','0701','002','1','3'),(30,'30','2021010105','D006','02030','0618','004','1','6'),(31,'31','2021010203','D006','02037','0705','004','7','12'),(32,'32','2021010204','D006','02037','0619','005','7','12'),(33,'33','2021010103','D007','02011','0705','002','2','6'),(34,'34','2021020101','D007','02038','0503','003','3','5'),(35,'35','2021020102','D007','02038','0503','003','3','5'),(36,'36','2021010102','D007','02011','0615','004','8','12'),(37,'37','2021010101','D007','02011','0703','005','2','6'),(38,'38','2021010306','D008','02012','0619','001','2','5'),(39,'39','2021020203','D008','02036','0716','003','2','4'),(40,'40','2021020104','D008','02038','0505','004','4','6'),(41,'41','2021020105','D008','02038','0505','004','4','6'),(42,'42','2021010304','D008','02012','0507','005','9','12'),(43,'43','2021010305','D008','02012','0507','005','9','12'),(44,'44','2021020103','D009','02035','0505','002','7','10'),(45,'45','2021020104','D009','02035','0505','002','7','10'),(46,'46','2021020204','D009','02005','0704','003','7','12'),(47,'47','2021020203','D009','02005','0705','005','1','6'),(48,'48','2021010103','D010','02026','0806','001','3','4'),(49,'49','2021010202','D010','02023','0704','001','8','11'),(50,'50','2021010202','D010','02023','0713','002','7','10'),(51,'51','2021010201','D010','02023','0705','003','7','10'),(52,'52','2021010201','D010','02023','0716','005','8','11'),(53,'53','2021010201','D011','02019','0718','002','1','5'),(54,'54','2021010203','D011','02019','0706','004','1','5'),(55,'55','2021010204','D011','02019','0716','004','8','12'),(56,'56','2021010202','D011','02019','0706','005','1','5'),(57,'57','2021020204','D012','02018','0702','001','1','5'),(58,'58','2021020203','D012','02018','0619','002','1','5'),(59,'59','2021010204','D012','02020','0704','002','9','11'),(60,'60','2021010302','D013','02008','0805','002','4','6'),(61,'61','2021020109','D013','02007','0805','002','7','9'),(62,'62','2021010301','D013','02009','0717','003','4','6'),(63,'63','2021020101','D013','02008','0717','003','7','9'),(64,'64','2021020401','D013','02009','0717','004','4','6'),(65,'65','2021020107','D013','02008','0717','005','2','4'),(66,'66','2021020102','D013','02008','0506','005','7','9'),(67,'67','2021020301','D014','02017','0720','004','1','4'),(68,'68','2021020302','D014','02017','0720','004','1','4'),(69,'69','2021020303','D014','02017','0714','005','2','5'),(70,'70','2021020308','D014','02017','0714','005','7','10'),(71,'71','2021020206','D015','02032','0720','002','3','5'),(72,'72','2021020206','D015','02005','0619','002','7','12'),(73,'73','2021020205','D015','02005','0713','003','7','12'),(74,'74','2021020206','D015','02033','0701','004','7','12'),(75,'75','2021020103','D016','02038','0506','001','1','3'),(76,'76','2021020204','D016','02032','0615','001','7','9'),(77,'77','2021010103','D016','02038','0501','004','4','6'),(78,'78','2021010104','D016','02038','0501','004','4','6'),(79,'79','2021020204','D016','02033','0719','005','7','12'),(80,'80','2021020106','D017','02004','0805','004','3','6'),(81,'81','2021020302','D017','02027','0702','004','7','12'),(82,'82','2021020301','D017','02027','0704','005','1','6'),(83,'83','2021020109','D017','02002','0717','005','7','10'),(84,'84','2021020302','D018','02039','0701','001','1','6'),(85,'85','2021010203','D018','02013','0501','001','10','12'),(86,'86','2021010204','D018','02013','0501','001','10','12'),(87,'87','2021020301','D019','02022','0620','001','7','12'),(88,'88','2021020302','D019','02022','0702','005','1','6'),(89,'89','2021020108','D020','02004','0502','004','9','12'),(90,'90','2021020107','D020','02004','0502','005','7','10'),(91,'91','2021020207','D021','02005','0615','001','1','6'),(92,'92','2021020207','D021','02032','0707','002','1','3'),(93,'93','2021020207','D021','02033','0718','003','1','6'),(94,'94','2021010303','D021','02012','0703','003','8','11'),(95,'95','2021010204','D022','02033','0704','003','1','6'),(96,'96','2021010205','D022','02033','0706','003','7','12'),(97,'97','2021020306','D022','02012','0504','005','1','4'),(98,'98','2021010205','D023','02023','0508','001','1','4'),(99,'99','2021020206','D023','02025','0706','003','1','6'),(100,'100','2021010206','D023','02023','0618','003','8','11'),(101,'101','2021010205','D023','02023','0701','005','1','4'),(102,'102','2021010206','D023','02023','0705','005','7','10'),(103,'103','2021010201','D024','02037','0713','001','1','6'),(104,'104','2021010103','D024','02010','0615','001','10','12'),(105,'105','2021010103','D024','02010','0619','003','1','6'),(106,'106','2021010202','D024','02037','0701','005','7','12'),(107,'107','2021020305','D025','02024','0615','001','1','6'),(108,'108','2021020306','D025','02022','0713','002','1','6'),(109,'109','2021020304','D025','02017','0620','005','1','4'),(110,'110','2021020305','D025','02017','0620','005','1','4'),(111,'111','2021020305','D026','02015','0508','003','7','12'),(112,'112','2021020306','D026','02041','0701','004','1','6'),(113,'113','2021020103','D027','02010','0501','002','4','6'),(114,'114','2021020104','D027','02010','0501','002','4','6'),(115,'115','2021010106','D027','02035','0707','003','1','4'),(116,'116','2021020103','D027','02010','0615','004','7','12'),(117,'117','2021020104','D027','02010','0617','005','1','6'),(118,'118','2021010104','D028','02026','0504','002','1','4'),(119,'119','2021020107','D028','02035','0503','002','8','11'),(120,'120','2021020108','D028','02035','0503','002','8','11'),(121,'121','2021010105','D028','02026','0505','003','3','6'),(122,'122','2021010106','D028','02026','0505','003','3','6'),(123,'123','2021020209','D029','02032','0503','001','7','9'),(124,'124','2021020204','D029','02036','0703','003','1','3'),(125,'125','2021020205','D029','02036','0703','003','1','3'),(126,'126','2021020209','D029','02033','0508','004','1','6'),(127,'127','2021020206','D029','02036','0501','005','1','3'),(128,'128','2021020207','D029','02036','0501','005','1','3'),(129,'129','2021020109','D030','02010','0716','001','4','6'),(130,'130','2021020108','D030','02010','0715','002','2','4'),(131,'131','2021020201','D030','02036','0502','003','1','3'),(132,'132','2021020109','D030','02030','0620','004','1','6'),(133,'133','2021020108','D030','02030','0615','005','1','6'),(134,'134','2021020202','D031','02032','0507','001','7','9'),(135,'135','2021010203','D031','02020','0718','002','7','9'),(136,'136','2021010201','D031','02020','0501','004','7','9'),(137,'137','2021010202','D031','02020','0501','004','7','9'),(138,'138','2021020202','D031','02033','0707','005','7','12'),(139,'139','2021020104','D032','02008','0806','001','7','9'),(140,'140','2021020103','D032','02008','0717','002','1','3'),(141,'141','2021020403','D032','02009','0502','002','10','12'),(142,'142','2021010304','D032','02009','0506','003','4','6'),(143,'143','2021020402','D032','02009','0504','004','4','6'),(144,'144','2021020105','D032','02009','0717','004','8','10'),(145,'145','2021010303','D032','02009','0806','005','7','9'),(146,'146','2021020203','D033','02037','0716','003','7','12'),(147,'147','2021020108','D034','02008','0502','001','1','3'),(148,'148','2021020106','D034','02008','0502','002','7','9'),(149,'149','2021010305','D034','02009','0805','003','4','6'),(150,'150','2021010306','D034','02009','0506','004','4','6'),(151,'151','2021020208','D035','02018','0618','002','2','6'),(152,'152','2021020307','D035','02041','0716','002','7','12'),(153,'153','2021020308','D035','02041','0716','005','1','6'),(154,'154','2021020207','D035','02018','0615','005','8','12'),(155,'155','2021020209','D036','02036','0704','001','4','6'),(156,'156','2021020304','D036','02022','0508','001','7','12'),(157,'157','2021020303','D036','02022','0704','002','1','6'),(158,'158','2021020202','D036','02025','0706','002','7','12'),(159,'159','2021010102','D037','02016','0506','001','7','9'),(160,'160','2021010107','D037','02016','0806','002','7','9'),(161,'161','2021010104','D037','02016','0504','002','10','12'),(162,'162','2021020101','D037','02016','0717','003','10','12'),(163,'163','2021010106','D037','02016','0717','004','1','3'),(164,'164','2021010103','D037','02016','0504','005','7','9'),(165,'165','2021010101','D037','02016','0806','005','10','12'),(166,'166','2021020307','D038','02012','0714','002','2','5'),(167,'167','2021020209','D038','02020','0620','003','10','12'),(168,'168','2021010301','D038','02012','0503','005','1','4'),(169,'169','2021010302','D038','02012','0503','005','1','4'),(170,'170','2021010101','D039','02040','0503','001','1','3'),(171,'171','2021010102','D039','02040','0503','001','1','3'),(172,'172','2021020209','D039','02037','0703','002','1','6'),(173,'173','2021010102','D039','02040','0617','003','8','12'),(174,'174','2021010101','D039','02040','0617','004','2','6'),(175,'175','2021020109','D040','02003','0713','001','9','11'),(176,'176','2021010202','D040','02033','0619','003','7','12'),(177,'177','2021020109','D040','02003','0718','004','7','12'),(178,'178','2021010101','D041','02038','0507','001','4','6'),(179,'179','2021010102','D041','02038','0507','001','4','6'),(180,'180','2021010101','D041','02028','0501','002','1','3'),(181,'181','2021010102','D041','02028','0501','002','1','3'),(182,'182','2021020205','D042','02037','0703','001','7','12'),(183,'183','2021020204','D042','02037','0715','004','7','12'),(184,'184','2021020101','D042','02035','0505','005','2','5'),(185,'185','2021020102','D042','02035','0505','005','2','5'),(186,'186','2021010204','D043','02017','0705','001','2','5'),(187,'187','2021010205','D043','02017','0505','002','2','5'),(188,'188','2021010204','D043','02017','0505','002','2','5'),(189,'189','2021020208','D043','02036','0507','004','7','9'),(190,'190','2021020205','D043','02025','0720','005','1','6'),(191,'191','2021020201','D044','02032','0706','001','3','5'),(192,'192','2021010205','D044','02021','0618','001','10','12'),(193,'193','2021010206','D044','02021','0618','001','10','12'),(194,'194','2021020206','D044','02020','0707','004','3','5'),(195,'195','2021020207','D044','02020','0707','004','3','5'),(196,'196','2021020201','D044','02033','0713','004','7','12'),(197,'197','2021020208','D045','02037','0718','001','1','6'),(198,'198','2021020107','D045','02010','0702','001','9','11'),(199,'199','2021020107','D045','02030','0615','003','1','6'),(200,'200','2021020207','D045','02037','0619','004','7','12'),(201,'201','2021020103','D046','02003','0501','001','4','6'),(202,'202','2021020101','D046','02010','0617','002','3','5'),(203,'203','2021020101','D046','02030','0704','004','1','6'),(204,'204','2021020209','D046','02018','0707','005','1','5'),(205,'205','2021020103','D046','02003','0702','005','7','12'),(206,'206','2021020308','D047','02022','0620','001','1','6'),(207,'207','2021020203','D047','02020','0805','001','7','9'),(208,'208','2021020201','D047','02020','0620','002','1','3'),(209,'209','2021020202','D047','02020','0620','002','1','3'),(210,'210','2021020307','D047','02022','0715','003','1','6'),(211,'211','2021020305','D048','02027','0716','002','1','6'),(212,'212','2021020201','D048','02025','0503','004','1','6'),(213,'213','2021020208','D048','02025','0713','005','1','6'),(214,'214','2021020306','D048','02027','0620','005','7','12'),(215,'215','2021010106','D049','02010','0716','001','7','9'),(216,'216','2021020204','D049','02025','0719','002','1','6'),(217,'217','2021020203','D049','02025','0703','002','7','12'),(218,'218','2021010106','D049','02030','0706','004','7','12'),(219,'219','2021020106','D050','02001','0717','001','4','6'),(220,'220','2021020103','D050','02001','0506','001','7','9'),(221,'221','2021020105','D050','02001','0504','001','10','12'),(222,'222','2021020109','D050','02001','0805','003','1','3'),(223,'223','2021020102','D050','02001','0504','003','8','10'),(224,'224','2021020104','D050','02001','0805','004','7','9'),(225,'225','2021020107','D050','02001','0805','004','10','12'),(226,'226','2021020108','D050','02001','0805','005','7','9'),(227,'227','2021020206','D051','02037','0715','001','1','6'),(228,'228','2021020208','D051','02020','0508','003','2','4'),(229,'229','2021020306','D051','02039','0701','003','7','12'),(230,'230','2021020305','D051','02039','0619','004','1','6'),(231,'231','2021010104','D052','02010','0701','001','4','6'),(232,'232','2021020201','D052','02005','0708','002','7','12'),(233,'233','2021020202','D052','02005','0720','003','7','12'),(234,'234','2021010104','D052','02030','0618','005','1','6'),(235,'235','2021020105','D053','02010','0708','001','7','9'),(236,'236','2021020105','D053','02030','0704','005','7','12'),(237,'237','2021020101','D054','02003','0703','001','2','4'),(238,'238','2021020102','D054','02003','0703','001','2','4'),(239,'239','2021010205','D054','02013','0501','001','7','9'),(240,'240','2021020102','D054','02029','0620','002','7','12'),(241,'241','2021020101','D054','02029','0720','004','7','12'),(242,'242','2021020106','D055','02003','0716','001','1','3'),(243,'243','2021020304','D055','02027','0718','004','1','6'),(244,'244','2021020106','D055','02029','0618','004','7','12'),(245,'245','2021020303','D055','02027','0718','005','7','12'),(246,'246','2021020107','D056','02003','0708','001','4','6'),(247,'247','2021020303','D056','02015','0715','001','7','12'),(248,'248','2021020304','D056','02015','0713','003','1','6'),(249,'249','2021020107','D056','02029','0702','003','7','12'),(250,'250','2021020201','D057','02037','0720','001','7','12'),(251,'251','2021020305','D057','02041','0618','005','7','12'),(252,'252','2021020208','D058','02032','0502','001','10','12'),(253,'253','2021020303','D058','02041','0720','003','1','6'),(254,'254','2021020208','D058','02033','0716','004','1','6'),(255,'255','2021020304','D058','02041','0615','005','7','12'),(256,'256','2021010203','D059','02023','0719','001','1','4'),(257,'257','2021010204','D059','02023','0702','002','2','5'),(258,'258','2021020207','D059','02025','0701','002','7','12'),(259,'259','2021010204','D059','02023','0718','005','2','5'),(260,'260','2021010203','D059','02023','0715','005','8','11'),(261,'261','2021020308','D060','02039','0619','001','7','12'),(262,'262','2021020201','D060','02018','0615','003','7','11'),(263,'263','2021020202','D060','02018','0708','005','1','5'),(264,'264','2021020307','D060','02039','0708','005','7','12'),(265,'265','2021020101','D061','02004','0717','002','9','12'),(266,'266','2021020104','D061','02004','0504','003','3','6'),(267,'267','2021020105','D061','02004','0805','003','7','10'),(268,'268','2021020102','D061','02004','0806','004','8','11'),(269,'269','2021020103','D061','02004','0806','005','2','5'),(270,'270','2021010106','D062','02011','0615','002','7','11'),(271,'271','2021010104','D062','02011','0703','004','8','12'),(272,'272','2021010105','D062','02011','0715','005','1','5'),(273,'273','2021010105','D062','02038','0501','005','10','12'),(274,'274','2021010106','D062','02038','0501','005','10','12'),(275,'275','2021020209','D063','02005','0719','002','7','12'),(276,'276','2021010101','D063','02026','0507','003','1','4'),(277,'277','2021010102','D063','02026','0507','003','1','4'),(278,'278','2021020208','D063','02005','0708','003','7','12'),(279,'279','2021010301','D064','02006','0805','001','1','3'),(280,'280','2021010303','D064','02006','0506','001','4','6'),(281,'281','2021010302','D064','02006','0805','002','1','3'),(282,'282','2021010305','D064','02006','0506','003','1','3'),(283,'283','2021010306','D064','02006','0504','004','1','3'),(284,'284','2021010304','D064','02006','0805','005','2','4'),(285,'285','2021020102','D065','02010','0708','002','1','3'),(286,'286','2021020102','D065','02030','0615','004','1','6'),(287,'287','2021010206','D066','02013','0503','001','4','6'),(288,'288','2021020104','D067','02003','0805','001','4','6'),(289,'289','2021020105','D067','02003','0805','001','4','6'),(290,'290','2021020105','D067','02029','0705','003','1','6'),(291,'291','2021010201','D067','02013','0506','004','10','12'),(292,'292','2021020104','D067','02029','0703','005','7','12'),(293,'293','2021020308','D068','02027','0714','002','7','12'),(294,'294','2021020307','D068','02027','0703','004','1','6'),(295,'295','2021020303','D069','02039','0618','002','7','12'),(296,'296','2021010206','D069','02033','0702','004','1','6'),(297,'297','2021020406','D070','02009','0502','001','4','6'),(298,'298','2021020405','D070','02009','0806','001','10','12'),(299,'299','2021020404','D070','02009','0717','002','4','6'),(300,'300','2021020407','D070','02009','0806','003','4','6'),(301,'301','2021020306','D071','02017','0505','001','1','4'),(302,'302','2021020307','D071','02017','0505','001','1','4'),(303,'303','2021020108','D071','02003','0714','001','7','9'),(304,'304','2021020308','D071','02017','0501','003','1','4'),(305,'305','2021020108','D071','02029','0719','004','1','6'),(306,'306','2021010303','D072','02014','0720','001','1','3'),(307,'307','2021010304','D072','02014','0720','001','1','3'),(308,'308','2021010305','D072','02014','0714','001','10','12'),(309,'309','2021010306','D072','02014','0714','001','10','12'),(310,'310','2021010301','D072','02014','0501','005','7','9'),(311,'311','2021010302','D072','02014','0501','005','7','9'),(312,'312','2021020305','D073','02012','0714','003','1','4'),(313,'313','2021020106','D074','02038','0507','002','3','5'),(314,'314','2021020107','D074','02038','0507','002','3','5'),(315,'315','2021020109','D074','02038','0805','002','10','12'),(316,'316','2021020108','D074','02038','0806','003','7','9'),(317,'317','2021010206','D074','02019','0719','005','1','5'),(318,'318','2021010205','D074','02019','0713','005','7','11'),(319,'319','2021010105','D075','02028','0501','001','1','3'),(320,'320','2021020304','D075','02039','0706','002','1','6'),(321,'321','2021020301','D075','02039','0618','003','1','6'),(322,'322','2021010103','D075','02028','0503','003','8','10'),(323,'323','2021010104','D075','02028','0503','003','8','10'),(324,'324','2021020303','D076','02012','0618','001','1','4'),(325,'325','2021020304','D076','02012','0618','001','1','4'),(326,'326','2021020307','D076','02015','0701','001','7','12'),(327,'327','2021020308','D076','02015','0718','003','7','12'),(328,'328','2021020306','D077','02015','0705','001','7','12'),(329,'329','2021020202','D077','02037','0715','004','1','6'),(330,'330','2021020205','D078','02018','0615','002','1','5'),(331,'331','2021020301','D078','02015','0715','002','7','12'),(332,'332','2021020302','D078','02015','0617','003','1','6'),(333,'333','2021020206','D078','02018','0706','005','8','12'),(334,'334','2021010105','D079','02040','0503','002','4','6'),(335,'335','2021010106','D079','02040','0503','002','4','6'),(336,'336','2021010105','D079','02031','0705','002','8','12'),(337,'337','2021010106','D079','02031','0715','003','8','12'),(338,'338','2021020105','D079','02035','0506','005','2','5'),(339,'339','2021010103','D080','02040','0505','001','7','9'),(340,'340','2021010104','D080','02040','0505','001','7','9'),(341,'341','2021020109','D080','02035','0506','002','1','4'),(342,'342','2021010104','D080','02031','0701','003','2','6'),(343,'343','2021010103','D080','02031','0508','004','8','12'),(344,'344','2021020405','D081','02014','0507','001','1','3'),(345,'345','2021020406','D081','02014','0507','001','1','3'),(346,'346','2021020403','D081','02014','0503','002','1','3'),(347,'347','2021020404','D081','02014','0503','002','1','3'),(348,'348','2021020407','D081','02014','0506','003','8','10'),(349,'349','2021020401','D081','02014','0501','004','1','3'),(350,'350','2021020402','D081','02014','0501','004','1','3'),(351,'351','2021010202','D082','02013','0806','002','1','3'),(352,'352','2021010101','D082','02010','0707','002','4','6'),(353,'353','2021010102','D082','02010','0707','002','4','6'),(354,'354','2021010101','D082','02030','0720','002','7','12'),(355,'355','2021010102','D082','02030','0508','005','1','6'),(356,'356','2021020106','D083','02010','0617','001','7','9'),(357,'357','2021020302','D083','02041','0508','002','7','12'),(358,'358','2021020106','D083','02030','0719','003','7','12'),(359,'359','2021020301','D083','02041','0708','004','7','12'),(360,'360','2021020205','D084','02032','0708','001','1','3'),(361,'361','2021010203','D084','02033','0620','003','1','6'),(362,'362','2021020204','D084','02020','0505','004','1','3'),(363,'363','2021020205','D084','02020','0505','004','1','3'),(364,'364','2021020205','D084','02033','0620','004','7','12'),(365,'365','2021010202','D085','02006','0504','001','1','3'),(366,'366','2021010204','D085','02006','0502','001','7','9'),(367,'367','2021010205','D085','02006','0504','002','7','9'),(368,'368','2021010203','D085','02006','0806','002','10','12'),(369,'369','2021010206','D085','02006','0806','003','1','3'),(370,'370','2021010201','D085','02006','0502','004','2','4');
/*!40000 ALTER TABLE `jadwal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jp`
--

DROP TABLE IF EXISTS `jp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jp` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jp`
--

LOCK TABLES `jp` WRITE;
/*!40000 ALTER TABLE `jp` DISABLE KEYS */;
INSERT INTO `jp` VALUES (1,'1','07:00:00','07:50:00'),(2,'2','07:50:00','08:40:00'),(3,'3','08:40:00','09:30:00'),(4,'4','09:40:00','10:30:00'),(5,'5','10:30:00','11:20:00'),(6,'6','11:20:00','12:10:00'),(7,'7','12:50:00','13:40:00'),(8,'8','13:40:00','14:30:00'),(9,'9','14:30:00','15:20:00'),(10,'10','15:30:00','15:30:00'),(11,'11','16:20:00','17:10:00'),(12,'12','17:10:00','18:00:00');
/*!40000 ALTER TABLE `jp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kelas`
--

DROP TABLE IF EXISTS `kelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_kelas` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kelas`
--

LOCK TABLES `kelas` WRITE;
/*!40000 ALTER TABLE `kelas` DISABLE KEYS */;
INSERT INTO `kelas` VALUES (1,'2021010101','001','MI-1A'),(2,'2021010102','001','MI-1B'),(3,'2021010103','001','MI-1C'),(4,'2021010104','001','MI-1D'),(5,'2021010105','001','MI-1E'),(6,'2021010106','001','MI-1F'),(7,'2021010107','001','MI-1H'),(8,'2021010201','001','MI-2A'),(9,'2021010202','001','MI-2B'),(10,'2021010203','001','MI-2C'),(11,'2021010204','001','MI-2D'),(12,'2021010205','001','MI-2E'),(13,'2021010206','001','MI-2F'),(14,'2021010301','001','MI-3A'),(15,'2021010302','001','MI-3B'),(16,'2021010303','001','MI-3C'),(17,'2021010304','001','MI-3D'),(18,'2021010305','001','MI-3E'),(19,'2021010306','001','MI-3F'),(20,'2021020101','002','TI-1A'),(21,'2021020102','002','TI-1B'),(22,'2021020103','002','TI-1C'),(23,'2021020104','002','TI-1D'),(24,'2021020105','002','TI-1E'),(25,'2021020106','002','TI-1F'),(26,'2021020107','002','TI-1G'),(27,'2021020108','002','TI-1H'),(28,'2021020109','002','TI-1I'),(29,'2021020201','002','TI-2A'),(30,'2021020202','002','TI-2B'),(31,'2021020203','002','TI-2C'),(32,'2021020204','002','TI-2D'),(33,'2021020205','002','TI-2E'),(34,'2021020206','002','TI-2F'),(35,'2021020207','002','TI-2G'),(36,'2021020208','002','TI-2H'),(37,'2021020209','002','TI-2I'),(38,'2021020301','002','TI-3A'),(39,'2021020302','002','TI-3B'),(40,'2021020303','002','TI-3C'),(41,'2021020304','002','TI-3D'),(42,'2021020305','002','TI-3E'),(43,'2021020306','002','TI-3F'),(44,'2021020307','002','TI-3G'),(45,'2021020308','002','TI-3H'),(46,'2021020401','002','TI-4A'),(47,'2021020402','002','TI-4B'),(48,'2021020403','002','TI-4C'),(49,'2021020404','002','TI-4D'),(50,'2021020405','002','TI-4E'),(51,'2021020406','002','TI-4F'),(52,'2021020407','002','TI-4G');
/*!40000 ALTER TABLE `kelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mk`
--

DROP TABLE IF EXISTS `mk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_mk` varchar(255) NOT NULL,
  `nama_mk` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mk`
--

LOCK TABLES `mk` WRITE;
/*!40000 ALTER TABLE `mk` DISABLE KEYS */;
INSERT INTO `mk` VALUES (1,'02001','Agama'),(2,'02002','Alajabar Linier'),(3,'02003','Algoritma dan Struktur Data'),(4,'02004','Aljabar Linier'),(5,'02005','Analisis Dan Desan Berorientasi Objek'),(6,'02006','Bahasa Indonesia'),(7,'02007','Bahasa Inggris'),(8,'02008','Bahasa Inggris 2'),(9,'02009','Bahasa Inggris Persiapan Kerja'),(10,'02010','Basis Data'),(11,'02011','Desain Pemrograman Web'),(12,'02012','Digital Entrepreneurship'),(13,'02013','E-Business'),(14,'02014','Etika Profesi Bidang TI'),(15,'02015','Internet Of Things'),(16,'02016','Kewarganegaraan'),(17,'02017','Komputasi Multimedia'),(18,'02018','Machine Learning'),(19,'02019','Manajemen Jaringan Komputer'),(20,'02020','Manajemen Proyek'),(21,'02021','Manajemen Proyek '),(22,'02022','Pemrograman Berbasis Framework'),(23,'02023','Pemrograman Mobile'),(24,'02024','Pemrograman Multimedia'),(25,'02025','Pemrograman Web Lanjut'),(26,'02026','Pengembangan Perangkat Lunak Berbasis Object'),(27,'02027','Pengolahan Citra dan Visi Komputer'),(28,'02028','Penulisan Ilmiah'),(29,'02029','Praktikum Algoritma dan Struktur Data'),(30,'02030','Praktikum Basis Data'),(31,'02031','Praktikum Struktur Data'),(32,'02032','Proyek 1_P1'),(33,'02033','Proyek 1_P2'),(34,'02034','Proyek 2_P2'),(35,'02035','Rekayasa Perangkat Lunak'),(36,'02036','Sistem Informasi'),(37,'02037','Sistem Manajemen Basis Data'),(38,'02038','Sistem Operasi'),(39,'02039','Sistem Pendukung Keputusan'),(40,'02040','Struktur Data'),(41,'02041','Teknologi Data');
/*!40000 ALTER TABLE `mk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodi`
--

DROP TABLE IF EXISTS `prodi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_prodi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodi`
--

LOCK TABLES `prodi` WRITE;
/*!40000 ALTER TABLE `prodi` DISABLE KEYS */;
INSERT INTO `prodi` VALUES (1,'001','D3 Manajemen Informatika'),(2,'002','D4 Teknik Informatika');
/*!40000 ALTER TABLE `prodi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruang`
--

DROP TABLE IF EXISTS `ruang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_ruang` varchar(255) NOT NULL,
  `nama_ruang` varchar(255) NOT NULL,
  `deskripsi_ruang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruang`
--

LOCK TABLES `ruang` WRITE;
/*!40000 ALTER TABLE `ruang` DISABLE KEYS */;
INSERT INTO `ruang` VALUES (1,'0501','RT01','Ruang Teori 1'),(2,'0502','RT02','Ruang Teori 2'),(3,'0503','RT03','Ruang Teori 3'),(4,'0504','RT04','Ruang Teori 4'),(5,'0505','RT05','Ruang Teori 5'),(6,'0506','RT06','Ruang Teori 6'),(7,'0507','RT07','Ruang Teori 7'),(8,'0508','LPY1','Laboratorium Proyek 1'),(9,'0615','LSI1','Laboratorium Sistem Informasi 1'),(10,'0617','LSI2','Laboratorium Sistem Informasi 2'),(11,'0618','LSI3','Laboratorium Sistem Informasi 3'),(12,'0619','LPY2','Laboratorium Proyek 2'),(13,'0620','LPY3','Laboratorium Proyek 3'),(14,'0701','LPR1','Laboratorium Pemrograman 1'),(15,'0702','LPR2','Laboratorium Pemrograman 2'),(16,'0703','LPR3','Laboratorium Pemrograman 3'),(17,'0704','LPR4','Laboratorium Pemrograman 4'),(18,'0705','LPR5','Laboratorium Pemrograman 5'),(19,'0706','LPR6','Laboratorium Pemrograman 6'),(20,'0707','LKJ1','Laboratorium Keamanan Jaringan 1'),(21,'0708','LPR7','Laboratorium Pemrograman 7'),(22,'0713','LKJ2','Laboratorium Keamanan Jaringan 2'),(23,'0714','LPR8','Laboratorium Pemrograman 8'),(24,'0715','LKJ3','Laboratorium Keamanan Jaringan 3'),(25,'0716','LIG1','Laboratorium Visi Komputer 1'),(26,'0717','RT08','Ruang Teori 8'),(27,'0718','LIG2','Laboratorium Visi Komputer 2'),(28,'0719','LPY4','Laboratorium Proyek 4'),(29,'0720','LAI1','Laboratorium Kecerdasan Buatan 1'),(30,'0801','L DTS','Laboratorium DTS'),(31,'0805','RT09','Ruang Teori 9'),(32,'0806','RT10','Ruang Teori 10'),(33,'1001','RT11','Ruang Teori 11'),(34,'1002','ROL1','Ruang Online 1'),(35,'1003','ROL2','Ruang Online 2'),(36,'1004','ROL3','Ruang Online 3');
/*!40000 ALTER TABLE `ruang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_64_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_64_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_64_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_64_21_student`;

--
-- Table structure for table `dosen`
--

DROP TABLE IF EXISTS `dosen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dosen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_dosen` varchar(255) NOT NULL,
  `nama_dosen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dosen`
--

LOCK TABLES `dosen` WRITE;
/*!40000 ALTER TABLE `dosen` DISABLE KEYS */;
INSERT INTO `dosen` VALUES (1,'D001','Abdul Chalim, SAg., MPd.I'),(2,'D002','Ade Ismail'),(3,'D003','Agung Nugroho Pramudhita ST., MT.'),(4,'D004','Ahmadi Yuli Ananta ST., MM.'),(5,'D005','Ane Fany Novitasari, SH.MKn.'),(6,'D006','Annisa Puspa Kirana MKom.'),(7,'D007','Annisa Taufika Firdausi ST., MT.'),(8,'D008','Anugrah Nur Rahmanto SSn., MDs.'),(9,'D009','Ariadi Retno Ririd SKom., MKom.'),(10,'D010','Arie Rachmad Syulistyo SKom., MKom.'),(11,'D011','Arief Prasetyo SKom., MKom.'),(12,'D012','Arwin Sumari ST., MT., DR.'),(13,'D013','Atiqah Nurul Asri SPd., MPd.'),(14,'D014','Bagas Satya Dian Nugraha, ST., MT.'),(15,'D015','Banni Satria Andoko, S. Kom., M.MSI'),(16,'D016','Budi Harijanto ST., MMKom.'),(17,'D017','Cahya Rahmad ST., MKom. DR.Eng'),(18,'D018','Candra Bella Vista SKom., MT.'),(19,'D019','Candrasena Setiadi ST., MMT.'),(20,'D020','Deasy Sandhya Elya Ikawati SSi., MSi.'),(21,'D021','Deddy Kusbianto PA Ir. MMKom.'),(22,'D022','Dhebys Suryani SKom. MT.'),(23,'D023','Dian Hanifudin Subhi SKom., MT.'),(24,'D024','Dika Rizky Yunianto SKom., MKom.'),(25,'D025','Dimas Wahyu Wibowo ST., MT.'),(26,'D026','Dodit Supriyanto SKom., MT.'),(27,'D027','Dwi Puspitasari SKom., MKom.'),(28,'D028','Eka Larasati Amalia, SST., MT.'),(29,'D029','Ekojono, ST., M.Kom.'),(30,'D030','Elok Nur Hamdana, ST., MT'),(31,'D031','Erfan Rohadi, ST., MEng., PhD.'),(32,'D032','Faiz Ushbah Mubarok, SPd., MPd.'),(33,'D033','Farid Angga Pribadi, SKom.,MKom.'),(34,'D034','Farida Ulfa, SPd., MPd.'),(35,'D035','Gunawan Budi Prasetyo, ST., MMT., Ph.D.'),(36,'D036','Habibie Ed Dien, MT.'),(37,'D037','Hairus'),(38,'D038','Hendra Pradibta, SE., M.Sc.'),(39,'D039','Ika Kusumaning Putri, MT.'),(40,'D040','Imam Fahrur Rozi, ST., MT.'),(41,'D041','Indra Dharma Wijaya, ST., MMT.'),(42,'D042','Irsyad Arif Mashudi, M.Kom'),(43,'D043','Kadek Suarjuna Batubulan, SKom, MT.'),(44,'D044','Luqman Affandi, SKom., MMSI.'),(45,'D045','M. Hasyim Ratsanjani'),(46,'D046','Mamluatul Haniah'),(47,'D047','Meyti Eka Apriyani ST., MT.'),(48,'D048','Milyun Nima Shoumi'),(49,'D049','Moch. Zawaruddin Abdullah, S.ST., M.Kom'),(50,'D050','Moh. Amin'),(51,'D051','Muhammad Afif Hendrawan, S.Kom.'),(52,'D052','Muhammad Shulhan Khairy, SKom., MKom.'),(53,'D053','Muhammad Unggul Pamenang, SSt., MT.'),(54,'D054','Mungki Astiningrum, ST., MKom.'),(55,'D055','Mustika Mentari, SKom., MKom.'),(56,'D056','Noprianto'),(57,'D057','Odhitya Desta Triswidrananta, SPd., MPd.'),(58,'D058','Pramana Yoga Saputra, SKom., MMT.'),(59,'D059','Putra Prima A., ST., MKom.'),(60,'D060','Rakhmat Arianto SST., MKom.'),(61,'D061','Rawansyah., Drs., MPd.'),(62,'D062','Retno Damayanti, SPd.'),(63,'D063','Ridwan Rismanto, SST., MKom.'),(64,'D064','Rizki Putri Ramadhani, S.S., M.Pd.'),(65,'D065','Rizky Ardiansyah, SKom., MT.'),(66,'D066','Robby Anggriawan SE., ME.'),(67,'D067','Rokhimatul Wakhidah SPd. MT.'),(68,'D068','Rosa Andrie Asmara, ST., MT., Dr. Eng.'),(69,'D069','Rudy Ariyanto, ST., MCs.'),(70,'D070','Satrio Binusa S, SS, M.Pd'),(71,'D071','Septian Enggar Sukmana, SPd., MT.'),(72,'D072','Shohib Muslim'),(73,'D073','Siti Romlah, Dra., M.M.'),(74,'D074','Sofyan Noor Arief, S.ST., M.Kom.'),(75,'D075','Ulla Delfiana Rosiani, ST., MT.'),(76,'D076','Usman Nurhasan, S.Kom., MT.'),(77,'D077','Very Sugiarto, SPd., MKom.'),(78,'D078','Vipkas Al Hadid Firdaus, ST.,MT.'),(79,'D079','Vivi Nur Wijayaningrum, S.Kom, M.Kom'),(80,'D080','Vivin Ayu Lestari, SPd.'),(81,'D081','Widaningsih Condrowardhani, SH., MH.'),(82,'D082','Wilda Imama Sabilla, S.Kom., M.Kom.'),(83,'D083','Yoppy Yunhasnawa, SST., MSc.'),(84,'D084','Yuri Ariyanto, SKom., MKom.'),(85,'D085','Zulmy Faqihuddin Putera, S.Pd., M.Pd');
/*!40000 ALTER TABLE `dosen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hari`
--

DROP TABLE IF EXISTS `hari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_hari` varchar(255) NOT NULL,
  `nama_hari` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hari`
--

LOCK TABLES `hari` WRITE;
/*!40000 ALTER TABLE `hari` DISABLE KEYS */;
INSERT INTO `hari` VALUES (1,'001','Senin'),(2,'002','Selasa'),(3,'003','Rabu'),(4,'004','Kamis'),(5,'005','Jumat'),(6,'006','Sabtu'),(7,'007','Minggu');
/*!40000 ALTER TABLE `hari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jadwal`
--

DROP TABLE IF EXISTS `jadwal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jadwal` varchar(255) NOT NULL,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_dosen` varchar(255) NOT NULL,
  `kode_mk` varchar(255) NOT NULL,
  `kode_ruang` varchar(255) NOT NULL,
  `kode_hari` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=371 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jadwal`
--

LOCK TABLES `jadwal` WRITE;
/*!40000 ALTER TABLE `jadwal` DISABLE KEYS */;
INSERT INTO `jadwal` VALUES (1,'1','2021020101','D001','02001','0504','001','7','9'),(2,'2','2021010103','D001','02001','0506','002','9','11'),(3,'3','2021010105','D001','02001','0806','003','10','12'),(4,'4','2021010102','D001','02001','0506','004','1','3'),(5,'5','2021010106','D001','02001','0806','004','4','6'),(6,'6','2021010101','D001','02001','0506','004','7','9'),(7,'7','2021010104','D001','02001','0506','005','10','12'),(8,'8','2021010206','D002','02037','0702','001','7','12'),(9,'9','2021020202','D002','02036','0708','003','2','4'),(10,'10','2021010205','D002','02037','0713','004','1','6'),(11,'11','2021020209','D002','02025','0719','004','7','12'),(12,'12','2021020301','D003','02012','0508','002','1','4'),(13,'13','2021020302','D003','02012','0508','002','1','4'),(14,'14','2021010201','D003','02017','0719','003','2','5'),(15,'15','2021010202','D003','02017','0719','003','2','5'),(16,'16','2021010203','D003','02017','0507','005','2','5'),(17,'17','2021010106','D004','02028','0704','001','1','3'),(18,'18','2021020203','D004','02032','0507','001','10','12'),(19,'19','2021010201','D004','02034','0617','002','7','12'),(20,'20','2021020203','D004','02032','0708','004','1','6'),(21,'21','2021020104','D005','02016','0717','001','1','3'),(22,'22','2021020108','D005','02016','0504','001','4','6'),(23,'23','2021020106','D005','02016','0805','001','10','12'),(24,'24','2021020105','D005','02016','0502','002','1','3'),(25,'25','2021020102','D005','02016','0806','002','4','6'),(26,'26','2021020103','D005','02016','0502','003','4','6'),(27,'27','2021020107','D005','02016','0806','004','1','3'),(28,'28','2021020109','D005','02016','0502','005','1','3'),(29,'29','2021010105','D006','02010','0701','002','1','3'),(30,'30','2021010105','D006','02030','0618','004','1','6'),(31,'31','2021010203','D006','02037','0705','004','7','12'),(32,'32','2021010204','D006','02037','0619','005','7','12'),(33,'33','2021010103','D007','02011','0705','002','2','6'),(34,'34','2021020101','D007','02038','0503','003','3','5'),(35,'35','2021020102','D007','02038','0503','003','3','5'),(36,'36','2021010102','D007','02011','0615','004','8','12'),(37,'37','2021010101','D007','02011','0703','005','2','6'),(38,'38','2021010306','D008','02012','0619','001','2','5'),(39,'39','2021020203','D008','02036','0716','003','2','4'),(40,'40','2021020104','D008','02038','0505','004','4','6'),(41,'41','2021020105','D008','02038','0505','004','4','6'),(42,'42','2021010304','D008','02012','0507','005','9','12'),(43,'43','2021010305','D008','02012','0507','005','9','12'),(44,'44','2021020103','D009','02035','0505','002','7','10'),(45,'45','2021020104','D009','02035','0505','002','7','10'),(46,'46','2021020204','D009','02005','0704','003','7','12'),(47,'47','2021020203','D009','02005','0705','005','1','6'),(48,'48','2021010103','D010','02026','0806','001','3','4'),(49,'49','2021010202','D010','02023','0704','001','8','11'),(50,'50','2021010202','D010','02023','0713','002','7','10'),(51,'51','2021010201','D010','02023','0705','003','7','10'),(52,'52','2021010201','D010','02023','0716','005','8','11'),(53,'53','2021010201','D011','02019','0718','002','1','5'),(54,'54','2021010203','D011','02019','0706','004','1','5'),(55,'55','2021010204','D011','02019','0716','004','8','12'),(56,'56','2021010202','D011','02019','0706','005','1','5'),(57,'57','2021020204','D012','02018','0702','001','1','5'),(58,'58','2021020203','D012','02018','0619','002','1','5'),(59,'59','2021010204','D012','02020','0704','002','9','11'),(60,'60','2021010302','D013','02008','0805','002','4','6'),(61,'61','2021020109','D013','02007','0805','002','7','9'),(62,'62','2021010301','D013','02009','0717','003','4','6'),(63,'63','2021020101','D013','02008','0717','003','7','9'),(64,'64','2021020401','D013','02009','0717','004','4','6'),(65,'65','2021020107','D013','02008','0717','005','2','4'),(66,'66','2021020102','D013','02008','0506','005','7','9'),(67,'67','2021020301','D014','02017','0720','004','1','4'),(68,'68','2021020302','D014','02017','0720','004','1','4'),(69,'69','2021020303','D014','02017','0714','005','2','5'),(70,'70','2021020308','D014','02017','0714','005','7','10'),(71,'71','2021020206','D015','02032','0720','002','3','5'),(72,'72','2021020206','D015','02005','0619','002','7','12'),(73,'73','2021020205','D015','02005','0713','003','7','12'),(74,'74','2021020206','D015','02033','0701','004','7','12'),(75,'75','2021020103','D016','02038','0506','001','1','3'),(76,'76','2021020204','D016','02032','0615','001','7','9'),(77,'77','2021010103','D016','02038','0501','004','4','6'),(78,'78','2021010104','D016','02038','0501','004','4','6'),(79,'79','2021020204','D016','02033','0719','005','7','12'),(80,'80','2021020106','D017','02004','0805','004','3','6'),(81,'81','2021020302','D017','02027','0702','004','7','12'),(82,'82','2021020301','D017','02027','0704','005','1','6'),(83,'83','2021020109','D017','02002','0717','005','7','10'),(84,'84','2021020302','D018','02039','0701','001','1','6'),(85,'85','2021010203','D018','02013','0501','001','10','12'),(86,'86','2021010204','D018','02013','0501','001','10','12'),(87,'87','2021020301','D019','02022','0620','001','7','12'),(88,'88','2021020302','D019','02022','0702','005','1','6'),(89,'89','2021020108','D020','02004','0502','004','9','12'),(90,'90','2021020107','D020','02004','0502','005','7','10'),(91,'91','2021020207','D021','02005','0615','001','1','6'),(92,'92','2021020207','D021','02032','0707','002','1','3'),(93,'93','2021020207','D021','02033','0718','003','1','6'),(94,'94','2021010303','D021','02012','0703','003','8','11'),(95,'95','2021010204','D022','02033','0704','003','1','6'),(96,'96','2021010205','D022','02033','0706','003','7','12'),(97,'97','2021020306','D022','02012','0504','005','1','4'),(98,'98','2021010205','D023','02023','0508','001','1','4'),(99,'99','2021020206','D023','02025','0706','003','1','6'),(100,'100','2021010206','D023','02023','0618','003','8','11'),(101,'101','2021010205','D023','02023','0701','005','1','4'),(102,'102','2021010206','D023','02023','0705','005','7','10'),(103,'103','2021010201','D024','02037','0713','001','1','6'),(104,'104','2021010103','D024','02010','0615','001','10','12'),(105,'105','2021010103','D024','02010','0619','003','1','6'),(106,'106','2021010202','D024','02037','0701','005','7','12'),(107,'107','2021020305','D025','02024','0615','001','1','6'),(108,'108','2021020306','D025','02022','0713','002','1','6'),(109,'109','2021020304','D025','02017','0620','005','1','4'),(110,'110','2021020305','D025','02017','0620','005','1','4'),(111,'111','2021020305','D026','02015','0508','003','7','12'),(112,'112','2021020306','D026','02041','0701','004','1','6'),(113,'113','2021020103','D027','02010','0501','002','4','6'),(114,'114','2021020104','D027','02010','0501','002','4','6'),(115,'115','2021010106','D027','02035','0707','003','1','4'),(116,'116','2021020103','D027','02010','0615','004','7','12'),(117,'117','2021020104','D027','02010','0617','005','1','6'),(118,'118','2021010104','D028','02026','0504','002','1','4'),(119,'119','2021020107','D028','02035','0503','002','8','11'),(120,'120','2021020108','D028','02035','0503','002','8','11'),(121,'121','2021010105','D028','02026','0505','003','3','6'),(122,'122','2021010106','D028','02026','0505','003','3','6'),(123,'123','2021020209','D029','02032','0503','001','7','9'),(124,'124','2021020204','D029','02036','0703','003','1','3'),(125,'125','2021020205','D029','02036','0703','003','1','3'),(126,'126','2021020209','D029','02033','0508','004','1','6'),(127,'127','2021020206','D029','02036','0501','005','1','3'),(128,'128','2021020207','D029','02036','0501','005','1','3'),(129,'129','2021020109','D030','02010','0716','001','4','6'),(130,'130','2021020108','D030','02010','0715','002','2','4'),(131,'131','2021020201','D030','02036','0502','003','1','3'),(132,'132','2021020109','D030','02030','0620','004','1','6'),(133,'133','2021020108','D030','02030','0615','005','1','6'),(134,'134','2021020202','D031','02032','0507','001','7','9'),(135,'135','2021010203','D031','02020','0718','002','7','9'),(136,'136','2021010201','D031','02020','0501','004','7','9'),(137,'137','2021010202','D031','02020','0501','004','7','9'),(138,'138','2021020202','D031','02033','0707','005','7','12'),(139,'139','2021020104','D032','02008','0806','001','7','9'),(140,'140','2021020103','D032','02008','0717','002','1','3'),(141,'141','2021020403','D032','02009','0502','002','10','12'),(142,'142','2021010304','D032','02009','0506','003','4','6'),(143,'143','2021020402','D032','02009','0504','004','4','6'),(144,'144','2021020105','D032','02009','0717','004','8','10'),(145,'145','2021010303','D032','02009','0806','005','7','9'),(146,'146','2021020203','D033','02037','0716','003','7','12'),(147,'147','2021020108','D034','02008','0502','001','1','3'),(148,'148','2021020106','D034','02008','0502','002','7','9'),(149,'149','2021010305','D034','02009','0805','003','4','6'),(150,'150','2021010306','D034','02009','0506','004','4','6'),(151,'151','2021020208','D035','02018','0618','002','2','6'),(152,'152','2021020307','D035','02041','0716','002','7','12'),(153,'153','2021020308','D035','02041','0716','005','1','6'),(154,'154','2021020207','D035','02018','0615','005','8','12'),(155,'155','2021020209','D036','02036','0704','001','4','6'),(156,'156','2021020304','D036','02022','0508','001','7','12'),(157,'157','2021020303','D036','02022','0704','002','1','6'),(158,'158','2021020202','D036','02025','0706','002','7','12'),(159,'159','2021010102','D037','02016','0506','001','7','9'),(160,'160','2021010107','D037','02016','0806','002','7','9'),(161,'161','2021010104','D037','02016','0504','002','10','12'),(162,'162','2021020101','D037','02016','0717','003','10','12'),(163,'163','2021010106','D037','02016','0717','004','1','3'),(164,'164','2021010103','D037','02016','0504','005','7','9'),(165,'165','2021010101','D037','02016','0806','005','10','12'),(166,'166','2021020307','D038','02012','0714','002','2','5'),(167,'167','2021020209','D038','02020','0620','003','10','12'),(168,'168','2021010301','D038','02012','0503','005','1','4'),(169,'169','2021010302','D038','02012','0503','005','1','4'),(170,'170','2021010101','D039','02040','0503','001','1','3'),(171,'171','2021010102','D039','02040','0503','001','1','3'),(172,'172','2021020209','D039','02037','0703','002','1','6'),(173,'173','2021010102','D039','02040','0617','003','8','12'),(174,'174','2021010101','D039','02040','0617','004','2','6'),(175,'175','2021020109','D040','02003','0713','001','9','11'),(176,'176','2021010202','D040','02033','0619','003','7','12'),(177,'177','2021020109','D040','02003','0718','004','7','12'),(178,'178','2021010101','D041','02038','0507','001','4','6'),(179,'179','2021010102','D041','02038','0507','001','4','6'),(180,'180','2021010101','D041','02028','0501','002','1','3'),(181,'181','2021010102','D041','02028','0501','002','1','3'),(182,'182','2021020205','D042','02037','0703','001','7','12'),(183,'183','2021020204','D042','02037','0715','004','7','12'),(184,'184','2021020101','D042','02035','0505','005','2','5'),(185,'185','2021020102','D042','02035','0505','005','2','5'),(186,'186','2021010204','D043','02017','0705','001','2','5'),(187,'187','2021010205','D043','02017','0505','002','2','5'),(188,'188','2021010204','D043','02017','0505','002','2','5'),(189,'189','2021020208','D043','02036','0507','004','7','9'),(190,'190','2021020205','D043','02025','0720','005','1','6'),(191,'191','2021020201','D044','02032','0706','001','3','5'),(192,'192','2021010205','D044','02021','0618','001','10','12'),(193,'193','2021010206','D044','02021','0618','001','10','12'),(194,'194','2021020206','D044','02020','0707','004','3','5'),(195,'195','2021020207','D044','02020','0707','004','3','5'),(196,'196','2021020201','D044','02033','0713','004','7','12'),(197,'197','2021020208','D045','02037','0718','001','1','6'),(198,'198','2021020107','D045','02010','0702','001','9','11'),(199,'199','2021020107','D045','02030','0615','003','1','6'),(200,'200','2021020207','D045','02037','0619','004','7','12'),(201,'201','2021020103','D046','02003','0501','001','4','6'),(202,'202','2021020101','D046','02010','0617','002','3','5'),(203,'203','2021020101','D046','02030','0704','004','1','6'),(204,'204','2021020209','D046','02018','0707','005','1','5'),(205,'205','2021020103','D046','02003','0702','005','7','12'),(206,'206','2021020308','D047','02022','0620','001','1','6'),(207,'207','2021020203','D047','02020','0805','001','7','9'),(208,'208','2021020201','D047','02020','0620','002','1','3'),(209,'209','2021020202','D047','02020','0620','002','1','3'),(210,'210','2021020307','D047','02022','0715','003','1','6'),(211,'211','2021020305','D048','02027','0716','002','1','6'),(212,'212','2021020201','D048','02025','0503','004','1','6'),(213,'213','2021020208','D048','02025','0713','005','1','6'),(214,'214','2021020306','D048','02027','0620','005','7','12'),(215,'215','2021010106','D049','02010','0716','001','7','9'),(216,'216','2021020204','D049','02025','0719','002','1','6'),(217,'217','2021020203','D049','02025','0703','002','7','12'),(218,'218','2021010106','D049','02030','0706','004','7','12'),(219,'219','2021020106','D050','02001','0717','001','4','6'),(220,'220','2021020103','D050','02001','0506','001','7','9'),(221,'221','2021020105','D050','02001','0504','001','10','12'),(222,'222','2021020109','D050','02001','0805','003','1','3'),(223,'223','2021020102','D050','02001','0504','003','8','10'),(224,'224','2021020104','D050','02001','0805','004','7','9'),(225,'225','2021020107','D050','02001','0805','004','10','12'),(226,'226','2021020108','D050','02001','0805','005','7','9'),(227,'227','2021020206','D051','02037','0715','001','1','6'),(228,'228','2021020208','D051','02020','0508','003','2','4'),(229,'229','2021020306','D051','02039','0701','003','7','12'),(230,'230','2021020305','D051','02039','0619','004','1','6'),(231,'231','2021010104','D052','02010','0701','001','4','6'),(232,'232','2021020201','D052','02005','0708','002','7','12'),(233,'233','2021020202','D052','02005','0720','003','7','12'),(234,'234','2021010104','D052','02030','0618','005','1','6'),(235,'235','2021020105','D053','02010','0708','001','7','9'),(236,'236','2021020105','D053','02030','0704','005','7','12'),(237,'237','2021020101','D054','02003','0703','001','2','4'),(238,'238','2021020102','D054','02003','0703','001','2','4'),(239,'239','2021010205','D054','02013','0501','001','7','9'),(240,'240','2021020102','D054','02029','0620','002','7','12'),(241,'241','2021020101','D054','02029','0720','004','7','12'),(242,'242','2021020106','D055','02003','0716','001','1','3'),(243,'243','2021020304','D055','02027','0718','004','1','6'),(244,'244','2021020106','D055','02029','0618','004','7','12'),(245,'245','2021020303','D055','02027','0718','005','7','12'),(246,'246','2021020107','D056','02003','0708','001','4','6'),(247,'247','2021020303','D056','02015','0715','001','7','12'),(248,'248','2021020304','D056','02015','0713','003','1','6'),(249,'249','2021020107','D056','02029','0702','003','7','12'),(250,'250','2021020201','D057','02037','0720','001','7','12'),(251,'251','2021020305','D057','02041','0618','005','7','12'),(252,'252','2021020208','D058','02032','0502','001','10','12'),(253,'253','2021020303','D058','02041','0720','003','1','6'),(254,'254','2021020208','D058','02033','0716','004','1','6'),(255,'255','2021020304','D058','02041','0615','005','7','12'),(256,'256','2021010203','D059','02023','0719','001','1','4'),(257,'257','2021010204','D059','02023','0702','002','2','5'),(258,'258','2021020207','D059','02025','0701','002','7','12'),(259,'259','2021010204','D059','02023','0718','005','2','5'),(260,'260','2021010203','D059','02023','0715','005','8','11'),(261,'261','2021020308','D060','02039','0619','001','7','12'),(262,'262','2021020201','D060','02018','0615','003','7','11'),(263,'263','2021020202','D060','02018','0708','005','1','5'),(264,'264','2021020307','D060','02039','0708','005','7','12'),(265,'265','2021020101','D061','02004','0717','002','9','12'),(266,'266','2021020104','D061','02004','0504','003','3','6'),(267,'267','2021020105','D061','02004','0805','003','7','10'),(268,'268','2021020102','D061','02004','0806','004','8','11'),(269,'269','2021020103','D061','02004','0806','005','2','5'),(270,'270','2021010106','D062','02011','0615','002','7','11'),(271,'271','2021010104','D062','02011','0703','004','8','12'),(272,'272','2021010105','D062','02011','0715','005','1','5'),(273,'273','2021010105','D062','02038','0501','005','10','12'),(274,'274','2021010106','D062','02038','0501','005','10','12'),(275,'275','2021020209','D063','02005','0719','002','7','12'),(276,'276','2021010101','D063','02026','0507','003','1','4'),(277,'277','2021010102','D063','02026','0507','003','1','4'),(278,'278','2021020208','D063','02005','0708','003','7','12'),(279,'279','2021010301','D064','02006','0805','001','1','3'),(280,'280','2021010303','D064','02006','0506','001','4','6'),(281,'281','2021010302','D064','02006','0805','002','1','3'),(282,'282','2021010305','D064','02006','0506','003','1','3'),(283,'283','2021010306','D064','02006','0504','004','1','3'),(284,'284','2021010304','D064','02006','0805','005','2','4'),(285,'285','2021020102','D065','02010','0708','002','1','3'),(286,'286','2021020102','D065','02030','0615','004','1','6'),(287,'287','2021010206','D066','02013','0503','001','4','6'),(288,'288','2021020104','D067','02003','0805','001','4','6'),(289,'289','2021020105','D067','02003','0805','001','4','6'),(290,'290','2021020105','D067','02029','0705','003','1','6'),(291,'291','2021010201','D067','02013','0506','004','10','12'),(292,'292','2021020104','D067','02029','0703','005','7','12'),(293,'293','2021020308','D068','02027','0714','002','7','12'),(294,'294','2021020307','D068','02027','0703','004','1','6'),(295,'295','2021020303','D069','02039','0618','002','7','12'),(296,'296','2021010206','D069','02033','0702','004','1','6'),(297,'297','2021020406','D070','02009','0502','001','4','6'),(298,'298','2021020405','D070','02009','0806','001','10','12'),(299,'299','2021020404','D070','02009','0717','002','4','6'),(300,'300','2021020407','D070','02009','0806','003','4','6'),(301,'301','2021020306','D071','02017','0505','001','1','4'),(302,'302','2021020307','D071','02017','0505','001','1','4'),(303,'303','2021020108','D071','02003','0714','001','7','9'),(304,'304','2021020308','D071','02017','0501','003','1','4'),(305,'305','2021020108','D071','02029','0719','004','1','6'),(306,'306','2021010303','D072','02014','0720','001','1','3'),(307,'307','2021010304','D072','02014','0720','001','1','3'),(308,'308','2021010305','D072','02014','0714','001','10','12'),(309,'309','2021010306','D072','02014','0714','001','10','12'),(310,'310','2021010301','D072','02014','0501','005','7','9'),(311,'311','2021010302','D072','02014','0501','005','7','9'),(312,'312','2021020305','D073','02012','0714','003','1','4'),(313,'313','2021020106','D074','02038','0507','002','3','5'),(314,'314','2021020107','D074','02038','0507','002','3','5'),(315,'315','2021020109','D074','02038','0805','002','10','12'),(316,'316','2021020108','D074','02038','0806','003','7','9'),(317,'317','2021010206','D074','02019','0719','005','1','5'),(318,'318','2021010205','D074','02019','0713','005','7','11'),(319,'319','2021010105','D075','02028','0501','001','1','3'),(320,'320','2021020304','D075','02039','0706','002','1','6'),(321,'321','2021020301','D075','02039','0618','003','1','6'),(322,'322','2021010103','D075','02028','0503','003','8','10'),(323,'323','2021010104','D075','02028','0503','003','8','10'),(324,'324','2021020303','D076','02012','0618','001','1','4'),(325,'325','2021020304','D076','02012','0618','001','1','4'),(326,'326','2021020307','D076','02015','0701','001','7','12'),(327,'327','2021020308','D076','02015','0718','003','7','12'),(328,'328','2021020306','D077','02015','0705','001','7','12'),(329,'329','2021020202','D077','02037','0715','004','1','6'),(330,'330','2021020205','D078','02018','0615','002','1','5'),(331,'331','2021020301','D078','02015','0715','002','7','12'),(332,'332','2021020302','D078','02015','0617','003','1','6'),(333,'333','2021020206','D078','02018','0706','005','8','12'),(334,'334','2021010105','D079','02040','0503','002','4','6'),(335,'335','2021010106','D079','02040','0503','002','4','6'),(336,'336','2021010105','D079','02031','0705','002','8','12'),(337,'337','2021010106','D079','02031','0715','003','8','12'),(338,'338','2021020105','D079','02035','0506','005','2','5'),(339,'339','2021010103','D080','02040','0505','001','7','9'),(340,'340','2021010104','D080','02040','0505','001','7','9'),(341,'341','2021020109','D080','02035','0506','002','1','4'),(342,'342','2021010104','D080','02031','0701','003','2','6'),(343,'343','2021010103','D080','02031','0508','004','8','12'),(344,'344','2021020405','D081','02014','0507','001','1','3'),(345,'345','2021020406','D081','02014','0507','001','1','3'),(346,'346','2021020403','D081','02014','0503','002','1','3'),(347,'347','2021020404','D081','02014','0503','002','1','3'),(348,'348','2021020407','D081','02014','0506','003','8','10'),(349,'349','2021020401','D081','02014','0501','004','1','3'),(350,'350','2021020402','D081','02014','0501','004','1','3'),(351,'351','2021010202','D082','02013','0806','002','1','3'),(352,'352','2021010101','D082','02010','0707','002','4','6'),(353,'353','2021010102','D082','02010','0707','002','4','6'),(354,'354','2021010101','D082','02030','0720','002','7','12'),(355,'355','2021010102','D082','02030','0508','005','1','6'),(356,'356','2021020106','D083','02010','0617','001','7','9'),(357,'357','2021020302','D083','02041','0508','002','7','12'),(358,'358','2021020106','D083','02030','0719','003','7','12'),(359,'359','2021020301','D083','02041','0708','004','7','12'),(360,'360','2021020205','D084','02032','0708','001','1','3'),(361,'361','2021010203','D084','02033','0620','003','1','6'),(362,'362','2021020204','D084','02020','0505','004','1','3'),(363,'363','2021020205','D084','02020','0505','004','1','3'),(364,'364','2021020205','D084','02033','0620','004','7','12'),(365,'365','2021010202','D085','02006','0504','001','1','3'),(366,'366','2021010204','D085','02006','0502','001','7','9'),(367,'367','2021010205','D085','02006','0504','002','7','9'),(368,'368','2021010203','D085','02006','0806','002','10','12'),(369,'369','2021010206','D085','02006','0806','003','1','3'),(370,'370','2021010201','D085','02006','0502','004','2','4');
/*!40000 ALTER TABLE `jadwal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jp`
--

DROP TABLE IF EXISTS `jp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jp` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jp`
--

LOCK TABLES `jp` WRITE;
/*!40000 ALTER TABLE `jp` DISABLE KEYS */;
INSERT INTO `jp` VALUES (1,'1','07:00:00','07:50:00'),(2,'2','07:50:00','08:40:00'),(3,'3','08:40:00','09:30:00'),(4,'4','09:40:00','10:30:00'),(5,'5','10:30:00','11:20:00'),(6,'6','11:20:00','12:10:00'),(7,'7','12:50:00','13:40:00'),(8,'8','13:40:00','14:30:00'),(9,'9','14:30:00','15:20:00'),(10,'10','15:30:00','15:30:00'),(11,'11','16:20:00','17:10:00'),(12,'12','17:10:00','18:00:00');
/*!40000 ALTER TABLE `jp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kelas`
--

DROP TABLE IF EXISTS `kelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_kelas` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kelas`
--

LOCK TABLES `kelas` WRITE;
/*!40000 ALTER TABLE `kelas` DISABLE KEYS */;
INSERT INTO `kelas` VALUES (1,'2021010101','001','MI-1A'),(2,'2021010102','001','MI-1B'),(3,'2021010103','001','MI-1C'),(4,'2021010104','001','MI-1D'),(5,'2021010105','001','MI-1E'),(6,'2021010106','001','MI-1F'),(7,'2021010107','001','MI-1H'),(8,'2021010201','001','MI-2A'),(9,'2021010202','001','MI-2B'),(10,'2021010203','001','MI-2C'),(11,'2021010204','001','MI-2D'),(12,'2021010205','001','MI-2E'),(13,'2021010206','001','MI-2F'),(14,'2021010301','001','MI-3A'),(15,'2021010302','001','MI-3B'),(16,'2021010303','001','MI-3C'),(17,'2021010304','001','MI-3D'),(18,'2021010305','001','MI-3E'),(19,'2021010306','001','MI-3F'),(20,'2021020101','002','TI-1A'),(21,'2021020102','002','TI-1B'),(22,'2021020103','002','TI-1C'),(23,'2021020104','002','TI-1D'),(24,'2021020105','002','TI-1E'),(25,'2021020106','002','TI-1F'),(26,'2021020107','002','TI-1G'),(27,'2021020108','002','TI-1H'),(28,'2021020109','002','TI-1I'),(29,'2021020201','002','TI-2A'),(30,'2021020202','002','TI-2B'),(31,'2021020203','002','TI-2C'),(32,'2021020204','002','TI-2D'),(33,'2021020205','002','TI-2E'),(34,'2021020206','002','TI-2F'),(35,'2021020207','002','TI-2G'),(36,'2021020208','002','TI-2H'),(37,'2021020209','002','TI-2I'),(38,'2021020301','002','TI-3A'),(39,'2021020302','002','TI-3B'),(40,'2021020303','002','TI-3C'),(41,'2021020304','002','TI-3D'),(42,'2021020305','002','TI-3E'),(43,'2021020306','002','TI-3F'),(44,'2021020307','002','TI-3G'),(45,'2021020308','002','TI-3H'),(46,'2021020401','002','TI-4A'),(47,'2021020402','002','TI-4B'),(48,'2021020403','002','TI-4C'),(49,'2021020404','002','TI-4D'),(50,'2021020405','002','TI-4E'),(51,'2021020406','002','TI-4F'),(52,'2021020407','002','TI-4G');
/*!40000 ALTER TABLE `kelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mk`
--

DROP TABLE IF EXISTS `mk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_mk` varchar(255) NOT NULL,
  `nama_mk` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mk`
--

LOCK TABLES `mk` WRITE;
/*!40000 ALTER TABLE `mk` DISABLE KEYS */;
INSERT INTO `mk` VALUES (1,'02001','Agama'),(2,'02002','Alajabar Linier'),(3,'02003','Algoritma dan Struktur Data'),(4,'02004','Aljabar Linier'),(5,'02005','Analisis Dan Desan Berorientasi Objek'),(6,'02006','Bahasa Indonesia'),(7,'02007','Bahasa Inggris'),(8,'02008','Bahasa Inggris 2'),(9,'02009','Bahasa Inggris Persiapan Kerja'),(10,'02010','Basis Data'),(11,'02011','Desain Pemrograman Web'),(12,'02012','Digital Entrepreneurship'),(13,'02013','E-Business'),(14,'02014','Etika Profesi Bidang TI'),(15,'02015','Internet Of Things'),(16,'02016','Kewarganegaraan'),(17,'02017','Komputasi Multimedia'),(18,'02018','Machine Learning'),(19,'02019','Manajemen Jaringan Komputer'),(20,'02020','Manajemen Proyek'),(21,'02021','Manajemen Proyek '),(22,'02022','Pemrograman Berbasis Framework'),(23,'02023','Pemrograman Mobile'),(24,'02024','Pemrograman Multimedia'),(25,'02025','Pemrograman Web Lanjut'),(26,'02026','Pengembangan Perangkat Lunak Berbasis Object'),(27,'02027','Pengolahan Citra dan Visi Komputer'),(28,'02028','Penulisan Ilmiah'),(29,'02029','Praktikum Algoritma dan Struktur Data'),(30,'02030','Praktikum Basis Data'),(31,'02031','Praktikum Struktur Data'),(32,'02032','Proyek 1_P1'),(33,'02033','Proyek 1_P2'),(34,'02034','Proyek 2_P2'),(35,'02035','Rekayasa Perangkat Lunak'),(36,'02036','Sistem Informasi'),(37,'02037','Sistem Manajemen Basis Data'),(38,'02038','Sistem Operasi'),(39,'02039','Sistem Pendukung Keputusan'),(40,'02040','Struktur Data'),(41,'02041','Teknologi Data');
/*!40000 ALTER TABLE `mk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodi`
--

DROP TABLE IF EXISTS `prodi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_prodi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodi`
--

LOCK TABLES `prodi` WRITE;
/*!40000 ALTER TABLE `prodi` DISABLE KEYS */;
INSERT INTO `prodi` VALUES (1,'001','D3 Manajemen Informatika'),(2,'002','D4 Teknik Informatika');
/*!40000 ALTER TABLE `prodi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruang`
--

DROP TABLE IF EXISTS `ruang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_ruang` varchar(255) NOT NULL,
  `nama_ruang` varchar(255) NOT NULL,
  `deskripsi_ruang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruang`
--

LOCK TABLES `ruang` WRITE;
/*!40000 ALTER TABLE `ruang` DISABLE KEYS */;
INSERT INTO `ruang` VALUES (1,'0501','RT01','Ruang Teori 1'),(2,'0502','RT02','Ruang Teori 2'),(3,'0503','RT03','Ruang Teori 3'),(4,'0504','RT04','Ruang Teori 4'),(5,'0505','RT05','Ruang Teori 5'),(6,'0506','RT06','Ruang Teori 6'),(7,'0507','RT07','Ruang Teori 7'),(8,'0508','LPY1','Laboratorium Proyek 1'),(9,'0615','LSI1','Laboratorium Sistem Informasi 1'),(10,'0617','LSI2','Laboratorium Sistem Informasi 2'),(11,'0618','LSI3','Laboratorium Sistem Informasi 3'),(12,'0619','LPY2','Laboratorium Proyek 2'),(13,'0620','LPY3','Laboratorium Proyek 3'),(14,'0701','LPR1','Laboratorium Pemrograman 1'),(15,'0702','LPR2','Laboratorium Pemrograman 2'),(16,'0703','LPR3','Laboratorium Pemrograman 3'),(17,'0704','LPR4','Laboratorium Pemrograman 4'),(18,'0705','LPR5','Laboratorium Pemrograman 5'),(19,'0706','LPR6','Laboratorium Pemrograman 6'),(20,'0707','LKJ1','Laboratorium Keamanan Jaringan 1'),(21,'0708','LPR7','Laboratorium Pemrograman 7'),(22,'0713','LKJ2','Laboratorium Keamanan Jaringan 2'),(23,'0714','LPR8','Laboratorium Pemrograman 8'),(24,'0715','LKJ3','Laboratorium Keamanan Jaringan 3'),(25,'0716','LIG1','Laboratorium Visi Komputer 1'),(26,'0717','RT08','Ruang Teori 8'),(27,'0718','LIG2','Laboratorium Visi Komputer 2'),(28,'0719','LPY4','Laboratorium Proyek 4'),(29,'0720','LAI1','Laboratorium Kecerdasan Buatan 1'),(30,'0801','L DTS','Laboratorium DTS'),(31,'0805','RT09','Ruang Teori 9'),(32,'0806','RT10','Ruang Teori 10'),(33,'1001','RT11','Ruang Teori 11'),(34,'1002','ROL1','Ruang Online 1'),(35,'1003','ROL2','Ruang Online 2'),(36,'1004','ROL3','Ruang Online 3');
/*!40000 ALTER TABLE `ruang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_65_21_key`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_65_21_key`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_65_21_key` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_65_21_key`;

--
-- Table structure for table `dosen`
--

DROP TABLE IF EXISTS `dosen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dosen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_dosen` varchar(255) NOT NULL,
  `nama_dosen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dosen`
--

LOCK TABLES `dosen` WRITE;
/*!40000 ALTER TABLE `dosen` DISABLE KEYS */;
INSERT INTO `dosen` VALUES (1,'D001','Abdul Chalim, SAg., MPd.I'),(2,'D002','Ade Ismail'),(3,'D003','Agung Nugroho Pramudhita ST., MT.'),(4,'D004','Ahmadi Yuli Ananta ST., MM.'),(5,'D005','Ane Fany Novitasari, SH.MKn.'),(6,'D006','Annisa Puspa Kirana MKom.'),(7,'D007','Annisa Taufika Firdausi ST., MT.'),(8,'D008','Anugrah Nur Rahmanto SSn., MDs.'),(9,'D009','Ariadi Retno Ririd SKom., MKom.'),(10,'D010','Arie Rachmad Syulistyo SKom., MKom.'),(11,'D011','Arief Prasetyo SKom., MKom.'),(12,'D012','Arwin Sumari ST., MT., DR.'),(13,'D013','Atiqah Nurul Asri SPd., MPd.'),(14,'D014','Bagas Satya Dian Nugraha, ST., MT.'),(15,'D015','Banni Satria Andoko, S. Kom., M.MSI'),(16,'D016','Budi Harijanto ST., MMKom.'),(17,'D017','Cahya Rahmad ST., MKom. DR.Eng'),(18,'D018','Candra Bella Vista SKom., MT.'),(19,'D019','Candrasena Setiadi ST., MMT.'),(20,'D020','Deasy Sandhya Elya Ikawati SSi., MSi.'),(21,'D021','Deddy Kusbianto PA Ir. MMKom.'),(22,'D022','Dhebys Suryani SKom. MT.'),(23,'D023','Dian Hanifudin Subhi SKom., MT.'),(24,'D024','Dika Rizky Yunianto SKom., MKom.'),(25,'D025','Dimas Wahyu Wibowo ST., MT.'),(26,'D026','Dodit Supriyanto SKom., MT.'),(27,'D027','Dwi Puspitasari SKom., MKom.'),(28,'D028','Eka Larasati Amalia, SST., MT.'),(29,'D029','Ekojono, ST., M.Kom.'),(30,'D030','Elok Nur Hamdana, ST., MT'),(31,'D031','Erfan Rohadi, ST., MEng., PhD.'),(32,'D032','Faiz Ushbah Mubarok, SPd., MPd.'),(33,'D033','Farid Angga Pribadi, SKom.,MKom.'),(34,'D034','Farida Ulfa, SPd., MPd.'),(35,'D035','Gunawan Budi Prasetyo, ST., MMT., Ph.D.'),(36,'D036','Habibie Ed Dien, MT.'),(37,'D037','Hairus'),(38,'D038','Hendra Pradibta, SE., M.Sc.'),(39,'D039','Ika Kusumaning Putri, MT.'),(40,'D040','Imam Fahrur Rozi, ST., MT.'),(41,'D041','Indra Dharma Wijaya, ST., MMT.'),(42,'D042','Irsyad Arif Mashudi, M.Kom'),(43,'D043','Kadek Suarjuna Batubulan, SKom, MT.'),(44,'D044','Luqman Affandi, SKom., MMSI.'),(45,'D045','M. Hasyim Ratsanjani'),(46,'D046','Mamluatul Haniah'),(47,'D047','Meyti Eka Apriyani ST., MT.'),(48,'D048','Milyun Nima Shoumi'),(49,'D049','Moch. Zawaruddin Abdullah, S.ST., M.Kom'),(50,'D050','Moh. Amin'),(51,'D051','Muhammad Afif Hendrawan, S.Kom.'),(52,'D052','Muhammad Shulhan Khairy, SKom., MKom.'),(53,'D053','Muhammad Unggul Pamenang, SSt., MT.'),(54,'D054','Mungki Astiningrum, ST., MKom.'),(55,'D055','Mustika Mentari, SKom., MKom.'),(56,'D056','Noprianto'),(57,'D057','Odhitya Desta Triswidrananta, SPd., MPd.'),(58,'D058','Pramana Yoga Saputra, SKom., MMT.'),(59,'D059','Putra Prima A., ST., MKom.'),(60,'D060','Rakhmat Arianto SST., MKom.'),(61,'D061','Rawansyah., Drs., MPd.'),(62,'D062','Retno Damayanti, SPd.'),(63,'D063','Ridwan Rismanto, SST., MKom.'),(64,'D064','Rizki Putri Ramadhani, S.S., M.Pd.'),(65,'D065','Rizky Ardiansyah, SKom., MT.'),(66,'D066','Robby Anggriawan SE., ME.'),(67,'D067','Rokhimatul Wakhidah SPd. MT.'),(68,'D068','Rosa Andrie Asmara, ST., MT., Dr. Eng.'),(69,'D069','Rudy Ariyanto, ST., MCs.'),(70,'D070','Satrio Binusa S, SS, M.Pd'),(71,'D071','Septian Enggar Sukmana, SPd., MT.'),(72,'D072','Shohib Muslim'),(73,'D073','Siti Romlah, Dra., M.M.'),(74,'D074','Sofyan Noor Arief, S.ST., M.Kom.'),(75,'D075','Ulla Delfiana Rosiani, ST., MT.'),(76,'D076','Usman Nurhasan, S.Kom., MT.'),(77,'D077','Very Sugiarto, SPd., MKom.'),(78,'D078','Vipkas Al Hadid Firdaus, ST.,MT.'),(79,'D079','Vivi Nur Wijayaningrum, S.Kom, M.Kom'),(80,'D080','Vivin Ayu Lestari, SPd.'),(81,'D081','Widaningsih Condrowardhani, SH., MH.'),(82,'D082','Wilda Imama Sabilla, S.Kom., M.Kom.'),(83,'D083','Yoppy Yunhasnawa, SST., MSc.'),(84,'D084','Yuri Ariyanto, SKom., MKom.'),(85,'D085','Zulmy Faqihuddin Putera, S.Pd., M.Pd');
/*!40000 ALTER TABLE `dosen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hari`
--

DROP TABLE IF EXISTS `hari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_hari` varchar(255) NOT NULL,
  `nama_hari` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hari`
--

LOCK TABLES `hari` WRITE;
/*!40000 ALTER TABLE `hari` DISABLE KEYS */;
INSERT INTO `hari` VALUES (1,'001','Senin'),(2,'002','Selasa'),(3,'003','Rabu'),(4,'004','Kamis'),(5,'005','Jumat'),(6,'006','Sabtu'),(7,'007','Minggu');
/*!40000 ALTER TABLE `hari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jadwal`
--

DROP TABLE IF EXISTS `jadwal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jadwal` varchar(255) NOT NULL,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_dosen` varchar(255) NOT NULL,
  `kode_mk` varchar(255) NOT NULL,
  `kode_ruang` varchar(255) NOT NULL,
  `kode_hari` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=371 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jadwal`
--

LOCK TABLES `jadwal` WRITE;
/*!40000 ALTER TABLE `jadwal` DISABLE KEYS */;
INSERT INTO `jadwal` VALUES (1,'1','2021020101','D001','02001','0504','001','7','9'),(2,'2','2021010103','D001','02001','0506','002','9','11'),(3,'3','2021010105','D001','02001','0806','003','10','12'),(4,'4','2021010102','D001','02001','0506','004','1','3'),(5,'5','2021010106','D001','02001','0806','004','4','6'),(6,'6','2021010101','D001','02001','0506','004','7','9'),(7,'7','2021010104','D001','02001','0506','005','10','12'),(8,'8','2021010206','D002','02037','0702','001','7','12'),(9,'9','2021020202','D002','02036','0708','003','2','4'),(10,'10','2021010205','D002','02037','0713','004','1','6'),(11,'11','2021020209','D002','02025','0719','004','7','12'),(12,'12','2021020301','D003','02012','0508','002','1','4'),(13,'13','2021020302','D003','02012','0508','002','1','4'),(14,'14','2021010201','D003','02017','0719','003','2','5'),(15,'15','2021010202','D003','02017','0719','003','2','5'),(16,'16','2021010203','D003','02017','0507','005','2','5'),(17,'17','2021010106','D004','02028','0704','001','1','3'),(18,'18','2021020203','D004','02032','0507','001','10','12'),(19,'19','2021010201','D004','02034','0617','002','7','12'),(20,'20','2021020203','D004','02032','0708','004','1','6'),(21,'21','2021020104','D005','02016','0717','001','1','3'),(22,'22','2021020108','D005','02016','0504','001','4','6'),(23,'23','2021020106','D005','02016','0805','001','10','12'),(24,'24','2021020105','D005','02016','0502','002','1','3'),(25,'25','2021020102','D005','02016','0806','002','4','6'),(26,'26','2021020103','D005','02016','0502','003','4','6'),(27,'27','2021020107','D005','02016','0806','004','1','3'),(28,'28','2021020109','D005','02016','0502','005','1','3'),(29,'29','2021010105','D006','02010','0701','002','1','3'),(30,'30','2021010105','D006','02030','0618','004','1','6'),(31,'31','2021010203','D006','02037','0705','004','7','12'),(32,'32','2021010204','D006','02037','0619','005','7','12'),(33,'33','2021010103','D007','02011','0705','002','2','6'),(34,'34','2021020101','D007','02038','0503','003','3','5'),(35,'35','2021020102','D007','02038','0503','003','3','5'),(36,'36','2021010102','D007','02011','0615','004','8','12'),(37,'37','2021010101','D007','02011','0703','005','2','6'),(38,'38','2021010306','D008','02012','0619','001','2','5'),(39,'39','2021020203','D008','02036','0716','003','2','4'),(40,'40','2021020104','D008','02038','0505','004','4','6'),(41,'41','2021020105','D008','02038','0505','004','4','6'),(42,'42','2021010304','D008','02012','0507','005','9','12'),(43,'43','2021010305','D008','02012','0507','005','9','12'),(44,'44','2021020103','D009','02035','0505','002','7','10'),(45,'45','2021020104','D009','02035','0505','002','7','10'),(46,'46','2021020204','D009','02005','0704','003','7','12'),(47,'47','2021020203','D009','02005','0705','005','1','6'),(48,'48','2021010103','D010','02026','0806','001','3','4'),(49,'49','2021010202','D010','02023','0704','001','8','11'),(50,'50','2021010202','D010','02023','0713','002','7','10'),(51,'51','2021010201','D010','02023','0705','003','7','10'),(52,'52','2021010201','D010','02023','0716','005','8','11'),(53,'53','2021010201','D011','02019','0718','002','1','5'),(54,'54','2021010203','D011','02019','0706','004','1','5'),(55,'55','2021010204','D011','02019','0716','004','8','12'),(56,'56','2021010202','D011','02019','0706','005','1','5'),(57,'57','2021020204','D012','02018','0702','001','1','5'),(58,'58','2021020203','D012','02018','0619','002','1','5'),(59,'59','2021010204','D012','02020','0704','002','9','11'),(60,'60','2021010302','D013','02008','0805','002','4','6'),(61,'61','2021020109','D013','02007','0805','002','7','9'),(62,'62','2021010301','D013','02009','0717','003','4','6'),(63,'63','2021020101','D013','02008','0717','003','7','9'),(64,'64','2021020401','D013','02009','0717','004','4','6'),(65,'65','2021020107','D013','02008','0717','005','2','4'),(66,'66','2021020102','D013','02008','0506','005','7','9'),(67,'67','2021020301','D014','02017','0720','004','1','4'),(68,'68','2021020302','D014','02017','0720','004','1','4'),(69,'69','2021020303','D014','02017','0714','005','2','5'),(70,'70','2021020308','D014','02017','0714','005','7','10'),(71,'71','2021020206','D015','02032','0720','002','3','5'),(72,'72','2021020206','D015','02005','0619','002','7','12'),(73,'73','2021020205','D015','02005','0713','003','7','12'),(74,'74','2021020206','D015','02033','0701','004','7','12'),(75,'75','2021020103','D016','02038','0506','001','1','3'),(76,'76','2021020204','D016','02032','0615','001','7','9'),(77,'77','2021010103','D016','02038','0501','004','4','6'),(78,'78','2021010104','D016','02038','0501','004','4','6'),(79,'79','2021020204','D016','02033','0719','005','7','12'),(80,'80','2021020106','D017','02004','0805','004','3','6'),(81,'81','2021020302','D017','02027','0702','004','7','12'),(82,'82','2021020301','D017','02027','0704','005','1','6'),(83,'83','2021020109','D017','02002','0717','005','7','10'),(84,'84','2021020302','D018','02039','0701','001','1','6'),(85,'85','2021010203','D018','02013','0501','001','10','12'),(86,'86','2021010204','D018','02013','0501','001','10','12'),(87,'87','2021020301','D019','02022','0620','001','7','12'),(88,'88','2021020302','D019','02022','0702','005','1','6'),(89,'89','2021020108','D020','02004','0502','004','9','12'),(90,'90','2021020107','D020','02004','0502','005','7','10'),(91,'91','2021020207','D021','02005','0615','001','1','6'),(92,'92','2021020207','D021','02032','0707','002','1','3'),(93,'93','2021020207','D021','02033','0718','003','1','6'),(94,'94','2021010303','D021','02012','0703','003','8','11'),(95,'95','2021010204','D022','02033','0704','003','1','6'),(96,'96','2021010205','D022','02033','0706','003','7','12'),(97,'97','2021020306','D022','02012','0504','005','1','4'),(98,'98','2021010205','D023','02023','0508','001','1','4'),(99,'99','2021020206','D023','02025','0706','003','1','6'),(100,'100','2021010206','D023','02023','0618','003','8','11'),(101,'101','2021010205','D023','02023','0701','005','1','4'),(102,'102','2021010206','D023','02023','0705','005','7','10'),(103,'103','2021010201','D024','02037','0713','001','1','6'),(104,'104','2021010103','D024','02010','0615','001','10','12'),(105,'105','2021010103','D024','02010','0619','003','1','6'),(106,'106','2021010202','D024','02037','0701','005','7','12'),(107,'107','2021020305','D025','02024','0615','001','1','6'),(108,'108','2021020306','D025','02022','0713','002','1','6'),(109,'109','2021020304','D025','02017','0620','005','1','4'),(110,'110','2021020305','D025','02017','0620','005','1','4'),(111,'111','2021020305','D026','02015','0508','003','7','12'),(112,'112','2021020306','D026','02041','0701','004','1','6'),(113,'113','2021020103','D027','02010','0501','002','4','6'),(114,'114','2021020104','D027','02010','0501','002','4','6'),(115,'115','2021010106','D027','02035','0707','003','1','4'),(116,'116','2021020103','D027','02010','0615','004','7','12'),(117,'117','2021020104','D027','02010','0617','005','1','6'),(118,'118','2021010104','D028','02026','0504','002','1','4'),(119,'119','2021020107','D028','02035','0503','002','8','11'),(120,'120','2021020108','D028','02035','0503','002','8','11'),(121,'121','2021010105','D028','02026','0505','003','3','6'),(122,'122','2021010106','D028','02026','0505','003','3','6'),(123,'123','2021020209','D029','02032','0503','001','7','9'),(124,'124','2021020204','D029','02036','0703','003','1','3'),(125,'125','2021020205','D029','02036','0703','003','1','3'),(126,'126','2021020209','D029','02033','0508','004','1','6'),(127,'127','2021020206','D029','02036','0501','005','1','3'),(128,'128','2021020207','D029','02036','0501','005','1','3'),(129,'129','2021020109','D030','02010','0716','001','4','6'),(130,'130','2021020108','D030','02010','0715','002','2','4'),(131,'131','2021020201','D030','02036','0502','003','1','3'),(132,'132','2021020109','D030','02030','0620','004','1','6'),(133,'133','2021020108','D030','02030','0615','005','1','6'),(134,'134','2021020202','D031','02032','0507','001','7','9'),(135,'135','2021010203','D031','02020','0718','002','7','9'),(136,'136','2021010201','D031','02020','0501','004','7','9'),(137,'137','2021010202','D031','02020','0501','004','7','9'),(138,'138','2021020202','D031','02033','0707','005','7','12'),(139,'139','2021020104','D032','02008','0806','001','7','9'),(140,'140','2021020103','D032','02008','0717','002','1','3'),(141,'141','2021020403','D032','02009','0502','002','10','12'),(142,'142','2021010304','D032','02009','0506','003','4','6'),(143,'143','2021020402','D032','02009','0504','004','4','6'),(144,'144','2021020105','D032','02009','0717','004','8','10'),(145,'145','2021010303','D032','02009','0806','005','7','9'),(146,'146','2021020203','D033','02037','0716','003','7','12'),(147,'147','2021020108','D034','02008','0502','001','1','3'),(148,'148','2021020106','D034','02008','0502','002','7','9'),(149,'149','2021010305','D034','02009','0805','003','4','6'),(150,'150','2021010306','D034','02009','0506','004','4','6'),(151,'151','2021020208','D035','02018','0618','002','2','6'),(152,'152','2021020307','D035','02041','0716','002','7','12'),(153,'153','2021020308','D035','02041','0716','005','1','6'),(154,'154','2021020207','D035','02018','0615','005','8','12'),(155,'155','2021020209','D036','02036','0704','001','4','6'),(156,'156','2021020304','D036','02022','0508','001','7','12'),(157,'157','2021020303','D036','02022','0704','002','1','6'),(158,'158','2021020202','D036','02025','0706','002','7','12'),(159,'159','2021010102','D037','02016','0506','001','7','9'),(160,'160','2021010107','D037','02016','0806','002','7','9'),(161,'161','2021010104','D037','02016','0504','002','10','12'),(162,'162','2021020101','D037','02016','0717','003','10','12'),(163,'163','2021010106','D037','02016','0717','004','1','3'),(164,'164','2021010103','D037','02016','0504','005','7','9'),(165,'165','2021010101','D037','02016','0806','005','10','12'),(166,'166','2021020307','D038','02012','0714','002','2','5'),(167,'167','2021020209','D038','02020','0620','003','10','12'),(168,'168','2021010301','D038','02012','0503','005','1','4'),(169,'169','2021010302','D038','02012','0503','005','1','4'),(170,'170','2021010101','D039','02040','0503','001','1','3'),(171,'171','2021010102','D039','02040','0503','001','1','3'),(172,'172','2021020209','D039','02037','0703','002','1','6'),(173,'173','2021010102','D039','02040','0617','003','8','12'),(174,'174','2021010101','D039','02040','0617','004','2','6'),(175,'175','2021020109','D040','02003','0713','001','9','11'),(176,'176','2021010202','D040','02033','0619','003','7','12'),(177,'177','2021020109','D040','02003','0718','004','7','12'),(178,'178','2021010101','D041','02038','0507','001','4','6'),(179,'179','2021010102','D041','02038','0507','001','4','6'),(180,'180','2021010101','D041','02028','0501','002','1','3'),(181,'181','2021010102','D041','02028','0501','002','1','3'),(182,'182','2021020205','D042','02037','0703','001','7','12'),(183,'183','2021020204','D042','02037','0715','004','7','12'),(184,'184','2021020101','D042','02035','0505','005','2','5'),(185,'185','2021020102','D042','02035','0505','005','2','5'),(186,'186','2021010204','D043','02017','0705','001','2','5'),(187,'187','2021010205','D043','02017','0505','002','2','5'),(188,'188','2021010204','D043','02017','0505','002','2','5'),(189,'189','2021020208','D043','02036','0507','004','7','9'),(190,'190','2021020205','D043','02025','0720','005','1','6'),(191,'191','2021020201','D044','02032','0706','001','3','5'),(192,'192','2021010205','D044','02021','0618','001','10','12'),(193,'193','2021010206','D044','02021','0618','001','10','12'),(194,'194','2021020206','D044','02020','0707','004','3','5'),(195,'195','2021020207','D044','02020','0707','004','3','5'),(196,'196','2021020201','D044','02033','0713','004','7','12'),(197,'197','2021020208','D045','02037','0718','001','1','6'),(198,'198','2021020107','D045','02010','0702','001','9','11'),(199,'199','2021020107','D045','02030','0615','003','1','6'),(200,'200','2021020207','D045','02037','0619','004','7','12'),(201,'201','2021020103','D046','02003','0501','001','4','6'),(202,'202','2021020101','D046','02010','0617','002','3','5'),(203,'203','2021020101','D046','02030','0704','004','1','6'),(204,'204','2021020209','D046','02018','0707','005','1','5'),(205,'205','2021020103','D046','02003','0702','005','7','12'),(206,'206','2021020308','D047','02022','0620','001','1','6'),(207,'207','2021020203','D047','02020','0805','001','7','9'),(208,'208','2021020201','D047','02020','0620','002','1','3'),(209,'209','2021020202','D047','02020','0620','002','1','3'),(210,'210','2021020307','D047','02022','0715','003','1','6'),(211,'211','2021020305','D048','02027','0716','002','1','6'),(212,'212','2021020201','D048','02025','0503','004','1','6'),(213,'213','2021020208','D048','02025','0713','005','1','6'),(214,'214','2021020306','D048','02027','0620','005','7','12'),(215,'215','2021010106','D049','02010','0716','001','7','9'),(216,'216','2021020204','D049','02025','0719','002','1','6'),(217,'217','2021020203','D049','02025','0703','002','7','12'),(218,'218','2021010106','D049','02030','0706','004','7','12'),(219,'219','2021020106','D050','02001','0717','001','4','6'),(220,'220','2021020103','D050','02001','0506','001','7','9'),(221,'221','2021020105','D050','02001','0504','001','10','12'),(222,'222','2021020109','D050','02001','0805','003','1','3'),(223,'223','2021020102','D050','02001','0504','003','8','10'),(224,'224','2021020104','D050','02001','0805','004','7','9'),(225,'225','2021020107','D050','02001','0805','004','10','12'),(226,'226','2021020108','D050','02001','0805','005','7','9'),(227,'227','2021020206','D051','02037','0715','001','1','6'),(228,'228','2021020208','D051','02020','0508','003','2','4'),(229,'229','2021020306','D051','02039','0701','003','7','12'),(230,'230','2021020305','D051','02039','0619','004','1','6'),(231,'231','2021010104','D052','02010','0701','001','4','6'),(232,'232','2021020201','D052','02005','0708','002','7','12'),(233,'233','2021020202','D052','02005','0720','003','7','12'),(234,'234','2021010104','D052','02030','0618','005','1','6'),(235,'235','2021020105','D053','02010','0708','001','7','9'),(236,'236','2021020105','D053','02030','0704','005','7','12'),(237,'237','2021020101','D054','02003','0703','001','2','4'),(238,'238','2021020102','D054','02003','0703','001','2','4'),(239,'239','2021010205','D054','02013','0501','001','7','9'),(240,'240','2021020102','D054','02029','0620','002','7','12'),(241,'241','2021020101','D054','02029','0720','004','7','12'),(242,'242','2021020106','D055','02003','0716','001','1','3'),(243,'243','2021020304','D055','02027','0718','004','1','6'),(244,'244','2021020106','D055','02029','0618','004','7','12'),(245,'245','2021020303','D055','02027','0718','005','7','12'),(246,'246','2021020107','D056','02003','0708','001','4','6'),(247,'247','2021020303','D056','02015','0715','001','7','12'),(248,'248','2021020304','D056','02015','0713','003','1','6'),(249,'249','2021020107','D056','02029','0702','003','7','12'),(250,'250','2021020201','D057','02037','0720','001','7','12'),(251,'251','2021020305','D057','02041','0618','005','7','12'),(252,'252','2021020208','D058','02032','0502','001','10','12'),(253,'253','2021020303','D058','02041','0720','003','1','6'),(254,'254','2021020208','D058','02033','0716','004','1','6'),(255,'255','2021020304','D058','02041','0615','005','7','12'),(256,'256','2021010203','D059','02023','0719','001','1','4'),(257,'257','2021010204','D059','02023','0702','002','2','5'),(258,'258','2021020207','D059','02025','0701','002','7','12'),(259,'259','2021010204','D059','02023','0718','005','2','5'),(260,'260','2021010203','D059','02023','0715','005','8','11'),(261,'261','2021020308','D060','02039','0619','001','7','12'),(262,'262','2021020201','D060','02018','0615','003','7','11'),(263,'263','2021020202','D060','02018','0708','005','1','5'),(264,'264','2021020307','D060','02039','0708','005','7','12'),(265,'265','2021020101','D061','02004','0717','002','9','12'),(266,'266','2021020104','D061','02004','0504','003','3','6'),(267,'267','2021020105','D061','02004','0805','003','7','10'),(268,'268','2021020102','D061','02004','0806','004','8','11'),(269,'269','2021020103','D061','02004','0806','005','2','5'),(270,'270','2021010106','D062','02011','0615','002','7','11'),(271,'271','2021010104','D062','02011','0703','004','8','12'),(272,'272','2021010105','D062','02011','0715','005','1','5'),(273,'273','2021010105','D062','02038','0501','005','10','12'),(274,'274','2021010106','D062','02038','0501','005','10','12'),(275,'275','2021020209','D063','02005','0719','002','7','12'),(276,'276','2021010101','D063','02026','0507','003','1','4'),(277,'277','2021010102','D063','02026','0507','003','1','4'),(278,'278','2021020208','D063','02005','0708','003','7','12'),(279,'279','2021010301','D064','02006','0805','001','1','3'),(280,'280','2021010303','D064','02006','0506','001','4','6'),(281,'281','2021010302','D064','02006','0805','002','1','3'),(282,'282','2021010305','D064','02006','0506','003','1','3'),(283,'283','2021010306','D064','02006','0504','004','1','3'),(284,'284','2021010304','D064','02006','0805','005','2','4'),(285,'285','2021020102','D065','02010','0708','002','1','3'),(286,'286','2021020102','D065','02030','0615','004','1','6'),(287,'287','2021010206','D066','02013','0503','001','4','6'),(288,'288','2021020104','D067','02003','0805','001','4','6'),(289,'289','2021020105','D067','02003','0805','001','4','6'),(290,'290','2021020105','D067','02029','0705','003','1','6'),(291,'291','2021010201','D067','02013','0506','004','10','12'),(292,'292','2021020104','D067','02029','0703','005','7','12'),(293,'293','2021020308','D068','02027','0714','002','7','12'),(294,'294','2021020307','D068','02027','0703','004','1','6'),(295,'295','2021020303','D069','02039','0618','002','7','12'),(296,'296','2021010206','D069','02033','0702','004','1','6'),(297,'297','2021020406','D070','02009','0502','001','4','6'),(298,'298','2021020405','D070','02009','0806','001','10','12'),(299,'299','2021020404','D070','02009','0717','002','4','6'),(300,'300','2021020407','D070','02009','0806','003','4','6'),(301,'301','2021020306','D071','02017','0505','001','1','4'),(302,'302','2021020307','D071','02017','0505','001','1','4'),(303,'303','2021020108','D071','02003','0714','001','7','9'),(304,'304','2021020308','D071','02017','0501','003','1','4'),(305,'305','2021020108','D071','02029','0719','004','1','6'),(306,'306','2021010303','D072','02014','0720','001','1','3'),(307,'307','2021010304','D072','02014','0720','001','1','3'),(308,'308','2021010305','D072','02014','0714','001','10','12'),(309,'309','2021010306','D072','02014','0714','001','10','12'),(310,'310','2021010301','D072','02014','0501','005','7','9'),(311,'311','2021010302','D072','02014','0501','005','7','9'),(312,'312','2021020305','D073','02012','0714','003','1','4'),(313,'313','2021020106','D074','02038','0507','002','3','5'),(314,'314','2021020107','D074','02038','0507','002','3','5'),(315,'315','2021020109','D074','02038','0805','002','10','12'),(316,'316','2021020108','D074','02038','0806','003','7','9'),(317,'317','2021010206','D074','02019','0719','005','1','5'),(318,'318','2021010205','D074','02019','0713','005','7','11'),(319,'319','2021010105','D075','02028','0501','001','1','3'),(320,'320','2021020304','D075','02039','0706','002','1','6'),(321,'321','2021020301','D075','02039','0618','003','1','6'),(322,'322','2021010103','D075','02028','0503','003','8','10'),(323,'323','2021010104','D075','02028','0503','003','8','10'),(324,'324','2021020303','D076','02012','0618','001','1','4'),(325,'325','2021020304','D076','02012','0618','001','1','4'),(326,'326','2021020307','D076','02015','0701','001','7','12'),(327,'327','2021020308','D076','02015','0718','003','7','12'),(328,'328','2021020306','D077','02015','0705','001','7','12'),(329,'329','2021020202','D077','02037','0715','004','1','6'),(330,'330','2021020205','D078','02018','0615','002','1','5'),(331,'331','2021020301','D078','02015','0715','002','7','12'),(332,'332','2021020302','D078','02015','0617','003','1','6'),(333,'333','2021020206','D078','02018','0706','005','8','12'),(334,'334','2021010105','D079','02040','0503','002','4','6'),(335,'335','2021010106','D079','02040','0503','002','4','6'),(336,'336','2021010105','D079','02031','0705','002','8','12'),(337,'337','2021010106','D079','02031','0715','003','8','12'),(338,'338','2021020105','D079','02035','0506','005','2','5'),(339,'339','2021010103','D080','02040','0505','001','7','9'),(340,'340','2021010104','D080','02040','0505','001','7','9'),(341,'341','2021020109','D080','02035','0506','002','1','4'),(342,'342','2021010104','D080','02031','0701','003','2','6'),(343,'343','2021010103','D080','02031','0508','004','8','12'),(344,'344','2021020405','D081','02014','0507','001','1','3'),(345,'345','2021020406','D081','02014','0507','001','1','3'),(346,'346','2021020403','D081','02014','0503','002','1','3'),(347,'347','2021020404','D081','02014','0503','002','1','3'),(348,'348','2021020407','D081','02014','0506','003','8','10'),(349,'349','2021020401','D081','02014','0501','004','1','3'),(350,'350','2021020402','D081','02014','0501','004','1','3'),(351,'351','2021010202','D082','02013','0806','002','1','3'),(352,'352','2021010101','D082','02010','0707','002','4','6'),(353,'353','2021010102','D082','02010','0707','002','4','6'),(354,'354','2021010101','D082','02030','0720','002','7','12'),(355,'355','2021010102','D082','02030','0508','005','1','6'),(356,'356','2021020106','D083','02010','0617','001','7','9'),(357,'357','2021020302','D083','02041','0508','002','7','12'),(358,'358','2021020106','D083','02030','0719','003','7','12'),(359,'359','2021020301','D083','02041','0708','004','7','12'),(360,'360','2021020205','D084','02032','0708','001','1','3'),(361,'361','2021010203','D084','02033','0620','003','1','6'),(362,'362','2021020204','D084','02020','0505','004','1','3'),(363,'363','2021020205','D084','02020','0505','004','1','3'),(364,'364','2021020205','D084','02033','0620','004','7','12'),(365,'365','2021010202','D085','02006','0504','001','1','3'),(366,'366','2021010204','D085','02006','0502','001','7','9'),(367,'367','2021010205','D085','02006','0504','002','7','9'),(368,'368','2021010203','D085','02006','0806','002','10','12'),(369,'369','2021010206','D085','02006','0806','003','1','3'),(370,'370','2021010201','D085','02006','0502','004','2','4');
/*!40000 ALTER TABLE `jadwal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jp`
--

DROP TABLE IF EXISTS `jp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jp` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jp`
--

LOCK TABLES `jp` WRITE;
/*!40000 ALTER TABLE `jp` DISABLE KEYS */;
INSERT INTO `jp` VALUES (1,'1','07:00:00','07:50:00'),(2,'2','07:50:00','08:40:00'),(3,'3','08:40:00','09:30:00'),(4,'4','09:40:00','10:30:00'),(5,'5','10:30:00','11:20:00'),(6,'6','11:20:00','12:10:00'),(7,'7','12:50:00','13:40:00'),(8,'8','13:40:00','14:30:00'),(9,'9','14:30:00','15:20:00'),(10,'10','15:30:00','15:30:00'),(11,'11','16:20:00','17:10:00'),(12,'12','17:10:00','18:00:00');
/*!40000 ALTER TABLE `jp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kelas`
--

DROP TABLE IF EXISTS `kelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_kelas` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kelas`
--

LOCK TABLES `kelas` WRITE;
/*!40000 ALTER TABLE `kelas` DISABLE KEYS */;
INSERT INTO `kelas` VALUES (1,'2021010101','001','MI-1A'),(2,'2021010102','001','MI-1B'),(3,'2021010103','001','MI-1C'),(4,'2021010104','001','MI-1D'),(5,'2021010105','001','MI-1E'),(6,'2021010106','001','MI-1F'),(7,'2021010107','001','MI-1H'),(8,'2021010201','001','MI-2A'),(9,'2021010202','001','MI-2B'),(10,'2021010203','001','MI-2C'),(11,'2021010204','001','MI-2D'),(12,'2021010205','001','MI-2E'),(13,'2021010206','001','MI-2F'),(14,'2021010301','001','MI-3A'),(15,'2021010302','001','MI-3B'),(16,'2021010303','001','MI-3C'),(17,'2021010304','001','MI-3D'),(18,'2021010305','001','MI-3E'),(19,'2021010306','001','MI-3F'),(20,'2021020101','002','TI-1A'),(21,'2021020102','002','TI-1B'),(22,'2021020103','002','TI-1C'),(23,'2021020104','002','TI-1D'),(24,'2021020105','002','TI-1E'),(25,'2021020106','002','TI-1F'),(26,'2021020107','002','TI-1G'),(27,'2021020108','002','TI-1H'),(28,'2021020109','002','TI-1I'),(29,'2021020201','002','TI-2A'),(30,'2021020202','002','TI-2B'),(31,'2021020203','002','TI-2C'),(32,'2021020204','002','TI-2D'),(33,'2021020205','002','TI-2E'),(34,'2021020206','002','TI-2F'),(35,'2021020207','002','TI-2G'),(36,'2021020208','002','TI-2H'),(37,'2021020209','002','TI-2I'),(38,'2021020301','002','TI-3A'),(39,'2021020302','002','TI-3B'),(40,'2021020303','002','TI-3C'),(41,'2021020304','002','TI-3D'),(42,'2021020305','002','TI-3E'),(43,'2021020306','002','TI-3F'),(44,'2021020307','002','TI-3G'),(45,'2021020308','002','TI-3H'),(46,'2021020401','002','TI-4A'),(47,'2021020402','002','TI-4B'),(48,'2021020403','002','TI-4C'),(49,'2021020404','002','TI-4D'),(50,'2021020405','002','TI-4E'),(51,'2021020406','002','TI-4F'),(52,'2021020407','002','TI-4G');
/*!40000 ALTER TABLE `kelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mk`
--

DROP TABLE IF EXISTS `mk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_mk` varchar(255) NOT NULL,
  `nama_mk` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mk`
--

LOCK TABLES `mk` WRITE;
/*!40000 ALTER TABLE `mk` DISABLE KEYS */;
INSERT INTO `mk` VALUES (1,'02001','Agama'),(2,'02002','Alajabar Linier'),(3,'02003','Algoritma dan Struktur Data'),(4,'02004','Aljabar Linier'),(5,'02005','Analisis Dan Desan Berorientasi Objek'),(6,'02006','Bahasa Indonesia'),(7,'02007','Bahasa Inggris'),(8,'02008','Bahasa Inggris 2'),(9,'02009','Bahasa Inggris Persiapan Kerja'),(10,'02010','Basis Data'),(11,'02011','Desain Pemrograman Web'),(12,'02012','Digital Entrepreneurship'),(13,'02013','E-Business'),(14,'02014','Etika Profesi Bidang TI'),(15,'02015','Internet Of Things'),(16,'02016','Kewarganegaraan'),(17,'02017','Komputasi Multimedia'),(18,'02018','Machine Learning'),(19,'02019','Manajemen Jaringan Komputer'),(20,'02020','Manajemen Proyek'),(21,'02021','Manajemen Proyek '),(22,'02022','Pemrograman Berbasis Framework'),(23,'02023','Pemrograman Mobile'),(24,'02024','Pemrograman Multimedia'),(25,'02025','Pemrograman Web Lanjut'),(26,'02026','Pengembangan Perangkat Lunak Berbasis Object'),(27,'02027','Pengolahan Citra dan Visi Komputer'),(28,'02028','Penulisan Ilmiah'),(29,'02029','Praktikum Algoritma dan Struktur Data'),(30,'02030','Praktikum Basis Data'),(31,'02031','Praktikum Struktur Data'),(32,'02032','Proyek 1_P1'),(33,'02033','Proyek 1_P2'),(34,'02034','Proyek 2_P2'),(35,'02035','Rekayasa Perangkat Lunak'),(36,'02036','Sistem Informasi'),(37,'02037','Sistem Manajemen Basis Data'),(38,'02038','Sistem Operasi'),(39,'02039','Sistem Pendukung Keputusan'),(40,'02040','Struktur Data'),(41,'02041','Teknologi Data');
/*!40000 ALTER TABLE `mk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodi`
--

DROP TABLE IF EXISTS `prodi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_prodi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodi`
--

LOCK TABLES `prodi` WRITE;
/*!40000 ALTER TABLE `prodi` DISABLE KEYS */;
INSERT INTO `prodi` VALUES (1,'001','D3 Manajemen Informatika'),(2,'002','D4 Teknik Informatika');
/*!40000 ALTER TABLE `prodi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruang`
--

DROP TABLE IF EXISTS `ruang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_ruang` varchar(255) NOT NULL,
  `nama_ruang` varchar(255) NOT NULL,
  `deskripsi_ruang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruang`
--

LOCK TABLES `ruang` WRITE;
/*!40000 ALTER TABLE `ruang` DISABLE KEYS */;
INSERT INTO `ruang` VALUES (1,'0501','RT01','Ruang Teori 1'),(2,'0502','RT02','Ruang Teori 2'),(3,'0503','RT03','Ruang Teori 3'),(4,'0504','RT04','Ruang Teori 4'),(5,'0505','RT05','Ruang Teori 5'),(6,'0506','RT06','Ruang Teori 6'),(7,'0507','RT07','Ruang Teori 7'),(8,'0508','LPY1','Laboratorium Proyek 1'),(9,'0615','LSI1','Laboratorium Sistem Informasi 1'),(10,'0617','LSI2','Laboratorium Sistem Informasi 2'),(11,'0618','LSI3','Laboratorium Sistem Informasi 3'),(12,'0619','LPY2','Laboratorium Proyek 2'),(13,'0620','LPY3','Laboratorium Proyek 3'),(14,'0701','LPR1','Laboratorium Pemrograman 1'),(15,'0702','LPR2','Laboratorium Pemrograman 2'),(16,'0703','LPR3','Laboratorium Pemrograman 3'),(17,'0704','LPR4','Laboratorium Pemrograman 4'),(18,'0705','LPR5','Laboratorium Pemrograman 5'),(19,'0706','LPR6','Laboratorium Pemrograman 6'),(20,'0707','LKJ1','Laboratorium Keamanan Jaringan 1'),(21,'0708','LPR7','Laboratorium Pemrograman 7'),(22,'0713','LKJ2','Laboratorium Keamanan Jaringan 2'),(23,'0714','LPR8','Laboratorium Pemrograman 8'),(24,'0715','LKJ3','Laboratorium Keamanan Jaringan 3'),(25,'0716','LIG1','Laboratorium Visi Komputer 1'),(26,'0717','RT08','Ruang Teori 8'),(27,'0718','LIG2','Laboratorium Visi Komputer 2'),(28,'0719','LPY4','Laboratorium Proyek 4'),(29,'0720','LAI1','Laboratorium Kecerdasan Buatan 1'),(30,'0801','L DTS','Laboratorium DTS'),(31,'0805','RT09','Ruang Teori 9'),(32,'0806','RT10','Ruang Teori 10'),(33,'1001','RT11','Ruang Teori 11'),(34,'1002','ROL1','Ruang Online 1'),(35,'1003','ROL2','Ruang Online 2'),(36,'1004','ROL3','Ruang Online 3');
/*!40000 ALTER TABLE `ruang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_65_21_student`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_65_21_student`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_65_21_student` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_65_21_student`;

--
-- Table structure for table `dosen`
--

DROP TABLE IF EXISTS `dosen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dosen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_dosen` varchar(255) NOT NULL,
  `nama_dosen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dosen`
--

LOCK TABLES `dosen` WRITE;
/*!40000 ALTER TABLE `dosen` DISABLE KEYS */;
INSERT INTO `dosen` VALUES (1,'D001','Abdul Chalim, SAg., MPd.I'),(2,'D002','Ade Ismail'),(3,'D003','Agung Nugroho Pramudhita ST., MT.'),(4,'D004','Ahmadi Yuli Ananta ST., MM.'),(5,'D005','Ane Fany Novitasari, SH.MKn.'),(6,'D006','Annisa Puspa Kirana MKom.'),(7,'D007','Annisa Taufika Firdausi ST., MT.'),(8,'D008','Anugrah Nur Rahmanto SSn., MDs.'),(9,'D009','Ariadi Retno Ririd SKom., MKom.'),(10,'D010','Arie Rachmad Syulistyo SKom., MKom.'),(11,'D011','Arief Prasetyo SKom., MKom.'),(12,'D012','Arwin Sumari ST., MT., DR.'),(13,'D013','Atiqah Nurul Asri SPd., MPd.'),(14,'D014','Bagas Satya Dian Nugraha, ST., MT.'),(15,'D015','Banni Satria Andoko, S. Kom., M.MSI'),(16,'D016','Budi Harijanto ST., MMKom.'),(17,'D017','Cahya Rahmad ST., MKom. DR.Eng'),(18,'D018','Candra Bella Vista SKom., MT.'),(19,'D019','Candrasena Setiadi ST., MMT.'),(20,'D020','Deasy Sandhya Elya Ikawati SSi., MSi.'),(21,'D021','Deddy Kusbianto PA Ir. MMKom.'),(22,'D022','Dhebys Suryani SKom. MT.'),(23,'D023','Dian Hanifudin Subhi SKom., MT.'),(24,'D024','Dika Rizky Yunianto SKom., MKom.'),(25,'D025','Dimas Wahyu Wibowo ST., MT.'),(26,'D026','Dodit Supriyanto SKom., MT.'),(27,'D027','Dwi Puspitasari SKom., MKom.'),(28,'D028','Eka Larasati Amalia, SST., MT.'),(29,'D029','Ekojono, ST., M.Kom.'),(30,'D030','Elok Nur Hamdana, ST., MT'),(31,'D031','Erfan Rohadi, ST., MEng., PhD.'),(32,'D032','Faiz Ushbah Mubarok, SPd., MPd.'),(33,'D033','Farid Angga Pribadi, SKom.,MKom.'),(34,'D034','Farida Ulfa, SPd., MPd.'),(35,'D035','Gunawan Budi Prasetyo, ST., MMT., Ph.D.'),(36,'D036','Habibie Ed Dien, MT.'),(37,'D037','Hairus'),(38,'D038','Hendra Pradibta, SE., M.Sc.'),(39,'D039','Ika Kusumaning Putri, MT.'),(40,'D040','Imam Fahrur Rozi, ST., MT.'),(41,'D041','Indra Dharma Wijaya, ST., MMT.'),(42,'D042','Irsyad Arif Mashudi, M.Kom'),(43,'D043','Kadek Suarjuna Batubulan, SKom, MT.'),(44,'D044','Luqman Affandi, SKom., MMSI.'),(45,'D045','M. Hasyim Ratsanjani'),(46,'D046','Mamluatul Haniah'),(47,'D047','Meyti Eka Apriyani ST., MT.'),(48,'D048','Milyun Nima Shoumi'),(49,'D049','Moch. Zawaruddin Abdullah, S.ST., M.Kom'),(50,'D050','Moh. Amin'),(51,'D051','Muhammad Afif Hendrawan, S.Kom.'),(52,'D052','Muhammad Shulhan Khairy, SKom., MKom.'),(53,'D053','Muhammad Unggul Pamenang, SSt., MT.'),(54,'D054','Mungki Astiningrum, ST., MKom.'),(55,'D055','Mustika Mentari, SKom., MKom.'),(56,'D056','Noprianto'),(57,'D057','Odhitya Desta Triswidrananta, SPd., MPd.'),(58,'D058','Pramana Yoga Saputra, SKom., MMT.'),(59,'D059','Putra Prima A., ST., MKom.'),(60,'D060','Rakhmat Arianto SST., MKom.'),(61,'D061','Rawansyah., Drs., MPd.'),(62,'D062','Retno Damayanti, SPd.'),(63,'D063','Ridwan Rismanto, SST., MKom.'),(64,'D064','Rizki Putri Ramadhani, S.S., M.Pd.'),(65,'D065','Rizky Ardiansyah, SKom., MT.'),(66,'D066','Robby Anggriawan SE., ME.'),(67,'D067','Rokhimatul Wakhidah SPd. MT.'),(68,'D068','Rosa Andrie Asmara, ST., MT., Dr. Eng.'),(69,'D069','Rudy Ariyanto, ST., MCs.'),(70,'D070','Satrio Binusa S, SS, M.Pd'),(71,'D071','Septian Enggar Sukmana, SPd., MT.'),(72,'D072','Shohib Muslim'),(73,'D073','Siti Romlah, Dra., M.M.'),(74,'D074','Sofyan Noor Arief, S.ST., M.Kom.'),(75,'D075','Ulla Delfiana Rosiani, ST., MT.'),(76,'D076','Usman Nurhasan, S.Kom., MT.'),(77,'D077','Very Sugiarto, SPd., MKom.'),(78,'D078','Vipkas Al Hadid Firdaus, ST.,MT.'),(79,'D079','Vivi Nur Wijayaningrum, S.Kom, M.Kom'),(80,'D080','Vivin Ayu Lestari, SPd.'),(81,'D081','Widaningsih Condrowardhani, SH., MH.'),(82,'D082','Wilda Imama Sabilla, S.Kom., M.Kom.'),(83,'D083','Yoppy Yunhasnawa, SST., MSc.'),(84,'D084','Yuri Ariyanto, SKom., MKom.'),(85,'D085','Zulmy Faqihuddin Putera, S.Pd., M.Pd');
/*!40000 ALTER TABLE `dosen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hari`
--

DROP TABLE IF EXISTS `hari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_hari` varchar(255) NOT NULL,
  `nama_hari` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hari`
--

LOCK TABLES `hari` WRITE;
/*!40000 ALTER TABLE `hari` DISABLE KEYS */;
INSERT INTO `hari` VALUES (1,'001','Senin'),(2,'002','Selasa'),(3,'003','Rabu'),(4,'004','Kamis'),(5,'005','Jumat'),(6,'006','Sabtu'),(7,'007','Minggu');
/*!40000 ALTER TABLE `hari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jadwal`
--

DROP TABLE IF EXISTS `jadwal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jadwal` varchar(255) NOT NULL,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_dosen` varchar(255) NOT NULL,
  `kode_mk` varchar(255) NOT NULL,
  `kode_ruang` varchar(255) NOT NULL,
  `kode_hari` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=371 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jadwal`
--

LOCK TABLES `jadwal` WRITE;
/*!40000 ALTER TABLE `jadwal` DISABLE KEYS */;
INSERT INTO `jadwal` VALUES (1,'1','2021020101','D001','02001','0504','001','7','9'),(2,'2','2021010103','D001','02001','0506','002','9','11'),(3,'3','2021010105','D001','02001','0806','003','10','12'),(4,'4','2021010102','D001','02001','0506','004','1','3'),(5,'5','2021010106','D001','02001','0806','004','4','6'),(6,'6','2021010101','D001','02001','0506','004','7','9'),(7,'7','2021010104','D001','02001','0506','005','10','12'),(8,'8','2021010206','D002','02037','0702','001','7','12'),(9,'9','2021020202','D002','02036','0708','003','2','4'),(10,'10','2021010205','D002','02037','0713','004','1','6'),(11,'11','2021020209','D002','02025','0719','004','7','12'),(12,'12','2021020301','D003','02012','0508','002','1','4'),(13,'13','2021020302','D003','02012','0508','002','1','4'),(14,'14','2021010201','D003','02017','0719','003','2','5'),(15,'15','2021010202','D003','02017','0719','003','2','5'),(16,'16','2021010203','D003','02017','0507','005','2','5'),(17,'17','2021010106','D004','02028','0704','001','1','3'),(18,'18','2021020203','D004','02032','0507','001','10','12'),(19,'19','2021010201','D004','02034','0617','002','7','12'),(20,'20','2021020203','D004','02032','0708','004','1','6'),(21,'21','2021020104','D005','02016','0717','001','1','3'),(22,'22','2021020108','D005','02016','0504','001','4','6'),(23,'23','2021020106','D005','02016','0805','001','10','12'),(24,'24','2021020105','D005','02016','0502','002','1','3'),(25,'25','2021020102','D005','02016','0806','002','4','6'),(26,'26','2021020103','D005','02016','0502','003','4','6'),(27,'27','2021020107','D005','02016','0806','004','1','3'),(28,'28','2021020109','D005','02016','0502','005','1','3'),(29,'29','2021010105','D006','02010','0701','002','1','3'),(30,'30','2021010105','D006','02030','0618','004','1','6'),(31,'31','2021010203','D006','02037','0705','004','7','12'),(32,'32','2021010204','D006','02037','0619','005','7','12'),(33,'33','2021010103','D007','02011','0705','002','2','6'),(34,'34','2021020101','D007','02038','0503','003','3','5'),(35,'35','2021020102','D007','02038','0503','003','3','5'),(36,'36','2021010102','D007','02011','0615','004','8','12'),(37,'37','2021010101','D007','02011','0703','005','2','6'),(38,'38','2021010306','D008','02012','0619','001','2','5'),(39,'39','2021020203','D008','02036','0716','003','2','4'),(40,'40','2021020104','D008','02038','0505','004','4','6'),(41,'41','2021020105','D008','02038','0505','004','4','6'),(42,'42','2021010304','D008','02012','0507','005','9','12'),(43,'43','2021010305','D008','02012','0507','005','9','12'),(44,'44','2021020103','D009','02035','0505','002','7','10'),(45,'45','2021020104','D009','02035','0505','002','7','10'),(46,'46','2021020204','D009','02005','0704','003','7','12'),(47,'47','2021020203','D009','02005','0705','005','1','6'),(48,'48','2021010103','D010','02026','0806','001','3','4'),(49,'49','2021010202','D010','02023','0704','001','8','11'),(50,'50','2021010202','D010','02023','0713','002','7','10'),(51,'51','2021010201','D010','02023','0705','003','7','10'),(52,'52','2021010201','D010','02023','0716','005','8','11'),(53,'53','2021010201','D011','02019','0718','002','1','5'),(54,'54','2021010203','D011','02019','0706','004','1','5'),(55,'55','2021010204','D011','02019','0716','004','8','12'),(56,'56','2021010202','D011','02019','0706','005','1','5'),(57,'57','2021020204','D012','02018','0702','001','1','5'),(58,'58','2021020203','D012','02018','0619','002','1','5'),(59,'59','2021010204','D012','02020','0704','002','9','11'),(60,'60','2021010302','D013','02008','0805','002','4','6'),(61,'61','2021020109','D013','02007','0805','002','7','9'),(62,'62','2021010301','D013','02009','0717','003','4','6'),(63,'63','2021020101','D013','02008','0717','003','7','9'),(64,'64','2021020401','D013','02009','0717','004','4','6'),(65,'65','2021020107','D013','02008','0717','005','2','4'),(66,'66','2021020102','D013','02008','0506','005','7','9'),(67,'67','2021020301','D014','02017','0720','004','1','4'),(68,'68','2021020302','D014','02017','0720','004','1','4'),(69,'69','2021020303','D014','02017','0714','005','2','5'),(70,'70','2021020308','D014','02017','0714','005','7','10'),(71,'71','2021020206','D015','02032','0720','002','3','5'),(72,'72','2021020206','D015','02005','0619','002','7','12'),(73,'73','2021020205','D015','02005','0713','003','7','12'),(74,'74','2021020206','D015','02033','0701','004','7','12'),(75,'75','2021020103','D016','02038','0506','001','1','3'),(76,'76','2021020204','D016','02032','0615','001','7','9'),(77,'77','2021010103','D016','02038','0501','004','4','6'),(78,'78','2021010104','D016','02038','0501','004','4','6'),(79,'79','2021020204','D016','02033','0719','005','7','12'),(80,'80','2021020106','D017','02004','0805','004','3','6'),(81,'81','2021020302','D017','02027','0702','004','7','12'),(82,'82','2021020301','D017','02027','0704','005','1','6'),(83,'83','2021020109','D017','02002','0717','005','7','10'),(84,'84','2021020302','D018','02039','0701','001','1','6'),(85,'85','2021010203','D018','02013','0501','001','10','12'),(86,'86','2021010204','D018','02013','0501','001','10','12'),(87,'87','2021020301','D019','02022','0620','001','7','12'),(88,'88','2021020302','D019','02022','0702','005','1','6'),(89,'89','2021020108','D020','02004','0502','004','9','12'),(90,'90','2021020107','D020','02004','0502','005','7','10'),(91,'91','2021020207','D021','02005','0615','001','1','6'),(92,'92','2021020207','D021','02032','0707','002','1','3'),(93,'93','2021020207','D021','02033','0718','003','1','6'),(94,'94','2021010303','D021','02012','0703','003','8','11'),(95,'95','2021010204','D022','02033','0704','003','1','6'),(96,'96','2021010205','D022','02033','0706','003','7','12'),(97,'97','2021020306','D022','02012','0504','005','1','4'),(98,'98','2021010205','D023','02023','0508','001','1','4'),(99,'99','2021020206','D023','02025','0706','003','1','6'),(100,'100','2021010206','D023','02023','0618','003','8','11'),(101,'101','2021010205','D023','02023','0701','005','1','4'),(102,'102','2021010206','D023','02023','0705','005','7','10'),(103,'103','2021010201','D024','02037','0713','001','1','6'),(104,'104','2021010103','D024','02010','0615','001','10','12'),(105,'105','2021010103','D024','02010','0619','003','1','6'),(106,'106','2021010202','D024','02037','0701','005','7','12'),(107,'107','2021020305','D025','02024','0615','001','1','6'),(108,'108','2021020306','D025','02022','0713','002','1','6'),(109,'109','2021020304','D025','02017','0620','005','1','4'),(110,'110','2021020305','D025','02017','0620','005','1','4'),(111,'111','2021020305','D026','02015','0508','003','7','12'),(112,'112','2021020306','D026','02041','0701','004','1','6'),(113,'113','2021020103','D027','02010','0501','002','4','6'),(114,'114','2021020104','D027','02010','0501','002','4','6'),(115,'115','2021010106','D027','02035','0707','003','1','4'),(116,'116','2021020103','D027','02010','0615','004','7','12'),(117,'117','2021020104','D027','02010','0617','005','1','6'),(118,'118','2021010104','D028','02026','0504','002','1','4'),(119,'119','2021020107','D028','02035','0503','002','8','11'),(120,'120','2021020108','D028','02035','0503','002','8','11'),(121,'121','2021010105','D028','02026','0505','003','3','6'),(122,'122','2021010106','D028','02026','0505','003','3','6'),(123,'123','2021020209','D029','02032','0503','001','7','9'),(124,'124','2021020204','D029','02036','0703','003','1','3'),(125,'125','2021020205','D029','02036','0703','003','1','3'),(126,'126','2021020209','D029','02033','0508','004','1','6'),(127,'127','2021020206','D029','02036','0501','005','1','3'),(128,'128','2021020207','D029','02036','0501','005','1','3'),(129,'129','2021020109','D030','02010','0716','001','4','6'),(130,'130','2021020108','D030','02010','0715','002','2','4'),(131,'131','2021020201','D030','02036','0502','003','1','3'),(132,'132','2021020109','D030','02030','0620','004','1','6'),(133,'133','2021020108','D030','02030','0615','005','1','6'),(134,'134','2021020202','D031','02032','0507','001','7','9'),(135,'135','2021010203','D031','02020','0718','002','7','9'),(136,'136','2021010201','D031','02020','0501','004','7','9'),(137,'137','2021010202','D031','02020','0501','004','7','9'),(138,'138','2021020202','D031','02033','0707','005','7','12'),(139,'139','2021020104','D032','02008','0806','001','7','9'),(140,'140','2021020103','D032','02008','0717','002','1','3'),(141,'141','2021020403','D032','02009','0502','002','10','12'),(142,'142','2021010304','D032','02009','0506','003','4','6'),(143,'143','2021020402','D032','02009','0504','004','4','6'),(144,'144','2021020105','D032','02009','0717','004','8','10'),(145,'145','2021010303','D032','02009','0806','005','7','9'),(146,'146','2021020203','D033','02037','0716','003','7','12'),(147,'147','2021020108','D034','02008','0502','001','1','3'),(148,'148','2021020106','D034','02008','0502','002','7','9'),(149,'149','2021010305','D034','02009','0805','003','4','6'),(150,'150','2021010306','D034','02009','0506','004','4','6'),(151,'151','2021020208','D035','02018','0618','002','2','6'),(152,'152','2021020307','D035','02041','0716','002','7','12'),(153,'153','2021020308','D035','02041','0716','005','1','6'),(154,'154','2021020207','D035','02018','0615','005','8','12'),(155,'155','2021020209','D036','02036','0704','001','4','6'),(156,'156','2021020304','D036','02022','0508','001','7','12'),(157,'157','2021020303','D036','02022','0704','002','1','6'),(158,'158','2021020202','D036','02025','0706','002','7','12'),(159,'159','2021010102','D037','02016','0506','001','7','9'),(160,'160','2021010107','D037','02016','0806','002','7','9'),(161,'161','2021010104','D037','02016','0504','002','10','12'),(162,'162','2021020101','D037','02016','0717','003','10','12'),(163,'163','2021010106','D037','02016','0717','004','1','3'),(164,'164','2021010103','D037','02016','0504','005','7','9'),(165,'165','2021010101','D037','02016','0806','005','10','12'),(166,'166','2021020307','D038','02012','0714','002','2','5'),(167,'167','2021020209','D038','02020','0620','003','10','12'),(168,'168','2021010301','D038','02012','0503','005','1','4'),(169,'169','2021010302','D038','02012','0503','005','1','4'),(170,'170','2021010101','D039','02040','0503','001','1','3'),(171,'171','2021010102','D039','02040','0503','001','1','3'),(172,'172','2021020209','D039','02037','0703','002','1','6'),(173,'173','2021010102','D039','02040','0617','003','8','12'),(174,'174','2021010101','D039','02040','0617','004','2','6'),(175,'175','2021020109','D040','02003','0713','001','9','11'),(176,'176','2021010202','D040','02033','0619','003','7','12'),(177,'177','2021020109','D040','02003','0718','004','7','12'),(178,'178','2021010101','D041','02038','0507','001','4','6'),(179,'179','2021010102','D041','02038','0507','001','4','6'),(180,'180','2021010101','D041','02028','0501','002','1','3'),(181,'181','2021010102','D041','02028','0501','002','1','3'),(182,'182','2021020205','D042','02037','0703','001','7','12'),(183,'183','2021020204','D042','02037','0715','004','7','12'),(184,'184','2021020101','D042','02035','0505','005','2','5'),(185,'185','2021020102','D042','02035','0505','005','2','5'),(186,'186','2021010204','D043','02017','0705','001','2','5'),(187,'187','2021010205','D043','02017','0505','002','2','5'),(188,'188','2021010204','D043','02017','0505','002','2','5'),(189,'189','2021020208','D043','02036','0507','004','7','9'),(190,'190','2021020205','D043','02025','0720','005','1','6'),(191,'191','2021020201','D044','02032','0706','001','3','5'),(192,'192','2021010205','D044','02021','0618','001','10','12'),(193,'193','2021010206','D044','02021','0618','001','10','12'),(194,'194','2021020206','D044','02020','0707','004','3','5'),(195,'195','2021020207','D044','02020','0707','004','3','5'),(196,'196','2021020201','D044','02033','0713','004','7','12'),(197,'197','2021020208','D045','02037','0718','001','1','6'),(198,'198','2021020107','D045','02010','0702','001','9','11'),(199,'199','2021020107','D045','02030','0615','003','1','6'),(200,'200','2021020207','D045','02037','0619','004','7','12'),(201,'201','2021020103','D046','02003','0501','001','4','6'),(202,'202','2021020101','D046','02010','0617','002','3','5'),(203,'203','2021020101','D046','02030','0704','004','1','6'),(204,'204','2021020209','D046','02018','0707','005','1','5'),(205,'205','2021020103','D046','02003','0702','005','7','12'),(206,'206','2021020308','D047','02022','0620','001','1','6'),(207,'207','2021020203','D047','02020','0805','001','7','9'),(208,'208','2021020201','D047','02020','0620','002','1','3'),(209,'209','2021020202','D047','02020','0620','002','1','3'),(210,'210','2021020307','D047','02022','0715','003','1','6'),(211,'211','2021020305','D048','02027','0716','002','1','6'),(212,'212','2021020201','D048','02025','0503','004','1','6'),(213,'213','2021020208','D048','02025','0713','005','1','6'),(214,'214','2021020306','D048','02027','0620','005','7','12'),(215,'215','2021010106','D049','02010','0716','001','7','9'),(216,'216','2021020204','D049','02025','0719','002','1','6'),(217,'217','2021020203','D049','02025','0703','002','7','12'),(218,'218','2021010106','D049','02030','0706','004','7','12'),(219,'219','2021020106','D050','02001','0717','001','4','6'),(220,'220','2021020103','D050','02001','0506','001','7','9'),(221,'221','2021020105','D050','02001','0504','001','10','12'),(222,'222','2021020109','D050','02001','0805','003','1','3'),(223,'223','2021020102','D050','02001','0504','003','8','10'),(224,'224','2021020104','D050','02001','0805','004','7','9'),(225,'225','2021020107','D050','02001','0805','004','10','12'),(226,'226','2021020108','D050','02001','0805','005','7','9'),(227,'227','2021020206','D051','02037','0715','001','1','6'),(228,'228','2021020208','D051','02020','0508','003','2','4'),(229,'229','2021020306','D051','02039','0701','003','7','12'),(230,'230','2021020305','D051','02039','0619','004','1','6'),(231,'231','2021010104','D052','02010','0701','001','4','6'),(232,'232','2021020201','D052','02005','0708','002','7','12'),(233,'233','2021020202','D052','02005','0720','003','7','12'),(234,'234','2021010104','D052','02030','0618','005','1','6'),(235,'235','2021020105','D053','02010','0708','001','7','9'),(236,'236','2021020105','D053','02030','0704','005','7','12'),(237,'237','2021020101','D054','02003','0703','001','2','4'),(238,'238','2021020102','D054','02003','0703','001','2','4'),(239,'239','2021010205','D054','02013','0501','001','7','9'),(240,'240','2021020102','D054','02029','0620','002','7','12'),(241,'241','2021020101','D054','02029','0720','004','7','12'),(242,'242','2021020106','D055','02003','0716','001','1','3'),(243,'243','2021020304','D055','02027','0718','004','1','6'),(244,'244','2021020106','D055','02029','0618','004','7','12'),(245,'245','2021020303','D055','02027','0718','005','7','12'),(246,'246','2021020107','D056','02003','0708','001','4','6'),(247,'247','2021020303','D056','02015','0715','001','7','12'),(248,'248','2021020304','D056','02015','0713','003','1','6'),(249,'249','2021020107','D056','02029','0702','003','7','12'),(250,'250','2021020201','D057','02037','0720','001','7','12'),(251,'251','2021020305','D057','02041','0618','005','7','12'),(252,'252','2021020208','D058','02032','0502','001','10','12'),(253,'253','2021020303','D058','02041','0720','003','1','6'),(254,'254','2021020208','D058','02033','0716','004','1','6'),(255,'255','2021020304','D058','02041','0615','005','7','12'),(256,'256','2021010203','D059','02023','0719','001','1','4'),(257,'257','2021010204','D059','02023','0702','002','2','5'),(258,'258','2021020207','D059','02025','0701','002','7','12'),(259,'259','2021010204','D059','02023','0718','005','2','5'),(260,'260','2021010203','D059','02023','0715','005','8','11'),(261,'261','2021020308','D060','02039','0619','001','7','12'),(262,'262','2021020201','D060','02018','0615','003','7','11'),(263,'263','2021020202','D060','02018','0708','005','1','5'),(264,'264','2021020307','D060','02039','0708','005','7','12'),(265,'265','2021020101','D061','02004','0717','002','9','12'),(266,'266','2021020104','D061','02004','0504','003','3','6'),(267,'267','2021020105','D061','02004','0805','003','7','10'),(268,'268','2021020102','D061','02004','0806','004','8','11'),(269,'269','2021020103','D061','02004','0806','005','2','5'),(270,'270','2021010106','D062','02011','0615','002','7','11'),(271,'271','2021010104','D062','02011','0703','004','8','12'),(272,'272','2021010105','D062','02011','0715','005','1','5'),(273,'273','2021010105','D062','02038','0501','005','10','12'),(274,'274','2021010106','D062','02038','0501','005','10','12'),(275,'275','2021020209','D063','02005','0719','002','7','12'),(276,'276','2021010101','D063','02026','0507','003','1','4'),(277,'277','2021010102','D063','02026','0507','003','1','4'),(278,'278','2021020208','D063','02005','0708','003','7','12'),(279,'279','2021010301','D064','02006','0805','001','1','3'),(280,'280','2021010303','D064','02006','0506','001','4','6'),(281,'281','2021010302','D064','02006','0805','002','1','3'),(282,'282','2021010305','D064','02006','0506','003','1','3'),(283,'283','2021010306','D064','02006','0504','004','1','3'),(284,'284','2021010304','D064','02006','0805','005','2','4'),(285,'285','2021020102','D065','02010','0708','002','1','3'),(286,'286','2021020102','D065','02030','0615','004','1','6'),(287,'287','2021010206','D066','02013','0503','001','4','6'),(288,'288','2021020104','D067','02003','0805','001','4','6'),(289,'289','2021020105','D067','02003','0805','001','4','6'),(290,'290','2021020105','D067','02029','0705','003','1','6'),(291,'291','2021010201','D067','02013','0506','004','10','12'),(292,'292','2021020104','D067','02029','0703','005','7','12'),(293,'293','2021020308','D068','02027','0714','002','7','12'),(294,'294','2021020307','D068','02027','0703','004','1','6'),(295,'295','2021020303','D069','02039','0618','002','7','12'),(296,'296','2021010206','D069','02033','0702','004','1','6'),(297,'297','2021020406','D070','02009','0502','001','4','6'),(298,'298','2021020405','D070','02009','0806','001','10','12'),(299,'299','2021020404','D070','02009','0717','002','4','6'),(300,'300','2021020407','D070','02009','0806','003','4','6'),(301,'301','2021020306','D071','02017','0505','001','1','4'),(302,'302','2021020307','D071','02017','0505','001','1','4'),(303,'303','2021020108','D071','02003','0714','001','7','9'),(304,'304','2021020308','D071','02017','0501','003','1','4'),(305,'305','2021020108','D071','02029','0719','004','1','6'),(306,'306','2021010303','D072','02014','0720','001','1','3'),(307,'307','2021010304','D072','02014','0720','001','1','3'),(308,'308','2021010305','D072','02014','0714','001','10','12'),(309,'309','2021010306','D072','02014','0714','001','10','12'),(310,'310','2021010301','D072','02014','0501','005','7','9'),(311,'311','2021010302','D072','02014','0501','005','7','9'),(312,'312','2021020305','D073','02012','0714','003','1','4'),(313,'313','2021020106','D074','02038','0507','002','3','5'),(314,'314','2021020107','D074','02038','0507','002','3','5'),(315,'315','2021020109','D074','02038','0805','002','10','12'),(316,'316','2021020108','D074','02038','0806','003','7','9'),(317,'317','2021010206','D074','02019','0719','005','1','5'),(318,'318','2021010205','D074','02019','0713','005','7','11'),(319,'319','2021010105','D075','02028','0501','001','1','3'),(320,'320','2021020304','D075','02039','0706','002','1','6'),(321,'321','2021020301','D075','02039','0618','003','1','6'),(322,'322','2021010103','D075','02028','0503','003','8','10'),(323,'323','2021010104','D075','02028','0503','003','8','10'),(324,'324','2021020303','D076','02012','0618','001','1','4'),(325,'325','2021020304','D076','02012','0618','001','1','4'),(326,'326','2021020307','D076','02015','0701','001','7','12'),(327,'327','2021020308','D076','02015','0718','003','7','12'),(328,'328','2021020306','D077','02015','0705','001','7','12'),(329,'329','2021020202','D077','02037','0715','004','1','6'),(330,'330','2021020205','D078','02018','0615','002','1','5'),(331,'331','2021020301','D078','02015','0715','002','7','12'),(332,'332','2021020302','D078','02015','0617','003','1','6'),(333,'333','2021020206','D078','02018','0706','005','8','12'),(334,'334','2021010105','D079','02040','0503','002','4','6'),(335,'335','2021010106','D079','02040','0503','002','4','6'),(336,'336','2021010105','D079','02031','0705','002','8','12'),(337,'337','2021010106','D079','02031','0715','003','8','12'),(338,'338','2021020105','D079','02035','0506','005','2','5'),(339,'339','2021010103','D080','02040','0505','001','7','9'),(340,'340','2021010104','D080','02040','0505','001','7','9'),(341,'341','2021020109','D080','02035','0506','002','1','4'),(342,'342','2021010104','D080','02031','0701','003','2','6'),(343,'343','2021010103','D080','02031','0508','004','8','12'),(344,'344','2021020405','D081','02014','0507','001','1','3'),(345,'345','2021020406','D081','02014','0507','001','1','3'),(346,'346','2021020403','D081','02014','0503','002','1','3'),(347,'347','2021020404','D081','02014','0503','002','1','3'),(348,'348','2021020407','D081','02014','0506','003','8','10'),(349,'349','2021020401','D081','02014','0501','004','1','3'),(350,'350','2021020402','D081','02014','0501','004','1','3'),(351,'351','2021010202','D082','02013','0806','002','1','3'),(352,'352','2021010101','D082','02010','0707','002','4','6'),(353,'353','2021010102','D082','02010','0707','002','4','6'),(354,'354','2021010101','D082','02030','0720','002','7','12'),(355,'355','2021010102','D082','02030','0508','005','1','6'),(356,'356','2021020106','D083','02010','0617','001','7','9'),(357,'357','2021020302','D083','02041','0508','002','7','12'),(358,'358','2021020106','D083','02030','0719','003','7','12'),(359,'359','2021020301','D083','02041','0708','004','7','12'),(360,'360','2021020205','D084','02032','0708','001','1','3'),(361,'361','2021010203','D084','02033','0620','003','1','6'),(362,'362','2021020204','D084','02020','0505','004','1','3'),(363,'363','2021020205','D084','02020','0505','004','1','3'),(364,'364','2021020205','D084','02033','0620','004','7','12'),(365,'365','2021010202','D085','02006','0504','001','1','3'),(366,'366','2021010204','D085','02006','0502','001','7','9'),(367,'367','2021010205','D085','02006','0504','002','7','9'),(368,'368','2021010203','D085','02006','0806','002','10','12'),(369,'369','2021010206','D085','02006','0806','003','1','3'),(370,'370','2021010201','D085','02006','0502','004','2','4');
/*!40000 ALTER TABLE `jadwal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jp`
--

DROP TABLE IF EXISTS `jp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_jp` varchar(255) NOT NULL,
  `jp_mulai` varchar(255) NOT NULL,
  `jp_selesai` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jp`
--

LOCK TABLES `jp` WRITE;
/*!40000 ALTER TABLE `jp` DISABLE KEYS */;
INSERT INTO `jp` VALUES (1,'1','07:00:00','07:50:00'),(2,'2','07:50:00','08:40:00'),(3,'3','08:40:00','09:30:00'),(4,'4','09:40:00','10:30:00'),(5,'5','10:30:00','11:20:00'),(6,'6','11:20:00','12:10:00'),(7,'7','12:50:00','13:40:00'),(8,'8','13:40:00','14:30:00'),(9,'9','14:30:00','15:20:00'),(10,'10','15:30:00','15:30:00'),(11,'11','16:20:00','17:10:00'),(12,'12','17:10:00','18:00:00');
/*!40000 ALTER TABLE `jp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kelas`
--

DROP TABLE IF EXISTS `kelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_kelas` varchar(255) NOT NULL,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_kelas` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kelas`
--

LOCK TABLES `kelas` WRITE;
/*!40000 ALTER TABLE `kelas` DISABLE KEYS */;
INSERT INTO `kelas` VALUES (1,'2021010101','001','MI-1A'),(2,'2021010102','001','MI-1B'),(3,'2021010103','001','MI-1C'),(4,'2021010104','001','MI-1D'),(5,'2021010105','001','MI-1E'),(6,'2021010106','001','MI-1F'),(7,'2021010107','001','MI-1H'),(8,'2021010201','001','MI-2A'),(9,'2021010202','001','MI-2B'),(10,'2021010203','001','MI-2C'),(11,'2021010204','001','MI-2D'),(12,'2021010205','001','MI-2E'),(13,'2021010206','001','MI-2F'),(14,'2021010301','001','MI-3A'),(15,'2021010302','001','MI-3B'),(16,'2021010303','001','MI-3C'),(17,'2021010304','001','MI-3D'),(18,'2021010305','001','MI-3E'),(19,'2021010306','001','MI-3F'),(20,'2021020101','002','TI-1A'),(21,'2021020102','002','TI-1B'),(22,'2021020103','002','TI-1C'),(23,'2021020104','002','TI-1D'),(24,'2021020105','002','TI-1E'),(25,'2021020106','002','TI-1F'),(26,'2021020107','002','TI-1G'),(27,'2021020108','002','TI-1H'),(28,'2021020109','002','TI-1I'),(29,'2021020201','002','TI-2A'),(30,'2021020202','002','TI-2B'),(31,'2021020203','002','TI-2C'),(32,'2021020204','002','TI-2D'),(33,'2021020205','002','TI-2E'),(34,'2021020206','002','TI-2F'),(35,'2021020207','002','TI-2G'),(36,'2021020208','002','TI-2H'),(37,'2021020209','002','TI-2I'),(38,'2021020301','002','TI-3A'),(39,'2021020302','002','TI-3B'),(40,'2021020303','002','TI-3C'),(41,'2021020304','002','TI-3D'),(42,'2021020305','002','TI-3E'),(43,'2021020306','002','TI-3F'),(44,'2021020307','002','TI-3G'),(45,'2021020308','002','TI-3H'),(46,'2021020401','002','TI-4A'),(47,'2021020402','002','TI-4B'),(48,'2021020403','002','TI-4C'),(49,'2021020404','002','TI-4D'),(50,'2021020405','002','TI-4E'),(51,'2021020406','002','TI-4F'),(52,'2021020407','002','TI-4G');
/*!40000 ALTER TABLE `kelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mk`
--

DROP TABLE IF EXISTS `mk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_mk` varchar(255) NOT NULL,
  `nama_mk` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mk`
--

LOCK TABLES `mk` WRITE;
/*!40000 ALTER TABLE `mk` DISABLE KEYS */;
INSERT INTO `mk` VALUES (1,'02001','Agama'),(2,'02002','Alajabar Linier'),(3,'02003','Algoritma dan Struktur Data'),(4,'02004','Aljabar Linier'),(5,'02005','Analisis Dan Desan Berorientasi Objek'),(6,'02006','Bahasa Indonesia'),(7,'02007','Bahasa Inggris'),(8,'02008','Bahasa Inggris 2'),(9,'02009','Bahasa Inggris Persiapan Kerja'),(10,'02010','Basis Data'),(11,'02011','Desain Pemrograman Web'),(12,'02012','Digital Entrepreneurship'),(13,'02013','E-Business'),(14,'02014','Etika Profesi Bidang TI'),(15,'02015','Internet Of Things'),(16,'02016','Kewarganegaraan'),(17,'02017','Komputasi Multimedia'),(18,'02018','Machine Learning'),(19,'02019','Manajemen Jaringan Komputer'),(20,'02020','Manajemen Proyek'),(21,'02021','Manajemen Proyek '),(22,'02022','Pemrograman Berbasis Framework'),(23,'02023','Pemrograman Mobile'),(24,'02024','Pemrograman Multimedia'),(25,'02025','Pemrograman Web Lanjut'),(26,'02026','Pengembangan Perangkat Lunak Berbasis Object'),(27,'02027','Pengolahan Citra dan Visi Komputer'),(28,'02028','Penulisan Ilmiah'),(29,'02029','Praktikum Algoritma dan Struktur Data'),(30,'02030','Praktikum Basis Data'),(31,'02031','Praktikum Struktur Data'),(32,'02032','Proyek 1_P1'),(33,'02033','Proyek 1_P2'),(34,'02034','Proyek 2_P2'),(35,'02035','Rekayasa Perangkat Lunak'),(36,'02036','Sistem Informasi'),(37,'02037','Sistem Manajemen Basis Data'),(38,'02038','Sistem Operasi'),(39,'02039','Sistem Pendukung Keputusan'),(40,'02040','Struktur Data'),(41,'02041','Teknologi Data');
/*!40000 ALTER TABLE `mk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodi`
--

DROP TABLE IF EXISTS `prodi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prodi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_prodi` varchar(255) NOT NULL,
  `nama_prodi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodi`
--

LOCK TABLES `prodi` WRITE;
/*!40000 ALTER TABLE `prodi` DISABLE KEYS */;
INSERT INTO `prodi` VALUES (1,'001','D3 Manajemen Informatika'),(2,'002','D4 Teknik Informatika');
/*!40000 ALTER TABLE `prodi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruang`
--

DROP TABLE IF EXISTS `ruang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode_ruang` varchar(255) NOT NULL,
  `nama_ruang` varchar(255) NOT NULL,
  `deskripsi_ruang` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruang`
--

LOCK TABLES `ruang` WRITE;
/*!40000 ALTER TABLE `ruang` DISABLE KEYS */;
INSERT INTO `ruang` VALUES (1,'0501','RT01','Ruang Teori 1'),(2,'0502','RT02','Ruang Teori 2'),(3,'0503','RT03','Ruang Teori 3'),(4,'0504','RT04','Ruang Teori 4'),(5,'0505','RT05','Ruang Teori 5'),(6,'0506','RT06','Ruang Teori 6'),(7,'0507','RT07','Ruang Teori 7'),(8,'0508','LPY1','Laboratorium Proyek 1'),(9,'0615','LSI1','Laboratorium Sistem Informasi 1'),(10,'0617','LSI2','Laboratorium Sistem Informasi 2'),(11,'0618','LSI3','Laboratorium Sistem Informasi 3'),(12,'0619','LPY2','Laboratorium Proyek 2'),(13,'0620','LPY3','Laboratorium Proyek 3'),(14,'0701','LPR1','Laboratorium Pemrograman 1'),(15,'0702','LPR2','Laboratorium Pemrograman 2'),(16,'0703','LPR3','Laboratorium Pemrograman 3'),(17,'0704','LPR4','Laboratorium Pemrograman 4'),(18,'0705','LPR5','Laboratorium Pemrograman 5'),(19,'0706','LPR6','Laboratorium Pemrograman 6'),(20,'0707','LKJ1','Laboratorium Keamanan Jaringan 1'),(21,'0708','LPR7','Laboratorium Pemrograman 7'),(22,'0713','LKJ2','Laboratorium Keamanan Jaringan 2'),(23,'0714','LPR8','Laboratorium Pemrograman 8'),(24,'0715','LKJ3','Laboratorium Keamanan Jaringan 3'),(25,'0716','LIG1','Laboratorium Visi Komputer 1'),(26,'0717','RT08','Ruang Teori 8'),(27,'0718','LIG2','Laboratorium Visi Komputer 2'),(28,'0719','LPY4','Laboratorium Proyek 4'),(29,'0720','LAI1','Laboratorium Kecerdasan Buatan 1'),(30,'0801','L DTS','Laboratorium DTS'),(31,'0805','RT09','Ruang Teori 9'),(32,'0806','RT10','Ruang Teori 10'),(33,'1001','RT11','Ruang Teori 11'),(34,'1002','ROL1','Ruang Online 1'),(35,'1003','ROL2','Ruang Online 2'),(36,'1004','ROL3','Ruang Online 3');
/*!40000 ALTER TABLE `ruang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `sqlearn_web_rev`
--

/*!40000 DROP DATABASE IF EXISTS `sqlearn_web_rev`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `sqlearn_web_rev` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `sqlearn_web_rev`;

--
-- Table structure for table `case_studies`
--

DROP TABLE IF EXISTS `case_studies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `case_studies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `db_list_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `db_list_id` (`db_list_id`),
  CONSTRAINT `case_studies_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `case_studies_ibfk_2` FOREIGN KEY (`db_list_id`) REFERENCES `db_list` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case_studies`
--

LOCK TABLES `case_studies` WRITE;
/*!40000 ALTER TABLE `case_studies` DISABLE KEYS */;
INSERT INTO `case_studies` VALUES (2,'Tes',1,1,'2021-05-05 16:31:57','2021-05-05 16:31:57'),(9,'dd',5,6,'2022-02-15 17:39:45','2022-02-15 17:39:45'),(10,'dd',5,7,'2022-02-15 17:41:05','2022-02-15 17:41:05'),(32,'coba di deploy',5,39,'2022-03-29 17:48:10','2022-03-29 17:48:10'),(37,'coba auto assess',5,76,'2022-05-26 07:06:09','2022-05-26 07:06:09'),(38,'jadwal_kuliah',5,77,'2022-05-27 09:25:55','2022-05-27 09:25:55');
/*!40000 ALTER TABLE `case_studies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class_schedules`
--

DROP TABLE IF EXISTS `class_schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `class_schedules` (
  `class_id` int(11) NOT NULL,
  `schedule_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`class_id`,`schedule_id`),
  UNIQUE KEY `class_schedules_schedule_id_class_id_unique` (`class_id`,`schedule_id`),
  KEY `schedule_id` (`schedule_id`),
  CONSTRAINT `class_schedules_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `class_schedules_ibfk_2` FOREIGN KEY (`schedule_id`) REFERENCES `schedules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_schedules`
--

LOCK TABLES `class_schedules` WRITE;
/*!40000 ALTER TABLE `class_schedules` DISABLE KEYS */;
INSERT INTO `class_schedules` VALUES (1,11,'2022-03-31 16:19:48','2022-03-31 16:19:48'),(17,16,'2022-03-23 18:45:15','2022-03-23 18:45:15'),(17,31,'2022-05-20 06:23:26','2022-05-20 06:23:26'),(28,22,'2022-04-07 18:34:48','2022-04-07 18:34:48'),(28,23,'2022-04-09 18:36:26','2022-04-09 18:36:26'),(28,24,'2022-04-12 10:00:21','2022-04-12 10:00:21'),(29,18,'2022-03-26 01:52:00','2022-03-26 01:52:00'),(62,20,'2022-04-06 23:18:12','2022-04-06 23:18:12'),(62,21,'2022-04-07 09:11:08','2022-04-07 09:11:08'),(62,25,'2022-04-16 01:31:23','2022-04-16 01:31:23'),(62,26,'2022-04-18 01:21:25','2022-04-18 01:21:25'),(62,34,'2022-05-24 08:07:44','2022-05-24 08:07:44'),(62,35,'2022-05-27 10:03:31','2022-05-27 10:03:31'),(62,36,'2022-05-28 03:03:43','2022-05-28 03:03:43'),(62,37,'2022-05-28 03:32:07','2022-05-28 03:32:07'),(62,39,'2022-05-28 06:43:32','2022-05-28 06:43:32'),(64,39,'2022-05-28 06:43:32','2022-05-28 06:43:32');
/*!40000 ALTER TABLE `class_schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `semester` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'TI-4C-2021',8,1,'2021-04-17 18:09:21','2021-04-17 18:09:21'),(3,'TI-3C-2020',8,1,'2021-04-17 19:26:00','2021-04-17 19:26:00'),(12,'TI-4D-2021',8,1,'2021-05-06 07:27:11','2021-05-06 07:27:11'),(17,'TI-2D-2021',6,5,'2022-03-21 10:30:18','2022-03-21 13:18:27'),(27,'MI-2E-2022',4,5,'2022-03-21 13:20:15','2022-03-21 13:20:15'),(28,'MI-1E-2022',2,5,'2022-03-21 13:47:34','2022-03-21 13:47:34'),(29,'TI-1A-2020',2,5,'2022-03-21 16:05:22','2022-03-21 16:19:11'),(41,'TI-2C-2021',8,5,'2022-03-28 08:22:52','2022-03-28 08:22:52'),(43,'TI-2D-2022',8,5,'2022-03-28 08:23:20','2022-03-28 08:23:20'),(61,'TI-1H-2022',2,5,'2022-03-29 15:27:34','2022-03-29 15:27:34'),(62,'Kelas Demo',8,5,'2022-04-04 14:40:12','2022-04-04 14:40:12'),(63,'Coba Kelas',1,11,'2022-04-25 00:21:04','2022-04-25 00:21:04'),(64,'Internal Class',8,5,'2022-05-28 06:42:10','2022-05-28 06:42:10');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `containers`
--

DROP TABLE IF EXISTS `containers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `containers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `label_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `label_id` (`label_id`),
  CONSTRAINT `containers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `containers_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `questions_label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `containers`
--

LOCK TABLES `containers` WRITE;
/*!40000 ALTER TABLE `containers` DISABLE KEYS */;
INSERT INTO `containers` VALUES (5,'Paket Tes',5,1,'2021-06-17 04:38:50','2021-06-17 04:38:50'),(8,'ini uas ya',5,2,'2022-02-24 00:11:58','2022-02-24 00:11:58'),(9,'ini uas ya',5,1,'2022-02-24 00:12:35','2022-02-24 00:12:35'),(10,'Paket Soal E',5,2,'2022-03-23 15:50:26','2022-03-23 15:50:26'),(17,'Percobaan Open-ended',5,1,'2022-05-24 08:01:38','2022-05-24 08:01:38'),(18,'Percobaan Close-Ended',5,2,'2022-05-27 09:38:27','2022-05-27 09:38:27'),(19,'Trial - Close-Ended',5,2,'2022-05-27 10:01:57','2022-05-27 10:01:57');
/*!40000 ALTER TABLE `containers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `db_list`
--

DROP TABLE IF EXISTS `db_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `db_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `db_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `db_filename` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `db_list`
--

LOCK TABLES `db_list` WRITE;
/*!40000 ALTER TABLE `db_list` DISABLE KEYS */;
INSERT INTO `db_list` VALUES (1,'sqlearn_cs_auto_assess_tes','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(2,'sqlearn_cs_dosencoba_dd_pr9k6l','1644946596364_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(3,'sqlearn_cs_dosencoba_dd_78ayum','1644946630914_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(4,'sqlearn_cs_dosencoba_dd_73uxn3','1644946674646_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(5,'sqlearn_cs_dosencoba_dd_v3004s','1644946706201_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(6,'sqlearn_cs_dosencoba_dd_fp58ey','1644946783711_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(7,'sqlearn_cs_dosencoba_dd_1yxfzl','1644946863058_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(8,'sqlearn_cs_dosencoba_dd_dpyyd6','1644946978679_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(17,'sqlearn_cs_auto_assess_tes_45_1_key','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-03-12 04:19:11','2022-03-12 04:19:11'),(18,'sqlearn_cs_auto_assess_tes_45_1_student','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-03-12 04:19:21','2022-03-12 04:19:21'),(19,'sqlearn_cs_dosencoba_study_case_test_xx5zc9','1647794797646_92197aa7-4bd1-46d7-bcba-3789a8b91e59.sql','2022-03-20 16:46:37','2022-03-20 16:46:37'),(20,'sqlearn_cs_dosencoba_study_case_test_swgfzo','1647794894496_b0a82b02-2b58-4050-9896-62d80a16868c.sql','2022-03-20 16:48:14','2022-03-20 16:48:14'),(21,'sqlearn_cs_dosencoba_study_case_test_rt6s41','1647794926801_c7238364-f1f0-4c64-8e89-4a2186437a80.sql','2022-03-20 16:48:46','2022-03-20 16:48:46'),(22,'sqlearn_cs_dosencoba_study_case_test_0vtk0p','1647794973048_a4bab00d-8bd4-44b2-92ab-05d2094c9879.sql','2022-03-20 16:49:33','2022-03-20 16:49:33'),(27,'sqlearn_cs_dosencoba_study_case_test_hf5lmk','1647823763629_379e7ba5-b58e-4c9e-9dd3-a774eceb690f.sql','2022-03-21 00:49:23','2022-03-21 00:49:23'),(39,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-03-29 17:48:10','2022-03-29 17:48:10'),(40,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_46_1_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-07 16:08:52','2022-04-07 16:08:52'),(41,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_46_1_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-07 16:08:54','2022-04-07 16:08:54'),(42,'sqlearn_cs_auto_assess_tes_47_1_key','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-04-07 18:35:00','2022-04-07 18:35:00'),(43,'sqlearn_cs_auto_assess_tes_47_1_student','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-04-07 18:35:01','2022-04-07 18:35:01'),(44,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_48_1_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-09 18:36:38','2022-04-09 18:36:38'),(45,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_48_1_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-09 18:36:39','2022-04-09 18:36:39'),(46,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_49_1_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-12 10:06:11','2022-04-12 10:06:11'),(47,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_49_1_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-12 10:06:12','2022-04-12 10:06:12'),(48,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_50_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-12 15:16:47','2022-04-12 15:16:47'),(49,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_50_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-12 15:16:48','2022-04-12 15:16:48'),(50,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_51_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-16 01:44:51','2022-04-16 01:44:51'),(51,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_51_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-16 01:44:52','2022-04-16 01:44:52'),(52,'sqlearn_cs_auto_assess_tes_52_21_key','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-04-18 01:54:41','2022-04-18 01:54:41'),(53,'sqlearn_cs_auto_assess_tes_52_21_student','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-04-18 01:54:42','2022-04-18 01:54:42'),(54,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_53_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-21 06:03:55','2022-04-21 06:03:55'),(55,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_53_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-21 06:03:57','2022-04-21 06:03:57'),(56,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_54_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-28 04:31:15','2022-04-28 04:31:15'),(57,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_54_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-04-28 04:31:16','2022-04-28 04:31:16'),(58,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_55_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-01 03:32:23','2022-05-01 03:32:23'),(59,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_55_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-01 03:32:24','2022-05-01 03:32:24'),(60,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_56_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-13 09:16:21','2022-05-13 09:16:21'),(61,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_56_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-13 09:16:22','2022-05-13 09:16:22'),(62,'sqlearn_cs_auto_assess_tes_57_22_key','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-05-20 06:26:41','2022-05-20 06:26:41'),(63,'sqlearn_cs_auto_assess_tes_57_22_student','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-05-20 06:26:42','2022-05-20 06:26:42'),(64,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_58_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-20 06:40:37','2022-05-20 06:40:37'),(65,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_58_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-20 06:40:37','2022-05-20 06:40:37'),(66,'sqlearn_cs_auto_assess_tes_59_19_key','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-05-20 07:09:09','2022-05-20 07:09:09'),(67,'sqlearn_cs_auto_assess_tes_59_19_student','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-05-20 07:09:10','2022-05-20 07:09:10'),(68,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_60_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-24 08:04:29','2022-05-24 08:04:29'),(69,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_60_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-24 08:04:30','2022-05-24 08:04:30'),(70,'sqlearn_cs_auto_assess_tes_61_21_key','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-05-24 08:07:49','2022-05-24 08:07:49'),(71,'sqlearn_cs_auto_assess_tes_61_21_student','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-05-24 08:07:50','2022-05-24 08:07:50'),(72,'sqlearn_cs_dosencoba_jadwal_kuliah_4z6zwn','1653547975217_a045358c-8e55-4d2b-ba95-18b63c50a359.sql','2022-05-26 06:52:55','2022-05-26 06:52:55'),(73,'sqlearn_cs_dosencoba_test_upload_db_dlnchy','1653548017050_e26957f8-d56a-455d-bb02-704e46fe9d9d.sql','2022-05-26 06:53:37','2022-05-26 06:53:37'),(74,'sqlearn_cs_dosencoba_jadwal_belajar_nud7bn','1653548470245_133ce56d-952b-4fa1-9ca6-96cde20de909.sql','2022-05-26 07:01:10','2022-05-26 07:01:10'),(76,'sqlearn_cs_dosencoba_coba_auto_assess_2r10iw','1653548769485_5dd35cd3-b972-4750-b721-cb31479261cf.sql','2022-05-26 07:06:09','2022-05-26 07:06:09'),(77,'sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl','1653643555889_ac894d1f-681c-42ff-b8de-998ea63e8751.sql','2022-05-27 09:25:55','2022-05-27 09:25:55'),(78,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_62_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-27 10:04:06','2022-05-27 10:04:06'),(79,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_62_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-27 10:04:07','2022-05-27 10:04:07'),(80,'sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_62_21_key','1653643555889_ac894d1f-681c-42ff-b8de-998ea63e8751.sql','2022-05-27 10:04:08','2022-05-27 10:04:08'),(81,'sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_62_21_student','1653643555889_ac894d1f-681c-42ff-b8de-998ea63e8751.sql','2022-05-27 10:04:16','2022-05-27 10:04:16'),(82,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_63_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-28 03:04:45','2022-05-28 03:04:45'),(83,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_63_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-28 03:04:46','2022-05-28 03:04:46'),(84,'sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_63_21_key','1653643555889_ac894d1f-681c-42ff-b8de-998ea63e8751.sql','2022-05-28 03:04:47','2022-05-28 03:04:47'),(85,'sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_63_21_student','1653643555889_ac894d1f-681c-42ff-b8de-998ea63e8751.sql','2022-05-28 03:04:56','2022-05-28 03:04:56'),(86,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_64_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-28 03:47:29','2022-05-28 03:47:29'),(87,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_64_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-28 03:47:30','2022-05-28 03:47:30'),(88,'sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_64_21_key','1653643555889_ac894d1f-681c-42ff-b8de-998ea63e8751.sql','2022-05-28 03:47:31','2022-05-28 03:47:31'),(89,'sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_64_21_student','1653643555889_ac894d1f-681c-42ff-b8de-998ea63e8751.sql','2022-05-28 03:47:40','2022-05-28 03:47:40'),(90,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_65_21_key','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-28 04:13:31','2022-05-28 04:13:31'),(91,'sqlearn_cs_dosencoba_coba_di_deploy_wvj429_65_21_student','1648576090276_e8646645-020c-4ae9-8931-d5996051c401.sql','2022-05-28 04:13:32','2022-05-28 04:13:32'),(92,'sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_65_21_key','1653643555889_ac894d1f-681c-42ff-b8de-998ea63e8751.sql','2022-05-28 04:13:33','2022-05-28 04:13:33'),(93,'sqlearn_cs_dosencoba_jadwal_kuliah_2uj2jl_65_21_student','1653643555889_ac894d1f-681c-42ff-b8de-998ea63e8751.sql','2022-05-28 04:13:41','2022-05-28 04:13:41');
/*!40000 ALTER TABLE `db_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_session_student`
--

DROP TABLE IF EXISTS `log_session_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_session_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `session_id` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `answer` text DEFAULT NULL,
  `answer_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`answer_json`)),
  `type` enum('start','test','submit','move','reset') DEFAULT NULL,
  `similarity` decimal(10,2) DEFAULT -1.00,
  `is_equal` tinyint(1) DEFAULT NULL,
  `timer` time DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `session_id` (`session_id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `log_session_student_ibfk_549` FOREIGN KEY (`session_id`) REFERENCES `sessions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `log_session_student_ibfk_550` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=831 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_session_student`
--

LOCK TABLES `log_session_student` WRITE;
/*!40000 ALTER TABLE `log_session_student` DISABLE KEYS */;
INSERT INTO `log_session_student` VALUES (1,45,9,'dada',NULL,'start',-1.00,0,'01:07:09','2022-03-28 07:40:57','2022-03-28 07:40:57'),(2,45,9,'dada',NULL,'move',-1.00,0,'02:04:12','2022-03-28 07:40:57','2022-03-28 07:40:57'),(3,45,9,'dada',NULL,'test',-1.00,0,'01:59:00','2022-03-28 07:40:57','2022-03-28 07:40:57'),(4,45,9,'SELECT kelas FROM mahasiswa',NULL,'start',-1.00,0,'01:07:09','2022-03-31 16:53:45','2022-03-31 16:53:45'),(5,45,9,'SELECT kelas FROM mahasiswa',NULL,'move',-1.00,0,'01:09:09','2022-03-31 16:53:45','2022-03-31 16:53:45'),(6,45,9,'SELECT kelas FROM mahasiswa',NULL,'submit',0.48,0,'01:10:09','2022-03-31 16:53:45','2022-03-31 16:53:45'),(7,45,9,'SELECT kelas FROM mahasiswa',NULL,'start',-1.00,0,'01:07:09','2022-03-31 16:53:45','2022-03-31 16:53:45'),(8,45,9,'SELECT kelas FROM mahasiswa',NULL,'move',-1.00,0,'01:09:09','2022-03-31 16:53:45','2022-03-31 16:53:45'),(9,45,9,'SELECT kelas FROM mahasiswa',NULL,'submit',0.48,0,'01:10:09','2022-03-31 16:53:45','2022-03-31 16:53:45'),(10,45,9,'SELECT kelas FROM mahasiswa',NULL,'start',-1.00,0,'01:07:09','2022-03-31 16:53:45','2022-03-31 16:53:45'),(11,45,9,'SELECT kelas FROM mahasiswa',NULL,'move',-1.00,0,'01:09:09','2022-03-31 16:53:45','2022-03-31 16:53:45'),(12,45,9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'',NULL,'submit',1.00,1,'01:10:09','2022-03-31 16:53:45','2022-03-31 16:53:45'),(108,47,10,'SELECT * FROM mahasiswa',NULL,'submit',-1.00,0,'23:59:53','2022-04-09 10:54:50','2022-04-09 10:54:50'),(109,47,10,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00',NULL,'submit',-1.00,0,'23:59:04','2022-04-09 10:57:06','2022-04-09 10:57:06'),(110,47,10,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00',NULL,'submit',-1.00,0,'23:57:37','2022-04-09 10:57:06','2022-04-09 10:57:06'),(111,47,16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)',NULL,'submit',-1.00,1,'23:59:53','2022-04-09 10:57:39','2022-04-09 10:57:39'),(112,47,8,'SELECT * FROM mahasiswa',NULL,'submit',1.00,1,'23:59:12','2022-04-09 10:58:20','2022-04-09 10:58:20'),(113,47,11,'SELECT kelas, COUNT(*) as jumlah_mhs FROM mahasiswa GROUP BY kelas',NULL,'submit',-1.00,1,'23:58:58','2022-04-09 10:58:34','2022-04-09 10:58:34'),(114,47,13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00',NULL,'submit',1.00,1,'23:58:47','2022-04-09 10:58:44','2022-04-09 10:58:44'),(115,47,12,'SELECT kelas, COUNT(*) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2',NULL,'submit',-1.00,1,'23:58:34','2022-04-09 10:58:57','2022-04-09 10:58:57'),(116,47,10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC',NULL,'submit',-1.00,1,'23:58:22','2022-04-09 10:59:09','2022-04-09 10:59:09'),(117,48,28,'SELECT * __ __',NULL,'move',-1.00,0,'02:59:59','2022-04-10 00:00:48','2022-04-10 00:00:48'),(118,48,28,'SELECT * FROM __',NULL,'move',-1.00,0,'02:59:57','2022-04-10 00:00:48','2022-04-10 00:00:48'),(119,48,28,'SELECT * FROM mahasiswa',NULL,'move',-1.00,0,'02:59:56','2022-04-10 00:00:48','2022-04-10 00:00:48'),(120,48,28,'SELECT * FROM mahasiswa',NULL,'submit',1.00,1,'02:59:43','2022-04-10 00:00:48','2022-04-10 00:00:48'),(121,48,22,'SELECT * FROM __',NULL,'move',-1.00,0,'02:59:26','2022-04-10 00:01:11','2022-04-10 00:01:11'),(122,48,22,'SELECT * FROM mahasiswa',NULL,'move',-1.00,0,'02:59:24','2022-04-10 00:01:11','2022-04-10 00:01:11'),(123,48,22,'SELECT * FROM mahasiswa',NULL,'submit',1.00,1,'02:59:20','2022-04-10 00:01:11','2022-04-10 00:01:11'),(127,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'03:00:01','2022-04-10 00:07:45','2022-04-10 00:07:45'),(128,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'03:00:00','2022-04-10 00:07:45','2022-04-10 00:07:45'),(129,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:59:58','2022-04-10 00:07:45','2022-04-10 00:07:45'),(130,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:59:56','2022-04-10 00:07:52','2022-04-10 00:07:52'),(131,48,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:59:54','2022-04-10 00:07:52','2022-04-10 00:07:52'),(132,48,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:59:53','2022-04-10 00:07:52','2022-04-10 00:07:52'),(133,48,28,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:59:52','2022-04-10 00:07:52','2022-04-10 00:07:52'),(134,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:59:57','2022-04-10 00:09:07','2022-04-10 00:09:07'),(135,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:59:55','2022-04-10 00:09:07','2022-04-10 00:09:07'),(136,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:59:52','2022-04-10 00:09:07','2022-04-10 00:09:07'),(137,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:59:47','2022-04-10 00:09:23','2022-04-10 00:09:23'),(138,48,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:59:44','2022-04-10 00:09:23','2022-04-10 00:09:23'),(139,48,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:59:42','2022-04-10 00:09:23','2022-04-10 00:09:23'),(140,48,28,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:59:36','2022-04-10 00:09:23','2022-04-10 00:09:23'),(141,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:40:15','2022-04-10 09:58:15','2022-04-10 09:58:15'),(142,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:40:14','2022-04-10 09:58:15','2022-04-10 09:58:15'),(143,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:40:13','2022-04-10 09:58:15','2022-04-10 09:58:15'),(144,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:39:22','2022-04-10 09:59:23','2022-04-10 09:59:23'),(145,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:21','2022-04-10 09:59:23','2022-04-10 09:59:23'),(146,48,22,'SELECT __ FROM __','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:20','2022-04-10 09:59:23','2022-04-10 09:59:23'),(147,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:39:15','2022-04-10 09:59:23','2022-04-10 09:59:23'),(148,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:13','2022-04-10 09:59:23','2022-04-10 09:59:23'),(149,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:39:13','2022-04-10 09:59:23','2022-04-10 09:59:23'),(150,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:39:22','2022-04-10 09:59:30','2022-04-10 09:59:30'),(151,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:21','2022-04-10 09:59:30','2022-04-10 09:59:30'),(152,48,22,'SELECT __ FROM __','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:20','2022-04-10 09:59:30','2022-04-10 09:59:30'),(153,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:39:15','2022-04-10 09:59:30','2022-04-10 09:59:30'),(154,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:13','2022-04-10 09:59:30','2022-04-10 09:59:30'),(155,48,22,'SELECT * FROM mahasiswa','{}','submit',-1.00,0,'02:39:13','2022-04-10 09:59:30','2022-04-10 09:59:30'),(156,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:39:06','2022-04-10 09:59:30','2022-04-10 09:59:30'),(157,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:39:22','2022-04-10 10:00:19','2022-04-10 10:00:19'),(158,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:21','2022-04-10 10:00:19','2022-04-10 10:00:19'),(159,48,22,'SELECT __ FROM __','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:20','2022-04-10 10:00:19','2022-04-10 10:00:19'),(160,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:39:15','2022-04-10 10:00:19','2022-04-10 10:00:19'),(161,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:13','2022-04-10 10:00:19','2022-04-10 10:00:19'),(162,48,22,'SELECT * FROM mahasiswa','{}','submit',-1.00,0,'02:39:13','2022-04-10 10:00:19','2022-04-10 10:00:19'),(163,48,22,'SELECT * FROM mahasiswa','{}','submit',-1.00,0,'02:39:06','2022-04-10 10:00:19','2022-04-10 10:00:19'),(164,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:20','2022-04-10 10:00:19','2022-04-10 10:00:19'),(165,48,22,'SELECT __ FROM __','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:20','2022-04-10 10:00:19','2022-04-10 10:00:19'),(166,48,22,NULL,'{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:20','2022-04-10 10:00:19','2022-04-10 10:00:19'),(167,48,22,'SELECT __ FROM __','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:20','2022-04-10 10:00:19','2022-04-10 10:00:19'),(168,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:38:17','2022-04-10 10:00:19','2022-04-10 10:00:19'),(169,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:16','2022-04-10 10:00:19','2022-04-10 10:00:19'),(170,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:38:16','2022-04-10 10:00:19','2022-04-10 10:00:19'),(171,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:39:22','2022-04-10 10:00:39','2022-04-10 10:00:39'),(172,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:21','2022-04-10 10:00:39','2022-04-10 10:00:39'),(173,48,22,'SELECT __ FROM __','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:20','2022-04-10 10:00:39','2022-04-10 10:00:39'),(174,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:39:15','2022-04-10 10:00:39','2022-04-10 10:00:39'),(175,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:39:13','2022-04-10 10:00:39','2022-04-10 10:00:39'),(176,48,22,'SELECT * FROM mahasiswa','{}','submit',-1.00,0,'02:39:13','2022-04-10 10:00:39','2022-04-10 10:00:39'),(177,48,22,'SELECT * FROM mahasiswa','{}','submit',-1.00,0,'02:39:06','2022-04-10 10:00:39','2022-04-10 10:00:39'),(178,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:20','2022-04-10 10:00:39','2022-04-10 10:00:39'),(179,48,22,'SELECT __ FROM __','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:20','2022-04-10 10:00:39','2022-04-10 10:00:39'),(180,48,22,NULL,'{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:20','2022-04-10 10:00:39','2022-04-10 10:00:39'),(181,48,22,'SELECT __ FROM __','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:20','2022-04-10 10:00:39','2022-04-10 10:00:39'),(182,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:38:17','2022-04-10 10:00:39','2022-04-10 10:00:39'),(183,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:16','2022-04-10 10:00:39','2022-04-10 10:00:39'),(184,48,22,'SELECT * FROM mahasiswa','{}','submit',-1.00,0,'02:38:16','2022-04-10 10:00:39','2022-04-10 10:00:39'),(185,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:02','2022-04-10 10:00:39','2022-04-10 10:00:39'),(186,48,22,'SELECT __ FROM __','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:02','2022-04-10 10:00:39','2022-04-10 10:00:39'),(187,48,22,NULL,'{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:02','2022-04-10 10:00:39','2022-04-10 10:00:39'),(188,48,22,'SELECT __ FROM __','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:38:02','2022-04-10 10:00:39','2022-04-10 10:00:39'),(189,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:37:59','2022-04-10 10:00:39','2022-04-10 10:00:39'),(190,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:37:57','2022-04-10 10:00:39','2022-04-10 10:00:39'),(191,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:37:56','2022-04-10 10:00:39','2022-04-10 10:00:39'),(192,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:36:55','2022-04-10 10:02:40','2022-04-10 10:02:40'),(193,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:36:53','2022-04-10 10:02:40','2022-04-10 10:02:40'),(194,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:36:50','2022-04-10 10:02:40','2022-04-10 10:02:40'),(195,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:36:45','2022-04-10 10:02:50','2022-04-10 10:02:50'),(196,48,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:36:43','2022-04-10 10:02:50','2022-04-10 10:02:50'),(197,48,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:36:42','2022-04-10 10:02:50','2022-04-10 10:02:50'),(198,48,28,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:36:41','2022-04-10 10:02:50','2022-04-10 10:02:50'),(199,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'03:00:02','2022-04-10 10:47:03','2022-04-10 10:47:03'),(200,48,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'03:00:01','2022-04-10 10:47:03','2022-04-10 10:47:03'),(201,48,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'03:00:00','2022-04-10 10:47:03','2022-04-10 10:47:03'),(202,48,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'03:00:00','2022-04-10 10:47:03','2022-04-10 10:47:03'),(203,48,28,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:59:59','2022-04-10 10:47:03','2022-04-10 10:47:03'),(204,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:56:05','2022-04-10 11:13:00','2022-04-10 11:13:00'),(205,48,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:56:04','2022-04-10 11:13:00','2022-04-10 11:13:00'),(206,48,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:56:02','2022-04-10 11:13:00','2022-04-10 11:13:00'),(207,48,28,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:56:02','2022-04-10 11:13:00','2022-04-10 11:13:00'),(208,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:55:09','2022-04-10 11:14:30','2022-04-10 11:14:30'),(209,48,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:55:07','2022-04-10 11:14:30','2022-04-10 11:14:30'),(210,48,28,'SELECT * FROM karyawan','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:55:03','2022-04-10 11:14:30','2022-04-10 11:14:30'),(211,48,28,'SELECT __ __ __','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:55:03','2022-04-10 11:14:30','2022-04-10 11:14:30'),(212,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:55:01','2022-04-10 11:14:30','2022-04-10 11:14:30'),(213,48,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:54:59','2022-04-10 11:14:30','2022-04-10 11:14:30'),(214,48,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:54:58','2022-04-10 11:14:30','2022-04-10 11:14:30'),(215,48,28,'SELECT * FROM mahasiswa','{}','test',1.00,1,'02:54:55','2022-04-10 11:14:30','2022-04-10 11:14:30'),(216,48,28,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:54:52','2022-04-10 11:14:34','2022-04-10 11:14:34'),(217,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:53:52','2022-04-10 11:15:37','2022-04-10 11:15:37'),(218,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:53:50','2022-04-10 11:15:37','2022-04-10 11:15:37'),(219,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:53:49','2022-04-10 11:15:37','2022-04-10 11:15:37'),(220,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:53:33','2022-04-10 11:16:13','2022-04-10 11:16:13'),(221,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:53:32','2022-04-10 11:16:13','2022-04-10 11:16:13'),(222,48,22,'SELECT __ FROM __','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:53:31','2022-04-10 11:16:13','2022-04-10 11:16:13'),(223,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:53:29','2022-04-10 11:16:13','2022-04-10 11:16:13'),(224,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:53:27','2022-04-10 11:16:13','2022-04-10 11:16:13'),(225,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:53:26','2022-04-10 11:16:13','2022-04-10 11:16:13'),(226,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:53:22','2022-04-10 11:16:20','2022-04-10 11:16:20'),(227,48,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:53:21','2022-04-10 11:16:20','2022-04-10 11:16:20'),(228,48,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:53:20','2022-04-10 11:16:20','2022-04-10 11:16:20'),(229,48,28,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:53:19','2022-04-10 11:16:20','2022-04-10 11:16:20'),(230,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:46:51','2022-04-10 14:28:35','2022-04-10 14:28:35'),(231,48,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:46:50','2022-04-10 14:28:35','2022-04-10 14:28:35'),(232,48,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:46:49','2022-04-10 14:28:35','2022-04-10 14:28:35'),(233,48,28,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:46:47','2022-04-10 14:28:35','2022-04-10 14:28:35'),(234,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:46:41','2022-04-10 14:29:36','2022-04-10 14:29:36'),(235,48,28,'SELECT * __ __','{}','submit',-1.00,0,'02:46:40','2022-04-10 14:29:36','2022-04-10 14:29:36'),(236,48,28,'SELECT * __ __','{}','submit',-1.00,0,'02:46:36','2022-04-10 14:29:36','2022-04-10 14:29:36'),(237,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:46:03','2022-04-10 14:29:36','2022-04-10 14:29:36'),(238,48,28,'SELECT __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:46:03','2022-04-10 14:29:36','2022-04-10 14:29:36'),(239,48,28,NULL,'{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:46:02','2022-04-10 14:29:36','2022-04-10 14:29:36'),(240,48,28,'SELECT __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:46:02','2022-04-10 14:29:36','2022-04-10 14:29:36'),(241,48,28,'SELECT __ __ __','{}','submit',-1.00,0,'02:45:55','2022-04-10 14:29:36','2022-04-10 14:29:36'),(242,48,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:45:50','2022-04-10 14:29:36','2022-04-10 14:29:36'),(243,48,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:45:49','2022-04-10 14:29:36','2022-04-10 14:29:36'),(244,48,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:45:47','2022-04-10 14:29:36','2022-04-10 14:29:36'),(245,48,28,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:45:47','2022-04-10 14:29:36','2022-04-10 14:29:36'),(246,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:27:56','2022-04-10 14:47:29','2022-04-10 14:47:29'),(247,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:27:54','2022-04-10 14:47:29','2022-04-10 14:47:29'),(248,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:27:53','2022-04-10 14:47:29','2022-04-10 14:47:29'),(249,48,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:26:51','2022-04-10 14:48:34','2022-04-10 14:48:34'),(250,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:26:49','2022-04-10 14:48:34','2022-04-10 14:48:34'),(251,48,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:26:49','2022-04-10 14:48:34','2022-04-10 14:48:34'),(252,48,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:26:49','2022-04-10 14:48:34','2022-04-10 14:48:34'),(253,49,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'04:00:03','2022-04-12 10:06:25','2022-04-12 10:06:25'),(254,49,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'04:00:01','2022-04-12 10:06:25','2022-04-12 10:06:25'),(255,49,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'03:59:59','2022-04-12 10:06:25','2022-04-12 10:06:25'),(256,49,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'03:59:50','2022-04-12 10:06:39','2022-04-12 10:06:39'),(257,49,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'03:59:48','2022-04-12 10:06:39','2022-04-12 10:06:39'),(258,49,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'03:59:47','2022-04-12 10:06:39','2022-04-12 10:06:39'),(259,49,28,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'03:59:46','2022-04-12 10:06:39','2022-04-12 10:06:39'),(278,51,22,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:59:38','2022-04-16 01:45:30','2022-04-16 01:45:30'),(279,51,22,'SELECT * FROM mahasiswa','{\"from\":{\"index\":3,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:59:37','2022-04-16 01:45:30','2022-04-16 01:45:30'),(280,51,22,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:59:31','2022-04-16 01:45:30','2022-04-16 01:45:30'),(281,51,28,'SELECT * __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:59:11','2022-04-16 01:45:57','2022-04-16 01:45:57'),(282,51,28,'SELECT * FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:59:10','2022-04-16 01:45:57','2022-04-16 01:45:57'),(283,51,28,'SELECT * FROM mahasiswa','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'02:59:08','2022-04-16 01:45:57','2022-04-16 01:45:57'),(284,51,28,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'02:59:05','2022-04-16 01:45:57','2022-04-16 01:45:57'),(285,51,29,'SELECT nama __ FROM __ ORDER BY __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:59:00','2022-04-16 01:46:24','2022-04-16 01:46:24'),(286,51,29,'SELECT __ __ FROM __ ORDER BY __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:58:59','2022-04-16 01:46:24','2022-04-16 01:46:24'),(287,51,29,'SELECT __ nama FROM __ ORDER BY __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:58:52','2022-04-16 01:46:24','2022-04-16 01:46:24'),(288,51,29,'SELECT __ __ FROM __ ORDER BY __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:58:52','2022-04-16 01:46:24','2022-04-16 01:46:24'),(289,51,29,'SELECT nama __ FROM __ ORDER BY __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'02:58:50','2022-04-16 01:46:24','2022-04-16 01:46:24'),(290,51,29,'SELECT nama ipk FROM __ ORDER BY __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'02:58:48','2022-04-16 01:46:24','2022-04-16 01:46:24'),(291,51,29,'SELECT nama ipk FROM mahasiswa ORDER BY __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'02:58:47','2022-04-16 01:46:24','2022-04-16 01:46:24'),(292,51,29,'SELECT nama ipk FROM mahasiswa ORDER BY ipk __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_6\",\"index\":0}}','move',-1.00,0,'02:58:45','2022-04-16 01:46:24','2022-04-16 01:46:24'),(293,51,29,'SELECT nama ipk FROM mahasiswa ORDER BY ipk DESC','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'02:58:43','2022-04-16 01:46:24','2022-04-16 01:46:24'),(294,51,29,'SELECT nama ipk FROM mahasiswa ORDER BY ipk DESC','{}','submit',-1.00,1,'02:58:38','2022-04-16 01:46:24','2022-04-16 01:46:24'),(358,57,15,'select * from user','{}','test',0.00,0,'00:00:53','2022-05-20 06:27:52','2022-05-20 06:27:52'),(359,57,15,'select * from user','{}','test',0.00,0,'00:01:00','2022-05-20 06:27:59','2022-05-20 06:27:59'),(366,57,10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','{}','test',-1.00,1,'00:06:44','2022-05-20 07:01:14','2022-05-20 07:01:14'),(367,57,10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','{}','submit',-1.00,1,'00:06:56','2022-05-20 07:01:25','2022-05-20 07:01:25'),(368,57,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','submit',-1.00,1,'00:07:48','2022-05-20 07:02:17','2022-05-20 07:02:17'),(369,57,16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','{}','submit',-1.00,1,'00:08:20','2022-05-20 07:02:49','2022-05-20 07:02:49'),(370,57,15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','submit',1.00,1,'00:08:39','2022-05-20 07:03:08','2022-05-20 07:03:08'),(371,57,12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','{}','submit',-1.00,1,'00:09:04','2022-05-20 07:03:33','2022-05-20 07:03:33'),(372,57,13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','{}','submit',1.00,1,'00:09:42','2022-05-20 07:04:11','2022-05-20 07:04:11'),(373,57,8,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'00:10:04','2022-05-20 07:04:33','2022-05-20 07:04:33'),(374,52,15,'select nama,waktu_login from mahasiswa','{}','test',-1.00,0,'00:00:16','2022-05-21 02:03:39','2022-05-21 02:03:39'),(375,52,15,'select nama waktu_login from mahasiswa','{}','test',0.53,0,'00:00:26','2022-05-21 02:03:39','2022-05-21 02:03:39'),(376,52,15,'select nama waktu_login from mahasiswa','{}','submit',0.53,0,'00:00:35','2022-05-21 02:03:48','2022-05-21 02:03:48'),(377,52,15,'select nama,waktu_login from mahasiswa','{}','test',-1.00,0,'00:01:40','2022-05-21 02:05:07','2022-05-21 02:05:07'),(378,52,15,'select nama, waktu_login from mahasiswa','{}','test',-1.00,0,'00:01:48','2022-05-21 02:05:07','2022-05-21 02:05:07'),(379,52,15,'select nama waktu_login from mahasiswa','{}','test',0.53,0,'00:01:54','2022-05-21 02:05:07','2022-05-21 02:05:07'),(380,52,15,'select nama waktu_login from mahasiswa','{}','test',0.53,0,'00:02:09','2022-05-21 02:05:22','2022-05-21 02:05:22'),(381,52,15,'select nama waktu_login from mahasiswa','{}','test',0.53,0,'00:02:22','2022-05-21 02:05:35','2022-05-21 02:05:35'),(382,52,15,'select nama,waktu_login from mahasiswa','{}','test',-1.00,0,'00:02:52','2022-05-21 02:06:34','2022-05-21 02:06:34'),(383,52,15,'select nama, waktu_login from mahasiswa','{}','test',-1.00,0,'00:03:08','2022-05-21 02:06:34','2022-05-21 02:06:34'),(384,52,15,'select nama, waktu_login from mahasiswa','{}','submit',-1.00,0,'00:03:11','2022-05-21 02:06:34','2022-05-21 02:06:34'),(385,52,15,'select nama waktu_login from mahasiswa','{}','submit',0.53,0,'00:03:21','2022-05-21 02:06:34','2022-05-21 02:06:34'),(386,52,15,'select nama lalala from mahasiswa','{}','submit',0.53,0,'00:03:38','2022-05-21 02:06:51','2022-05-21 02:06:51'),(387,52,15,'select nama waktu_login from mahasiswa','{}','test',0.53,0,'00:05:36','2022-05-21 02:08:49','2022-05-21 02:08:49'),(388,52,15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',1.00,1,'00:07:58','2022-05-21 02:11:11','2022-05-21 02:11:11'),(389,52,15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',1.00,1,'00:01:00','2022-05-21 02:13:52','2022-05-21 02:13:52'),(390,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:08','2022-05-24 08:08:01','2022-05-24 08:08:01'),(391,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:23:07','2022-05-24 08:31:00','2022-05-24 08:31:00'),(392,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:26:51','2022-05-24 08:34:44','2022-05-24 08:34:44'),(393,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:27:22','2022-05-24 08:35:15','2022-05-24 08:35:15'),(394,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:27:39','2022-05-24 08:35:32','2022-05-24 08:35:32'),(395,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:27:59','2022-05-24 08:35:52','2022-05-24 08:35:52'),(396,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:28:21','2022-05-24 08:36:13','2022-05-24 08:36:13'),(397,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:29:03','2022-05-24 08:36:55','2022-05-24 08:36:55'),(398,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:31:46','2022-05-24 08:39:40','2022-05-24 08:39:40'),(399,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:41','2022-05-24 08:42:33','2022-05-24 08:42:33'),(400,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:01:21','2022-05-24 08:43:13','2022-05-24 08:43:13'),(401,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswaSELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:05','2022-05-24 08:44:50','2022-05-24 08:44:50'),(402,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:14','2022-05-24 08:44:50','2022-05-24 08:44:50'),(403,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:01:10','2022-05-24 08:45:46','2022-05-24 08:45:46'),(404,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:02:01','2022-05-24 11:27:51','2022-05-24 11:27:51'),(405,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:02:01','2022-05-24 11:27:54','2022-05-24 11:27:54'),(406,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:02:04','2022-05-24 11:27:54','2022-05-24 11:27:54'),(407,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:02:01','2022-05-24 11:28:04','2022-05-24 11:28:04'),(408,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:02:04','2022-05-24 11:28:04','2022-05-24 11:28:04'),(409,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:02:14','2022-05-24 11:28:04','2022-05-24 11:28:04'),(410,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:02:01','2022-05-24 11:28:24','2022-05-24 11:28:24'),(411,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:02:04','2022-05-24 11:28:24','2022-05-24 11:28:24'),(412,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:02:14','2022-05-24 11:28:24','2022-05-24 11:28:24'),(413,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:02:35','2022-05-24 11:28:24','2022-05-24 11:28:24'),(414,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:08','2022-05-24 11:28:49','2022-05-24 11:28:49'),(415,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:08','2022-05-24 11:28:57','2022-05-24 11:28:57'),(416,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:17','2022-05-24 11:28:57','2022-05-24 11:28:57'),(417,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:08','2022-05-24 11:29:28','2022-05-24 11:29:28'),(418,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:17','2022-05-24 11:29:28','2022-05-24 11:29:28'),(419,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:47','2022-05-24 11:29:28','2022-05-24 11:29:28'),(420,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:08','2022-05-24 11:30:10','2022-05-24 11:30:10'),(421,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:17','2022-05-24 11:30:10','2022-05-24 11:30:10'),(422,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:47','2022-05-24 11:30:10','2022-05-24 11:30:10'),(423,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:01:29','2022-05-24 11:30:10','2022-05-24 11:30:10'),(424,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:03','2022-05-24 11:30:31','2022-05-24 11:30:31'),(425,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:03','2022-05-24 11:31:14','2022-05-24 11:31:14'),(426,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:47','2022-05-24 11:31:14','2022-05-24 11:31:14'),(427,61,11,'','{}','test',-1.00,0,'00:01:00','2022-05-24 11:31:33','2022-05-24 11:31:33'),(428,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:01:06','2022-05-24 11:31:33','2022-05-24 11:31:33'),(429,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:06:45','2022-05-24 11:37:13','2022-05-24 11:37:13'),(430,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:04','2022-05-24 11:37:26','2022-05-24 11:37:26'),(431,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:04','2022-05-24 11:37:50','2022-05-24 11:37:50'),(432,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:29','2022-05-24 11:37:50','2022-05-24 11:37:50'),(433,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:04','2022-05-24 11:38:14','2022-05-24 11:38:14'),(434,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:29','2022-05-24 11:38:14','2022-05-24 11:38:14'),(435,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:53','2022-05-24 11:38:14','2022-05-24 11:38:14'),(436,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:04','2022-05-24 11:38:32','2022-05-24 11:38:32'),(437,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:04','2022-05-24 11:39:12','2022-05-24 11:39:12'),(438,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:44','2022-05-24 11:39:12','2022-05-24 11:39:12'),(439,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:04','2022-05-24 11:40:20','2022-05-24 11:40:20'),(440,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:44','2022-05-24 11:40:20','2022-05-24 11:40:20'),(441,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:01:51','2022-05-24 11:40:20','2022-05-24 11:40:20'),(442,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:04','2022-05-24 11:43:55','2022-05-24 11:43:55'),(443,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:03:00','2022-05-24 11:46:51','2022-05-24 11:46:51'),(444,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:03','2022-05-24 11:47:03','2022-05-24 11:47:03'),(445,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:03','2022-05-24 11:50:34','2022-05-24 11:50:34'),(446,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:02:58','2022-05-24 11:53:29','2022-05-24 11:53:29'),(447,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:03:23','2022-05-24 11:53:55','2022-05-24 11:53:55'),(448,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:16','2022-05-24 11:55:32','2022-05-24 11:55:32'),(449,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:07','2022-05-24 11:57:04','2022-05-24 11:57:04'),(450,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:01:32','2022-05-24 11:58:29','2022-05-24 11:58:29'),(451,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:06','2022-05-24 11:59:19','2022-05-24 11:59:19'),(452,61,11,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','test',-1.00,0,'00:00:10','2022-05-24 12:09:44','2022-05-24 12:09:44'),(453,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',-1.00,1,'00:02:35','2022-05-24 12:12:09','2022-05-24 12:12:09'),(454,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',-1.00,1,'00:03:38','2022-05-24 12:13:11','2022-05-24 12:13:11'),(455,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',-1.00,1,'00:00:03','2022-05-24 12:13:21','2022-05-24 12:13:21'),(456,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',-1.00,1,'00:02:16','2022-05-24 12:15:34','2022-05-24 12:15:34'),(457,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',-1.00,1,'00:02:32','2022-05-24 12:15:50','2022-05-24 12:15:50'),(458,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',-1.00,1,'00:00:04','2022-05-24 12:16:08','2022-05-24 12:16:08'),(459,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',-1.00,1,'00:00:05','2022-05-24 12:16:33','2022-05-24 12:16:33'),(468,52,15,'','{}','test',-1.00,0,'00:00:05','2022-05-25 10:43:28','2022-05-25 10:43:28'),(469,52,15,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',0.15,0,'00:00:31','2022-05-25 10:43:28','2022-05-25 10:43:28'),(470,52,15,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','submit',0.15,0,'00:00:35','2022-05-25 10:43:32','2022-05-25 10:43:32'),(471,52,13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','{}','test',1.00,1,'00:01:14','2022-05-25 10:44:12','2022-05-25 10:44:12'),(472,52,13,'SELECT * FROM mahasiswa WHERE ipk >= 3.00','{}','test',1.00,1,'00:01:45','2022-05-25 10:44:43','2022-05-25 10:44:43'),(473,52,13,'SELECT * FROM mahasiswa WHERE ipk >= 3.00','{}','submit',1.00,1,'00:01:51','2022-05-25 10:44:48','2022-05-25 10:44:48'),(474,52,8,'SELECT * FROM mahasiswa','{}','test',1.00,1,'00:02:07','2022-05-25 10:45:04','2022-05-25 10:45:04'),(475,52,8,'SELECT * FROM mahasiswa','{}','submit',1.00,1,'00:02:11','2022-05-25 10:45:08','2022-05-25 10:45:08'),(476,52,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',1.00,1,'00:02:26','2022-05-25 10:45:23','2022-05-25 10:45:23'),(477,52,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','submit',1.00,1,'00:02:33','2022-05-25 10:45:30','2022-05-25 10:45:30'),(478,52,12,'SELECT kelas, COUNT(*) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','{}','test',1.00,1,'00:02:46','2022-05-25 10:45:43','2022-05-25 10:45:43'),(479,52,12,'SELECT kelas, COUNT(*) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','{}','submit',1.00,1,'00:02:54','2022-05-25 10:45:52','2022-05-25 10:45:52'),(480,52,10,'SELECT nama ipk FROM mahasiswa ORDER BY nama DESC','{}','test',0.45,0,'00:03:11','2022-05-25 10:46:08','2022-05-25 10:46:08'),(481,52,10,'SELECT nama,ipk FROM mahasiswa ORDER BY nama DESC','{}','test',0.64,0,'00:03:18','2022-05-25 10:46:15','2022-05-25 10:46:15'),(482,52,10,'SELECT nama ipk FROM mahasiswa ORDER BY ipk DESC','{}','test',0.80,0,'00:00:13','2022-05-25 10:46:43','2022-05-25 10:46:43'),(483,52,10,'SELECT nama,ipk FROM mahasiswa ORDER BY ipk DESC','{}','test',1.00,1,'00:00:06','2022-05-25 10:46:58','2022-05-25 10:46:58'),(484,52,10,'SELECT nama ipk FROM mahasiswa ORDER BY ipk DESC','{}','submit',0.80,0,'00:00:30','2022-05-25 10:47:23','2022-05-25 10:47:23'),(485,52,10,'SELECT nama,ipk FROM mahasiswa ORDER BY ipk DESC','{}','submit',1.00,1,'00:00:44','2022-05-25 10:47:36','2022-05-25 10:47:36'),(486,52,11,'SELECT kelas, COUNT(*) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','submit',1.00,1,'00:01:02','2022-05-25 10:47:54','2022-05-25 10:47:54'),(487,52,13,'SELECT * FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00','{}','submit',1.00,1,'00:01:15','2022-05-25 10:48:07','2022-05-25 10:48:07'),(488,52,16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','{}','test',1.00,1,'00:01:28','2022-05-25 10:48:20','2022-05-25 10:48:20'),(489,52,16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','{}','submit',1.00,1,'00:01:33','2022-05-25 10:48:25','2022-05-25 10:48:25'),(490,52,12,'SELECT kelas, COUNT(kelas) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','{}','submit',1.00,1,'00:01:45','2022-05-25 10:48:37','2022-05-25 10:48:37'),(491,52,15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','{}','submit',1.00,1,'00:01:57','2022-05-25 10:48:49','2022-05-25 10:48:49'),(492,52,8,'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa','{}','submit',1.00,1,'00:02:10','2022-05-25 10:49:02','2022-05-25 10:49:02'),(493,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',1.00,1,'00:00:36','2022-05-25 12:16:21','2022-05-25 12:16:21'),(494,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',1.00,1,'00:40:26','2022-05-25 13:10:23','2022-05-25 13:10:23'),(495,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',1.00,1,'00:40:33','2022-05-25 13:10:30','2022-05-25 13:10:30'),(496,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',1.00,1,'00:41:41','2022-05-25 13:11:38','2022-05-25 13:11:38'),(497,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',1.00,1,'00:41:43','2022-05-25 13:11:40','2022-05-25 13:11:40'),(498,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',1.00,1,'00:00:09','2022-05-25 13:16:41','2022-05-25 13:16:41'),(499,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',1.00,1,'00:01:48','2022-05-25 14:23:57','2022-05-25 14:23:57'),(500,61,11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','{}','test',1.00,1,'00:01:55','2022-05-25 14:24:04','2022-05-25 14:24:04'),(501,62,38,'SELECT DISTINCT kode_hari __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:09','2022-05-27 10:04:40','2022-05-27 10:04:40'),(502,62,38,'SELECT DISTINCT kode_hari FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:00:11','2022-05-27 10:04:40','2022-05-27 10:04:40'),(503,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:00:12','2022-05-27 10:04:40','2022-05-27 10:04:40'),(504,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','test',1.00,1,'00:00:13','2022-05-27 10:04:40','2022-05-27 10:04:40'),(505,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','submit',1.00,1,'00:00:17','2022-05-27 10:04:44','2022-05-27 10:04:44'),(506,62,39,'SELECT * __ __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:00:39','2022-05-27 10:05:26','2022-05-27 10:05:26'),(507,62,39,'SELECT * FROM __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:41','2022-05-27 10:05:26','2022-05-27 10:05:26'),(508,62,39,'SELECT * FROM ruang WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:00:42','2022-05-27 10:05:26','2022-05-27 10:05:26'),(509,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN __ __ __','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_5\",\"index\":0}}','move',-1.00,0,'00:00:50','2022-05-27 10:05:26','2022-05-27 10:05:26'),(510,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' __ __','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:00:55','2022-05-27 10:05:26','2022-05-27 10:05:26'),(511,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND __','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_8\",\"index\":0}}','move',-1.00,0,'00:00:56','2022-05-27 10:05:26','2022-05-27 10:05:26'),(512,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_9\",\"index\":0}}','move',-1.00,0,'00:00:57','2022-05-27 10:05:26','2022-05-27 10:05:26'),(513,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'','{}','test',1.00,1,'00:00:59','2022-05-27 10:05:26','2022-05-27 10:05:26'),(514,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'','{}','submit',1.00,1,'00:01:05','2022-05-27 10:05:32','2022-05-27 10:05:32'),(515,62,38,'SELECT DISTINCT kode_hari __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:46','2022-05-27 13:15:12','2022-05-27 13:15:12'),(516,62,38,'SELECT DISTINCT kode_hari FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:00:55','2022-05-27 13:15:12','2022-05-27 13:15:12'),(517,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:00:59','2022-05-27 13:15:12','2022-05-27 13:15:12'),(518,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','test',1.00,1,'00:01:00','2022-05-27 13:15:12','2022-05-27 13:15:12'),(519,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','submit',1.00,1,'00:01:11','2022-05-27 13:15:22','2022-05-27 13:15:22'),(520,62,38,'SELECT DISTINCT kode_hari __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:04','2022-05-27 13:18:10','2022-05-27 13:18:10'),(521,62,38,'SELECT DISTINCT kode_hari FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:00:05','2022-05-27 13:18:10','2022-05-27 13:18:10'),(522,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:00:08','2022-05-27 13:18:10','2022-05-27 13:18:10'),(523,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','test',1.00,1,'00:00:09','2022-05-27 13:18:10','2022-05-27 13:18:10'),(524,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','submit',1.00,1,'00:02:48','2022-05-27 13:20:50','2022-05-27 13:20:50'),(525,62,39,'SELECT * __ __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:03:05','2022-05-27 13:33:06','2022-05-27 13:33:06'),(526,62,39,'SELECT * FROM __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:03:06','2022-05-27 13:33:06','2022-05-27 13:33:06'),(527,62,39,'SELECT * FROM __ WHERE __ BETWEEN \'0501\' __ __','{\"from\":{\"index\":4,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:04:13','2022-05-27 13:33:06','2022-05-27 13:33:06'),(528,62,39,'SELECT * FROM __ WHERE __ BETWEEN \'0501\' AND __','{\"from\":{\"index\":4,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_8\",\"index\":0}}','move',-1.00,0,'00:04:14','2022-05-27 13:33:06','2022-05-27 13:33:06'),(529,62,39,'SELECT * FROM __ WHERE __ BETWEEN \'0501\' AND \'0508\'','{\"from\":{\"index\":4,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_9\",\"index\":0}}','move',-1.00,0,'00:04:16','2022-05-27 13:33:06','2022-05-27 13:33:06'),(530,62,39,'SELECT * FROM ruang WHERE __ BETWEEN \'0501\' AND \'0508\'','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:04:19','2022-05-27 13:33:06','2022-05-27 13:33:06'),(531,62,39,'SELECT __ __ __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:04:20','2022-05-27 13:33:06','2022-05-27 13:33:06'),(532,62,39,'SELECT * __ __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:04:22','2022-05-27 13:33:06','2022-05-27 13:33:06'),(533,62,39,'SELECT * FROM __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:04:23','2022-05-27 13:33:06','2022-05-27 13:33:06'),(534,62,39,'SELECT * FROM kode_ruang WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:04:25','2022-05-27 13:33:06','2022-05-27 13:33:06'),(535,62,39,NULL,'{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:13:17','2022-05-27 13:33:06','2022-05-27 13:33:06'),(536,62,39,'SELECT __ __ __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:13:17','2022-05-27 13:33:06','2022-05-27 13:33:06'),(537,62,39,'SELECT * __ __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:14:49','2022-05-27 13:33:06','2022-05-27 13:33:06'),(538,62,39,'SELECT * FROM __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:14:50','2022-05-27 13:33:06','2022-05-27 13:33:06'),(539,62,39,'SELECT * FROM ruang WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:14:56','2022-05-27 13:33:06','2022-05-27 13:33:06'),(540,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN __ __ __','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_5\",\"index\":0}}','move',-1.00,0,'00:14:58','2022-05-27 13:33:06','2022-05-27 13:33:06'),(541,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' __ __','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:15:00','2022-05-27 13:33:06','2022-05-27 13:33:06'),(542,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND __','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_8\",\"index\":0}}','move',-1.00,0,'00:15:01','2022-05-27 13:33:06','2022-05-27 13:33:06'),(543,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_9\",\"index\":0}}','move',-1.00,0,'00:15:02','2022-05-27 13:33:06','2022-05-27 13:33:06'),(544,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'','{}','test',1.00,1,'00:15:04','2022-05-27 13:33:06','2022-05-27 13:33:06'),(545,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'','{}','submit',1.00,1,'00:15:10','2022-05-27 13:33:12','2022-05-27 13:33:12'),(546,62,37,'SELECT __ __ ruang WHERE __ =\"LKJ1\"','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:00:06','2022-05-27 13:36:57','2022-05-27 13:36:57'),(547,62,37,'SELECT deskripsi_ruang __ ruang WHERE __ =\"LKJ1\"','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:00:08','2022-05-27 13:36:57','2022-05-27 13:36:57'),(548,62,37,'SELECT deskripsi_ruang FROM ruang WHERE __ =\"LKJ1\"','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:09','2022-05-27 13:36:57','2022-05-27 13:36:57'),(549,62,37,'SELECT deskripsi_ruang FROM ruang WHERE nama_ruang =\"LKJ1\"','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_5\",\"index\":0}}','move',-1.00,0,'00:00:10','2022-05-27 13:36:57','2022-05-27 13:36:57'),(550,62,37,'SELECT deskripsi_ruang FROM ruang WHERE nama_ruang =\"LKJ1\"','{}','test',1.00,1,'00:00:11','2022-05-27 13:36:57','2022-05-27 13:36:57'),(551,62,43,'SELECT * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:04:07','2022-05-27 20:20:04','2022-05-27 20:20:04'),(552,62,43,'SELECT * FROM __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:04:18','2022-05-27 20:20:04','2022-05-27 20:20:04'),(553,62,43,'SELECT * FROM jadwal __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:04:19','2022-05-27 20:20:04','2022-05-27 20:20:04'),(554,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:04:21','2022-05-27 20:20:04','2022-05-27 20:20:04'),(555,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:04:24','2022-05-27 20:20:04','2022-05-27 20:20:04'),(556,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','test',-1.00,0,'00:04:25','2022-05-27 20:20:04','2022-05-27 20:20:04'),(557,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','test',-1.00,0,'00:04:39','2022-05-27 20:20:04','2022-05-27 20:20:04'),(558,62,43,NULL,'{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:05:06','2022-05-27 20:20:04','2022-05-27 20:20:04'),(559,62,43,'__ * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:05:06','2022-05-27 20:20:04','2022-05-27 20:20:04'),(560,62,43,NULL,'{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:05:21','2022-05-27 20:20:04','2022-05-27 20:20:04'),(561,62,43,'__ * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:05:21','2022-05-27 20:20:04','2022-05-27 20:20:04'),(562,62,43,NULL,'{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:05:59','2022-05-27 20:20:04','2022-05-27 20:20:04'),(563,62,43,'__ * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:05:59','2022-05-27 20:20:04','2022-05-27 20:20:04'),(564,62,43,NULL,'{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:06:24','2022-05-27 20:20:04','2022-05-27 20:20:04'),(565,62,43,'__ * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:06:24','2022-05-27 20:20:04','2022-05-27 20:20:04'),(566,62,43,'SELECT * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:06:30','2022-05-27 20:20:04','2022-05-27 20:20:04'),(567,62,43,'SELECT * FROM __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:06:31','2022-05-27 20:20:04','2022-05-27 20:20:04'),(568,62,43,'SELECT * FROM jadwal __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:06:32','2022-05-27 20:20:04','2022-05-27 20:20:04'),(569,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:06:33','2022-05-27 20:20:04','2022-05-27 20:20:04'),(570,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:06:34','2022-05-27 20:20:04','2022-05-27 20:20:04'),(571,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','test',1.00,1,'00:06:35','2022-05-27 20:20:04','2022-05-27 20:20:04'),(572,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','submit',1.00,1,'00:06:55','2022-05-27 20:20:24','2022-05-27 20:20:24'),(573,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','test',1.00,1,'00:07:04','2022-05-27 20:20:34','2022-05-27 20:20:34'),(574,62,43,'SELECT * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:11:22','2022-05-27 20:24:57','2022-05-27 20:24:57'),(575,62,43,'SELECT * FROM __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:11:23','2022-05-27 20:24:57','2022-05-27 20:24:57'),(576,62,43,'SELECT * FROM jadwal __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:11:24','2022-05-27 20:24:57','2022-05-27 20:24:57'),(577,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:11:25','2022-05-27 20:24:57','2022-05-27 20:24:57'),(578,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:11:27','2022-05-27 20:24:57','2022-05-27 20:24:57'),(579,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','test',1.00,1,'00:11:27','2022-05-27 20:24:57','2022-05-27 20:24:57'),(580,62,43,'SELECT * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:12:36','2022-05-27 20:26:13','2022-05-27 20:26:13'),(581,62,43,'SELECT * FROM __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:12:37','2022-05-27 20:26:13','2022-05-27 20:26:13'),(582,62,43,'SELECT * FROM jadwal __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:12:39','2022-05-27 20:26:13','2022-05-27 20:26:13'),(583,62,43,'SELECT * FROM jadwal __ kode_hari =\'001\' AND jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:12:42','2022-05-27 20:26:13','2022-05-27 20:26:13'),(584,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:12:43','2022-05-27 20:26:13','2022-05-27 20:26:13'),(585,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','test',1.00,1,'00:12:44','2022-05-27 20:26:13','2022-05-27 20:26:13'),(586,62,43,'SELECT * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:13:12','2022-05-27 20:27:05','2022-05-27 20:27:05'),(587,62,43,'SELECT * FROM __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:13:13','2022-05-27 20:27:05','2022-05-27 20:27:05'),(588,62,43,'SELECT * FROM jadwal __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:13:14','2022-05-27 20:27:05','2022-05-27 20:27:05'),(589,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:13:33','2022-05-27 20:27:05','2022-05-27 20:27:05'),(590,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:13:35','2022-05-27 20:27:05','2022-05-27 20:27:05'),(591,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','test',1.00,1,'00:13:36','2022-05-27 20:27:05','2022-05-27 20:27:05'),(592,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','submit',1.00,1,'00:13:47','2022-05-27 20:27:16','2022-05-27 20:27:16'),(593,62,43,'SELECT * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:15:29','2022-05-27 20:29:05','2022-05-27 20:29:05'),(594,62,43,'SELECT * FROM __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:15:30','2022-05-27 20:29:05','2022-05-27 20:29:05'),(595,62,43,'SELECT * FROM jadwal __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:15:31','2022-05-27 20:29:05','2022-05-27 20:29:05'),(596,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:15:32','2022-05-27 20:29:05','2022-05-27 20:29:05'),(597,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:15:34','2022-05-27 20:29:05','2022-05-27 20:29:05'),(598,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','test',1.00,1,'00:15:35','2022-05-27 20:29:05','2022-05-27 20:29:05'),(599,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','submit',1.00,1,'00:15:38','2022-05-27 20:29:07','2022-05-27 20:29:07'),(600,62,38,'SELECT DISTINCT kode_hari __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:15:53','2022-05-27 20:29:26','2022-05-27 20:29:26'),(601,62,38,'SELECT DISTINCT kode_hari FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:15:55','2022-05-27 20:29:26','2022-05-27 20:29:26'),(602,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:15:56','2022-05-27 20:29:26','2022-05-27 20:29:26'),(603,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','test',1.00,1,'00:15:57','2022-05-27 20:29:26','2022-05-27 20:29:26'),(604,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','submit',1.00,1,'00:16:04','2022-05-27 20:29:33','2022-05-27 20:29:33'),(605,62,38,'SELECT DISTINCT kode_hari __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:16:36','2022-05-27 20:30:08','2022-05-27 20:30:08'),(606,62,38,'SELECT DISTINCT kode_hari FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:16:37','2022-05-27 20:30:08','2022-05-27 20:30:08'),(607,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:16:38','2022-05-27 20:30:08','2022-05-27 20:30:08'),(608,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','submit',1.00,1,'00:16:39','2022-05-27 20:30:08','2022-05-27 20:30:08'),(609,62,38,'SELECT DISTINCT kode_hari __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:41','2022-05-27 20:32:20','2022-05-27 20:32:20'),(610,62,38,'SELECT DISTINCT kode_hari FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:00:42','2022-05-27 20:32:20','2022-05-27 20:32:20'),(611,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:00:43','2022-05-27 20:32:20','2022-05-27 20:32:20'),(612,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','submit',1.00,1,'00:00:44','2022-05-27 20:32:20','2022-05-27 20:32:20'),(613,62,39,'SELECT * __ __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:00:53','2022-05-27 20:32:45','2022-05-27 20:32:45'),(614,62,39,'SELECT * FROM __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:57','2022-05-27 20:32:45','2022-05-27 20:32:45'),(615,62,39,'SELECT * FROM ruang WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:00:59','2022-05-27 20:32:45','2022-05-27 20:32:45'),(616,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN __ __ __','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_5\",\"index\":0}}','move',-1.00,0,'00:01:02','2022-05-27 20:32:45','2022-05-27 20:32:45'),(617,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' __ __','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:01:05','2022-05-27 20:32:45','2022-05-27 20:32:45'),(618,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND __','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_8\",\"index\":0}}','move',-1.00,0,'00:01:07','2022-05-27 20:32:45','2022-05-27 20:32:45'),(619,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_9\",\"index\":0}}','move',-1.00,0,'00:01:09','2022-05-27 20:32:45','2022-05-27 20:32:45'),(620,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'','{}','test',1.00,1,'00:01:10','2022-05-27 20:32:45','2022-05-27 20:32:45'),(621,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'','{}','submit',1.00,1,'00:01:16','2022-05-27 20:32:51','2022-05-27 20:32:51'),(622,62,38,'SELECT DISTINCT kode_hari __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:05','2022-05-27 20:41:15','2022-05-27 20:41:15'),(623,62,38,'SELECT DISTINCT kode_hari FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:00:06','2022-05-27 20:41:15','2022-05-27 20:41:15'),(624,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:00:07','2022-05-27 20:41:15','2022-05-27 20:41:15'),(625,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','submit',1.00,1,'00:00:08','2022-05-27 20:41:15','2022-05-27 20:41:15'),(626,62,43,'SELECT * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:00:11','2022-05-27 20:41:26','2022-05-27 20:41:26'),(627,62,43,'SELECT * FROM __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:13','2022-05-27 20:41:26','2022-05-27 20:41:26'),(628,62,43,'SELECT * FROM jadwal __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:00:14','2022-05-27 20:41:26','2022-05-27 20:41:26'),(629,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:00:16','2022-05-27 20:41:26','2022-05-27 20:41:26'),(630,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:00:18','2022-05-27 20:41:26','2022-05-27 20:41:26'),(631,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','submit',1.00,1,'00:00:19','2022-05-27 20:41:26','2022-05-27 20:41:26'),(632,62,42,'SELECT __ __ FROM __ ORDER BY __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:00:25','2022-05-27 20:42:22','2022-05-27 20:42:22'),(633,62,42,'SELECT kode_jp __ FROM __ ORDER BY __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:00:51','2022-05-27 20:42:22','2022-05-27 20:42:22'),(634,62,42,'SELECT kode_jp jp_mulai FROM __ ORDER BY __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:58','2022-05-27 20:42:22','2022-05-27 20:42:22'),(635,62,42,'SELECT kode_jp jp_mulai FROM jp ORDER BY __','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:01:04','2022-05-27 20:42:22','2022-05-27 20:42:22'),(636,62,42,'SELECT kode_jp jp_mulai FROM jp ORDER BY jp_mulai','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_6\",\"index\":0}}','move',-1.00,0,'00:01:12','2022-05-27 20:42:22','2022-05-27 20:42:22'),(637,62,42,'SELECT kode_jp jp_mulai FROM jp ORDER BY jp_mulai','{}','test',0.80,0,'00:01:15','2022-05-27 20:42:22','2022-05-27 20:42:22'),(638,62,42,'SELECT kode_jp jp_mulai FROM jp ORDER BY jp_mulai','{}','submit',0.80,0,'00:01:50','2022-05-27 20:42:57','2022-05-27 20:42:57'),(639,62,43,'SELECT * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:04:10','2022-05-28 02:20:46','2022-05-28 02:20:46'),(640,62,43,'SELECT * FROM __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:04:12','2022-05-28 02:20:46','2022-05-28 02:20:46'),(641,62,43,'SELECT * FROM jadwal __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:04:13','2022-05-28 02:20:46','2022-05-28 02:20:46'),(642,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:04:15','2022-05-28 02:20:46','2022-05-28 02:20:46'),(643,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:04:17','2022-05-28 02:20:46','2022-05-28 02:20:46'),(644,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','test',1.00,1,'00:04:30','2022-05-28 02:20:46','2022-05-28 02:20:46'),(645,62,43,'SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1','{}','submit',1.00,1,'00:04:49','2022-05-28 02:21:05','2022-05-28 02:21:05'),(646,62,39,'SELECT * __ __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:04:56','2022-05-28 02:21:27','2022-05-28 02:21:27'),(647,62,39,'SELECT * FROM __ WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:04:57','2022-05-28 02:21:27','2022-05-28 02:21:27'),(648,62,39,'SELECT * FROM ruang WHERE __ BETWEEN __ __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:05:01','2022-05-28 02:21:27','2022-05-28 02:21:27'),(649,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN __ __ __','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_5\",\"index\":0}}','move',-1.00,0,'00:05:05','2022-05-28 02:21:27','2022-05-28 02:21:27'),(650,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' __ __','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:05:07','2022-05-28 02:21:27','2022-05-28 02:21:27'),(651,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND __','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_8\",\"index\":0}}','move',-1.00,0,'00:05:09','2022-05-28 02:21:27','2022-05-28 02:21:27'),(652,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_9\",\"index\":0}}','move',-1.00,0,'00:05:11','2022-05-28 02:21:27','2022-05-28 02:21:27'),(653,62,39,'SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'','{}','submit',1.00,1,'00:05:12','2022-05-28 02:21:27','2022-05-28 02:21:27'),(654,62,38,'SELECT DISTINCT kode_hari __ __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:05:17','2022-05-28 02:21:35','2022-05-28 02:21:35'),(655,62,38,'SELECT DISTINCT kode_hari FROM __','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:05:18','2022-05-28 02:21:35','2022-05-28 02:21:35'),(656,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:05:19','2022-05-28 02:21:35','2022-05-28 02:21:35'),(657,62,38,'SELECT DISTINCT kode_hari FROM jadwal','{}','submit',1.00,1,'00:05:19','2022-05-28 02:21:35','2022-05-28 02:21:35'),(658,62,29,'select nama __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:00:24','2022-05-28 02:40:25','2022-05-28 02:40:25'),(659,62,29,'select nama ipk from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:29','2022-05-28 02:40:25','2022-05-28 02:40:25'),(660,62,29,'select nama ipk from mahasiswa order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:00:40','2022-05-28 02:40:25','2022-05-28 02:40:25'),(661,62,29,'select nama ipk from mahasiswa order by ipk','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_6\",\"index\":0}}','move',-1.00,0,'00:00:44','2022-05-28 02:40:25','2022-05-28 02:40:25'),(662,62,29,'select nama ipk from mahasiswa order by ipk desc','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:00:46','2022-05-28 02:40:25','2022-05-28 02:40:25'),(663,62,29,'select nama ipk from mahasiswa order by ipk desc','{}','test',-1.00,0,'00:01:39','2022-05-28 02:40:25','2022-05-28 02:40:25'),(664,62,29,'select __ __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:03:17','2022-05-28 02:40:25','2022-05-28 02:40:25'),(665,62,29,'select nama __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:03:26','2022-05-28 02:40:25','2022-05-28 02:40:25'),(666,62,29,'undefined','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:17:41','2022-05-28 02:40:25','2022-05-28 02:40:25'),(667,62,29,'select __ __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:17:41','2022-05-28 02:40:25','2022-05-28 02:40:25'),(668,62,29,'undefined','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:17:42','2022-05-28 02:40:25','2022-05-28 02:40:25'),(669,62,29,'select __ __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:17:42','2022-05-28 02:40:25','2022-05-28 02:40:25'),(670,62,29,'select nama __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:18:28','2022-05-28 02:40:25','2022-05-28 02:40:25'),(671,62,29,'select nama ipk from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:18:29','2022-05-28 02:40:25','2022-05-28 02:40:25'),(672,62,29,'select nama ipk from mahasiswa order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:18:30','2022-05-28 02:40:25','2022-05-28 02:40:25'),(673,62,29,'select nama ipk from mahasiswa order by ipk','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_6\",\"index\":0}}','move',-1.00,0,'00:18:32','2022-05-28 02:40:25','2022-05-28 02:40:25'),(674,62,29,'select nama ipk from mahasiswa order by ipk desc','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:18:34','2022-05-28 02:40:25','2022-05-28 02:40:25'),(675,62,29,'select nama ipk from mahasiswa order by ipk desc','{}','test',1.00,1,'00:18:38','2022-05-28 02:40:25','2022-05-28 02:40:25'),(676,62,29,'select nama __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:18:47','2022-05-28 02:40:41','2022-05-28 02:40:41'),(677,62,29,'select nama ipk from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:18:48','2022-05-28 02:40:41','2022-05-28 02:40:41'),(678,62,29,'select nama ipk from mahasiswa order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:18:49','2022-05-28 02:40:41','2022-05-28 02:40:41'),(679,62,29,'select nama ipk from mahasiswa order by ipk','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_6\",\"index\":0}}','move',-1.00,0,'00:18:51','2022-05-28 02:40:41','2022-05-28 02:40:41'),(680,62,29,'select nama ipk from mahasiswa order by ipk desc','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:18:52','2022-05-28 02:40:41','2022-05-28 02:40:41'),(681,62,29,'select nama ipk from mahasiswa order by ipk desc','{}','submit',1.00,1,'00:18:53','2022-05-28 02:40:41','2022-05-28 02:40:41'),(682,62,39,'select * __ __ where __ between','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:19:01','2022-05-28 02:41:18','2022-05-28 02:41:18'),(683,62,39,'select * from __ where __ between','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:19:04','2022-05-28 02:41:18','2022-05-28 02:41:18'),(684,62,39,'select * from ruang where __ between','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:19:08','2022-05-28 02:41:18','2022-05-28 02:41:18'),(685,62,39,'select * from ruang where kode_ruang between','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_5\",\"index\":0}}','move',-1.00,0,'00:19:23','2022-05-28 02:41:18','2022-05-28 02:41:18'),(686,62,39,'select * from ruang where kode_ruang between \'0501\'','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:19:27','2022-05-28 02:41:18','2022-05-28 02:41:18'),(687,62,39,'select * from ruang where kode_ruang between \'0501\' and','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_8\",\"index\":0}}','move',-1.00,0,'00:19:29','2022-05-28 02:41:18','2022-05-28 02:41:18'),(688,62,39,'select * from ruang where kode_ruang between \'0501\' and \'0508\'','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_9\",\"index\":0}}','move',-1.00,0,'00:19:30','2022-05-28 02:41:18','2022-05-28 02:41:18'),(689,62,39,'select * from ruang where kode_ruang between \'0501\' and \'0508\'','{}','test',1.00,1,'00:19:31','2022-05-28 02:41:18','2022-05-28 02:41:18'),(690,62,39,'select * from ruang where kode_ruang between \'0501\' and \'0508\'','{}','submit',1.00,1,'00:19:36','2022-05-28 02:41:24','2022-05-28 02:41:24'),(691,62,38,'select distinct kode_hari','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:19:49','2022-05-28 02:41:41','2022-05-28 02:41:41'),(692,62,38,'select distinct kode_hari from','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:19:51','2022-05-28 02:41:41','2022-05-28 02:41:41'),(693,62,38,'select distinct kode_hari from jadwal','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:19:53','2022-05-28 02:41:41','2022-05-28 02:41:41'),(694,62,38,'select distinct kode_hari from jadwal','{}','submit',1.00,1,'00:19:54','2022-05-28 02:41:41','2022-05-28 02:41:41'),(695,62,40,'select __ from __ where','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:20:05','2022-05-28 02:42:14','2022-05-28 02:42:14'),(696,62,40,'select * from __ where','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:20:07','2022-05-28 02:42:14','2022-05-28 02:42:14'),(697,62,40,'select * from dosen where','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:20:17','2022-05-28 02:42:14','2022-05-28 02:42:14'),(698,62,40,'select * from dosen where nama_dosen','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_5\",\"index\":0}}','move',-1.00,0,'00:20:21','2022-05-28 02:42:14','2022-05-28 02:42:14'),(699,62,40,'select * from dosen where nama_dosen like','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_6\",\"index\":0}}','move',-1.00,0,'00:20:22','2022-05-28 02:42:14','2022-05-28 02:42:14'),(700,62,40,'select * from dosen where nama_dosen like \"e%\"','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:20:24','2022-05-28 02:42:14','2022-05-28 02:42:14'),(701,62,40,'select * from dosen where nama_dosen like \"e%\"','{}','test',1.00,1,'00:20:26','2022-05-28 02:42:14','2022-05-28 02:42:14'),(702,62,40,'select * from dosen where nama_dosen like \"e%\"','{}','submit',1.00,1,'00:20:34','2022-05-28 02:42:21','2022-05-28 02:42:21'),(703,62,42,'select __ __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:20:38','2022-05-28 02:42:43','2022-05-28 02:42:43'),(704,62,42,'select kode_jp __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:20:44','2022-05-28 02:42:43','2022-05-28 02:42:43'),(705,62,42,'select kode_jp jp_mulai from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:20:46','2022-05-28 02:42:43','2022-05-28 02:42:43'),(706,62,42,'select kode_jp jp_mulai from jp order by','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:20:51','2022-05-28 02:42:43','2022-05-28 02:42:43'),(707,62,42,'select kode_jp jp_mulai from jp order by jp_mulai','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_6\",\"index\":0}}','move',-1.00,0,'00:20:54','2022-05-28 02:42:43','2022-05-28 02:42:43'),(708,62,42,'select kode_jp jp_mulai from jp order by jp_mulai','{}','test',0.80,0,'00:20:55','2022-05-28 02:42:43','2022-05-28 02:42:43'),(709,62,42,'select kode_jp jp_mulai from jp order by jp_mulai','{}','submit',0.80,0,'00:21:15','2022-05-28 02:43:02','2022-05-28 02:43:02'),(710,62,37,'select __ __ ruang where __ =\"lkj1\"','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:21:25','2022-05-28 02:43:21','2022-05-28 02:43:21'),(711,62,37,'select deskripsi_ruang __ ruang where __ =\"lkj1\"','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:21:26','2022-05-28 02:43:21','2022-05-28 02:43:21'),(712,62,37,'select deskripsi_ruang from ruang where __ =\"lkj1\"','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:21:27','2022-05-28 02:43:21','2022-05-28 02:43:21'),(713,62,37,'select deskripsi_ruang from ruang where nama_ruang =\"lkj1\"','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_5\",\"index\":0}}','move',-1.00,0,'00:21:29','2022-05-28 02:43:21','2022-05-28 02:43:21'),(714,62,37,'select deskripsi_ruang from ruang where nama_ruang =\"lkj1\"','{}','submit',1.00,1,'00:21:34','2022-05-28 02:43:21','2022-05-28 02:43:21'),(715,62,43,'select * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:21:41','2022-05-28 02:43:38','2022-05-28 02:43:38'),(716,62,43,'select * from __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:21:45','2022-05-28 02:43:38','2022-05-28 02:43:38'),(717,62,43,'select * from jadwal __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:21:46','2022-05-28 02:43:38','2022-05-28 02:43:38'),(718,62,43,'select * from jadwal where kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:21:47','2022-05-28 02:43:38','2022-05-28 02:43:38'),(719,62,43,'select * from jadwal where kode_hari =\'001\' and jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:21:49','2022-05-28 02:43:38','2022-05-28 02:43:38'),(720,62,43,'select * from jadwal where kode_hari =\'001\' and jp_mulai=1','{}','submit',1.00,1,'00:21:50','2022-05-28 02:43:38','2022-05-28 02:43:38'),(721,63,39,'select * __ __ where __ between','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:00:07','2022-05-28 03:05:30','2022-05-28 03:05:30'),(722,63,39,'select * from __ where __ between','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:08','2022-05-28 03:05:30','2022-05-28 03:05:30'),(723,63,39,'select * from ruang where __ between','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:00:10','2022-05-28 03:05:30','2022-05-28 03:05:30'),(724,63,39,'select * from ruang where kode_ruang between','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_5\",\"index\":0}}','move',-1.00,0,'00:00:13','2022-05-28 03:05:30','2022-05-28 03:05:30'),(725,63,39,'select * from ruang where kode_ruang between \'0501\'','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:00:18','2022-05-28 03:05:30','2022-05-28 03:05:30'),(726,63,39,'select * from ruang where kode_ruang between \'0501\' and','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_8\",\"index\":0}}','move',-1.00,0,'00:00:20','2022-05-28 03:05:30','2022-05-28 03:05:30'),(727,63,39,'select * from ruang where kode_ruang between \'0501\' and \'0508\'','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_9\",\"index\":0}}','move',-1.00,0,'00:00:21','2022-05-28 03:05:30','2022-05-28 03:05:30'),(728,63,39,'select * from ruang where kode_ruang between \'0501\' and \'0508\'','{}','test',1.00,1,'00:00:23','2022-05-28 03:05:30','2022-05-28 03:05:30'),(729,63,39,'select * from ruang where kode_ruang between \'0501\' and \'0508\'','{}','submit',1.00,1,'00:00:25','2022-05-28 03:05:33','2022-05-28 03:05:33'),(730,63,37,'select __ __ ruang where __ =\"lkj1\"','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:00:29','2022-05-28 03:05:44','2022-05-28 03:05:44'),(731,63,37,'select deskripsi_ruang __ ruang where __ =\"lkj1\"','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:00:31','2022-05-28 03:05:44','2022-05-28 03:05:44'),(732,63,37,'select deskripsi_ruang from ruang where __ =\"lkj1\"','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:00:34','2022-05-28 03:05:44','2022-05-28 03:05:44'),(733,63,37,'select deskripsi_ruang from ruang where nama_ruang =\"lkj1\"','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_5\",\"index\":0}}','move',-1.00,0,'00:00:36','2022-05-28 03:05:44','2022-05-28 03:05:44'),(734,63,37,'select deskripsi_ruang from ruang where nama_ruang =\"lkj1\"','{}','submit',1.00,1,'00:00:37','2022-05-28 03:05:44','2022-05-28 03:05:44'),(735,63,40,'select __ from __ where','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:00:40','2022-05-28 03:06:05','2022-05-28 03:06:05'),(736,63,40,'select * from __ where','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:00:42','2022-05-28 03:06:05','2022-05-28 03:06:05'),(737,63,40,'select * from dosen where','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:00:43','2022-05-28 03:06:05','2022-05-28 03:06:05'),(738,63,40,'select * from dosen where nama_dosen','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_5\",\"index\":0}}','move',-1.00,0,'00:00:48','2022-05-28 03:06:05','2022-05-28 03:06:05'),(739,63,40,'select * from dosen where nama_dosen like','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_6\",\"index\":0}}','move',-1.00,0,'00:00:50','2022-05-28 03:06:05','2022-05-28 03:06:05'),(740,63,40,'select * from dosen where nama_dosen like \"e%\"','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:00:52','2022-05-28 03:06:05','2022-05-28 03:06:05'),(741,63,40,'select * from dosen where nama_dosen like \"e%\"','{}','submit',1.00,1,'00:00:58','2022-05-28 03:06:05','2022-05-28 03:06:05'),(742,63,42,'select __ __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:01:20','2022-05-28 03:06:50','2022-05-28 03:06:50'),(743,63,42,'select kode_jp __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:01:22','2022-05-28 03:06:50','2022-05-28 03:06:50'),(744,63,42,'select kode_jp jp_mulai from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:01:23','2022-05-28 03:06:50','2022-05-28 03:06:50'),(745,63,42,'select kode_jp jp_mulai from jp order by','{\"from\":{\"index\":2,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:01:34','2022-05-28 03:06:50','2022-05-28 03:06:50'),(746,63,42,'select kode_jp jp_mulai from jp order by jp_mulai','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_6\",\"index\":0}}','move',-1.00,0,'00:01:42','2022-05-28 03:06:50','2022-05-28 03:06:50'),(747,63,42,'select kode_jp jp_mulai from jp order by jp_mulai','{}','test',0.80,0,'00:01:43','2022-05-28 03:06:50','2022-05-28 03:06:50'),(748,63,42,'select kode_jp jp_mulai from jp order by jp_mulai','{}','submit',0.80,0,'00:02:09','2022-05-28 03:07:17','2022-05-28 03:07:17'),(749,63,29,'select nama __ from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_1\",\"index\":0}}','move',-1.00,0,'00:02:18','2022-05-28 03:07:32','2022-05-28 03:07:32'),(750,63,29,'select nama ipk from __ order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:02:19','2022-05-28 03:07:32','2022-05-28 03:07:32'),(751,63,29,'select nama ipk from mahasiswa order by','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:02:22','2022-05-28 03:07:32','2022-05-28 03:07:32'),(752,63,29,'select nama ipk from mahasiswa order by ipk','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_6\",\"index\":0}}','move',-1.00,0,'00:02:23','2022-05-28 03:07:32','2022-05-28 03:07:32'),(753,63,29,'select nama ipk from mahasiswa order by ipk desc','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:02:24','2022-05-28 03:07:32','2022-05-28 03:07:32'),(754,63,29,'select nama ipk from mahasiswa order by ipk desc','{}','submit',1.00,1,'00:02:25','2022-05-28 03:07:32','2022-05-28 03:07:32'),(755,63,38,'select distinct kode_hari','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:02:31','2022-05-28 03:07:42','2022-05-28 03:07:42'),(756,63,38,'select distinct kode_hari from','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:02:32','2022-05-28 03:07:42','2022-05-28 03:07:42'),(757,63,38,'select distinct kode_hari from jadwal','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:02:34','2022-05-28 03:07:42','2022-05-28 03:07:42'),(758,63,38,'select distinct kode_hari from jadwal','{}','submit',1.00,1,'00:02:35','2022-05-28 03:07:42','2022-05-28 03:07:42'),(759,63,43,'select * __ __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_0\",\"index\":0}}','move',-1.00,0,'00:02:39','2022-05-28 03:07:53','2022-05-28 03:07:53'),(760,63,43,'select * from __ __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_2\",\"index\":0}}','move',-1.00,0,'00:02:40','2022-05-28 03:07:53','2022-05-28 03:07:53'),(761,63,43,'select * from jadwal __ kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_3\",\"index\":0}}','move',-1.00,0,'00:02:41','2022-05-28 03:07:53','2022-05-28 03:07:53'),(762,63,43,'select * from jadwal where kode_hari =\'001\' __ jp_mulai=1','{\"from\":{\"index\":1,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_4\",\"index\":0}}','move',-1.00,0,'00:02:43','2022-05-28 03:07:53','2022-05-28 03:07:53'),(763,63,43,'select * from jadwal where kode_hari =\'001\' and jp_mulai=1','{\"from\":{\"index\":0,\"droppableId\":\"sql_parts\"},\"to\":{\"droppableId\":\"sql_constructed_7\",\"index\":0}}','move',-1.00,0,'00:02:44','2022-05-28 03:07:53','2022-05-28 03:07:53'),(764,63,43,'select * from jadwal where kode_hari =\'001\' and jp_mulai=1','{}','submit',1.00,1,'00:02:46','2022-05-28 03:07:53','2022-05-28 03:07:53');
/*!40000 ALTER TABLE `log_session_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_containers`
--

DROP TABLE IF EXISTS `question_containers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_containers` (
  `question_id` int(11) NOT NULL,
  `container_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`question_id`,`container_id`),
  UNIQUE KEY `question_containers_question_id_container_id_unique` (`question_id`,`container_id`),
  KEY `container_id` (`container_id`),
  CONSTRAINT `question_containers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `question_containers_ibfk_2` FOREIGN KEY (`container_id`) REFERENCES `containers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_containers`
--

LOCK TABLES `question_containers` WRITE;
/*!40000 ALTER TABLE `question_containers` DISABLE KEYS */;
INSERT INTO `question_containers` VALUES (8,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(8,9,'2022-02-24 00:12:40','2022-02-24 00:12:40'),(10,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(10,9,'2022-02-24 00:13:16','2022-02-24 00:13:16'),(11,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(11,17,'2022-05-24 08:07:21','2022-05-24 08:07:21'),(12,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(13,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(15,5,'2022-05-20 06:06:20','2022-05-20 06:06:20'),(16,5,'2022-03-29 17:06:43','2022-03-29 17:06:43'),(22,8,'2022-04-06 09:18:01','2022-04-06 09:18:01'),(22,10,'2022-04-07 15:13:00','2022-04-07 15:13:00'),(28,10,'2022-04-07 15:13:04','2022-04-07 15:13:04'),(29,8,'2022-04-12 15:12:46','2022-04-12 15:12:46'),(29,10,'2022-04-12 15:16:34','2022-04-12 15:16:34'),(29,18,'2022-05-27 10:02:54','2022-05-27 10:02:54'),(35,18,'2022-05-28 03:42:38','2022-05-28 03:42:38'),(37,18,'2022-05-27 10:02:08','2022-05-27 10:02:08'),(38,18,'2022-05-27 10:02:11','2022-05-27 10:02:11'),(39,18,'2022-05-27 10:02:15','2022-05-27 10:02:15'),(40,18,'2022-05-27 10:02:18','2022-05-27 10:02:18'),(42,18,'2022-05-27 10:02:26','2022-05-27 10:02:26'),(43,18,'2022-05-27 10:02:30','2022-05-27 10:02:30'),(44,18,'2022-05-28 03:42:22','2022-05-28 03:42:22'),(45,18,'2022-05-28 03:46:56','2022-05-28 03:46:56');
/*!40000 ALTER TABLE `question_containers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `sql_parts` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `sql_hints` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `answer` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `answer_pic` text NOT NULL,
  `tables` text NOT NULL,
  `case_study_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `label_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `case_study_id` (`case_study_id`),
  KEY `user_id` (`user_id`),
  KEY `questions_ibfk_585` (`label_id`),
  CONSTRAINT `questions_ibfk_583` FOREIGN KEY (`case_study_id`) REFERENCES `case_studies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `questions_ibfk_584` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `questions_ibfk_585` FOREIGN KEY (`label_id`) REFERENCES `questions_label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (8,'Dosen ingin menampilkan semua data tentang mahasiswa. Ini hasil edit soal','[]','[]','[\"SELECT * FROM mahasiswa\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa\",\"SELECT apapun\"]','1648804801948_56ce243e-a326-4fd3-998c-44fcdb27ed09.jpg','mahasiswa',2,5,1,'2021-06-17 03:46:54','2022-04-01 09:20:01'),(9,'<p>Dosen ingin menampilkan semua data mahasiswa yang namanya diawali dengan huruf \'D\'</p>',NULL,NULL,'[\"SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE nama LIKE \'D%\'\"]','answer_pic-1623901699340.png','mahasiswa',2,5,1,'2021-06-17 03:48:19','2021-06-17 03:48:19'),(10,'<p>Dosen ingin mengetahui urutan IPK dari yang paling besar ke yang paling kecil, informasi yang ditampilkan meliputi nama dan ipk mahasiswa tersebut</p>',NULL,NULL,'[\"SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC\"]','answer_pic-1623901724476.png','mahasiswa',2,5,1,'2021-06-17 03:48:44','2021-06-17 03:48:44'),(11,'<p>Administrator ingin mengetahui jumlah mahasiswa dari setiap kelas, tampilkan nama kelas dan jumlah mahasiswa dari kelas tersebut</p>',NULL,NULL,'[\"SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(*) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(nama) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(kelas) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(ipk) as jumlah_mhs FROM mahasiswa GROUP BY kelas\"]','answer_pic-1623901797490.png','mahasiswa',2,5,1,'2021-06-17 03:49:57','2021-06-17 03:49:57'),(12,'<p>Administrator ingin mengetahui kelas mana yang jumlah mahasiswanya lebih dari 2, tampilkan nama kelas dan jumlah mahasiswa kelas tersebut</p>',NULL,NULL,'[\"SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(*) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(nama) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(ipk) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(kelas) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\"]','answer_pic-1623901838360.png','mahasiswa',2,5,1,'2021-06-17 03:50:38','2021-06-17 03:50:38'),(13,'<p>Dosen ingin mengetahui data mahasiswa dengan IPK antara 3.00 sampe 4.00</p>',NULL,NULL,'[\"SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00\",\"SELECT * FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00\",\"SELECT * FROM mahasiswa WHERE ipk >= 3.00\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk >= 3.00\"]','answer_pic-1623901915295.png','mahasiswa',2,5,1,'2021-06-17 03:51:56','2021-06-17 03:51:56'),(14,'<p>Dosen ingin melihat data mahasiswa yang nilai IPKnya paling kecil. Petunjuk: Gunakan SubQuery</p>',NULL,NULL,'[\"SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)\",\"SELECT * FROM mahasiswa ORDER BY ipk LIMIT 1\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa ORDER BY ipk LIMIT 1\"]','answer_pic-1623904606531.png','user',2,5,1,'2021-06-17 04:36:46','2021-06-17 04:36:46'),(15,'Administrator ingin melihat tanggal login terakhir dari mahasiswa, tampilkan nama dan waktu login dari mahasiswa tersebut','[]','[]','[\"SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa\"]','1653485518678_5b18a68c-5bf7-4589-a8a0-2451c2781e16.png','mahasiswa,user',2,5,1,'2021-06-17 04:38:04','2022-05-25 13:31:58'),(16,'<p>Administrator ingin menampilkan data nama dan kelas. Data tersebut di dapatkan dengan menggabungkan keseluruhan data antara tabel mahasiswa dan user, dimana data yang memiliki isi yang sama tetap ditampilkan</p>',NULL,NULL,'[\"(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)\"]','answer_pic-1623904707990.png','mahasiswa,user',2,5,1,'2021-06-17 04:38:27','2021-06-17 04:38:27'),(22,'Dosen ingin melihat daftar mahasiswa, ini dibuat di dev','[\"*\",\"karyawan\",\"nama\",\"alamat\",\"mahasiswa\"]','[\"SELECT\",\"__\",\"FROM\",\"__\"]','[\"SELECT * FROM mahasiswa\"]','1649498323148_250a6d96-c44f-4a6e-948e-bf33982ce09a.jpg','mahasiswa,user',32,5,2,'2022-03-30 15:40:46','2022-04-09 09:58:43'),(28,'ini question close-ended','[\"*\",\"FROM\",\"mahasiswa\",\"karyawan\"]','[\"SELECT\",\"__\",\"__\",\"__\"]','[\"SELECT * FROM mahasiswa\"]','1649496467027_cb0b3932-d589-43ee-9371-27ae1d090d0d.jpg','user,mahasiswa',32,5,2,'2022-03-31 15:37:40','2022-04-09 09:27:47'),(29,'Dosen ingin mengetahui urutan IPK dari yang paling besar ke yang paling kecil, informasi yang ditampilkan meliputi nama dan ipk mahasiswa tersebut. Percobaan','[\"nama,\",\"ipk\",\"mahasiswa\",\"DESC\",\"ipk\"]','[\"SELECT\",\"__\",\"__\",\"FROM\",\"__\",\"ORDER BY\",\"__\",\"__\"]','[\"SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC \"]','1653708544841_44b2a47f-205c-4403-b3dd-3ad3da361a3f.png','mahasiswa',32,5,2,'2022-04-12 15:05:54','2022-05-28 03:29:04'),(30,'test coba soal ','[\"SELECT\",\"*\",\"FROM\",\"mahasiswa\",\"karywaan\"]','[\"SELECT\",\"__\",\"__\",\"__\"]','[\"SELECT * FROM mahasiswa\"]','1650526688618_97fa79a4-912d-44ac-a179-1199ac86c095.jpg','mahasiswa',32,5,2,'2022-04-21 07:38:08','2022-04-21 07:38:08'),(33,'testing clos-end','[\"SELECT\",\"mahasiswa\",\"karyawan\",\"ipk\",\"BETWEEN\",\"3.00\",\"AND\",\"4.00\"]','[\"__\",\"*\",\"FROM\",\"__\",\"WHERE\",\"__\",\"__\",\"__\",\"__\",\"__\"]','[\"SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00\"]','1651120158271_4406f679-05bf-4dd2-a8cd-9e942e0eb6d4.jpg','mahasiswa',32,5,2,'2022-04-21 19:34:19','2022-04-28 04:29:18'),(34,'Ini coba distinct, kolom nama ya','[\"FROM\",\"DISTINCT\",\"nama\",\"mahasiswa\",\"karyawan\"]','[\"SELECT\",\"__\",\"__\",\"__\",\"__\"]','[\"SELECT DISTINCT nama from mahasiswa\"]','1652433060448_fb581a0c-d61c-495e-98cc-6ff3ae558dcf.jpg','mahasiswa',32,5,2,'2022-05-13 09:11:00','2022-05-13 09:11:00'),(35,'Dosen ingin menampilkan semua data mahasiswa yang telah dikelompokkan untuk masing masing kelas.','[\"SELECT\",\"mahasiswa\",\"ipk\",\"GROUP BY\",\"hello\",\"kelas\",\"nama\"]','[\"__\",\"__\",\"FROM\",\"__\",\"__\",\"__\"]','[\"SELECT nama FROM mahasiswa GROUP BY kelas\"]','1653709144061_1db15624-7cee-48d9-8f0e-91533b4aa975.png','mahasiswa',32,5,2,'2022-05-13 09:13:52','2022-05-28 03:39:04'),(36,'Testing saja open ended','[]','[]','[\"SELECT * FROM mahasiswa AND user\"]','1653375703020_b269b929-d8a5-440f-ad7b-192c7cd83ec5.jpg','mahasiswa,user',32,5,1,'2022-05-24 07:01:43','2022-05-24 07:01:43'),(37,'Dosen ingin mengetahui apakah kegunaan dari ruang dengan nama ruang LKJI','[\"SELECT\",\"deskripsi_ruang\",\"karyawan\",\"FROM\",\"nama_ruang\"]','[\"__\",\"__\",\"__\",\"ruang\",\"WHERE\",\"__\",\"=\\\"LKJ1\\\"\"]','[\"SELECT deskripsi_ruang FROM ruang WHERE nama_ruang = \\\"LKJ1\\\"\"]','1653658596620_02521e25-538b-4f95-bec2-25f3c26f933d.png','ruang',38,5,2,'2022-05-27 09:46:46','2022-05-27 13:36:36'),(38,'Dosen ingin mengetahui apa saja hari yang terdapat dalam jadwal yang ada','[\"kode_hari\",\"FROM\",\"menu\",\"jadwal\"]','[\"SELECT\",\"DISTINCT\",\"__\",\"__\",\"__\"]','[\"SELECT DISTINCT kode_hari FROM jadwal\"]','1653645049239_dae47b2b-59d0-41eb-b349-f8e6378b2d17.png','jadwal',38,5,2,'2022-05-27 09:50:03','2022-05-27 09:50:49'),(39,'Dosen ingin mengetahui daftar ruangan antara kode 0501 dan 0508','[\"*\",\"FROM\",\"ruang\",\"jadwal\",\"kode_ruang\",\"kode_jadwal\",\"\'0501\'\",\"AND\",\"\'0508\'\"]','[\"SELECT\",\"__\",\"__\",\"__\",\"WHERE\",\"__\",\"BETWEEN\",\"__\",\"__\",\"__\"]','[\"SELECT * FROM ruang WHERE kode_ruang BETWEEN \'0501\' AND \'0508\'\"]','1653645159077_1679b7d1-9b92-4bad-89ca-5e14e6a4f5c7.png','ruang',38,5,2,'2022-05-27 09:52:39','2022-05-27 09:52:39'),(40,'Admin ingin menampilkan data dosen dengan nama berawalan E','[\"SELECT\",\"*\",\"dosen\",\"mahasiswa\",\"nama_mhs\",\"nama_dosen\",\"LIKE\",\"\\\"E%\\\"\"]','[\"__\",\"__\",\"FROM\",\"__\",\"WHERE\",\"__\",\"__\",\"__\"]','[\"SELECT * FROM dosen WHERE nama_dosen LIKE \\\"E%\\\"\"]','1653708138530_315a2823-a41c-49a6-9109-75edcc7d0a6c.png','dosen',38,5,2,'2022-05-27 09:55:56','2022-05-28 03:22:18'),(42,'Dosen ingin menampilkan daftar kode jadwal terurut berdasarkan jam mulai belajar','[\"SELECT\",\"jp_mulai\",\"jp_mulai\",\"jp\",\"kode_jp,\"]','[\"__\",\"__\",\"__\",\"FROM\",\"__\",\"ORDER BY\",\"__\"]','[\"SELECT kode_jp, jp_mulai FROM jp ORDER BY jp_mulai\"]','1653708186828_56aea058-1c93-44bb-acd2-b2cc577137a4.png','jadwal',38,5,2,'2022-05-27 09:58:46','2022-05-28 03:23:06'),(43,'Dosen ingin melihat daftar jadwal pada Hari Senin di jam pelajaran pertama.','[\"SELECT\",\"FROM\",\"jadwal\",\"AND\",\"WHERE\"]','[\"__\",\"*\",\"__\",\"__\",\"__\",\"kode_hari\",\"=\'001\'\",\"__\",\"jp_mulai=1\"]','[\"SELECT * FROM jadwal WHERE kode_hari =\'001\' AND jp_mulai=1\"]','1653682792656_0119e705-19f1-47ef-a283-a88acc473302.png','jadwal',38,5,2,'2022-05-27 10:01:15','2022-05-27 20:19:52'),(44,'Dosen ingin menampilkan semua data tentang mahasiswa.','[\"id_mahasiswa,\",\"kelas,\",\"ipk\",\"nama,\",\"mahasiswa\",\"user\"]','[\"SELECT\",\"__\",\"__\",\"__\",\"__\",\"FROM\",\"__\"]','[\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa\"]','1653712567074_79bff93c-9b7c-4f04-8898-7b04f8529287.png','mahasiswa',32,5,2,'2022-05-28 03:41:53','2022-05-28 04:36:07'),(45,'Dosen ingin melihat daftar prodi yang ada di Jurusan Teknologi Informasi','[\"SELECT\",\"kelas\",\"prodi\",\"*\"]','[\"__\",\"__\",\"FROM\",\"__\"]','[\"SELECT * FROM prodi\"]','1653709586601_62f1f014-8be8-4583-9eb0-d6b34b42ecb9.png','prodi',38,5,2,'2022-05-28 03:46:26','2022-05-28 03:46:26');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions_label`
--

DROP TABLE IF EXISTS `questions_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions_label` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions_label`
--

LOCK TABLES `questions_label` WRITE;
/*!40000 ALTER TABLE `questions_label` DISABLE KEYS */;
INSERT INTO `questions_label` VALUES (1,'Open-Ended','2021-06-17 03:46:54','2021-06-17 03:46:54'),(2,'Close-Ended','2021-06-17 03:46:54','2021-06-17 03:46:54');
/*!40000 ALTER TABLE `questions_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start` datetime NOT NULL,
  `finish` datetime NOT NULL,
  `container_id` int(11) DEFAULT NULL,
  `description` varchar(360) DEFAULT NULL,
  `type` enum('latihan','ujian') NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `container_id` (`container_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `schedules_ibfk_575` FOREIGN KEY (`container_id`) REFERENCES `containers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `schedules_ibfk_576` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
INSERT INTO `schedules` VALUES (11,'2021-07-25 07:00:00','2021-08-31 23:59:00',5,'Sesi Tes','latihan',5,'2021-06-17 04:45:05','2021-06-17 04:45:05'),(12,'2022-08-03 08:52:52','2022-10-03 08:53:52',8,'UAS 3','ujian',5,'2022-03-09 02:39:17','2022-03-09 02:39:17'),(13,'2022-08-03 08:52:52','2022-10-03 08:53:52',8,'UAS 5','ujian',5,'2022-03-09 02:39:38','2022-03-09 02:39:38'),(16,'2022-03-20 04:45:01','2022-04-18 04:45:01',8,'UAS 8','latihan',5,'2022-03-23 16:59:12','2022-03-23 18:45:15'),(18,'2022-03-28 01:51:48','2022-04-09 01:51:51',10,'Testing jadwal','ujian',5,'2022-03-26 01:52:00','2022-03-26 01:52:00'),(20,'2022-04-06 22:09:43','2022-04-07 00:09:46',8,'cobaa','latihan',5,'2022-04-06 22:09:53','2022-04-06 23:18:12'),(21,'2022-04-07 09:11:04','2022-04-07 11:15:50',5,'coba sore','latihan',5,'2022-04-07 09:11:08','2022-04-07 09:11:08'),(22,'2022-04-07 18:34:01','2022-04-27 18:34:04',5,'Coba Open Ended','latihan',5,'2022-04-07 18:34:48','2022-04-07 18:34:48'),(23,'2022-04-12 18:36:10','2022-04-12 21:36:14',10,'UAS coba','ujian',5,'2022-04-09 18:36:18','2022-04-09 18:36:18'),(24,'2022-04-15 09:59:55','2022-04-15 13:59:59',10,'Mencoba UAS','ujian',5,'2022-04-12 10:00:21','2022-04-12 10:00:21'),(25,'2022-04-20 01:30:42','2022-04-20 04:30:47',10,'Percobaan jadwal','latihan',5,'2022-04-16 01:31:23','2022-04-16 01:31:23'),(26,'2022-04-21 01:21:20','2022-04-21 03:21:23',5,'Test Open-Ended','latihan',5,'2022-04-18 01:21:25','2022-04-18 01:21:25'),(31,'2022-05-20 06:30:00','2022-05-20 09:21:00',5,'Jadwal Open','latihan',5,'2022-05-20 06:23:26','2022-05-20 06:23:26'),(34,'2022-05-24 08:07:48','2022-05-26 08:07:50',17,'Coba saja open','latihan',5,'2022-05-24 08:07:44','2022-05-24 08:07:44'),(35,'2022-05-27 10:03:36','2022-05-31 10:03:38',18,'Testing Close','latihan',5,'2022-05-27 10:03:31','2022-05-27 10:03:31'),(36,'2022-05-28 03:03:19','2022-05-28 03:30:21',18,'coba testing close','latihan',5,'2022-05-28 03:03:43','2022-05-28 03:03:43'),(37,'2022-05-28 03:32:08','2022-05-28 04:20:10',18,'coba lalala','latihan',5,'2022-05-28 03:32:07','2022-05-28 03:32:07'),(39,'2022-05-28 05:22:05','2022-05-30 06:22:00',18,'Demo Close 28 Mei','latihan',5,'2022-05-28 05:22:02','2022-05-28 05:22:16');
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `schedule_id` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  KEY `schedule_id` (`schedule_id`),
  CONSTRAINT `scores_ibfk_557` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `scores_ibfk_558` FOREIGN KEY (`schedule_id`) REFERENCES `schedules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scores`
--

LOCK TABLES `scores` WRITE;
/*!40000 ALTER TABLE `scores` DISABLE KEYS */;
INSERT INTO `scores` VALUES (17,1,11,90,'2022-03-31 16:10:17','2022-03-31 16:10:17'),(18,2,11,0,'2022-03-31 16:10:17','2022-03-31 16:10:17'),(19,1,23,60,'2022-04-10 14:48:43','2022-04-10 14:48:43'),(20,1,24,90,'2022-04-12 10:06:45','2022-04-12 10:06:45'),(22,21,25,90,'2022-04-16 01:46:30','2022-04-16 01:46:30'),(27,22,31,90,'2022-05-20 07:04:47','2022-05-20 07:04:47'),(28,21,26,81,'2022-05-25 10:49:07','2022-05-25 10:49:07'),(29,21,35,76,'2022-05-28 02:43:47','2022-05-28 02:43:47'),(30,21,36,86,'2022-05-28 03:07:57','2022-05-28 03:07:57'),(31,21,37,0,'2022-05-28 04:10:01','2022-05-28 04:10:01'),(32,21,37,0,'2022-05-28 04:10:19','2022-05-28 04:10:19'),(33,21,37,0,'2022-05-28 04:10:28','2022-05-28 04:10:28');
/*!40000 ALTER TABLE `scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session_db`
--

DROP TABLE IF EXISTS `session_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session_db` (
  `session_id` int(11) NOT NULL,
  `db_list_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`session_id`,`db_list_id`),
  UNIQUE KEY `session_db_UN` (`session_id`,`db_list_id`),
  KEY `session_db_FK_1` (`db_list_id`),
  CONSTRAINT `session_db_FK` FOREIGN KEY (`session_id`) REFERENCES `sessions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `session_db_FK_1` FOREIGN KEY (`db_list_id`) REFERENCES `db_list` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session_db`
--

LOCK TABLES `session_db` WRITE;
/*!40000 ALTER TABLE `session_db` DISABLE KEYS */;
INSERT INTO `session_db` VALUES (45,17,'2022-03-12 04:19:12','2022-03-12 04:19:12'),(45,18,'2022-03-12 04:19:22','2022-03-12 04:19:22'),(47,42,'2022-04-07 18:35:00','2022-04-07 18:35:00'),(47,43,'2022-04-07 18:35:01','2022-04-07 18:35:01'),(48,44,'2022-04-09 18:36:38','2022-04-09 18:36:38'),(48,45,'2022-04-09 18:36:39','2022-04-09 18:36:39'),(49,46,'2022-04-12 10:06:11','2022-04-12 10:06:11'),(49,47,'2022-04-12 10:06:12','2022-04-12 10:06:12'),(51,50,'2022-04-16 01:44:51','2022-04-16 01:44:51'),(51,51,'2022-04-16 01:44:52','2022-04-16 01:44:52'),(52,52,'2022-04-18 01:54:41','2022-04-18 01:54:41'),(52,53,'2022-04-18 01:54:42','2022-04-18 01:54:42'),(57,62,'2022-05-20 06:26:41','2022-05-20 06:26:41'),(57,63,'2022-05-20 06:26:42','2022-05-20 06:26:42'),(59,66,'2022-05-20 07:09:09','2022-05-20 07:09:09'),(59,67,'2022-05-20 07:09:10','2022-05-20 07:09:10'),(61,70,'2022-05-24 08:07:49','2022-05-24 08:07:49'),(61,71,'2022-05-24 08:07:51','2022-05-24 08:07:51'),(62,78,'2022-05-27 10:04:06','2022-05-27 10:04:06'),(62,79,'2022-05-27 10:04:07','2022-05-27 10:04:07'),(62,80,'2022-05-27 10:04:08','2022-05-27 10:04:08'),(62,81,'2022-05-27 10:04:16','2022-05-27 10:04:16'),(63,82,'2022-05-28 03:04:45','2022-05-28 03:04:45'),(63,83,'2022-05-28 03:04:46','2022-05-28 03:04:46'),(63,84,'2022-05-28 03:04:47','2022-05-28 03:04:47'),(63,85,'2022-05-28 03:04:56','2022-05-28 03:04:56'),(64,86,'2022-05-28 03:47:29','2022-05-28 03:47:29'),(64,87,'2022-05-28 03:47:30','2022-05-28 03:47:30'),(64,88,'2022-05-28 03:47:31','2022-05-28 03:47:31'),(64,89,'2022-05-28 03:47:40','2022-05-28 03:47:40');
/*!40000 ALTER TABLE `session_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `schedule_id` int(11) DEFAULT NULL,
  `session_started` datetime DEFAULT current_timestamp(),
  `is_finished` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id` (`student_id`),
  KEY `schedule_id` (`schedule_id`),
  CONSTRAINT `sessions_ibfk_555` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sessions_ibfk_556` FOREIGN KEY (`schedule_id`) REFERENCES `schedules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES (45,1,11,'2022-03-12 04:18:57',0,'2022-03-12 04:18:57','2022-03-12 04:18:57'),(47,1,22,'2022-04-07 18:35:00',0,'2022-04-07 18:35:00','2022-04-07 18:35:00'),(48,1,23,'2022-04-09 18:36:38',1,'2022-04-09 18:36:38','2022-04-10 14:48:43'),(49,1,24,'2022-04-12 10:06:10',1,'2022-04-12 10:06:10','2022-04-12 10:06:45'),(51,21,25,'2022-04-16 01:44:51',1,'2022-04-16 01:44:51','2022-04-16 01:46:30'),(52,21,26,'2022-04-18 01:54:41',1,'2022-04-18 01:54:41','2022-05-25 10:49:07'),(57,22,31,'2022-05-20 06:26:41',1,'2022-05-20 06:26:41','2022-05-20 07:04:47'),(59,19,31,'2022-05-20 07:09:09',0,'2022-05-20 07:09:09','2022-05-20 07:09:09'),(61,21,34,'2022-05-24 08:07:49',0,'2022-05-24 08:07:49','2022-05-24 08:07:49'),(62,21,35,'2022-05-27 10:04:06',1,'2022-05-27 10:04:06','2022-05-28 02:43:47'),(63,21,36,'2022-05-28 03:04:45',1,'2022-05-28 03:04:45','2022-05-28 03:07:57'),(64,21,37,'2022-05-28 03:47:29',1,'2022-05-28 03:47:29','2022-05-28 04:10:01');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attemps` tinyint(4) DEFAULT NULL,
  `value` text NOT NULL,
  `type` enum('threshold','latihan','ujian') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES (2,3,'100','latihan','2022-03-24 00:05:36','2022-03-24 00:05:36'),(4,0,'50','latihan','2022-03-24 00:05:36','2022-03-24 00:05:36'),(5,11,'70','ujian','2022-03-24 00:05:36','2022-04-13 05:23:49'),(6,6,'95','latihan','2022-03-24 00:05:36','2022-04-13 05:20:53'),(7,NULL,'0.6','threshold','2022-03-24 00:05:36','2022-04-13 04:44:00'),(9,0,'50','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58'),(14,9,'90','latihan','2022-03-24 00:41:58','2022-03-24 00:41:58'),(15,12,'80','latihan','2022-03-24 00:41:58','2022-03-24 00:41:58'),(16,15,'70','latihan','2022-03-24 00:41:58','2022-03-24 00:41:58'),(17,18,'60','latihan','2022-03-24 00:41:58','2022-03-24 00:41:58'),(18,2,'100','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58'),(19,3,'95','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58'),(20,4,'90','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58'),(21,5,'85','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58'),(22,6,'80','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58'),(23,7,'75','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58'),(24,8,'70','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58'),(25,9,'65','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58'),(26,10,'60','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58'),(27,11,'55','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58');
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_classes`
--

DROP TABLE IF EXISTS `student_classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_classes` (
  `student_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`student_id`,`class_id`),
  UNIQUE KEY `student_classes_class_id_student_id_unique` (`student_id`,`class_id`),
  KEY `class_id` (`class_id`),
  CONSTRAINT `student_classes_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `student_classes_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_classes`
--

LOCK TABLES `student_classes` WRITE;
/*!40000 ALTER TABLE `student_classes` DISABLE KEYS */;
INSERT INTO `student_classes` VALUES (1,1,'2021-04-17 18:12:33','2021-04-17 18:12:33'),(1,3,'2021-05-06 08:11:18','2021-05-06 08:11:18'),(1,28,'2022-03-21 15:50:10','2022-03-21 15:50:10'),(2,1,'2021-04-17 18:12:33','2021-04-17 18:12:33'),(2,12,'2021-05-06 08:10:23','2021-05-06 08:10:23'),(3,1,'2021-05-06 08:03:51','2021-05-06 08:03:51'),(3,3,'2021-05-06 08:11:18','2021-05-06 08:11:18'),(3,12,'2021-05-06 08:11:05','2021-05-06 08:11:05'),(3,28,'2022-03-21 16:22:17','2022-03-21 16:22:17'),(8,12,'2021-05-06 08:11:05','2021-05-06 08:11:05'),(10,28,'2022-03-21 16:22:17','2022-03-21 16:22:17'),(12,61,'2022-03-29 15:27:36','2022-03-29 15:27:36'),(13,61,'2022-03-29 15:27:36','2022-03-29 15:27:36'),(14,61,'2022-03-29 15:27:36','2022-03-29 15:27:36'),(15,61,'2022-03-29 15:27:36','2022-03-29 15:27:36'),(16,61,'2022-03-29 15:27:36','2022-03-29 15:27:36'),(17,61,'2022-03-29 15:27:36','2022-03-29 15:27:36'),(18,27,'2022-03-30 14:25:06','2022-03-30 14:25:06'),(19,17,'2022-04-02 11:37:49','2022-04-02 11:37:49'),(21,62,'2022-04-04 14:40:31','2022-04-04 14:40:31'),(22,17,'2022-05-20 06:14:07','2022-05-20 06:14:07'),(23,62,'2022-05-28 04:52:44','2022-05-28 04:52:44'),(24,64,'2022-05-28 06:42:11','2022-05-28 06:42:11'),(25,64,'2022-05-28 06:42:11','2022-05-28 06:42:11'),(26,64,'2022-05-28 06:42:11','2022-05-28 06:42:11'),(27,64,'2022-05-28 06:42:11','2022-05-28 06:42:11');
/*!40000 ALTER TABLE `student_classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `nim` varchar(30) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nim` (`nim`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'1741720017','$2a$10$xvH9iYn3Bs8J91xAODjuwO2sKTNKFN2Z2nonD0zQkb4JCg5DaS7Lq','1741720017','Daffa','2021-04-17 18:09:33','2021-04-17 18:09:33'),(2,'1741721000','$2a$10$als9qVk4GdMgcFOXhcGl/uiiVxpuXOJXJHVC/a9SgbumeG8RC3WQu','1741721000','Baru','2021-04-17 18:09:33','2021-04-17 18:09:33'),(3,'1741720024','$2a$10$xmprmdrDbuPmipwBRLH6v.hjEPP/EBDksB/KJXO4eExN0J/9Pmu/u','1741720024','Test','2021-04-19 05:32:20','2021-04-19 05:32:20'),(8,'1741720018','$2a$10$u0IUHJakBhkZ5zTi6/HUI.CBcsYwxcu2WUVqlck3ydS67lQQWEGYu','1741720018','Akbar','2021-05-06 07:27:11','2021-05-06 07:27:11'),(10,'1741710101','$2a$10$8GwpchPd.KS30fS6cQAOXeNJQUNhuqOVOejLo.ZBYlUi6gNFiGmZO','1741710101','John Doe','2021-05-30 17:58:11','2021-05-30 17:58:11'),(11,'1741710102','$2a$10$gUyBm.qZBB3RdklMS3BwvOioAxZYB0sw5/qvaAKk58bu1EtTR4aji','1741710102','Jane Doe','2021-05-30 17:58:11','2021-05-30 17:58:11'),(12,'2041731324','$2a$10$DrwV4UynvmfAx1PqDbgDr.BkWbpxhxacWBu69srCsBMoLX4LB4mIW','2041731324','John Doe','2022-03-28 08:21:54','2022-03-28 08:21:54'),(13,'2041731325','$2a$10$9BGGS1Hyh.QhKI8sBrtPW.Xq.JA8mVPrX5KqwHNrgsuTLPDTNfWnW','2041731325','John DoeL','2022-03-28 08:21:54','2022-03-28 08:21:54'),(14,'2041731326','$2a$10$MDeIju0RnvyP6fYOSs99vekhuYFwwfwkpjTkvtFv.tfO3ajUUWaCi','2041731326','John DoeZ','2022-03-28 08:21:54','2022-03-28 08:21:54'),(15,'2041731327','$2a$10$kEcmz6qop0IgNKdRWYId6eR2eYbYSQLBs.JDe81zX1GKgaim.Ozsy','2041731327','John DoeQ','2022-03-28 08:21:54','2022-03-28 08:21:54'),(16,'2041731328','$2a$10$c542RxWky9tpXrB7z9T98O20Fb.UMEUbf14bbrHHzowdCh.zR1roG','2041731328','John Doe Deez','2022-03-28 08:21:54','2022-03-28 08:21:54'),(17,'2041731329','$2a$10$BvBy5wBWxuo4aLrk2iccgOagxBUcjR4eHkbMAT53k1OqSh8uGyBTG','2041731329','John Doe Deez Nutz','2022-03-28 08:21:54','2022-03-28 08:21:54'),(18,'1231231','$2a$10$IjhtaFjI/EewWV.1y0MWX.dHjyRdcoDjTNpeOOifXJsBtu3Oyy57G','1231231','bahari','2022-03-30 14:25:06','2022-03-30 14:25:06'),(19,'181981912','$2a$10$3WEJXtus4zE.Cmv8BjQfRuTqYRsBDPk/iuEwDLTnniciJHTgw68fa','181981912','Test mahasiswa','2022-04-02 11:37:49','2022-04-02 11:37:49'),(20,'18417200000','$2a$10$PRlYhi0wCJVlzyN8vsx2IuYlGAAPE0G8IBYX1QQVwMstvUoTnWgpS','18417200000','Siapa','2022-04-04 05:45:59','2022-04-04 05:45:59'),(21,'1841720076','$2a$10$ywERCxOE6gQ7bb3rW2cdCO9AqgCfE33RK1k4R9Ps4q5RWC5kXGZZm','1841720076','Muhammad Ilham Adhim','2022-04-04 14:40:31','2022-04-13 13:48:21'),(22,'1841720019','$2a$10$IdVz5ffLkJq1BWDqlaOTtulGWJsAAke7cmUP63lnishmGv0SNFRIy','1841720019','Mahasiswa','2022-05-20 06:14:07','2022-05-20 06:25:14'),(23,'123456789','$2a$10$HnrMH8cw1d7NPSMQwuEhJeVCiclJAOj04EZNUyvXlwn1V0AiQDfXC','123456789','Testing Pak Khairy','2022-05-28 04:52:44','2022-05-28 04:52:44'),(24,'1841720028','$2a$10$MubkqBE6/EBsmOz/jBqPd.pNkAm2a.0oZBGWZqhO2lQ5Xa3mC1BSe','1841720028','Dharma Yudhistira','2022-05-28 06:42:11','2022-05-28 06:42:11'),(25,'1841720176','$2a$10$JX6q3H.a/0R.DC3hf9LcP.pGzSSvgpuAhVP2oB7Ism7elpYti0KQa','1841720176','M Irfan Rafif','2022-05-28 06:42:11','2022-05-28 06:42:11'),(26,'1831710091','$2a$10$tZrzDGHK3s6FmQ5rIMlyzejZqbpjPyL45mCwBg0sJ6sPKeTIvlJHC','1831710091','Naufal Yudhistira','2022-05-28 06:42:11','2022-05-28 06:42:11'),(27,'1841720213','$2a$10$RpiJLFHLiGRhQUgEL9yLOOshAgxcFaQKF91Jmn1UN7ySjkadsIjga','1841720213','Abdurrasyid M','2022-05-28 06:42:11','2022-05-28 06:42:11');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_user_answers`
--

DROP TABLE IF EXISTS `test_user_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test_user_answers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `answer` text DEFAULT NULL,
  `type` enum('test','submit') DEFAULT NULL,
  `similarity` decimal(10,2) DEFAULT -1.00,
  `is_equal` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `test_user_answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=373 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_user_answers`
--

LOCK TABLES `test_user_answers` WRITE;
/*!40000 ALTER TABLE `test_user_answers` DISABLE KEYS */;
INSERT INTO `test_user_answers` VALUES (1,'Afifah Millatina N',8,'select * from mahasiswa','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(2,'Afifah Millatina N',9,'select * from mahasiswa where nama like \'D%\'','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(3,'Andhika Muhammad Nugroho',9,'Select * from mahasiswa where nama like \'D%\'','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(4,'Andhika Muhammad Nugroho',9,'Select * from mahasiswa where nama like \'D%\'','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(5,'Andhika Muhammad Nugroho',11,'Select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(6,'Andhika Muhammad Nugroho',11,'Select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(7,'Andhika Muhammad Nugroho',11,'Select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(8,'Andhika Muhammad Nugroho',11,'Select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(9,'Andhika Muhammad Nugroho',11,'Select kelas, count (*) as jumlah_mhs from mahasiswa group by kelas','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(10,'Andhika Muhammad Nugroho',11,'Select kelas, count (*) as jumlah_mhs from mahasiswa group by kelas','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(11,'Andhika Muhammad Nugroho',13,'Select * from mahasiswa where ipk > 2.99','test',0.54,0,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(12,'Andhika Muhammad Nugroho',13,'Select * from mahasiswa where ipk >= 3','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(13,'Andhika Muhammad Nugroho',13,'Select * from mahasiswa where ipk >= 3','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(14,'Andhika Muhammad Nugroho',13,'Select * from mahasiswa where ipk >= 3','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(15,'Andhika Muhammad Nugroho',13,'Select * from mahasiswa where ipk >= 3','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(16,'Andhika Muhammad Nugroho',15,'Select mahasiswa.nama, user.waktu_login from mahasiswa inner join user on mahasiswa.id_mahasiswa = user.id_mahasiswa','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(17,'Andhika Muhammad Nugroho',15,'Select mahasiswa.nama, user.waktu_login from mahasiswa inner join user on mahasiswa.id_mahasiswa = user.id_mahasiswa','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(18,'Andhika Muhammad Nugroho',16,'(Select nama, kelas from mahasiswa) union all (select username, null from user) ','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(19,'Andhika Muhammad Nugroho',16,'(Select nama, kelas from mahasiswa) union all (select username, null from user) order by nama','test',-1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(20,'Andhika Muhammad Nugroho',16,'(Select nama, kelas from mahasiswa) union all (select username, null from user) order by nama','submit',-1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(21,'Dimas Eka Adinandra',9,'SELECT *FROM mahasiswa WHERE nama like \'D%\'','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(22,'Dimas Eka Adinandra',9,'SELECT *FROM mahasiswa WHERE nama like \'D%\'','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(23,'Dini Triana',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(24,'Dini Triana',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(25,'Dini Triana',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(26,'Dini Triana',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(27,'Aldi Surya Pranata',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(28,'Aldi Surya Pranata',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(29,'Aldi Surya Pranata',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(30,'Aldi Surya Pranata',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(31,'Aldi Surya Pranata',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(32,'Aldi Surya Pranata',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(33,'Aldi Surya Pranata',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(34,'Aldi Surya Pranata',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(35,'Aldi Surya Pranata',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(36,'Aldi Surya Pranata',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(37,'Aldi Surya Pranata',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(38,'Aldi Surya Pranata',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(39,'Wahyu Hidayah',10,'select nama, ipk from mahasiswa order by ipk desc','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(40,'Wahyu Hidayah',10,'select nama, ipk from mahasiswa order by ipk desc','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(41,'Dimas Eka Adinandra',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(42,'Dimas Eka Adinandra',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(43,'TOMI DWI SETYAWAN',8,'\nSELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(44,'TOMI DWI SETYAWAN',8,'\nSELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(45,'Dimas Eka Adinandra',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(46,'Dimas Eka Adinandra',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(47,'Dimas Eka Adinandra',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(48,'Dimas Eka Adinandra',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','submit',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(49,'Dimas Eka Adinandra',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:54','2021-06-17 05:18:54'),(50,'Dimas Eka Adinandra',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(51,'Wahyu Hidayah',11,'select kelas, count(kelas) as jumlah_mhs from mahasiswa group by kelas','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(52,'Dimas Eka Adinandra',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(53,'Dimas Eka Adinandra',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(54,'Wahyu Hidayah',11,'select kelas, count(kelas) as jumlah_mhs from mahasiswa group by kelas','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(55,'Dimas Eka Adinandra',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(56,'Dimas Eka Adinandra',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(57,'Dimas Eka Adinandra',15,'\nSELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(58,'Dimas Eka Adinandra',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(59,'Dimas Eka Adinandra',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(60,'Dimas Eka Adinandra',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(61,'Wahyu Hidayah',12,'select kelas, count(kelas) as jumlah_mhs from mahasiswa  group by kelas having jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(62,'Wahyu Hidayah',12,'select kelas, count(kelas) as jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(63,'Wahyu Hidayah',12,'select kelas, count(kelas) as jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(64,'TOMI DWI SETYAWAN',10,'\nSELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(65,'TOMI DWI SETYAWAN',10,'\nSELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(66,'TOMI DWI SETYAWAN',10,'\nSELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC;','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(67,'TOMI DWI SETYAWAN',10,'\nSELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC;','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(68,'TOMI DWI SETYAWAN',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas;','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(69,'TOMI DWI SETYAWAN',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas;','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(70,'Muhammad Taufik Prayitno',8,'SELECT * FROM mahasiswa\n','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(71,'Muhammad Taufik Prayitno',8,'SELECT * FROM mahasiswa\n','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(72,'Wahyu Hidayah',15,'select m.nama, u.waktu_login from mahasiswa as m join user as u on m.id_mahasiswa = u.id_mahasiswa','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(73,'Wahyu Hidayah',15,'select m.nama, u.waktu_login from mahasiswa as m join user as u on m.id_mahasiswa = u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(74,'Wahyu Hidayah',16,'(select nama, kelas from mahasiswa) union all (select username, null kelas from user)','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(75,'Wahyu Hidayah',16,'(select nama, kelas from mahasiswa) union all (select username, null kelas from user)','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(76,'TOMI DWI SETYAWAN',12,'\nSELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(77,'TOMI DWI SETYAWAN',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(78,'TOMI DWI SETYAWAN',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(79,'TOMI DWI SETYAWAN',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(80,'TOMI DWI SETYAWAN',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(81,'TOMI DWI SETYAWAN',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(82,'TOMI DWI SETYAWAN',14,'\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(83,'TOMI DWI SETYAWAN',14,'\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(84,'TOMI DWI SETYAWAN',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(85,'TOMI DWI SETYAWAN',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(86,'TOMI DWI SETYAWAN',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(87,'TOMI DWI SETYAWAN',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(88,'Muhammad Fakhryan Zulfahmi',8,'select * from mahasiswa','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(89,'Muhammad Fakhryan Zulfahmi',8,'select * from mahasiswa;','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(90,'Muhammad Fakhryan Zulfahmi',8,'select * from mahasiswa;','submit',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(91,'Muhammad Fakhryan Zulfahmi',9,'select * from mahasiswa where nama LIKE \'D%\'','test',1.00,1,'2021-06-17 05:18:55','2021-06-17 05:18:55'),(92,'Muhammad Fakhryan Zulfahmi',9,'select * from mahasiswa where nama LIKE \'D%\'','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(93,'Muhammad Fakhryan Zulfahmi',10,'SELECT nama, ipk FROM mahasiswa order by ipk desc','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(94,'Muhammad Fakhryan Zulfahmi',11,'select kelas, count(id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas ','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(95,'Muhammad Fakhryan Zulfahmi',11,'select kelas, count(id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas ','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(96,'Muhammad Fakhryan Zulfahmi',12,'select kelas, count(id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(97,'Muhammad Fakhryan Zulfahmi',12,'select kelas, count(id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(98,'Muhammad Fakhryan Zulfahmi',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(99,'Muhammad Fakhryan Zulfahmi',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(100,'Muhammad Fakhryan Zulfahmi',15,'select mhs.nama, usr.waktu_login from mahasiswa mhs join user usr on mhs.id_mahasiswa = usr.id_mahasiswa','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(101,'Muhammad Fakhryan Zulfahmi',15,'select mhs.nama, usr.waktu_login from mahasiswa mhs join user usr on mhs.id_mahasiswa = usr.id_mahasiswa','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(102,'Muhammad Fakhryan Zulfahmi',16,'select nama, kelas from mahasiswa union all select username, null kelas from user','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(103,'Muhammad Fakhryan Zulfahmi',16,'select nama, kelas from mahasiswa union all select username, null kelas from user','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(104,'Maria Puji',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(105,'Naufal Yudhistira',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(106,'Maria Puji',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(107,'Maria Puji',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(108,'Maria Puji',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(109,'Naufal Yudhistira',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(110,'Naufal Yudhistira',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(111,'Naufal Yudhistira',10,'SELECT nama,ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(112,'Naufal Yudhistira',10,'SELECT nama,ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(113,'Naufal Yudhistira',11,'SELECT kelas, COUNT(kelas) AS jumlah_mhs FROM mahasiswa GROUP BY kelas','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(114,'Naufal Yudhistira',11,'SELECT kelas, COUNT(kelas) AS jumlah_mhs FROM mahasiswa GROUP BY kelas','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(115,'Naufal Yudhistira',12,'SELECT \"4C\" as kelas, 3 as jumlah_mhs','test',0.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(116,'Naufal Yudhistira',12,'SELECT \"4C\" as kelas, 3 as jumlah_mhs','submit',0.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(117,'Naufal Yudhistira',13,'select id_mahasiswa, nama, kelas, ipk from mahasiswa where ipk between 3.00 and 4.00','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(118,'Naufal Yudhistira',13,'select id_mahasiswa, nama, kelas, ipk from mahasiswa where ipk between 3.00 and 4.00','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(119,'Naufal Yudhistira',14,'select id_mahasiswa, nama, kelas, ipk from mahasiswa where ipk <= (select min(ipk) from mahasiswa)','test',0.75,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(120,'Naufal Yudhistira',14,'select id_mahasiswa, nama, kelas, ipk from mahasiswa where ipk <= (select min(ipk) from mahasiswa)','submit',0.75,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(121,'Maria Puji',15,'SELECT n.nama,u.waktu_login FROM mahasiswa n JOIN user u ON n.id_mahasiswa=u.id_mahasiswa;','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(122,'Maria Puji',15,'SELECT n.nama,u.waktu_login FROM mahasiswa n JOIN user u ON n.id_mahasiswa=u.id_mahasiswa;','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(123,'Maria Puji',16,'(SELECT nama,kelas FROM mahasiswa) UNION ALL (SELECT username,null kelas FROM user)','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(124,'Maria Puji',16,'(SELECT nama,kelas FROM mahasiswa) UNION ALL (SELECT username,null kelas FROM user)','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(125,'Naufal Yudhistira',15,'select m.nama, u.waktu_login from mahasiswa m\nleft join user u\non u.id_mahasiswa = m.id_mahasiswa','test',0.47,0,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(126,'Naufal Yudhistira',15,'select m.nama, u.waktu_login from mahasiswa m\nleft join user u\non u.id_mahasiswa = m.id_mahasiswa','submit',0.47,0,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(127,'Naufal Yudhistira',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(128,'Naufal Yudhistira',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(129,'Naufal Yudhistira',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(130,'Dini Triana',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC ','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(131,'Dini Triana',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC ','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(132,'Dini Triana',11,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(133,'Dini Triana',11,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(134,'Dini Triana',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(135,'Dini Triana',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(136,'Dini Triana',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(137,'Dini Triana',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(138,'Dini Triana',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(139,'Dini Triana',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(140,'Dini Triana',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m join user u ON m.id_mahasiswa =  u.id_mahasiswa','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(141,'Dini Triana',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m join user u ON m.id_mahasiswa =  u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(142,'Dini Triana',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(143,'Dini Triana',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(144,'Afifah Millatina N',9,'select * from mahasiswa where nama like \'D%\'','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(145,'Afifah Millatina N',9,'select * from mahasiswa where nama like \'D%\'','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(146,'Afifah Millatina N',10,'select nama, ipk from mahasiswa order by ipk desc','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(147,'Afifah Millatina N',10,'select nama, ipk from mahasiswa order by ipk desc','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(148,'Afifah Millatina N',11,'select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(149,'Afifah Millatina N',11,'select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas','submit',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(150,'Afifah Millatina N',12,'select kelas, count(id_mahasiswa) jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:56','2021-06-17 05:18:56'),(151,'Afifah Millatina N',12,'select kelas, count(id_mahasiswa) jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(152,'Afifah Millatina N',14,'select * from mahasiswa where ipk = (select min(ipk) from mahasiswa)','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(153,'Afifah Millatina N',14,'select * from mahasiswa where ipk = (select min(ipk) from mahasiswa)','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(154,'Afifah Millatina N',15,'select m.nama, u.waktu_login from mahasiswa m join user u on m.id_mahasiswa = u.id_mahasiswa','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(155,'Afifah Millatina N',15,'select m.nama, u.waktu_login from mahasiswa m join user u on m.id_mahasiswa = u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(156,'Afifah Millatina N',16,'(select nama, kelas from mahasiswa) union all (select username, null kelas from user)','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(157,'Afifah Millatina N',16,'(select nama, kelas from mahasiswa) union all (select username, null kelas from user)','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(158,'Ilham Nuswantoro Aji',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(159,'Ilham Nuswantoro Aji',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(160,'Ilham Nuswantoro Aji',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(161,'Ilham Nuswantoro Aji',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(162,'Ilham Nuswantoro Aji',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(163,'Ilham Nuswantoro Aji',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(164,'Ilham Nuswantoro Aji',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(165,'Ilham Nuswantoro Aji',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(166,'Ilham Nuswantoro Aji',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(167,'Ilham Nuswantoro Aji',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(168,'Ilham Nuswantoro Aji',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(169,'Ilham Nuswantoro Aji',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(170,'Ilham Nuswantoro Aji',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(171,'Ilham Nuswantoro Aji',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(172,'Ilham Nuswantoro Aji',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa\n','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(173,'Ilham Nuswantoro Aji',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa\n','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(174,'Ilham Nuswantoro Aji',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)\n','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(175,'Ilham Nuswantoro Aji',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)\n','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(176,'Linda Puspita Tarumawardani',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(177,'Linda Puspita Tarumawardani',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(178,'Linda Puspita Tarumawardani',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(179,'Linda Puspita Tarumawardani',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(180,'Linda Puspita Tarumawardani',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(181,'Linda Puspita Tarumawardani',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(182,'Linda Puspita Tarumawardani',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(183,'Linda Puspita Tarumawardani',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(184,'Linda Puspita Tarumawardani',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(185,'Linda Puspita Tarumawardani',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(186,'Linda Puspita Tarumawardani',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(187,'Linda Puspita Tarumawardani',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(188,'Linda Puspita Tarumawardani',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(189,'Linda Puspita Tarumawardani',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(190,'Linda Puspita Tarumawardani',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(191,'Linda Puspita Tarumawardani',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(192,'Linda Puspita Tarumawardani',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(193,'Linda Puspita Tarumawardani',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(194,'Linda Puspita Tarumawardani',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(195,'Linda Puspita Tarumawardani',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(196,'Linda Puspita Tarumawardani',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(197,'Linda Puspita Tarumawardani',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(198,'Linda Puspita Tarumawardani',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(199,'Dewi Oktavia Efendi',8,'SELECT*FROM mahasiswa;','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(200,'Dewi Oktavia Efendi',8,'SELECT*FROM mahasiswa;','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(201,'Dewi Oktavia Efendi',9,'SELECT*FROM mahasiswa \nWHERE nama LIKE \'D%\';','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(202,'Dewi Oktavia Efendi',9,'SELECT*FROM mahasiswa \nWHERE nama LIKE \'D%\';','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(203,'Dewi Oktavia Efendi',9,'SELECT*FROM mahasiswa \nWHERE nama LIKE \'D%\';','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(204,'Dewi Oktavia Efendi',10,'SELECT nama,ipk FROM mahasiswa\nORDER BY ipk DESC;','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(205,'Dewi Oktavia Efendi',10,'SELECT nama,ipk FROM mahasiswa\nORDER BY ipk DESC;','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(206,'Dewi Oktavia Efendi',10,'SELECT nama,ipk FROM mahasiswa\nORDER BY ipk DESC;','submit',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(207,'Dewi Oktavia Efendi',13,'Select id_mahasiswa, nama, kelas, ipk\nFrom mahasiswa\nWhere ipk >= 3.00 AND ipk<=4.00;','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(208,'Dewi Oktavia Efendi',13,'Select id_mahasiswa, nama, kelas, ipk\nFrom mahasiswa\nWhere ipk >= 3.00 AND ipk<=4.00;','test',1.00,1,'2021-06-17 05:18:57','2021-06-17 05:18:57'),(209,'Dewi Oktavia Efendi',13,'Select id_mahasiswa, nama, kelas, ipk\nFrom mahasiswa\nWhere ipk >= 3.00 AND ipk<=4.00;','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(210,'Dewi Oktavia Efendi',11,'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas asc;','test',0.84,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(211,'Dewi Oktavia Efendi',11,'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas asc;','test',0.84,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(212,'Dewi Oktavia Efendi',11,'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas asc;','test',0.84,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(213,'Dewi Oktavia Efendi',11,'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas asc;','submit',0.84,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(214,'Dewi Oktavia Efendi',11,'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas asc;','test',0.84,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(215,'Dewi Oktavia Efendi',12,'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas\nHAVING jumlah_mhs > 2 ;','test',0.86,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(216,'Dewi Oktavia Efendi',12,'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas\nHAVING jumlah_mhs > 2 ;','submit',0.86,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(217,'Linda Puspita Tarumawardani',14,'\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(218,'Linda Puspita Tarumawardani',14,'\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(219,'Linda Puspita Tarumawardani',14,'\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(220,'Dewi Oktavia Efendi',14,'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa\nWHERE ipk = ( SELECT MIN(ipk)\nFROM mahasiswa);','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(221,'Dewi Oktavia Efendi',14,'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa\nWHERE ipk = ( SELECT MIN(ipk)\nFROM mahasiswa);','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(222,'Dewi Oktavia Efendi',14,'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa\nWHERE ipk = ( SELECT MIN(ipk)\nFROM mahasiswa);','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(223,'Linda Puspita Tarumawardani',14,'\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(224,'Dewi Oktavia Efendi',15,'SELECT m.nama, u.waktu_login\nFROM mahasiswa m \nInner Join user u on m.id_mahasiswa=u.id_mahasiswa;','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(225,'Dewi Oktavia Efendi',15,'SELECT m.nama, u.waktu_login\nFROM mahasiswa m \nInner Join user u on m.id_mahasiswa=u.id_mahasiswa;','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(226,'Dewi Oktavia Efendi',15,'SELECT m.nama, u.waktu_login\nFROM mahasiswa m \nInner Join user u on m.id_mahasiswa=u.id_mahasiswa;','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(227,'Dewi Oktavia Efendi',16,'SELECT nama, kelas FROM mahasiswa\nUNION \nSELECT username, null kelas FROM user','test',0.90,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(228,'Dewi Oktavia Efendi',16,'SELECT nama, kelas FROM mahasiswa\nUNION \nSELECT username, null kelas FROM user','submit',0.90,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(229,'Faisal Wafa',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(230,'Faisal Wafa',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(231,'Faisal Wafa',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(232,'Faisal Wafa',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(233,'Faisal Wafa',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(234,'Faisal Wafa',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(235,'Faisal Wafa',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(236,'Faisal Wafa',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(237,'Faisal Wafa',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(238,'Faisal Wafa',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(239,'Krisna W',8,'Select * from mahasiswa','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(240,'Krisna W',8,'Select * from mahasiswa','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(241,'Krisna W',10,'Select nama, ipk from mahasiswa order by ipk desc','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(242,'Krisna W',10,'Select nama, ipk from mahasiswa order by ipk desc','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(243,'Krisna W',12,'Select kelas,\ncount(id_mahasiswa)\njumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(244,'Krisna W',12,'Select kelas,\ncount(id_mahasiswa)\njumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(245,'Krisna W',9,'Select * from mahasiswa where nama like \'d%\'','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(246,'Krisna W',9,'Select * from mahasiswa where nama like \'d%\'','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(247,'Krisna W',11,'Select kelas, count(id_mahasiswa) jumlah_mhs from mahasiswa group by kelas','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(248,'Krisna W',11,'Select kelas, count(id_mahasiswa) jumlah_mhs from mahasiswa group by kelas','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(249,'Krisna W',13,'Select * from mahasiswa where ipk between 3.00 and 4.00','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(250,'Krisna W',13,'Select * from mahasiswa where ipk between 3.00 and 4.00','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(251,'Krisna W',14,'Select * from mahasiswa where ipk = (select min(ipk) from mahasiswa)','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(252,'Krisna W',14,'Select * from mahasiswa where ipk = (select min(ipk) from mahasiswa)','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(253,'Krisna W',15,'Select m.nama, u.waktu_login from mahasiswa m join user u on m.id_mahasiswa = u.id_mahasiswa','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(254,'Krisna W',15,'Select m.nama, u.waktu_login from mahasiswa m join user u on m.id_mahasiswa = u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(255,'Krisna W',16,'(select nama, kelas from mahasiswa) union all (select username, null kelas from user)','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(256,'Krisna W',16,'(select nama, kelas from mahasiswa) union all(select username, null kelas from user)','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(257,'Krisna W',16,'(select nama, kelas from mahasiswa) union all(select username, null kelas from user)','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(258,'Muhammad Ganang Alfiridho',8,'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(259,'Muhammad Ganang Alfiridho',8,'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(260,'Muhammad Ganang Alfiridho',9,'SELECT * FROM mahasiswa WHERE nama REGEXP \'^[d]\'','test',0.74,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(261,'Muhammad Ganang Alfiridho',9,'SELECT * FROM mahasiswa WHERE nama REGEXP \'^[d]\'','submit',0.74,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(262,'Muhammad Ganang Alfiridho',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(263,'Muhammad Ganang Alfiridho',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(264,'Muhammad Ganang Alfiridho',11,'SELECT kelas, COUNT(kelas) AS jumlah_mhs FROM mahasiswa GROUP BY kelas','test',1.00,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(265,'Muhammad Ganang Alfiridho',11,'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1','test',0.55,1,'2021-06-17 05:18:58','2021-06-17 05:18:58'),(266,'Muhammad Ganang Alfiridho',11,'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1','test',0.55,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(267,'Muhammad Ganang Alfiridho',11,'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1','test',0.55,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(268,'Muhammad Ganang Alfiridho',11,'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1','test',0.55,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(269,'Muhammad Ganang Alfiridho',11,'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1','test',0.55,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(270,'Muhammad Ganang Alfiridho',11,'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1','test',0.55,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(271,'Muhammad Ganang Alfiridho',11,'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1','test',0.55,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(272,'Muhammad Ganang Alfiridho',11,'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1','submit',0.55,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(273,'Muhammad Ganang Alfiridho',12,'SELECT \"4C\" AS kelas, 3 AS jumlah_mhs','test',0.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(274,'Muhammad Ganang Alfiridho',12,'SELECT \"4C\" AS kelas, 3 AS jumlah_mhs','submit',0.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(275,'Muhammad Ganang Alfiridho',13,'SELECT * FROM mahasiswa WHERE ipk >= 3 and ipk <= 4','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(276,'Muhammad Ganang Alfiridho',13,'SELECT * FROM mahasiswa WHERE ipk >= 3 and ipk <= 4','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(277,'Muhammad Ganang Alfiridho',14,'SELECT * FROM mahasiswa ORDER BY ipk LIMIT 1','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(278,'Muhammad Ganang Alfiridho',14,'SELECT * FROM mahasiswa ORDER BY ipk LIMIT 1','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(279,'Bachtiar Putera Alamsyah',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(280,'Bachtiar Putera Alamsyah',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(281,'Bachtiar Putera Alamsyah',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(282,'Muhammad Ganang Alfiridho',15,'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa','test',0.47,0,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(283,'Bachtiar Putera Alamsyah',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(284,'Muhammad Ganang Alfiridho',15,'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa','test',0.47,0,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(285,'Muhammad Ganang Alfiridho',15,'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa','test',0.47,0,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(286,'Muhammad Ganang Alfiridho',15,'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa','test',0.47,0,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(287,'Muhammad Ganang Alfiridho',15,'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa','test',0.47,0,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(288,'Bachtiar Putera Alamsyah',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(289,'Muhammad Ganang Alfiridho',15,'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa','submit',0.47,0,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(290,'Bachtiar Putera Alamsyah',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(291,'Bachtiar Putera Alamsyah',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(292,'Muhammad Ganang Alfiridho',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(293,'Muhammad Ganang Alfiridho',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(294,'Bachtiar Putera Alamsyah',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(295,'Bachtiar Putera Alamsyah',12,'\nSELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(296,'Bachtiar Putera Alamsyah',12,'\nSELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(297,'Bachtiar Putera Alamsyah',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.','test',-1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(298,'Bachtiar Putera Alamsyah',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.','submit',-1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(299,'Bachtiar Putera Alamsyah',14,'\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(300,'Bachtiar Putera Alamsyah',15,'\nSELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(301,'Bachtiar Putera Alamsyah',15,'\nSELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(302,'Bachtiar Putera Alamsyah',16,'\n(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(303,'Bachtiar Putera Alamsyah',16,'\n(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(304,'Ineke Sulistiowati',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(305,'Ineke Sulistiowati',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(306,'Abiyyu Yafi',9,'select * from mahasiswa where nama like \'D%\'','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(307,'Abiyyu Yafi',9,'select * from mahasiswa where nama like \'D%\'','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(308,'Abiyyu Yafi',13,'select * from mahasiswa where ipk >= 3.00 and ipk <= 4.00','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(309,'Abiyyu Yafi',13,'select * from mahasiswa where ipk >= 3.00 and ipk <= 4.00','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(310,'Panji awwaludi dzikriawan',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(311,'Panji awwaludi dzikriawan',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(312,'Panji awwaludi dzikriawan',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(313,'Panji awwaludi dzikriawan',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:18:59','2021-06-17 05:18:59'),(314,'Panji awwaludi dzikriawan',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(315,'Panji awwaludi dzikriawan',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(316,'Panji awwaludi dzikriawan',8,'SELECT * FROM mahasiswa','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(317,'Panji awwaludi dzikriawan',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(318,'Panji awwaludi dzikriawan',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(319,'Panji awwaludi dzikriawan',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(320,'Panji awwaludi dzikriawan',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(321,'Panji awwaludi dzikriawan',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(322,'Panji awwaludi dzikriawan',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(323,'Panji awwaludi dzikriawan',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(324,'Panji awwaludi dzikriawan',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(325,'Panji awwaludi dzikriawan',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(326,'Panji awwaludi dzikriawan',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(327,'Ineke Sulistiowati',11,'SELECT kelas,\nCOUNT(id_mahasiswa) as\njumlah_mhs FROM mahasiswa GROUP BY kelas','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(328,'Ineke Sulistiowati',12,'SELECT kelas, COUNT(Id_mahasiswa)\njumlah_mhs FROM mahasiswa GROUP BY kelas\nHAVING jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(329,'Ineke Sulistiowati',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(330,'Ineke Sulistiowati',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(331,'Ineke Sulistiowati',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(332,'Ineke Sulistiowati',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(333,'Herlina Prastiwi',8,'select * from mahasiswa','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(334,'Herlina Prastiwi',8,'select * from mahasiswa','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(335,'Herlina Prastiwi',8,'select * from mahasiswa','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(336,'Herlina Prastiwi',8,'select * from mahasiswa','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(337,'Herlina Prastiwi',9,'select * from mahasiswa where nama LIKE \'D%\'','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(338,'Herlina Prastiwi',9,'select * from mahasiswa where nama LIKE \'D%\'','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(339,'Herlina Prastiwi',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(340,'Herlina Prastiwi',12,'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(341,'Herlina Prastiwi',13,'select * from mahasiswa where ipk BETWEEN 3 AND 4','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(342,'Herlina Prastiwi',13,'select * from mahasiswa where ipk BETWEEN 3 AND 4 order by ipk desc','test',0.80,0,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(343,'Herlina Prastiwi',13,'select * from mahasiswa where ipk BETWEEN 3 AND 4 order by ipk desc','submit',0.80,0,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(344,'Herlina Prastiwi',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(345,'Herlina Prastiwi',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(346,'Herlina Prastiwi',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(347,'Herlina Prastiwi',15,'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(348,'Greggy Gianini Firmansyah',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(349,'Greggy Gianini Firmansyah',8,'SELECT * FROM mahasiswa','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(350,'Greggy Gianini Firmansyah',8,'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(351,'Greggy Gianini Firmansyah',8,'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(352,'Greggy Gianini Firmansyah',8,'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa m','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(353,'Greggy Gianini Firmansyah',8,'SELECT m.id_mahasiswa, m.nama, m.kelas, m.ipk FROM mahasiswa m','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(354,'Greggy Gianini Firmansyah',8,'SELECT m.id_mahasiswa, m.nama, m.kelas, m.ipk FROM mahasiswa m','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(355,'Greggy Gianini Firmansyah',9,'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(356,'Greggy Gianini Firmansyah',9,'SELECT mhs.id_mahasiswa, mhs.nama, mhs.kelas, mhs.ipk FROM mahasiswa mhs WHERE nama LIKE \'D%\'','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(357,'Greggy Gianini Firmansyah',9,'SELECT mhs.id_mahasiswa, mhs.nama, mhs.kelas, mhs.ipk FROM mahasiswa mhs WHERE nama LIKE \'D%\'','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(358,'Greggy Gianini Firmansyah',10,'\nSELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(359,'Greggy Gianini Firmansyah',10,'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(360,'Greggy Gianini Firmansyah',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(361,'Greggy Gianini Firmansyah',11,'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(362,'Greggy Gianini Firmansyah',12,'\nSELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(363,'Greggy Gianini Firmansyah',12,'\nSELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(364,'Greggy Gianini Firmansyah',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(365,'Greggy Gianini Firmansyah',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(366,'Greggy Gianini Firmansyah',13,'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(367,'Greggy Gianini Firmansyah',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(368,'Greggy Gianini Firmansyah',14,'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(369,'Greggy Gianini Firmansyah',15,'\nSELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(370,'Greggy Gianini Firmansyah',15,'\nSELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(371,'Greggy Gianini Firmansyah',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','test',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00'),(372,'Greggy Gianini Firmansyah',16,'(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)','submit',1.00,1,'2021-06-17 05:19:00','2021-06-17 05:19:00');
/*!40000 ALTER TABLE `test_user_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `level` enum('dosen','admin') DEFAULT 'dosen',
  `no_induk` varchar(30) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dosen1','$2a$10$l0FUJgli9.rpU1Vn0NU3Wu3giuG7..IZSUA.9Z3lXNN9xjOTFcn3.','dosen','100001','Dosen 1','2021-04-17 17:41:25','2022-04-16 01:52:20'),(3,'dosen2','$2a$10$qryGH0B/lAgrTEHsyoDeFOhI0LAWHHN5UCSBMIUCAW14C7hUkqH.S','dosen','100002','Dosen 2','2021-05-03 07:03:54','2021-05-03 07:03:54'),(5,'dosencoba','$2a$10$Vixbkmf/UGcSi634ChWaOOQ0YCN4bBHxWfFYWIE/QmKZIB.o8p5M2','dosen','101010','Dosen Coba','2021-05-30 17:54:21','2022-03-31 09:04:11'),(7,'admincoba','$2a$10$upw4zVV9SK2rxUE4M5bV1.ZPiL.uU5oboLolajz4cO73kGDHC2wri','admin','1234567890','aku adalah admin','2022-03-15 15:57:49','2022-03-15 15:57:49'),(8,'admincoba2','$2a$10$6TkXpEcRBYagR1MvSOZ6s.j3shjc.9n1oF26nQCLcj5cY8kz0wlEe','admin','1234567890','aku adalah admin','2022-03-15 16:00:41','2022-04-13 13:00:09'),(10,'ilhamadhim','$2a$10$sWyq3FP4SQ4e4..z5T5AAuZ8HI3fwL3Ypx770MJP9G95hHgz/S/ay','admin','12345678901','ilham admin','2022-04-16 00:00:58','2022-04-16 00:00:58'),(11,'dosensaya','$2a$10$nldm.dGSs49G/9IdHt3TS.AEFBlkg1.j414/mKpucVlV4Bv.xiJUS','dosen','111111','Saya dosen','2022-04-25 00:19:00','2022-04-25 00:19:00'),(12,'admincoba4','$2a$10$20EDDlOmuUBYuooG74H8huGIUlXFjOKH4zn9qoALzb6VYwUMTPiJC','admin','1234567891','aku adalah admin','2022-05-11 05:04:55','2022-05-11 05:04:55');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-28 16:34:50
