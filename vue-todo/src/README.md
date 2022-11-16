### var let const / 변수 상수 선언 키워드 , 템플릿 문자열
||재선언|재할당|Block scope|Function scope|
|:----:|:----:|:----:|------|------|
|var|O|O|외부에서 내부 참조 가능|외부에서 내부 참조 불가|
|let|X|O|외부에서 내부 참조 불가|외부에서 내부 참조 불가|
|const|X|X|외부에서 내부 참조 불가|외부에서 내부 참조 불가|

템플릿 문자열 장점은 $, ', "  등을 입력할 때 이스케이프 문자열을 사용할 필요 X
```javascript
//템플릿(백틱) 문자열 
const name = "홍길동";
let age = "22";
console.log(`저의 이름은 ${name}이고, 나이는 ${age}살 입니다.`);

var content1 = 'Hi,\n\t'	+ 'My name is content\n\t'
let content2 = `Hi,
	My name is content`

```

### Enhanced Object Literals 
Enhanced Object Literals - 향상된 객체 리터럴 
```javascript 
const  ductionary = {
	//아래 코드는 동일하게 동작 
	// Function 키워드 빼고 ()로 간결하게 작성 가능 
	// 뭐가 더 좋다라는 판단보다 내가 작성하는 코드에 일관성을 주어야할거같은데
	// 컨벤션을 맞추면 둘중 하나를 사용해야 하기때문에 둘다 알고있어야함 
	lookup: function() {
		console.log('found sth');
	},
	lookup() {
		console.log('found sth');
	}
}

const TestObject1{
	figures : figures
};
//객체의 속성명과 값 명이 동일할때 아래 처럼 축약 가능 
const TestObject2{
	figures, 
};


```

### Modules 
내용추가


