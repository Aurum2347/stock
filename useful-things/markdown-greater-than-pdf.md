---
description: Да, сайт написан мною + ИИ
icon: markdown
---

# MarkDown -> PDF

Если вы часто работаете с Markdown и вам нужно преобразовывать его в PDF, то, скорее всего, сталкивались с кучей неудобных сервисов. Одни требуют подписку после первого использования, другие заваливают рекламой. Я решил, что можно сделать лучше – и написал собственный инструмент, который делает именно то, что нужно.

{% embed url="https://aurum2347.github.io/m2p/" %}

## Основной функционал

### 1. Гибкость в настройке шрифтов

Вы можете менять шрифт как основного текста, так и кода, а также настраивать размер текста.

<figure><img src="../.gitbook/assets/image (125).png" alt=""><figcaption></figcaption></figure>

**Готовые шрифты для текста:**

* Cascadia Mono    ![](<../.gitbook/assets/image (126).png>)
* Arial   ![](<../.gitbook/assets/image (127).png>)
* Inter    ![](<../.gitbook/assets/image (128).png>)
* Montserrat  ![](<../.gitbook/assets/image (129).png>)
* Times New Roman   ![](<../.gitbook/assets/image (130).png>)

**Шрифты для кода:**

* Cascadia Mono    ![](<../.gitbook/assets/image (131).png>)
* Courier New   ![](<../.gitbook/assets/image (132).png>)
* Consolas   ![](<../.gitbook/assets/image (133).png>)
* Monaco    ![](<../.gitbook/assets/image (134).png>)

Если стандартные варианты вам не подходят, можно загрузить свой шрифт. Однако учтите, что иногда могут быть небольшие ошибки в отображении.

<figure><img src="../.gitbook/assets/image (135).png" alt=""><figcaption></figcaption></figure>

### 2. Удобное переименование файлов

Перед скачиванием PDF можно задать нужное название прямо в окне предпросмотра, а не переименовывать файл после скачивания. Мелочь, а приятно.

<figure><img src="../.gitbook/assets/image (136).png" alt=""><figcaption></figcaption></figure>

### 3. Поддержка Markdown, LaTeX и DOT

#### **Markdown**

Думаю, объяснять не нужно – стандартный Markdown работает без проблем.

<figure><img src="../.gitbook/assets/image (137).png" alt=""><figcaption></figcaption></figure>

#### **DOT (блок-схемы) \[пока что не работает]**

Если вы читали мою другую статью про блок-схемы, то знаете, что существует язык DOT, который позволяет генерировать диаграммы. Я добавил поддержку этого формата, так что теперь можно писать блок-схемы прямо в документе, и они корректно отобразятся в итоговом PDF.

<figure><img src="../.gitbook/assets/image (138).png" alt=""><figcaption></figcaption></figure>
