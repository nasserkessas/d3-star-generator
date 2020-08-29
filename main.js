const svg = d3.select('#container');
let stars = [];
let amountOfStars
function doClick() {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let vh = Math.round(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 100 * 80);
    let va = vh * vw;
    stars = [];
    amountOfStars = Math.round(va / 20000);
    for (let i = 0; i < amountOfStars; i++) {
        const scale = Math.random();
        stars.push({
            scale,
            x: Math.round(Math.random() * (vw - 150)),
            y: Math.round(Math.random() * (vh - 150)),
        })
    }
    console.log(stars)
    draw()
}

function draw() {
    d3.selectAll("svg > *").remove();
    for (let i = 0; i < amountOfStars; i++) {
        svg.append('image')
            .attr('xlink:href', 'star.svg')
            .attr('width', stars[i].scale * 150)
            .attr('height', stars[i].scale * 150)
            .attr('x', stars[i].x)
            .attr('y', stars[i].y);
        console.log(`putting a star at (${stars[i].x},${stars[i].y}) with a size of ${stars[i].scale * 150}px`)
    }

}

doClick();  