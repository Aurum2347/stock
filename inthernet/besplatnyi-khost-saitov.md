---
description: Хост "статичных" сайтов
icon: github
---

# Бесплатный хост сайтов

## Хостинг: платно или дорого?

Хостинги часто стоят денег, пусть и небольших. Но не каждый готов тратиться. Как быть, если нужен хостинг для теста сайта?

#### GitHub Pages — хостинг без затрат

GitHub — не только для кода и репозиториев. С помощью **GitHub Pages** можно бесплатно разместить сайт и быстро проверить его в деле.

### Шаг 1: Создание репозитория

{% hint style="info" %}
Если у вас ещё нет аккаунта на GitHub, сейчас идеальный момент его создать.
{% endhint %}

Создайте новый репозиторий на GitHub. Помните: название репозитория напрямую влияет на URL вашего сайта. Например, репозиторий `my-site` будет доступен по адресу `https://<ваш-логин>.github.io/my-site`.

<figure><img src="../.gitbook/assets/image (227).png" alt=""><figcaption></figcaption></figure>

Настоятельно советуем создать файл `ReadMe.md` — это упростит работу с проектом. Также обязательно выберите опцию **Public** при создании репозитория, иначе хостинг сайта через GitHub Pages не будет доступен.

<figure><img src="../.gitbook/assets/image (228).png" alt=""><figcaption></figcaption></figure>

### Шаг 2: Настрока публикации сайта

После создания репозитория перейдите в **Settings**. В меню слева найдите вкладку **Pages** — там настраивается хостинг для вашего сайта.

<figure><img src="../.gitbook/assets/image (229).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (230).png" alt=""><figcaption></figcaption></figure>

В разделе **Pages** вы увидите множество настроек, но сосредоточьтесь на подзаголовке **Branch**. \
Там выберите ветку, где лежит ваш сайт (по умолчанию стоит **None**). Установите **main** и нажмите **Save**, чтобы сохранить изменения.

<figure><img src="../.gitbook/assets/image (231).png" alt=""><figcaption></figcaption></figure>

### Шаг 3: Ссылка на сайт

Вернитесь на главную страницу вкладки **Code**. В правой части находится описание репозитория — найдите там значок **шестерёнки** для доступа к настройкам.

<figure><img src="../.gitbook/assets/image (232).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (233).png" alt=""><figcaption></figcaption></figure>

После нажатия на **шестерёнку** вы увидите поле для ввода описания репозитория. \
Рядом будет опция с галочкой:

* [ ] Use your GitHub Pages website

Поставьте галочку, чтобы показать ссылку на ваш сайт.

<figure><img src="../.gitbook/assets/image (234).png" alt=""><figcaption></figcaption></figure>

### Шаг 4: Загрузка файлов

Загрузите файл сайта в репозиторий через интерфейс GitHub, перетащив его в раздел **Code**.

{% hint style="warning" %}
**Важно**: Главная страница сайта всегда должна называться **index.html**.
{% endhint %}

<figure><img src="../.gitbook/assets/image (235).png" alt=""><figcaption></figcaption></figure>

### Шаг 5: У вас теперь есть сайт!

Примерно через минуту файл загрузится, и вы сможете перейти на сайт по ссылке в описании репозитория справа.

<figure><img src="../.gitbook/assets/image (236).png" alt=""><figcaption></figcaption></figure>
