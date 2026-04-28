function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

/* =========================
   🧮 MATH (TRUE UNIQUE)
========================= */
function generateMath() {
    let arr = [];
    let used = new Set();

    let i = 1;

    while (arr.length < 50) {
        let a = Math.floor(Math.random() * 50);
        let b = Math.floor(Math.random() * 50);

        let key = `${a}+${b}`;
        if (used.has(key)) continue;

        used.add(key);

        let ans = a + b;

        arr.push({
            question: `(${i}) What is ${a} + ${b}?`,
            choices: shuffle([
                ans,
                ans + Math.floor(Math.random()*5)+1,
                ans - Math.floor(Math.random()*5)-1,
                ans + Math.floor(Math.random()*10)-5
            ]),
            answer: ans
        });

        i++;
    }

    return arr;
}

/* =========================
   🇬🇧 ENGLISH (VARIED + UNIQUE)
========================= */
function generateEnglish() {
    let arr = [];
    let i = 1;

    let templates = [
        {q:"He ___ happy.", a:"is"},
        {q:"They ___ playing.", a:"are"},
        {q:"I ___ a student.", a:"am"},
        {q:"She ___ my friend.", a:"is"},
        {q:"We ___ ready.", a:"are"}
    ];

    while (arr.length < 50) {
        let t = templates[Math.floor(Math.random()*templates.length)];

        arr.push({
            question: `(${i}) ${t.q}`,
            choices: shuffle(["is","are","am","be"]),
            answer: t.a
        });

        i++;
    }

    return arr;
}

/* =========================
   📜 HISTORY
========================= */
function generateHistory() {
    let arr = [];
    let i = 1;

    let pool = [
        {q:"Who discovered Philippines?", a:"Magellan"},
        {q:"Who is national hero?", a:"Rizal"},
        {q:"Battle of Mactan leader?", a:"Lapu-Lapu"},
        {q:"First president of Philippines?", a:"Aguinaldo"}
    ];

    while (arr.length < 50) {
        let t = pool[Math.floor(Math.random()*pool.length)];

        arr.push({
            question: `(${i}) ${t.q}`,
            choices: shuffle(["Magellan","Rizal","Bonifacio","Lapu-Lapu","Aguinaldo"]),
            answer: t.a
        });

        i++;
    }

    return arr;
}

/* =========================
   ⚡ PHYSICS
========================= */
function generatePhysics() {
    let arr = [];
    let i = 1;

    let pool = [
        {q:"Unit of force?", a:"Newton"},
        {q:"Unit of energy?", a:"Joule"},
        {q:"Unit of power?", a:"Watt"},
        {q:"Unit of voltage?", a:"Volt"}
    ];

    while (arr.length < 50) {
        let t = pool[Math.floor(Math.random()*pool.length)];

        arr.push({
            question: `(${i}) ${t.q}`,
            choices: shuffle(["Newton","Joule","Watt","Volt"]),
            answer: t.a
        });

        i++;
    }

    return arr;
}

function randomizeAnswers(quizArray) {
    return quizArray.map(q => {
        let shuffled = shuffle([...q.choices]);

        return {
            ...q,
            choices: shuffled,
            answer: q.answer
        };
    });
}

/* =========================
   🔧 MECHANICS
========================= */
function generateMechanics() {
    let arr = [];
    let i = 1;

    let pool = [
        {q:"Tool for tightening bolts?", a:"Wrench"},
        {q:"Tool for cutting wood?", a:"Saw"},
        {q:"Tool for hitting nails?", a:"Hammer"},
        {q:"Tool for gripping?", a:"Pliers"}
    ];

    while (arr.length < 50) {
        let t = pool[Math.floor(Math.random()*pool.length)];

        arr.push({
            question: `(${i}) ${t.q}`,
            choices: shuffle(["Wrench","Hammer","Saw","Pliers"]),
            answer: t.a
        });

        i++;
    }

    return arr;
}

