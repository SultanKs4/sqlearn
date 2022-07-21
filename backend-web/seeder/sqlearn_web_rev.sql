-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: sqlearn_web_rev
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.32-MariaDB-0ubuntu0.20.04.1

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
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `case_studies`
--

LOCK TABLES `case_studies` WRITE;
/*!40000 ALTER TABLE `case_studies` DISABLE KEYS */;
INSERT INTO `case_studies` VALUES (2,'Tes',1,1,'2021-05-05 16:31:57','2021-05-05 16:31:57'),(5,'dd',5,2,'2022-02-15 17:36:40','2022-02-15 17:36:40'),(6,'dd',5,3,'2022-02-15 17:37:13','2022-02-15 17:37:13'),(7,'dd',5,4,'2022-02-15 17:37:58','2022-02-15 17:37:58'),(8,'dd',5,5,'2022-02-15 17:38:28','2022-02-15 17:38:28'),(9,'dd',5,6,'2022-02-15 17:39:45','2022-02-15 17:39:45'),(10,'dd',5,7,'2022-02-15 17:41:05','2022-02-15 17:41:05'),(11,'dd',5,8,'2022-02-15 17:43:00','2022-02-15 17:43:00'),(12,'study case test',5,19,'2022-03-20 16:46:37','2022-03-20 16:46:37'),(13,'study case test',5,20,'2022-03-20 16:48:14','2022-03-20 16:48:14'),(20,'study case test',5,27,'2022-03-21 00:49:23','2022-03-21 00:49:23'),(23,'study case test',5,30,'2022-03-21 10:42:52','2022-03-21 10:42:52'),(24,'study case test',5,31,'2022-03-21 10:43:41','2022-03-21 10:43:41'),(32,'testt',5,39,'2022-03-23 00:57:33','2022-03-23 00:57:33'),(33,'testt',5,40,'2022-03-23 00:58:24','2022-03-23 00:58:24'),(48,'study case test',5,55,'2022-03-24 23:30:12','2022-03-24 23:30:12');
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
INSERT INTO `class_schedules` VALUES (14,11,'2021-06-17 04:45:05','2021-06-17 04:45:05'),(14,12,'2022-03-09 02:39:17','2022-03-09 02:39:17'),(14,13,'2022-03-09 02:39:38','2022-03-09 02:39:38'),(14,14,'2022-03-22 04:45:52','2022-03-22 04:45:52'),(14,15,'2022-03-22 04:47:40','2022-03-22 04:47:40'),(14,16,'2022-03-22 04:55:17','2022-03-22 04:55:17');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'TI-4C-2021',8,1,'2021-04-17 18:09:21','2021-04-17 18:09:21'),(3,'TI-3C-2020',8,1,'2021-04-17 19:26:00','2021-04-17 19:26:00'),(12,'TI-4D-2021',8,1,'2021-05-06 07:27:11','2021-05-06 07:27:11'),(14,'TI-4A-2021',8,5,'2021-05-30 17:58:11','2021-05-30 17:58:11'),(15,'TI-4H-2022',8,5,'2022-02-23 07:13:21','2022-02-23 07:13:21'),(16,'TI-4H-2023',8,5,'2022-03-21 14:32:43','2022-03-21 14:32:43'),(17,'TI-4H-2024',8,5,'2022-03-21 14:33:49','2022-03-21 14:33:49'),(18,'TI-4H-2026',8,5,'2022-03-21 14:34:40','2022-03-21 14:34:40'),(19,'TI-4Z-2025',8,1,'2022-03-22 11:24:20','2022-03-22 11:24:20'),(20,'TI-2D-2021',8,1,'2022-03-22 14:57:06','2022-03-22 14:57:06');
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `containers`
--

LOCK TABLES `containers` WRITE;
/*!40000 ALTER TABLE `containers` DISABLE KEYS */;
INSERT INTO `containers` VALUES (5,'Paket Tes',5,1,'2021-06-17 04:38:50','2021-06-17 04:38:50'),(8,'ini uas ya',5,2,'2022-02-24 00:11:58','2022-02-24 00:11:58'),(9,'ini uas ya',5,1,'2022-02-24 00:12:35','2022-02-24 00:12:35');
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
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `db_list`
--

