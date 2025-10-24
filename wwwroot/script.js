window.onload = () => {
    console.log("script.js startar");

    const canvas = document.getElementById('board');
    const scoreEl = document.getElementById('score');
    const restartBtn = document.getElementById('restart');

    if (!canvas) { console.error("Hittar inte #board"); return; }
    const ctx = canvas.getContext('2d');
    if (!ctx) { console.error("Kan inte få 2D-kontext"); return; }

    const tile = 20;
    const tiles = canvas.width / tile;

    let snake, dir, food, score, loopId, alive;

    function init() {
        snake = [{ x: 10, y: 10 }];
        dir = { x: 1, y: 0 };
        score = 0;
        alive = true;
        food = randomFood();
        updateScore();
        clearInterval(loopId);
        loopId = setInterval(tick, 100);
        draw();
    }

    function randomFood() {
        let f;
        do {
            f = { x: Math.floor(Math.random() * tiles), y: Math.floor(Math.random() * tiles) };
        } while (snake.some(s => s.x === f.x && s.y === f.y));
        return f;
    }

    function updateScore() { scoreEl.textContent = score; }

    function tick() {
        if (!alive) return;

        const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

        // vägg eller egen svans
        if (head.x < 0 || head.x >= tiles || head.y < 0 || head.y >= tiles) return gameOver();
        if (snake.some(s => s.x === head.x && s.y === head.y)) return gameOver();

        snake.unshift(head);

        // åt mat?
        if (head.x === food.x && head.y === food.y) {
            score += 1;
            updateScore();
            food = randomFood();
        } else {
            snake.pop();
        }

        draw();
    }

    function draw() {
        // bakgrund
        ctx.fillStyle = '#111827';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // mat
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(food.x * tile, food.y * tile, tile, tile);

        // orm
        snake.forEach((seg, i) => {
            ctx.fillStyle = i === 0 ? '#22c55e' : '#10b981';
            ctx.fillRect(seg.x * tile + 1, seg.y * tile + 1, tile - 2, tile - 2);
        });
    }

    function gameOver() {
        alive = false;
        clearInterval(loopId);
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '24px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over - tryck Starta om', canvas.width / 2, canvas.height / 2);
    }

    window.addEventListener('keydown', e => {
        const k = e.key.toLowerCase();
        const left = (k === 'arrowleft' || k === 'a');
        const up = (k === 'arrowup' || k === 'w');
        const right = (k === 'arrowright' || k === 'd');
        const down = (k === 'arrowdown' || k === 's');
        if (left && dir.x !== 1) dir = { x: -1, y: 0 };
        if (right && dir.x !== -1) dir = { x: 1, y: 0 };
        if (up && dir.y !== 1) dir = { x: 0, y: -1 };
        if (down && dir.y !== -1) dir = { x: 0, y: 1 };
    });

    if (restartBtn) restartBtn.addEventListener('click', init);

    init();
    console.log("script.js init klart");
};
