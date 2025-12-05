$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(1300, 630, 100, 50, "red");
   createPlatform(1100, 530, 100, 50, "orange");
   createPlatform(900, 430, 100, 50, "yellow");
   createPlatform(700, 330, 100, 50, "lime");
   createPlatform(500, 230, 100, 50, "blue");
   createPlatform(150, 150, 100, 50, "purple");
    // TODO 3 - Create Collectables
   createCollectable("diamond", 200, 110, 19, 0.7);
   createCollectable("steve", 350, 400);
   createCollectable("grace", 700, 00);
   createCollectable("max", 70, 50);
    // TODO 4 - Create Cannons
   createCannon("top", 200, 800);
   createCannon("right", 330, 1675);
   createCannon("left",130, 1875);
   createCannon("bottom", 400, 1075);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
