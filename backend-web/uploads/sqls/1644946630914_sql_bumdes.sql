-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 24, 2021 at 04:05 PM
-- Server version: 10.3.29-MariaDB-0ubuntu0.20.04.1
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
-- Database: `bumdes`
--

--
-- Dumping data for table `r_satuan`
--

INSERT INTO `r_satuan` (`satuan_id`, `satuan`, `keterangan`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`) VALUES
(1, 'buah', 'hehe123', '2021-07-19 02:41:05', NULL, '2021-07-19 02:41:17', NULL, '2021-07-19 02:41:17', NULL),
(2, 'ehge', 'asd', '2021-07-21 08:06:36', NULL, '2021-07-21 08:06:36', NULL, NULL, NULL);

--
-- Dumping data for table `t_anggaran`
--

INSERT INTO `t_anggaran` (`anggaran_id`, `rekanan_id`, `tahun`, `tanggal`, `deskripsi`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`) VALUES
(1, NULL, 2020, '2021-07-17', '12344112', '2021-07-16 16:08:43', NULL, '2021-07-18 06:32:24', NULL, '2021-07-18 06:32:24', NULL),
(2, NULL, 2020, '2021-07-17', 'asdhjgasjdfhgfhjksgakfdgasjfsgdkfgdsifgdsakfgkfgdkfgksdgfkgaskgaskfgkfasgkfgakfgaskgfaskgfksagdiagfksdagfkasgkasgfjkgfkuwtgekgabhjkFvweihfgkbasd', '2021-07-16 16:43:30', NULL, '2021-07-16 16:43:44', NULL, '2021-07-16 16:43:44', NULL),
(3, NULL, 2020, '2021-07-18', 'test 123', '2021-07-18 07:13:02', NULL, '2021-07-18 07:13:02', NULL, NULL, NULL),
(4, 1, 2020, '2021-07-21', 'asdfas', '2021-07-21 07:49:03', NULL, '2021-07-21 07:49:03', NULL, NULL, NULL);

--
-- Dumping data for table `t_anggaran_detail`
--

INSERT INTO `t_anggaran_detail` (`anggaran_detail_id`, `anggaran_id`, `rekening_id`, `nama`, `harga`, `satuan_id`, `jumlah`, `total`, `keterangan`, `parent_id`, `is_valid`, `validated_at`, `validated_by`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`) VALUES
(1, 3, 2, 'asasfas', 11111, NULL, 1, 11111, 'sadasfasfd', NULL, 1, NULL, NULL, '2021-07-18 23:09:19', 2, '2021-07-22 00:33:07', NULL, NULL, NULL),
(2, 3, 3, 'aaaaa', 1111, NULL, 3, 3333, 'qadsdaa', NULL, 0, NULL, NULL, '2021-07-21 21:40:27', 1, '2021-07-22 00:10:35', 1, NULL, NULL),
(3, 3, 6, 'asdasf', 100, 2, 2, 200, 'asdafs', 1, 1, NULL, NULL, '2021-07-21 23:41:51', 1, '2021-07-22 00:25:57', 1, NULL, NULL),
(4, 3, 3, 'dasfasda', 11, NULL, 2, 22, 'aa', NULL, 0, NULL, NULL, '2021-07-22 00:16:55', 1, '2021-07-22 00:16:55', NULL, NULL, NULL),
(5, 3, 7, 'dasdafa', 11, NULL, 2, 22, 'dasfa', NULL, 1, NULL, NULL, '2021-07-22 00:26:40', 1, '2021-07-22 00:26:40', NULL, NULL, NULL),
(6, 3, 6, 'asdafafs', 11, NULL, 1, 11, 'asdafasf', NULL, 0, NULL, NULL, '2021-07-22 00:27:07', 1, '2021-07-22 00:27:33', 1, NULL, NULL),
(7, 3, 7, 'asdasd', 11, NULL, 1, 11, 'das', NULL, 1, NULL, NULL, '2021-07-22 00:29:26', 1, '2021-07-22 00:29:26', NULL, NULL, NULL);

--
-- Dumping data for table `t_expend`
--

INSERT INTO `t_expend` (`expend_id`, `rekanan_id`, `rekening_id`, `tanggal`, `deskripsi`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`) VALUES
(1, NULL, 6, '2021-07-18', 'test 12345', '2021-07-18 03:07:11', 2, '2021-07-18 03:07:11', NULL, NULL, NULL),
(2, NULL, 6, '2021-07-18', 'sdasd', '2021-07-18 03:08:13', 2, '2021-07-18 03:08:13', NULL, NULL, NULL),
(3, 1, 6, '2021-07-18', 'test 123', '2021-07-18 06:05:39', 3, '2021-07-18 06:05:39', NULL, NULL, NULL);

--
-- Dumping data for table `t_expend_detail`
--

INSERT INTO `t_expend_detail` (`expend_detail_id`, `expend_id`, `waktu`, `keterangan`, `nominal`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`) VALUES
(1, 1, '10:27:00', 'asdasfdsfa', 111112, '2021-07-18 03:27:24', 2, '2021-07-18 03:28:01', 2, '2021-07-18 03:28:01', NULL),
(2, 1, '10:28:00', '122123w21', 11111, '2021-07-18 03:28:21', 2, '2021-07-18 03:28:21', NULL, NULL, NULL);

--
-- Dumping data for table `t_income`
--

INSERT INTO `t_income` (`income_id`, `rekanan_id`, `rekening_id`, `tanggal`, `deskripsi`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`) VALUES
(1, NULL, 2, '2021-07-18', 'test 123', '2021-07-18 02:26:44', 2, '2021-07-18 02:26:44', NULL, NULL, NULL),
(2, 1, 4, '2021-07-18', 'test 123', '2021-07-18 06:04:47', 3, '2021-07-18 06:04:47', NULL, NULL, NULL);

--
-- Dumping data for table `t_income_detail`
--

INSERT INTO `t_income_detail` (`income_detail_id`, `income_id`, `waktu`, `keterangan`, `nominal`, `created_at`, `created_by`, `updated_at`, `updated_by`, `deleted_at`, `deleted_by`) VALUES
(1, 1, '09:32:00', 'gyfds', 100000, '2021-07-18 02:33:23', 2, '2021-07-18 02:33:23', NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
