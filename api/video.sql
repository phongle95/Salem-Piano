-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 29, 2018 lúc 10:38 AM
-- Phiên bản máy phục vụ: 10.1.36-MariaDB
-- Phiên bản PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `piano`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `video`
--

CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `tenVideo` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `urlVideo` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tuKhoa` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `video`
--

INSERT INTO `video` (`id`, `tenVideo`, `urlVideo`, `tuKhoa`) VALUES
(1, 'Nhạc nhật hay', 'https://www.youtube.com/embed/efzGqPugd4o', 'salem'),
(4, 'Anh đếch cần gì ngoài em', 'https://www.youtube.com/embed/KdrbBJNFwGw', 'piano'),
(5, 'take me hand', 'https://www.youtube.com/embed/-wTLvPuFK7I', 'salem'),
(6, 'Thách thức danh hài', 'https://www.youtube.com/embed/9bZnVMPl7Kc', 'thách thức danh hài'),
(7, 'Biệt tài tí hon', 'https://www.youtube.com/embed/lbl8E_MAUGk', 'salem'),
(8, '7 Minutes in Heaven ft.Jannine Weigel', 'https://www.youtube.com/embed/oGPyqu4Z_hI', 'piano');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