/* =========================
   🚀 FINAL DATA
========================= */
window.quizData = {
    math: {
       easy: randomizeAnswers
       ([
{question:" 12 + 8?", choices:["20","18","22","16"], answer:"20"},
{question:" 15 + 9?", choices:["24","23","25","22"], answer:"24"},
{question:" 7 × 6?", choices:["42","40","44","38"], answer:"42"},
{question:" 36 ÷ 6?", choices:["6","5","7","8"], answer:"6"},
{question:" 18 + 14?", choices:["32","30","34","28"], answer:"32"},

{question:" 45 - 19?", choices:["26","25","27","24"], answer:"26"},
{question:" 9 × 7?", choices:["63","60","65","58"], answer:"63"},
{question:" 64 ÷ 8?", choices:["8","7","9","6"], answer:"8"},
{question:" 25 + 17?", choices:["42","40","44","38"], answer:"42"},
{question:" 81 ÷ 9?", choices:["9","8","10","7"], answer:"9"},

{question:" 14 × 3?", choices:["42","40","44","36"], answer:"42"},
{question:" 50 - 23?", choices:["27","25","30","20"], answer:"27"},
{question:" 16 + 19?", choices:["35","34","36","33"], answer:"35"},
{question:" 72 ÷ 6?", choices:["12","10","14","11"], answer:"12"},
{question:" 8 × 9?", choices:["72","70","75","68"], answer:"72"},

{question:" 11 + 13?", choices:["24","22","26","20"], answer:"24"},
{question:" 30 ÷ 5?", choices:["6","5","7","8"], answer:"6"},
{question:" 44 - 18?", choices:["26","25","27","24"], answer:"26"},
{question:" 6 × 8?", choices:["48","46","50","44"], answer:"48"},
{question:" 90 ÷ 10?", choices:["9","8","10","7"], answer:"9"},

{question:" 13 × 4?", choices:["52","50","54","48"], answer:"52"},
{question:" 100 - 45?", choices:["55","50","60","45"], answer:"55"},
{question:" 22 + 16?", choices:["38","36","40","34"], answer:"38"},
{question:" 81 ÷ 3?", choices:["27","25","30","24"], answer:"27"},
{question:" 7 × 8?", choices:["56","54","58","52"], answer:"56"},

{question:" 19 + 21?", choices:["40","38","42","36"], answer:"40"},
{question:" 60 - 17?", choices:["43","40","45","42"], answer:"43"},
{question:" 5 × 9?", choices:["45","40","50","35"], answer:"45"},
{question:" 36 ÷ 4?", choices:["9","8","10","7"], answer:"9"},
{question:" 14 + 18?", choices:["32","30","34","28"], answer:"32"},

{question:" 27 + 13?", choices:["40","38","42","36"], answer:"40"},
{question:" 80 - 32?", choices:["48","45","50","40"], answer:"48"},
{question:" 9 × 9?", choices:["81","80","82","78"], answer:"81"},
{question:" 100 ÷ 4?", choices:["25","20","30","15"], answer:"25"},
{question:" 16 × 2?", choices:["32","30","34","28"], answer:"32"},

{question:" 21 + 19?", choices:["40","38","42","36"], answer:"40"},
{question:" 55 - 29?", choices:["26","25","27","24"], answer:"26"},
{question:" 8 × 7?", choices:["56","54","58","52"], answer:"56"},
{question:" 72 ÷ 8?", choices:["9","8","10","7"], answer:"9"},
{question:" 33 + 17?", choices:["50","48","52","45"], answer:"50"},

{question:" 90 - 38?", choices:["52","50","55","45"], answer:"52"},
{question:" 6 × 6?", choices:["36","35","38","34"], answer:"36"},
{question:" 45 ÷ 5?", choices:["9","8","10","7"], answer:"9"},
{question:" 28 + 12?", choices:["40","38","42","36"], answer:"40"},
{question:" 70 - 25?", choices:["45","40","50","35"], answer:"45"},

{question:" 11 × 3?", choices:["33","30","36","28"], answer:"33"},
{question:" 64 ÷ 4?", choices:["16","15","18","14"], answer:"16"},
{question:" 23 + 19?", choices:["42","40","44","38"], answer:"42"},
{question:" 88 - 48?", choices:["40","38","42","36"], answer:"40"},
{question:" 5 × 8?", choices:["40","38","42","36"], answer:"40"}
    // 👉 paste tanan 50 diri
]),

medium: randomizeAnswers

        ([
{question:" 24 + 36?", choices:["60","58","62","56"], answer:"60"},
{question:" 45 + 27?", choices:["72","70","74","68"], answer:"72"},
{question:" 56 - 19?", choices:["37","35","39","33"], answer:"37"},
{question:" 72 - 28?", choices:["44","42","46","40"], answer:"44"},
{question:" 12 × 8?", choices:["96","92","100","88"], answer:"96"},

{question:" 15 × 7?", choices:["105","100","110","95"], answer:"105"},
{question:" 81 ÷ 9?", choices:["9","8","10","7"], answer:"9"},
{question:" 144 ÷ 12?", choices:["12","10","14","11"], answer:"12"},
{question:" 33 + 47?", choices:["80","78","82","76"], answer:"80"},
{question:" 68 + 29?", choices:["97","95","99","93"], answer:"97"},

{question:" 90 - 45?", choices:["45","44","46","43"], answer:"45"},
{question:" 120 - 75?", choices:["45","40","50","35"], answer:"45"},
{question:" 18 × 6?", choices:["108","104","112","100"], answer:"108"},
{question:" 25 × 4?", choices:["100","95","105","90"], answer:"100"},
{question:" 200 ÷ 5?", choices:["40","35","45","30"], answer:"40"},

{question:" 180 ÷ 6?", choices:["30","28","32","26"], answer:"30"},
{question:" 48 + 52?", choices:["100","98","102","96"], answer:"100"},
{question:" 75 + 25?", choices:["100","95","105","90"], answer:"100"},
{question:" 64 × 2?", choices:["128","120","130","124"], answer:"128"},
{question:" 90 × 3?", choices:["270","260","280","250"], answer:"270"},

{question:" 300 ÷ 10?", choices:["30","28","32","26"], answer:"30"},
{question:" 225 ÷ 5?", choices:["45","40","50","35"], answer:"45"},
{question:" 44 + 38?", choices:["82","80","84","78"], answer:"82"},
{question:" 67 + 19?", choices:["86","84","88","82"], answer:"86"},
{question:" 92 - 37?", choices:["55","53","57","51"], answer:"55"},

{question:" 150 - 65?", choices:["85","80","90","75"], answer:"85"},
{question:" 14 × 9?", choices:["126","120","130","115"], answer:"126"},
{question:" 16 × 7?", choices:["112","108","116","104"], answer:"112"},
{question:" 360 ÷ 12?", choices:["30","28","32","26"], answer:"30"},
{question:" 420 ÷ 7?", choices:["60","55","65","50"], answer:"60"},

{question:" 88 + 14?", choices:["102","100","104","98"], answer:"102"},
{question:" 95 + 18?", choices:["113","110","115","108"], answer:"113"},
{question:" 100 - 48?", choices:["52","50","54","46"], answer:"52"},
{question:" 130 - 75?", choices:["55","50","60","45"], answer:"55"},
{question:" 11 × 11?", choices:["121","120","122","119"], answer:"121"},

{question:" 13 × 12?", choices:["156","150","160","140"], answer:"156"},
{question:" 240 ÷ 8?", choices:["30","28","32","26"], answer:"30"},
{question:" 360 ÷ 9?", choices:["40","38","42","36"], answer:"40"},
{question:" 55 + 45?", choices:["100","98","102","96"], answer:"100"},
{question:" 77 + 33?", choices:["110","108","112","106"], answer:"110"},

{question:" 150 - 90?", choices:["60","55","65","50"], answer:"60"},
{question:" 200 - 120?", choices:["80","75","85","70"], answer:"80"},
{question:" 21 × 4?", choices:["84","80","88","76"], answer:"84"},
{question:" 18 × 5?", choices:["90","85","95","80"], answer:"90"},
{question:" 500 ÷ 25?", choices:["20","18","22","16"], answer:"20"},

{question:" 640 ÷ 32?", choices:["20","18","22","16"], answer:"20"},
{question:" 45 + 55?", choices:["100","98","102","96"], answer:"100"},
{question:" 62 + 38?", choices:["100","98","102","96"], answer:"100"},
{question:" 84 - 29?", choices:["55","53","57","51"], answer:"55"},
{question:" 73 - 18?", choices:["55","53","57","51"], answer:"55"}
]),
        
    
hard: randomizeAnswers

([
{question:" 125 + 378?", choices:["503","500","505","498"], answer:"503"},
{question:" 864 - 297?", choices:["567","560","570","550"], answer:"567"},
{question:" 48 × 12?", choices:["576","560","580","540"], answer:"576"},
{question:" 144 ÷ 12?", choices:["12","10","14","11"], answer:"12"},
{question:" 225 ÷ 15?", choices:["15","14","16","13"], answer:"15"},

{question:" 36 × 24?", choices:["864","850","870","840"], answer:"864"},
{question:" 512 ÷ 8?", choices:["64","60","66","62"], answer:"64"},
{question:" 729 ÷ 9?", choices:["81","80","82","78"], answer:"81"},
{question:" 45 × 17?", choices:["765","750","770","740"], answer:"765"},
{question:" 96 × 14?", choices:["1344","1300","1360","1320"], answer:"1344"},

{question:" 1024 ÷ 16?", choices:["64","60","68","62"], answer:"64"},
{question:" 81 × 9?", choices:["729","720","730","710"], answer:"729"},
{question:" 625 ÷ 25?", choices:["25","24","26","23"], answer:"25"},
{question:" 72 × 18?", choices:["1296","1280","1300","1260"], answer:"1296"},
{question:" 84 × 15?", choices:["1260","1240","1280","1200"], answer:"1260"},

{question:" 945 ÷ 15?", choices:["63","60","65","62"], answer:"63"},
{question:" 384 ÷ 12?", choices:["32","30","34","28"], answer:"32"},
{question:" 63 × 27?", choices:["1701","1680","1720","1650"], answer:"1701"},
{question:" 144 × 11?", choices:["1584","1500","1600","1550"], answer:"1584"},
{question:" 999 + 876?", choices:["1875","1850","1900","1800"], answer:"1875"},

{question:" 1200 - 875?", choices:["325","300","350","280"], answer:"325"},
{question:" 36²?", choices:["1296","1200","1300","1250"], answer:"1296"},
{question:" 25²?", choices:["625","600","650","550"], answer:"625"},
{question:" 18²?", choices:["324","320","330","310"], answer:"324"},
{question:" 14²?", choices:["196","190","200","180"], answer:"196"},

{question:" 144 ÷ 6?", choices:["24","22","26","20"], answer:"24"},
{question:" 288 ÷ 9?", choices:["32","30","34","28"], answer:"32"},
{question:" 81 × 12?", choices:["972","950","980","940"], answer:"972"},
{question:" 72 × 25?", choices:["1800","1750","1850","1700"], answer:"1800"},
{question:" 64 × 32?", choices:["2048","2000","2100","1980"], answer:"2048"},

{question:" 4096 ÷ 64?", choices:["64","60","66","62"], answer:"64"},
{question:" 500 × 6?", choices:["3000","2900","3100","2800"], answer:"3000"},
{question:" 375 × 4?", choices:["1500","1400","1600","1450"], answer:"1500"},
{question:" 102 × 15?", choices:["1530","1500","1550","1480"], answer:"1530"},
{question:" 99 × 99?", choices:["9801","9700","9900","9600"], answer:"9801"},

{question:" 2500 ÷ 50?", choices:["50","48","52","45"], answer:"50"},
{question:" 1000 ÷ 25?", choices:["40","38","42","36"], answer:"40"},
{question:" 144 × 25?", choices:["3600","3500","3700","3400"], answer:"3600"},
{question:" 75 × 16?", choices:["1200","1100","1300","1150"], answer:"1200"},
{question:" 88 × 23?", choices:["2024","2000","2100","1950"], answer:"2024"},

{question:" 3600 ÷ 12?", choices:["300","280","320","260"], answer:"300"},
{question:" 840 ÷ 7?", choices:["120","110","130","100"], answer:"120"},
{question:" 999 × 2?", choices:["1998","2000","1980","1950"], answer:"1998"},
{question:" 1500 - 875?", choices:["625","600","650","580"], answer:"625"},
{question:" 144 × 12?", choices:["1728","1700","1750","1680"], answer:"1728"},

{question:" 72 × 14?", choices:["1008","980","1020","960"], answer:"1008"},
{question:" 225 × 8?", choices:["1800","1750","1850","1700"], answer:"1800"},
{question:" 640 ÷ 16?", choices:["40","38","42","36"], answer:"40"},
{question:" 121 × 11?", choices:["1331","1300","1350","1280"], answer:"1331"},
{question:" 625 × 2?", choices:["1250","1200","1300","1150"], answer:"1250"}
])
    },

    english: {
        easy: randomizeAnswers([
{question:"He ___ happy.", choices:["is","are","am","be"], answer:"is"},
{question:"They ___ playing.", choices:["are","is","am","be"], answer:"are"},
{question:"I ___ a student.", choices:["am","is","are","be"], answer:"am"},
{question:"She ___ my friend.", choices:["is","are","am","be"], answer:"is"},
{question:"We ___ ready.", choices:["are","is","am","be"], answer:"are"},

{question:"The dog ___ barking.", choices:["is","are","am","be"], answer:"is"},
{question:"I ___ tired.", choices:["am","is","are","be"], answer:"am"},
{question:"They ___ in school.", choices:["are","is","am","be"], answer:"are"},
{question:"He ___ running.", choices:["is","are","am","be"], answer:"is"},
{question:"We ___ friends.", choices:["are","is","am","be"], answer:"are"},

{question:"She ___ cooking.", choices:["is","are","am","be"], answer:"is"},
{question:"I ___ hungry.", choices:["am","is","are","be"], answer:"am"},
{question:"They ___ late.", choices:["are","is","am","be"], answer:"are"},
{question:"He ___ tall.", choices:["is","are","am","be"], answer:"is"},
{question:"We ___ happy.", choices:["are","is","am","be"], answer:"are"},

{question:"It ___ raining.", choices:["is","are","am","be"], answer:"is"},
{question:"I ___ ready.", choices:["am","is","are","be"], answer:"am"},
{question:"They ___ tired.", choices:["are","is","am","be"], answer:"are"},
{question:"She ___ smiling.", choices:["is","are","am","be"], answer:"is"},
{question:"We ___ early.", choices:["are","is","am","be"], answer:"are"},

{question:"He ___ at home.", choices:["is","are","am","be"], answer:"is"},
{question:"I ___ excited.", choices:["am","is","are","be"], answer:"am"},
{question:"They ___ working.", choices:["are","is","am","be"], answer:"are"},
{question:"She ___ kind.", choices:["is","are","am","be"], answer:"is"},
{question:"We ___ strong.", choices:["are","is","am","be"], answer:"are"},

{question:"It ___ hot.", choices:["is","are","am","be"], answer:"is"},
{question:"I ___ busy.", choices:["am","is","are","be"], answer:"am"},
{question:"They ___ fast.", choices:["are","is","am","be"], answer:"are"},
{question:"He ___ smart.", choices:["is","are","am","be"], answer:"is"},
{question:"We ___ cool.", choices:["are","is","am","be"], answer:"are"},

{question:"She ___ dancing.", choices:["is","are","am","be"], answer:"is"},
{question:"I ___ calm.", choices:["am","is","are","be"], answer:"am"},
{question:"They ___ loud.", choices:["are","is","am","be"], answer:"are"},
{question:"He ___ strong.", choices:["is","are","am","be"], answer:"is"},
{question:"We ___ calm.", choices:["are","is","am","be"], answer:"are"},

{question:"It ___ cold.", choices:["is","are","am","be"], answer:"is"},
{question:"I ___ okay.", choices:["am","is","are","be"], answer:"am"},
{question:"They ___ nice.", choices:["are","is","am","be"], answer:"are"},
{question:"She ___ here.", choices:["is","are","am","be"], answer:"is"},
{question:"We ___ okay.", choices:["are","is","am","be"], answer:"are"},

{question:"He ___ funny.", choices:["is","are","am","be"], answer:"is"},
{question:"I ___ fine.", choices:["am","is","are","be"], answer:"am"},
{question:"They ___ ready.", choices:["are","is","am","be"], answer:"are"},
{question:"She ___ happy.", choices:["is","are","am","be"], answer:"is"},
{question:"We ___ together.", choices:["are","is","am","be"], answer:"are"}
]),

medium: randomizeAnswers

        ([
{question:"She ___ to school yesterday.", choices:["went","go","going","goes"], answer:"went"},
{question:"They ___ playing now.", choices:["are","is","am","be"], answer:"are"},
{question:"I ___ my homework already.", choices:["finished","finish","finishing","finishes"], answer:"finished"},
{question:"He ___ football every day.", choices:["plays","play","playing","played"], answer:"plays"},
{question:"We ___ dinner last night.", choices:["ate","eat","eating","eats"], answer:"ate"},

{question:"She ___ a book now.", choices:["is reading","read","reads","reading"], answer:"is reading"},
{question:"They ___ to the market.", choices:["went","go","going","goes"], answer:"went"},
{question:"I ___ coffee every morning.", choices:["drink","drinks","drank","drinking"], answer:"drink"},
{question:"He ___ his work yesterday.", choices:["finished","finish","finishes","finishing"], answer:"finished"},
{question:"We ___ watching TV.", choices:["are","is","am","be"], answer:"are"},

{question:"She ___ singing.", choices:["is","are","am","be"], answer:"is"},
{question:"They ___ their lesson.", choices:["studied","study","studies","studying"], answer:"studied"},
{question:"I ___ a letter.", choices:["write","writes","wrote","writing"], answer:"write"},
{question:"He ___ at home.", choices:["stays","stay","stayed","staying"], answer:"stays"},
{question:"We ___ outside.", choices:["played","play","plays","playing"], answer:"played"},

{question:"She ___ the answer.", choices:["knows","know","knew","knowing"], answer:"knows"},
{question:"They ___ early.", choices:["arrived","arrive","arrives","arriving"], answer:"arrived"},
{question:"I ___ a game.", choices:["play","plays","played","playing"], answer:"play"},
{question:"He ___ his friend.", choices:["called","call","calls","calling"], answer:"called"},
{question:"We ___ a movie.", choices:["watched","watch","watches","watching"], answer:"watched"},

{question:"She ___ a cake.", choices:["baked","bake","bakes","baking"], answer:"baked"},
{question:"They ___ fast.", choices:["ran","run","runs","running"], answer:"ran"},
{question:"I ___ late.", choices:["arrived","arrive","arrives","arriving"], answer:"arrived"},
{question:"He ___ a letter.", choices:["sent","send","sends","sending"], answer:"sent"},
{question:"We ___ a house.", choices:["built","build","builds","building"], answer:"built"},

{question:"She ___ her bag.", choices:["lost","lose","loses","losing"], answer:"lost"},
{question:"They ___ a car.", choices:["bought","buy","buys","buying"], answer:"bought"},
{question:"I ___ a song.", choices:["sang","sing","sings","singing"], answer:"sang"},
{question:"He ___ the door.", choices:["opened","open","opens","opening"], answer:"opened"},
{question:"We ___ the test.", choices:["passed","pass","passes","passing"], answer:"passed"}
]),
        hard: randomizeAnswers([
{question:"If I ___ you, I would study.", choices:["were","was","am","be"], answer:"were"},
{question:"She ___ finished her work.", choices:["has","have","had","having"], answer:"has"},
{question:"They ___ been waiting.", choices:["have","has","had","having"], answer:"have"},
{question:"He ___ to the gym daily.", choices:["goes","go","going","went"], answer:"goes"},
{question:"We ___ already eaten.", choices:["have","has","had","having"], answer:"have"},

{question:"She ___ a doctor.", choices:["is","are","am","be"], answer:"is"},
{question:"They ___ playing football.", choices:["are","is","am","be"], answer:"are"},
{question:"I ___ never seen that.", choices:["have","has","had","having"], answer:"have"},
{question:"He ___ completed the task.", choices:["has","have","had","having"], answer:"has"},
{question:"We ___ planning a trip.", choices:["are","is","am","be"], answer:"are"},

{question:"She ___ been here before.", choices:["has","have","had","having"], answer:"has"},
{question:"They ___ studying hard.", choices:["are","is","am","be"], answer:"are"},
{question:"I ___ working all day.", choices:["have been","has been","had been","being"], answer:"have been"},
{question:"He ___ tired now.", choices:["is","are","am","be"], answer:"is"},
{question:"We ___ finished early.", choices:["have","has","had","having"], answer:"have"},

{question:"She ___ gone home.", choices:["has","have","had","having"], answer:"has"},
{question:"They ___ eating lunch.", choices:["are","is","am","be"], answer:"are"},
{question:"I ___ already done it.", choices:["have","has","had","having"], answer:"have"},
{question:"He ___ not ready.", choices:["is","are","am","be"], answer:"is"},
{question:"We ___ waiting long.", choices:["have been","has been","had been","being"], answer:"have been"}
])
    },

    history: {
        easy: randomizeAnswers([
{question:"Who discovered the Philippines?", choices:["Magellan","Rizal","Bonifacio","Aguinaldo"], answer:"Magellan"},
{question:"Who is the national hero?", choices:["Rizal","Bonifacio","Aguinaldo","Quezon"], answer:"Rizal"},
{question:"Who fought Magellan?", choices:["Lapu-Lapu","Rizal","Bonifacio","Aguinaldo"], answer:"Lapu-Lapu"},
{question:"First president of Philippines?", choices:["Aguinaldo","Quezon","Rizal","Marcos"], answer:"Aguinaldo"},
{question:"Capital of Philippines?", choices:["Manila","Cebu","Davao","Iloilo"], answer:"Manila"},

{question:"Who founded Katipunan?", choices:["Bonifacio","Rizal","Aguinaldo","Quezon"], answer:"Bonifacio"},
{question:"Who wrote Noli Me Tangere?", choices:["Rizal","Bonifacio","Aguinaldo","Quezon"], answer:"Rizal"},
{question:"Where did Magellan die?", choices:["Mactan","Manila","Cebu","Davao"], answer:"Mactan"},
{question:"Philippine currency?", choices:["Peso","Dollar","Yen","Euro"], answer:"Peso"},
{question:"Continent of Philippines?", choices:["Asia","Europe","Africa","America"], answer:"Asia"},

{question:"Who declared independence?", choices:["Aguinaldo","Rizal","Bonifacio","Quezon"], answer:"Aguinaldo"},
{question:"Year independence declared?", choices:["1898","1900","1945","1800"], answer:"1898"},
{question:"Largest ocean?", choices:["Pacific","Atlantic","Indian","Arctic"], answer:"Pacific"},
{question:"Who was Rizal?", choices:["Hero","President","General","Governor"], answer:"Hero"},
{question:"WWII ended?", choices:["1945","1939","1918","1960"], answer:"1945"},

{question:"Leader of Nazi Germany?", choices:["Hitler","Stalin","Churchill","Roosevelt"], answer:"Hitler"},
{question:"Capital of Japan?", choices:["Tokyo","Osaka","Kyoto","Nagoya"], answer:"Tokyo"},
{question:"First man on moon?", choices:["Neil Armstrong","Aldrin","Gagarin","Musk"], answer:"Neil Armstrong"},
{question:"Who discovered America?", choices:["Columbus","Magellan","Cook","Drake"], answer:"Columbus"},
{question:"Largest country?", choices:["Russia","USA","China","Canada"], answer:"Russia"},

{question:"16th US president?", choices:["Lincoln","Washington","Obama","Trump"], answer:"Lincoln"},
{question:"WWI started?", choices:["1914","1900","1920","1930"], answer:"1914"},
{question:"Pyramids built by?", choices:["Egyptians","Romans","Greeks","Chinese"], answer:"Egyptians"},
{question:"Cleopatra was?", choices:["Queen","General","Scientist","Writer"], answer:"Queen"},
{question:"Caesar belonged to?", choices:["Rome","Greece","Egypt","China"], answer:"Rome"},

{question:"Oldest civilization?", choices:["Mesopotamia","Rome","Greece","China"], answer:"Mesopotamia"},
{question:"First US president?", choices:["Washington","Lincoln","Adams","Jefferson"], answer:"Washington"},
{question:"Battle of Mactan leader?", choices:["Lapu-Lapu","Rizal","Bonifacio","Aguinaldo"], answer:"Lapu-Lapu"},
{question:"Spanish colonized PH?", choices:["Spain","USA","Japan","China"], answer:"Spain"},
{question:"Year Magellan arrived?", choices:["1521","1500","1600","1700"], answer:"1521"},

{question:"Who was Bonifacio?", choices:["Leader","Doctor","Writer","King"], answer:"Leader"},
{question:"Who was Quezon?", choices:["President","Hero","General","Explorer"], answer:"President"},
{question:"What is Katipunan?", choices:["Revolution group","School","Army","Church"], answer:"Revolution group"},
{question:"First PH republic?", choices:["Malolos","Manila","Cebu","Davao"], answer:"Malolos"},
{question:"Capital of USA?", choices:["Washington DC","New York","LA","Chicago"], answer:"Washington DC"},

{question:"Who was Napoleon?", choices:["General","King","Scientist","Explorer"], answer:"General"},
{question:"What war ended 1918?", choices:["WWI","WWII","Cold War","Vietnam"], answer:"WWI"},
{question:"What war ended 1945?", choices:["WWII","WWI","Cold War","Vietnam"], answer:"WWII"},
{question:"Who led USSR?", choices:["Stalin","Hitler","Churchill","Roosevelt"], answer:"Stalin"},
{question:"Cold War was?", choices:["Tension","Hot war","Civil war","Trade"], answer:"Tension"},

{question:"Renaissance means?", choices:["Rebirth","War","Trade","Empire"], answer:"Rebirth"},
{question:"Mona Lisa painter?", choices:["Da Vinci","Picasso","Van Gogh","Michelangelo"], answer:"Da Vinci"},
{question:"Roman leader?", choices:["Caesar","Alexander","Napoleon","Genghis"], answer:"Caesar"},
{question:"Mongol leader?", choices:["Genghis Khan","Caesar","Napoleon","Alexander"], answer:"Genghis Khan"},
{question:"Feudalism is?", choices:["System","War","Trade","Religion"], answer:"System"}
]),
        medium: randomizeAnswers([
{question:"Philippine independence declared in?", choices:["1898","1900","1945","1800"], answer:"1898"},
{question:"Aguinaldo role?", choices:["President","Hero","Doctor","Writer"], answer:"President"},
{question:"Katipunan purpose?", choices:["Revolution","School","Church","Trade"], answer:"Revolution"},
{question:"Bonifacio known as?", choices:["Supremo","President","Doctor","King"], answer:"Supremo"},
{question:"Independence place?", choices:["Kawit","Manila","Cebu","Davao"], answer:"Kawit"},

{question:"WWII ended?", choices:["1945","1939","1918","1960"], answer:"1945"},
{question:"WWI started?", choices:["1914","1900","1920","1930"], answer:"1914"},
{question:"Cold War type?", choices:["Political tension","War","Trade","Religion"], answer:"Political tension"},
{question:"Leader USA WWII?", choices:["Roosevelt","Lincoln","Trump","Obama"], answer:"Roosevelt"},
{question:"Leader UK WWII?", choices:["Churchill","Hitler","Stalin","Roosevelt"], answer:"Churchill"},

{question:"Renaissance meaning?", choices:["Rebirth","War","Trade","Empire"], answer:"Rebirth"},
{question:"Da Vinci known for?", choices:["Mona Lisa","War","Science","King"], answer:"Mona Lisa"},
{question:"Caesar role?", choices:["Leader","Doctor","Writer","Scientist"], answer:"Leader"},
{question:"Largest empire?", choices:["British","Roman","Greek","Ottoman"], answer:"British"},
{question:"Genghis Khan was?", choices:["Leader","King","Scientist","Explorer"], answer:"Leader"},

{question:"Feudalism?", choices:["Social system","War","Trade","Religion"], answer:"Social system"},
{question:"Alexander known as?", choices:["Conqueror","King","Scientist","Writer"], answer:"Conqueror"},
{question:"Democracy?", choices:["People rule","King rule","Army rule","None"], answer:"People rule"},
{question:"Monarchy?", choices:["King rule","People rule","Army rule","None"], answer:"King rule"},
{question:"Martin Luther?", choices:["Reformer","King","Soldier","Scientist"], answer:"Reformer"},

{question:"Reformation?", choices:["Religious change","War","Trade","Empire"], answer:"Religious change"},
{question:"Industrial Revolution?", choices:["Tech growth","War","Trade","Religion"], answer:"Tech growth"},
{question:"Started in?", choices:["Britain","USA","China","France"], answer:"Britain"},
{question:"Imperialism?", choices:["Control lands","Trade","Religion","War"], answer:"Control lands"},
{question:"Spain colonized PH year?", choices:["1565","1500","1600","1700"], answer:"1565"},

{question:"WWI ended?", choices:["1918","1914","1945","1960"], answer:"1918"},
{question:"Treaty of Versailles?", choices:["Peace treaty","War","Trade","Law"], answer:"Peace treaty"},
{question:"Hitler role?", choices:["Leader","King","Scientist","Doctor"], answer:"Leader"},
{question:"Mussolini?", choices:["Italian leader","German leader","US leader","UK leader"], answer:"Italian leader"},
{question:"Karl Marx?", choices:["Philosopher","King","General","Explorer"], answer:"Philosopher"},

{question:"Capitalism?", choices:["Private economy","War","Religion","Trade"], answer:"Private economy"},
{question:"Communism?", choices:["Economic system","War","Religion","Trade"], answer:"Economic system"},
{question:"Mao Zedong?", choices:["Leader","Scientist","King","Doctor"], answer:"Leader"},
{question:"WWII cause?", choices:["Treaty issues","Religion","Trade","Science"], answer:"Treaty issues"},
{question:"Holocaust?", choices:["Mass killing","War","Trade","Religion"], answer:"Mass killing"},

{question:"Napoleon known for?", choices:["War","Science","Trade","Religion"], answer:"War"},
{question:"Roman Empire?", choices:["Ancient empire","Modern","Asian","None"], answer:"Ancient empire"},
{question:"Greek civilization?", choices:["Ancient","Modern","Asian","None"], answer:"Ancient"},
{question:"Egypt civilization?", choices:["Ancient","Modern","Asian","None"], answer:"Ancient"},
{question:"China civilization?", choices:["Ancient","Modern","European","None"], answer:"Ancient"}
]),
        hard: randomizeAnswers([
{question:"Cause of WWI?", choices:["Assassination","Trade","Religion","Science"], answer:"Assassination"},
{question:"Franz Ferdinand?", choices:["Archduke","King","Soldier","Scientist"], answer:"Archduke"},
{question:"Versailles treaty?", choices:["Peace treaty","War","Law","Trade"], answer:"Peace treaty"},
{question:"Cause WWII?", choices:["Treaty issues","Religion","Trade","Science"], answer:"Treaty issues"},
{question:"Germany leader WWII?", choices:["Hitler","Stalin","Churchill","Roosevelt"], answer:"Hitler"},

{question:"Holocaust?", choices:["Mass killing","War","Trade","Religion"], answer:"Mass killing"},
{question:"Mussolini?", choices:["Italian leader","German","US","UK"], answer:"Italian leader"},
{question:"Communism?", choices:["Economic system","War","Religion","Trade"], answer:"Economic system"},
{question:"Karl Marx?", choices:["Philosopher","King","General","Explorer"], answer:"Philosopher"},
{question:"Capitalism?", choices:["Private economy","War","Religion","Trade"], answer:"Private economy"},

{question:"Mao Zedong?", choices:["Chinese leader","Japanese","Korean","Vietnam"], answer:"Chinese leader"},
{question:"Industrial Revolution?", choices:["Tech growth","War","Trade","Religion"], answer:"Tech growth"},
{question:"Started where?", choices:["Britain","USA","China","France"], answer:"Britain"},
{question:"Imperialism?", choices:["Control lands","Trade","Religion","War"], answer:"Control lands"},
{question:"Spain colonized PH?", choices:["1565","1500","1600","1700"], answer:"1565"},

{question:"Dictatorship?", choices:["One ruler","People","Army","None"], answer:"One ruler"},
{question:"Marcos?", choices:["President","King","General","Hero"], answer:"President"},
{question:"Martial law?", choices:["Military rule","Freedom","Election","Trade"], answer:"Military rule"},
{question:"Cold War?", choices:["Tension","Hot war","Civil war","Trade"], answer:"Tension"},
{question:"UN founded?", choices:["1945","1939","1918","1960"], answer:"1945"},

{question:"League of Nations?", choices:["Organization","War","Trade","Religion"], answer:"Organization"},
{question:"Roman Empire fall?", choices:["476 AD","1000","1500","1800"], answer:"476 AD"},
{question:"Greek golden age?", choices:["Athens","Rome","Egypt","China"], answer:"Athens"},
{question:"Egypt ruler?", choices:["Pharaoh","King","President","Chief"], answer:"Pharaoh"},
{question:"Mesopotamia known as?", choices:["Cradle of civilization","Empire","War","Trade"], answer:"Cradle of civilization"},

/* 🔥 ADDITIONAL 25 QUESTIONS BELOW */

{question:"Who led Soviet Union in WWII?", choices:["Stalin","Hitler","Churchill","Roosevelt"], answer:"Stalin"},
{question:"Who was Winston Churchill?", choices:["UK Prime Minister","US President","German Leader","Russian Leader"], answer:"UK Prime Minister"},
{question:"Who dropped atomic bomb?", choices:["USA","Germany","Japan","Russia"], answer:"USA"},
{question:"What city was bombed first?", choices:["Hiroshima","Tokyo","Osaka","Kyoto"], answer:"Hiroshima"},
{question:"Second bomb city?", choices:["Nagasaki","Tokyo","Osaka","Kyoto"], answer:"Nagasaki"},

{question:"Who was first Roman emperor?", choices:["Augustus","Caesar","Nero","Marcus"], answer:"Augustus"},
{question:"Who built Great Wall?", choices:["China","Japan","India","Korea"], answer:"China"},
{question:"Who was Qin Shi Huang?", choices:["Chinese emperor","Japanese king","Roman leader","Greek king"], answer:"Chinese emperor"},
{question:"What was Silk Road?", choices:["Trade route","War","Empire","Religion"], answer:"Trade route"},
{question:"Who was Alexander the Great?", choices:["Macedonian king","Roman emperor","Greek god","Scientist"], answer:"Macedonian king"},

{question:"Where was Babylon?", choices:["Mesopotamia","Egypt","China","India"], answer:"Mesopotamia"},
{question:"Who was Hammurabi?", choices:["King","General","Scientist","Explorer"], answer:"King"},
{question:"What is Hammurabi Code?", choices:["Law","War","Trade","Religion"], answer:"Law"},
{question:"Who was Socrates?", choices:["Philosopher","King","General","Explorer"], answer:"Philosopher"},
{question:"Who was Plato?", choices:["Philosopher","King","General","Explorer"], answer:"Philosopher"},

{question:"Who was Aristotle?", choices:["Philosopher","King","General","Explorer"], answer:"Philosopher"},
{question:"Who was Leonardo da Vinci?", choices:["Artist","King","General","Explorer"], answer:"Artist"},
{question:"What is Renaissance?", choices:["Rebirth","War","Trade","Empire"], answer:"Rebirth"},
{question:"Who was Michelangelo?", choices:["Artist","King","General","Explorer"], answer:"Artist"},
{question:"Who was Galileo?", choices:["Scientist","King","General","Explorer"], answer:"Scientist"},

{question:"What did Galileo study?", choices:["Astronomy","Biology","Math","Chemistry"], answer:"Astronomy"},
{question:"Who was Isaac Newton?", choices:["Scientist","King","General","Explorer"], answer:"Scientist"},
{question:"What is Enlightenment?", choices:["Idea movement","War","Trade","Empire"], answer:"Idea movement"},
{question:"Who was John Locke?", choices:["Philosopher","King","General","Explorer"], answer:"Philosopher"},
{question:"Who was Voltaire?", choices:["Philosopher","King","General","Explorer"], answer:"Philosopher"}
])
    },

    physics: {
        easy: randomizeAnswers([
{question:"Unit of force?", choices:["Newton","Joule","Watt","Volt"], answer:"Newton"},
{question:"Unit of energy?", choices:["Joule","Newton","Watt","Volt"], answer:"Joule"},
{question:"Unit of power?", choices:["Watt","Newton","Joule","Volt"], answer:"Watt"},
{question:"Unit of voltage?", choices:["Volt","Watt","Joule","Newton"], answer:"Volt"},
{question:"Unit of current?", choices:["Ampere","Volt","Watt","Ohm"], answer:"Ampere"},

{question:"Speed formula?", choices:["Distance/Time","Force/Mass","Mass×Accel","Energy×Time"], answer:"Distance/Time"},
{question:"What measures force?", choices:["Newton","Joule","Volt","Watt"], answer:"Newton"},
{question:"Energy is ability to?", choices:["Do work","Sleep","Run","Think"], answer:"Do work"},
{question:"Gravity pulls objects?", choices:["Down","Up","Side","None"], answer:"Down"},
{question:"Earth gravity?", choices:["9.8 m/s²","10 m/s","5 m/s²","1 m/s"], answer:"9.8 m/s²"},

{question:"Unit of resistance?", choices:["Ohm","Volt","Ampere","Watt"], answer:"Ohm"},
{question:"Light travels fastest in?", choices:["Vacuum","Water","Air","Glass"], answer:"Vacuum"},
{question:"Sound needs?", choices:["Medium","Vacuum","Light","Heat"], answer:"Medium"},
{question:"Solid state?", choices:["Fixed shape","No shape","Gas","Liquid"], answer:"Fixed shape"},
{question:"Liquid state?", choices:["Fixed volume","No volume","Gas","Solid"], answer:"Fixed volume"},

{question:"Gas state?", choices:["No shape","Fixed shape","Solid","Liquid"], answer:"No shape"},
{question:"Force = ?", choices:["Mass×Acceleration","Distance/Time","Energy×Time","None"], answer:"Mass×Acceleration"},
{question:"Energy unit?", choices:["Joule","Newton","Watt","Volt"], answer:"Joule"},
{question:"Power = ?", choices:["Work/Time","Force×Mass","Distance×Time","None"], answer:"Work/Time"},
{question:"Speed unit?", choices:["m/s","kg","N","J"], answer:"m/s"},

{question:"Mass unit?", choices:["kg","m","s","N"], answer:"kg"},
{question:"Time unit?", choices:["second","meter","kg","N"], answer:"second"},
{question:"Distance unit?", choices:["meter","second","kg","N"], answer:"meter"},
{question:"Heat is?", choices:["Energy","Force","Mass","Time"], answer:"Energy"},
{question:"Friction is?", choices:["Opposing force","Energy","Speed","Light"], answer:"Opposing force"},

{question:"Motion means?", choices:["Movement","Stop","Rest","None"], answer:"Movement"},
{question:"Inertia is?", choices:["Resistance to motion","Speed","Force","Energy"], answer:"Resistance to motion"},
{question:"Acceleration?", choices:["Change in speed","Distance","Time","Mass"], answer:"Change in speed"},
{question:"Velocity?", choices:["Speed with direction","Speed","Force","Energy"], answer:"Speed with direction"},
{question:"Weight depends on?", choices:["Gravity","Speed","Time","Distance"], answer:"Gravity"},

{question:"Density = ?", choices:["Mass/Volume","Force×Mass","Distance/Time","None"], answer:"Mass/Volume"},
{question:"Pressure = ?", choices:["Force/Area","Mass×Accel","Energy×Time","None"], answer:"Force/Area"},
{question:"Light speed?", choices:["3×10⁸ m/s","100 m/s","1000 m/s","10 m/s"], answer:"3×10⁸ m/s"},
{question:"Magnet has?", choices:["Poles","Energy","Mass","Time"], answer:"Poles"},
{question:"North and south?", choices:["Poles","Energy","Mass","Time"], answer:"Poles"},

{question:"Electricity flow?", choices:["Current","Voltage","Power","Energy"], answer:"Current"},
{question:"Battery provides?", choices:["Voltage","Force","Mass","Speed"], answer:"Voltage"},
{question:"Circuit path?", choices:["Closed","Open","Broken","None"], answer:"Closed"},
{question:"Open circuit?", choices:["No flow","Flow","Energy","Light"], answer:"No flow"},
{question:"Lens bends?", choices:["Light","Sound","Heat","Mass"], answer:"Light"},

{question:"Mirror reflects?", choices:["Light","Sound","Heat","Mass"], answer:"Light"},
{question:"Wave carries?", choices:["Energy","Mass","Force","Time"], answer:"Energy"},
{question:"Sound is?", choices:["Wave","Force","Mass","Energy"], answer:"Wave"},
{question:"Light is?", choices:["Wave","Mass","Force","None"], answer:"Wave"},
{question:"Temperature unit?", choices:["Celsius","Meter","Newton","Joule"], answer:"Celsius"}
]),
        medium: randomizeAnswers([
{question:"Force formula?", choices:["F=ma","E=mc²","V=IR","P=VI"], answer:"F=ma"},
{question:"Ohm's law?", choices:["V=IR","F=ma","P=VI","E=mc²"], answer:"V=IR"},
{question:"Power formula?", choices:["P=VI","F=ma","V=IR","E=mc²"], answer:"P=VI"},
{question:"Kinetic energy?", choices:["½mv²","mgh","F=ma","V=IR"], answer:"½mv²"},
{question:"Potential energy?", choices:["mgh","½mv²","F=ma","P=VI"], answer:"mgh"},

{question:"Work formula?", choices:["Force×Distance","Mass×Accel","Energy×Time","None"], answer:"Force×Distance"},
{question:"Momentum?", choices:["mv","F=ma","mgh","VI"], answer:"mv"},
{question:"Acceleration formula?", choices:["Δv/t","d/t","m/v","v/t²"], answer:"Δv/t"},
{question:"Frequency unit?", choices:["Hz","N","J","W"], answer:"Hz"},
{question:"Period formula?", choices:["1/f","f/t","t/f","v/t"], answer:"1/f"},

{question:"Wave speed?", choices:["fλ","λ/f","f/t","t/f"], answer:"fλ"},
{question:"Pressure unit?", choices:["Pascal","Newton","Joule","Watt"], answer:"Pascal"},
{question:"Density unit?", choices:["kg/m³","N/m","J/s","W"], answer:"kg/m³"},
{question:"Heat transfer by contact?", choices:["Conduction","Convection","Radiation","None"], answer:"Conduction"},
{question:"Heat transfer by fluid?", choices:["Convection","Conduction","Radiation","None"], answer:"Convection"},

{question:"Heat transfer by waves?", choices:["Radiation","Conduction","Convection","None"], answer:"Radiation"},
{question:"Refraction is?", choices:["Bending of light","Reflection","Absorption","None"], answer:"Bending of light"},
{question:"Reflection is?", choices:["Bouncing of light","Bending","Absorption","None"], answer:"Bouncing of light"},
{question:"Sound speed air?", choices:["343 m/s","100 m/s","500 m/s","1000 m/s"], answer:"343 m/s"},
{question:"Voltage measures?", choices:["Energy per charge","Force","Mass","Time"], answer:"Energy per charge"},

{question:"Current formula?", choices:["I=Q/t","V=IR","P=VI","F=ma"], answer:"I=Q/t"},
{question:"Resistance formula?", choices:["R=V/I","F=ma","P=VI","E=mc²"], answer:"R=V/I"},
{question:"Convex lens?", choices:["Converging","Diverging","Flat","None"], answer:"Converging"},
{question:"Concave lens?", choices:["Diverging","Converging","Flat","None"], answer:"Diverging"},
{question:"Concave mirror?", choices:["Inward","Outward","Flat","None"], answer:"Inward"},

{question:"Convex mirror?", choices:["Outward","Inward","Flat","None"], answer:"Outward"},
{question:"Energy conservation?", choices:["Constant","Increase","Decrease","None"], answer:"Constant"},
{question:"Newton 1st law?", choices:["Inertia","F=ma","Action","None"], answer:"Inertia"},
{question:"Newton 2nd law?", choices:["F=ma","Inertia","Action","None"], answer:"F=ma"},
{question:"Newton 3rd law?", choices:["Action-reaction","F=ma","Inertia","None"], answer:"Action-reaction"},

{question:"Speed vs velocity?", choices:["Direction matters","Same","None","Opposite"], answer:"Direction matters"},
{question:"SI unit of work?", choices:["Joule","Newton","Watt","Volt"], answer:"Joule"},
{question:"SI unit of power?", choices:["Watt","Joule","Volt","Amp"], answer:"Watt"},
{question:"SI unit of force?", choices:["Newton","Joule","Volt","Watt"], answer:"Newton"},
{question:"SI unit of charge?", choices:["Coulomb","Volt","Amp","Ohm"], answer:"Coulomb"},

{question:"Mass vs weight?", choices:["Weight depends gravity","Same","None","Opposite"], answer:"Weight depends gravity"},
{question:"Free fall?", choices:["Gravity only","Force","Energy","None"], answer:"Gravity only"},
{question:"Projectile motion?", choices:["Parabolic","Straight","Circular","None"], answer:"Parabolic"},
{question:"Friction reduces?", choices:["Motion","Energy","Mass","Time"], answer:"Motion"},
{question:"Efficiency?", choices:["Output/Input","Input/Output","None","Equal"], answer:"Output/Input"},

{question:"Power =?", choices:["Work/Time","Force×Mass","Distance×Time","None"], answer:"Work/Time"},
{question:"Work done?", choices:["Force×Distance","Mass×Accel","Energy","None"], answer:"Force×Distance"},
{question:"Elastic energy?", choices:["Stored energy","Kinetic","Heat","None"], answer:"Stored energy"},
{question:"Hooke law?", choices:["F=kx","F=ma","V=IR","None"], answer:"F=kx"},
{question:"Spring constant?", choices:["k","m","v","t"], answer:"k"}
]),
        hard: randomizeAnswers([
{question:"Einstein formula?", choices:["E=mc²","F=ma","V=IR","P=VI"], answer:"E=mc²"},
{question:"Gravity formula?", choices:["F=Gm₁m₂/r²","F=ma","P=VI","V=IR"], answer:"F=Gm₁m₂/r²"},
{question:"Coulomb law?", choices:["F=kq₁q₂/r²","F=ma","V=IR","P=VI"], answer:"F=kq₁q₂/r²"},
{question:"Wave eq?", choices:["v=fλ","v=f/λ","λ=f/v","v=t/f"], answer:"v=fλ"},
{question:"Electric field?", choices:["F/q","q/F","E/t","None"], answer:"F/q"},

{question:"Magnetic unit?", choices:["Tesla","Newton","Volt","Joule"], answer:"Tesla"},
{question:"Photon?", choices:["Light particle","Electron","Atom","None"], answer:"Light particle"},
{question:"Relativity?", choices:["Space-time","Force","Energy","Mass"], answer:"Space-time"},
{question:"Entropy?", choices:["Disorder","Energy","Mass","Force"], answer:"Disorder"},
{question:"1st law thermo?", choices:["Energy conserved","Lost","Gain","None"], answer:"Energy conserved"},

{question:"2nd law thermo?", choices:["Entropy increases","Decreases","Constant","None"], answer:"Entropy increases"},
{question:"Photoelectric?", choices:["Electron emission","Heat","Light bend","None"], answer:"Electron emission"},
{question:"Quantum deals?", choices:["Small scale","Large","None","All"], answer:"Small scale"},
{question:"Planck constant?", choices:["h","c","g","k"], answer:"h"},
{question:"Speed of light?", choices:["3×10⁸","100","1000","10"], answer:"3×10⁸"},

{question:"Momentum unit?", choices:["kg·m/s","N","J","W"], answer:"kg·m/s"},
{question:"Impulse?", choices:["Force×time","Mass×Accel","Energy","None"], answer:"Force×time"},
{question:"Angular velocity?", choices:["rad/s","m/s","kg","N"], answer:"rad/s"},
{question:"Torque?", choices:["Force×distance","Mass×Accel","Energy","None"], answer:"Force×distance"},
{question:"Centripetal force?", choices:["mv²/r","F=ma","V=IR","None"], answer:"mv²/r"},

{question:"Lens formula?", choices:["1/f=1/v+1/u","F=ma","V=IR","None"], answer:"1/f=1/v+1/u"},
{question:"Mirror formula?", choices:["1/f=1/v+1/u","F=ma","None","All"], answer:"1/f=1/v+1/u"},
{question:"Snell law?", choices:["n1sinθ=n2sinθ","F=ma","V=IR","None"], answer:"n1sinθ=n2sinθ"},
{question:"Wave energy?", choices:["Proportional amplitude²","Mass","Time","None"], answer:"Proportional amplitude²"},
{question:"Doppler effect?", choices:["Frequency change","Speed change","Mass change","None"], answer:"Frequency change"},

{question:"Capacitance?", choices:["C=Q/V","V=IR","F=ma","None"], answer:"C=Q/V"},
{question:"Inductance?", choices:["Oppose current change","Energy","Mass","None"], answer:"Oppose current change"},
{question:"AC current?", choices:["Alternating","Direct","None","Static"], answer:"Alternating"},
{question:"DC current?", choices:["Direct","Alternating","None","Static"], answer:"Direct"},
{question:"Transformer works?", choices:["AC only","DC only","Both","None"], answer:"AC only"},

{question:"Half-life?", choices:["Decay time","Energy","Mass","None"], answer:"Decay time"},
{question:"Nuclear fission?", choices:["Split nucleus","Combine","None","Energy"], answer:"Split nucleus"},
{question:"Fusion?", choices:["Combine nuclei","Split","None","Energy"], answer:"Combine nuclei"},
{question:"Black hole?", choices:["Strong gravity","Light","Mass","None"], answer:"Strong gravity"},
{question:"Escape velocity?", choices:["Leave planet","Enter","Stop","None"], answer:"Leave planet"},

{question:"Orbit?", choices:["Path","Force","Energy","None"], answer:"Path"},
{question:"Kepler law?", choices:["Planet motion","Energy","Mass","None"], answer:"Planet motion"},
{question:"Gravitational field?", choices:["Force area","Mass","Energy","None"], answer:"Force area"},
{question:"Wave interference?", choices:["Superposition","Reflection","Refraction","None"], answer:"Superposition"},
{question:"Resonance?", choices:["Max vibration","Stop","Energy","None"], answer:"Max vibration"}
])
    },

    mechanics: {
        easy: randomizeAnswers([
{question:"Tool for tightening bolts?", choices:["Wrench","Hammer","Saw","Pliers"], answer:"Wrench"},
{question:"Tool for hitting nails?", choices:["Hammer","Wrench","Saw","Pliers"], answer:"Hammer"},
{question:"Tool for cutting wood?", choices:["Saw","Hammer","Wrench","Pliers"], answer:"Saw"},
{question:"Tool for gripping?", choices:["Pliers","Hammer","Saw","Wrench"], answer:"Pliers"},
{question:"Tool for screws?", choices:["Screwdriver","Hammer","Saw","Wrench"], answer:"Screwdriver"},

{question:"Flat screwdriver tip?", choices:["Flat","Cross","Star","Hex"], answer:"Flat"},
{question:"Phillips screwdriver?", choices:["Cross","Flat","Hex","Star"], answer:"Cross"},
{question:"Measuring tool?", choices:["Tape measure","Hammer","Wrench","Saw"], answer:"Tape measure"},
{question:"Cutting metal?", choices:["Hacksaw","Hammer","Pliers","Wrench"], answer:"Hacksaw"},
{question:"Drilling tool?", choices:["Drill","Saw","Hammer","Pliers"], answer:"Drill"},

{question:"Tighten nut?", choices:["Wrench","Hammer","Saw","Drill"], answer:"Wrench"},
{question:"Loosen bolt?", choices:["Wrench","Hammer","Saw","Drill"], answer:"Wrench"},
{question:"Electric cutting?", choices:["Grinder","Hammer","Saw","Pliers"], answer:"Grinder"},
{question:"Grinding tool?", choices:["Grinder","Saw","Hammer","Pliers"], answer:"Grinder"},
{question:"Fastening tool?", choices:["Screwdriver","Hammer","Saw","Wrench"], answer:"Screwdriver"},

{question:"Tool for bending wire?", choices:["Pliers","Hammer","Saw","Drill"], answer:"Pliers"},
{question:"Protect eyes?", choices:["Goggles","Gloves","Boots","Mask"], answer:"Goggles"},
{question:"Protect hands?", choices:["Gloves","Helmet","Mask","Shoes"], answer:"Gloves"},
{question:"Protect head?", choices:["Helmet","Gloves","Mask","Shoes"], answer:"Helmet"},
{question:"Protect feet?", choices:["Safety shoes","Gloves","Helmet","Mask"], answer:"Safety shoes"},

{question:"Lubrication reduces?", choices:["Friction","Heat","Speed","Mass"], answer:"Friction"},
{question:"Oil is used for?", choices:["Lubrication","Cooling","Heating","Cleaning"], answer:"Lubrication"},
{question:"Machine power source?", choices:["Motor","Bolt","Nut","Wire"], answer:"Motor"},
{question:"Rotating part?", choices:["Shaft","Bolt","Nut","Wire"], answer:"Shaft"},
{question:"Connect shaft?", choices:["Coupling","Bolt","Nut","Wire"], answer:"Coupling"},

{question:"Hold parts together?", choices:["Bolt","Wire","Glue","Tape"], answer:"Bolt"},
{question:"Threaded fastener?", choices:["Bolt","Hammer","Saw","Drill"], answer:"Bolt"},
{question:"Nut used with?", choices:["Bolt","Hammer","Saw","Drill"], answer:"Bolt"},
{question:"Washer purpose?", choices:["Distribute load","Cut","Drill","Measure"], answer:"Distribute load"},
{question:"Bearing reduces?", choices:["Friction","Speed","Mass","Heat"], answer:"Friction"},

{question:"Gear transmits?", choices:["Motion","Heat","Light","Sound"], answer:"Motion"},
{question:"Pulley used for?", choices:["Lifting","Cutting","Drilling","Grinding"], answer:"Lifting"},
{question:"Belt connects?", choices:["Pulleys","Bolts","Wires","Nuts"], answer:"Pulleys"},
{question:"Chain used in?", choices:["Sprockets","Bolts","Wires","Nuts"], answer:"Sprockets"},
{question:"Spring stores?", choices:["Energy","Mass","Speed","Heat"], answer:"Energy"},

{question:"Welding joins?", choices:["Metals","Wood","Plastic","Glass"], answer:"Metals"},
{question:"Cutting torch uses?", choices:["Gas","Water","Oil","Air"], answer:"Gas"},
{question:"Lathe machine?", choices:["Rotates workpiece","Cuts wood","Drills holes","Grinds"], answer:"Rotates workpiece"},
{question:"Drill press?", choices:["Drills holes","Cuts wood","Grinds","Welds"], answer:"Drills holes"},
{question:"Safety first?", choices:["Always","Sometimes","Never","Optional"], answer:"Always"}
]),
        medium: randomizeAnswers([
{question:"Torque formula?", choices:["Force×distance","Mass×Accel","Energy×Time","None"], answer:"Force×distance"},
{question:"Mechanical advantage?", choices:["Output/Input","Input/Output","None","Equal"], answer:"Output/Input"},
{question:"Gear ratio?", choices:["Teeth ratio","Speed","Mass","None"], answer:"Teeth ratio"},
{question:"Power formula?", choices:["Work/Time","Force×Mass","Distance×Time","None"], answer:"Work/Time"},
{question:"Efficiency?", choices:["Output/Input","Input/Output","None","Equal"], answer:"Output/Input"},

{question:"Hydraulic uses?", choices:["Fluid pressure","Air","Heat","Light"], answer:"Fluid pressure"},
{question:"Pneumatic uses?", choices:["Air pressure","Water","Heat","Light"], answer:"Air pressure"},
{question:"Pascal law?", choices:["Pressure transmitted","Heat","Light","Mass"], answer:"Pressure transmitted"},
{question:"Pressure formula?", choices:["Force/Area","Mass×Accel","Energy","None"], answer:"Force/Area"},
{question:"Work unit?", choices:["Joule","Newton","Watt","Volt"], answer:"Joule"},

{question:"Power unit?", choices:["Watt","Joule","Newton","Volt"], answer:"Watt"},
{question:"Friction types?", choices:["Static/dynamic","Heat/light","Air/water","None"], answer:"Static/dynamic"},
{question:"Bearing type?", choices:["Ball","Square","Flat","None"], answer:"Ball"},
{question:"Lubrication reduces wear?", choices:["Yes","No","Sometimes","None"], answer:"Yes"},
{question:"Gear increases torque?", choices:["Yes","No","Sometimes","None"], answer:"Yes"},

{question:"Pulley reduces force?", choices:["Yes","No","Sometimes","None"], answer:"Yes"},
{question:"Lever classes?", choices:["3","2","4","5"], answer:"3"},
{question:"First class lever?", choices:["Fulcrum middle","Load middle","Effort middle","None"], answer:"Fulcrum middle"},
{question:"Second class lever?", choices:["Load middle","Fulcrum middle","Effort middle","None"], answer:"Load middle"},
{question:"Third class lever?", choices:["Effort middle","Load middle","Fulcrum middle","None"], answer:"Effort middle"},

{question:"Motor converts?", choices:["Electrical→Mechanical","Heat→Light","Mass→Energy","None"], answer:"Electrical→Mechanical"},
{question:"Generator converts?", choices:["Mechanical→Electrical","Heat→Light","Mass→Energy","None"], answer:"Mechanical→Electrical"},
{question:"Voltage drives?", choices:["Current","Mass","Speed","Heat"], answer:"Current"},
{question:"Current unit?", choices:["Ampere","Volt","Ohm","Watt"], answer:"Ampere"},
{question:"Resistance unit?", choices:["Ohm","Volt","Amp","Watt"], answer:"Ohm"},

{question:"Series circuit?", choices:["Same current","Same voltage","None","Both"], answer:"Same current"},
{question:"Parallel circuit?", choices:["Same voltage","Same current","None","Both"], answer:"Same voltage"},
{question:"Overload causes?", choices:["Heat","Cold","Light","None"], answer:"Heat"},
{question:"Fuse protects?", choices:["Circuit","Motor","Wire","None"], answer:"Circuit"},
{question:"Breaker resets?", choices:["Yes","No","Sometimes","None"], answer:"Yes"}
]),
        hard: randomizeAnswers([
{question:"Stress formula?", choices:["Force/Area","Mass×Accel","Energy","None"], answer:"Force/Area"},
{question:"Strain?", choices:["Deformation ratio","Force","Mass","None"], answer:"Deformation ratio"},
{question:"Young modulus?", choices:["Stress/Strain","Force×Distance","Energy","None"], answer:"Stress/Strain"},
{question:"Hooke law?", choices:["F=kx","F=ma","V=IR","None"], answer:"F=kx"},
{question:"Power mechanical?", choices:["Torque×Angular speed","Force×Mass","Energy","None"], answer:"Torque×Angular speed"},

{question:"Angular velocity?", choices:["rad/s","m/s","kg","N"], answer:"rad/s"},
{question:"Torque unit?", choices:["Nm","J","W","V"], answer:"Nm"},
{question:"Efficiency loss?", choices:["Friction","Energy","Mass","Time"], answer:"Friction"},
{question:"Heat treatment?", choices:["Metal hardening","Cooling","Heating","None"], answer:"Metal hardening"},
{question:"Annealing?", choices:["Softening metal","Hardening","Cooling","None"], answer:"Softening metal"},

{question:"Quenching?", choices:["Rapid cooling","Heating","Cutting","None"], answer:"Rapid cooling"},
{question:"Tempering?", choices:["Reduce brittleness","Increase heat","Cutting","None"], answer:"Reduce brittleness"},
{question:"Alloy?", choices:["Mixed metals","Pure metal","Plastic","None"], answer:"Mixed metals"},
{question:"Steel is?", choices:["Alloy","Pure metal","Plastic","None"], answer:"Alloy"},
{question:"Corrosion?", choices:["Rusting","Cooling","Heating","None"], answer:"Rusting"},

{question:"Lubricant type?", choices:["Oil","Water","Air","None"], answer:"Oil"},
{question:"Hydraulic fluid?", choices:["Oil","Water","Air","None"], answer:"Oil"},
{question:"Pascal law used in?", choices:["Hydraulics","Pneumatics","Heat","None"], answer:"Hydraulics"},
{question:"Compressor?", choices:["Increase pressure","Decrease","None","Heat"], answer:"Increase pressure"},
{question:"Pump moves?", choices:["Liquid","Air","Solid","None"], answer:"Liquid"},

{question:"Gear teeth type?", choices:["Spur","Flat","Round","None"], answer:"Spur"},
{question:"Helical gear?", choices:["Angled teeth","Straight","Flat","None"], answer:"Angled teeth"},
{question:"Bevel gear?", choices:["Cone shape","Flat","Round","None"], answer:"Cone shape"},
{question:"Sprocket?", choices:["Chain gear","Flat","Round","None"], answer:"Chain gear"},
{question:"Cam converts?", choices:["Rotary→Linear","Linear→Rotary","None","Both"], answer:"Rotary→Linear"},

{question:"Flywheel?", choices:["Stores energy","Cuts","Drills","None"], answer:"Stores energy"},
{question:"Clutch?", choices:["Engage/disengage","Cut","Drill","None"], answer:"Engage/disengage"},
{question:"Brake?", choices:["Stop motion","Increase","None","Heat"], answer:"Stop motion"},
{question:"Lathe uses?", choices:["Turning","Cutting wood","Drilling","None"], answer:"Turning"},
{question:"Milling?", choices:["Cutting","Turning","Drilling","None"], answer:"Cutting"}
])
    }
};