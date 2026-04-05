---
icon: pickaxe
---

# Seed Map - Просмотр карты

Если ты играешь в Minecraft и хоть раз задавался вопросами вроде:\
&#xNAN;_«Где крепость?»_, _«А деревня где-то рядом?»_, _«Может, тут есть храм?»_ —\
то **Seed Map** от Chunkbase — это то, что сэкономит тебе часы бессмысленного брожения.

{% embed url="https://www.chunkbase.com/apps/seed-map" %}

<div data-with-frame="true"><figure><img src="../.gitbook/assets/image (36).png" alt=""><figcaption></figcaption></figure></div>

{% embed url="https://www.chunkbase.com/apps/seed-map" %}

***

#### Зачем это нужно?

Minecraft генерирует мир по математической формуле. Если ты знаешь сид — ты можешь предсказать, что и где будет. Seed Map делает эту информацию наглядной: вместо формул — карта с иконками.

***

{% embed url="https://www.chunkbase.com/apps/seed-map" %}

#### Как начать

1. [**Зайди на сайт**](https://www.chunkbase.com/apps/seed-map)
2. **Введи сид**\
   Сид можно узнать командой `/seed` в игре (если у тебя одиночная игра или права на сервере).\
   Или загрузи файл `level.dat` из папки сохранения через кнопку _«Load from Save…»_.
3. **Выбери версию Minecraft**\
   Очень важно! Мир, созданный в 1.16, будет отличаться от 1.21. Укажи ту версию, на которой был **создан** нужный участок.
4. **Выбери измерение**:
   * **Overworld** — основной мир
   * **Nether** — ад
   * **End** — конец

<div data-with-frame="true"><figure><img src="../.gitbook/assets/image (37).png" alt=""><figcaption></figcaption></figure></div>

***

#### Что можно включить

Слева над картой — панель с иконками. Кликни по любой, чтобы включить отображение:

* 🏘️ **Villages** — деревни
* 🏰 **Strongholds** — крепости
* ⛏️ **Mineshafts** — шахты
* 🏯 **Temples** — храмы (пустынные, джунглевые)
* 🧪 **Amethyst Geodes** — аметистовые жеоды
* 💎 **Slime Chunks** — чанки, где может спавниться слизь
* 🌍 **Biomes** — цветная карта биомов
* 📍 **Spawn Point** — точка возрождения

> Некоторые объекты появляются только при достаточном приближении.

<div data-with-frame="true"><figure><img src="../.gitbook/assets/image (39).png" alt=""><figcaption></figcaption></figure></div>

***

#### Как пользоваться картой

* **Колёсико мыши** — приближать/отдалять.
* **Левый клик по иконке** — откроется окно с координатами X и Z.\
  Рядом — кнопка **Copy**, которая копирует команду:\
  `/tp 137 ~ 921`\
  (вставь в чат Minecraft — и окажешься рядом с объектом).
* **Правый клик на карте** — поставит красную точку и заполнит поля X/Z внизу.
* **Поля X и Z под картой** — можно ввести координаты вручную, чтобы перейти к нужному месту.

<div data-with-frame="true"><figure><img src="../.gitbook/assets/image (40).png" alt=""><figcaption></figcaption></figure></div>

***

#### Полезные мелочи

* **Terrain mode** (под картой) — переключает отображение с биомов на рельеф. Особенно актуально для версий 1.18+, где берега могут не совпадать с цветом.

<div data-with-frame="true"><figure><img src="../.gitbook/assets/image (41).png" alt=""><figcaption></figcaption></figure></div>

* **Mark as found** — галочка в окне с координатами. Отмеченные структуры становятся полупрозрачными, чтобы не путать с новыми.

<div data-with-frame="true"><figure><img src="../.gitbook/assets/image (42).png" alt=""><figcaption></figcaption></figure></div>

* Все отметки хранятся **только в браузере** — если очистишь данные, они исчезнут.

{% hint style="warning" %}
#### <mark style="color:$warning;">Что стоит учитывать</mark>

* <mark style="color:$info;">**Не все структуры 100% точны**</mark><mark style="color:$info;">. Особенно в Bedrock Edition: города Энда, золотые яблоки могут не сгенерироваться даже там, где показаны.</mark>
* <mark style="color:$info;">**Координаты X/Z — центр чанка**</mark><mark style="color:$info;">, а не самой структуры. Например, руины портала могут быть смещены на 10–20 блоков.</mark>
* <mark style="color:$info;">**Высота (Y) почти никогда не указана**</mark> <mark style="color:$info;"></mark><mark style="color:$info;">— для подземных объектов её нужно искать вручную.</mark>
* <mark style="color:$info;">**Не работает с модами**</mark><mark style="color:$info;">, которые меняют генерацию мира.</mark>
{% endhint %}
