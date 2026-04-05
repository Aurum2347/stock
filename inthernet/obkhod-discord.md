---
description: 'Обход блокировок через DPI (Обновлено: 17.12.2025)'
icon: discord
---

# Zapret Discord Youtube - Обход блокировок

{% hint style="warning" %}
<mark style="color:$warning;">⚠️</mark> <mark style="color:$warning;"></mark><mark style="color:$warning;">**Важно:**</mark> <mark style="color:$warning;"></mark><mark style="color:$warning;">Решение работает</mark> <mark style="color:$warning;"></mark><mark style="color:$warning;">**только на Windows-ПК**</mark><mark style="color:$warning;">.</mark>\ <mark style="color:$warning;">На мобильных устройствах (Android/iOS) обход</mark> <mark style="color:$warning;"></mark><mark style="color:$warning;">**нестабилен**</mark><mark style="color:$warning;">, поддержки нет. Для iOS — только доверенные VPN.</mark>\ <mark style="color:$warning;">Мобильная версия будет описана в отдельной статье.</mark>
{% endhint %}

***

### Официальный источник <img src="../.gitbook/assets/image (80).png" alt="" data-size="line">

{% embed url="https://github.com/Flowseal/zapret-discord-youtube/releases/latest" %}

{% hint style="warning" %}
<mark style="color:orange;">**ФЕЙКИ**</mark>\
<mark style="color:$warning;">Разработчик</mark> <mark style="color:$warning;"></mark><mark style="color:$warning;">**не ведёт Telegram-, YouTube-каналы и группы**</mark><mark style="color:$warning;">.</mark>\ <mark style="color:$warning;">Любые «официальные» сборки, инструкции или «автоматические установщики» вне GitHub —</mark> <mark style="color:$warning;"></mark><mark style="color:$warning;">**фейки**</mark><mark style="color:$warning;">. Скачивайте</mark> <mark style="color:$warning;"></mark><mark style="color:$warning;">**только с репозитория выше**</mark><mark style="color:$warning;">.</mark>
{% endhint %}

***

## Быстрый запуск (инструкция) <img src="../.gitbook/assets/image (78).png" alt="" data-size="line">

1. **Включите Secure DNS**
   * **Windows 11**: `Параметры → Сеть → Ethernet/Wi-Fi → Аппаратное обеспечение → DNS-сервер → DNS через HTTPS → Вкл.` → выберите `Google (dns.google)`
   * **Firefox**: `Настройки → Сеть → DNS через HTTPS → Выбрать поставщика → Вручную → https://dns.google/dns-query`
   * **Chrome**: `Настройки → Конфиденциальность → Безопасный DNS → Использовать другой поставщик → Google`
