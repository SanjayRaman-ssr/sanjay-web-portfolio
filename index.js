navchan=true
function navimg() {
    // alert("jj")
    if (navchan) {
        
    document.querySelector(".nav-ul").style="right:0px; box-shadow: -5px 0px 10px black;"
        navchan=!navchan
    } else {
        document.querySelector(".nav-ul").style="right:-250px; box-shadow: 0px 0px 0px black;"
       
    navchan=!navchan
    }
}
 
let career_change=['Full Stack developer..!','Front-End developer..!','Back-End Developer..!','Python Developer..!'];
        
const career_change_h2 = document.querySelector(".career-proff");
   
let index = 0;
function showName() {
    //  Fade in
    career_change_h2.style.opacity = 1;
   

    //nikkum for 2s (after fade-in)
    setTimeout(() => {
        // Step 3: Fade out
        career_change_h2.style.opacity = 0;
       
    }, 6000); // 4s la maraiyum

    //  After full invisible, change name and repeat
    setTimeout(() => {
        index = (index + 1) % career_change.length;
       career_change_h2.innerText = career_change[index];

        //  index = (index) % name2.length;
        // mandi_div_p.innerText = name2[index];

        // index = (index) % image_mandi_changing.length;
        // mandi_img.innerHTML = image_mandi_changing[index];
        showName(); // Loop
    }, 6000); // 4.5s la athuvey visible agum 
}

showName();


// const ellipse = document.querySelector('.skill-8');
//     const icon = document.querySelector('.fa-js');

//     let angle = 0;

//     function animate() {
//       const width = ellipse.offsetWidth;
//       const height = ellipse.offsetHeight;

//       const centerX = width / 2;
//       const centerY = height / 2;

//       const iconWidth = icon.offsetWidth;
//       const iconHeight = icon.offsetHeight;

//       // radius should be based on visible edge of border
//       const radiusX = (width - iconWidth) / 2;
//       const radiusY = (height - iconHeight) / 2;

//       const x = centerX + radiusX * Math.cos(angle);
//       const y = centerY + radiusY * Math.sin(angle);

//       icon.style.left = `${x}px`;
//       icon.style.top = `${y}px`;

//       angle += 0.01;
//       requestAnimationFrame(animate);
//     }

//     animate();
// const allOrbits = document.querySelectorAll('.orbit-container');

// const state = Array.from(allOrbits).map(container => {
//   const icon = container.querySelector('.orbit-icon, .orbit-icon2');

//   const isClockwise = icon.classList.contains('orbit-icon');
  
//   return {
//     container,
//     icon,
//     angle: Math.random() * Math.PI * 2,
//     direction: isClockwise ? 1 : -1
//   };
// });

// function animate() {
//   for (const obj of state) {
//     const { container, icon, direction } = obj;
//     const width = container.offsetWidth;
//     const height = container.offsetHeight;
//     const iconW = icon.offsetWidth;
//     const iconH = icon.offsetHeight;

//     const centerX = width / 2;
//     const centerY = height / 2;
//     const radiusX = (width - iconW) / 2;
//     const radiusY = (height - iconH) / 2;

//     const x = centerX + radiusX * Math.cos(obj.angle);
//     const y = centerY + radiusY * Math.sin(obj.angle);

//     icon.style.left = `${x}px`;
//     icon.style.top = `${y}px`;

//     obj.angle += direction * 0.01;
//   }

//   requestAnimationFrame(animate);
// }

// animate();


// const icons = document.querySelectorAll('.orbit-icon, .orbit-icon2');

// const orbitData = Array.from(icons).map(icon => {
//   const container = icon.closest('.orbit-container');
//   const isClockwise = icon.classList.contains('orbit-icon');
  
//   // Add event listeners to track hover state
//   icon.addEventListener('mouseenter', () => obj.paused = true);
//   icon.addEventListener('mouseleave', () => obj.paused = false);

//   const obj = {
//     container,
//     icon,
//     angle: Math.random() * Math.PI * 2,
//     direction: isClockwise ? 1 : -1,
//     paused: false
//   };

//   return obj;
// });

// function animate() {
//   for (const obj of orbitData) {
//     const { container, icon, direction, paused } = obj;
//     if (paused) continue; // ⛔ Skip this icon if it's hovered

//     const width = container.offsetWidth;
//     const height = container.offsetHeight;
//     const iconW = icon.offsetWidth;
//     const iconH = icon.offsetHeight;

//     const centerX = width / 2;
//     const centerY = height / 2;
//     const radiusX = (width - iconW) / 2;
//     const radiusY = (height - iconH) / 2;

//     const x = centerX + radiusX * Math.cos(obj.angle);
//     const y = centerY + radiusY * Math.sin(obj.angle);

//     icon.style.left = `${x}px`;
//     icon.style.top = `${y}px`;

//     obj.angle += direction * 0.01;
//   }

//   requestAnimationFrame(animate);
// }

// animate();


const allOrbitContainers = document.querySelectorAll('.orbit-container');

const orbits = [];

allOrbitContainers.forEach(container => {
  const icons = container.querySelectorAll('.orbit-icon, .orbit-icon2');
  const state = {
    container,
    paused: false,
    icons: []
  };

  container.addEventListener('mouseenter', () => state.paused = true);
  container.addEventListener('mouseleave', () => state.paused = false);

  icons.forEach(icon => {
    const isClockwise = icon.classList.contains('orbit-icon');
    state.icons.push({
      icon,
      angle: Math.random() * Math.PI * 2,
      direction: isClockwise ? 1 : -1
    });
  });

  orbits.push(state);
});

function animate() {
  for (const orbit of orbits) {
    const { container, paused, icons } = orbit;

    if (!paused) {
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      icons.forEach(obj => {
        const icon = obj.icon;
        const iconW = icon.offsetWidth;
        const iconH = icon.offsetHeight;

        const centerX = width / 2;
        const centerY = height / 2;
        const radiusX = (width - iconW) / 2;
        const radiusY = (height - iconH) / 2;

        const x = centerX + radiusX * Math.cos(obj.angle);
        const y = centerY + radiusY * Math.sin(obj.angle);

        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;

        obj.angle += obj.direction * 0.01;
      });
    }
  }

  requestAnimationFrame(animate);
}

animate();

 
// for (let a=1 ; a < 10; a++){
//     for (let  b= 1;  b<= a; b++) {
//       console.log(b ,end='');
      
      
//     }
  
// }
