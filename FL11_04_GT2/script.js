document.addEventListener("DOMContentLoaded", function(event) {
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
    if(validFlags[0] & validFlags[1] &validFlags[2]) {
      parArea = parSideA * parSideB * Math.sin(parAngle * Math.PI / 180);
      parHeight = parSideB * Math.sin(parAngle * Math.PI / 180);
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