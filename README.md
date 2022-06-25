# Book Log

## Overview
Google Books API & React에 기반한 북로그 앱입니다. <br/>
2021년 배포한 팀 프로젝트를 개인적으로 리팩토링해 재배포했습니다. 
같이 프로젝트를 진행했던 팀원과의 리뷰를 바탕으로 목표 설정 후 리팩토링을 진행했습니다. 리팩토링 이후 유저 피드백을 받아 업데이트 중입니다.

Demo Link: https://ava-booklog.netlify.app/ <br/>
Original project: https://github.com/chingu-voyages/v32-toucans-team-02

<br/>

## Purpose of refactoring
- 실제 유저가 사용할만한 가치가 있는 서비스 구현하기
- 오류 해결 & 유지 보수성, 확장성 고려해 코드 개선하기
<br/>

## Tech Stack
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=react-router&logoColor=white"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"/>
<br/>

#### Firebase Auth & Realtime DB
백엔드 개발자가 없는 상황에서 Authentication과 Database를 구현하기 위해 선택하게 되었습니다. <br/>
Provider를 이용한 로그인은 사용자 입장에서 보안에 대한 우려나, 이메일 가입 절차의 번거로움 없이 간편하게 이용 가능하기 때문에 선택했습니다.

#### Styled-components
기존 프로젝트에서는 postCSS 모듈을 사용했으나 리팩토링하면서 Styled-components를 점진 적용했습니다.
className을 관리할 필요가 없고, 유지보수 측면에서 용이하다고 판단해 선택했습니다.

<br/>

## Features 

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/47381555/175777314-20d8cde3-205d-48ad-b789-fc37612335b3.gif)

```
- 구글 또는 깃허브 계정을 이용해 로그인할 수 있습니다.
- Search 메뉴에서 도서명이나 저자명으로 원하는 책을 검색하고 리스트에 추가할 수 있습니다.
- My list에서 추가한 책들을 확인하고 독서 상태, 별점, 메모를 작성하고 수정하거나 삭제할 수 있습니다.
- My page에서 내 리스트에 추가된 도서들의 총 권수 및 독서 상태 별 권수를 확인할 수 있습니다.
- My page에서 계정 삭제가 가능합니다.
```
<br/>

## Improvement
```
- API로 받아온 데이터(book list)에 Context API 사용 → Search Presenter 분리 및 DI로 book list 전달
- 윈도우 사이즈 변경 시 반응형 메뉴바 오류 발생 (component lifecycle & state 사용) → 오류 해결 및 코드 개선 (media query 사용)
- Login status DI로 전달 → Context API 사용해 login status 확인
- Private route 각 페이지 컴포넌트 안에 코드로 구현 → Private route component 생성
- Firebase version 7 → version 9
```

<br/>

## User Feedback
Google Form을 이용해 유저 피드백을 수집하고 이에 따라 앱을 개선하고 있습니다. <br/>
관련 포스트: [유저피드백 받기](https://velog.io/@avakim/%EC%9C%A0%EC%A0%80-%ED%94%BC%EB%93%9C%EB%B0%B1-%EB%B0%9B%EA%B8%B0)

🔹 개선할 점
```
- 로그인 서비스 구글, 깃허브에서 구글, 트위터로 변경해 사용자 편의 개선
- 국내 도서 검색이 용이하도록 네이버 또는 카카오 API로 변경
- 도서 검색 결과 정렬 기능 추가 
- My list 독서 상태 <select> UI 개선
- MY page Stat 메뉴 독서 상태 하단에 도서 리스트 추가
- 이외 common component 분리, 중복되는 코드 등 전반적인 코드 개선
```
<br/>

## What I've learned
```
- React Context API에 대한 이해
- Private route
- Firebase V9 사용법
- Service layer 분리의 중요성
```

<br/>

## Review
```
- 팀프로젝트 당시에는 학습한 것들을 구현해 보는데만 초점을 맞췄다면, 리팩토링과 이후 유저 피드백 받는 과정에서 실제 사용자의 니즈를 더 고려하게 됐습니다.
- 좀 더 클린한 코드, 아키텍쳐에 대해 고민해 볼 수 있었습니다.
- 다른 유저와 interaction 할 수 있는 서비스를 구현하고 싶었으나 정해진 타임라인과 우선순위를 고려해 일단 보류했습니다. 
  추후 해당 기능을 추가해 실제 서비스를 운영하는 것이 목표입니다.
```
