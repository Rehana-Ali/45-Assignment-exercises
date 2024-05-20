function sandwich(...items: string[]): void {
    console.log("you ordered a sandwichwith the following items:");

    items.forEach(item => console.log("-" + item));
    

 console.log("enjoy your sandwich \n");
}

 sandwich('capsicum','tomato' );
 sandwich('beef','chicken' );
 sandwich('peanut butter','jelly');