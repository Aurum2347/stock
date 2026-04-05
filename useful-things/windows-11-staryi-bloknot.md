---
description: Гайд как вернуть старый блокнот
icon: memo-pad
---

# Windows 11 - Старый блокнот

### Шаг 1 — Проверьте, установлен ли классический «Блокнот»

Для этого откройте приложение **«Параметры»**, выберите раздел **«Система»** и прокрутите список вниз до пункта **«Дополнительные функции»**

<figure><img src="../.gitbook/assets/image (253).png" alt=""><figcaption></figcaption></figure>

В поле поиска потребуется ввести «Блокнот».

<figure><img src="../.gitbook/assets/image (254).png" alt=""><figcaption></figcaption></figure>

Если приложение не установлено, то требуется нажать **«Просмотр функций»** в меню **«Добавить дополнительную функцию»** вверху. После этого можно найти **«Блокнот»** и установить его.

### Шаг 2. Удалите связь notepad.exe с новым «Блокнотом»

Чтобы убедиться, что `notepad.exe` перенаправляется на старый «Блокнот», нужно внести изменения в псевдонимы выполнения приложений. Для этого потребуется:

* Щёлкнуть меню **«Приложения»** в **«Параметрах»**;
* Открыть **«Дополнительные параметры приложения»** и нажать **«Псевдонимы выполнения приложений»**;

<figure><img src="../.gitbook/assets/image (255).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (256).png" alt=""><figcaption></figcaption></figure>

Прокрутите страницу вниз до пункта **Store Notepad** и выключите соответствующий переключатель.

<figure><img src="../.gitbook/assets/image (257).png" alt=""><figcaption></figcaption></figure>

Теперь старый «Блокнот» стал приложением по умолчанию для `notepad.exe`.

{% hint style="info" %}
<mark style="color:$info;">**Проверка:**</mark>\ <mark style="color:$info;">Чтобы проверить это, откройте диалоговое окно</mark> <mark style="color:$info;"></mark><mark style="color:$info;">**«Выполнить»**</mark><mark style="color:$info;">, нажав комбинацию клавиш</mark> <mark style="color:$info;"></mark><mark style="color:$info;">**Win + R**</mark><mark style="color:$info;">. Затем введите команду</mark> <mark style="color:$info;"></mark><mark style="color:$info;">`notepad`</mark> <mark style="color:$info;"></mark><mark style="color:$info;">и нажмите</mark> <mark style="color:$info;"></mark><mark style="color:$info;">**«ОК»**</mark><mark style="color:$info;">.</mark>
{% endhint %}

<figure><img src="../.gitbook/assets/image (258).png" alt=""><figcaption></figcaption></figure>

### Шаг 3. Добавьте ассоциацию файла .txt к устаревшему «Блокноту»

Для этого потребуется:

1. Откройте диалоговое окно **«Выполнить»** (**Win + R**), введите `regedit` и нажмите **Enter**.

<figure><img src="../.gitbook/assets/image (259).png" alt=""><figcaption></figcaption></figure>

2. В окне **Контроля учётных записей** нажмите **«Да»**, разрешая приложению вносить изменения.
3.  В адресную строку редактора реестра скопируйте и вставьте следующий путь:

    ```
    HKEY_LOCAL_MACHINE\SOFTWARE\Classes\txtfilelegacy
    ```

    Нажмите **Enter** для перехода. В левой панели появится выделенная папка **`txtfilelegacy`**.

<figure><img src="../.gitbook/assets/image (260).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (261).png" alt=""><figcaption></figcaption></figure>

4. В левой панели разверните раздел `txtfilelegacy`. Щёлкните правой кнопкой мыши (ПКМ) по подразделу **`shell`**, выберите **«Создать»** → **«Раздел»**. Созданный раздел назовите **`Open`**.

<figure><img src="../.gitbook/assets/image (262).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (263).png" alt=""><figcaption></figcaption></figure>

5. Щёлкните ПКМ по только что созданному разделу **`Open`**, снова выберите **«Создать»** → **«Раздел»**. Этот новый подраздел назовите **`Command`**.

<figure><img src="../.gitbook/assets/image (264).png" alt=""><figcaption></figcaption></figure>

6. В правой панели выделите раздел **`Command`**. Дважды кликните на параметр **«(По умолчанию)»**.
7.  В открывшемся окне в поле **«Значение:»** введите:

    ```
    c:\windows\system32\notepad.exe "%1"
    ```

    Нажмите **«ОК»**.

<figure><img src="../.gitbook/assets/image (265).png" alt=""><figcaption></figcaption></figure>

**Результат:**\
Значение по умолчанию для ключа **`Command`** установлено на:

```
c:\windows\system32\notepad.exe "%1"
```

Теперь система будет открывать файлы с расширением `.txt` в классическом «Блокноте» (`notepad.exe`), передавая выбранный файл (`%1`) в качестве аргумента.

#### Готово

Настройка завершена. Классический «Блокнот» теперь является приложением по умолчанию для файлов `.txt` и команды `notepad`.

<figure><img src="../.gitbook/assets/image (266).png" alt=""><figcaption></figcaption></figure>

## Как вернуть новый «Блокнот»?

Тем, кто захочет отменить изменения, может потребоваться восстановить версию «Блокнота» по умолчанию в Windows 11.

Для этого нужно:

1.  Откройте **«Проводник»** и вставьте в адресную строку следующий путь:

    ```
    C:\ProgramData\Microsoft\Windows\Start Menu\Programs
    ```

    Это откроет системную папку «Программы», в которую был скопирован ярлык старого «Блокнота».
2. Найдите в этой папке ярлык **«Блокнот»** и удалите его.

<figure><img src="../.gitbook/assets/image (267).png" alt=""><figcaption></figcaption></figure>

3.  Нажмите **Win + R**, введите `regedit` и нажмите **Enter**. В адресной строке редактора реестра вставьте путь:

    ```
    HKEY_LOCAL_MACHINE\SOFTWARE\Classes\txtfilelegacy
    ```

    Перейдите в этот раздел, найдите и удалите подраздел **`Open`** (вместе со всем его содержимым, включая `Command`).
4. Откройте приложение **«Параметры»**, перейдите в раздел **«Приложения»** → **«Дополнительные параметры приложения»** и выберите **«Псевдонимы выполнения приложений»**. Найдите пункт **«Блокнот (Store Notepad)»** и включите его переключатель.

#### **Источник:**

Инструкция и скриншоты подготовлены на основе материала с Хабра:&#x20;

{% embed url="https://habr.com/ru/news/889504/" %}
