-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 24, 2022 at 10:41 PM
-- Server version: 10.3.32-MariaDB-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sqlearn_web_rev`
--

-- --------------------------------------------------------

--
-- Table structure for table `case_studies`
--

CREATE TABLE `case_studies` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `db_name` varchar(50) NOT NULL,
  `db_file` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `case_studies`
--

INSERT INTO `case_studies` (`id`, `name`, `db_name`, `db_file`, `user_id`, `createdAt`, `updatedAt`) VALUES
(2, 'Tes', 'sqlearn_cs_auto_assess_tes', NULL, 1, '2021-05-05 16:31:57', '2021-05-05 16:31:57'),
(5, 'dd', 'sqlearn_cs_dosencoba_dd_pr9k6l', '1644946596364_sql_bumdes.sql', 5, '2022-02-15 17:36:40', '2022-02-15 17:36:40'),
(6, 'dd', 'sqlearn_cs_dosencoba_dd_78ayum', '1644946630914_sql_bumdes.sql', 5, '2022-02-15 17:37:13', '2022-02-15 17:37:13'),
(7, 'dd', 'sqlearn_cs_dosencoba_dd_73uxn3', '1644946674646_sql_bumdes.sql', 5, '2022-02-15 17:37:58', '2022-02-15 17:37:58'),
(8, 'dd', 'sqlearn_cs_dosencoba_dd_v3004s', '1644946706201_sql_bumdes.sql', 5, '2022-02-15 17:38:28', '2022-02-15 17:38:28'),
(9, 'dd', 'sqlearn_cs_dosencoba_dd_fp58ey', '1644946783711_sql_bumdes.sql', 5, '2022-02-15 17:39:45', '2022-02-15 17:39:45'),
(10, 'dd', 'sqlearn_cs_dosencoba_dd_1yxfzl', '1644946863058_sql_bumdes.sql', 5, '2022-02-15 17:41:05', '2022-02-15 17:41:05'),
(11, 'dd', 'sqlearn_cs_dosencoba_dd_dpyyd6', '1644946978679_sql_bumdes.sql', 5, '2022-02-15 17:43:00', '2022-02-15 17:43:00');

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `semester` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `name`, `semester`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 'TI-4C-2021', 8, 1, '2021-04-17 18:09:21', '2021-04-17 18:09:21'),
(3, 'TI-3C-2020', 8, 1, '2021-04-17 19:26:00', '2021-04-17 19:26:00'),
(12, 'TI-4D-2021', 8, 1, '2021-05-06 07:27:11', '2021-05-06 07:27:11'),
(14, 'TI-4A-2021', 8, 5, '2021-05-30 17:58:11', '2021-05-30 17:58:11'),
(15, 'TI-4H-2022', 8, 5, '2022-02-23 07:13:21', '2022-02-23 07:13:21');

-- --------------------------------------------------------

--
-- Table structure for table `class_schedules`
--

CREATE TABLE `class_schedules` (
  `class_id` int(11) NOT NULL,
  `schedule_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `class_schedules`
--

INSERT INTO `class_schedules` (`class_id`, `schedule_id`, `createdAt`, `updatedAt`) VALUES
(14, 11, '2021-06-17 04:45:05', '2021-06-17 04:45:05');

-- --------------------------------------------------------

--
-- Table structure for table `containers`
--

CREATE TABLE `containers` (
  `id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `label_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `containers`
--

INSERT INTO `containers` (`id`, `description`, `user_id`, `label_id`, `createdAt`, `updatedAt`) VALUES
(5, 'Paket Tes', 5, 1, '2021-06-17 04:38:50', '2021-06-17 04:38:50'),
(8, 'ini uas ya', 5, 2, '2022-02-24 00:11:58', '2022-02-24 00:11:58'),
(9, 'ini uas ya', 5, 1, '2022-02-24 00:12:35', '2022-02-24 00:12:35');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `answer` text NOT NULL,
  `answer_pic` text NOT NULL,
  `tables` text NOT NULL,
  `case_study_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `label_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `text`, `answer`, `answer_pic`, `tables`, `case_study_id`, `user_id`, `label_id`, `createdAt`, `updatedAt`) VALUES
(8, '<p>Dosen ingin menampilkan semua data tentang mahasiswa.</p>', '[\"SELECT * FROM mahasiswa\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa\"]', 'answer_pic-1623901614402.png', 'mahasiswa', 2, 5, 1, '2021-06-17 03:46:54', '2021-06-17 03:46:54'),
(9, '<p>Dosen ingin menampilkan semua data mahasiswa yang namanya diawali dengan huruf \'D\'</p>', '[\"SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE nama LIKE \'D%\'\"]', 'answer_pic-1623901699340.png', 'mahasiswa', 2, 5, 1, '2021-06-17 03:48:19', '2021-06-17 03:48:19'),
(10, '<p>Dosen ingin mengetahui urutan IPK dari yang paling besar ke yang paling kecil, informasi yang ditampilkan meliputi nama dan ipk mahasiswa tersebut</p>', '[\"SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC\"]', 'answer_pic-1623901724476.png', 'mahasiswa', 2, 5, 1, '2021-06-17 03:48:44', '2021-06-17 03:48:44'),
(11, '<p>Administrator ingin mengetahui jumlah mahasiswa dari setiap kelas, tampilkan nama kelas dan jumlah mahasiswa dari kelas tersebut</p>', '[\"SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(*) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(nama) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(kelas) as jumlah_mhs FROM mahasiswa GROUP BY kelas\",\"SELECT kelas, COUNT(ipk) as jumlah_mhs FROM mahasiswa GROUP BY kelas\"]', 'answer_pic-1623901797490.png', 'mahasiswa', 2, 5, 1, '2021-06-17 03:49:57', '2021-06-17 03:49:57'),
(12, '<p>Administrator ingin mengetahui kelas mana yang jumlah mahasiswanya lebih dari 2, tampilkan nama kelas dan jumlah mahasiswa kelas tersebut</p>', '[\"SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(*) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(nama) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(ipk) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\",\"SELECT kelas, COUNT(kelas) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2\"]', 'answer_pic-1623901838360.png', 'mahasiswa', 2, 5, 1, '2021-06-17 03:50:38', '2021-06-17 03:50:38'),
(13, '<p>Dosen ingin mengetahui data mahasiswa dengan IPK antara 3.00 sampe 4.00</p>', '[\"SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00\",\"SELECT * FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk >= 3.00 AND ipk <= 4.00\",\"SELECT * FROM mahasiswa WHERE ipk >= 3.00\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk >= 3.00\"]', 'answer_pic-1623901915295.png', 'mahasiswa', 2, 5, 1, '2021-06-17 03:51:56', '2021-06-17 03:51:56'),
(14, '<p>Dosen ingin melihat data mahasiswa yang nilai IPKnya paling kecil. Petunjuk: Gunakan SubQuery</p>', '[\"SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)\",\"SELECT * FROM mahasiswa ORDER BY ipk LIMIT 1\",\"SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa ORDER BY ipk LIMIT 1\"]', 'answer_pic-1623904606531.png', 'user', 2, 5, 1, '2021-06-17 04:36:46', '2021-06-17 04:36:46'),
(15, '<p>Administrator ingin melihat tanggal login terakhir dari mahasiswa, tampilkan nama dan waktu login dari mahasiswa tersebut</p>', '[\"SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa\"]', 'answer_pic-1623904684453.png', 'user,mahasiswa', 2, 5, 1, '2021-06-17 04:38:04', '2021-06-17 04:38:04'),
(16, '<p>Administrator ingin menampilkan data nama dan kelas. Data tersebut di dapatkan dengan menggabungkan keseluruhan data antara tabel mahasiswa dan user, dimana data yang memiliki isi yang sama tetap ditampilkan</p>', '[\"(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)\"]', 'answer_pic-1623904707990.png', 'mahasiswa,user', 2, 5, 1, '2021-06-17 04:38:27', '2021-06-17 04:38:27'),
(20, 'ini text soal updated', 'ini jawaban soal updated test', '1645438359891_answer_pic_1224063.jpg', 'table,wow,tes', 2, 5, 1, '2022-02-21 10:12:34', '2022-02-21 10:12:39');

