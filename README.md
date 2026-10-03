# 닥터스 · DOCTORS 홈페이지

닥터스 브랜드, 라이프 오럴 맵, 닥터스 쉴드 치약, 칫솔·구강관리 도구와 관리 가이드의 공식 정보 사이트입니다.

## Cloudflare Pages 연결

- 저장소: `udk-2018/doctorsoral`
- 배포 브랜치: `main`
- 프레임워크: `None`
- 빌드 명령: `node build-site.mjs`
- 빌드 결과 디렉터리: `dist`
- 루트 디렉터리: 저장소 루트

Cloudflare Pages가 제공하는 `CF_PAGES_URL`로 canonical, 구조화 데이터, robots.txt와 sitemap.xml의 주소를 생성합니다.
최종 도메인을 연결할 때 환경 변수 `SITE_URL`을 `https://최종도메인`으로 설정하고 재배포하세요.

## 수정

저장소 루트의 HTML·CSS·JavaScript와 이미지를 수정하고 저장소에 반영합니다.
Git 연동을 설정하면 Cloudflare Pages가 변경 내용을 빌드해 배포합니다.
별도의 npm 패키지는 필요하지 않습니다.

## 로컬 확인

```sh
SITE_URL=http://localhost:8080 node build-site.mjs
python3 -m http.server 8080 --directory dist
```

제품 사진·판매 링크는 추가 예정입니다. 구강관리 콘텐츠와 제품 표시는 공식 공개 전에 최종 검토하세요.
