// 당첨 번호 뽑기 | 중복 허용
var r = [0, 0, 0, 0, 0, 0];

r[0] = Math.floor(Math.random() * 45 + 1 );
r[1] = Math.floor(Math.random() * 45 + 1 );
r[2] = Math.floor(Math.random() * 45 + 1 );
r[3] = Math.floor(Math.random() * 45 + 1 );
r[4] = Math.floor(Math.random() * 45 + 1 );
r[5] = Math.floor(Math.random() * 45 + 1 );

var bonus = Math.floor(Math.random() * 45 + 1 );

// 당첨 번호 줃복 방지
while(true) { // 2번 째 당첨 번호
    if ( r[1] == r[0] ) {
        r[1] = Math.floor(Math.random() * 45 + 1 );
        cl("2번 째 번호 다시 뽑음"); // 임시 확인용
        break;
    } else {
        break;
    }
}

while(true) { // 3번 째 당첨 번호
    if ( r[2] == r[0] || r[2] == r[1] ) {
        r[2] = Math.floor(Math.random() * 45 + 1 );
        cl("3번 째 번호 다시 뽑음"); // 임시 확인용
        break;
    } else {
        break;
    }
}

while(true) { // 4번 째 당첨 번호
    if ( r[3] == r[0] || r[3] == r[1] || r[3] == r[2] ) {
        r[3] = Math.floor(Math.random() * 45 + 1 );
        cl("4번 째 번호 다시 뽑음"); // 임시 확인용
        break;
    } else {
        break;
    }
}

while(true) { // 5번 째 당첨 번호
    if ( r[4] == r[0] || r[4] == r[1] || r[4] == r[2] || r[4] == r[3] ) {
        r[4] = Math.floor(Math.random() * 45 + 1 );
        cl("5번 째 번호 다시 뽑음"); // 임시 확인용
        break;
    } else {
        break;
    }
}

while(true) { // 6번 째 당첨 번호
    if ( r[5] == r[0] || r[5] == r[1] || r[5] == r[2] || r[5] == r[3] || r[5] == r[4] ) {
        r[5] = Math.floor(Math.random() * 45 + 1 );
        cl("6번 째 번호 다시 뽑음"); // 임시 확인용
        break;
    } else {
        break;
    }
}

while(true) { // 보너스 당첨 번호
    if ( bonus == r[0] || bonus == r[1] || bonus == r[2] || bonus == r[3] || bonus == r[4] || bonus == r[5] ) {
        bonus = Math.floor(Math.random() * 45 + 1 );
        cl("보너스 번호 다시 뽑음"); // 임시 확인용
        break;
    } else {
        break;
    }
}

// 당첨 번호 출력
dw(r[0] + " | ");
dw(r[1] + " | ");
dw(r[2] + " | ");
dw(r[3] + " | ");
dw(r[4] + " | ");
dw(r[5] + " | ");
dw("보너스: " + bonus);
br();

// 추첨 번호
var p = [0, 0, 0, 0, 0, 0];
p[0] = 1;
p[1] = 2;
p[2] = 3;
p[3] = 4;
p[4] = 5;
p[5] = 6;
p_bonus = 7;


// 추첨 번호 출력
dw(p[0] + " | ");
dw(p[1] + " | ");
dw(p[2] + " | ");
dw(p[3] + " | ");
dw(p[4] + " | ");
dw(p[5] + " | ");
dw("보너스: " + p_bonus);
br();

// 추첨, 당첨번호 대조
var result = 0;

for ( i = 0; i <= 5; i = i + 1 ) {
    cl(i); // 번호 6개 대조 확인용
    for ( j = 0; j <= 5; j = j + 1 ) {
        if ( p[i] == r[j] ) {
        // p[0]~[5] == r[0]~[5]까지 다 넣으면서 체크하는 것
            result = result + 1;
        }
    }
}

// 당첨 여부 계산
var lotto;
var result_2nd = 0;

if ( result <= 2 ) {
    lotto = "꽝입니다!";
} else if ( result == 3 ) {
    lotto = "5등입니다!";
} else if ( result == 4 ) {
    lotto = "4등입니다!";
} else if ( result == 5 ) {
    lotto = "3등입니다!";
    if ( p_bonus == bonus ) {
        lotto = "2등입니다!";
        result = result + "개, 보너스 " + bonus + "번 포함";
        result_2nd = result_2nd + 1;
    }
} else if ( result == 6 ) {
    lotto = "1등입니다!";
}

// 당첨 여부 출력
hr();

if ( result_2nd == 0 ) {
    dw("일치 개수: " + result + "개");
} else {
    dw("일치 개수: " + result);
}

br();
dw("당첨 결과: " + lotto)