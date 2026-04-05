# Справка по синтаксис

**DOT** — это язык разметки для описания графов. Его понимает Graphviz и все онлайн-инструменты вроде GraphvizOnline. Один раз написал — получил красивую схему.

***

### 1. Основа: графы

Главное в DOT — это граф. Есть два типа:

* **Граф (graph)** — неориентированный, рёбра без стрелок.
* **Ориентированный граф (digraph)** — со стрелками, направлениями.

{% columns fullWidth="true" %}
{% column %}
```
graph G {      // неориентированный
  A -- B
}

digraph G {    // ориентированный
  A -> B
}
```
{% endcolumn %}

{% column %}
<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure></div>
{% endcolumn %}
{% endcolumns %}

> **digraph** используется чаще всего — для блок-схем, деревьев, зависимостей.

***

### 2. Узлы (вершины)

Узлы пишутся просто своими именами. Имена могут быть без кавычек, если без пробелов.

{% columns fullWidth="true" %}
{% column %}
```
digraph {
  A;
  B;
  C;
}
```
{% endcolumn %}

{% column %}
<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure></div>
{% endcolumn %}
{% endcolumns %}

Если имя содержит пробелы или спецсимволы — берём в кавычки:

```
"Узел 1";
"Узел-с-дефисом";
```

***

### 3. Рёбра (связи)

Соединяются узлы через `->` (для digraph) или `--` (для graph).

{% columns fullWidth="true" %}
{% column %}
```
graph G {      // неориентированный граф
  A -- B;        // связь без направления
  A -- B -- C;   // цепочка
  A -- {B C D};  // A связан с B, C и D
}
```
{% endcolumn %}

{% column %}
<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure></div>
{% endcolumn %}
{% endcolumns %}

Можно задавать направление:

```
A -> B [dir=both];     // стрелки в обе стороны
A -> B [dir=none];     // линия без стрелок
A -> B [dir=back];     // стрелка в обратную сторону
```

***

### 4. Атрибуты узлов и рёбер

Всё настраивается квадратными скобками после узла или ребра.

#### Для узлов

```
A [shape=box, color=red, style=filled, fillcolor=yellow];
```

<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure></div>

Самые частые атрибуты:

| Атрибут            | Что делает                             | Примеры значений                                                                    |
| ------------------ | -------------------------------------- | ----------------------------------------------------------------------------------- |
| `shape`            | форма узла                             | `box`, `circle`, `ellipse`, `diamond`, `Mdiamond`, `Msquare`, `record`, `plaintext` |
| `color`            | цвет линии                             | `red`, `blue`, `#FF00FF`                                                            |
| `fillcolor`        | цвет заливки                           | `lightgrey`, `yellow`                                                               |
| `style`            | стиль                                  | `filled`, `dashed`, `dotted`, `bold`, `rounded`                                     |
| `fontcolor`        | цвет текста                            | `black`, `white`                                                                    |
| `fontsize`         | размер шрифта                          | `12`, `14`, `16`                                                                    |
| `label`            | подпись (если нужно отличное от имени) | `label="Старт"`                                                                     |
| `width` / `height` | размер в дюймах                        | `0.5`, `1.0`                                                                        |

#### Для рёбер

```
A -> B [color=green, style=dashed, label="переход"];
```

<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure></div>

| Атрибут                   | Что делает                      | Примеры                                       |
| ------------------------- | ------------------------------- | --------------------------------------------- |
| `color`                   | цвет линии                      | `red`                                         |
| `style`                   | стиль линии                     | `dashed`, `dotted`, `bold`                    |
| `label`                   | подпись над стрелкой            | `label="да"`                                  |
| `fontcolor`               | цвет подписи                    | `blue`                                        |
| `dir`                     | направление стрелки             | `forward` (по умолч.), `back`, `both`, `none` |
| `arrowhead` / `arrowtail` | форма наконечника               | `normal`, `dot`, `box`, `crow`, `vee`         |
| `weight`                  | вес ребра (влияет на раскладку) | `1` (обычное), `10` (более "сильное")         |

***

### 5. Глобальные настройки

Можно задать атрибуты сразу для всех узлов или рёбер:

```
node [shape=box, style=filled, fillcolor=lightblue];
edge [color=gray, arrowhead=open];
```

