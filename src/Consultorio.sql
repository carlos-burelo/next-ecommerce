-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema consultorio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema consultorio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `consultorio`;
USE `consultorio` ;

-- -----------------------------------------------------
-- Table `consultorio`.`Registro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `consultorio`.`Registro` (
  `Folio` INT NOT NULL,
  `Fecha de consulta` DATETIME NOT NULL,
  `Consetimiento informado` VARCHAR(100) NOT NULL,
  `Antecedentes` VARCHAR(100) NOT NULL,
  `analisis` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`Folio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `consultorio`.`Paciente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `consultorio`.`Paciente` (
  `Nombre` VARCHAR(60) NOT NULL,
  `Folio` INT NOT NULL,
  `INE` INT NOT NULL,
  `Telefono` INT NOT NULL,
  `Direccion` VARCHAR(45) NOT NULL,
  `Sexo` NCHAR(1) NOT NULL,
  `Registro_Folio` INT NOT NULL,
  PRIMARY KEY (`Folio`, `INE`),
  INDEX `fk_Paciente_Registro1_idx` (`Registro_Folio` ASC),
  CONSTRAINT `fk_Paciente_Registro1`
    FOREIGN KEY (`Registro_Folio`)
    REFERENCES `consultorio`.`Registro` (`Folio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `consultorio`.`Ofertas de tratamiento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `consultorio`.`Ofertas de tratamiento` (
  `nombre` VARCHAR(25) NOT NULL,
  `% descuento` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `Membresia` VARCHAR(45) NOT NULL,
  `Paciente_Folio` INT NOT NULL,
  `Paciente_INE` INT NOT NULL,
  PRIMARY KEY (`nombre`, `Paciente_Folio`, `Paciente_INE`),
  INDEX `fk_Ofertas de tratamiento_Paciente1_idx` (`Paciente_Folio` ASC, `Paciente_INE` ASC),
  CONSTRAINT `fk_Ofertas de tratamiento_Paciente1`
    FOREIGN KEY (`Paciente_Folio` , `Paciente_INE`)
    REFERENCES `consultorio`.`Paciente` (`Folio` , `INE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `consultorio`.`Tratamientos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `consultorio`.`Tratamientos` (
  `id_tratamiento` INT NOT NULL,
  `Nombre_tratamiento` VARCHAR(100) NOT NULL,
  `Fecha_realizacion` DATETIME NOT NULL,
  `Fecha_entrega` DATETIME NOT NULL,
  `Diagnostico` VARCHAR(45) NULL,
  `Responsable` VARCHAR(45) NOT NULL,
  `Costo` INT NOT NULL,
  `Ofertas de tratamiento_nombre` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id_tratamiento`),
  INDEX `fk_Tratamientos_Ofertas de tratamiento1_idx` (`Ofertas de tratamiento_nombre` ASC),
  CONSTRAINT `fk_Tratamientos_Ofertas de tratamiento1`
    FOREIGN KEY (`Ofertas de tratamiento_nombre`)
    REFERENCES `consultorio`.`Ofertas de tratamiento` (`nombre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `consultorio`.`Consultorio_dental`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `consultorio`.`Consultorio_dental` (
  `Num_razon_social` INT NOT NULL,
  `Numero_telefono` VARCHAR(45) NOT NULL,
  `Horario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Num_razon_social`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `consultorio`.`Trabajadores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `consultorio`.`Trabajadores` (
  `INE` INT NOT NULL,
  `Nombre` VARCHAR(100) NOT NULL,
  `Telefono` INT NOT NULL,
  `Direccion` VARCHAR(100) NOT NULL,
  `Salario` INT NOT NULL,
  `Consultorio_dental_Num_razon_social` INT NOT NULL,
  PRIMARY KEY (`INE`),
  INDEX `fk_Trabajadores_Consultorio_dental1_idx` (`Consultorio_dental_Num_razon_social` ASC),
  CONSTRAINT `fk_Trabajadores_Consultorio_dental1`
    FOREIGN KEY (`Consultorio_dental_Num_razon_social`)
    REFERENCES `consultorio`.`Consultorio_dental` (`Num_razon_social`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `consultorio`.`Cita medica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `consultorio`.`Cita medica` (
  `Pkcodigo` INT NOT NULL,
  `Horario` VARCHAR(67) NOT NULL,
  `Consultorio dentalcol` VARCHAR(45) NOT NULL,
  `Ubicacion` VARCHAR(45) NOT NULL,
  `Paciente_Folio` INT NOT NULL,
  `Paciente_INE` INT NOT NULL,
  `Tratamientos_id_tratamiento` INT NOT NULL,
  `Consultorio_dental_Num_razon_social` INT NOT NULL,
  PRIMARY KEY (`Pkcodigo`),
  INDEX `fk_Consultorio dental_Paciente_idx` (`Paciente_Folio` ASC, `Paciente_INE` ASC),
  INDEX `fk_Consultorio dental_Tratamientos1_idx` (`Tratamientos_id_tratamiento` ASC),
  INDEX `fk_Cita medica_Consultorio_dental1_idx` (`Consultorio_dental_Num_razon_social` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `consultorio`.`Doctores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `consultorio`.`Doctores` (
  `Especializacion` VARCHAR(40) NOT NULL,
  `Diplomado` VARCHAR(45) NOT NULL,
  `Celula` INT NOT NULL,
  `Consultorio dental_Pkcodigo` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Num_telefono` INT NOT NULL,
  PRIMARY KEY (`Especializacion`, `Celula`),
  INDEX `fk_Doctores_Consultorio dental1_idx` (`Consultorio dental_Pkcodigo` ASC),
  CONSTRAINT `fk_Doctores_Consultorio dental1`
    FOREIGN KEY (`Consultorio dental_Pkcodigo`)
    REFERENCES `consultorio`.`Cita medica` (`Pkcodigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
