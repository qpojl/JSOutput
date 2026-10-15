
const hoge = "ほげ";
const fuga = "ふが";
const view = tagfunction`<div>${hoge}と${fuga}</div>`;

function tagfunction(string, ...values){
    console.log(string);
    console.log(...values);
}


