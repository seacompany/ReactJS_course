const calculateArea = options => 
{   const result = {area:0};
    
    if(options.figure === 'квадрат'){
        let { size } = options;
        result.area = Math.pow(size,2);
    };

    result.figure = options.figure;
    result.input = options;

    return result
}

let options = {
        figure: 'квадрат',
        size: 10
    };

    result = calculateArea( options );
    console.group( 'calculateArea - Квадрат' );
    console.log( 'Площадь:', result.area );
    console.log( 'Фигура:', result.figure );
    console.log( 'Входные параметры:', result.input );
    console.groupEnd();