-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: tourisme_cameroun
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `elements`
--

DROP TABLE IF EXISTS `elements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `region_id` int DEFAULT NULL,
  `nom_element` varchar(100) NOT NULL,
  `type_element` enum('chef-lieu','plat','loisir') NOT NULL,
  `image_path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `region_id` (`region_id`),
  CONSTRAINT `elements_ibfk_1` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elements`
--

LOCK TABLES `elements` WRITE;
/*!40000 ALTER TABLE `elements` DISABLE KEYS */;
INSERT INTO `elements` VALUES (1,1,'Ngaoundéré','chef-lieu','/assets/regions/adamaoua/ngaoundere.jpg'),(2,1,'Sauce Foléré','plat','/assets/regions/adamaoua/sauce_folere.jpg'),(3,1,'Montagne','loisir','/assets/regions/adamaoua/montagne.jpg'),(4,2,'Yaoundé','chef-lieu','/assets/regions/centre/yde.jpg'),(5,2,'Okok','plat','/assets/regions/centre/okok.png'),(6,2,'Musée','loisir','/assets/regions/centre/musee.jpg'),(7,3,'Bertoua','chef-lieu','/assets/regions/est/bertoua.jpg'),(8,3,'Mbol','plat','/assets/regions/est/mbol.jpeg'),(9,3,'Réserve de faune','loisir','/assets/regions/est/reserve.jpg'),(10,4,'Maroua','chef-lieu','/assets/regions/extreme-nord/maroua.jpg'),(11,4,'Kilishi','plat','/assets/regions/extreme-nord/Kilishi.jpg'),(12,4,'Parc de Waza','loisir','/assets/regions/extreme-nord/parcwaza.jpg'),(13,5,'Douala','chef-lieu','/assets/regions/littoral/douala.jpeg'),(14,5,'Ndolé','plat','/assets/regions/littoral/ndole.jpeg'),(15,5,'Plage','loisir','/assets/regions/littoral/plage.jpeg'),(16,6,'Garoua','chef-lieu','/assets/regions/nord/garoua.jpg'),(17,6,'Fufu et Gombo','plat','/assets/regions/nord/fufu_gombo.jpg'),(18,6,'Parc de Bouba Ndjida','loisir','/assets/regions/nord/Bouba_Njida.jpg'),(19,7,'Bamenda','chef-lieu','/assets/regions/nord-ouest/bamenda.jpeg'),(20,7,'Eru','plat','/assets/regions/nord-ouest/eru.jpeg'),(21,7,'Randonnée','loisir','/assets/regions/nord-ouest/rando.jpeg'),(22,8,'Bafoussam','chef-lieu','/assets/regions/ouest/Bafoussam.jpeg'),(23,8,'Taro','plat','/assets/regions/ouest/taro.jpeg'),(24,8,'Palais Royal','loisir','/assets/regions/ouest/palais.jpg'),(25,9,'Ebolowa','chef-lieu','/assets/regions/sud/ebolowa.jpg'),(26,9,'Sangha','plat','/assets/regions/sud/sangha.jpg'),(27,9,'Chutes de la Lobé','loisir','/assets/regions/sud/lobe.jpeg'),(28,10,'Buea','chef-lieu','/assets/regions/sud-ouest/buea.jpg'),(29,10,'Sole Braisée','plat','/assets/regions/sud-ouest/soll-braise.jpeg'),(30,10,'Mont Cameroun','loisir','/assets/regions/sud-ouest/mt_cameroun.png');
/*!40000 ALTER TABLE `elements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regions`
--

DROP TABLE IF EXISTS `regions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regions`
--

LOCK TABLES `regions` WRITE;
/*!40000 ALTER TABLE `regions` DISABLE KEYS */;
INSERT INTO `regions` VALUES (1,'Adamaoua'),(2,'Centre'),(3,'Est'),(4,'Extrême-Nord'),(5,'Littoral'),(6,'Nord'),(7,'Nord-Ouest'),(8,'Ouest'),(9,'Sud'),(10,'Sud-Ouest');
/*!40000 ALTER TABLE `regions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-07 19:41:36
