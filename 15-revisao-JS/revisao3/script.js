
function newForEach(array, callback){
    for(let i = 0; i<array.length; i++){
        callback(array[i], i, array)
    }
}


function newMap(array, callback){
    let newArr = []
    for(let i = 0; i<array.length; i++){
        newArr.push(callback(array[i], i, array))
    }
    return newArr
}


function newFilter(array, callback){
    let newArr = []
    for(let i = 0; i<array.length; i++){
        if(callback(array[i], i, array)){
            newArr.push(array[i])
        }
    }
    return newArr
}


function newFind(array, callback){
    for(let i = 0; i<array.length; i++){
        if(callback(array[i], i, array)){
            return array[i]
            break
        }
    }
}


function newFindIndex(array, callback){
    let result = -1
    for(let i = 0; i<array.length; i++){
        if(callback(array[i], i, array)){
            result = i
            break
        }
    }
    return result
}


function newReduce(array, callback, valorInicial){
    let acumulador
    if(valorInicial === undefined){
        acumulador = array[0]
        for(let i = 1; i<array.length; i++){
            acumulador = callback(acumulador, array[i], i, array)
        }
    }
    if(valorInicial !== undefined){
        acumulador = valorInicial
        for(let i = 0; i<array.length; i++){
            acumulador = callback(acumulador, array[i], i, array)
        }
    }  
    return acumulador   
}


function newSome(array, callback){
    let result = false
    for(let i = 0; i<array.length; i++){
        if(callback(array[i], i, array)){
            result = true
            break
        }
    }
    return result
}


function newEvery(array, callback){
    let result = true
    for(let i = 0; i<array.length; i++){
        if(!callback(array[i], i, array)){
            result = false
            break
        }
    }
    return result
}


function newIncludes(array, elemento){
    let result = false
    for(let i = 0; i<array.length; i++){
        if(array[i]===elemento){
            result = true
        }
    }
    return result
}


function newIndexOf(array, elemento, pontoInicial){
    let index = -1
    if(pontoInicial == undefined){pontoInicial=0}
    let i = pontoInicial
    for(;i<array.length; i++){
        if(array[i]===elemento){
            index = i
            break
        }
    }
    return index    
}


function newConcat(array,...valores){
    let newArr = []
    let newValores = [...arguments]
    for(let i = 0 ; i<newValores.length;i++){
        if(typeof newValores[i] === 'number' || typeof newValores[i] === 'string'){
            newArr.push(newValores[i])
        }else{
            let arr = newValores[i]
            for(let j = 0; j<arr.length; j++){
                newArr.push(arr[j])
            }
        }
    }
    return newArr
}

function newJoin(array, separador){
    if(separador==undefined){separador = ','}
    let strResult = String(array[0])
    for(let i = 1; i<array.length; i++){
        strResult += separador+array[i]
    }
    return strResult
}

//   EXTRA:

function newSlice(array, inicio, fim){
    if(inicio==undefined){
        inicio = 0
    }else if(inicio<0){
        inicio = array.length + inicio
    }
    if(fim == undefined){fim = array.length}

    let arrResult = []

    for(let i = inicio; i<fim; i++){
        arrResult.push(array[i])
    }
    return arrResult
}

function newFlat(array, profundidade){
    if(profundidade == undefined){profundidade = 1}
    let arrResult = [...array]
    for(let i = 0; i<profundidade; i++){
        let newArr = [...arrResult]
        arrResult = []
        for(let j = 0 ; j<newArr.length;j++){
            if(typeof newArr[j] === 'number' || typeof newArr[j] === 'string'){
                arrResult.push(newArr[j])
            }else{
                let arr = newArr[j]
                for(let j = 0; j<arr.length; j++){
                    arrResult.push(arr[j])
                }
            }
        }
    }
    return arrResult
}

function newFlatMap(array, callback){
    let arrResult = []
    let newArr = []

    for(let i = 0; i<array.length; i++){
        newArr.push(callback(array[i], i, array))
    }

    for(let j = 0 ; j<newArr.length;j++){
        if(typeof newArr[j] === 'number' || typeof newArr[j] === 'string'){
            arrResult.push(newArr[j])
        }else{
            let arr = newArr[j]
            for(let k = 0; k<arr.length; k++){
                arrResult.push(arr[k])
            }
        }
    }
   return arrResult
}





