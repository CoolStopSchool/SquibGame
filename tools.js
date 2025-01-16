function drawTextBox(x, y, width, height, text, style, boxCol, textCol) {
    ctx.fillStyle = boxCol; // set rectangle color
    ctx.fillRect(x, y, width, height) // Draw rectangle
    drawCenteredText2(x, y, width, height, text, style, textCol) // center a textCol text inside
}

function drawButton(x, y, width, height, text, style, boxCol, hoverCol, textCol, func) {
    
}


function drawCenteredText1(left, right, top, bottom, text, style, color) {
    // set colors and style stuff
    ctx.fillStyle = color; 
    ctx.font = style;

    // get width & height of the text
    const metrics = ctx.measureText(text);
    const width = Math.abs(metrics.actualBoundingBoxLeft) + Math.abs(metrics.actualBoundingBoxRight);
    const height = Math.abs(metrics.actualBoundingBoxAscent) + Math.abs(metrics.actualBoundingBoxDescent);

    // calculate position
    ctx.fillText(text, (((Math.abs(left - right) / 2) + Math.min(left, right)) - (width / 2)), (((Math.abs(top - bottom) / 2) + Math.min(top, bottom)) + (height / 2)));

    // reset fillStyle to black
    ctx.fillStyle = "black";
}

function drawCenteredText2(x, y, width, height, text, style, color) {
    // set colors and style stuff
    ctx.fillStyle = color;
    ctx.font = style;

    // get the 4 corners positions so I can reuse the calculation line from before instead of remaking it
    let left = x;
    let right = x + width;
    let top = y;
    let bottom = y + height;

    // get width & height of the text
    const metrics = ctx.measureText(text);
    const Textwidth = Math.abs(metrics.actualBoundingBoxLeft) + Math.abs(metrics.actualBoundingBoxRight);
    const Textheight = Math.abs(metrics.actualBoundingBoxAscent) + Math.abs(metrics.actualBoundingBoxDescent);

    // reuse the calculation from before to get the positions
    ctx.fillText(text, (((Math.abs(left - right) / 2) + Math.min(left, right))) - (Textwidth / 2), (((Math.abs(top - bottom) / 2) + Math.min(top, bottom)) + (Textheight / 2)));

    // reset fillStyle to black
    ctx.fillStyle = "black";
}