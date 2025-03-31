---
name: Bug report
about: 버그 발생 시 상세 정보를 작성하는 템플릿
title: ''
labels: ''
assignees: ''

---

#### **1) 버그 리포트 (Bug Report Template)**
```yaml
name: Bug Report
#### **1) 버그 리포트 (Bug Report Template)**
```yaml
name: Bug Report
description: 버그 발생 시 상세 정보를 작성하는 템플릿
title: "[Bug]: "
labels: [bug]
assignees: 

body:
  - type: textarea
    attributes:
      label: 문제 설명
      description: 발생한 문제를 자세히 설명해주세요.
    validations:
      required: true

  - type: textarea
    attributes:
      label: 재현 방법 (Steps to Reproduce)
      description: 버그를 재현하는 방법을 단계별로 작성해주세요.
      value: |
        1. ...
        2. ...
        3. ...
    validations:
      required: true

  - type: textarea
    attributes:
      label: 기대 결과 (Expected Behavior)
      description: 정상적으로 동작해야 할 예상 결과를 작성해주세요.
    validations:
      required: true

  - type: textarea
    attributes:
      label: 실제 결과 (Actual Behavior)
      description: 현재 발생한 문제를 설명해주세요.

  - type: textarea
    attributes:
      label: 환경 정보 (Environment)
      description: 실행 환경 (OS, 브라우저, 버전 등)을 적어주세요.

  - type: textarea
    attributes:
      label: 로그 및 스크린샷
      description: 오류 메시지 또는 관련 스크린샷을 첨부해주세요.
```
---
