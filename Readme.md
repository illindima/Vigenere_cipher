### Лабораторная работа #2!!
#### Криптоанализ шифра Виженера
##### Ильин Дмитрий, ФБ - 63.

Для работы программы необходим дистрибутив [Node.js](https://nodejs.org/en/download/) .

```sh
$ git clone https://github.com/illindima/Vigenere_cipher
$ cd src
$ node index
```
---
Файл ***src/index.js***  является точкой входа в приложение в котором можно посмотреть интерфейс API для работы шифрования и дешифрования текста.

В папке ***text/\*.txt*** храняться весь необходимый текст

##### Вариант №6
##### Длина ключа: 17
##### Ключ: возвращениеджинна


#### Обчислені значення індексів відповідності для вказаних значень r
--
R = 2  `0.04544665997573402`
R = 3  `0.038180269893569097`
R = 4  `0.03834304142033927`
R = 5  `0.03608987034520983`
R = 10 `0.034827442695616516`
R = 20 `0.03272706852894016`


Period
Compliance index
--
2 - 0.035541392  
3 - 0.035506481  
4 - 0.035206993  
5 - 0.035530223  
6 - 0.035795251  
7 - 0.035832231  
8 - 0.03408209  
9 - 0.035925721  
10 - 0.035023691  
11 - 0.034631722  
12 - 0.035333518  
13 - 0.035208981  
14 - 0.035636461  
15 - 0.036764989  
16 - 0.033925015  
17 - 0.055232522  

Частоты букв по блокам в которых ключ не был восстановленный

{ 'а': 32,
  'б': 0,
  'в': 19,
  'г': 7,
  'д': 14,
  'е': 29,
  'ж': 7,
  'з': 12,
  'и': 24,
  'й': 5,
  'к': 13,
  'л': 23,
  'м': 16,
  'н': 14,
  'о': 40,
  'п': 11,
  'р': 19,
  'с': 40,
  'т': 27,
  'у': 11,
  'ф': 0,
  'х': 3,
  'ц': 1,
  'ч': 6,
  'ш': 1,
  'щ': 4,
  'ъ': 0,
  'ы': 5,
  'ь': 7,
  'э': 2,
  'ю': 2,
  'я': 9 }
Key number: 14 [ 'о', 'с', 'а', 'е', 'т' ]

--

{ 'а': 37,
  'б': 3,
  'в': 17,
  'г': 5,
  'д': 12,
  'е': 39,
  'ж': 5,
  'з': 10,
  'и': 33,
  'й': 9,
  'к': 15,
  'л': 15,
  'м': 20,
  'н': 29,
  'о': 32,
  'п': 14,
  'р': 18,
  'с': 20,
  'т': 27,
  'у': 11,
  'ф': 2,
  'х': 1,
  'ц': 3,
  'ч': 4,
  'ш': 2,
  'щ': 2,
  'ъ': 1,
  'ы': 13,
  'ь': 0,
  'э': 1,
  'ю': 1,
  'я': 2 }
Key number: 16 [ 'е', 'а', 'и', 'о', 'н' ]