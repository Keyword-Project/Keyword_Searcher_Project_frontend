from bs4 import BeautifulSoup


# html 파서로 추출되지 않은 더보기 영역 별도 추출하는 파서
# 3차카테고리 묶음별로 파싱해야한다. 
# ex. 뷰티(1차카테고리)에서 스킨케어(2차) 카테고리id와 스킨케어 카테고리의 하위 카테고리목록들(3차 카테고리)를 추출할 수 있는 코드
# 개발자 도구 element 영역 참고해서 추출할 것


# HTML 파일 로드
html_content = """
<li class="search-option-item 
                        
                        " data-linkcode="401489" data-isparent="Y" data-component-id="401389" data-campaign-id="" data-link-uri="/np/categories/401489">
                        <input type="radio" id="component401389" name="component" title="componentFilter" value="401389">
                        <label for="component401389" data-coulog="{&quot;logCategory&quot;:&quot;event&quot;, &quot;logType&quot;:&quot;click&quot;, &quot;logLabel&quot;:&quot;PLP&quot;, &quot;group&quot;:&quot;FILTER&quot;, &quot;section&quot;:&quot;category&quot;, &quot;sectionVal&quot;:&quot;&quot;, &quot;depth&quot;:&quot;1&quot;}" data-log-name="{&quot;log&quot;:&quot;click_maincategorymenu&quot;,&quot;group&quot;:&quot;category&quot;,&quot;event&quot;:&quot;click&quot;}">DVD/블루레이</label>
                    
                        
                            <a href="#" class="btn-fold on" data-category="category401389" data-category-depth="2depth" data-log-name="{&quot;log&quot;:&quot;click_arrowbutton_for_categorymenu&quot;,&quot;group&quot;:&quot;category&quot;,&quot;event&quot;:&quot;click&quot;}">열림</a>
                            <ul id="category401389" class="search-option-items-child" style="display: block;">
                
                    
                        <li class="search-option-item 
                             " data-linkcode="401490" data-component-id="401390" data-campaign-id="" data-link-uri="/np/categories/401490">
                            <input type="radio" id="component401390" name="component" title="componentFilter" value="401390">
                            <label for="component401390" data-coulog="{&quot;logCategory&quot;:&quot;event&quot;, &quot;logType&quot;:&quot;click&quot;, &quot;logLabel&quot;:&quot;PLP&quot;, &quot;group&quot;:&quot;FILTER&quot;, &quot;section&quot;:&quot;category&quot;, &quot;sectionVal&quot;:&quot;&quot;, &quot;depth&quot;:&quot;2&quot;}">장르별영화</label>

                        
                            
                                <a href="#" class="btn-fold" data-category="category401390" data-category-depth="3depth">열림</a>
                                <ul id="category401390" class="search-option-items-child"></ul>
                            
                        
                        </li>
                    
                
                    
                        <li class="search-option-item 
                             " data-linkcode="401506" data-component-id="401406" data-campaign-id="" data-link-uri="/np/categories/401506">
                            <input type="radio" id="component401406" name="component" title="componentFilter" value="401406">
                            <label for="component401406" data-coulog="{&quot;logCategory&quot;:&quot;event&quot;, &quot;logType&quot;:&quot;click&quot;, &quot;logLabel&quot;:&quot;PLP&quot;, &quot;group&quot;:&quot;FILTER&quot;, &quot;section&quot;:&quot;category&quot;, &quot;sectionVal&quot;:&quot;&quot;, &quot;depth&quot;:&quot;2&quot;}">교양/다큐멘터리</label>

                        
                            
                        
                        </li>
                    
                
                    
                        <li class="search-option-item 
                             " data-linkcode="401507" data-component-id="401407" data-campaign-id="" data-link-uri="/np/categories/401507">
                            <input type="radio" id="component401407" name="component" title="componentFilter" value="401407">
                            <label for="component401407" data-coulog="{&quot;logCategory&quot;:&quot;event&quot;, &quot;logType&quot;:&quot;click&quot;, &quot;logLabel&quot;:&quot;PLP&quot;, &quot;group&quot;:&quot;FILTER&quot;, &quot;section&quot;:&quot;category&quot;, &quot;sectionVal&quot;:&quot;&quot;, &quot;depth&quot;:&quot;2&quot;}">뮤직</label>

                        
                            
                                <a href="#" class="btn-fold" data-category="category401407" data-category-depth="3depth">열림</a>
                                <ul id="category401407" class="search-option-items-child"></ul>
                            
                        
                        </li>
                    
                
                    
                        <li class="search-option-item 
                             " data-linkcode="401512" data-component-id="401412" data-campaign-id="" data-link-uri="/np/categories/401512">
                            <input type="radio" id="component401412" name="component" title="componentFilter" value="401412">
                            <label for="component401412" data-coulog="{&quot;logCategory&quot;:&quot;event&quot;, &quot;logType&quot;:&quot;click&quot;, &quot;logLabel&quot;:&quot;PLP&quot;, &quot;group&quot;:&quot;FILTER&quot;, &quot;section&quot;:&quot;category&quot;, &quot;sectionVal&quot;:&quot;&quot;, &quot;depth&quot;:&quot;2&quot;}">한국TV드라마</label>

                        
                            
                        
                        </li>
                    
                
                    
                        <li class="search-option-item 
                             " data-linkcode="401513" data-component-id="401413" data-campaign-id="" data-link-uri="/np/categories/401513">
                            <input type="radio" id="component401413" name="component" title="componentFilter" value="401413">
                            <label for="component401413" data-coulog="{&quot;logCategory&quot;:&quot;event&quot;, &quot;logType&quot;:&quot;click&quot;, &quot;logLabel&quot;:&quot;PLP&quot;, &quot;group&quot;:&quot;FILTER&quot;, &quot;section&quot;:&quot;category&quot;, &quot;sectionVal&quot;:&quot;&quot;, &quot;depth&quot;:&quot;2&quot;}">해외TV드라마</label>

                        
                            
                        
                        </li>
                    
                
                    
                        <li class="search-option-item 
                             " data-linkcode="401514" data-component-id="401414" data-campaign-id="" data-link-uri="/np/categories/401514">
                            <input type="radio" id="component401414" name="component" title="componentFilter" value="401414">
                            <label for="component401414" data-coulog="{&quot;logCategory&quot;:&quot;event&quot;, &quot;logType&quot;:&quot;click&quot;, &quot;logLabel&quot;:&quot;PLP&quot;, &quot;group&quot;:&quot;FILTER&quot;, &quot;section&quot;:&quot;category&quot;, &quot;sectionVal&quot;:&quot;&quot;, &quot;depth&quot;:&quot;2&quot;}">유아동 교육</label>

                        
                            
                                <a href="#" class="btn-fold" data-category="category401414" data-category-depth="3depth">열림</a>
                                <ul id="category401414" class="search-option-items-child"></ul>
                            
                        
                        </li>
                    
                
                    
                        <li class="search-option-item 
                             " data-linkcode="401532" data-component-id="401432" data-campaign-id="" data-link-uri="/np/categories/401532">
                            <input type="radio" id="component401432" name="component" title="componentFilter" value="401432">
                            <label for="component401432" data-coulog="{&quot;logCategory&quot;:&quot;event&quot;, &quot;logType&quot;:&quot;click&quot;, &quot;logLabel&quot;:&quot;PLP&quot;, &quot;group&quot;:&quot;FILTER&quot;, &quot;section&quot;:&quot;category&quot;, &quot;sectionVal&quot;:&quot;&quot;, &quot;depth&quot;:&quot;2&quot;}">성인 교육</label>

                        
                            
                        
                        </li>
                    
                
                    
                        <li class="search-option-item 
                             " data-linkcode="401533" data-component-id="401433" data-campaign-id="" data-link-uri="/np/categories/401533">
                            <input type="radio" id="component401433" name="component" title="componentFilter" value="401433">
                            <label for="component401433" data-coulog="{&quot;logCategory&quot;:&quot;event&quot;, &quot;logType&quot;:&quot;click&quot;, &quot;logLabel&quot;:&quot;PLP&quot;, &quot;group&quot;:&quot;FILTER&quot;, &quot;section&quot;:&quot;category&quot;, &quot;sectionVal&quot;:&quot;&quot;, &quot;depth&quot;:&quot;2&quot;}">건강/취미/스포츠</label>

                        
                            
                                <a href="#" class="btn-fold" data-category="category401433" data-category-depth="3depth">열림</a>
                                <ul id="category401433" class="search-option-items-child"></ul>
                            
                        
                        </li>
                    
                
                    
                        <li class="search-option-item 
                             " data-linkcode="445858" data-component-id="445758" data-campaign-id="" data-link-uri="/np/categories/445858">
                            <input type="radio" id="component445758" name="component" title="componentFilter" value="445758">
                            <label for="component445758" data-coulog="{&quot;logCategory&quot;:&quot;event&quot;, &quot;logType&quot;:&quot;click&quot;, &quot;logLabel&quot;:&quot;PLP&quot;, &quot;group&quot;:&quot;FILTER&quot;, &quot;section&quot;:&quot;category&quot;, &quot;sectionVal&quot;:&quot;&quot;, &quot;depth&quot;:&quot;2&quot;}">방송/연예인굿즈</label>

                        
                            
                        
                        </li>
                    
                
                    
                        <li class="search-option-item 
                             " data-linkcode="401540" data-component-id="401440" data-campaign-id="" data-link-uri="/np/categories/401540">
                            <input type="radio" id="component401440" name="component" title="componentFilter" value="401440">
                            <label for="component401440" data-coulog="{&quot;logCategory&quot;:&quot;event&quot;, &quot;logType&quot;:&quot;click&quot;, &quot;logLabel&quot;:&quot;PLP&quot;, &quot;group&quot;:&quot;FILTER&quot;, &quot;section&quot;:&quot;category&quot;, &quot;sectionVal&quot;:&quot;&quot;, &quot;depth&quot;:&quot;2&quot;}">성인(19)</label>

                        
                            
                        
                        </li>
                    
                
            </ul>
                        
                    
                    </li>
"""

# BeautifulSoup 객체 생성
soup = BeautifulSoup(html_content, 'html.parser')

# 결과를 저장할 배열 초기화
categories = []

# 모든 'li' 태그를 찾아 반복 처리
for li in soup.find_all('li', class_='search-option-item'):
    # 'label' 태그의 텍스트 추출
    name = li.find('label').text.strip()
    # 'data-link-uri' 속성에서 마지막 6자리 숫자 추출
    link_uri = li.get('data-link-uri')
    category_id = link_uri[-6:]
    # 결과 배열에 객체 추가
    categories.append({'name': name, 'categoryId': category_id})

# 결과 출력
print(categories)