-- --------------------------------------------------------

--
-- Table structure for table `questions_label`
--

CREATE TABLE `questions_label` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions_label`
--

INSERT INTO `questions_label` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Open-Ended', '2021-06-17 03:46:54', '2021-06-17 03:46:54'),
(2, 'Close-Ended', '2021-06-17 03:46:54', '2021-06-17 03:46:54');

-- --------------------------------------------------------

--
-- Table structure for table `question_containers`
--

CREATE TABLE `question_containers` (
  `question_id` int(11) NOT NULL,
  `container_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question_containers`
--

INSERT INTO `question_containers` (`question_id`, `container_id`, `createdAt`, `updatedAt`) VALUES
(8, 5, '2021-06-17 04:39:13', '2021-06-17 04:39:13'),
(8, 9, '2022-02-24 00:12:40', '2022-02-24 00:12:40'),
(9, 5, '2021-06-17 04:39:13', '2021-06-17 04:39:13'),
(9, 9, '2022-02-24 00:12:40', '2022-02-24 00:12:40'),
(10, 5, '2021-06-17 04:39:13', '2021-06-17 04:39:13'),
(10, 9, '2022-02-24 00:13:16', '2022-02-24 00:13:16'),
(11, 5, '2021-06-17 04:39:13', '2021-06-17 04:39:13'),
(11, 9, '2022-02-24 00:13:16', '2022-02-24 00:13:16'),
(12, 5, '2021-06-17 04:39:13', '2021-06-17 04:39:13'),
(13, 5, '2021-06-17 04:39:13', '2021-06-17 04:39:13'),
(14, 5, '2021-06-17 04:39:13', '2021-06-17 04:39:13'),
(15, 5, '2021-06-17 04:39:13', '2021-06-17 04:39:13'),
(16, 5, '2021-06-17 04:39:13', '2021-06-17 04:39:13');

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `id` int(11) NOT NULL,
  `start` datetime NOT NULL,
  `finish` datetime NOT NULL,
  `container_id` int(11) DEFAULT NULL,
  `description` varchar(360) DEFAULT NULL,
  `type` enum('latihan','ujian') NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `total_questions` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `schedules`
--

INSERT INTO `schedules` (`id`, `start`, `finish`, `container_id`, `description`, `type`, `user_id`, `createdAt`, `updatedAt`, `total_questions`) VALUES
(11, '2021-07-25 07:00:00', '2021-08-31 23:59:00', 5, 'Sesi Tes', 'latihan', 5, '2021-06-17 04:45:05', '2021-06-17 04:45:05', 5);

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

CREATE TABLE `scores` (
  `id` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  `schedule_id` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  `schedule_id` int(11) DEFAULT NULL,
  `session_started` datetime DEFAULT current_timestamp(),
  `is_finished` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `log_session_student`
--

CREATE TABLE `log_session_student` (
  `id` int(11) NOT NULL,
  `session_id` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `answer` text DEFAULT NULL,
  `answer_json` json DEFAULT NULL,
  `type` enum('start','test','submit') DEFAULT NULL,
  `similarity` decimal(10,2) DEFAULT -1.00,
  `is_equal` tinyint(1) DEFAULT NULL,
  `timer` time DEFAULT NULL,
  `record_time` datetime DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `key_tag` varchar(100) NOT NULL,
  `tag_1` text DEFAULT NULL,
  `tag_2` text DEFAULT NULL,
  `tag_3` text DEFAULT NULL,
  `tag_4` text DEFAULT NULL,
  `tag_5` text DEFAULT NULL,
  `tag_6` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key_tag`, `tag_1`, `tag_2`, `tag_3`, `tag_4`, `tag_5`, `tag_6`, `createdAt`, `updatedAt`) VALUES
(1, 'threshold', '0.6', NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '2021-07-24 17:40:53');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `nim` varchar(30) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `username`, `password`, `nim`, `name`, `createdAt`, `updatedAt`) VALUES
(1, '1741720017', '$2a$10$xvH9iYn3Bs8J91xAODjuwO2sKTNKFN2Z2nonD0zQkb4JCg5DaS7Lq', '1741720017', 'Daffa', '2021-04-17 18:09:33', '2021-04-17 18:09:33'),
(2, '1741721000', '$2a$10$als9qVk4GdMgcFOXhcGl/uiiVxpuXOJXJHVC/a9SgbumeG8RC3WQu', '1741721000', 'Baru', '2021-04-17 18:09:33', '2021-04-17 18:09:33'),
(3, '1741720024', '$2a$10$xmprmdrDbuPmipwBRLH6v.hjEPP/EBDksB/KJXO4eExN0J/9Pmu/u', '1741720024', 'Test', '2021-04-19 05:32:20', '2021-04-19 05:32:20'),
(8, '1741720018', '$2a$10$u0IUHJakBhkZ5zTi6/HUI.CBcsYwxcu2WUVqlck3ydS67lQQWEGYu', '1741720018', 'Akbar', '2021-05-06 07:27:11', '2021-05-06 07:27:11'),
(10, '1741710101', '$2a$10$8GwpchPd.KS30fS6cQAOXeNJQUNhuqOVOejLo.ZBYlUi6gNFiGmZO', '1741710101', 'John Doe', '2021-05-30 17:58:11', '2021-05-30 17:58:11'),
(11, '1741710102', '$2a$10$gUyBm.qZBB3RdklMS3BwvOioAxZYB0sw5/qvaAKk58bu1EtTR4aji', '1741710102', 'Jane Doe', '2021-05-30 17:58:11', '2021-05-30 17:58:11');

