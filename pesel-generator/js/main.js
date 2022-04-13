"use strict";

const fullName = document.getElementById("fullName");
const birthDate = document.getElementById("birthDate");
const male = document.getElementById("male");
const female = document.getElementById("female");
const generate = document.getElementById("generate");
const citizen = document.getElementById("citizen");
const pesel = document.getElementById("pesel");

function calculateMonth(fullBirthDate, yearOfBirth) {
  const monthOfBirth = +fullBirthDate.substring(5, 7);

  if (yearOfBirth >= 1800 && yearOfBirth <= 1899) {
    return `${80 + monthOfBirth}`;
  } else if (yearOfBirth >= 1900 && yearOfBirth <= 1999) {
    return monthOfBirth <= 9 ? `0${monthOfBirth}` : `${monthOfBirth}`;
  } else if (yearOfBirth >= 2000 && yearOfBirth <= 2099) {
    return `${20 + monthOfBirth}`;
  } else if (yearOfBirth >= 2100 && yearOfBirth <= 2199) {
    return `${40 + monthOfBirth}`;
  } else if (yearOfBirth >= 2200 && yearOfBirth <= 2299) {
    return `${60 + monthOfBirth}`;
  } else {
    alert("Wprowadź rok urodzenia jeszcze raz");
    throw new Error("Invalid year of birth");
  }
}

const drawNumbers = (min, max, numLenght = 1) => {
  const drawnNum = Math.floor(Math.random() * (max - min) + min);

  return drawnNum < 100 && numLenght === 3 ? `0${drawnNum}` : `${drawnNum}`;
};

function genderDesignationHandler() {
  let number;
  if (female.checked) {
    number = drawNumbers(0, 9);

    return number % 2 === 0 ? number : 0;
  } else {
    number = drawNumbers(1, 10);

    return number % 2 !== 0 ? number : 1;
  }
}

const sum = (...args) => args.reduce((curr, prev) => curr + prev);

function calculateControlNum(
  firstPNum,
  secondPNum,
  thirdPNum,
  fourthPNum,
  fivethPNum,
  sixthPNum,
  seventhPNum,
  eighthPNum,
  ninthPNum,
  tenthPNum
) {
  //caclulation of the control number- each of ten previously calculated numbers that make up Pesel number has to be multiplied by given weight

  const firstToControl = firstPNum * 1;
  const secondToControl =
    secondPNum * 3 >= 10
      ? +(secondPNum * 3).toString().substring(1)
      : secondPNum * 3;
  const thirdToControl =
    thirdPNum * 7 >= 10
      ? +(thirdPNum * 7).toString().substring(1)
      : thirdPNum * 7;
  const fourthToControl =
    fourthPNum * 9 >= 10
      ? +(fourthPNum * 9).toString().substring(1)
      : fourthPNum * 9;
  const fithToControl = fivethPNum * 1;
  const sixthToControl =
    sixthPNum * 3 >= 10
      ? +(sixthPNum * 3).toString().substring(1)
      : sixthPNum * 3;
  const seventhToControl =
    seventhPNum * 7 >= 10
      ? +(seventhPNum * 7).toString().substring(1)
      : seventhPNum * 7;
  const eighthToControl =
    eighthPNum * 9 >= 10
      ? +(eighthPNum * 9).toString().substring(1)
      : eighthPNum * 9;
  const ninthToControl = ninthPNum * 1;
  const tenthToControl =
    tenthPNum * 3 >= 10
      ? +(tenthPNum * 3).toString().substring(1)
      : tenthPNum * 3;

  //summing up all numbers that were got from multiplying individual numbers from Pesel number by their weight; sum that was calculated is then devided by modulo of 10; on the Government's' site there is no clear info what happens if modulo of 10 from sum gives 0; according to the info found on the Internet then the control number equals 0
  const sumOfCompNums = sum(
    firstToControl,
    secondToControl,
    thirdToControl,
    fourthToControl,
    fithToControl,
    sixthToControl,
    seventhToControl,
    eighthToControl,
    ninthToControl,
    tenthToControl
  );

  return sumOfCompNums % 10 === 0 ? 0 : 10 - (sumOfCompNums % 10);
}

function generatePesel() {
  const fullBirthDate = birthDate.value;
  const yearOfBirth = +fullBirthDate.substring(0, 4);
  //month of birth after necessary corrections depending on year of birth(see more in the Readme)
  const monthToPesel = calculateMonth(fullBirthDate, yearOfBirth);
  const dayToPesel = fullBirthDate.substring(8, 10);
  const freeRandom = drawNumbers(1, 999, 3);

  //4th random number which value depends on gender of a citizen; females get even number (0 is treated as even), males get odd
  const genderDesigNumber = genderDesignationHandler();

  //getting all individual numbers which will be needed to calculate the control number
  const firstPeselNum = +yearOfBirth.toString().substring(2, 3);
  const secondPeselNum = +yearOfBirth.toString().substring(3, 4);
  const thirdPeselNum = +monthToPesel.substring(0, 1);
  const fourthPeselNum = +monthToPesel.substring(1);
  const fithPeselNum = +dayToPesel.substring(0, 1);
  const sixthPeselNum = +dayToPesel.substring(1);
  const seventhPeselNum = +freeRandom.substring(0, 1);
  const eighthPeselNum = +freeRandom.substring(1, 2);
  const ninthPeselNum = +freeRandom.substring(2, 3);
  const tenthPeselNum = genderDesigNumber;

  const controlNum = calculateControlNum(
    firstPeselNum,
    secondPeselNum,
    thirdPeselNum,
    fourthPeselNum,
    fithPeselNum,
    sixthPeselNum,
    seventhPeselNum,
    eighthPeselNum,
    ninthPeselNum,
    tenthPeselNum
  );

  citizen.innerText = `${fullName.value}`;
  pesel.innerText = `${firstPeselNum}${secondPeselNum}${thirdPeselNum}${fourthPeselNum}${fithPeselNum}${sixthPeselNum}${seventhPeselNum}${eighthPeselNum}${ninthPeselNum}${tenthPeselNum}${controlNum}`;
}

generate.addEventListener("click", generatePesel);
