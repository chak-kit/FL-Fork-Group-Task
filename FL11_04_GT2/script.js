// parallelogram by @SlavikSurminskiy 
document.addEventListener("DOMContentLoaded", function (event) {
  let parallelogram = document.getElementById('parallelogram');
  let parallelogramSideA = document.getElementById('parallelogram-side-a');
  let parallelogramSideB = document.getElementById('parallelogram-side-b');
  let parallelogramAngle = document.getElementById('parallelogram-angle');
  let parallelogramArea = document.querySelector('#parallelogram-area span');
  let parallelogramHeight = document.querySelector('#parallelogram-height span');

  function buildParallelogram() {
    let parSideA = parallelogramSideA.value;
    let parSideB = parallelogramSideB.value;
    let parAngle = parallelogramAngle.value;

    let validFlags = [false, false, false];
    let defaultSettings = {
      sideA: 100,
      sideB: 50,
      angle: 90
    }

    if (parSideA != '') {
      parallelogram.style.width = parSideA + 'px';
      validFlags[0] = true;
    } else {
      parallelogram.style.width = defaultSettings.sideA + 'px';
    }
    if (parSideB != '' & parAngle != '') {
      parallelogram.style.height = parSideB * Math.sin(parAngle * Math.PI / 180) + 'px';
      validFlags[1] = true;
    } else if (parSideB != '') {
      parallelogram.style.height = parSideB * Math.sin(defaultSettings.angle * Math.PI / 180) + 'px';
    } else {
      parallelogram.style.height = defaultSettings.sideB * Math.sin(defaultSettings.angle * Math.PI / 180) + 'px';
    }
    if (parAngle != '') {
      parallelogram.style.transform = `skewX(${90 - parAngle}deg)`;
      validFlags[2] = true;
    } else {
      parallelogram.style.transform = `skewX(${90 - defaultSettings.angle}deg)`;
    }

    let parArea;
    let parHeight;
    if (validFlags[0] & validFlags[1] & validFlags[2]) {
      parArea = parSideA * parSideB * Math.sin(parAngle * Math.PI / 180).toFixed(2);
      parHeight = parSideB * Math.sin(parAngle * Math.PI / 180).toFixed(2);
    } else {
      parArea = '-';
      parHeight = '-';
    }
    parallelogramArea.innerHTML = parArea;
    parallelogramHeight.innerHTML = parHeight;
  }

  parallelogramSideA.addEventListener('input', buildParallelogram);
  parallelogramSideB.addEventListener('input', buildParallelogram);
  parallelogramAngle.addEventListener('input', buildParallelogram);

});

// rectangle by @aymkin

document.addEventListener("DOMContentLoaded", function (event) {
  let rectangle = document.getElementById('rectangle');
  let rectangleSideA = document.getElementById('rectangle-side-a');
  let rectangleSideB = document.getElementById('rectangle-side-b');
  let rectangleArea = document.querySelector('#rectangle-area span');
  let rectangleHeight = document.querySelector('#rectangle-height span');

  function buildRectangle() {
    let recSideA = rectangleSideA.value;
    let recSideB = rectangleSideB.value;

    let validFlags = [false, false, false];
    let defaultSettings = {
      sideA: 100,
      sideB: 50
    }

    if (recSideA != '') {
      rectangle.style.width = recSideA + 'px';
      validFlags[0] = true;
    } else {
      rectangle.style.width = defaultSettings.sideA + 'px';
    }

    if (recSideB != '') {
      rectangle.style.height = recSideB + 'px';
      validFlags[1] = true;
    } else {
      rectangle.style.height = defaultSettings.sideB + 'px';
    }

    let recArea;
    let recHeight;
    if (validFlags[0] & validFlags[1]) {
      recArea = recSideA * recSideB;
      recHeight = recSideB;
    } else {
      recArea = '-';
      recHeight = '-';
    }
    rectangleArea.innerHTML = recArea;
    rectangleHeight.innerHTML = recHeight;
  }

  rectangleSideA.addEventListener('input', buildRectangle);
  rectangleSideB.addEventListener('input', buildRectangle);

});

// oval by @SlavikSurminskiy 
// TODO needs improvement: scailing is too height

document.addEventListener("DOMContentLoaded", function (event) {
  let oval = document.getElementById('oval');
  let ovalHorizontalRadius = document.getElementById('oval-horizontal-radius');
  let ovalVerticalRadius = document.getElementById('oval-vertical-radius');
  let ovalArea = document.querySelector('#oval-area span');
  let ovalLength = document.querySelector('#oval-length span');

  function buildOval() {
    let ovalHorRadius = ovalHorizontalRadius.value;
    let ovalVerRadius = ovalVerticalRadius.value;
    let validFlag = false;
    
    if (ovalHorRadius != '' & ovalVerRadius != '') {
      oval.style.transform = `scaleX(${ovalHorRadius / ovalVerRadius})`;
      validFlag = true;
    }
    let calcOvalArea;
    let calcOvalLength;
    
    if (validFlag) {
      calcOvalArea = Math.PI * ovalHorRadius * ovalVerRadius;
      const x = Math.log(2) / Math.log(Math.PI / 2);
      calcOvalLength = 4 * ((ovalHorRadius ** x + ovalVerRadius ** x) ** (1 / x));
    } else {
      calcOvalArea = '-';
      calcOvalLength = '-';
    }

    ovalArea.innerHTML = calcOvalArea;
    ovalLength.innerHTML = calcOvalLength;
  }
  ovalHorizontalRadius.addEventListener('input', buildOval);
  ovalVerticalRadius.addEventListener('input', buildOval);
});


