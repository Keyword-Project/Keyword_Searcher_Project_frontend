from bs4 import BeautifulSoup
import re

# html 변수에 할당하기
html = """<li class="car">
  <a
    href="/np/categories/184060"
    class="first-depth"
    data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
    >자동차용품<i class="select-icon"></i
  ></a>
  <div class="depth">
    <div class="depth-list banner third">
      <ul>
        <li class="second-depth-list">
          <a
            href="/np/categories/414817"
            data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
            >봄철 차량관리 <i class="depth-select-icon"></i
          ></a>
          <div class="third-depth-list">
            <ul>
              <li>
                <a
                  href="/np/categories/414818"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >세차용품</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/414833"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >공기정화용품</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/414838"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >유리 관리용품</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/414845"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >실내관리</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="second-depth-list">
          <a
            href="/np/categories/401027"
            data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
            >인테리어 <i class="depth-select-icon"></i
          ></a>
          <div class="third-depth-list">
            <ul>
              <li>
                <a
                  href="/np/categories/401028"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >방향제/공기청정</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497870"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >바닥매트/트렁크매트</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401035"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >시트/쿠션</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497873"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >차박매트</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401045"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >핸들용품</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497877"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >커버/몰딩</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401049"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >수납/정리용품</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/486490"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >편의용품/액세서리</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503231"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >햇빛가리개/썬팅</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="second-depth-list">
          <a
            href="/np/categories/401098"
            data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
            >익스테리어 <i class="depth-select-icon"></i
          ></a>
          <div class="third-depth-list">
            <ul>
              <li>
                <a
                  href="/np/categories/401103"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >스티커/앰블럼</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401106"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >문콕방지/몰딩</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401115"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >썬바이저</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401123"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >번호판스티커/프레임</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401120"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >안테나/볼</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401117"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >루프/캐리어용품</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503239"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >미러용품</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503240"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >주유구캡/혼유방지링</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="second-depth-list">
          <a
            href="/np/categories/401394"
            data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
            >세차/카케어 <i class="depth-select-icon"></i
          ></a>
          <div class="third-depth-list">
            <ul>
              <li>
                <a
                  href="/np/categories/401395"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >세차용품세트</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401396"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >카샴푸/세정제</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401401"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >타월/스펀지</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401413"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >세차호스/거품분사기</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401416"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >세차박스/스텝박스</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401412"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >물왁스/퀵디테일러</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401410"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >차량용청소기</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401406"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >먼지털이개</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503250"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >유리발수코팅제</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503251"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >실내세정제</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503252"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >흠집제거/복원</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503260"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >광택</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503267"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >바디커버</a
                >
              </li>
              <li class="more-category">
                <a href="/np/categories/401394">더보기</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="second-depth-list">
          <a
            href="/np/categories/401207"
            data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
            >차량용 전자기기 <i class="depth-select-icon"></i
          ></a>
          <div class="third-depth-list">
            <ul>
              <li>
                <a
                  href="/np/categories/503299"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >HUD/계기판</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497774"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >무선충전 거치대</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497775"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >일반거치대</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401212"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >차량용충전기</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401225"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >멀티소켓</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401214"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >블랙박스</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401217"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >하이패스</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401220"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >내비게이션</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401226"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >후방카메라/감지기</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401229"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >음향기기/AV</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/487217"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >차량용가전</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/510523"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >전기차 충전기/악세서리</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="second-depth-list">
          <a
            href="/np/categories/486447"
            data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
            >차량관리/소모품 <i class="depth-select-icon"></i
          ></a>
          <div class="third-depth-list">
            <ul>
              <li>
                <a
                  href="/np/categories/503246"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >와이퍼</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/486448"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >워셔액</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/486449"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >에어컨필터</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497749"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >엔진오일</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497753"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >첨가제</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497759"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >냉각수/부동액</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/509507"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >요소수</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/509508"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >초순수/정제수</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497767"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >기타 오일/필터</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497760"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >점프스타터</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497761"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >배터리용품</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503268"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >타이어/휠</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503284"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >스노우체인</a
                >
              </li>
              <li class="more-category">
                <a href="/np/categories/486447">더보기</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="second-depth-list">
          <a
            href="/np/categories/503300"
            data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
            >RV/아웃도어 <i class="depth-select-icon"></i
          ></a>
          <div class="third-depth-list">
            <ul>
              <li>
                <a
                  href="/np/categories/503301"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >캠핑용품</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503306"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >차박매트</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503307"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >인버터/멀티소켓</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503310"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >루프/캐리어용품</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="second-depth-list">
          <a
            href="/np/categories/497290"
            data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
            >부품/안전/공구 <i class="depth-select-icon"></i
          ></a>
          <div class="third-depth-list">
            <ul>
              <li>
                <a
                  href="/np/categories/497308"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >정전기방지용품</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497309"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >안전삼각대/소화기</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503314"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >방음재</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503317"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >차량용리프트</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503318"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >고임목/버팀목</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503319"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >카본/레자시트지</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503320"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >차량용접착제/테이프</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503321"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >차량용공구/장비</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503322"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >부품/튜닝용품</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503364"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >전기용품</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="second-depth-list">
          <a
            href="/np/categories/401438"
            data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
            >오토바이용품 <i class="depth-select-icon"></i
          ></a>
          <div class="third-depth-list">
            <ul>
              <li>
                <a
                  href="/np/categories/401439"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >오토바이/스쿠터</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401443"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >헬멧/고글</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401447"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >오토바이의류</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497791"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >오토바이장갑</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497794"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >오토바이부츠/잡화</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401462"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >오토바이보호장비</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/497799"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >배달가방/탑박스</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/503368"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >오토바이액세서리</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401472"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >오토바이부품/튜닝/정비</a
                >
              </li>
              <li>
                <a
                  href="/np/categories/401484"
                  data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
                  >오토바이전자기기</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li class="second-depth-list">
          <a
            href="/np/campaigns/10884"
            data-log-props='{ "id":"category_menu", "param":{"categoryLabel":"car"} }'
            >로켓설치 타이어
          </a>
          <div class="third-depth-list"><ul></ul></div>
        </li>
      </ul>
    </div>
  </div>
</li>
"""




