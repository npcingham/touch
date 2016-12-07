var maxStageWidth = 1000;
var maxStageHeight = 500;
var maxPageWidth = 1000;

// Check to see if window is less than desired width and calls sizing functions
function setStageWidth() {
    if (window.innerWidth < maxPageWidth) {

        resizeStage();

    } else {

        maxStageSize();

    };
};

// Sets scale and dimensions of stage in relation to window size
function resizeStage() {

    var scalePercentage = window.innerWidth / maxPageWidth;

    stage.setAttr('scaleX', scalePercentage);
    stage.setAttr('scaleY', scalePercentage);
    stage.setAttr('width', maxStageWidth * scalePercentage);
    stage.setAttr('height', maxStageHeight * scalePercentage);
    stage.draw();
};

//Sets scale and dimensions of stage to max settings
function maxStageSize() {
    stage.setAttr('scaleX', 1);
    stage.setAttr('scaleY', 1);
    stage.setAttr('width', maxStageWidth);
    stage.setAttr('height', maxStageHeight);
    stage.draw();
};

var stage = new Kinetic.Stage({
    container: 'container',
    width: maxStageWidth,
    height: maxStageHeight,
    scaleX: 2
});

var circles = new Kinetic.Layer();

var circleRed = new Kinetic.Circle({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    radius: 100,
    stroke: 'black',
    strokeWidth: 2,
    fill: 'red',
    draggable: true
});

var circleBlue = new Kinetic.Circle({
    x: stage.getWidth() / 2 + 120,
    y: stage.getHeight() / 2 + 175,
    radius: 50,
    stroke: 'black',
    strokeWidth: 2,
    fill: 'blue'
});

var circleOrange = new Kinetic.Circle({
    x: stage.getWidth() / 2 - 175,
    y: stage.getHeight() / 2 + 100,
    radius: 75,
    stroke: 'black',
    strokeWidth: 2,
    fill: 'orange'
});

circles.add(circleRed);
circles.add(circleBlue);
circles.add(circleOrange);

stage.add(circles);

// On load we set stage size based on window size
setStageWidth();

// On window resize we resize the stage size
window.addEventListener('resize', setStageWidth);