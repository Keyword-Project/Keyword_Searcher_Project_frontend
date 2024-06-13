



# 🔍 쿠팡 크롤링 기반 상품 경쟁력 분석 플랫폼 Diggggle
      



![디글](https://github.com/Keyword-Project/keyword_searcher_project_frontend/assets/122145341/fd10c5bc-cd9c-4e32-ac83-31f022321126)


[서비스 링크](https://www.diggggle.com/categories)


<br>
<br>




## 프로젝트 소개
- 원하는 상품(키워드) 혹은 카테고리 기반 쿠팡 상품 정보 및 경쟁률을 파악할 수 있는 플랫폼
- 구매대행 시장 내 점유율 및 동향을 파악하기 위한 플랫폼


<br>
<br>

## 프로젝트 개요
> 사용자가 상품 키워드 혹은 카테고리 검색 시 쿠팡 크롤링을 통해 상품 경쟁력을 분석한 후 데이터를 제공하는 플랫폼
> 
> 기간 : 2024-04 ~ 2024-05 (약 2**개월**)
> 
> **인원** : 프론트엔드(1명) : 변재정 / 백엔드(1명) : 오찬솔




<br>
<br>


### Stacks(프론트엔드)

`React`

- 데이터 조회기능이 주된 역할인 본 프로젝트에서 Virtual Dom은 효율적으로 변경사항를 업데이트 해줍니다.
- 방대한 생태계 기반 다양한 정보와 라이브러리 활용 가능
- 라이브러리에 최적화된 개발 인터페이스를 제공
- 손쉬운 컴포넌트 재사용성 및 라이브러리 자체 유연성, 호환성 뛰어납니다.



<br>

 `Typescript`

 - 안정적인 개발과 높은 수준의 코드 품질을 유지
 - 손쉽운 버그 예방
 - 강력한 타입 시스템 기반 컴파일, 버그 예방 및 손쉬운 디버깅
 - 높은 생산성과 호환성

<br>


`Styled Components`

- CSS 파일을 별도 관리할 필요없는 CSS-in-JS 방법
- CSS 컴포넌트화로 CSS 모델을 문서 레벨이 아닌 컴포넌트 레벨로 추상화. (모듈성 이점)
- JavaScript와 CSS 사이의 상수와 함수를 쉽게 공유 가능
- 유니크한 클래스를 자동으로 생성하기 때문에 코드 경량화 및 클래스 작명 고충 해소

<br>

`Vite`

- ES build를 사용해서 종속성을 미리 묶어 번들링 속도가 매우 빠릅니다.
- HMR(Hot Module Replacement)을 이용해 애플리케이션을 다시 시작하지 않고도 일부 컨텐츠만을 갱신.
   - 즉 소스코드 수정 시 번들링과정을 다시 거치는 것이 아닌 수정된 모듈 관련 부분만 교체 이후, 브라우저에서 해당 모듈을 요청하면 교체된 모듈을 전달.
- HTTP 헤더를 활용하여 전체 페이지의 로드 속도 향상 + 캐시 기능 제공


<br>

 `Redux`
 
- 코드의 유지보수성 향상
- 액션에 따른 모든 변경을 추적 가능
- 작업효율 극대화
- 편리하고 강력한 개발자도구 지원
- 매우 가볍습니다. (의존 라이브러리 포함 2kB)

<br>

 
 `react-hook-form`

- 제어 컴포넌트에서만 다룰 수 있는 실시간 유효성 검사 및 동기화를 비제어 컴포넌트 형식으로 제공.
- 제어 컴포넌트를 사용할 때 보다 훨씬 적은 코드로 더 나은 성능 제공.
- 비제어 컴포넌트 기반 리렌더링을 최소화 -> 마운팅 속도 향상.
- 종속성이 없는 경량 사이즈 라이브러리.
- 타입스크립트 기본 제공
- 공식문서가 정말 친절하게 설명되어있습니다. 
- 지속적인 업데이트

<br>

`React-Query`

- 타 라이브러리 대비 적은 양의 BoilerPlate -> 간편, 유지 보수 용이
- React Hooks과 유사한 인터페이스 제공
- 비동기 과정을 선언적으로 관리 가능
- 오래된 데이터 상태 파악 후 업데이트 가능 (캐싱 기능)
- 캐싱을 통해 애플리케이션 속도 향상 및 중복 데이터 요청 제거

<br>

 `Vercel`

- 정말 간편한 배포과정 
- 빌트인 CI/CD, Live Preview, Analytics, 사이트 성능 측정 제공

<br>
<br>
<br>

### 서비스 아키텍쳐


<br>
<br>





### Key Features

- **홈 화면** : 키워드 기반 검색, 카테고리 기반 검색 분류
- **상품조회** : 사용자가 선택한 상품 필터링 후 출력
- **상품조회 필터링** : Query-String 기반 날짜, 상품개수, 상품 가격 필더링 기능 구현
- **상품페이지 접속** : 조회된 상품 상세페이지 접속 가능
- **카테고리 리스트 렌더링** : 1차, 2차, 3차 카테고리별 동적 렌더링 구현
- **조회 데이터 엑셀다운로드** : 불러온 상품 관련 데이터를 엑셀파일로 저장 가능

  









<br>
<br>


## 화면 구성 및 주요 기능 시현 영상 및 설명

### 카테고리 컴포넌트 렌더링 로직 구현

- 1차, 2차, 3차 카테고리 컴포넌트 구현
- 상위 카테고리 값에 따라 하위 카테고리 컴포넌트 목록이 동적으로 달라지도록 구현
- 상위 -> 하위 카테고리 이동 시 해당 카테고리 값 화살표 아이콘 고정 표시
- 1차 카테고리 컴포넌트 hover -> 2차 카테고리 컴포넌트 렌더링, 2차 카테고리 컴포넌트 hover -> 3차 카테고리 컴포넌트 hover
- 2차 -> 1차 카테고리 hover 시 3차 카테고리 컴포넌트 unmount
- 카테고리 컨포넌트 영역 이탈 시 모든 컴포넌트 unmount

![카테고리컴포넌트구현](https://github.com/Keyword-Project/keyword_searcher_project_frontend/assets/122145341/28834772-431d-4b0a-96ef-0ef3b6111da2)

<br>

### input 숫자만 입력 가능

- 정규표현식을 활용해 숫자 외 값 입력시 공백으로 즉시 변환
- 자연수 외 값을 입력 후 데이터 조회 시 에러를 발생시키므로 에러 사전 차단

![input숫자만입력가능](https://github.com/Keyword-Project/keyword_searcher_project_frontend/assets/122145341/b01b710e-63b5-48ee-877b-984263346565)

<br>

### 기간, 상품개수, 상품 가격 선택 후 쿼리스트링으로 서버에 데이터 전달

<br>

### Tooltip 구현

- transition, transform 속성을 이용한 애니메이션 적용
- pseudo-element 를 활용해 툴팁 content 제작

![툴팁구현](https://github.com/Keyword-Project/keyword_searcher_project_frontend/assets/122145341/a50b520d-d141-4088-af94-4d9868d5883f)

<br>

### React Hook Form 활용 실시간 유효성 검증

- React Hook Form 을 통해 비제어 컴포넌트 형식으로 실시간 유효성 검증
- register, watch 함수를 이용해 실시간 input값 감시

![리액트훅폼유효성검증](https://github.com/Keyword-Project/keyword_searcher_project_frontend/assets/122145341/1fa06e0c-460a-4e0a-8461-d01139c02f5a)

<br>

### 데이터 엑셀 저장 기능

- CSVLink 라이브러리 활용 엑셀 다운로드 기능 구현

![엑셀다운로드](https://github.com/Keyword-Project/keyword_searcher_project_frontend/assets/122145341/91ad599c-4c21-4611-b17e-89712bceeafa)


![엑셀](https://github.com/Keyword-Project/keyword_searcher_project_frontend/assets/122145341/9f58dbbd-b709-42c6-9bf3-fe21a02666ab)


<br>

### 검색방법 및 가격 입력값에 따른 동적 Modal창을 이용한 구현 및 에러 핸들링

- createPortal을 이용해 Modal 창을 DOM의 다른 위치에서 렌더링 되도록 구현
- 부모 컴포넌트의 DOM 구조를 벗어나 특정 DOM 엘리먼트에 직접 렌더링

<br>

- 카테고리 미선택 시 알림창 렌더링
- 최소가격이 최대가격보다 클 경우 알림창 렌더링
- 최소가격 미입력, 최대가격이 10000보다 작을 경우 알림창 렌더링 

![카테고리에러핸들링](https://github.com/Keyword-Project/keyword_searcher_project_frontend/assets/122145341/4f8b302a-3fca-4ae0-b90e-bec7d8d8e827)

- 키워드 미입력시 알림창 렌더링
- 최소가격이 최대가격보다 클 경우 알림창 렌더링
- 최소가격 미입력, 최대가격이 10000보다 작을 경우 알림창 렌더링 


![키워드에러핸들링](https://github.com/Keyword-Project/keyword_searcher_project_frontend/assets/122145341/5064be35-ac00-4ab2-ab2d-47cede4f2f95)


<br>

### 버튼 클릭 시 애니메이션 구현

- 버튼 클릭 시 물파장 애니메이션 구현
- keyframes, pseudo-element 를 활용해 클릭 이벤트 발생 시 동적 애니메이션 구현

![버튼클릭시물파장](https://github.com/Keyword-Project/keyword_searcher_project_frontend/assets/122145341/b512b875-6d76-4173-85f5-076185ce520c)


<br>
<br>
<br>



## 트러블 슈팅

### 1. 카테고리 값 선택 방법 변경


- 드롭박스 ->  컴포넌트 hover 방식 (reference : [쿠팡](https://www.coupang.com/) )
- 드롭박스 UI는 너무 단조롭고 별도로 클릭해야하기에 사용자가 번거로움을 느낄 수 있다 판단해 hover 방식으로 리팩토링을 진행했습니다.
- onMouseOver, onMouseLeavee 등 커서 이벤트 관련 함수를 공부하며 새로운 기술적 도전을 이룩할 수 있었습니다. 

<br>

### 2. 쿼리스트링 기반 데이터 조회 가능

**문제점**

- 쿼리스트링으로 데이터조회필터링값이 전달되지만 해당 url을 복사 후 새창에서 열면 데이터를 불러오지않는 문제 발생
- 필터링값들을 쿼리스트링으로 전달하기만 할뿐 데이터를 불러오는 컴포넌트가 Result가 아닌 것이 문제
- 부모컴포넌트에서 데이터를 조회 한 후 props 로 전달하는 방식이라 생긴 문제

**해결방법**

- 상품조회 버튼 클릭시 필터링 값을 쿼리스트링으로 전달
- url파라미터 값이 변경되면 Result 컴포넌트가 재렌더링되도록 useEffect 의존성 배열에 쿼리스트링값을 넣어줬습니다. 

<br>

### 3. 비동기함수 호출 시 로딩창 변경

- spinner 컴포넌트 -> skeleton UI 변경
- BootStrap에서 가져온 `spinner` 컴포넌트를 로딩창으로 사용하다 너무 단조롭다 생각해 동적이미지인 `skeleton UI`를 도입하기로 했습니다. 
- 불러오는 데이터를 Table 형식으로 보여주는 것에 맞춰 커스터마이징한 `skeleton UI`를 제작하면서 가상요소에 대한 기술적 도전 및 학습하는 시간을 가졌습니다. 


<br>
<br>
<br>







