-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 31 mai 2022 à 11:17
-- Version du serveur : 10.3.31-MariaDB-0+deb10u1
-- Version de PHP : 7.3.31-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `flypa1556204`
--

-- --------------------------------------------------------

--
-- Structure de la table `carte_suivi`
--

CREATE TABLE `carte_suivi` (
  `id` int(11) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `code` varchar(1000) NOT NULL,
  `suivre` varchar(100) NOT NULL,
  `album` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `carte_suivi`
--

INSERT INTO `carte_suivi` (`id`, `email`, `code`, `suivre`, `album`) VALUES
(34, 'pierredidia8@gmail.com', 'coucou1234', '0', 'blond'),
(68, 'didiap@outlook.fr', 'coucou1235-9', '0', 'Theo'),
(69, 'didiap@outlook.fr', 'coucou1236', '0', 'blond');

-- --------------------------------------------------------

--
-- Structure de la table `code_unique`
--

CREATE TABLE `code_unique` (
  `id` int(11) NOT NULL,
  `Nmb_possession` varchar(100) NOT NULL,
  `album` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `code_unique`
--

INSERT INTO `code_unique` (`id`, `Nmb_possession`, `album`) VALUES
(1, 'coucou1234', 'Theo'),
(2, 'coucou1235-8', 'Theo'),
(3, 'coucou1236', 'blond'),
(4, 'coucou1237', 'blond'),
(5, 'coucou1235-9', 'Theo');

-- --------------------------------------------------------

--
-- Structure de la table `connexionFlyp`
--

CREATE TABLE `connexionFlyp` (
  `id` int(11) NOT NULL,
  `nom_flyp` varchar(100) NOT NULL,
  `connexion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `connexionFlyp`
--

INSERT INTO `connexionFlyp` (`id`, `nom_flyp`, `connexion`) VALUES
(1, 'Louisasonn', 1298),
(2, 'FrankOcean', 232),
(3, 'TheoLanglois', 191);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `ip` varchar(20) NOT NULL,
  `token` text NOT NULL,
  `date_inscription` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `pseudo`, `email`, `password`, `ip`, `token`, `date_inscription`) VALUES
(1, 'paul', 'didiap@outlook.fr', '$2y$12$4QBLtGUtfqccoXiG7kTenOTY.W4tiCKpAk3qdyg.mT93s6yy0GKR6', '92.184.110.97', 'beffa49257cfed10868d825ca27d06ffdd5734f5f0457596ee75acb31570889cfe62a137ec1483e26884895a10d657455617a54370f23407aef4b13e6b2d3710', '2021-11-17 02:08:51'),
(2, 'paul2', 'didiapaul1@gmail.com', '$2y$12$rc8L72AlN/KPza46uIVnoOYkpgm8blL31OCtw31tVW200lMp78oo6', '92.184.110.97', '7fe8d86d60aa468a412e3d397a17a8a55a04ae348c5d507dfc61ca1238cfbcc6659a3f797448d5a932024b336d5dcc1c3d823a5b4d0eb428f75841075dd0f1a2', '2021-11-17 02:16:08'),
(3, 'Pierre', 'pierredidia8@gmail.com', '$2y$12$db/s9SfQcRFqMdaYzrw/rurPa7g9BVRn2.08MxpBWLW5CocZga6oW', '92.184.110.82', '68a77f3ed5829fc037657dd41c180d2f84b424ef8204772e99d36910c9ad73a9086e485f9b257c2e7a6e2c86c2846b974942763d9a08e25656a56ce980fcd096', '2021-12-08 14:03:04'),
(4, 'Val', 'larochevalentin@yahoo.fr', '$2y$12$4RJCUfQ9vguac8Y1obZlteSbaSQVvl/3y18TjF0siQiMcH9eI6sTK', '77.205.69.200', 'c7f261852ffcbe0d60c9a83a71c5d35cd658d5e323374b884d1c3f1661803e779850b23e9718594e2afc1c83ccece456a57b95b0a211cc2637e87df96e0220db', '2021-12-14 10:45:39'),
(5, 'chapka', 'louis.puaud10@gmail.com', '$2y$12$AdRAldHUJi7j66PlTsuu3.F10ofCG78EhfUt5LKhL5TRn/b3PAozG', '193.250.179.252', 'c3faebe28293e2e904c0de754a8fa336c504860ce8da3a6149d36e051829cddd1ed637bea5516e4489979187358fa59a066fb44bfc252857a6ad2fb7f13a8981', '2021-12-20 23:45:45'),
(6, 'Clara ', 'claratardy0206@hotmail.fr', '$2y$12$wzVgDqShfWH/BwmdljTGjeqYZ7P3Lk9uUVZ8GqwQaFhNCNj.coAAC', '77.205.116.153', 'af95db4c63b10e7d91b0e989fd474fa4275ab2ee6d7b65737fdb9aa4a14fb60c18c279c4703603e5e8f561f2200ccdba7a05ea03cf94320fd6c0e5a13eb7ff31', '2022-01-11 12:48:39'),
(7, 'Démétèr ', 'demegmd@gmail.com', '$2y$12$qhkz1aVcZ8ogRIQW7zVCA.PoF908qN2G9/G7j89jqW47a8PWrkSCS', '80.215.128.50', '271bf04e4dfd47d7d75f18c2521569734039e8f829c489fccd09c9274d75f259dc2ed2c90fb0c250503ca7a0eb5f297348144f02214333254a1fc8319cf3cd6f', '2022-04-19 15:21:51');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `carte_suivi`
--
ALTER TABLE `carte_suivi`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `code_unique`
--
ALTER TABLE `code_unique`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `connexionFlyp`
--
ALTER TABLE `connexionFlyp`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `carte_suivi`
--
ALTER TABLE `carte_suivi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT pour la table `code_unique`
--
ALTER TABLE `code_unique`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `connexionFlyp`
--
ALTER TABLE `connexionFlyp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
