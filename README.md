# Front-End WorkSpace

## [구현해야될 목록] 🔥

- 개발환경 : React, CSS, 마스터 수정

#### 메인 : 각 카테고리 버튼 (각 게시판으로 이동할 수 있음) / 로그인 및 회원가입 버튼(우측 상단) => 마이페이지 버튼

#### 카테고리별 게시판 : 각 카테고리 별로 게시판 목록

#### 마이페이지 : 닉네임(nullable) / 이름

#### 로그인 : 아이디/ 비번 (추후에 소셜 로그인)

#### 회원가입 : 이름/이메일/비밀번호/비밀번호확인/활동 닉네임/ 소속학교(nullable) / 개인 정보 이용 동의

#### 게시판 작성 : 카테고리 선택/ 제목 / 본문 / 물품 링크(필수) /기한 / 공동구매 인원

</br></br>





#### [style components 공통 사항]

- **Input** 
- **Button**
- **Font**
- **Font-size**



</br></br>

#### [역할 분담]

- 공통: 헤더, 푸터, 로그인.  => 창회
- 홈  => 희제
- 프로필
- 게시글 목록
- 게시글 디테일  => 글, 링크
- 게시글 작성

</br></br>

#### [Commit convention]



<img width="990" alt="스크린샷 2020-11-11 오후 5 01 15" src="https://user-images.githubusercontent.com/48006103/98785204-923ddf00-243f-11eb-9f06-105ce9fafad2.png">



</br></br>



#### [Path Structure]

- Home : /
- Mypage : /mypage/:usrid
- 생필품 : /necessity
- 의류 : /cloth
- 음식 : /food
- 뷰티 : /beauty
- 잡화 : /goods
- 기타 : /etc
- 게시판 디테일 : /게시판이름/:게시판 아이디

- 게시판 작성: /write/:usrid
- 게시판 수정: /edit/:게시판 아이디





</br> </br>



