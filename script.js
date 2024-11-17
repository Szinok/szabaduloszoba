document.getElementById('submitButton1').addEventListener('click', function() {
    const code1 = document.getElementById('codeInput1').value;
    if (code1 === '911') {
    document.getElementById('output1').innerText = '1. rész - a felfedezés:';
    document.getElementById('extraText').innerText = '2001. szeptember 11-e. A nap, amely örökre megváltoztatta a világot. A káosz szívében, New Yorkban találjátok magatokat. Szemtanúi vagytok a történelem egy sötét pillanatának: repülőgépek szelik át az eget, majd végzetes csapást mérnek az ikertornyokra. A romok között azonban valami váratlan történik. A tűz és acél közepette egy eddig ismeretlen anyag formálódik – egy olyan anyag, amely képes megbolygatni az idő szövetét. Feladat: találjátok meg 911-et az idő vonalán belül!'
    document.getElementById('codeInput1').style.display = 'none';
    document.getElementById('submitButton1').style.display = 'none';
    document.getElementById('codeInput2').style.display = 'block';
    document.getElementById('submitButton2').style.display = 'block';
    } else {
    alert('Hibás kód, próbáld újra!');
    }
    });
    
    document.getElementById('submitButton2').addEventListener('click', function() {
    const code2 = document.getElementById('codeInput2').value;
    if (code2 === 'IDŐKERÉK') {
    document.getElementById('output2').innerText = '2. rész - a technológia világa:'
    document.getElementById('extraText2').innerText = 'Ti, akik az időutazás titkait kutatjátok, felismeritek a lehetőséget. Ez az anyag kulcs lehet a jövő kapuinak megnyitásához. A döntés megszületik: nem hagyhatjátok elveszni ezt a felfedezést. Tovább kell lépnetek, túl a jelen tragédiáján, a jövőbe – egy olyan korba, amelyet technológiai csodák uralnak. 20 évvel későbbre utaztok, hogy szembenézzetek az ismeretlennel, és kiderítsétek, mit rejt az emberiség számára a holnap. Feladat: Kapcsoljátok be a PS4-et, és nyissátok meg a Minecraft-ot.';
    document.getElementById('codeInput2').style.display = 'none';
    document.getElementById('submitButton2').style.display = 'none';
    } else {
    alert('Hibás kód, próbáld újra!');
    }
    });