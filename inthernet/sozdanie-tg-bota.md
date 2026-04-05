---
description: Делаем через ИИ на своём пк
icon: telegram
---

# Создание ТГ бота

Думаешь, создать телеграм бота — это сложно? А вот и нет. Сейчас с помощью ИИ любой может сделать своего бота буквально за 15-20 минут. Я сам так начинал, и сейчас покажу как избежать основных граблей.

### Что понадобится для старта

**1. Visual Studio Code** — главный инструмент где мы будем писать код. Не пугайся, там всё интуитивно понятно.

{% embed url="https://code.visualstudio.com/download" %}

**2. Python 3.12.8** — выбирай именно эту версию. Она стабильная и ИИ её отлично понимают.

{% embed url="https://www.python.org/downloads/release/python-3128/" %}

**3. Любой ИИ-помощник** — DeepSeek, ChatGPT или любой другой. Будет писать за нас код.

{% embed url="https://chat.deepseek.com/" %}

### Настраиваем окружение

После установки VS Code, первым делом зайди в раздел расширений (слева панель с кубиками) и установи все основные расширения для Python. Их там 3-4 штуки, ищешь по слову "Python" и ставишь те, у которых логотип Python.

<figure><img src="../.gitbook/assets/image (92).png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
**Важный момент с папкой проекта!**

Не создавай проект на Рабочем столе — это частая ошибка новичков. Почему? Потому что если путь будет типа `E:\Дмитрий\Рабочий стол\Python Бот`, то компилятор может сломаться из-за кириллицы и пробелов. Он увидит что-то вроде `E:\митрий\абочий стол\Python Бот` и выдаст ошибку.
{% endhint %}

Создай где-нибудь на диске простую папку без русских букв: `D:\python\bot_project` — и всё будет работать как часы.

### Создаем проект

{% columns %}
{% column %}
<figure><img src="../.gitbook/assets/image (94).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (95).png" alt=""><figcaption></figcaption></figure>
{% endcolumn %}

{% column %}
Открываешь VS Code, создаешь новый файл и называешь его `bot.py`. Всё, площадка для творчества готова.
{% endcolumn %}
{% endcolumns %}

### Пишем код через ИИ

Вот тут начинается магия. Идешь к своему ИИ-ассистенту и пишешь примерно такой запрос:

{% code title="Запрос ИИ" overflow="wrap" %}
```
Напиши мне 1 полноценный готовый код на python - бот для телеграмма, на тему: Генерация пароля. Код должен быть небольшой, простой. А так же укажи все нужные PIP Install
```
{% endcode %}

<figure><img src="../.gitbook/assets/image (96).png" alt=""><figcaption></figcaption></figure>

ИИ выдаст тебе готовый код. Копируешь его и вставляешь в свой `bot.py` файл.

<figure><img src="../.gitbook/assets/image (97).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (98).png" alt=""><figcaption></figcaption></figure>

### Устанавливаем зависимости

ИИ тебе напишет, какие библиотеки нужно установить. Обычно это что-то типа `pip install aiogram` или `pip install python-telegram-bot`.

<figure><img src="../.gitbook/assets/image (99).png" alt=""><figcaption></figcaption></figure>

(после написания команды не забудьте нажать **Enter**)

В VS Code открываешь терминал (сверху меню "Терминал" -> "Создать терминал") и вставляешь туда команды которые дал ИИ. Ждешь пока всё установится.

<figure><img src="../.gitbook/assets/image (100).png" alt=""><figcaption></figcaption></figure>

### Подключаем бота

Идешь в Telegram, находишь @BotFather и создаешь нового бота. Интерфейс на английском, но всё интуитивно понятно: пишешь `/newbot`, даешь имя, потом username.

{% columns fullWidth="true" %}
{% column %}
<figure><img src="../.gitbook/assets/image (102).png" alt=""><figcaption></figcaption></figure>
{% endcolumn %}

{% column %}
<figure><img src="../.gitbook/assets/image (103).png" alt=""><figcaption></figcaption></figure>
{% endcolumn %}
{% endcolumns %}



В конце получишь токен — длинную строку из цифр и букв. Это ключ доступа к твоему боту. Вставляешь этот токен в код туда, куда тебе скажет ИИ (обычно это строка в начале кода где написано `API_TOKEN = 'вставь_свой_токен_здесь'`).

<figure><img src="../.gitbook/assets/image (104).png" alt=""><figcaption></figcaption></figure>

### Запускаем и проверяем

Сохраняешь файл и в терминале пишешь команду `python bot.py`. Если всё сделано правильно — бот запустится.

Идешь в диалог с своим ботом, пишешь `/start` и получаешь свой первый сгенерированный пароль. Всё, бот работает!

<figure><img src="../.gitbook/assets/image (105).png" alt=""><figcaption></figcaption></figure>

Дальше можешь экспериментировать: просишь ИИ добавить новые функции, кнопки, меняешь логику. Принцип везде одинаковый.
