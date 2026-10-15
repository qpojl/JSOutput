const view = tagfunction`<div>今日の天気は${weather}です。</div>`;

function tagfunction(string, ...values){
    console.log(string);
    console.log(...values);
}


