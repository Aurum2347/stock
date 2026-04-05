---
icon: crop
---

# Старый Roblox Studio

Новый «ленточный» интерфейс (в стиле Microsoft Office) в Roblox Studio многим не нравится: он громоздкий, медленный и мешает работать. Хорошая новость — его можно отключить. Ниже — пошаговая инструкция, как вернуть классический дизайн.

<div data-with-frame="true"><figure><img src="../.gitbook/assets/image (24).png" alt=""><figcaption></figcaption></figure></div>

{% hint style="warning" %}
<mark style="color:$warning;">⚠️</mark> <mark style="color:$warning;"></mark><mark style="color:$warning;">**Важно**</mark><mark style="color:$warning;">: это работает на момент 2025–2026 года. Если Roblox полностью уберёт старый интерфейс в будущем — флаг может перестать работать.</mark>
{% endhint %}

***

#### Шаг 1. Открой папку AppData

Нажми **Win + R**, введи `appdata` и нажми **Enter**.\
Откроется папка `AppData\Roaming`.

<div data-with-frame="true"><figure><img src="../.gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure></div>

***

#### Шаг 2. Найди папку Roblox (не Roblox Studio!)

В открывшемся проводнике зайди в:\
`..\.roblox\Versions`

> Обрати внимание: нужна именно папка **Roblox**, а не **Roblox Studio**, которая может быть ниже в списке.

{% columns fullWidth="true" %}
{% column %}
<div data-full-width="true" data-with-frame="true"><figure><img src="../.gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure></div>
{% endcolumn %}

{% column %}
<div data-full-width="true" data-with-frame="true"><figure><img src="../.gitbook/assets/image (27).png" alt=""><figcaption></figcaption></figure></div>
{% endcolumn %}
{% endcolumns %}

<div data-with-frame="true"><figure><img src="../.gitbook/assets/image (28).png" alt=""><figcaption></figcaption></figure></div>

***

#### Шаг 3. Найди исполняемый файл студии

В папке `Versions` будет много подпапок с цифробуквенными названиями. Чтобы не гадать — воспользуйся поиском:

1. В правом верхнем углу проводника в поле поиска введи: `RobloxStudioBeta.exe`
2. Дождись, пока Windows найдёт файл.
3. Кликни по нему **правой кнопкой мыши** → выбери **«Расположение файла»**.

{% columns fullWidth="true" %}
{% column %}
<div data-full-width="true" data-with-frame="true"><figure><img src="../.gitbook/assets/image (29).png" alt=""><figcaption></figcaption></figure></div>
{% endcolumn %}

{% column %}
<div data-full-width="true" data-with-frame="true"><figure><img src="../.gitbook/assets/image (30).png" alt=""><figcaption></figcaption></figure></div>
{% endcolumn %}
{% endcolumns %}

Теперь ты в папке, где лежит сама Roblox Studio.

***

#### Шаг 4. Создай папку ClientSettings

В этой папке (рядом с `RobloxStudioBeta.exe`) создай **новую папку** и назови её точно так:

```
ClientSettings
```

> Регистр букв важен! Должно быть именно `ClientSettings`, а не `clientsettings` или `ClientsSettings`.

<div data-with-frame="true"><figure><img src="../.gitbook/assets/image (33).png" alt=""><figcaption></figcaption></figure></div>

***

#### Шаг 5. Создай файл настроек

Внутри папки `ClientSettings` создай **новый текстовый документ** и назови его:

```
ClientAppSettings.json
```

Открой его любым текстовым редактором (Блокнот, Notepad++) и вставь внутрь **ровно эту строку**:

```json
{ "FFlagEnableRibbonPlugin3": "false" }
```

Сохрани файл и закрой.

> Убедись, что расширение именно `.json`, а не `.txt`. Если у тебя скрыты расширения — включи их в проводнике («Вид» → «Показать» → «Расширения имён файлов»).

<figure><img src="../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>

***

#### Шаг 6. Запусти Roblox Studio

Теперь запусти Roblox Studio как обычно.\
Если всё сделано правильно — интерфейс будет **старый, классический.**

<div data-with-frame="true"><figure><img src="../.gitbook/assets/image (35).png" alt=""><figcaption></figcaption></figure></div>

***

#### Что делать, если не сработало?

* Убедись, что путь правильный: файл должен лежать в той же папке, где `RobloxStudioBeta.exe`.
* Проверь опечатки в названии папки и файла.
* После обновления Roblox Studio папка `Versions` может смениться — тогда повтори шаги заново для новой версии.