-- --------------------------------------------------------

--
-- Table structure for table `student_classes`
--

CREATE TABLE `student_classes` (
  `student_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_classes`
--

INSERT INTO `student_classes` (`student_id`, `class_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2021-04-17 18:12:33', '2021-04-17 18:12:33'),
(1, 3, '2021-05-06 08:11:18', '2021-05-06 08:11:18'),
(2, 1, '2021-04-17 18:12:33', '2021-04-17 18:12:33'),
(2, 12, '2021-05-06 08:10:23', '2021-05-06 08:10:23'),
(3, 1, '2021-05-06 08:03:51', '2021-05-06 08:03:51'),
(3, 3, '2021-05-06 08:11:18', '2021-05-06 08:11:18'),
(3, 12, '2021-05-06 08:11:05', '2021-05-06 08:11:05'),
(8, 12, '2021-05-06 08:11:05', '2021-05-06 08:11:05'),
(10, 14, '2021-05-30 17:58:11', '2021-05-30 17:58:11'),
(11, 14, '2021-05-30 17:58:11', '2021-05-30 17:58:11');

-- --------------------------------------------------------

--
-- Table structure for table `test_user_answers`
--

CREATE TABLE `test_user_answers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `answer` text DEFAULT NULL,
  `type` enum('test','submit') DEFAULT NULL,
  `similarity` decimal(10,2) DEFAULT -1.00,
  `is_equal` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `test_user_answers`
--

INSERT INTO `test_user_answers` (`id`, `name`, `question_id`, `answer`, `type`, `similarity`, `is_equal`, `createdAt`, `updatedAt`) VALUES
(1, 'Afifah Millatina N', 8, 'select * from mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(2, 'Afifah Millatina N', 9, 'select * from mahasiswa where nama like \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(3, 'Andhika Muhammad Nugroho', 9, 'Select * from mahasiswa where nama like \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(4, 'Andhika Muhammad Nugroho', 9, 'Select * from mahasiswa where nama like \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(5, 'Andhika Muhammad Nugroho', 11, 'Select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(6, 'Andhika Muhammad Nugroho', 11, 'Select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(7, 'Andhika Muhammad Nugroho', 11, 'Select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(8, 'Andhika Muhammad Nugroho', 11, 'Select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(9, 'Andhika Muhammad Nugroho', 11, 'Select kelas, count (*) as jumlah_mhs from mahasiswa group by kelas', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(10, 'Andhika Muhammad Nugroho', 11, 'Select kelas, count (*) as jumlah_mhs from mahasiswa group by kelas', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(11, 'Andhika Muhammad Nugroho', 13, 'Select * from mahasiswa where ipk > 2.99', 'test', '0.54', 0, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(12, 'Andhika Muhammad Nugroho', 13, 'Select * from mahasiswa where ipk >= 3', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(13, 'Andhika Muhammad Nugroho', 13, 'Select * from mahasiswa where ipk >= 3', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(14, 'Andhika Muhammad Nugroho', 13, 'Select * from mahasiswa where ipk >= 3', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(15, 'Andhika Muhammad Nugroho', 13, 'Select * from mahasiswa where ipk >= 3', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(16, 'Andhika Muhammad Nugroho', 15, 'Select mahasiswa.nama, user.waktu_login from mahasiswa inner join user on mahasiswa.id_mahasiswa = user.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(17, 'Andhika Muhammad Nugroho', 15, 'Select mahasiswa.nama, user.waktu_login from mahasiswa inner join user on mahasiswa.id_mahasiswa = user.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(18, 'Andhika Muhammad Nugroho', 16, '(Select nama, kelas from mahasiswa) union all (select username, null from user) ', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(19, 'Andhika Muhammad Nugroho', 16, '(Select nama, kelas from mahasiswa) union all (select username, null from user) order by nama', 'test', '-1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(20, 'Andhika Muhammad Nugroho', 16, '(Select nama, kelas from mahasiswa) union all (select username, null from user) order by nama', 'submit', '-1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(21, 'Dimas Eka Adinandra', 9, 'SELECT *FROM mahasiswa WHERE nama like \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(22, 'Dimas Eka Adinandra', 9, 'SELECT *FROM mahasiswa WHERE nama like \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(23, 'Dini Triana', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(24, 'Dini Triana', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(25, 'Dini Triana', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(26, 'Dini Triana', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(27, 'Aldi Surya Pranata', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(28, 'Aldi Surya Pranata', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(29, 'Aldi Surya Pranata', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(30, 'Aldi Surya Pranata', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(31, 'Aldi Surya Pranata', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(32, 'Aldi Surya Pranata', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(33, 'Aldi Surya Pranata', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(34, 'Aldi Surya Pranata', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(35, 'Aldi Surya Pranata', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(36, 'Aldi Surya Pranata', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(37, 'Aldi Surya Pranata', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(38, 'Aldi Surya Pranata', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(39, 'Wahyu Hidayah', 10, 'select nama, ipk from mahasiswa order by ipk desc', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(40, 'Wahyu Hidayah', 10, 'select nama, ipk from mahasiswa order by ipk desc', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(41, 'Dimas Eka Adinandra', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(42, 'Dimas Eka Adinandra', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(43, 'TOMI DWI SETYAWAN', 8, '\nSELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(44, 'TOMI DWI SETYAWAN', 8, '\nSELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(45, 'Dimas Eka Adinandra', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(46, 'Dimas Eka Adinandra', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(47, 'Dimas Eka Adinandra', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(48, 'Dimas Eka Adinandra', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'submit', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(49, 'Dimas Eka Adinandra', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:54', '2021-06-17 05:18:54'),
(50, 'Dimas Eka Adinandra', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(51, 'Wahyu Hidayah', 11, 'select kelas, count(kelas) as jumlah_mhs from mahasiswa group by kelas', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(52, 'Dimas Eka Adinandra', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(53, 'Dimas Eka Adinandra', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(54, 'Wahyu Hidayah', 11, 'select kelas, count(kelas) as jumlah_mhs from mahasiswa group by kelas', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(55, 'Dimas Eka Adinandra', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(56, 'Dimas Eka Adinandra', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(57, 'Dimas Eka Adinandra', 15, '\nSELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(58, 'Dimas Eka Adinandra', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(59, 'Dimas Eka Adinandra', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(60, 'Dimas Eka Adinandra', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(61, 'Wahyu Hidayah', 12, 'select kelas, count(kelas) as jumlah_mhs from mahasiswa  group by kelas having jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(62, 'Wahyu Hidayah', 12, 'select kelas, count(kelas) as jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(63, 'Wahyu Hidayah', 12, 'select kelas, count(kelas) as jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(64, 'TOMI DWI SETYAWAN', 10, '\nSELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(65, 'TOMI DWI SETYAWAN', 10, '\nSELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(66, 'TOMI DWI SETYAWAN', 10, '\nSELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC;', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(67, 'TOMI DWI SETYAWAN', 10, '\nSELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC;', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(68, 'TOMI DWI SETYAWAN', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas;', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(69, 'TOMI DWI SETYAWAN', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas;', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(70, 'Muhammad Taufik Prayitno', 8, 'SELECT * FROM mahasiswa\n', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(71, 'Muhammad Taufik Prayitno', 8, 'SELECT * FROM mahasiswa\n', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(72, 'Wahyu Hidayah', 15, 'select m.nama, u.waktu_login from mahasiswa as m join user as u on m.id_mahasiswa = u.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(73, 'Wahyu Hidayah', 15, 'select m.nama, u.waktu_login from mahasiswa as m join user as u on m.id_mahasiswa = u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(74, 'Wahyu Hidayah', 16, '(select nama, kelas from mahasiswa) union all (select username, null kelas from user)', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(75, 'Wahyu Hidayah', 16, '(select nama, kelas from mahasiswa) union all (select username, null kelas from user)', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(76, 'TOMI DWI SETYAWAN', 12, '\nSELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(77, 'TOMI DWI SETYAWAN', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(78, 'TOMI DWI SETYAWAN', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(79, 'TOMI DWI SETYAWAN', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(80, 'TOMI DWI SETYAWAN', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(81, 'TOMI DWI SETYAWAN', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(82, 'TOMI DWI SETYAWAN', 14, '\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(83, 'TOMI DWI SETYAWAN', 14, '\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(84, 'TOMI DWI SETYAWAN', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(85, 'TOMI DWI SETYAWAN', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(86, 'TOMI DWI SETYAWAN', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(87, 'TOMI DWI SETYAWAN', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(88, 'Muhammad Fakhryan Zulfahmi', 8, 'select * from mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(89, 'Muhammad Fakhryan Zulfahmi', 8, 'select * from mahasiswa;', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(90, 'Muhammad Fakhryan Zulfahmi', 8, 'select * from mahasiswa;', 'submit', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(91, 'Muhammad Fakhryan Zulfahmi', 9, 'select * from mahasiswa where nama LIKE \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:55', '2021-06-17 05:18:55'),
(92, 'Muhammad Fakhryan Zulfahmi', 9, 'select * from mahasiswa where nama LIKE \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(93, 'Muhammad Fakhryan Zulfahmi', 10, 'SELECT nama, ipk FROM mahasiswa order by ipk desc', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(94, 'Muhammad Fakhryan Zulfahmi', 11, 'select kelas, count(id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas ', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(95, 'Muhammad Fakhryan Zulfahmi', 11, 'select kelas, count(id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas ', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(96, 'Muhammad Fakhryan Zulfahmi', 12, 'select kelas, count(id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(97, 'Muhammad Fakhryan Zulfahmi', 12, 'select kelas, count(id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(98, 'Muhammad Fakhryan Zulfahmi', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(99, 'Muhammad Fakhryan Zulfahmi', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(100, 'Muhammad Fakhryan Zulfahmi', 15, 'select mhs.nama, usr.waktu_login from mahasiswa mhs join user usr on mhs.id_mahasiswa = usr.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(101, 'Muhammad Fakhryan Zulfahmi', 15, 'select mhs.nama, usr.waktu_login from mahasiswa mhs join user usr on mhs.id_mahasiswa = usr.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(102, 'Muhammad Fakhryan Zulfahmi', 16, 'select nama, kelas from mahasiswa union all select username, null kelas from user', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(103, 'Muhammad Fakhryan Zulfahmi', 16, 'select nama, kelas from mahasiswa union all select username, null kelas from user', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(104, 'Maria Puji', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(105, 'Naufal Yudhistira', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(106, 'Maria Puji', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(107, 'Maria Puji', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(108, 'Maria Puji', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(109, 'Naufal Yudhistira', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(110, 'Naufal Yudhistira', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(111, 'Naufal Yudhistira', 10, 'SELECT nama,ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(112, 'Naufal Yudhistira', 10, 'SELECT nama,ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(113, 'Naufal Yudhistira', 11, 'SELECT kelas, COUNT(kelas) AS jumlah_mhs FROM mahasiswa GROUP BY kelas', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(114, 'Naufal Yudhistira', 11, 'SELECT kelas, COUNT(kelas) AS jumlah_mhs FROM mahasiswa GROUP BY kelas', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(115, 'Naufal Yudhistira', 12, 'SELECT \"4C\" as kelas, 3 as jumlah_mhs', 'test', '0.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(116, 'Naufal Yudhistira', 12, 'SELECT \"4C\" as kelas, 3 as jumlah_mhs', 'submit', '0.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(117, 'Naufal Yudhistira', 13, 'select id_mahasiswa, nama, kelas, ipk from mahasiswa where ipk between 3.00 and 4.00', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(118, 'Naufal Yudhistira', 13, 'select id_mahasiswa, nama, kelas, ipk from mahasiswa where ipk between 3.00 and 4.00', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(119, 'Naufal Yudhistira', 14, 'select id_mahasiswa, nama, kelas, ipk from mahasiswa where ipk <= (select min(ipk) from mahasiswa)', 'test', '0.75', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(120, 'Naufal Yudhistira', 14, 'select id_mahasiswa, nama, kelas, ipk from mahasiswa where ipk <= (select min(ipk) from mahasiswa)', 'submit', '0.75', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(121, 'Maria Puji', 15, 'SELECT n.nama,u.waktu_login FROM mahasiswa n JOIN user u ON n.id_mahasiswa=u.id_mahasiswa;', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(122, 'Maria Puji', 15, 'SELECT n.nama,u.waktu_login FROM mahasiswa n JOIN user u ON n.id_mahasiswa=u.id_mahasiswa;', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(123, 'Maria Puji', 16, '(SELECT nama,kelas FROM mahasiswa) UNION ALL (SELECT username,null kelas FROM user)', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(124, 'Maria Puji', 16, '(SELECT nama,kelas FROM mahasiswa) UNION ALL (SELECT username,null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(125, 'Naufal Yudhistira', 15, 'select m.nama, u.waktu_login from mahasiswa m\nleft join user u\non u.id_mahasiswa = m.id_mahasiswa', 'test', '0.47', 0, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(126, 'Naufal Yudhistira', 15, 'select m.nama, u.waktu_login from mahasiswa m\nleft join user u\non u.id_mahasiswa = m.id_mahasiswa', 'submit', '0.47', 0, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(127, 'Naufal Yudhistira', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(128, 'Naufal Yudhistira', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(129, 'Naufal Yudhistira', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(130, 'Dini Triana', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC ', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(131, 'Dini Triana', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC ', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(132, 'Dini Triana', 11, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(133, 'Dini Triana', 11, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(134, 'Dini Triana', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(135, 'Dini Triana', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(136, 'Dini Triana', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(137, 'Dini Triana', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(138, 'Dini Triana', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(139, 'Dini Triana', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(140, 'Dini Triana', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m join user u ON m.id_mahasiswa =  u.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(141, 'Dini Triana', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m join user u ON m.id_mahasiswa =  u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(142, 'Dini Triana', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(143, 'Dini Triana', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(144, 'Afifah Millatina N', 9, 'select * from mahasiswa where nama like \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(145, 'Afifah Millatina N', 9, 'select * from mahasiswa where nama like \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(146, 'Afifah Millatina N', 10, 'select nama, ipk from mahasiswa order by ipk desc', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(147, 'Afifah Millatina N', 10, 'select nama, ipk from mahasiswa order by ipk desc', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(148, 'Afifah Millatina N', 11, 'select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(149, 'Afifah Millatina N', 11, 'select kelas, count (id_mahasiswa) as jumlah_mhs from mahasiswa group by kelas', 'submit', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(150, 'Afifah Millatina N', 12, 'select kelas, count(id_mahasiswa) jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:56', '2021-06-17 05:18:56'),
(151, 'Afifah Millatina N', 12, 'select kelas, count(id_mahasiswa) jumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(152, 'Afifah Millatina N', 14, 'select * from mahasiswa where ipk = (select min(ipk) from mahasiswa)', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(153, 'Afifah Millatina N', 14, 'select * from mahasiswa where ipk = (select min(ipk) from mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(154, 'Afifah Millatina N', 15, 'select m.nama, u.waktu_login from mahasiswa m join user u on m.id_mahasiswa = u.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(155, 'Afifah Millatina N', 15, 'select m.nama, u.waktu_login from mahasiswa m join user u on m.id_mahasiswa = u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(156, 'Afifah Millatina N', 16, '(select nama, kelas from mahasiswa) union all (select username, null kelas from user)', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(157, 'Afifah Millatina N', 16, '(select nama, kelas from mahasiswa) union all (select username, null kelas from user)', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(158, 'Ilham Nuswantoro Aji', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(159, 'Ilham Nuswantoro Aji', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(160, 'Ilham Nuswantoro Aji', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(161, 'Ilham Nuswantoro Aji', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(162, 'Ilham Nuswantoro Aji', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(163, 'Ilham Nuswantoro Aji', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(164, 'Ilham Nuswantoro Aji', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(165, 'Ilham Nuswantoro Aji', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(166, 'Ilham Nuswantoro Aji', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(167, 'Ilham Nuswantoro Aji', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(168, 'Ilham Nuswantoro Aji', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(169, 'Ilham Nuswantoro Aji', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(170, 'Ilham Nuswantoro Aji', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(171, 'Ilham Nuswantoro Aji', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(172, 'Ilham Nuswantoro Aji', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa\n', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(173, 'Ilham Nuswantoro Aji', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa\n', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(174, 'Ilham Nuswantoro Aji', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)\n', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(175, 'Ilham Nuswantoro Aji', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)\n', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(176, 'Linda Puspita Tarumawardani', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(177, 'Linda Puspita Tarumawardani', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(178, 'Linda Puspita Tarumawardani', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(179, 'Linda Puspita Tarumawardani', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(180, 'Linda Puspita Tarumawardani', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(181, 'Linda Puspita Tarumawardani', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(182, 'Linda Puspita Tarumawardani', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(183, 'Linda Puspita Tarumawardani', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(184, 'Linda Puspita Tarumawardani', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(185, 'Linda Puspita Tarumawardani', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(186, 'Linda Puspita Tarumawardani', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(187, 'Linda Puspita Tarumawardani', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(188, 'Linda Puspita Tarumawardani', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(189, 'Linda Puspita Tarumawardani', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(190, 'Linda Puspita Tarumawardani', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(191, 'Linda Puspita Tarumawardani', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(192, 'Linda Puspita Tarumawardani', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(193, 'Linda Puspita Tarumawardani', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(194, 'Linda Puspita Tarumawardani', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(195, 'Linda Puspita Tarumawardani', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(196, 'Linda Puspita Tarumawardani', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(197, 'Linda Puspita Tarumawardani', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(198, 'Linda Puspita Tarumawardani', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(199, 'Dewi Oktavia Efendi', 8, 'SELECT*FROM mahasiswa;', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(200, 'Dewi Oktavia Efendi', 8, 'SELECT*FROM mahasiswa;', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(201, 'Dewi Oktavia Efendi', 9, 'SELECT*FROM mahasiswa \nWHERE nama LIKE \'D%\';', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(202, 'Dewi Oktavia Efendi', 9, 'SELECT*FROM mahasiswa \nWHERE nama LIKE \'D%\';', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(203, 'Dewi Oktavia Efendi', 9, 'SELECT*FROM mahasiswa \nWHERE nama LIKE \'D%\';', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(204, 'Dewi Oktavia Efendi', 10, 'SELECT nama,ipk FROM mahasiswa\nORDER BY ipk DESC;', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(205, 'Dewi Oktavia Efendi', 10, 'SELECT nama,ipk FROM mahasiswa\nORDER BY ipk DESC;', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(206, 'Dewi Oktavia Efendi', 10, 'SELECT nama,ipk FROM mahasiswa\nORDER BY ipk DESC;', 'submit', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(207, 'Dewi Oktavia Efendi', 13, 'Select id_mahasiswa, nama, kelas, ipk\nFrom mahasiswa\nWhere ipk >= 3.00 AND ipk<=4.00;', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(208, 'Dewi Oktavia Efendi', 13, 'Select id_mahasiswa, nama, kelas, ipk\nFrom mahasiswa\nWhere ipk >= 3.00 AND ipk<=4.00;', 'test', '1.00', 1, '2021-06-17 05:18:57', '2021-06-17 05:18:57'),
(209, 'Dewi Oktavia Efendi', 13, 'Select id_mahasiswa, nama, kelas, ipk\nFrom mahasiswa\nWhere ipk >= 3.00 AND ipk<=4.00;', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(210, 'Dewi Oktavia Efendi', 11, 'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas asc;', 'test', '0.84', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(211, 'Dewi Oktavia Efendi', 11, 'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas asc;', 'test', '0.84', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(212, 'Dewi Oktavia Efendi', 11, 'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas asc;', 'test', '0.84', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(213, 'Dewi Oktavia Efendi', 11, 'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas asc;', 'submit', '0.84', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(214, 'Dewi Oktavia Efendi', 11, 'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas asc;', 'test', '0.84', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(215, 'Dewi Oktavia Efendi', 12, 'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas\nHAVING jumlah_mhs > 2 ;', 'test', '0.86', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(216, 'Dewi Oktavia Efendi', 12, 'SELECT DISTINCT kelas, COUNT(id_mahasiswa) as jumlah_mhs\nFROM mahasiswa\nGROUP BY kelas\nHAVING jumlah_mhs > 2 ;', 'submit', '0.86', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(217, 'Linda Puspita Tarumawardani', 14, '\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(218, 'Linda Puspita Tarumawardani', 14, '\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(219, 'Linda Puspita Tarumawardani', 14, '\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(220, 'Dewi Oktavia Efendi', 14, 'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa\nWHERE ipk = ( SELECT MIN(ipk)\nFROM mahasiswa);', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(221, 'Dewi Oktavia Efendi', 14, 'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa\nWHERE ipk = ( SELECT MIN(ipk)\nFROM mahasiswa);', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(222, 'Dewi Oktavia Efendi', 14, 'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa\nWHERE ipk = ( SELECT MIN(ipk)\nFROM mahasiswa);', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(223, 'Linda Puspita Tarumawardani', 14, '\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(224, 'Dewi Oktavia Efendi', 15, 'SELECT m.nama, u.waktu_login\nFROM mahasiswa m \nInner Join user u on m.id_mahasiswa=u.id_mahasiswa;', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(225, 'Dewi Oktavia Efendi', 15, 'SELECT m.nama, u.waktu_login\nFROM mahasiswa m \nInner Join user u on m.id_mahasiswa=u.id_mahasiswa;', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(226, 'Dewi Oktavia Efendi', 15, 'SELECT m.nama, u.waktu_login\nFROM mahasiswa m \nInner Join user u on m.id_mahasiswa=u.id_mahasiswa;', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(227, 'Dewi Oktavia Efendi', 16, 'SELECT nama, kelas FROM mahasiswa\nUNION \nSELECT username, null kelas FROM user', 'test', '0.90', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(228, 'Dewi Oktavia Efendi', 16, 'SELECT nama, kelas FROM mahasiswa\nUNION \nSELECT username, null kelas FROM user', 'submit', '0.90', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(229, 'Faisal Wafa', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(230, 'Faisal Wafa', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(231, 'Faisal Wafa', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(232, 'Faisal Wafa', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(233, 'Faisal Wafa', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(234, 'Faisal Wafa', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(235, 'Faisal Wafa', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(236, 'Faisal Wafa', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(237, 'Faisal Wafa', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(238, 'Faisal Wafa', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(239, 'Krisna W', 8, 'Select * from mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(240, 'Krisna W', 8, 'Select * from mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(241, 'Krisna W', 10, 'Select nama, ipk from mahasiswa order by ipk desc', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(242, 'Krisna W', 10, 'Select nama, ipk from mahasiswa order by ipk desc', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(243, 'Krisna W', 12, 'Select kelas,\ncount(id_mahasiswa)\njumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(244, 'Krisna W', 12, 'Select kelas,\ncount(id_mahasiswa)\njumlah_mhs from mahasiswa group by kelas having jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(245, 'Krisna W', 9, 'Select * from mahasiswa where nama like \'d%\'', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(246, 'Krisna W', 9, 'Select * from mahasiswa where nama like \'d%\'', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(247, 'Krisna W', 11, 'Select kelas, count(id_mahasiswa) jumlah_mhs from mahasiswa group by kelas', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(248, 'Krisna W', 11, 'Select kelas, count(id_mahasiswa) jumlah_mhs from mahasiswa group by kelas', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(249, 'Krisna W', 13, 'Select * from mahasiswa where ipk between 3.00 and 4.00', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(250, 'Krisna W', 13, 'Select * from mahasiswa where ipk between 3.00 and 4.00', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(251, 'Krisna W', 14, 'Select * from mahasiswa where ipk = (select min(ipk) from mahasiswa)', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(252, 'Krisna W', 14, 'Select * from mahasiswa where ipk = (select min(ipk) from mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(253, 'Krisna W', 15, 'Select m.nama, u.waktu_login from mahasiswa m join user u on m.id_mahasiswa = u.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(254, 'Krisna W', 15, 'Select m.nama, u.waktu_login from mahasiswa m join user u on m.id_mahasiswa = u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(255, 'Krisna W', 16, '(select nama, kelas from mahasiswa) union all (select username, null kelas from user)', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(256, 'Krisna W', 16, '(select nama, kelas from mahasiswa) union all(select username, null kelas from user)', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(257, 'Krisna W', 16, '(select nama, kelas from mahasiswa) union all(select username, null kelas from user)', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(258, 'Muhammad Ganang Alfiridho', 8, 'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(259, 'Muhammad Ganang Alfiridho', 8, 'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(260, 'Muhammad Ganang Alfiridho', 9, 'SELECT * FROM mahasiswa WHERE nama REGEXP \'^[d]\'', 'test', '0.74', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(261, 'Muhammad Ganang Alfiridho', 9, 'SELECT * FROM mahasiswa WHERE nama REGEXP \'^[d]\'', 'submit', '0.74', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(262, 'Muhammad Ganang Alfiridho', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(263, 'Muhammad Ganang Alfiridho', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(264, 'Muhammad Ganang Alfiridho', 11, 'SELECT kelas, COUNT(kelas) AS jumlah_mhs FROM mahasiswa GROUP BY kelas', 'test', '1.00', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(265, 'Muhammad Ganang Alfiridho', 11, 'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1', 'test', '0.55', 1, '2021-06-17 05:18:58', '2021-06-17 05:18:58'),
(266, 'Muhammad Ganang Alfiridho', 11, 'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1', 'test', '0.55', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(267, 'Muhammad Ganang Alfiridho', 11, 'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1', 'test', '0.55', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(268, 'Muhammad Ganang Alfiridho', 11, 'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1', 'test', '0.55', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(269, 'Muhammad Ganang Alfiridho', 11, 'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1', 'test', '0.55', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(270, 'Muhammad Ganang Alfiridho', 11, 'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1', 'test', '0.55', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(271, 'Muhammad Ganang Alfiridho', 11, 'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1', 'test', '0.55', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(272, 'Muhammad Ganang Alfiridho', 11, 'SELECT kelas, 0+SUM(1) AS jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING SUM(1)>1', 'submit', '0.55', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(273, 'Muhammad Ganang Alfiridho', 12, 'SELECT \"4C\" AS kelas, 3 AS jumlah_mhs', 'test', '0.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(274, 'Muhammad Ganang Alfiridho', 12, 'SELECT \"4C\" AS kelas, 3 AS jumlah_mhs', 'submit', '0.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(275, 'Muhammad Ganang Alfiridho', 13, 'SELECT * FROM mahasiswa WHERE ipk >= 3 and ipk <= 4', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(276, 'Muhammad Ganang Alfiridho', 13, 'SELECT * FROM mahasiswa WHERE ipk >= 3 and ipk <= 4', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(277, 'Muhammad Ganang Alfiridho', 14, 'SELECT * FROM mahasiswa ORDER BY ipk LIMIT 1', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(278, 'Muhammad Ganang Alfiridho', 14, 'SELECT * FROM mahasiswa ORDER BY ipk LIMIT 1', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(279, 'Bachtiar Putera Alamsyah', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(280, 'Bachtiar Putera Alamsyah', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(281, 'Bachtiar Putera Alamsyah', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(282, 'Muhammad Ganang Alfiridho', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '0.47', 0, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(283, 'Bachtiar Putera Alamsyah', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(284, 'Muhammad Ganang Alfiridho', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '0.47', 0, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(285, 'Muhammad Ganang Alfiridho', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '0.47', 0, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(286, 'Muhammad Ganang Alfiridho', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '0.47', 0, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(287, 'Muhammad Ganang Alfiridho', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '0.47', 0, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(288, 'Bachtiar Putera Alamsyah', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(289, 'Muhammad Ganang Alfiridho', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa AS m\nLEFT JOIN user AS u ON m.id_mahasiswa = u.id_mahasiswa', 'submit', '0.47', 0, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(290, 'Bachtiar Putera Alamsyah', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(291, 'Bachtiar Putera Alamsyah', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(292, 'Muhammad Ganang Alfiridho', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(293, 'Muhammad Ganang Alfiridho', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(294, 'Bachtiar Putera Alamsyah', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(295, 'Bachtiar Putera Alamsyah', 12, '\nSELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(296, 'Bachtiar Putera Alamsyah', 12, '\nSELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59');
INSERT INTO `test_user_answers` (`id`, `name`, `question_id`, `answer`, `type`, `similarity`, `is_equal`, `createdAt`, `updatedAt`) VALUES
(297, 'Bachtiar Putera Alamsyah', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.', 'test', '-1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(298, 'Bachtiar Putera Alamsyah', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.', 'submit', '-1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(299, 'Bachtiar Putera Alamsyah', 14, '\nSELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(300, 'Bachtiar Putera Alamsyah', 15, '\nSELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(301, 'Bachtiar Putera Alamsyah', 15, '\nSELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(302, 'Bachtiar Putera Alamsyah', 16, '\n(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(303, 'Bachtiar Putera Alamsyah', 16, '\n(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(304, 'Ineke Sulistiowati', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(305, 'Ineke Sulistiowati', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(306, 'Abiyyu Yafi', 9, 'select * from mahasiswa where nama like \'D%\'', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(307, 'Abiyyu Yafi', 9, 'select * from mahasiswa where nama like \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(308, 'Abiyyu Yafi', 13, 'select * from mahasiswa where ipk >= 3.00 and ipk <= 4.00', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(309, 'Abiyyu Yafi', 13, 'select * from mahasiswa where ipk >= 3.00 and ipk <= 4.00', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(310, 'Panji awwaludi dzikriawan', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(311, 'Panji awwaludi dzikriawan', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(312, 'Panji awwaludi dzikriawan', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(313, 'Panji awwaludi dzikriawan', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:18:59', '2021-06-17 05:18:59'),
(314, 'Panji awwaludi dzikriawan', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(315, 'Panji awwaludi dzikriawan', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(316, 'Panji awwaludi dzikriawan', 8, 'SELECT * FROM mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(317, 'Panji awwaludi dzikriawan', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(318, 'Panji awwaludi dzikriawan', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(319, 'Panji awwaludi dzikriawan', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(320, 'Panji awwaludi dzikriawan', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(321, 'Panji awwaludi dzikriawan', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(322, 'Panji awwaludi dzikriawan', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(323, 'Panji awwaludi dzikriawan', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(324, 'Panji awwaludi dzikriawan', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(325, 'Panji awwaludi dzikriawan', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(326, 'Panji awwaludi dzikriawan', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(327, 'Ineke Sulistiowati', 11, 'SELECT kelas,\nCOUNT(id_mahasiswa) as\njumlah_mhs FROM mahasiswa GROUP BY kelas', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(328, 'Ineke Sulistiowati', 12, 'SELECT kelas, COUNT(Id_mahasiswa)\njumlah_mhs FROM mahasiswa GROUP BY kelas\nHAVING jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(329, 'Ineke Sulistiowati', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(330, 'Ineke Sulistiowati', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(331, 'Ineke Sulistiowati', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(332, 'Ineke Sulistiowati', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(333, 'Herlina Prastiwi', 8, 'select * from mahasiswa', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(334, 'Herlina Prastiwi', 8, 'select * from mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(335, 'Herlina Prastiwi', 8, 'select * from mahasiswa', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(336, 'Herlina Prastiwi', 8, 'select * from mahasiswa', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(337, 'Herlina Prastiwi', 9, 'select * from mahasiswa where nama LIKE \'D%\'', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(338, 'Herlina Prastiwi', 9, 'select * from mahasiswa where nama LIKE \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(339, 'Herlina Prastiwi', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(340, 'Herlina Prastiwi', 12, 'SELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(341, 'Herlina Prastiwi', 13, 'select * from mahasiswa where ipk BETWEEN 3 AND 4', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(342, 'Herlina Prastiwi', 13, 'select * from mahasiswa where ipk BETWEEN 3 AND 4 order by ipk desc', 'test', '0.80', 0, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(343, 'Herlina Prastiwi', 13, 'select * from mahasiswa where ipk BETWEEN 3 AND 4 order by ipk desc', 'submit', '0.80', 0, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(344, 'Herlina Prastiwi', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(345, 'Herlina Prastiwi', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(346, 'Herlina Prastiwi', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(347, 'Herlina Prastiwi', 15, 'SELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(348, 'Greggy Gianini Firmansyah', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(349, 'Greggy Gianini Firmansyah', 8, 'SELECT * FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(350, 'Greggy Gianini Firmansyah', 8, 'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(351, 'Greggy Gianini Firmansyah', 8, 'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(352, 'Greggy Gianini Firmansyah', 8, 'SELECT id_mahasiswa, nama, kelas, ipk FROM mahasiswa m', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(353, 'Greggy Gianini Firmansyah', 8, 'SELECT m.id_mahasiswa, m.nama, m.kelas, m.ipk FROM mahasiswa m', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(354, 'Greggy Gianini Firmansyah', 8, 'SELECT m.id_mahasiswa, m.nama, m.kelas, m.ipk FROM mahasiswa m', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(355, 'Greggy Gianini Firmansyah', 9, 'SELECT * FROM mahasiswa WHERE nama LIKE \'D%\'', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(356, 'Greggy Gianini Firmansyah', 9, 'SELECT mhs.id_mahasiswa, mhs.nama, mhs.kelas, mhs.ipk FROM mahasiswa mhs WHERE nama LIKE \'D%\'', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(357, 'Greggy Gianini Firmansyah', 9, 'SELECT mhs.id_mahasiswa, mhs.nama, mhs.kelas, mhs.ipk FROM mahasiswa mhs WHERE nama LIKE \'D%\'', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(358, 'Greggy Gianini Firmansyah', 10, '\nSELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(359, 'Greggy Gianini Firmansyah', 10, 'SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(360, 'Greggy Gianini Firmansyah', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(361, 'Greggy Gianini Firmansyah', 11, 'SELECT kelas, COUNT(id_mahasiswa) as jumlah_mhs FROM mahasiswa GROUP BY kelas', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(362, 'Greggy Gianini Firmansyah', 12, '\nSELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(363, 'Greggy Gianini Firmansyah', 12, '\nSELECT kelas, COUNT(id_mahasiswa) jumlah_mhs FROM mahasiswa GROUP BY kelas HAVING jumlah_mhs > 2', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(364, 'Greggy Gianini Firmansyah', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(365, 'Greggy Gianini Firmansyah', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(366, 'Greggy Gianini Firmansyah', 13, 'SELECT * FROM mahasiswa WHERE ipk BETWEEN 3.00 AND 4.00', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(367, 'Greggy Gianini Firmansyah', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(368, 'Greggy Gianini Firmansyah', 14, 'SELECT * FROM mahasiswa WHERE ipk = (SELECT MIN(ipk) FROM mahasiswa)', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(369, 'Greggy Gianini Firmansyah', 15, '\nSELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(370, 'Greggy Gianini Firmansyah', 15, '\nSELECT m.nama, u.waktu_login FROM mahasiswa m JOIN user u ON m.id_mahasiswa = u.id_mahasiswa', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(371, 'Greggy Gianini Firmansyah', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'test', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00'),
(372, 'Greggy Gianini Firmansyah', 16, '(SELECT nama, kelas FROM mahasiswa) UNION ALL (SELECT username, null kelas FROM user)', 'submit', '1.00', 1, '2021-06-17 05:19:00', '2021-06-17 05:19:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `level` enum('dosen','admin') DEFAULT 'dosen',
  `no_induk` varchar(30) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `level`, `no_induk`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'dosen1', '$2a$10$l0FUJgli9.rpU1Vn0NU3Wu3giuG7..IZSUA.9Z3lXNN9xjOTFcn3.', 'dosen', '100001', 'Dosen baru', '2021-04-17 17:41:25', '2021-04-17 17:53:40'),
(3, 'dosen2', '$2a$10$qryGH0B/lAgrTEHsyoDeFOhI0LAWHHN5UCSBMIUCAW14C7hUkqH.S', 'dosen', '100002', 'Dosen 2', '2021-05-03 07:03:54', '2021-05-03 07:03:54'),
(5, 'dosencoba', '$2a$10$L1Bx0v8DvIVwzM.WuaoNo.fMDpJ3h60UJoEkeyb3rAjyjUW5CmxoG', 'dosen', '101010', 'Dosen Coba', '2021-05-30 17:54:21', '2021-05-30 17:54:21'),
(6, 'dosen3', '$2a$10$l5hMEYSdxtucn02IL6PuEuxp39jYpJ0kAzub8ALniaTQen4O/Z.pi', 'dosen', '100003', 'Dosen 3', '2021-07-24 14:41:13', '2021-07-24 14:41:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `case_studies`
--
ALTER TABLE `case_studies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `class_schedules`
--
ALTER TABLE `class_schedules`
  ADD PRIMARY KEY (`class_id`,`schedule_id`),
  ADD UNIQUE KEY `class_schedules_schedule_id_class_id_unique` (`class_id`,`schedule_id`),
  ADD KEY `schedule_id` (`schedule_id`);

--
-- Indexes for table `containers`
--
ALTER TABLE `containers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `label_id` (`label_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `case_study_id` (`case_study_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `questions_ibfk_585` (`label_id`);

--
-- Indexes for table `questions_label`
--
ALTER TABLE `questions_label`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question_containers`
--
ALTER TABLE `question_containers`
  ADD PRIMARY KEY (`question_id`,`container_id`),
  ADD UNIQUE KEY `question_containers_question_id_container_id_unique` (`question_id`,`container_id`),
  ADD KEY `container_id` (`container_id`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `container_id` (`container_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `schedule_id` (`schedule_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `schedule_id` (`schedule_id`);

--
-- Indexes for table `log_session_student`
--
ALTER TABLE `log_session_student`
  ADD PRIMARY KEY (`id`),
  ADD KEY `session_id` (`session_id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nim` (`nim`);

--
-- Indexes for table `student_classes`
--
ALTER TABLE `student_classes`
  ADD PRIMARY KEY (`student_id`,`class_id`),
  ADD UNIQUE KEY `student_classes_class_id_student_id_unique` (`student_id`,`class_id`),
  ADD KEY `class_id` (`class_id`);

--
-- Indexes for table `test_user_answers`
--
ALTER TABLE `test_user_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `case_studies`
--
ALTER TABLE `case_studies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `containers`
--
ALTER TABLE `containers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `questions_label`
--
ALTER TABLE `questions_label`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `scores`
--
ALTER TABLE `scores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `test_user_answers`
--
ALTER TABLE `test_user_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=373;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `case_studies`
--
ALTER TABLE `case_studies`
  ADD CONSTRAINT `case_studies_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `class_schedules`
--
ALTER TABLE `class_schedules`
  ADD CONSTRAINT `class_schedules_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `class_schedules_ibfk_2` FOREIGN KEY (`schedule_id`) REFERENCES `schedules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `containers`
--
ALTER TABLE `containers`
  ADD CONSTRAINT `containers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `containers_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `questions_label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_583` FOREIGN KEY (`case_study_id`) REFERENCES `case_studies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `questions_ibfk_584` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `questions_ibfk_585` FOREIGN KEY (`label_id`) REFERENCES `questions_label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `question_containers`
--
ALTER TABLE `question_containers`
  ADD CONSTRAINT `question_containers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `question_containers_ibfk_2` FOREIGN KEY (`container_id`) REFERENCES `containers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `schedules`
--
ALTER TABLE `schedules`
  ADD CONSTRAINT `schedules_ibfk_575` FOREIGN KEY (`container_id`) REFERENCES `containers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `schedules_ibfk_576` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `scores`
--
ALTER TABLE `scores`
  ADD CONSTRAINT `scores_ibfk_557` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `scores_ibfk_558` FOREIGN KEY (`schedule_id`) REFERENCES `schedules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `sessions_ibfk_555` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sessions_ibfk_556` FOREIGN KEY (`schedule_id`) REFERENCES `schedules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `log_session_student`
--
ALTER TABLE `log_session_student`
  ADD CONSTRAINT `log_session_student_ibfk_549` FOREIGN KEY (`session_id`) REFERENCES `sessions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `log_session_student_ibfk_550` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_classes`
--
ALTER TABLE `student_classes`
  ADD CONSTRAINT `student_classes_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_classes_ibfk_2` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `test_user_answers`
--
ALTER TABLE `test_user_answers`
  ADD CONSTRAINT `test_user_answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
