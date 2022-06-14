-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 10 juin 2022 à 15:17
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
(34, 'pierredidia8@gmail.com', 'coucou1234', '1', 'blond'),
(68, 'didiap@outlook.fr', 'coucou1235-9', '1', 'Theo'),
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
(5, 'coucou1235-9', 'Theo'),
(6, 'dev1pass1234', 'blond'),
(7, 'dev2pass1234', 'blond'),
(8, 'dev3pass1234', 'blond'),
(9, 'dev4pass1234', 'blond'),
(10, 'dev5pass1234', 'blond');

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
(2, 'FrankOcean', 240),
(3, 'TheoLanglois', 208);

-- --------------------------------------------------------

--
-- Structure de la table `contenu`
--

CREATE TABLE `contenu` (
  `id` int(11) NOT NULL,
  `start` date NOT NULL COMMENT 'the start date for the project',
  `flyp` varchar(100) NOT NULL COMMENT 'the name of the project',
  `artist` varchar(100) NOT NULL COMMENT 'Name of artist(s)',
  `summary` text NOT NULL COMMENT 'A little abstract of the project',
  `audio` int(11) NOT NULL COMMENT 'Number of audio on the flyp',
  `video` int(11) NOT NULL COMMENT 'Number of video on the flyp',
  `nom_image` varchar(100) NOT NULL,
  `taille` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `bin` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `contenu`
--

INSERT INTO `contenu` (`id`, `start`, `flyp`, `artist`, `summary`, `audio`, `video`, `nom_image`, `taille`, `type`, `bin`) VALUES
(1, '2022-04-26', 'Ethylique', 'Théo Langlois', 'Il y’a deux ans, j’écrivais pour la première fois sur Soraya. Déterminé, inspiré, je savais pourtant mal où tout cela me conduirait. Un an plus tard, le livre était bouclé. Il fallait alors réfléchir au marketing d’auteur, à une couverture, à une suite. Le tour était joué. Je passais à côté de l’essentiel.\r\n \r\nObnubilé par le fait d’achever mon roman, j’étais en train de commettre l’erreur que trop d’auteurs font : je cédais aux facilités de l’autoédition, à l’enjeu du 0 risque, je voulais rendre fier ceux qui, quoi que je ponde, me suivront. Cet entourage peut aussi faire preuve de transparence, et donc grandement me servir : j’entrepris une pause. Rendez-vous en janvier 2022. Cette phase de maturation me fit tirer deux constats :\r\n\r\nPremièrement, je refuse d’être un auteur passif, qui tente de rendre son propos crédible avec trois chiffres et une étude barbante. Il fallait que j’aille au concret. Par conséquent, je devais reprendre le projet à partir de zéro. \r\n\r\nDeux enjeux se dessinaient : d’abord, comment faire pour retranscrire dans mes écrits le fruit de mes enquêtes ? Ensuite, étant donné mon âge, pourquoi ne pas jouer la carte du numérique à 100 % ?\r\n\r\nNouvellesEnquêtes est ainsi né. Un condensé d’information, de littérature, de technologie et de nouveauté. \r\n', 0, 0, '', 0, '', ''),
(2, '2016-08-20', 'blond', 'Frank Ocean', 'Blonde (parfois nommé Blond) est le deuxième album studio de l\'auteur-compositeur-interprète américain de R&B Frank Ocean, sorti le 20 août 2016 par le label Boys Don\'t Cry.', 17, 3, '', 0, '', '');

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
(7, 'Démétèr ', 'demegmd@gmail.com', '$2y$12$qhkz1aVcZ8ogRIQW7zVCA.PoF908qN2G9/G7j89jqW47a8PWrkSCS', '80.215.128.50', '271bf04e4dfd47d7d75f18c2521569734039e8f829c489fccd09c9274d75f259dc2ed2c90fb0c250503ca7a0eb5f297348144f02214333254a1fc8319cf3cd6f', '2022-04-19 15:21:51'),
(11, 'Fly', 'flyproduction485@gmail.com', '$2y$12$XmunaD7wTKJUobjSkeip7ezTM9XmD2uh8MH4wJdHVJFMhMfY5RxrW', '92.184.116.171', 'bc614a2be311a4f15f497b784d7bf3fa36a8fadbfdede1401b5151c00a58a8533d203138bb819edbcd113b3e0194e52f0b6a891d225d71a907f1af9b605b4ee7', '2022-06-01 12:25:02'),
(12, 'Inès', 'savarieau.ines@gmail.com', '$2y$12$NA8QZCet/beKPxNyA6g/sePbUQHeno4NJFVP0fywFS/qO75C6WLD.', '92.184.108.50', '968af0ddf7488b545390f16af4ddc9458e79a8999176bf82d657ca0e06d0f98d0f7a688baf5b54dc3c336952a7f945175aa3c78b6d499e452794efcbdfaf4e98', '2022-06-01 12:32:20'),
(13, 'Beldanthor', 'marc.hazime@gmail.com', '$2b$12$7n5qt.NKbjiJQ/kFjof29.MzyYozY9O3YU0.QmMhqhjhlrn4XtlGG', '217.109.219.175', '80d56c32fb9b6618c799849d40730f32d1cdf3300578169e966c72240a9f2c9fcef301b5978911f3625f856e2bf8acecf9ff5a6b3c59619085957dfe1b15ae10', '2022-06-02 10:50:10'),
(14, 'Pablo', 'sesmanovic@gmail.com', '$2b$12$w4jjoTfkxYd7HYjnmgAh5u0lOOm0ndek9COwxkHzIccz3fMbJlFNy', '77.205.143.76', 'af1b39b3d463c38c518927ea66c03e9a3c2fa9c5f475e3462af2e1d531f3a9c617dbbf53174c77173d20868129f09164e3b43a888c09d829ef7ffbb5e23518e0', '2022-06-02 10:56:06');

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
-- Index pour la table `contenu`
--
ALTER TABLE `contenu`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `connexionFlyp`
--
ALTER TABLE `connexionFlyp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `contenu`
--
ALTER TABLE `contenu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
