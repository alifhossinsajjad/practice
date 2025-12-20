function main() {
    const PI = Math.PI;
    let r = 2.6
    let area = PI * r * r;
    let perimeter = 2 * PI * r;

    console.log(area.toFixed(2));      // 2 decimal places
    console.log(perimeter.toFixed(2));
}

main()