LOCK TABLES `db_list` WRITE;
/*!40000 ALTER TABLE `db_list` DISABLE KEYS */;
INSERT INTO `db_list` VALUES (1,'sqlearn_cs_auto_assess_tes','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(2,'sqlearn_cs_dosencoba_dd_pr9k6l','1644946596364_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(3,'sqlearn_cs_dosencoba_dd_78ayum','1644946630914_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(4,'sqlearn_cs_dosencoba_dd_73uxn3','1644946674646_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(5,'sqlearn_cs_dosencoba_dd_v3004s','1644946706201_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(6,'sqlearn_cs_dosencoba_dd_fp58ey','1644946783711_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(7,'sqlearn_cs_dosencoba_dd_1yxfzl','1644946863058_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(8,'sqlearn_cs_dosencoba_dd_dpyyd6','1644946978679_sql_bumdes.sql','2022-03-11 11:16:39','2022-03-11 11:16:39'),(17,'sqlearn_cs_auto_assess_tes_45_1_key','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-03-12 04:19:11','2022-03-12 04:19:11'),(18,'sqlearn_cs_auto_assess_tes_45_1_student','1642994333691_sql_sqlearn_cs_auto_assess_tes.sql','2022-03-12 04:19:21','2022-03-12 04:19:21'),(19,'sqlearn_cs_dosencoba_study_case_test_xx5zc9','1647794797646_92197aa7-4bd1-46d7-bcba-3789a8b91e59.sql','2022-03-20 16:46:37','2022-03-20 16:46:37'),(20,'sqlearn_cs_dosencoba_study_case_test_swgfzo','1647794894496_b0a82b02-2b58-4050-9896-62d80a16868c.sql','2022-03-20 16:48:14','2022-03-20 16:48:14'),(21,'sqlearn_cs_dosencoba_study_case_test_rt6s41','1647794926801_c7238364-f1f0-4c64-8e89-4a2186437a80.sql','2022-03-20 16:48:46','2022-03-20 16:48:46'),(22,'sqlearn_cs_dosencoba_study_case_test_0vtk0p','1647794973048_a4bab00d-8bd4-44b2-92ab-05d2094c9879.sql','2022-03-20 16:49:33','2022-03-20 16:49:33'),(27,'sqlearn_cs_dosencoba_study_case_test_hf5lmk','1647823763629_379e7ba5-b58e-4c9e-9dd3-a774eceb690f.sql','2022-03-21 00:49:23','2022-03-21 00:49:23'),(30,'sqlearn_cs_dosencoba_study_case_test_4w533m','1647859372319_90297d67-86a5-4e10-a904-ffea00147886.sql','2022-03-21 10:42:52','2022-03-21 10:42:52'),(31,'sqlearn_cs_dosencoba_study_case_test_1g8yib','1647859421598_81ae4da8-a3ec-4763-923d-bb3102e8bdbf.sql','2022-03-21 10:43:41','2022-03-21 10:43:41'),(39,'sqlearn_cs_dosencoba_testt_wspeuk','1647997053035_2a2f0ba6-c8b6-412c-8483-33ff88823cda.sql','2022-03-23 00:57:33','2022-03-23 00:57:33'),(40,'sqlearn_cs_dosencoba_testt_m5ib0o','1647997104019_279b5ae8-cc9f-438b-91cd-667094ad3fe1.sql','2022-03-23 00:58:24','2022-03-23 00:58:24'),(55,'sqlearn_cs_dosencoba_study_case_test_xkesqd','1648164612756_1b053339-1677-492d-82f0-4ec17e09e5f5.sql','2022-03-24 23:30:12','2022-03-24 23:30:12');
/*!40000 ALTER TABLE `db_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_session_student`
--

DROP TABLE IF EXISTS `log_session_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_session_student` (
  `id` int(11) NOT NULL,
  `session_id` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `answer` text DEFAULT NULL,
  `answer_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`answer_json`)),
  `type` enum('start','test','submit') DEFAULT NULL,
  `similarity` decimal(10,2) DEFAULT -1.00,
  `is_equal` tinyint(1) DEFAULT NULL,
  `timer` time DEFAULT NULL,
  `record_time` datetime DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `session_id` (`session_id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `log_session_student_ibfk_549` FOREIGN KEY (`session_id`) REFERENCES `sessions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `log_session_student_ibfk_550` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_session_student`
--

LOCK TABLES `log_session_student` WRITE;
/*!40000 ALTER TABLE `log_session_student` DISABLE KEYS */;
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
INSERT INTO `question_containers` VALUES (8,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(8,9,'2022-02-24 00:12:40','2022-02-24 00:12:40'),(9,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(9,9,'2022-02-24 00:12:40','2022-02-24 00:12:40'),(10,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(10,9,'2022-02-24 00:13:16','2022-02-24 00:13:16'),(11,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(11,9,'2022-02-24 00:13:16','2022-02-24 00:13:16'),(12,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(13,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(14,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(15,5,'2021-06-17 04:39:13','2021-06-17 04:39:13'),(16,5,'2021-06-17 04:39:13','2021-06-17 04:39:13');
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
  `answer` text NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (8,'<p>Dosen ingin menampilkan semua data tentang mahasiswa.</p>','[\"SELECT * FROM mahasiswa\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa\"]','answer_pic-1623901614402.png','mahasiswa',2,5,1,'2021-06-17 03:46:54','2021-06-17 03:46:54'),(9,'<p>Dosen ingin menampilkan semua data mahasiswa yang namanya diawali dengan huruf \'D\'</p>','[\"SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE nama LIKE \'D%\'\"]','answer_pic-1623901699340.png','mahasiswa',2,5,1,'2021-06-17 03:48:19','2021-06-17 03:48:19'),(10,'<p>Dosen ingin mengetahui urutan IPK dari yang paling besar ke yang paling kecil, informasi yang ditampilkan meliputi nama dan ipk mahasiswa tersebut</p>','[\"SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC\"]','answer_pic-1623901724476.png','mahasiswa',2,5,1,'2021-06-17 03:48:44','2021-06-17 03:48:44'),(11,'<p>Administrator ingin mengetahui jumlah mahasiswa dari setiap kelas, tampilkan nama kelas dan jumlah mahasiswa dari kelas tersebut</p>','[\"SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(*) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(nama) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(kelas) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(ipk) as jumlah_mhs FROM mahasiswa GROUP BY kelas\"]','answer_pic-1623901797490.png','mahasiswa',2,5,1,'2021-06-17 03:49:57','2021-06-17 03:49:57'),(12,'<p>Administrator ingin mengetahui kelas mana yang jumlah mahasiswanya lebih dari 2, tampilkan nama kelas dan jumlah mahasiswa kelas tersebut</p>','[\"SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(*) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(nama) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(ipk) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(kelas) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\"]','answer_pic-1623901838360.png','mahasiswa',2,5,1,'2021-06-17 03:50:38','2021-06-17 03:50:38'),(13,'<p>Dosen ingin mengetahui data mahasiswa dengan IPK antara 3.00 sampe 4.00</p>','[\"SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00\",\"SELECT * FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00\",\"SELECT * FROM mahasiswa WHERE ipk >= 3.00\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk >= 3.00\"]','answer_pic-1623901915295.png','mahasiswa',2,5,1,'2021-06-17 03:51:56','2021-06-17 03:51:56'),(14,'<p>Dosen ingin melihat data mahasiswa yang nilai IPKnya paling kecil. Petunjuk: Gunakan SubQuery</p>','[\"SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)\",\"SELECT * FROM mahasiswa ORDER BY ipk LIMIT 1\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa ORDER BY ipk LIMIT 1\"]','answer_pic-1623904606531.png','user',2,5,1,'2021-06-17 04:36:46','2021-06-17 04:36:46'),(15,'<p>Administrator ingin melihat tanggal login terakhir dari mahasiswa, tampilkan nama dan waktu login dari mahasiswa tersebut</p>','[\"SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa\"]','answer_pic-1623904684453.png','user,mahasiswa',2,5,1,'2021-06-17 04:38:04','2021-06-17 04:38:04'),(16,'<p>Administrator ingin menampilkan data nama dan kelas. Data tersebut di dapatkan dengan menggabungkan keseluruhan data antara tabel mahasiswa dan user, dimana data yang memiliki isi yang sama tetap ditampilkan</p>','[\"(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)\"]','answer_pic-1623904707990.png','mahasiswa,user',2,5,1,'2021-06-17 04:38:27','2021-06-17 04:38:27'),(20,'ini text soal updated','ini jawaban soal updated test','1645438359891_answer_pic_1224063.jpg','table,wow,tes',2,5,1,'2022-02-21 10:12:34','2022-02-21 10:12:39');
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
  `total_questions` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `container_id` (`container_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `schedules_ibfk_575` FOREIGN KEY (`container_id`) REFERENCES `containers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `schedules_ibfk_576` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
INSERT INTO `schedules` VALUES (11,'2021-07-25 07:00:00','2021-08-31 23:59:00',5,'Sesi Tes','latihan',5,'2021-06-17 04:45:05','2021-06-17 04:45:05',5),(12,'2022-08-03 08:52:52','2022-10-03 08:53:52',8,'UAS 3','ujian',5,'2022-03-09 02:39:17','2022-03-09 02:39:17',0),(13,'2022-08-03 08:52:52','2022-10-03 08:53:52',8,'UAS 5','ujian',5,'2022-03-09 02:39:38','2022-03-09 02:39:38',0),(14,'2022-03-22 04:45:01','2022-03-23 04:45:01',8,'UAS 5','ujian',5,'2022-03-22 04:45:52','2022-03-22 04:45:52',0),(15,'2022-03-22 04:45:01','2022-03-23 04:45:01',8,'UAS 5','ujian',5,'2022-03-22 04:47:40','2022-03-22 04:47:40',0),(16,'2022-03-20 04:45:01','2022-03-21 04:45:01',8,'UAS 5','ujian',5,'2022-03-22 04:55:17','2022-03-22 04:55:17',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scores`
--

LOCK TABLES `scores` WRITE;
/*!40000 ALTER TABLE `scores` DISABLE KEYS */;
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
INSERT INTO `session_db` VALUES (45,17,'2022-03-12 04:19:12','2022-03-12 04:19:12'),(45,18,'2022-03-12 04:19:22','2022-03-12 04:19:22');
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
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES (45,1,11,'2022-03-12 04:18:57',0,'2022-03-12 04:18:57','2022-03-12 04:18:57');
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
  `value` text DEFAULT NULL,
  `type` enum('threshold','latihan','ujian') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES (2,3,'90','latihan','2022-03-24 00:05:36','2022-03-24 00:05:36'),(4,3,'90','ujian','2022-03-24 00:41:58','2022-03-24 00:41:58'),(5,0,'50','latihan','2022-03-24 00:05:36','2022-03-24 00:05:36'),(6,12,'80','latihan','2022-03-24 00:05:36','2022-03-24 00:05:36'),(7,6,'95','latihan','2022-03-24 00:05:36','2022-03-24 00:05:36'),(8,NULL,'0.8','threshold','2022-03-24 00:05:36','2022-03-24 02:52:34'),(9,15,'69','ujian','2022-03-24 05:23:34','2022-03-24 05:55:19');
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
INSERT INTO `student_classes` VALUES (1,1,'2021-04-17 18:12:33','2021-04-17 18:12:33'),(1,3,'2021-05-06 08:11:18','2021-05-06 08:11:18'),(2,1,'2021-04-17 18:12:33','2021-04-17 18:12:33'),(2,12,'2021-05-06 08:10:23','2021-05-06 08:10:23'),(3,1,'2021-05-06 08:03:51','2021-05-06 08:03:51'),(3,3,'2021-05-06 08:11:18','2021-05-06 08:11:18'),(3,12,'2021-05-06 08:11:05','2021-05-06 08:11:05'),(8,12,'2021-05-06 08:11:05','2021-05-06 08:11:05'),(10,14,'2021-05-30 17:58:11','2021-05-30 17:58:11'),(11,14,'2021-05-30 17:58:11','2021-05-30 17:58:11'),(14,20,'2022-03-22 16:43:25','2022-03-22 16:43:25'),(15,20,'2022-03-22 16:43:25','2022-03-22 16:43:25'),(16,20,'2022-03-22 16:43:25','2022-03-22 16:43:25'),(17,20,'2022-03-22 16:43:25','2022-03-22 16:43:25');
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'1741720017','$2a$10$xvH9iYn3Bs8J91xAODjuwO2sKTNKFN2Z2nonD0zQkb4JCg5DaS7Lq','1741720017','Daffa','2021-04-17 18:09:33','2021-04-17 18:09:33'),(2,'1741721000','$2a$10$als9qVk4GdMgcFOXhcGl/uiiVxpuXOJXJHVC/a9SgbumeG8RC3WQu','1741721000','Baru','2021-04-17 18:09:33','2021-04-17 18:09:33'),(3,'1741720024','$2a$10$xmprmdrDbuPmipwBRLH6v.hjEPP/EBDksB/KJXO4eExN0J/9Pmu/u','1741720024','Test','2021-04-19 05:32:20','2021-04-19 05:32:20'),(8,'1741720018','$2a$10$u0IUHJakBhkZ5zTi6/HUI.CBcsYwxcu2WUVqlck3ydS67lQQWEGYu','1741720018','Akbar','2021-05-06 07:27:11','2021-05-06 07:27:11'),(10,'1741710101','$2a$10$8GwpchPd.KS30fS6cQAOXeNJQUNhuqOVOejLo.ZBYlUi6gNFiGmZO','1741710101','John Doe','2021-05-30 17:58:11','2021-05-30 17:58:11'),(11,'1741710102','$2a$10$gUyBm.qZBB3RdklMS3BwvOioAxZYB0sw5/qvaAKk58bu1EtTR4aji','1741710102','Jane Doe','2021-05-30 17:58:11','2021-05-30 17:58:11'),(12,'20417....','$2a$10$zFSNcF.la5Va/eWJH8CTRuDhZ3j32fwxfGgyziaFMI1j00Odep3vK','20417....','John Doe','2022-03-22 11:24:21','2022-03-22 11:24:21'),(13,'NIM mahasiswa','$2a$10$xayF6kMUvQ56DAgHfB2u0O/RFWx4o1y6VdqT/mU2X3XRfzJGmyDCO','NIM mahasiswa','Nama mahasiswa','2022-03-22 11:24:21','2022-03-22 11:24:21'),(14,'2041731324','$2a$10$zqhYmYEd8L1zotT4aXnefepAPMuSTWSsbKqY1Mf18O3ZeRkCyqI4S','2041731324','John Doe','2022-03-22 15:01:30','2022-03-22 15:01:30'),(15,'2041731325','$2a$10$qJwIoNA/uaC9K4nBXROUxuxoRw4eR/1vqNHJUlYhsRD2ci1zbMEG2','2041731325','John DoeL','2022-03-22 15:01:30','2022-03-22 15:01:30'),(16,'2041731326','$2a$10$58BdlLULaNKOvJqt9b9fq.rZKdNmzlrXkGganqsARM9Dqg4w/suWu','2041731326','John DoeZ','2022-03-22 15:01:30','2022-03-22 15:01:30'),(17,'2041731327','$2a$10$ADJpplMRyEl/HgHKNZKcjOEVkjxRyzktHVXK81J8mwJ7DfRisOXZe','2041731327','John DoeQ','2022-03-22 15:01:30','2022-03-22 15:01:30');
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dosen1','$2a$10$l0FUJgli9.rpU1Vn0NU3Wu3giuG7..IZSUA.9Z3lXNN9xjOTFcn3.','dosen','100001','Dosen baru','2021-04-17 17:41:25','2021-04-17 17:53:40'),(3,'dosen2','$2a$10$qryGH0B/lAgrTEHsyoDeFOhI0LAWHHN5UCSBMIUCAW14C7hUkqH.S','dosen','100002','Dosen 2','2021-05-03 07:03:54','2021-05-03 07:03:54'),(5,'dosencoba','$2a$10$L1Bx0v8DvIVwzM.WuaoNo.fMDpJ3h60UJoEkeyb3rAjyjUW5CmxoG','dosen','101010','Dosen Coba','2021-05-30 17:54:21','2021-05-30 17:54:21'),(6,'dosen3','$2a$10$l5hMEYSdxtucn02IL6PuEuxp39jYpJ0kAzub8ALniaTQen4O/Z.pi','dosen','100003','Dosen 3','2021-07-24 14:41:13','2021-07-24 14:41:13'),(7,'admincoba','$2a$10$upw4zVV9SK2rxUE4M5bV1.ZPiL.uU5oboLolajz4cO73kGDHC2wri','admin','1234567890','aku adalah admin','2022-03-15 15:57:49','2022-03-15 15:57:49'),(8,'admincoba2','$2a$10$AOKJ1H/Q/jA4bMhweqvuY.qa4lhLWeMRch6T8V.FBdaE4KsfraJjK','admin','1234567890','aku adalah admin','2022-03-15 16:00:41','2022-03-15 16:00:41');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'sqlearn_web_rev'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-25 16:12:30
