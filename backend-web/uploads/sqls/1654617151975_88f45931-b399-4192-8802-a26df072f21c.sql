-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: sqlearn_insert_test
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.34-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `customerNumber` int(11) NOT NULL AUTO_INCREMENT,
  `customerName` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) DEFAULT NULL,
  `country` varchar(50) NOT NULL,
  `creditLimit` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`customerNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=497 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (103,'Atelier graphique','Nantes','','France',21000.00),(112,'Signal Gift Stores','Las Vegas','NV','USA',71800.00),(114,'Australian Collectors, Co.','Melbourne','Victoria','Australia',117300.00),(119,'La Rochelle Gifts','Nantes','','France',118200.00),(121,'Baane Mini Imports','Stavern','','Norway',81700.00),(124,'Mini Gifts Distributors Ltd.','San Rafael','CA','USA',210500.00),(125,'Havel & Zbyszek Co','Warszawa','','Poland',0.00),(128,'Blauer See Auto, Co.','Frankfurt','','Germany',59700.00),(129,'Mini Wheels Co.','San Francisco','CA','USA',64600.00),(131,'Land of Toys Inc.','NYC','NY','USA',114900.00),(141,'Euro+ Shopping Channel','Madrid','','Spain',227600.00),(144,'Volvo Model Replicas, Co','Luleå','','Sweden',53100.00),(145,'Danish Wholesale Imports','Kobenhavn','','Denmark',83400.00),(146,'Saveley & Henriot, Co.','Lyon','','France',123900.00),(148,'Dragon Souveniers, Ltd.','Singapore','','Singapore',103800.00),(151,'Muscle Machine Inc','NYC','NY','USA',138500.00),(157,'Diecast Classics Inc.','Allentown','PA','USA',100600.00),(161,'Technics Stores Inc.','Burlingame','CA','USA',84600.00),(166,'Handji Gifts& Co','Singapore','','Singapore',97900.00),(167,'Herkku Gifts','Bergen','','Norway  ',96800.00),(168,'American Souvenirs Inc','New Haven','CT','USA',33123.32),(169,'Porto Imports Co.','Lisboa','','Portugal',0.00),(171,'Daedalus Designs Imports','Lille','','France',82900.00),(172,'La Corne D\'abondance, Co.','Paris','','France',84300.00),(173,'Cambridge Collectables Co.','Cambridge','MA','USA',43400.00),(175,'Gift Depot Inc.','Bridgewater','CT','USA',84300.00),(177,'Osaka Souveniers Co.','Kita-ku','Osaka','Japan',81200.00),(181,'Vitachrome Inc.','NYC','NY','USA',76400.00),(186,'Toys of Finland, Co.','Helsinki','','Finland',96500.00),(187,'AV Stores, Co.','Manchester','','UK',136800.00),(189,'Clover Collections, Co.','Dublin','','Ireland',69400.00),(198,'Auto-Moto Classics Inc.','Brickhaven','MA','USA',23000.00),(201,'UK Collectables, Ltd.','Liverpool','','UK',92700.00),(202,'Canadian Gift Exchange Network','Vancouver','BC','Canada',90300.00),(204,'Online Mini Collectables','Brickhaven','MA','USA',68700.00),(205,'Toys4GrownUps.com','Pasadena','CA','USA',90700.00),(206,'Asian Shopping Network, Co','Singapore','','Singapore',0.00),(209,'Mini Caravy','Strasbourg','','France',53800.00),(211,'King Kong Collectables, Co.','Central Hong Kong','','Hong Kong',58600.00),(216,'Enaco Distributors','Barcelona','','Spain',60300.00),(219,'Boards & Toys Co.','Glendale','CA','USA',11000.00),(223,'Natürlich Autos','Cunewalde','','Germany',0.00),(227,'Heintze Collectables','Århus','','Denmark',120800.00),(233,'Québec Home Shopping Network','Montréal','Québec','Canada',48700.00),(237,'ANG Resellers','Madrid','','Spain',0.00),(239,'Collectable Mini Designs Co.','San Diego','CA','USA',105000.00),(240,'giftsbymail.co.uk','Cowes','Isle of Wight','UK',93900.00),(242,'Alpha Cognac','Toulouse','','France',61100.00),(247,'Messner Shopping Network','Frankfurt','','Germany',0.00),(249,'Amica Models & Co.','Torino','','Italy',113000.00),(250,'Lyon Souveniers','Paris','','France',68100.00),(256,'Auto Associés & Cie.','Versailles','','France',77900.00),(259,'Toms Spezialitäten, Ltd','Köln','','Germany',120400.00),(260,'Royal Canadian Collectables, Ltd.','Tsawassen','BC','Canada',89600.00),(273,'Franken Gifts, Co','München','','Germany',0.00),(276,'Anna\'s Decorations, Ltd','North Sydney','NSW','Australia',107800.00),(278,'Rovelli Gifts','Bergamo','','Italy',119600.00),(282,'Souveniers And Things Co.','Chatswood','NSW','Australia',93300.00),(286,'Marta\'s Replicas Co.','Cambridge','MA','USA',123700.00),(293,'BG&E Collectables','Fribourg','','Switzerland',0.00),(298,'Vida Sport, Ltd','Genève','','Switzerland',141300.00),(299,'Norway Gifts By Mail, Co.','Oslo','','Norway  ',95100.00),(303,'Schuyler Imports','Amsterdam','','Netherlands',0.00),(307,'Der Hund Imports','Berlin','','Germany',0.00),(311,'Oulu Toy Supplies, Inc.','Oulu','','Finland',90500.00),(314,'Petit Auto','Bruxelles','','Belgium',79900.00),(319,'Mini Classics','White Plains','NY','USA',102700.00),(320,'Mini Creations Ltd.','New Bedford','MA','USA',94500.00),(321,'Corporate Gift Ideas Co.','San Francisco','CA','USA',105000.00),(323,'Down Under Souveniers, Inc','Auckland  ','','New Zealand',88000.00),(324,'Stylish Desk Decors, Co.','London','','UK',77000.00),(328,'Tekni Collectables Inc.','Newark','NJ','USA',43000.00),(333,'Australian Gift Network, Co','South Brisbane','Queensland','Australia',51600.00),(334,'Suominen Souveniers','Espoo','','Finland',98800.00),(335,'Cramer Spezialitäten, Ltd','Brandenburg','','Germany',0.00),(339,'Classic Gift Ideas, Inc','Philadelphia','PA','USA',81100.00),(344,'CAF Imports','Madrid','','Spain',59600.00),(347,'Men \'R\' US Retailers, Ltd.','Los Angeles','CA','USA',57700.00),(348,'Asian Treasures, Inc.','Cork','Co. Cork','Ireland',0.00),(350,'Marseille Mini Autos','Marseille','','France',65000.00),(353,'Reims Collectables','Reims','','France',81100.00),(356,'SAR Distributors, Co','Hatfield','Pretoria','South Africa',0.00),(357,'GiftsForHim.com','Auckland','','New Zealand',77700.00),(361,'Kommission Auto','Münster','','Germany',0.00),(362,'Gifts4AllAges.com','Boston','MA','USA',41900.00),(363,'Online Diecast Creations Co.','Nashua','NH','USA',114200.00),(369,'Lisboa Souveniers, Inc','Lisboa','','Portugal',0.00),(376,'Precious Collectables','Bern','','Switzerland',0.00),(379,'Collectables For Less Inc.','Brickhaven','MA','USA',70700.00),(381,'Royale Belge','Charleroi','','Belgium',23500.00),(382,'Salzburg Collectables','Salzburg','','Austria',71700.00),(385,'Cruz & Sons Co.','Makati City','','Philippines',81500.00),(386,'L\'ordine Souveniers','Reggio Emilia','','Italy',121400.00),(398,'Tokyo Collectables, Ltd','Minato-ku','Tokyo','Japan',94400.00),(406,'Auto Canal+ Petit','Paris','','France',95000.00),(409,'Stuttgart Collectable Exchange','Stuttgart','','Germany',0.00),(412,'Extreme Desk Decorations, Ltd','Wellington','','New Zealand',86800.00),(415,'Bavarian Collectables Imports, Co.','Munich','','Germany',77000.00),(424,'Classic Legends Inc.','NYC','NY','USA',67500.00),(443,'Feuer Online Stores, Inc','Leipzig','','Germany',0.00),(447,'Gift Ideas Corp.','Glendale','CT','USA',49700.00),(448,'Scandinavian Gift Ideas','Bräcke','','Sweden',116400.00),(450,'The Sharp Gifts Warehouse','San Jose','CA','USA',77600.00),(452,'Mini Auto Werke','Graz','','Austria',45300.00),(455,'Super Scale Inc.','New Haven','CT','USA',95400.00),(456,'Microscale Inc.','NYC','NY','USA',39800.00),(458,'Corrida Auto Replicas, Ltd','Madrid','','Spain',104600.00),(459,'Warburg Exchange','Aachen','','Germany',0.00),(462,'FunGiftIdeas.com','New Bedford','MA','USA',85800.00),(465,'Anton Designs, Ltd.','Madrid','','Spain',0.00),(471,'Australian Collectables, Ltd','Glen Waverly','Victoria','Australia',60300.00),(473,'Frau da Collezione','Milan','','Italy',34800.00),(475,'West Coast Collectables Co.','Burbank','CA','USA',55400.00),(477,'Mit Vergnügen & Co.','Mannheim','','Germany',0.00),(480,'Kremlin Collectables, Co.','Saint Petersburg','','Russia',0.00),(481,'Raanan Stores, Inc','Herzlia','','Israel',0.00),(484,'Iberia Gift Imports, Corp.','Sevilla','','Spain',65700.00),(486,'Motor Mint Distributors Inc.','Philadelphia','PA','USA',72600.00),(487,'Signal Collectibles Ltd.','Brisbane','CA','USA',60300.00),(489,'Double Decker Gift Stores, Ltd','London','','UK',43300.00),(495,'Diecast Collectables','Boston','MA','USA',85100.00),(496,'Kelly\'s Gift Shop','Auckland  ','','New Zealand',110000.00);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers_duplicate`
