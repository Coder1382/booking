let count;
let char;
let floorDig;
let floorSelect;
let boothSelect;
let collection={};
function create(){
    floorSelect=document.getElementById('floorSelect');
    for(let i=3; i<28; i++){
        const option=document.createElement('option');
        option.value=`${i}`;
        option.innerHTML=`этаж ${i}`
        option.classList.add('component');
        floorSelect.appendChild(option);
        option.addEventListener('click', ()=>{
            booth(i);
        })
    }
    boothSelect=document.getElementById('boothSelect');
    for(let i=1; i<11; i++){
        const option=document.createElement('option');
        option.value=`${i}`;
        option.innerHTML=`кабина ${i}`
        option.classList.add('component');
        boothSelect.appendChild(option);
        option.addEventListener('click', ()=>{
            document.getElementById('booth').classList.add('hide');
            const textareaLable=document.getElementById('textareaLable');
            textareaLable.innerHTML=`башня ${char}, этаж ${floorDig}, кабина ${i}`;
            document.getElementById('textarea').classList.remove('hide');
            count=4;
            document.getElementById('send').classList.remove('hide');
            document.getElementById('clear').classList.remove('hide');
            collection.кабина=i;
        })
    }
    count=0;
    char='';
    floorDig=0;
}

function booth(i){
    floorDig=i;
    document.getElementById('floor').classList.add('hide');
    const boothLable=document.getElementById('boothLable');
    boothLable.innerHTML=`башня ${char}, этаж ${i}<br/>выберите кабину`;
    document.getElementById('booth').classList.remove('hide');
    count=3;
    collection.этаж=floorDig;
}
function start(){
    const begin=document.getElementById('towerSelect');
    if(begin.classList.contains('hide')){
        begin.classList.remove('hide');
        document.getElementById('towerLable').innerHTML='выберите башню';
        document.getElementById('cancel').classList.remove('hide');
        document.getElementById('back').classList.remove('hide');
        count=1;
    }
}
function floor(chr){
    char=chr;
    document.getElementById('tower').classList.add('hide');
    const floorLable=document.getElementById('floorLable');
    floorLable.innerHTML=`башня ${chr}<br/>выберите этаж`;
    document.getElementById('floor').classList.remove('hide');
    count=2;
    collection.башня=char;
}
function back(){
    if(count===1){
        location.reload();
    }
    else if(count===2){
        document.getElementById('floor').classList.add('hide');
        document.getElementById('tower').classList.remove('hide');
        count=1;
        document.getElementById('floorSelect').getElementsByTagName('option')[0].selected='true';
        document.getElementById('towerSelect').getElementsByTagName('option')[0].selected='true';
        document.getElementById('towerSelect').getElementsByTagName('option')[0].style.backgroundColor='inherit';
        document.getElementById('floorSelect').getElementsByTagName('option')[0].style.backgroundColor='inherit';
        document.getElementById('towerSelect').getElementsByTagName('option')[0].style.color='beige';
        document.getElementById('floorSelect').getElementsByTagName('option')[0].style.color='beige';
    }
    else if(count===3){
        document.getElementById('booth').classList.add('hide');
        document.getElementById('floor').classList.remove('hide');
        count=2;
        document.getElementById('boothSelect').getElementsByTagName('option')[0].selected='true';
        document.getElementById('floorSelect').getElementsByTagName('option')[0].selected='true';
        document.getElementById('boothSelect').getElementsByTagName('option')[0].style.backgroundColor='inherit';
        document.getElementById('floorSelect').getElementsByTagName('option')[0].style.backgroundColor='inherit';
        document.getElementById('boothSelect').getElementsByTagName('option')[0].style.color='beige';
        document.getElementById('floorSelect').getElementsByTagName('option')[0].style.color='beige';
    }
    else if(count===4){
        document.getElementById('textarea').classList.add('hide');
        document.getElementById('booth').classList.remove('hide');
        document.getElementById('send').classList.add('hide');
        document.getElementById('clear').classList.add('hide');
        count=3;
        collection.дата="";
        document.getElementById('date').value="";
        collection.время="";
        document.getElementById('time').value="";
        document.getElementById('boothSelect').getElementsByTagName('option')[0].selected='true';
        document.getElementById('boothSelect').getElementsByTagName('option')[0].style.backgroundColor='inherit';
        document.getElementById('boothSelect').getElementsByTagName('option')[0].style.color='beige';
    }
}
function send(){
    const text=document.getElementById('text').value;
    if(document.getElementById('date').value==="" || document.getElementById('time').value===""){
        alert('выберите дату и время');
    }
    else{
        collection.дата=document.getElementById('date').value;
        collection.время=document.getElementById('time').value;
        if(text!==""){
            collection.комментарий=text;
        }
        console.log(JSON.stringify(collection));
        document.getElementById('date').value="";
        document.getElementById('time').value="";
        document.getElementById('text').value="";
        delete collection['комментарий']; delete collection['дата']; delete collection['время'];
        alert(' ваша форма отправлена');
    }
}