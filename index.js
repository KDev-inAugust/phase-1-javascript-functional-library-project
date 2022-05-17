const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

const isObj = (obj) =>{
    return Object.prototype.toString.call(obj) === '[object Object]'
}

function output (n){
    console.log(`${n}`);
}

function myEach(collection, callback){
    if (Array.isArray(collection)===true){
        for (let index of collection){
            callback(index)
        }
    }
    else if(isObj(collection)===true){
        let objToArr = Object.values(collection)
       for (let index of objToArr) {
            callback(index);
       }
    }
        return collection;
}


function myMap (collection, callback){
    const outArr=[];
    if (Array.isArray(collection)===true){
        for (let index of collection){
            let res = callback(index);
            outArr.push(res);
        }
    }
    else if(isObj(collection)===true){
        let objToArr = Object.values(collection)
       for (let index of objToArr) {
           let res = callback(index);
            outArr.push(res);        
       }
    }
    return outArr;
}
//-------------------------my reduce test matos
const testArr = unmodifiedTestArr.slice();
const testObj = Object.assign({}, unmodifiedTestObj);
const callback = (acc, val, collection) => (acc + (val * 3))

//------------------------my reduce---------------------

function myReduce(collection, cb, acc=-2){
    if (Array.isArray(collection)===true){
        for (let index of collection){
            acc=cb(acc, index, collection);
            console.log('index: ' + index);
            console.log('acc: ' + acc);
            
        }
    }
    else if(isObj(collection)===true){
        let objToArr = Object.values(collection)
       for (let index of objToArr) {
        acc=cb(acc, index, collection);
       }
    }
    return acc;
}

//--------------------------myFind------------------

function myFind(collection, predicate){
    if (Array.isArray(collection)===true){
        for (let index of collection){
           if (predicate(index)===true) {
               return index;
           }
        }
    }
    else if(isObj(collection)===true){
        let objToArr = Object.values(collection)
       for (let index of objToArr) {
            if (predicate(index)===true) {
            return index;
        }
       }
    }
}

//-------------------------my filter---------------

function myFilter(collection, predicate){
    let filteredArr =[];
    if (Array.isArray(collection)===true){
        for (let index of collection){
           if (predicate(index)===true) {
            filteredArr.push(index);   
            
           }
        }
    return filteredArr;
    }
    else if(isObj(collection)===true){
        let objToArr = Object.values(collection)
       for (let index of objToArr) {
            if (predicate(index)===true) {
                filteredArr.push(index); 
                
        }
       }
    }
    return filteredArr;
}

//-------------------my size-------------

function mySize(collection){
    let size;
    if (Array.isArray(collection)===true){
        size = collection.length;
    }
    else if(isObj(collection)===true){
        let objToArr = Object.values(collection)
        size = objToArr.length;
       }
    return size;
    }
//----------------my first---------------

function myFirst(array, n=0){
    if(n!=0){
        return array.slice(0,n)
    }
    else return array[0];
}

//----------my last-----------------

function myLast(array, n=0){
    if(n!=0){
        let range=-n;
        console.log(range)
        return array.slice(range, array.length)
        
    }
    else return parseInt(array.slice(-1));
}
//------------my keys----------------

function myKeys(object){
    let arr=[];
    for (let k in object){
        arr.push(k);
    }
    return arr;
}
//-------------my values-------------

function myValues(object){
    let arr=[];
    for (let v in object){
        arr.push(object[v])
    }
    return arr;
}