# codestates-fe-advanced-course

# 1. 완성된 GIF 파일 및 배포 링크
![SimplePost](https://user-images.githubusercontent.com/30408952/182545822-d6b25f94-a9a2-43b3-8fcd-f0287fe29786.gif)


배포 링크 : https://vercel.com/yomae/codestates-fe-advanced-course

# 2. 프로젝트 실행 방법

npm run dev로 실행이 가능합니다. 

# 3. 사용한 스택 목록

React, Next.js, Axios, styled-Components와 디자인 부분은 antd를 사용했습니다.

# 4. 구현한 기능 목록

- 100개의 포스트 데이터 렌더링 (페이지네이션)
- 각 게시물 클릭 시 상세페이지로 이동 -> 게시물 + 코멘트 5개
- 상세페이지 뒤로가기 기능의 버튼

# 5. 구현 방법 혹은 구현하면서 어려웠던 점
- SSR 방식을 사용해볼 때 간편하게 적용할수 있고 동적 라우팅 기능도 편해서 Next.js를 사용해 보았습니다. (+Vercel 배포 또한 편리)
- useState를 사용하지 않고, Next.js의 getServerSideProps를 활용했습니다.
- 미리 SSR을 통해 흰 화면 없이 바로 렌더링이 됩니다.
- 페이지네이션의 경우, antd의 List -> pagination을 활용하여 한번에 처리했습니다.
- 위 과제와 같은 작은 규모의 프로젝트는 이런 식으로 SSR을 활용할 때 CSR보다 약간 느린 느낌이 있지만, 
  향후에 큰 규모의 프로젝트를 진행할 때에 도움이 될 것 같아서 미리 경험해보고 있는 중입니다.