--

DROP TABLE IF EXISTS `customers_duplicate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers_duplicate` (
  `customerNumber` int(11) NOT NULL AUTO_INCREMENT,
  `customerName` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) DEFAULT NULL,
  `country` varchar(50) NOT NULL,
  `creditLimit` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`customerNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=497 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers_duplicate`
--

LOCK TABLES `customers_duplicate` WRITE;
/*!40000 ALTER TABLE `customers_duplicate` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers_duplicate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `received_date` date NOT NULL,
  `name` varchar(100) NOT NULL,
  `priority` tinyint(4) NOT NULL DEFAULT 3,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2022-03-20','Gilbert',3,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `productLine` varchar(50) NOT NULL,
  `textDescription` varchar(4000) DEFAULT NULL,
  `htmlDescription` mediumtext DEFAULT NULL,
  `image` mediumblob DEFAULT NULL,
  PRIMARY KEY (`productLine`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('Classic Cars','Attention car enthusiasts: Make your wildest car ownership dreams come true. Whether you are looking for classic muscle cars, dream sports cars or movie-inspired miniatures, you will find great choices in this category. These replicas feature superb attention to detail and craftsmanship and offer features such as working steering system, opening forward compartment, opening rear trunk with removable spare wheel, 4-wheel independent spring suspension, and so on. The models range in size from 1:10 to 1:24 scale and include numerous limited edition and several out-of-production vehicles. All models include a certificate of authenticity from their manufacturers and come fully assembled and ready for display in the home or office.',NULL,NULL),('Motorcycles','Our motorcycles are state of the art replicas of classic as well as contemporary motorcycle legends such as Harley Davidson, Ducati and Vespa. Models contain stunning details such as official logos, rotating wheels, working kickstand, front suspension, gear-shift lever, footbrake lever, and drive chain. Materials used include diecast and plastic. The models range in size from 1:10 to 1:50 scale and include numerous limited edition and several out-of-production vehicles. All models come fully assembled and ready for display in the home or office. Most include a certificate of authenticity.',NULL,NULL),('Planes','Unique, diecast airplane and helicopter replicas suitable for collections, as well as home, office or classroom decorations. Models contain stunning details such as official logos and insignias, rotating jet engines and propellers, retractable wheels, and so on. Most come fully assembled and with a certificate of authenticity from their manufacturers.',NULL,NULL),('Ships','The perfect holiday or anniversary gift for executives, clients, friends, and family. These handcrafted model ships are unique, stunning works of art that will be treasured for generations! They come fully assembled and ready for display in the home or office. We guarantee the highest quality, and best value.',NULL,NULL),('Trains','Model trains are a rewarding hobby for enthusiasts of all ages. Whether you\'re looking for collectible wooden trains, electric streetcars or locomotives, you\'ll find a number of great choices for any budget within this category. The interactive aspect of trains makes toy trains perfect for young children. The wooden train sets are ideal for children under the age of 5.',NULL,NULL),('Trucks and Buses','The Truck and Bus models are realistic replicas of buses and specialized trucks produced from the early 1920s to present. The models range in size from 1:12 to 1:50 scale and include numerous limited edition and several out-of-production vehicles. Materials used include tin, diecast and plastic. All models include a certificate of authenticity from their manufacturers and are a perfect ornament for the home and office.',NULL,NULL),('Vintage Cars','Our Vintage Car models realistically portray automobiles produced from the early 1900s through the 1940s. Materials used include Bakelite, diecast, plastic and wood. Most of the replicas are in the 1:18 and 1:24 scale sizes, which provide the optimum in detail and accuracy. Prices range from $30.00 up to $180.00 for some special limited edition replicas. All models include a certificate of authenticity from their manufacturers and come fully assembled and ready for display in the home or office.',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provinsi`
--

DROP TABLE IF EXISTS `provinsi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provinsi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `provinsi_UN` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provinsi`
--

LOCK TABLES `provinsi` WRITE;
/*!40000 ALTER TABLE `provinsi` DISABLE KEYS */;
INSERT INTO `provinsi` VALUES (1,'Aceh'),(13,'Bali'),(7,'Bangkalan'),(12,'Banten'),(11,'Di Yogyakarta'),(25,'Gorontalo'),(5,'Jambi'),(16,'Kalimantan Barat'),(18,'Kalimantan Selatan'),(17,'Kalimantan Tengah'),(19,'Kalimantan Timur'),(20,'Kalimantan Utara'),(9,'Kepulauan Bangka Belitung'),(10,'Kepulauan Riau'),(8,'Lampung'),(27,'Maluku'),(28,'Maluku Utara'),(14,'Nusa Tenggara Barat'),(15,'Nusa Tenggara Timur'),(30,'Papua'),(29,'Papua Barat'),(4,'Riau'),(26,'Sulawesi Barat'),(23,'Sulawesi Selatan'),(22,'Sulawesi Tengah'),(24,'Sulawesi Tenggara'),(21,'Sulawesi Utara'),(3,'Sumatera Barat'),(6,'Sumatera Selatan'),(2,'Sumatera Utara');
/*!40000 ALTER TABLE `provinsi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stats`
--

DROP TABLE IF EXISTS `stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stats` (
  `totalProducts` int(11) NOT NULL,
  `totalOrders` int(11) NOT NULL,
  `totalCustomers` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stats`
--

LOCK TABLES `stats` WRITE;
/*!40000 ALTER TABLE `stats` DISABLE KEYS */;
/*!40000 ALTER TABLE `stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'sqlearn_insert_test'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-06 19:37:31
