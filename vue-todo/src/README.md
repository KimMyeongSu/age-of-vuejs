### let const / 변수 상수 선언 키워드 , 템플릿 문자열
| |:재선언:|:재할당:|:Block scope:|:Function scope:|
|:var:|:O:|:O:|:외부에서 내부 참조 가능:|:외부에서 내부 참조 불가:|
|:let:|:X:|:O:|:외부에서 내부 참조 불가:|:외부에서 내부 참조 불가:|
|:const:|:X:|:X:|:외부에서 내부 참조 불가:|:외부에서 내부 참조 불가:|

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
내용추가

### Modules 
내용추가


