const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift By Apple',
}

for (const key in myObject) {
//  console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["js", "cpp", "py", "java", "rb"]

for (const key in programming) {
    console.log(programming[key]);
}