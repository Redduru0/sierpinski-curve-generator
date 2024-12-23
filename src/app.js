const canvas = document.getElementById('curveCanvas');
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext('2d');

// Set canvas to higher resolution
const scale = window.devicePixelRatio;
canvas.width *= scale;
canvas.height *= scale;
ctx.scale(scale, scale);

document.getElementById('level').addEventListener('input', drawShape);
document.getElementById('sides').addEventListener('input', drawShape);
document.getElementById('generate').addEventListener('click', drawShape);

function drawShape() {
    const level = parseInt(document.getElementById('level').value);
    const sides = parseInt(document.getElementById('sides').value);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = getNeonColor();
    ctx.lineWidth = 2; // Set line width to make it more visible
    drawSierpinski(ctx, canvas.width / 2 / scale, canvas.height / 2 / scale, canvas.width / 3 / scale, level, sides); // Adjust size to fit within canvas
}

function drawSierpinski(ctx, x, y, size, level, sides) {
    if (level === 0) {
        drawPolygon(ctx, x, y, size, sides);
    } else {
        const newSize = size / 2;
        for (let i = 0; i < sides; i++) {
            const angle = (i * 2 * Math.PI) / sides - Math.PI / 2; // Adjust angle to start from the top
            const newX = x + newSize * Math.cos(angle);
            const newY = y + newSize * Math.sin(angle);
            drawSierpinski(ctx, newX, newY, newSize, level - 1, sides);
        }
    }
}

function drawPolygon(ctx, x, y, size, sides) {
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides - Math.PI / 2; // Adjust angle to start from the top
        const newX = x + size * Math.cos(angle);
        const newY = y + size * Math.sin(angle);
        if (i === 0) {
            ctx.moveTo(newX, newY);
        } else {
            ctx.lineTo(newX, newY);
        }
    }
    ctx.closePath();
    ctx.stroke();
}

function getNeonColor() {
    const neonColors = ['#39FF14', '#FF073A', '#00FFFF', '#FF00FF', '#FFFF00'];
    return neonColors[Math.floor(Math.random() * neonColors.length)];
}