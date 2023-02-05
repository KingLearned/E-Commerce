-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2023 at 05:54 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lxpurchase`
--

-- --------------------------------------------------------

--
-- Table structure for table `cameras`
--

CREATE TABLE `cameras` (
  `Id` varchar(255) NOT NULL,
  `Img` varchar(255) NOT NULL,
  `Dscp` varchar(255) NOT NULL,
  `Prc` int(255) NOT NULL,
  `Qty` int(255) NOT NULL,
  `QtySold` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cameras`
--

INSERT INTO `cameras` (`Id`, `Img`, `Dscp`, `Prc`, `Qty`, `QtySold`) VALUES
('CME1', '../products/Cameras/Canon_EOS.jpg', 'Canon EOS 250D | 18-55mm Lens', 515000, 108, 10),
('CME2', '../products/Cameras/HD_Camcoder16MP.jpg', 'HD Camcoder 16MP | 16X Zoom Model', 45000, 200, 14),
('CME3', '../products/Cameras/Nikon_D3200.jpg', 'Nikon D3200 Camera | 18-15mm Lens', 189000, 198, 13),
('CME4', '../products/Cameras/Nikon_D3300.jpg', 'Nikon D3300 | Mega Pixel Full HD', 225000, 100, 24),
('CME5', '../products/Cameras/Nikon_D7000.jpg', 'Nikon D7000 Camera 18-150mm Lens', 380000, 100, 25),
('CME6', '../products/Cameras/Nikon_D7200.jpg', 'Nikon D7200 Camera | 18-140mm Lens', 650000, 112, 4),
('CME7', '../products/Cameras/Olympus_Tough.jpg', 'Olympus Tough TG-6 | 18X Zoom', 672300, 96, 16),
('CME8', '../products/Cameras/Sony_DSC.jpg', 'Sony DSC-W830', 148250, 115, 6),
('CME9', '../products/Cameras/D3S_0732-0600.jpg', 'Nikon D3S 0732 | Mega Pixel Full HD', 249500, 104, 71);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `buyerid` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`buyerid`, `firstname`, `lastname`, `email`, `pwd`) VALUES
('ID2148', 'Uwakwe', 'C', 'kinglearned@gmail.com', '12345'),
('ID3397', 'Joel', 'Anderson', 'joel@hotmail.com', '12345'),
('ID4574', 'Kelvin', 'Clint', 'clintk@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `homeapps`
--

CREATE TABLE `homeapps` (
  `Id` varchar(255) NOT NULL,
  `Img` varchar(255) NOT NULL,
  `Dscp` varchar(255) NOT NULL,
  `Prc` int(255) NOT NULL,
  `Qty` int(255) NOT NULL,
  `QtySold` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `homeapps`
--

INSERT INTO `homeapps` (`Id`, `Img`, `Dscp`, `Prc`, `Qty`, `QtySold`) VALUES
('HME1', '../products/Home_Apps/37Liters_electric_oven.jpg', '37 Liters electric oven', 40500, 53, 17),
('HME10', '../products/Home_Apps/Skyrun_118Liters.jpg', 'Skyrun 118 Liters Double Door Fridge BCD', 145950, 38, 34),
('HME11', '../products/Home_Apps/Skyrun_200Liters.jpg', 'Skyrun 200 Liters Chest Freezer BD', 165950, 69, 76),
('HME12', '../products/Home_Apps/Skyrun_Tub.jpg', 'Skyrun Single Tub Washing Machine', 59100, 66, 4),
('HME2', '../products/Home_Apps/Amaze_Double_Burners.jpg', 'Amaze Double Burners | Auto Ignition', 14000, 95, 15),
('HME3', '../products/Home_Apps/Binatone_Iron.jpg', 'Binatone Dry Iron', 5980, 109, 1),
('HME4', '../products/Home_Apps/Binatone_Smoother.jpg', 'Binatone Smoother Gliding Iron', 8100, 110, 10),
('HME5', '../products/Home_Apps/Multi_Fruit.jpg', 'Multi Fruit Juice Mixer Extrator', 26000, 112, 1),
('HME6', '../products/Home_Apps/Nexus_SplitAC.jpg', 'Nexus 1HP Split Air Conditioner', 156978, 123, 9),
('HME7', '../products/Home_Apps/Panasonic7L_Stainless.jpg', 'Panasonic 7L Stainless Yam pounding Machine', 25500, 115, 0),
('HME8', '../products/Home_Apps/Siasho_Corsless.jpg', 'Siasho Corsless Electric Kettle', 5200, 65, 0),
('HME9', '../products/Home_Apps/Silver_Crest.jpg', 'Silver Crest Bread Toaster', 9850, 111, 0),
('HOM525', '../products/Home_Apps/Fan-KOI.jpg', 'KOI Table Fan | Auto Ignition', 15500, 100, 0);

-- --------------------------------------------------------

--
-- Table structure for table `laptops`
--

CREATE TABLE `laptops` (
  `Id` varchar(255) NOT NULL,
  `Img` varchar(255) NOT NULL,
  `Dscp` varchar(255) NOT NULL,
  `Prc` int(255) NOT NULL,
  `Qty` int(255) NOT NULL,
  `QtySold` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `laptops`
--

INSERT INTO `laptops` (`Id`, `Img`, `Dscp`, `Prc`, `Qty`, `QtySold`) VALUES
('LAP18', '../products/Laptops/HP_SDDS_266.jpg', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 486500, 99, 151),
('LP1', '../products/Laptops/HP_15_TOUCHSCREEN.jpg', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 35000, 99, 41),
('LP10', '../products/Laptops/Apple_SST_E6.jpg', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 2550000, 90, 144),
('LP11', '../products/Laptops/Dell_E67_SST.jpg', 'Dell E67 SST  | Smooth Frame Works | Dual Core | 4GB RAM & 560GB HDD', 568000, 95, 19),
('LP2', '../products/Laptops/DELL_Latitude_5420.jpg', 'DELL Latitude 5420 14 | Core i5 | 16GB RAM & 512GB SSD', 635000, 95, 43),
('LP3', '../products/Laptops/HP_CHROMEBOOK11_CELERON.jpg', 'Hp CHROMEBOOK 11 CELERON | 4GB RAM & 16GB SSD | 32GB FLASH', 95000, 87, 24),
('LP4', '../products/Laptops/HP_Stream11_Intel.jpg', 'HP Stream 11 Intel | 4GB RAM & 64GB SSD', 99999, 99, 12),
('LP5', '../products/Laptops/Lenovo_AMD_RYZEN.jpg', 'Lenovo AMD RYZEN | 1TB HDD', 218500, 100, 15),
('LP6', '../products/Laptops/Alien_Ware_CBS.jpg', 'Alien Ware_CBS | Core i7 | 16GB RAM & 3TB HDD | Colored Keyboard LED', 1250000, 100, 31),
('LP7', '../products/Laptops/HP_Notebook15.jpg', 'HP Notebook 15 | AMD RYZEN 3 | 16GB RAM & 1TB HDD', 260000, 1012, 0),
('LP8', '../products/Laptops/Lenovo_Thinkpad_E14.jpg', 'Lenovo Thinkpad E14 Intel | Core i5 | 8GB RAM & 560GB HDD', 280500, 200, 21),
('LP9', '../products/Laptops/HP_15_Intel_Celeron.jpg', 'HP 15 Intel Celeron | Core i5 | 8GB RAM & 560GB HDD', 189950, 110, 5);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderid` varchar(255) NOT NULL,
  `customerid` varchar(255) NOT NULL,
  `item` varchar(255) NOT NULL,
  `qty` int(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderid`, `customerid`, `item`, `qty`, `date`) VALUES
('ORD4583037538', 'ID4574', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 10, '1672808701157'),
('ORD4583037896', 'ID2148', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 5, '1672808831907'),
('ORD4583038908', 'ID2148', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 2, '1672809201161'),
('ORD4583048860', 'ID2148', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 8, '1672812833633'),
('ORD4583048861', 'ID2148', 'Dell E67 SST  | Smooth Frame Works | Dual Core | 4GB RAM & 560GB HDD', 6, '1672812833692'),
('ORD4583058752', 'ID4574', 'Nikon D3S 0732 | Mega Pixel Full HD', 25, '1672816444372'),
('ORD4583058996', 'ID4574', 'Sony 50 inches X80H Series 4K Ultra HD', 15, '1672816533349'),
('ORD4583059961', 'ID3397', 'Tecno Camon C9 | 4GB & 64GB  | 6000mAH Battery', 75, '1672816885596'),
('ORD4583060511', 'ID3397', 'Sony 50 inches X80H Series 4K Ultra HD', 1, '1672817086295'),
('ORD4583060761', 'ID3397', 'Sony 50 inches X80H Series 4K Ultra HD', 1, '1672817177740'),
('ORD4583060897', 'ID3397', 'Sony 50 inches X80H Series 4K Ultra HD', 1, '1672817227200'),
('ORD4583061391', 'ID3397', 'Sony 50 inches X80H Series 4K Ultra HD', 1, '1672817407664'),
('ORD4583061623', 'ID3397', 'Samsung 55 inches UHD Frameless', 10, '1672817492317'),
('ORD4583062270', 'ID3397', 'Samsung 55 inches UHD Frameless', 10, '1672817728421'),
('ORD4583062477', 'ID3397', 'Samsung 55 inches UHD Frameless', 1, '1672817804106'),
('ORD4583062602', 'ID3397', 'Samsung 55 inches UHD Frameless', 4, '1672817849710'),
('ORD4583062776', 'ID3397', 'Samsung 55 inches UHD Frameless', 3, '1672817913195'),
('ORD4583063277', 'ID3397', 'Sony 50 inches X80H Series 4K Ultra HD', 1, '1672818095929'),
('ORD4583063400', 'ID3397', 'Sony 50 inches X80H Series 4K Ultra HD', 4, '1672818141035'),
('ORD4583063401', 'ID3397', 'Sony 50 inches X80H Series 4K Ultra HD', 4, '1672818141221'),
('ORD4583063756', 'ID2148', 'Sony 50 inches X80H Series 4K Ultra HD', 1, '1672818270693'),
('ORD4583063944', 'ID2148', 'Sony 50 inches X80H Series 4K Ultra HD', 4, '1672818339519'),
('ORD4583064075', 'ID2148', 'Sony 50 inches X80H Series 4K Ultra HD', 3, '1672818387392'),
('ORD4583166048', 'ID4574', 'Hp CHROMEBOOK 11 CELERON | 4GB RAM & 16GB SSD | 32GB FLASH', 11, '1672855607534'),
('ORD4583166049', 'ID4574', 'Hp CHROMEBOOK 11 CELERON | 4GB RAM & 16GB SSD | 32GB FLASH', 11, '1672855607762'),
('ORD4583173931', 'ID2148', 'Nikon D3S 0732 | Mega Pixel Full HD', 4, '1672858484554'),
('ORD4583174300', 'ID2148', 'Nikon D3S 0732 | Mega Pixel Full HD', 1, '1672858619415'),
('ORD4583178480', 'ID2148', 'Nikon D3S 0732 | Mega Pixel Full HD', 3, '1672860145158'),
('ORD4583178482', 'ID2148', 'Nikon D3S 0732 | Mega Pixel Full HD', 3, '1672860145932'),
('ORD4583178728', 'ID2148', 'Nikon D3S 0732 | Mega Pixel Full HD', 2, '1672860235598'),
('ORD4583179115', 'ID2148', 'Nikon D3S 0732 | Mega Pixel Full HD', 2, '1672860377644'),
('ORD4583179117', 'ID2148', 'Nikon D3S 0732 | Mega Pixel Full HD', 2, '1672860377920'),
('ORD4583179483', 'ID2148', 'Nikon D3S 0732 | Mega Pixel Full HD', 2, '1672860511229'),
('ORD4583181042', 'ID2148', 'Nikon D3S 0732 | Mega Pixel Full HD', 2, '1672861080061'),
('ORD4583320116', 'ID2148', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 4, '1672911842121'),
('ORD4583320117', 'ID2148', 'Nikon D3200 Camera | 18-15mm Lens', 3, '1672911842140'),
('ORD4583320118', 'ID2148', 'Oppo A31 | 6GB & 128GB | 5500mAH Battery', 4, '1672911842171'),
('ORD4585956912', 'ID2148', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 12, '1673874272762'),
('ORD4585957048', 'ID2148', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 5, '1673874322332'),
('ORD4585957379', 'ID2148', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 5, '1673874443165'),
('ORD4585958407', 'ID2148', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 1, '1673874818460'),
('ORD4585960302', 'ID2148', 'Hisense 43 inches Smart TV', 9, '1673875510186'),
('ORD4585961589', 'ID2148', '37 Liters electric oven', 5, '1673875980193'),
('ORD4585961590', 'ID2148', '37 Liters electric oven', 5, '1673875980668'),
('ORD4586084363', 'ID3397', 'Hisense 50 inches Smart TV', 8, '1673920792198'),
('ORD4586084364', 'ID3397', 'Skyrun 118 Liters Double Door Fridge BCD', 11, '1673920792234'),
('ORD4586125050', 'ID3397', 'Hisense 50 inches Smart TV', 8, '1673935643121'),
('ORD4586125051', 'ID3397', 'Skyrun 118 Liters Double Door Fridge BCD', 11, '1673935643133'),
('ORD4586125921', 'ID3397', 'FreeYond F9 Smartphone | 2GB & 64GB  4G Network | 5000mAh Battery', 1, '1673935960909'),
('ORD4586125922', 'ID3397', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 1, '1673935960917'),
('ORD4586129769', 'ID3397', 'Nikon D3200 Camera | 18-15mm Lens', 1, '1673937365341'),
('ORD4586129770', 'ID3397', 'i13 Pro Max | 8GB & 512GB | 6800mAH Battery', 1, '1673937365359'),
('ORD4586130303', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1673937560402'),
('ORD4586130304', 'ID3397', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 1, '1673937560408'),
('ORD4586130305', 'ID3397', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 1, '1673937560418'),
('ORD4586131111', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1673937855370'),
('ORD4586131112', 'ID3397', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 1, '1673937855384'),
('ORD4586132602', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1673938399511'),
('ORD4586132603', 'ID3397', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 1, '1673938399524'),
('ORD4586132604', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1673938399535'),
('ORD4586132605', 'ID3397', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 1, '1673938399547'),
('ORD4586133587', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1673938758984'),
('ORD4586133588', 'ID3397', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 1, '1673938759007'),
('ORD4586133993', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1673938907262'),
('ORD4586133994', 'ID3397', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 1, '1673938907276'),
('ORD4586134060', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1673938931776'),
('ORD4586134061', 'ID3397', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 1, '1673938931794'),
('ORD4586134517', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1673939098672'),
('ORD4586134518', 'ID3397', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 1, '1673939098680'),
('ORD4586134701', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 16, '1673939165704'),
('ORD4586134702', 'ID3397', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 5, '1673939165724'),
('ORD4586159393', 'ID3397', 'Nikon D3200 Camera | 18-15mm Lens', 4, '1673948178352'),
('ORD4586159394', 'ID3397', 'Canon EOS 250D | 18-55mm Lens', 8, '1673948178362'),
('ORD4586160414', 'ID3397', '37 Liters electric oven', 5, '1673948550765'),
('ORD4586161023', 'ID3397', '37 Liters electric oven', 4, '1673948773067'),
('ORD4586162434', 'ID3397', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 4, '1673949288237'),
('ORD4586162435', 'ID3397', 'DELL Latitude 5420 14 | Core i5 | 16GB RAM & 512GB SSD', 8, '1673949288251'),
('ORD4586162436', 'ID3397', 'Hisense 58 inches Smart 4k UHD Frames', 10, '1673949288266'),
('ORD4586162437', 'ID3397', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 6, '1673949288281'),
('ORD4586162438', 'ID3397', 'Skyrun 200 Liters Chest Freezer BD', 4, '1673949288294'),
('ORD4586162439', 'ID3397', '37 Liters electric oven', 2, '1673949288301'),
('ORD4586162440', 'ID3397', 'Amaze Double Burners | Auto Ignition', 3, '1673949288310'),
('ORD4586162581', 'ID3397', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 1, '1673949341735'),
('ORD4586162582', 'ID3397', 'DELL Latitude 5420 14 | Core i5 | 16GB RAM & 512GB SSD', 1, '1673949341744'),
('ORD4586163901', 'ID3397', 'Tecno Camon C9 | 4GB & 64GB  | 6000mAH Battery', 15, '1673949823597'),
('ORD4586176015', 'ID3397', 'Infinity 55 inches Smart UHD 4K', 1, '1673954245455'),
('ORD4586176016', 'ID3397', 'Hisense 43 inches Smart TV', 3, '1673954245463'),
('ORD4586176017', 'ID3397', 'Skyrun Single Tub Washing Machine', 4, '1673954245477'),
('ORD4586180732', 'ID3397', 'Hisense 58 inches Smart 4k UHD Frames', 1, '1673955967102'),
('ORD4586180733', 'ID3397', 'Binatone Smoother Gliding Iron', 1, '1673955967120'),
('ORD4586182994', 'ID3397', 'Hisense 58 inches Smart 4k UHD Frames', 1, '1673956792770'),
('ORD4586182995', 'ID3397', 'Infinity 55 inches Smart UHD 4K', 1, '1673956792782'),
('ORD4586182996', 'ID3397', 'LG 50 inches UDH 4K Smart', 1, '1673956792791'),
('ORD4586186325', 'ID3397', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 1, '1673958008275'),
('ORD4586186326', 'ID3397', 'Samsung Galaxy A13 | 4GB & 64GB | 5000mAH Battery', 1, '1673958008287'),
('ORD4586186327', 'ID3397', 'Infinix Smart 6 | 2GB & 32GB | 5000mAH Battery', 1, '1673958008304'),
('ORD4586186599', 'ID3397', 'Hisense 58 inches Smart 4k UHD Frames', 3, '1673958108601'),
('ORD4586186600', 'ID3397', 'Infinity 55 inches Smart UHD 4K', 5, '1673958108622'),
('ORD4586186601', 'ID3397', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 8, '1673958108628'),
('ORD4586186612', 'ID3397', 'Hisense 58 inches Smart 4k UHD Frames', 3, '1673958113103'),
('ORD4586186613', 'ID3397', 'Infinity 55 inches Smart UHD 4K', 5, '1673958113167'),
('ORD4586186614', 'ID3397', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 8, '1673958113175'),
('ORD4586186635', 'ID3397', 'Hisense 58 inches Smart 4k UHD Frames', 3, '1673958121720'),
('ORD4586186636', 'ID3397', 'Infinity 55 inches Smart UHD 4K', 5, '1673958121731'),
('ORD4586186637', 'ID3397', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 8, '1673958121741'),
('ORD4586186641', 'ID3397', 'Hisense 58 inches Smart 4k UHD Frames', 3, '1673958123857'),
('ORD4586186642', 'ID3397', 'Infinity 55 inches Smart UHD 4K', 5, '1673958123910'),
('ORD4586186643', 'ID3397', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 8, '1673958123918'),
('ORD4586187049', 'ID3397', 'FreeYond F9 Smartphone | 2GB & 64GB  4G Network | 5000mAh Battery', 5, '1673958272622'),
('ORD4586187050', 'ID3397', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 1, '1673958272633'),
('ORD4586187051', 'ID3397', 'i13 Pro Max | 8GB & 512GB | 6800mAH Battery', 6, '1673958272643'),
('ORD4586187052', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1673958272648'),
('ORD4586187053', 'ID3397', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 3, '1673958272660'),
('ORD4586187059', 'ID3397', 'FreeYond F9 Smartphone | 2GB & 64GB  4G Network | 5000mAh Battery', 5, '1673958276367'),
('ORD4586187060', 'ID3397', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 1, '1673958276384'),
('ORD4586187061', 'ID3397', 'i13 Pro Max | 8GB & 512GB | 6800mAH Battery', 6, '1673958276450'),
('ORD4586187062', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1673958276457'),
('ORD4586187063', 'ID3397', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 3, '1673958276543'),
('ORD4586187093', 'ID3397', 'FreeYond F9 Smartphone | 2GB & 64GB  4G Network | 5000mAh Battery', 5, '1673958288660'),
('ORD4586187094', 'ID3397', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 1, '1673958288668'),
('ORD4586187095', 'ID3397', 'i13 Pro Max | 8GB & 512GB | 6800mAH Battery', 6, '1673958288677'),
('ORD4586187096', 'ID3397', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1673958288682'),
('ORD4586187097', 'ID3397', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 3, '1673958288689'),
('ORD4586187908', 'ID3397', 'Canon EOS 250D | 18-55mm Lens', 2, '1673958586348'),
('ORD4586187909', 'ID3397', 'Sony DSC-W830', 6, '1673958586359'),
('ORD4586187910', 'ID3397', 'LG 50 inches UDH 4K Smart', 5, '1673958586374'),
('ORD4586187911', 'ID3397', 'Hisense 43 inches Smart TV', 7, '1673958586386'),
('ORD4586188570', 'ID3397', 'Samsung Galaxy A13 | 4GB & 64GB | 5000mAH Battery', 1, '1673958827879'),
('ORD4586188571', 'ID3397', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 1, '1673958827965'),
('ORD4586188572', 'ID3397', 'Nikon D7200 Camera | 18-140mm Lens', 1, '1673958827970'),
('ORD4586188683', 'ID3397', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 1, '1673958869457'),
('ORD4586188684', 'ID3397', 'UMIDIGI A13S | 4GB & 64GB | 5150mAH Battery', 1, '1673958869726'),
('ORD4586188752', 'ID3397', 'Binatone Smoother Gliding Iron', 1, '1673958894397'),
('ORD4586188753', 'ID3397', 'Multi Fruit Juice Mixer Extrator', 1, '1673958894439'),
('ORD4586188754', 'ID3397', 'Binatone Dry Iron', 1, '1673958894471'),
('ORD4586194085', 'ID2148', 'Samsung Galaxy A13 | 4GB & 64GB | 5000mAH Battery', 1, '1673960841034'),
('ORD4586359658', 'ID2148', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 2, '1674021275059'),
('ORD4586359659', 'ID2148', 'Binatone Smoother Gliding Iron', 3, '1674021275082'),
('ORD4586359660', 'ID2148', 'Olympus Tough TG-6 | 18X Zoom', 4, '1674021275087'),
('ORD4586359661', 'ID2148', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 7, '1674021275095'),
('ORD4586620481', 'ID2148', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 2, '1674116475282'),
('ORD4586620482', 'ID2148', 'Samsung 55 inches UHD Frameless', 2, '1674116475320'),
('ORD4586620483', 'ID2148', 'Polystar 40 inches Curved TV', 4, '1674116475329'),
('ORD4586620484', 'ID2148', 'Nikon D3200 Camera | 18-15mm Lens', 2, '1674116475336'),
('ORD4586620485', 'ID2148', 'Nikon D7200 Camera | 18-140mm Lens', 3, '1674116475349'),
('ORD4586621250', 'ID2148', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 5, '1674116756028'),
('ORD4586621251', 'ID2148', 'Lenovo AMD RYZEN | 1TB HDD', 8, '1674116756037'),
('ORD4586621252', 'ID2148', 'HP Stream 11 Intel | 4GB RAM & 64GB SSD', 12, '1674116756121'),
('ORD4586661439', 'ID2148', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 7, '1674131425208'),
('ORD4586661440', 'ID2148', 'Amaze Double Burners | Auto Ignition', 5, '1674131425220'),
('ORD4586664449', 'ID4574', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 3, '1674132523661'),
('ORD4586664450', 'ID4574', 'Binatone Smoother Gliding Iron', 5, '1674132523673'),
('ORD4590415294', 'ID2148', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 1, '1675501582313'),
('ORD4590415295', 'ID2148', 'HP SDDS 266 || Core i7 || 16GB RAM & 500GB HDD', 1, '1675501582322'),
('ORD4590415296', 'ID2148', 'HP 15 TOUCHSCREEN 11TH GEN | INTEL CORE I3 | 16GB RAM & 256GB', 1, '1675501582338'),
('ORD4590415297', 'ID2148', 'Hisense 50 inches Smart TV', 1, '1675501582353'),
('ORD4590415298', 'ID2148', 'Skyrun 200 Liters Chest Freezer BD', 1, '1675501582363'),
('ORD4590415299', 'ID2148', 'Skyrun 118 Liters Double Door Fridge BCD', 1, '1675501582378'),
('ORD4590415300', 'ID2148', '37 Liters electric oven', 1, '1675501582387'),
('ORD4590415301', 'ID2148', 'Samsung Galaxy A13 | 4GB & 64GB | 5000mAH Battery', 1, '1675501582393'),
('ORD4590432905', 'ID2148', 'Hp CHROMEBOOK 11 CELERON | 4GB RAM & 16GB SSD | 32GB FLASH', 13, '1675508010278'),
('ORD4590432906', 'ID2148', 'Lenovo AMD RYZEN | 1TB HDD', 7, '1675508010298'),
('ORD4590433244', 'ID2148', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 2, '1675508133889'),
('ORD4590433245', 'ID2148', 'DELL Latitude 5420 14 | Core i5 | 16GB RAM & 512GB SSD', 3, '1675508133907'),
('ORD4590433246', 'ID2148', 'HP 15 Intel Celeron | Core i5 | 8GB RAM & 560GB HDD', 5, '1675508133916'),
('ORD4590433247', 'ID2148', 'Amaze Double Burners | Auto Ignition', 7, '1675508133936'),
('ORD4590433248', 'ID2148', 'Nexus 1HP Split Air Conditioner', 9, '1675508133944'),
('ORD4590433249', 'ID2148', 'Skyrun 118 Liters Double Door Fridge BCD', 11, '1675508133957'),
('ORD4590471853', 'ID2148', 'Apple SST E6  | In Built Network Connections | Core i7 | 16GB RAM & 1TB SSD', 3, '1675522226032'),
('ORD4590471854', 'ID2148', 'Dell E67 SST  | Smooth Frame Works | Dual Core | 4GB RAM & 560GB HDD', 5, '1675522226044'),
('ORD4590471855', 'ID2148', 'DELL Latitude 5420 14 | Core i5 | 16GB RAM & 512GB SSD', 7, '1675522226053');

-- --------------------------------------------------------

--
-- Table structure for table `phones`
--

CREATE TABLE `phones` (
  `Id` varchar(255) NOT NULL,
  `Img` varchar(255) NOT NULL,
  `Dscp` varchar(255) NOT NULL,
  `Prc` int(255) NOT NULL,
  `Qty` int(255) NOT NULL,
  `QtySold` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `phones`
--

INSERT INTO `phones` (`Id`, `Img`, `Dscp`, `Prc`, `Qty`, `QtySold`) VALUES
('PH1', '../products/Phones/FreeYond_F9.jpg', 'FreeYond F9 Smartphone | 2GB & 64GB  4G Network | 5000mAh Battery', 58000, 484, 551),
('PH10', '../products/Phones/Samsung_GalaxyA13.jpg', 'Samsung Galaxy A13 | 4GB & 64GB | 5000mAH Battery', 107000, 96, 30),
('PH11', '../products/Phones/Tecno_Spark8P.jpg', 'Tecno Spark 8P | 4GB & 64GB | 5000mAH Battery', 82500, 82, 51),
('PH12', '../products/Phones/UMIDIGI_A13S.jpg', 'UMIDIGI A13S | 4GB & 64GB | 5150mAH Battery', 73413, 49, 27),
('PH2', '../products/Phones/Huawi_Y6.jpg', 'Huawi Y6 2019 | 6GB & 128GB | 5000mAh Battery', 97199, 50, 15),
('PH3', '../products/Phones/i13_Pro_Max.jpg', 'i13 Pro Max | 8GB & 512GB | 6800mAH Battery', 986300, 91, 19),
('PH4', '../products/Phones/Infinix_Smart_6.jpg', 'Infinix Smart 6 | 2GB & 32GB | 5000mAH Battery', 60900, 39, 13),
('PH5', '../products/Phones/itel_P38.jpg', 'itel P38 | 2GB & 32GB | 5000mAH Battery', 49850, 15, 0),
('PH6', '../products/Phones/Oppo_A3S.jpg', 'Oppo A3S | 4GB & 64GB | 4230mAH Battery', 60854, 11, 0),
('PH7', '../products/Phones/Oppo_A31.jpg', 'Oppo A31 | 6GB & 128GB | 5500mAH Battery', 121900, 11, 4),
('PH8', '../products/Phones/Oppo_A83.jpg', 'Oppo A83 | 4GB & 64GB & 4G LTE | 5200mAH Battery', 56900, 45, 10),
('PH9', '../products/Phones/S22Ultra_68in.jpg', 'S22Ultra 68in | 4GB & 64GB | 5000mAH Battery', 95453, 65, 22),
('PHO65', '../products/Phones/Tecno-Camon-C9.jpg', 'Tecno Camon C9 | 4GB & 64GB  | 6000mAH Battery', 65400, 10, 165);

-- --------------------------------------------------------

--
-- Table structure for table `television`
--

CREATE TABLE `television` (
  `Id` varchar(255) NOT NULL,
  `Img` varchar(255) NOT NULL,
  `Dscp` varchar(255) NOT NULL,
  `Prc` int(255) NOT NULL,
  `Qty` int(255) NOT NULL,
  `QtySold` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `television`
--

INSERT INTO `television` (`Id`, `Img`, `Dscp`, `Prc`, `Qty`, `QtySold`) VALUES
('TV1', '../products/Television/Hisense_43_Inches.jpg', 'Hisense 43 inches Smart TV', 179900, 100, 19),
('TV10', '../products/Television/Sony_55_inches.jpg', 'Sony 55 inches Ultra HD TV', 355313, 0, 15),
('TV2', '../products/Television/Hisense_50_inches.jpg', 'Hisense 50 inches Smart TV', 200000, 95, 25),
('TV3', '../products/Television/Hisense_58_inches_Smart_4k.jpg', 'Hisense 58 inches Smart 4k UHD Frames', 290000, 198, 24),
('TV4', '../products/Television/Hisense_55_inches_Smart_4k.jpg', 'Hisense 55 inches Smart 4k UHD Frames', 268800, 22, 0),
('TV5', '../products/Television/Infinity_55_inches.jpg', 'Infinity 55 inches Smart UHD 4K', 208900, 96, 22),
('TV6', '../products/Television/LG_50_inches_UDH.jpg', 'LG 50 inches UDH 4K Smart', 320000, 44, 6),
('TV7', '../products/Television/Polystar_40_inches.jpg', 'Polystar 40 inches Curved TV', 129999, 14, 4),
('TV8', '../products/Television/Samsung_55_inches.jpg', 'Samsung 55 inches UHD Frameless', 415360, 98, 27),
('TV9', '../products/Television/Sony_50_inches_X80H.jpg', 'Sony 50 inches X80H Series 4K Ultra HD', 360500, 102, 53);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cameras`
--
ALTER TABLE `cameras`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`buyerid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `homeapps`
--
ALTER TABLE `homeapps`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `laptops`
--
ALTER TABLE `laptops`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderid`),
  ADD KEY `customerid` (`customerid`);

--
-- Indexes for table `phones`
--
ALTER TABLE `phones`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `television`
--
ALTER TABLE `television`
  ADD PRIMARY KEY (`Id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customerid`) REFERENCES `customers` (`buyerid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
