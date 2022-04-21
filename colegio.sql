-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-04-2022 a las 06:19:01
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `colegio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operadortelefonico`
--

CREATE TABLE `operadortelefonico` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(15) COLLATE utf8_spanish_ci DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `operadortelefonico`
--

INSERT INTO `operadortelefonico` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'MOVISTAR', NULL, NULL),
(2, 'ENTEL', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personales`
--

CREATE TABLE `personales` (
  `id` int(11) NOT NULL,
  `nombres` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `idtipodocumento` int(11) NOT NULL,
  `numerodocumento` int(8) NOT NULL,
  `idsexo` int(11) NOT NULL,
  `email` varchar(120) COLLATE utf8_spanish_ci NOT NULL,
  `domicilio` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fechanacimiento` date NOT NULL,
  `idoperadortelefonico` int(11) NOT NULL,
  `numerotelefono` int(9) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `personales`
--

INSERT INTO `personales` (`id`, `nombres`, `apellidos`, `idtipodocumento`, `numerodocumento`, `idsexo`, `email`, `domicilio`, `fechanacimiento`, `idoperadortelefonico`, `numerotelefono`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 'Carlos Manuel', 'Sabrera Caballero', 1, 47039105, 1, 'csabrera@gmail.com', 'Jirón Huánuco N° 499', '1991-04-24', 1, 937255389, 1, '2022-04-21 03:29:21', '2022-04-21 03:29:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'ROL_ADMINISTRADOR', '2022-04-21 03:19:06', '2022-04-21 03:19:06'),
(2, 'ROL_DIRECTOR', '2022-04-21 03:19:29', '2022-04-21 03:19:29'),
(3, 'ROL_APODERADO', '2022-04-21 03:19:38', '2022-04-21 03:19:38'),
(4, 'ROL_DOCENTE', '2022-04-21 03:19:45', '2022-04-21 03:19:45'),
(5, 'ROL_COORDINADOR', '2022-04-21 03:19:52', '2022-04-21 03:19:52'),
(6, 'ROL_AUXILIAR', '2022-04-21 03:20:00', '2022-04-21 03:20:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipodocumentos`
--

CREATE TABLE `tipodocumentos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipodocumentos`
--

INSERT INTO `tipodocumentos` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'DNI', '2022-04-18 20:37:53', '2022-04-18 20:37:53'),
(2, 'CARNET DE EXTRANJERIA', '2022-04-18 20:38:10', '2022-04-18 20:38:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiposexo`
--

CREATE TABLE `tiposexo` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tiposexo`
--

INSERT INTO `tiposexo` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'MASCULINO', NULL, NULL),
(2, 'FEMENINO', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` int(8) NOT NULL,
  `idpersonal` int(11) NOT NULL,
  `idrol` int(11) NOT NULL,
  `password` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `confirmado` tinyint(4) DEFAULT 0,
  `estado` tinyint(4) NOT NULL DEFAULT 1,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `idpersonal`, `idrol`, `password`, `confirmado`, `estado`, `createdAt`, `updatedAt`) VALUES
(10, 47039105, 1, 3, '$2b$10$m3fdMqQh4Qq2efppI.tBEurqPiCXwiQVnEcrX7uqJKEbhx1ZJbRje', 1, 1, '2022-04-21 03:29:21', '2022-04-21 03:29:33');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `operadortelefonico`
--
ALTER TABLE `operadortelefonico`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personales`
--
ALTER TABLE `personales`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `numerodocumento` (`numerodocumento`),
  ADD KEY `idtipodocumento` (`idtipodocumento`),
  ADD KEY `idsexo` (`idsexo`),
  ADD KEY `idoperadortelefonico` (`idoperadortelefonico`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipodocumentos`
--
ALTER TABLE `tipodocumentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tiposexo`
--
ALTER TABLE `tiposexo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `idrol` (`idrol`),
  ADD KEY `idpersonal` (`idpersonal`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `operadortelefonico`
--
ALTER TABLE `operadortelefonico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `personales`
--
ALTER TABLE `personales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tipodocumentos`
--
ALTER TABLE `tipodocumentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tiposexo`
--
ALTER TABLE `tiposexo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `personales`
--
ALTER TABLE `personales`
  ADD CONSTRAINT `personales_ibfk_1` FOREIGN KEY (`idtipodocumento`) REFERENCES `tipodocumentos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `personales_ibfk_2` FOREIGN KEY (`idoperadortelefonico`) REFERENCES `operadortelefonico` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `personales_ibfk_3` FOREIGN KEY (`idsexo`) REFERENCES `tiposexo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`idrol`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`idpersonal`) REFERENCES `personales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
