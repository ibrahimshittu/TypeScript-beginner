let greet = () => {
    console.log('hello world')
}

let greettwo: Function;

let add = (a: number, b: number, c?: string | number ) => {
    return a + b && c
}

add(5, 5)

type strongornum = number | string;
type objwname = {
    name: string,
    age: strongornum
}