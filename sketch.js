let ball, bumper;

function setup() {
	new Canvas(800, 1000);
	world.gravity.y = 10;

	// ball = new Sprite(420, 900, 20);
	// ball.direction = -90;
	// ball.speed = 20;

	ball = new Sprite(420, 10, 20);
	ball.direction = 90;

	bumper = new Sprite(400, 200, 50, 's');
}

function draw() {
	background('gray');

	if (ball.collides(bumper)) {
		ball.direction = (atan2(bumper.y - ball.y, bumper.x - ball.x) * 180) / PI - 180;
		log(ball.direction);
		ball.speed += 7;
	}
}