# BeautifulSoup 객체 생성
soup = BeautifulSoup(html, 'html.parser')

# jsonData 객체 초기화
jsonData = {
    "firstCategories": []
}

# class 명이 first-depth인 a태그 찾기
first_depth_tags = soup.find_all('a', class_='first-depth')

for first_tag in first_depth_tags:
    first_name = first_tag.text.strip()
    first_categoryId = re.search(r'\d{6}$', first_tag['href']).group() if re.search(r'\d{6}$', first_tag['href']) else None
    
    first_category = {
        "name": first_name,
        "categoryId": first_categoryId,
        "secondCategories": []
    }
    
    parent_li = first_tag.find_parent('li')
    second_depth_lis = parent_li.find_all('li', class_='second-depth-list')
    
    for second_li in second_depth_lis:
        second_a = second_li.find('a', recursive=False)
        if second_a:
            second_name = second_a.text.strip()
            match = re.search(r'\d{6}$', second_a['href'])
            second_categoryId = match.group() if match else None
            
            second_category = {
                "name": second_name,
                "categoryId": second_categoryId,
                "thirdCategories": []
            }
            
            # third-depth-list 클래스를 가진 div 태그 내부의 a 태그들 처리
            third_depth_div = second_li.find('div', class_='third-depth-list')
            if third_depth_div:
                third_as = third_depth_div.find_all('a')
                for third_a in third_as:
                    third_name = third_a.text.strip()
                    third_match = re.search(r'\d{6}$', third_a['href'])
                    third_categoryId = third_match.group() if third_match else None
                    
                    third_category = {
                        "name": third_name,
                        "categoryId": third_categoryId
                    }
                    second_category["thirdCategories"].append(third_category)
            
            first_category["secondCategories"].append(second_category)
    
    jsonData["firstCategories"].append(first_category)

# 결과 출력
print(jsonData)

# 파싱 후 실제 쿠팡 카테고리목록과 일치하는지 확인할 것.
# 쿠팡 홈페이지 hover 카테고리 컴포넌트기준 '더보기' 이후로는 html에서 추출 불가. 
# 더보기 이후 카테고리들은 직접 추가해야한다.