// canvas를 이용하기 위한 최소한의 코드
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;


// 유닛 그리기
var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,

    draw() {
        // 초록색
        ctx.fillStyle = 'green';
        // 좌표는 왼쪽 위에서 부터 10콤마 10 좌표에 100x100 사이즈 네모
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}

dino.draw()



// 장애물 그리기
class Cactus {
  

    // 생성자
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }

    draw() {
        // 빨간색
        ctx.fillStyle = 'red';
        // 좌표는 왼쪽 위에서 부터 10콤마 10 좌표에 100x100 사이즈 네모
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// class의 사용법 중 하나



// 게임에서는 시간이 아니라 프레임으로 움직인다 따라서 1프레임마다 타이머를 1씩 증가시켜
// 타이머로 프레임을 나타낼 수 있다
var timer = 0;
var cacuts여러개 = [];


//ex) 애니매이션을 만들려면 x값을 1초에 60번 정도  ++ 해줘야 함
// 게임 개발을 본격적으로 하고 싶으면 자바스크립트 라이브러리를 사용하는게 좋음

// 1초에 60번 코드 실행하기

// 함수 생성
function 프레임마다실행할거() {
    // 기본 자바스크립트 함수
    requestAnimationFrame(
        // 프레임마다 실행할 거
        프레임마다실행할거)

        timer++;

        // 캔버스 지우기
        // 캔버스를 먼저 초기화 하지 않고 누적해서 그리면 잔상이 남음
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 장애물 그리기
        // 120 프레임마다 cacts를 그려줌
        // 모니터가 120hz면 timer % 120으로 모니터 주파수에 따라 다름
        if (timer % 120 === 0) {
            // 120프레임마다 cacuts를 생성해서 cacuts여러개(배열-array)에 담아준다
            var cacts = new Cactus();
            cacuts여러개.push(cacts);
        }
        
         /**
         * forEach
         * 배열의 반복문
         * 배열의 처음~마지막 요소까지 반복하여 실행
         * 인자로 콜백함수를 받아옴
         * 주어진 콜백함수를 배열 요소 각각에 대해 실행
         * querySelectorAll() 전체 선택자를 이용하여 주로 사용
         * arr.forEach(callback(item, index, array))
         * (마지막 인자, array는 forEach()를 호출한 배열로 거의 사용 안함)
         */

        // 120프레임마다 cacuts를 생성해서 cacuts여러개에 담아준걸 하나씩 꺼내서 x좌표를 1씩 뺀 뒤 그린다
        cacuts여러개.forEach((e) => { 

            e.x--;
            e.draw();
        })

        dino.draw();
};

프레임마다실행할거();

// 꼭 유닛이 이동하지 않아도 됨, 장애물이 유닛 쪽으로 이동해도 됨
