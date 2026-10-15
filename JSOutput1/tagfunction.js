
const hoge = "ほげ";
const fuga = "ふが";
const view = tagFunction`<div>${hoge}と${fuga}</div>`;

function tagFunction(strings, ...values){
    console.log(strings);
    console.log(values);
    return strings.reduce((result,str,i)=>{
        return result + values[i-1] + str;

    });
}


console.log(view);