<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (16).png" alt=""><figcaption></figcaption></figure></div>

Если потом нужно переопределить для конкретного — просто дописываешь свои скобки.

***

### 6. Кластеры (подграфы)

Кластеры — это группы узлов, которые визуально объединяются в рамку. Имя кластера **обязательно должно начинаться с `cluster_`**, иначе не сработает.

```
digraph G {
  subgraph cluster_0 {
    label = "Процесс 1";
    color = blue;
    style = filled;
    fillcolor = lightgrey;
    
    A -> B -> C;
  }
}
```

<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure></div>

Внутри кластера могут быть свои узлы и рёбра. Атрибуты кластера (рамка, фон, подпись) задаются как у обычного графа.

***

### 7. Записи (record-узлы)

Специальная форма узла `shape=record` позволяет делать сложные структуры с несколькими полями.

```
node [shape=record];
Запись [label="‹Имя› | ‹Возраст› | ‹Город›"];
```

<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure></div>

Поля разделяются вертикальной чертой `|`. Можно делать вложенность:

```
Сложная [label="{‹Данные› | {‹Левый› | ‹Правый›}}"];
```

<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure></div>

Для доступа к отдельному полю при связи используется `:`

```
Запись:Имя -> ДругойУзел;
```

<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (20).png" alt=""><figcaption></figcaption></figure></div>

***

### 8. Комментарии

Как в обычном коде:

```
// однострочный комментарий
# тоже однострочный (bash-style)
/* многострочный
   комментарий */
```

***

### 9. Полный пример с пояснениями

Вот тот самый пример с GraphvizOnline — разобранный по полочкам:

{% columns fullWidth="true" %}
{% column %}
```
digraph G {
  // Глобальные настройки узлов
  node [style=filled, fillcolor=white];

  // Кластер 1 — серый, залитый
  subgraph cluster_0 {
    style=filled;
    color=lightgrey;
    node [style=filled,color=white];  // внутри кластера узлы белые
    a0 -> a1 -> a2 -> a3;
    label = "process #1";
  }

  // Кластер 2 — с синей рамкой
  subgraph cluster_1 {
    node [style=filled];  // здесь узлы просто залитые
    b0 -> b1 -> b2 -> b3;
    label = "process #2";
    color=blue;
  }

  // Связи между кластерами и узлами
  start -> a0;
  start -> b0;
  a1 -> b3;
  b2 -> a3;
  a3 -> a0;
  a3 -> end;
  b3 -> end;

  // Особые формы для старта и конца
  start [shape=Mdiamond];
  end [shape=Msquare];
}
```


{% endcolumn %}

{% column %}
<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure></div>
{% endcolumn %}
{% endcolumns %}

***

### 10. Самые частые формы узлов

| Форма         | Как выглядит                     |
| ------------- | -------------------------------- |
| `box`         | прямоугольник                    |
| `circle`      | круг                             |
| `ellipse`     | эллипс (по умолчанию)            |
| `diamond`     | ромб                             |
| `Mdiamond`    | ромб побольше (для старта/конца) |
| `Msquare`     | квадрат                          |
| `record`      | запись с полями                  |
| `plaintext`   | просто текст без рамки           |
| `point`       | точка                            |
| `egg`         | яйцо                             |
| `triangle`    | треугольник                      |
| `invtriangle` | перевёрнутый треугольник         |

<details>

<summary>Демонстрация этой фигни</summary>

<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure></div>

</details>

***

### 11. Цвета

Можно использовать:

* **Имена** — `red`, `blue`, `green`, `yellow`, `lightgrey`, `darkorange`
* **HEX-коды** — `#FF0000` (красный), `#00FF00` (зелёный)
* **RGB** — `0.1 0.2 0.3` (редко)

***

### 12. Полезные советы

*   Если граф некрасиво рисуется — поиграй с `rankdir`:

    ```
    rankdir=LR;  // слева направо (по умолчанию TB — сверху вниз)
    rankdir=BT;  // снизу вверх
    ```
* Чтобы выровнять узлы по одной линии — используй `{rank=same; A B C}`
* Для больших графов помогает `splines=ortho` — линии только горизонтальные и вертикальные.

<div data-with-frame="true"><figure><img src="../../.gitbook/assets/image (23).png" alt=""><figcaption></figcaption></figure></div>