2. **Скачайте последнюю версию**\
   → [https://github.com/Flowseal/zapret-discord-youtube/releases/latest](https://github.com/Flowseal/zapret-discord-youtube/releases/latest)
3. **Распакуйте в папку БЕЗ кириллицы, пробелов и спецсимволов**\
   Пример: `C:\zapret\` — **НЕ** `C:\Загрузки\zapret дискорд 2025!`
4. **Запустите `service.bat` от имени администратора**
   * Выберите:
     * `Switch ipset` → **`any`**
     * `Switch Game Filter` → **`enabled`**
   * Закройте окно
5. **Запустите один из файлов `general-ALT*.bat`** (рекомендуется `ALT2` или `ALT6`)
   * Иконка замка появится в системном трее — обход активен
6. **Проверьте доступность**:
   * Discord / Roblox / YouTube / Minecraft-серверы

{% hint style="info" %}
**Чтобы изменить настройки в `service.bat`, откройте его двойным кликом левой кнопкой мыши — появится окно терминала. Чтобы выбрать нужный пункт (например, «6. Switch Game Filter»), введите соответствующую цифру с клавиатуры и нажмите Enter. Сообщение «Press any key to continue...» означает «Нажмите любую клавишу».**
{% endhint %}

{% hint style="info" %}
<mark style="color:$info;">💡 Если не работает —</mark> <mark style="color:$info;"></mark><mark style="color:$info;">**попробуйте другой**</mark><mark style="color:$info;">**&#x20;**</mark><mark style="color:$info;">**`ALT`**</mark><mark style="color:$info;">. Стратегии со временем могут устаревать.</mark>
{% endhint %}

#### Пример настроеного `service.bat`

<figure><img src="../.gitbook/assets/image (75).png" alt=""><figcaption></figcaption></figure>

***

## Как починить Roblox <img src="../.gitbook/assets/image (76).png" alt="" data-size="line">

1.  Убедитесь, что в файле `lists/list-general.txt` есть домены:

    <pre data-expandable="true"><code>roblox.com
    www.roblox.com
    api.roblox.com
    abtesting.roblox.com
    accountinformation.roblox.com
    accountsettings.roblox.com
    adconfiguration.roblox.com
    ads.roblox.com
    assetdelivery.roblox.com
    auth.roblox.com
    avatar.roblox.com
    badges.roblox.com
    billing.roblox.com
    catalog.roblox.com
    chat.roblox.com
    chatmoderation.roblox.com
    clientsettings.roblox.com
    clientsettingscdn.roblox.com
    contacts.roblox.com
    contentstore.roblox.com
    develop.roblox.com
    economy.roblox.com
    economycreatorstats.roblox.com
    engagementpayouts.roblox.com
    followings.roblox.com
    friends.roblox.com
    gamepersistence.roblox.com
    gamejoin.roblox.com
    games.roblox.com
    gameinternationalization.roblox.com
    groups.roblox.com
    groupsmoderation.roblox.com
    inventory.roblox.com
    itemconfiguration.roblox.com
    locale.roblox.com
    localizationtables.roblox.com
    metrics.roblox.com
    midas.roblox.com
    notifications.roblox.com
    points.roblox.com
    premiumfeatures.roblox.com
    presence.roblox.com
    privatemessages.roblox.com
    publish.roblox.com
    search.roblox.com
    share.roblox.com
    textfilter.roblox.com
    thumbnails.roblox.com
    thumbnailsresizer.roblox.com
    trades.roblox.com
    translationroles.roblox.com
    translations.roblox.com
    twostepverification.roblox.com
    users.roblox.com
    usermoderation.roblox.com
    voice.roblox.com
    realtime.roblox.com
    ecsv2.roblox.com
    rbxcdn.com
    static.rbxcdn.com
    js.rbxcdn.com
    images.rbxcdn.com
    css.rbxcdn.com
    c0.rbxcdn.com
    c1.rbxcdn.com
    c2.rbxcdn.com
    c3.rbxcdn.com
    c4.rbxcdn.com
    c5.rbxcdn.com
    c6.rbxcdn.com
    c7.rbxcdn.com
    t0.rbxcdn.com
    t1.rbxcdn.com
    t2.rbxcdn.com
    t3.rbxcdn.com
    t4.rbxcdn.com
    t5.rbxcdn.com
    t6.rbxcdn.com
    t7.rbxcdn.com
    tr.rbxcdn.com
    robloxlabs.com
    blox.com
    goblox.com
    goblocks.com
    gooblox.com
    humancoexperience.com
    rblx.co
    rblx.com
    rbxlabs.com
    ro-blox.com
    roadblocks.com
    roblocks.com
    roblox.ca
    roblox.cc
    roblox.cl
    roblox.co.jp
    roblox.co.uk
    roblox.de
    roblox.dk
    roblox.eu
    roblox.fr
    roblox.hu
    roblox.it
    roblox.jp
    roblox.kr
    roblox.mx
    roblox.org
    roblox.ph
    roblox.pt
    roblox.sk
    roblox.tv
    roblox.uk
    roblox.us
    roblox.vn
    rowblocks.com
    rowblox.com
    </code></pre>
2. Если сайты Roblox не грузятся — замените `list-general.txt` на [актуальный список](https://t.me/aurums2347/1040)
3. Перезапустите выбранный `general-ALT*.bat`

### Актуальный список

{% file src="../.gitbook/assets/list-general.txt" %}

{% hint style="danger" %}
**Данный обход&#x20;**<mark style="color:$danger;">**НЕ ЧИНИТ**</mark> **чат в Roblox!**
{% endhint %}

***

## Как починить Minecraft (Hypixel, Minemen, европейские серверы) <img src="../.gitbook/assets/image (81).png" alt="" data-size="line">

{% hint style="danger" %}
<mark style="color:$danger;">⚠️</mark> <mark style="color:$danger;"></mark><mark style="color:$danger;">**Не используйте Cloudflare WARP**</mark> <mark style="color:$danger;"></mark><mark style="color:$danger;">— Hypixel может</mark> <mark style="color:$danger;"></mark><mark style="color:$danger;">**перманентно забанить**</mark> <mark style="color:$danger;"></mark><mark style="color:$danger;">за смену IP.</mark>
{% endhint %}

#### Правильный способ:

1. Откройте файл `general.bat` (или создайте копию: `minecraft-fix.bat`)
2.  Добавьте порт **25565** в параметр `--wf-tcp`:

    ```bat
    --wf-tcp=80,443,2053,2083,2087,2096,8443,25565,%GameFilter%
    ```
3.  Добавьте правило для TCP-фильтрации:

    ```bat
    --filter-tcp=25565 --ipset-exclude="%LISTS%ipset-exclude.txt" --dpi-desync-any-protocol=1 --dpi-desync-cutoff=n5 --dpi-desync=multisplit --dpi-desync-split-seqovl=582 --dpi-desync-split-pos=1 --dpi-desync-split-seqovl-pattern="%BIN%tls_clienthello_4pda_to.bin" --new ^
    ```
4.  Убедитесь, что в `lists/list-general.txt` есть:

    ```
    hypixel.net
    minemen.club
    mojang.com
    minecraft.net
    sessionserver.mojang.com
    api.mojang.com
    textures.minecraft.net
    ```
5. Запустите ваш `.bat`-файл от администратора.

***

### Как добавлять новые сервисы (Modrinth, ChatGPT, и др.)

1. Определите все домены сервиса (например, `modrinth.com`, `api.modrinth.com`)
2. Откройте файл:\
   `zapret-discord-youtube/lists/list-general.txt`
3. Добавьте домены **по одному на строку**
4. Сохраните файл в кодировке **UTF-8 без BOM** (Notepad++ / VS Code)
5. Перезапустите `general-ALT*.bat`

{% hint style="info" %}
<mark style="color:$primary;">📌 Подсказка: часто проблема в CDN (Cloudflare, Google). Добавляйте</mark> <mark style="color:$primary;"></mark><mark style="color:$primary;">**все поддомены**</mark><mark style="color:$primary;">.</mark>
{% endhint %}

***

## Часто задаваемые вопросы (FAQ) <img src="../.gitbook/assets/image (82).png" alt="" data-size="line">

#### ❓ Почему не меняется «Game Filter» или «Switch ipset»?

— Убедитесь, что вы распаковали архив и работаете **не из .zip**\
— Путь к папке не должен содержать **кириллицу, пробелы, спецсимволы**

#### ❓ После запуска ничего не происходит?

— Проверьте системный трей: должна появиться иконка **замка** (`winws.exe`)\
— Если нет — запустите `service.bat → Run Diagnostics`

#### ❓ Discord/YouTube работают, а Roblox — нет?

— Добавьте все домены Roblox в `list-general.txt` (см. раздел выше)

#### ❓ Minecraft подключается, но скины не грузятся?

— Добавьте `textures.minecraft.net` и `mojang.com` в `list-general.txt`

#### ❓ Можно ли использовать одновременно Zapret и VPN?

— **Нет.** Отключите все VPN, прокси, антивирусы с сетевой защитой.

#### ❓ Антивирус ругается на WinDivert?

— Это нормально. WinDivert — легитимный драйвер для перехвата трафика.\
— Добавьте папку `zapret` в исключения, либо временно отключите антивирус.

#### ❓ Где искать помощь?

— **Официальный трекер проблем:**

{% embed url="https://github.com/Flowseal/zapret-discord-youtube/issues" %}

— **Наш чат:**

{% embed url="https://t.me/aurums2347/1040" %}
