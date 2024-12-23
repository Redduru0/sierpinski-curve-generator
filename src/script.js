/* ...existing code... */

const memo = {};

function drawSierpinski(x, y, size, depth) {
    if (depth === 0) {
        drawTriangle(x, y, size);
        return;
    }

    const key = `${x},${y},${size},${depth}`;
    if (memo[key]) {
        return memo[key];
    }

    const half = size / 2;
    drawSierpinski(x, y, half, depth - 1);
    drawSierpinski(x + half, y, half, depth - 1);
    drawSierpinski(x + half / 2, y - half * Math.sqrt(3) / 2, half, depth - 1);

    memo[key] = true;
}

/* ...existing code... */
