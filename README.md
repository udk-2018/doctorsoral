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

치약 제품 사진과 교정관리 도구 사진을 포함합니다. 판매 링크는 별도 연결 예정입니다. 구강관리 콘텐츠와 제품 표시는 공식 공개 전에 최종 검토하세요.

## 페이지 구성 (2026-10-05)

- `index.html`: 메인 여정, 나이별 관리 입구, 교정·임플란트·임신·틀니 관리
- `toothpaste.html`: 치약 3종 소개
- `soft.html`, `balance.html`, `core.html`: 개별 치약 상세페이지
- `routine.html`: 별도 5루틴 실행 안내
- `care-system.html`: 구강 상태에 따른 관리 시스템
- `asset-*.png`: HTML에 포함됐던 제품·도구 사진을 분리한 원본 자산

현재 원고를 기준으로 한 검토용 변경입니다. 이 브랜치는 `main`과 분리되어 있습니다.
기존 메인 브랜치로 병합하면 Cloudflare Pages 자동 배포가 시작될 수 있습니다.

제품 정보는 공통 설명과 사용 예시를 구분하며, 관리 페이지에서 제품 상세페이지로 연결합니다.
교정관리 시기는 별도 역으로 나누지 않고 하나의 관리 페이지 안에서 설명합니다.

## 공개 수치 기준

제품 배합 수치는 불소 함량, 덴탈타입실리카(연마제) 함량, 제품 pH, 코어의 HAP 10%만 공개합니다.
그 밖의 성분별 배합률, 전체 배합표 및 내부 검토 메모를 HTML·스크립트·이미지에 포함하지 않습니다.
전성분 상세표와 향·매운맛 점수는 공개본에서 제외합니다. 코어 pH 7.3은 기획 기준이라는 기존 표기를 유지합니다.
